(function () {
    'use strict';

    var LS_SRS_KEY = 'sat_srs_state';
    var LS_CUSTOM_KEY = 'customCards';
    var LS_SESSION_KEY = 'sat_last_session';
    var LS_STREAK_KEY = 'sat_streak';
    var NEW_CARDS_PER_DAY = 15;
    var MAX_INTERVAL = 30;

    function today() {
        return new Date().toISOString().slice(0, 10);
    }

    function loadSRS() {
        var raw = localStorage.getItem(LS_SRS_KEY);
        return raw ? JSON.parse(raw) : {};
    }

    function saveSRS(state) {
        localStorage.setItem(LS_SRS_KEY, JSON.stringify(state));
    }

    function loadCustomCards() {
        var raw = localStorage.getItem(LS_CUSTOM_KEY);
        return raw ? JSON.parse(raw) : [];
    }

    function saveCustomCards(cards) {
        localStorage.setItem(LS_CUSTOM_KEY, JSON.stringify(cards));
    }

    function loadSession() {
        var raw = localStorage.getItem(LS_SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    }

    function saveSession(session) {
        localStorage.setItem(LS_SESSION_KEY, JSON.stringify(session));
    }

    function loadStreak() {
        var raw = localStorage.getItem(LS_STREAK_KEY);
        return raw ? JSON.parse(raw) : { count: 0, lastDate: null };
    }

    function saveStreak(streak) {
        localStorage.setItem(LS_STREAK_KEY, JSON.stringify(streak));
    }

    function getAllCards() {
        return CARDS.concat(loadCustomCards());
    }

    // SRS Logic
    function getDueCards(srsState, allCards) {
        var t = today();
        return allCards.filter(function (card) {
            var s = srsState[card.id];
            return s && s.nextReview <= t;
        });
    }

    function getNewCards(srsState, allCards) {
        return allCards.filter(function (card) {
            return !srsState[card.id];
        });
    }

    function buildStudyQueue(srsState, allCards) {
        var due = getDueCards(srsState, allCards);
        var unseen = getNewCards(srsState, allCards);
        var newToday = unseen.slice(0, NEW_CARDS_PER_DAY);
        return due.concat(newToday);
    }

    function markCorrect(srsState, cardId) {
        var s = srsState[cardId] || { interval: 1, easiness: 2.5, nextReview: today(), timesCorrect: 0, timesWrong: 0 };
        s.interval = Math.min(Math.round(s.interval * s.easiness), MAX_INTERVAL);
        s.easiness = Math.min(s.easiness + 0.1, 4.0);
        var d = new Date();
        d.setDate(d.getDate() + s.interval);
        s.nextReview = d.toISOString().slice(0, 10);
        s.timesCorrect++;
        srsState[cardId] = s;
        return srsState;
    }

    function markIncorrect(srsState, cardId) {
        var s = srsState[cardId] || { interval: 1, easiness: 2.5, nextReview: today(), timesCorrect: 0, timesWrong: 0 };
        s.interval = 1;
        s.easiness = Math.max(s.easiness - 0.2, 1.3);
        var d = new Date();
        d.setDate(d.getDate() + 1);
        s.nextReview = d.toISOString().slice(0, 10);
        s.timesWrong++;
        srsState[cardId] = s;
        return srsState;
    }

    // Screen routing
    function showScreen(id) {
        document.querySelectorAll('.screen').forEach(function (el) {
            el.style.display = 'none';
        });
        document.getElementById(id).style.display = 'block';
    }

    // Shuffle array (Fisher-Yates)
    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a;
    }

    // Dashboard
    function renderDashboard() {
        showScreen('screen-dashboard');
        var srsState = loadSRS();
        var allCards = getAllCards();
        var queue = buildStudyQueue(srsState, allCards);

        document.getElementById('stat-due').textContent = queue.length;
        document.getElementById('btn-study').textContent = 'Study Now (' + queue.length + ' cards due)';

        var session = loadSession();
        if (session && session.total > 0) {
            document.getElementById('stat-accuracy').textContent = Math.round((session.correct / session.total) * 100) + '%';
        } else {
            document.getElementById('stat-accuracy').textContent = '—';
        }

        var streak = loadStreak();
        document.getElementById('stat-streak').textContent = streak.count;

        renderProgress(srsState, allCards);
    }

    function renderProgress(srsState, allCards) {
        var categories = { vocabulary: { correct: 0, total: 0 }, grammar: { correct: 0, total: 0 }, reading: { correct: 0, total: 0 } };

        allCards.forEach(function (card) {
            var cat = card.category === 'roots' ? 'vocabulary' : (card.category === 'writing' ? 'grammar' : card.category);
            if (!categories[cat]) return;
            var s = srsState[card.id];
            if (s) {
                categories[cat].correct += s.timesCorrect;
                categories[cat].total += s.timesCorrect + s.timesWrong;
            }
        });

        Object.keys(categories).forEach(function (cat) {
            var data = categories[cat];
            var pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            document.getElementById('prog-' + cat).style.width = pct + '%';
            document.getElementById('pct-' + cat).textContent = pct + '%';
        });
    }

    // Study Mode
    var studyQueue = [];
    var studyIndex = 0;
    var sessionStats = { correct: 0, total: 0, newCards: 0 };

    function startStudy() {
        var srsState = loadSRS();
        var allCards = getAllCards();
        studyQueue = shuffle(buildStudyQueue(srsState, allCards));
        studyIndex = 0;
        sessionStats = { correct: 0, total: 0, newCards: 0 };

        if (studyQueue.length === 0) {
            alert('No cards due today. Come back tomorrow!');
            return;
        }

        showScreen('screen-study');
        document.getElementById('study-session-end').style.display = 'none';
        document.querySelector('.study-header').style.display = 'flex';
        document.querySelector('.card-body').style.display = 'block';
        document.getElementById('study-choices').style.display = 'flex';
        showCard();
    }

    function showCard() {
        if (studyIndex >= studyQueue.length) {
            showSessionEnd();
            return;
        }

        var card = studyQueue[studyIndex];
        var srsState = loadSRS();
        var isNew = !srsState[card.id];
        if (isNew) sessionStats.newCards++;

        if (isNew) {
            srsState[card.id] = { interval: 1, easiness: 2.5, nextReview: today(), timesCorrect: 0, timesWrong: 0 };
            saveSRS(srsState);
        }

        document.getElementById('study-category').textContent = card.category.toUpperCase();
        document.getElementById('study-subcategory').textContent = card.subcategory || '';
        document.getElementById('study-counter').textContent = 'Card ' + (studyIndex + 1) + ' of ' + studyQueue.length;
        document.getElementById('study-question').textContent = card.question;
        document.getElementById('study-context').textContent = card.context || '';
        var showHint = document.getElementById('chk-show-hint').checked;
        document.getElementById('study-context').style.display = (card.context && showHint) ? 'block' : 'none';

        var options = shuffle([card.correct].concat(card.wrong));
        var buttons = document.querySelectorAll('.choice-btn');
        buttons.forEach(function (btn, i) {
            btn.textContent = String.fromCharCode(65 + i) + '. ' + options[i];
            btn.dataset.value = options[i];
            btn.className = 'choice-btn';
            btn.disabled = false;
        });

        document.getElementById('study-explanation').style.display = 'none';
    }

    function handleChoice(e) {
        var btn = e.target.closest('.choice-btn');
        if (!btn || btn.disabled) return;

        var card = studyQueue[studyIndex];
        var selected = btn.dataset.value;
        var isCorrect = selected === card.correct;

        sessionStats.total++;
        if (isCorrect) sessionStats.correct++;

        document.querySelectorAll('.choice-btn').forEach(function (b) {
            b.disabled = true;
            b.classList.add('disabled');
            if (b.dataset.value === card.correct) {
                b.classList.add('correct');
            } else if (b === btn && !isCorrect) {
                b.classList.add('wrong');
            } else {
                b.classList.add('dimmed');
            }
        });

        var panel = document.getElementById('study-explanation');
        panel.querySelector('.explanation-right').textContent = card.explanation.right;

        var trapsEl = panel.querySelector('.explanation-traps');
        if (Array.isArray(card.explanation.traps) && card.explanation.traps.length > 0) {
            trapsEl.innerHTML = card.explanation.traps.map(function (t) {
                return '<p>• ' + escapeHtml(t) + '</p>';
            }).join('');
        } else {
            trapsEl.innerHTML = '';
        }

        panel.querySelector('.explanation-hook').textContent = card.explanation.hook || '';
        panel.style.display = 'block';
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function handleGotIt() {
        var card = studyQueue[studyIndex];
        var srsState = loadSRS();
        srsState = markCorrect(srsState, card.id);
        saveSRS(srsState);
        advanceCard();
    }

    function handleTricky() {
        var card = studyQueue[studyIndex];
        var srsState = loadSRS();
        srsState = markIncorrect(srsState, card.id);
        saveSRS(srsState);
        advanceCard();
    }

    function advanceCard() {
        studyIndex++;
        showCard();
    }

    function showSessionEnd() {
        document.querySelector('.card-body').style.display = 'none';
        document.getElementById('study-choices').style.display = 'none';
        document.getElementById('study-explanation').style.display = 'none';
        document.querySelector('.study-header').style.display = 'none';

        var endEl = document.getElementById('study-session-end');
        endEl.style.display = 'block';
        document.getElementById('session-reviewed').textContent = 'Cards reviewed: ' + sessionStats.total;
        document.getElementById('session-accuracy').textContent = 'Accuracy: ' + (sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0) + '%';
        document.getElementById('session-new').textContent = 'New cards introduced: ' + sessionStats.newCards;

        saveSession({ correct: sessionStats.correct, total: sessionStats.total, date: today() });
        updateStreak();
    }

    function updateStreak() {
        var streak = loadStreak();
        var t = today();
        if (streak.lastDate === t) return;

        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        var yStr = yesterday.toISOString().slice(0, 10);

        if (streak.lastDate === yStr) {
            streak.count++;
        } else if (streak.lastDate !== t) {
            streak.count = 1;
        }
        streak.lastDate = t;
        saveStreak(streak);
    }

    // Add Cards
    var selectedCategory = 'vocabulary';

    function handleAddCard(e) {
        e.preventDefault();
        var card = {
            id: 'custom_' + Date.now(),
            category: selectedCategory,
            subcategory: 'custom',
            question: document.getElementById('input-question').value.trim(),
            context: document.getElementById('input-context').value.trim() || null,
            correct: document.getElementById('input-correct').value.trim(),
            wrong: [
                document.getElementById('input-wrong1').value.trim(),
                document.getElementById('input-wrong2').value.trim(),
                document.getElementById('input-wrong3').value.trim()
            ],
            explanation: {
                right: document.getElementById('input-explanation').value.trim(),
                traps: [],
                hook: ''
            }
        };

        var customs = loadCustomCards();
        customs.push(card);
        saveCustomCards(customs);

        e.target.reset();
        document.querySelectorAll('.toggle-btn').forEach(function (b) { b.classList.remove('active'); });
        document.querySelector('.toggle-btn[data-cat="vocabulary"]').classList.add('active');
        selectedCategory = 'vocabulary';

        document.getElementById('add-card-success').style.display = 'block';
        setTimeout(function () {
            document.getElementById('add-card-success').style.display = 'none';
        }, 2000);
    }

    // Event listeners
    function init() {
        document.getElementById('btn-study').addEventListener('click', startStudy);
        document.getElementById('link-add-cards').addEventListener('click', function (e) {
            e.preventDefault();
            showScreen('screen-add-cards');
        });
        document.getElementById('link-back-dashboard').addEventListener('click', function (e) {
            e.preventDefault();
            renderDashboard();
        });
        document.getElementById('study-choices').addEventListener('click', handleChoice);
        document.getElementById('btn-got-it').addEventListener('click', handleGotIt);
        document.getElementById('btn-tricky').addEventListener('click', handleTricky);
        document.getElementById('btn-back-dashboard').addEventListener('click', function () {
            document.querySelector('.study-header').style.display = 'flex';
            renderDashboard();
        });
        document.getElementById('form-add-card').addEventListener('submit', handleAddCard);

        var hintChk = document.getElementById('chk-show-hint');
        var savedHint = localStorage.getItem('sat_show_hint');
        hintChk.checked = savedHint === '1';
        hintChk.addEventListener('change', function () {
            localStorage.setItem('sat_show_hint', hintChk.checked ? '1' : '0');
            var ctx = document.getElementById('study-context');
            if (ctx) ctx.style.display = hintChk.checked && ctx.textContent ? 'block' : 'none';
        });

        document.querySelectorAll('.toggle-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.toggle-btn').forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                selectedCategory = btn.dataset.cat;
            });
        });

        renderDashboard();
    }

    document.addEventListener('DOMContentLoaded', init);
})();
