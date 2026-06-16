const CARDS = [
    {
        "id": "vocab_abridge",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ABRIDGE mean?",
        "context": "The abridged edition of the novel removed three chapters to fit a shorter format.",
        "correct": "To shorten or condense",
        "wrong": [
            "To cross over",
            "To connect two ideas",
            "To damage beyond repair"
        ],
        "explanation": {
            "right": "ABRIDGE means to shorten or condense, especially a written work. From Latin abbreviare (to shorten). An abridged book is a shorter version of the original.",
            "traps": [
                "'Cross over' confuses ABRIDGE with BRIDGE — they sound similar but are unrelated.",
                "'Connect two ideas' is another BRIDGE confusion — bridging ideas means linking them.",
                "'Damage beyond repair' has no connection — you may be thinking of BREACH or BREAK."
            ],
            "hook": "A-BRIDGE: think of shortening a bridge — making it shorter to cross faster."
        }
    },
    {
        "id": "vocab_abstain",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ABSTAIN mean?",
        "context": "The senator chose to abstain from the vote rather than commit to either side.",
        "correct": "To choose not to participate or do something",
        "wrong": [
            "To strongly support a cause",
            "To obtain something by force",
            "To stain or damage a reputation"
        ],
        "explanation": {
            "right": "ABSTAIN means to restrain oneself from doing something — to voluntarily choose not to participate. From Latin abstinere (to hold back).",
            "traps": [
                "'Strongly support' is the opposite — abstaining means staying OUT, not getting in.",
                "'Obtain by force' confuses ABSTAIN with OBTAIN — they rhyme but mean very different things.",
                "'Stain a reputation' breaks the word wrongly as AB-STAIN — it's actually from Latin 'to hold back.'"
            ],
            "hook": "ABSTAIN = ABS (away) + TAIN (hold) — hold yourself AWAY from something."
        }
    },
    {
        "id": "vocab_acrimony",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ACRIMONY mean?",
        "context": "The debate deteriorated into acrimony, with both sides trading insults.",
        "correct": "Bitterness or ill-feeling",
        "wrong": [
            "A formal ceremony",
            "A pleasant agreement",
            "A type of legal testimony"
        ],
        "explanation": {
            "right": "ACRIMONY means bitterness or ill-feeling, especially in speech or manner. From Latin acer (sharp/bitter). Related: acrimonious (adj).",
            "traps": [
                "'Formal ceremony' confuses ACRIMONY with CEREMONY — they share the -mony ending but nothing else.",
                "'Pleasant agreement' is the opposite — ACRIMONY is hostile, not agreeable.",
                "'Legal testimony' confuses it with TESTIMONY — the -mony suffix is a trap."
            ],
            "hook": "ACRI-MONY: ACRID (sharp, bitter) + MONY — bitter feelings in a relationship, like a bitter divorce (ali-MONY)."
        }
    },
    {
        "id": "vocab_adamant",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ADAMANT mean?",
        "context": "She was adamant that the deadline could not be extended under any circumstances.",
        "correct": "Refusing to be persuaded; firmly resolute",
        "wrong": [
            "Flexible and willing to compromise",
            "Extremely angry",
            "Made of a hard substance"
        ],
        "explanation": {
            "right": "ADAMANT means refusing to be persuaded — firmly resolute and unyielding. From Greek adamas (unconquerable), which also gives us 'diamond.'",
            "traps": [
                "'Flexible and willing' is the exact opposite of adamant.",
                "'Extremely angry' is wrong — you can be adamant calmly. Firmness is not the same as anger.",
                "'Made of a hard substance' confuses the adjective with the mythical material 'adamant/adamantine' — on the SAT it means firm in opinion."
            ],
            "hook": "ADAM-ANT: Adam the ant was stubborn — he refused to move from the picnic blanket no matter what."
        }
    },
    {
        "id": "vocab_admonish",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ADMONISH mean?",
        "context": "The teacher admonished students to double-check their work before submitting.",
        "correct": "To warn or reprimand firmly but not harshly",
        "wrong": [
            "To praise enthusiastically",
            "To punish severely",
            "To completely ignore"
        ],
        "explanation": {
            "right": "ADMONISH means to warn or reprimand someone firmly but gently — it's softer than 'condemn' or 'rebuke.' From Latin admonere (to warn).",
            "traps": [
                "'Praise enthusiastically' is the opposite — admonishing is corrective, not praising.",
                "'Punish severely' is too strong — admonishing is a verbal warning, not a punishment.",
                "'Completely ignore' is unrelated — admonishing requires actively engaging with the person."
            ],
            "hook": "AD-MONISH: a MONitor who warns you — like a hall monitor gently telling you not to run."
        }
    },
    {
        "id": "vocab_aesthetic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does AESTHETIC mean?",
        "context": "The architect had a minimalist aesthetic, favoring clean lines over ornamentation.",
        "correct": "Concerned with beauty or artistic taste",
        "wrong": [
            "Related to physical exercise",
            "Extremely practical and functional",
            "Lacking any style or design"
        ],
        "explanation": {
            "right": "AESTHETIC means concerned with beauty or the appreciation of beauty; also a set of principles about what is beautiful. From Greek aisthesis (perception).",
            "traps": [
                "'Physical exercise' confuses AESTHETIC with ATHLETIC — similar sounds, totally different meanings.",
                "'Extremely practical' is closer to the opposite — aesthetics prioritizes beauty, not function.",
                "'Lacking style' is the opposite — aesthetic specifically refers to having a sense of style/beauty."
            ],
            "hook": "AESTHETIC = A + ESTHETIC — think of how an esthetician works with beauty and appearance."
        }
    },
    {
        "id": "vocab_alleviate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ALLEVIATE mean?",
        "context": "The medication alleviated her chronic pain significantly.",
        "correct": "To make suffering or a problem less severe",
        "wrong": [
            "To completely eliminate",
            "To make worse",
            "To raise to a higher level"
        ],
        "explanation": {
            "right": "ALLEVIATE means to make suffering or a problem less severe — to reduce but not necessarily remove. From Latin levis (light in weight). Alleviate = make lighter.",
            "traps": [
                "'Completely eliminate' is too strong — alleviate REDUCES pain, it doesn't REMOVE it entirely.",
                "'Make worse' is the opposite — that would be AGGRAVATE or EXACERBATE.",
                "'Raise to a higher level' confuses ALLEVIATE with ELEVATE — similar sounds but different meanings."
            ],
            "hook": "A-LEVI-ATE: make LIGHTER (levis = light). Pain becomes lighter, not gone."
        }
    },
    {
        "id": "vocab_ambiguous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does AMBIGUOUS mean?",
        "context": "The contract's language was ambiguous, leading to a lengthy legal dispute.",
        "correct": "Open to more than one interpretation; unclear",
        "wrong": [
            "Extremely clear and direct",
            "Having strong ambitions",
            "Covering a large area"
        ],
        "explanation": {
            "right": "AMBIGUOUS means open to more than one interpretation — unclear or having multiple possible meanings. From Latin ambigere (to wander about). Related: ambiguity (noun).",
            "traps": [
                "'Clear and direct' is the exact opposite — that would be UNAMBIGUOUS or EXPLICIT.",
                "'Strong ambitions' confuses AMBIGUOUS with AMBITIOUS — similar starts but different words.",
                "'Covering a large area' has no connection to the word's meaning."
            ],
            "hook": "AMBI-GUOUS: AMBI means 'both' — the meaning could go BOTH ways, so it's unclear."
        }
    },
    {
        "id": "vocab_ambivalent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does AMBIVALENT mean?",
        "context": "She felt ambivalent about the promotion — excited by the opportunity but dreading the longer hours.",
        "correct": "Having mixed or conflicting feelings",
        "wrong": [
            "Completely indifferent",
            "Extremely enthusiastic",
            "Walking in two directions at once"
        ],
        "explanation": {
            "right": "AMBIVALENT means having mixed or conflicting feelings about something — pulled in two directions emotionally. From Latin ambi (both) + valentia (strength).",
            "traps": [
                "'Completely indifferent' is wrong — ambivalent means CONFLICTED feelings, not NO feelings. This is the #1 confusion on the SAT.",
                "'Extremely enthusiastic' is wrong — that's unambivalent, having clear positive feelings.",
                "'Walking in two directions' takes the 'ambi' too literally — it's about feelings, not physical movement."
            ],
            "hook": "AMBI-VALENT: AMBI (both) + VALENT (strong feelings) — strong feelings pulling BOTH ways."
        }
    },
    {
        "id": "vocab_anachronism",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ANACHRONISM mean?",
        "context": "The film was full of anachronisms — characters in 1850 using phrases from the 1920s.",
        "correct": "Something placed in the wrong time period",
        "wrong": [
            "A type of poisonous spider",
            "A government without a ruler",
            "A word that reads the same backward"
        ],
        "explanation": {
            "right": "ANACHRONISM means something belonging to a different time period — placed in the wrong era. From Greek ana (against) + chronos (time).",
            "traps": [
                "'Poisonous spider' confuses it with ARACHNID — similar sound, totally different meaning.",
                "'Government without a ruler' is ANARCHY — ana- prefix but different root.",
                "'Reads the same backward' is a PALINDROME — completely unrelated."
            ],
            "hook": "ANA-CHRON-ISM: CHRON = time (like chronological). Against time = wrong time period."
        }
    },
    {
        "id": "vocab_antagonize",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ANTAGONIZE mean?",
        "context": "His aggressive remarks only served to antagonize the committee members.",
        "correct": "To cause someone to become hostile",
        "wrong": [
            "To deeply analyze a situation",
            "To work together toward a goal",
            "To feel great pain or anguish"
        ],
        "explanation": {
            "right": "ANTAGONIZE means to cause someone to become hostile or unfriendly — to provoke opposition. From Greek antagonizesthai (to contend against).",
            "traps": [
                "'Deeply analyze' confuses it with ANALYZE — no connection.",
                "'Work together' is the opposite — that's COLLABORATE or COOPERATE. An antagonist works AGAINST, not with.",
                "'Feel pain' confuses ANTAGONIZE with AGONIZE — related roots but different meanings."
            ],
            "hook": "ANTAGONIST = the villain who works AGAINST the hero. ANTAGONIZE = to make someone your enemy."
        }
    },
    {
        "id": "vocab_apathy",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does APATHY mean?",
        "context": "Voter apathy was blamed for the record-low turnout.",
        "correct": "Lack of interest, enthusiasm, or concern",
        "wrong": [
            "Deep sympathy for others",
            "Intense hatred",
            "A path or direction"
        ],
        "explanation": {
            "right": "APATHY means lack of interest, enthusiasm, or concern — emotional flatness or not caring. From Greek a (without) + pathos (feeling). Related: apathetic (adj).",
            "traps": [
                "'Deep sympathy' confuses APATHY with SYMPATHY/EMPATHY — they share the -pathy root but A- means WITHOUT.",
                "'Intense hatred' is wrong — apathy is the ABSENCE of feeling, not a strong negative feeling.",
                "'A path' is a joke trap — A-PATHY has nothing to do with paths."
            ],
            "hook": "A-PATHY: A (without) + PATHY (feeling) = WITHOUT feeling. You just don't care."
        }
    },
    {
        "id": "vocab_appease",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does APPEASE mean?",
        "context": "The company tried to appease angry customers with full refunds.",
        "correct": "To pacify or placate by giving in to demands",
        "wrong": [
            "To make something appear different",
            "To increase someone's appetite",
            "To officially approve of something"
        ],
        "explanation": {
            "right": "APPEASE means to pacify or placate someone by giving in to their demands — to calm anger by making concessions. From Old French apaisier (to bring to peace). Often has a slightly negative connotation.",
            "traps": [
                "'Make appear different' confuses APPEASE with APPEAR or APPEAL — unrelated.",
                "'Increase appetite' breaks the word as 'a-PEASE' with some food connection — it's actually from 'peace.'",
                "'Officially approve' confuses it with APPROVE — appease involves giving in, not endorsing."
            ],
            "hook": "AP-PEASE: bring to PEACE. Like appeasing an angry toddler with a cookie."
        }
    },
    {
        "id": "vocab_arbitrary",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ARBITRARY mean?",
        "context": "The selection process seemed arbitrary — there was no clear criteria for who was chosen.",
        "correct": "Based on random choice rather than reason",
        "wrong": [
            "Related to legal arbitration",
            "Extremely precise and measured",
            "Following a strict system"
        ],
        "explanation": {
            "right": "ARBITRARY means based on random choice or personal whim rather than any logical system. From Latin arbitrarius (depending on the will).",
            "traps": [
                "'Legal arbitration' shares the same Latin root but means something different — arbitration is formal dispute resolution.",
                "'Extremely precise' is the opposite — arbitrary means WITHOUT precision or system.",
                "'Following a strict system' is the exact opposite of arbitrary — systematic vs. random."
            ],
            "hook": "ARBITRARY = arbi-RARELY makes sense — decisions that rarely make logical sense because they're random."
        }
    },
    {
        "id": "vocab_archaic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ARCHAIC mean?",
        "context": "The archaic legal statute had not been enforced in over a century.",
        "correct": "Very old or old-fashioned; no longer in use",
        "wrong": [
            "Related to architecture",
            "Extremely important",
            "Hidden or secret"
        ],
        "explanation": {
            "right": "ARCHAIC means very old or old-fashioned — belonging to an earlier period and no longer in current use. From Greek arkhaikos (ancient).",
            "traps": [
                "'Related to architecture' confuses ARCHAIC with ARCH- as in architecture — different Greek roots.",
                "'Extremely important' has no connection to the word.",
                "'Hidden or secret' confuses ARCHAIC with ARCANE — arcane means mysterious/secret, archaic means old."
            ],
            "hook": "ARCHAIC: think ARCH-AIC = ancient. Like archaeological digs finding OLD things."
        }
    },
    {
        "id": "vocab_ardent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ARDENT mean?",
        "context": "She was an ardent supporter of education reform, volunteering every weekend.",
        "correct": "Very enthusiastic or passionate",
        "wrong": [
            "Difficult and exhausting",
            "Reluctant but willing",
            "Financially successful"
        ],
        "explanation": {
            "right": "ARDENT means very enthusiastic or passionate — burning with feeling. From Latin ardere (to burn). Synonyms: fervent, zealous.",
            "traps": [
                "'Difficult and exhausting' confuses ARDENT with ARDUOUS — they look similar but ardent means passionate, arduous means difficult.",
                "'Reluctant but willing' is the opposite feeling — an ardent supporter is eager, not reluctant.",
                "'Financially successful' has no connection to the word."
            ],
            "hook": "ARDENT: think ARSON — both from 'to burn.' An ardent fan BURNS with passion."
        }
    },
    {
        "id": "vocab_arduous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ARDUOUS mean?",
        "context": "The climb to the summit was arduous, taking three full days of strenuous effort.",
        "correct": "Requiring strenuous effort; difficult",
        "wrong": [
            "Passionate and enthusiastic",
            "Quick and effortless",
            "Related to a garden or plants"
        ],
        "explanation": {
            "right": "ARDUOUS means involving or requiring strenuous effort — extremely difficult and tiring. From Latin arduus (steep, difficult).",
            "traps": [
                "'Passionate and enthusiastic' confuses ARDUOUS with ARDENT — similar spelling but ardent means passionate, arduous means difficult.",
                "'Quick and effortless' is the exact opposite of arduous.",
                "'Related to gardens' has no connection — you might be thinking of ARBORETUM."
            ],
            "hook": "ARDUOUS: think of climbing something HARD-uous — steep and exhausting."
        }
    },
    {
        "id": "vocab_articulate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ARTICULATE mean?",
        "context": "The candidate was highly articulate, explaining complex policies in plain language.",
        "correct": "Able to speak fluently and coherently; to express clearly",
        "wrong": [
            "Related to art or artistic expression",
            "Having joints or segments",
            "Writing rather than speaking"
        ],
        "explanation": {
            "right": "ARTICULATE means having the ability to speak fluently and coherently (adj), or to express something clearly (verb). From Latin articulare (to divide into joints — i.e., to speak distinctly).",
            "traps": [
                "'Related to art' is wrong — ART-iculate shares letters with 'art' but comes from 'joint/segment.'",
                "'Having joints' is a technical/scientific meaning — on the SAT it almost always means speaking clearly.",
                "'Writing rather than speaking' is too narrow — articulate applies to any clear expression."
            ],
            "hook": "ARTICULATE: think of clearly ARTiculating each word — pronouncing every syllable distinctly."
        }
    },
    {
        "id": "vocab_assiduous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ASSIDUOUS mean?",
        "context": "His assiduous attention to detail made him an excellent editor.",
        "correct": "Showing great care and perseverance",
        "wrong": [
            "Acidic or bitter in taste",
            "Happening by accident",
            "Obvious and easy to see"
        ],
        "explanation": {
            "right": "ASSIDUOUS means showing great care, effort, and perseverance — extremely diligent and attentive. From Latin assiduus (attending constantly).",
            "traps": [
                "'Acidic or bitter' confuses the sound of ASSIDUOUS with ACID — no connection.",
                "'Happening by accident' has no relation — accidental is the opposite of assiduous (careful, deliberate).",
                "'Obvious and easy' is wrong — assiduous describes the EFFORT put in, not how easy something is."
            ],
            "hook": "ASSIDUOUS: think 'I SIT DUOUSLY at my desk' — sitting there constantly, working hard."
        }
    },
    {
        "id": "vocab_astute",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ASTUTE mean?",
        "context": "The astute investor saw the market downturn coming months before others.",
        "correct": "Having the ability to accurately assess situations; shrewd",
        "wrong": [
            "Extremely beautiful",
            "Very tall or imposing",
            "Rude and inconsiderate"
        ],
        "explanation": {
            "right": "ASTUTE means having sharp judgment and keen insight — the ability to quickly and accurately assess situations. From Latin astutus (crafty, clever).",
            "traps": [
                "'Extremely beautiful' has no connection to the word.",
                "'Very tall' confuses ASTUTE with STATUESQUE — unrelated words.",
                "'Rude and inconsiderate' is wrong — being astute is a positive quality (clever, perceptive)."
            ],
            "hook": "A-STUTE: a SHREWD student — someone who studies situations and figures them out fast."
        }
    },
    {
        "id": "vocab_atrophy",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ATROPHY mean?",
        "context": "Without regular use, muscles begin to atrophy and lose their strength.",
        "correct": "To gradually decline or waste away",
        "wrong": [
            "To win a prize or trophy",
            "To grow rapidly",
            "To change into something different"
        ],
        "explanation": {
            "right": "ATROPHY means to gradually decline, deteriorate, or waste away from lack of use. From Greek a (without) + trophe (nourishment). Used literally (muscles) and figuratively (skills, institutions).",
            "traps": [
                "'Win a trophy' is a sound trap — aTROPHY contains 'trophy' but means the opposite of winning.",
                "'Grow rapidly' is the exact opposite — atrophy is shrinking/declining, not growing.",
                "'Change into something' is too neutral — atrophy specifically means deterioration, not just change."
            ],
            "hook": "A-TROPHY: A (without) + TROPHY (nourishment) = wasting away from lack of feeding. No food = shrink."
        }
    },
    {
        "id": "vocab_audacious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does AUDACIOUS mean?",
        "context": "The startup's audacious plan was to disrupt an entire industry in just two years.",
        "correct": "Showing a willingness to take bold risks",
        "wrong": [
            "Related to sound or hearing",
            "Extremely cautious",
            "Dishonest or fraudulent"
        ],
        "explanation": {
            "right": "AUDACIOUS means showing willingness to take surprisingly bold risks — daring and fearless. From Latin audax (bold).",
            "traps": [
                "'Related to sound' confuses AUDACIOUS with AUDIO/AUDITORY — different Latin roots (audax vs. audire).",
                "'Extremely cautious' is the opposite — audacious people throw caution away.",
                "'Dishonest' is wrong — audacious can be positive (brave) or negative (impudent), but it doesn't mean dishonest."
            ],
            "hook": "AUDACIOUS: the AUDACITY! — bold, daring, maybe even shockingly so."
        }
    },
    {
        "id": "vocab_austere",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does AUSTERE mean?",
        "context": "The monastery was austere — bare walls, simple food, no luxuries of any kind.",
        "correct": "Severe in manner or appearance; lacking comforts",
        "wrong": [
            "Decorated elaborately",
            "Located in the Southern Hemisphere",
            "Warm and welcoming"
        ],
        "explanation": {
            "right": "AUSTERE means severe or strict in manner, appearance, or attitude — having no comforts or luxuries. From Greek austeros (harsh, bitter).",
            "traps": [
                "'Decorated elaborately' is the opposite — austere spaces are bare and plain.",
                "'Southern Hemisphere' confuses AUSTERE with AUSTRAL (southern, as in Australia) — different words.",
                "'Warm and welcoming' is the opposite — austere environments feel cold and unwelcoming."
            ],
            "hook": "AUSTERE: think of an OYSTER — hard, plain, gray shell with nothing fancy on the outside."
        }
    },
    {
        "id": "vocab_avarice",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does AVARICE mean?",
        "context": "His avarice led him to embezzle millions from unsuspecting clients.",
        "correct": "Extreme greed for wealth",
        "wrong": [
            "A type of bird",
            "Great bravery in battle",
            "Average or ordinary quality"
        ],
        "explanation": {
            "right": "AVARICE means extreme greed for wealth or material gain — insatiable desire for money. From Latin avarus (greedy). Related: avaricious (adj).",
            "traps": [
                "'A type of bird' confuses AVARICE with AVIARY (a place for birds) — similar start but unrelated.",
                "'Great bravery' has no connection to the word.",
                "'Average quality' is a sound trap — AVARICE sounds vaguely like AVERAGE but means greed."
            ],
            "hook": "AVARICE: the VICE of wanting more and more money. Greed is a vice."
        }
    },
    {
        "id": "vocab_banal",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does BANAL mean?",
        "context": "The speech was full of banal platitudes that added nothing new to the conversation.",
        "correct": "So lacking in originality as to be boring",
        "wrong": [
            "Extremely offensive or harmful",
            "Forbidden by law",
            "Related to banking or finance"
        ],
        "explanation": {
            "right": "BANAL means lacking originality, freshness, or novelty — so common and overused as to be boring. From Old French banal (common to all). Synonyms: trite, clichéd, hackneyed.",
            "traps": [
                "'Extremely offensive' is too strong — banal things are BORING, not shocking.",
                "'Forbidden by law' confuses BANAL with BANNED — similar sound but completely different.",
                "'Related to banking' is wrong — no connection to financial terms."
            ],
            "hook": "BANAL: sounds like 'BLAND' — and that's what it means. Bland, boring, unoriginal."
        }
    },
    {
        "id": "vocab_belligerent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does BELLIGERENT mean?",
        "context": "The belligerent customer refused to leave and threatened to call the police.",
        "correct": "Hostile and aggressive",
        "wrong": [
            "Extremely large or swollen",
            "Beautiful and elegant",
            "Believing in something strongly"
        ],
        "explanation": {
            "right": "BELLIGERENT means hostile, aggressive, and ready to fight. Can also mean engaged in war (a belligerent nation). From Latin bellum (war) + gerere (to carry on).",
            "traps": [
                "'Extremely large' confuses it with words like BULGING — unrelated.",
                "'Beautiful and elegant' confuses BELLI- with BELLE (beautiful) — BELLUM means WAR, not beauty.",
                "'Believing strongly' has no connection to belligerent."
            ],
            "hook": "BELLI-GERENT: BELLUM = WAR. A belligerent person is waging war on everyone around them."
        }
    },
    {
        "id": "vocab_benevolent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does BENEVOLENT mean?",
        "context": "The benevolent donor gave anonymously to dozens of charities each year.",
        "correct": "Well-meaning and kindly; generous",
        "wrong": [
            "Evil and scheming",
            "Having good manners",
            "Violent and destructive"
        ],
        "explanation": {
            "right": "BENEVOLENT means well-meaning, kindly, and generous — wanting to do good for others. From Latin bene (well) + volens (wishing).",
            "traps": [
                "'Evil and scheming' is the opposite — that would be MALEVOLENT (mal = bad).",
                "'Having good manners' is POLITE or COURTEOUS — benevolent is about wishing good for others, not etiquette.",
                "'Violent and destructive' is the opposite direction entirely."
            ],
            "hook": "BENE-VOLENT: BENE (good, like benefit) + VOLENT (wishing, like voluntary) = wishing good things for others."
        }
    },
    {
        "id": "vocab_bolster",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does BOLSTER mean?",
        "context": "New research helped to bolster the scientist's controversial hypothesis.",
        "correct": "To support or strengthen",
        "wrong": [
            "To remove or demolish",
            "To make louder or more boisterous",
            "To fasten with bolts"
        ],
        "explanation": {
            "right": "BOLSTER means to support, strengthen, or prop up — to provide reinforcement. Originally from Old English bolster (a long pillow used for support).",
            "traps": [
                "'Remove or demolish' is the opposite — bolstering builds UP, not tears down.",
                "'Make louder' confuses BOLSTER with BOISTEROUS — similar sound but unrelated.",
                "'Fasten with bolts' confuses BOLSTER with BOLT — different words entirely."
            ],
            "hook": "BOLSTER: a bolster pillow SUPPORTS your back. To bolster = to support."
        }
    },
    {
        "id": "vocab_brevity",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does BREVITY mean?",
        "context": "The judge praised the lawyer's brevity — the argument was clear and under ten minutes.",
        "correct": "Concise use of words; shortness",
        "wrong": [
            "Great courage in facing danger",
            "A certificate of achievement",
            "The quality of being heavy"
        ],
        "explanation": {
            "right": "BREVITY means concise and exact use of words, or shortness of duration. From Latin brevis (short). 'Brevity is the soul of wit' — Shakespeare.",
            "traps": [
                "'Great courage' confuses BREVITY with BRAVERY — very similar in sound but different meanings.",
                "'Certificate of achievement' has no connection.",
                "'Quality of being heavy' confuses it with GRAVITY — -ity endings but different roots."
            ],
            "hook": "BREVITY: BRIEF + -ITY = the quality of being BRIEF. Short and to the point."
        }
    },
    {
        "id": "vocab_cacophony",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CACOPHONY mean?",
        "context": "The construction site outside the window produced a constant cacophony of drills and hammers.",
        "correct": "A harsh, discordant mixture of sounds",
        "wrong": [
            "A beautiful musical harmony",
            "A type of tropical flower",
            "A group of parrots"
        ],
        "explanation": {
            "right": "CACOPHONY means a harsh, discordant mixture of sounds — noise that is unpleasant to hear. From Greek kakos (bad) + phone (sound). Antonym: euphony (pleasant sound).",
            "traps": [
                "'Beautiful harmony' is the ANTONYM — that's EUPHONY (eu = good + phone = sound).",
                "'Tropical flower' has no connection.",
                "'Group of parrots' is wrong — while parrots are noisy, CACOPHONY isn't a collective noun."
            ],
            "hook": "CACO-PHONY: CACO (bad, like cacti are prickly) + PHONY (sound, like telephone) = BAD SOUND."
        }
    },
    {
        "id": "vocab_candid",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CANDID mean?",
        "context": "In a candid interview, the CEO admitted the company had made serious mistakes.",
        "correct": "Truthful and straightforward; frank",
        "wrong": [
            "Covered in sugar or sweetness",
            "Running for political office",
            "Lit by candlelight"
        ],
        "explanation": {
            "right": "CANDID means truthful, straightforward, and frank — open and honest without hiding anything. From Latin candidus (white, pure).",
            "traps": [
                "'Covered in sugar' confuses CANDID with CANDIED — candied means sugar-coated.",
                "'Running for office' confuses it with CANDIDATE — same root (candidus = white, from white togas worn by Roman candidates) but different meaning.",
                "'Lit by candles' confuses CANDID with CANDLE — unrelated despite similar spelling."
            ],
            "hook": "CANDID camera catches people being their REAL, HONEST selves — unposed and truthful."
        }
    },
    {
        "id": "vocab_capitulate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CAPITULATE mean?",
        "context": "After hours of negotiation, the union finally capitulated to management's demands.",
        "correct": "To cease resisting; to surrender",
        "wrong": [
            "To take advantage of an opportunity",
            "To write in capital letters",
            "To cut off someone's head"
        ],
        "explanation": {
            "right": "CAPITULATE means to cease to resist an opponent — to surrender or give in. From Latin capitulare (to draw up under headings — terms of surrender).",
            "traps": [
                "'Take advantage' confuses CAPITULATE with CAPITALIZE — to capitalize on something means to exploit it.",
                "'Write in capitals' is another CAPITAL confusion — nothing to do with letter case.",
                "'Cut off a head' confuses it with DECAPITATE — both have 'capit' (head) but very different meanings."
            ],
            "hook": "CAPITULATE: the CAPTAIN surrenders. Wave the white flag. Give up."
        }
    },
    {
        "id": "vocab_caustic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CAUSTIC mean?",
        "context": "The critic's caustic review left the author devastated.",
        "correct": "Sharply critical; sarcastic; able to burn",
        "wrong": [
            "Careful and cautious",
            "Related to a cause or reason",
            "Causing something to happen"
        ],
        "explanation": {
            "right": "CAUSTIC means sharply critical or sarcastic (figuratively), or able to burn through things chemically (literally). From Greek kaustikos (capable of burning).",
            "traps": [
                "'Careful and cautious' confuses CAUSTIC with CAUTIOUS — similar start but opposite energy. Caustic is aggressive, cautious is careful.",
                "'Related to a cause' confuses CAUSTIC with CAUSE — different etymology entirely.",
                "'Causing something' same confusion with CAUSE — caustic is about burning, not causing."
            ],
            "hook": "CAUSTIC: think CAUSTIC soda (lye) — it BURNS. Caustic words burn people too."
        }
    },
    {
        "id": "vocab_circumspect",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CIRCUMSPECT mean?",
        "context": "A circumspect investor avoids putting all funds in a single volatile stock.",
        "correct": "Wary and unwilling to take risks; careful",
        "wrong": [
            "Going around obstacles",
            "Watching a performance",
            "Talking in circles without a point"
        ],
        "explanation": {
            "right": "CIRCUMSPECT means wary, careful, and unwilling to take risks — looking at all sides before acting. From Latin circum (around) + specere (to look).",
            "traps": [
                "'Going around obstacles' takes CIRCUM too literally — it's metaphorical looking around, not physical movement.",
                "'Watching a performance' confuses SPECT with SPECTATOR — related root but different word.",
                "'Talking in circles' confuses CIRCUMSPECT with CIRCUMLOCUTION — circum + locution (speaking around the point)."
            ],
            "hook": "CIRCUM-SPECT: looking AROUND (circum) before you act — checking every angle. That's being careful."
        }
    },
    {
        "id": "vocab_coerce",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does COERCE mean?",
        "context": "The confession was obtained by coercing the suspect with threats of harm.",
        "correct": "To persuade using force or threats",
        "wrong": [
            "To work together cooperatively",
            "To gently encourage",
            "To restrict within boundaries"
        ],
        "explanation": {
            "right": "COERCE means to persuade someone to do something by using force or threats — to compel unwillingly. From Latin coercere (to restrain).",
            "traps": [
                "'Work together' confuses COERCE with COOPERATE — totally different despite both starting with CO-.",
                "'Gently encourage' is too mild — coercion involves force or threats, not gentle persuasion.",
                "'Restrict within boundaries' is closer to CONFINE — coerce is about forcing action, not containment."
            ],
            "hook": "CO-ERCE: think FORCE — to co-FORCE someone into doing what you want."
        }
    },
    {
        "id": "vocab_cogent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does COGENT mean?",
        "context": "She made a cogent argument for reforming the tax code, convincing even skeptics.",
        "correct": "Clear, logical, and convincing",
        "wrong": [
            "Aware and mentally alert",
            "Forceful and aggressive",
            "Related to gears or mechanics"
        ],
        "explanation": {
            "right": "COGENT means clear, logical, and convincing — an argument so well-reasoned that it's compelling. From Latin cogere (to drive together — to compel by reason).",
            "traps": [
                "'Aware and alert' confuses COGENT with COGNIZANT — both from Latin roots about thinking, but different meanings.",
                "'Forceful and aggressive' is wrong — cogent arguments convince through LOGIC, not force.",
                "'Related to gears' confuses COGENT with COG — a cog is a gear tooth, unrelated."
            ],
            "hook": "COGENT: a CO-GENT (cooperative gentleman) makes arguments so logical you can't disagree."
        }
    },
    {
        "id": "vocab_complacent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does COMPLACENT mean?",
        "context": "After three consecutive wins, the team became complacent and lost the championship.",
        "correct": "Smugly satisfied; failing to work hard due to overconfidence",
        "wrong": [
            "Willing to please others",
            "Filing a formal complaint",
            "Peacefully content and happy"
        ],
        "explanation": {
            "right": "COMPLACENT means showing smug or uncritical satisfaction with oneself — dangerously over-satisfied, leading to a lack of effort. From Latin complacere (to please).",
            "traps": [
                "'Willing to please' confuses COMPLACENT with COMPLAISANT — these are different words! Complaisant = eager to please. Complacent = too satisfied.",
                "'Filing a complaint' confuses it with COMPLAINANT — unrelated despite COM- prefix.",
                "'Peacefully content' is close but misses the DANGER — content is fine, complacent implies you'll lose because you stopped trying."
            ],
            "hook": "COMPLACENT = content + LAZY. You're so pleased with yourself that you stop working. That's when you lose."
        }
    },
    {
        "id": "vocab_complicit",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does COMPLICIT mean?",
        "context": "The accountant was complicit in the fraud by signing falsified documents.",
        "correct": "Involved with others in wrongdoing",
        "wrong": [
            "Making something more complex",
            "Giving a compliment",
            "Completing a difficult task"
        ],
        "explanation": {
            "right": "COMPLICIT means involved with others in an illegal or immoral activity — being a knowing participant in wrongdoing. From Latin complicare (to fold together).",
            "traps": [
                "'Making complex' confuses COMPLICIT with COMPLICATE — same root (fold together) but different modern meanings.",
                "'Giving a compliment' confuses it with COMPLIMENT — similar sound but no connection.",
                "'Completing a task' confuses it with COMPLETE — unrelated."
            ],
            "hook": "COMPLICIT: an acCOMPLICE in crime. If you're complicit, you're an accomplice."
        }
    },
    {
        "id": "vocab_concede",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CONCEDE mean?",
        "context": "The scientist conceded that the new data challenged her original hypothesis.",
        "correct": "To admit something is true after initially resisting",
        "wrong": [
            "To move forward quickly",
            "To hide or keep secret",
            "To plant seeds in soil"
        ],
        "explanation": {
            "right": "CONCEDE means to admit that something is true after first denying or resisting it, or to surrender a right or privilege. From Latin concedere (to yield).",
            "traps": [
                "'Move forward' confuses CONCEDE with PROCEED or PRECEDE — different roots.",
                "'Hide or keep secret' confuses it with CONCEAL — con-CEDE vs con-CEAL, very different.",
                "'Plant seeds' confuses it with a nonexistent connection — no gardening here."
            ],
            "hook": "CON-CEDE: to CEDE (give up) a point in an argument. You yield: 'OK, you're right.'"
        }
    },
    {
        "id": "vocab_condescending",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CONDESCENDING mean?",
        "context": "His condescending tone implied he thought no one else understood the concept.",
        "correct": "Acting as if you are superior to others; patronizing",
        "wrong": [
            "Agreeing to lower your standards",
            "Becoming more condensed or concentrated",
            "Descending from a high place"
        ],
        "explanation": {
            "right": "CONDESCENDING means acting in a way that implies you believe you are superior — talking down to someone. Patronizing. From Latin condescendere (to stoop).",
            "traps": [
                "'Lowering standards' takes DESCEND too literally — it's about attitude, not actual lowering.",
                "'More concentrated' confuses it with CONDENSED — condense means to compress.",
                "'Descending from height' takes the word literally — it's figurative: stooping to someone's 'level.'"
            ],
            "hook": "CON-DESCENDING: looking DOWN on people — descending to their level as if you're above them."
        }
    },
    {
        "id": "vocab_contentious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CONTENTIOUS mean?",
        "context": "The proposal was contentious, drawing heated protests from both political parties.",
        "correct": "Causing or likely to cause argument",
        "wrong": [
            "Feeling satisfied and happy",
            "Containing many different things",
            "Competing for a prize"
        ],
        "explanation": {
            "right": "CONTENTIOUS means causing or likely to cause an argument — controversial, disputatious. From Latin contendere (to strive/compete).",
            "traps": [
                "'Satisfied and happy' confuses CONTENTIOUS with CONTENT — being content means satisfied, being contentious means argumentative.",
                "'Containing many things' confuses it with 'contents' — the things inside a container.",
                "'Competing for a prize' confuses it with CONTENDER — a contender competes, contentious means causing arguments."
            ],
            "hook": "CONTENTIOUS: people CONTEND (argue/fight) over contentious issues. It sparks disagreement."
        }
    },
    {
        "id": "vocab_convoluted",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CONVOLUTED mean?",
        "context": "The contract was so convoluted that even experienced lawyers had trouble parsing it.",
        "correct": "Extremely complex and difficult to follow",
        "wrong": [
            "Rolled up into a tube shape",
            "Involving criminal activity",
            "Spinning rapidly in circles"
        ],
        "explanation": {
            "right": "CONVOLUTED means extremely complex, intricate, and difficult to follow — overly complicated. From Latin convolvere (to roll together).",
            "traps": [
                "'Rolled into a tube' takes the Latin root too literally — convolvere means 'to roll together' but the modern word means tangled/complex.",
                "'Criminal activity' has no connection.",
                "'Spinning rapidly' confuses CONVOLUTED with REVOLVING — different words despite shared 'volv' root."
            ],
            "hook": "CONVOLUTED: think of a CONVOLUTED path — twisted, turning, hard to follow. That's a convoluted explanation too."
        }
    },
    {
        "id": "vocab_corroborate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CORROBORATE mean?",
        "context": "The eyewitness testimony corroborated the physical evidence found at the scene.",
        "correct": "To confirm or give support to a statement",
        "wrong": [
            "To work together with a partner",
            "To gradually wear away",
            "To decorate or embellish"
        ],
        "explanation": {
            "right": "CORROBORATE means to confirm or support a statement, theory, or finding with additional evidence. From Latin corroborare (to strengthen).",
            "traps": [
                "'Work together' confuses CORROBORATE with COLLABORATE — both start with CO- but mean different things.",
                "'Gradually wear away' confuses it with CORRODE — corr- prefix but totally different.",
                "'Decorate or embellish' has no connection to the word."
            ],
            "hook": "CORROBORATE: to make ROBUST — to strengthen a claim with supporting evidence."
        }
    },
    {
        "id": "vocab_credulous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CREDULOUS mean?",
        "context": "A credulous audience is easy prey for scammers and conspiracy theorists.",
        "correct": "Too willing to believe things; gullible",
        "wrong": [
            "Worthy of being believed",
            "Having good financial credit",
            "Giving credit where it is due"
        ],
        "explanation": {
            "right": "CREDULOUS means having a tendency to believe things too easily — gullible and naive. From Latin credulus (believing too readily).",
            "traps": [
                "'Worthy of being believed' confuses CREDULOUS with CREDIBLE — HUGE SAT trap. Credible = believable. Credulous = believes too easily.",
                "'Good financial credit' confuses it with CREDIT — same root (credere = to believe/trust) but different application.",
                "'Giving credit' is another financial/attribution confusion."
            ],
            "hook": "CREDULOUS: CRED (believe) + ULOUS (full of) = FULL of believing. Believes everything. Gullible."
        }
    },
    {
        "id": "vocab_cursory",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does CURSORY mean?",
        "context": "A cursory glance at the report missed the critical error buried on page twelve.",
        "correct": "Hasty and therefore not thorough",
        "wrong": [
            "Using profane language",
            "Related to a computer cursor",
            "Under a curse or hex"
        ],
        "explanation": {
            "right": "CURSORY means hasty and therefore not thorough or detailed — a quick, surface-level look. From Latin cursor (runner) — running through quickly.",
            "traps": [
                "'Profane language' confuses CURSORY with CURSING — similar sound but unrelated.",
                "'Computer cursor' shares the same Latin root (runner) but is a completely different meaning.",
                "'Under a curse' confuses CURSORY with CURSED — no connection."
            ],
            "hook": "CURSORY: a CURSOR runs quickly across the screen. A cursory look runs quickly over something without stopping."
        }
    },
    {
        "id": "vocab_daunt",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DAUNT mean?",
        "context": "The sheer scale of the project daunted even the most experienced team members.",
        "correct": "To make someone feel intimidated",
        "wrong": [
            "To show off or flaunt",
            "To haunt like a ghost",
            "To tease or taunt"
        ],
        "explanation": {
            "right": "DAUNT means to make someone feel intimidated or apprehensive — to discourage through fear of difficulty. From Latin domare (to tame). Related: daunting (adj), undaunted (not intimidated).",
            "traps": [
                "'Show off' confuses DAUNT with FLAUNT — similar sound but flaunt means to display proudly.",
                "'Haunt like a ghost' is a rhyme trap — daunt and haunt rhyme but are unrelated.",
                "'Tease or taunt' confuses DAUNT with TAUNT — one letter different but taunt means to mock."
            ],
            "hook": "DAUNTING task = intimidating task. The difficulty TAMES your confidence."
        }
    },
    {
        "id": "vocab_deference",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DEFERENCE mean?",
        "context": "Out of deference to her grandmother's wishes, she wore the family heirloom.",
        "correct": "Humble respect for another's judgment",
        "wrong": [
            "A noticeable distinction between things",
            "Putting something off until later",
            "A strong defensive position"
        ],
        "explanation": {
            "right": "DEFERENCE means humble submission and respect for another person's judgment or wishes — yielding to someone out of respect. From Latin deferre (to carry down/yield).",
            "traps": [
                "'Distinction between things' confuses DEFERENCE with DIFFERENCE — one letter apart but completely different meanings. This is a classic SAT trap.",
                "'Putting off until later' confuses it with DEFERRAL — to defer can mean to postpone OR to yield respectfully.",
                "'Defensive position' confuses DEFERENCE with DEFENSE — def- prefix but unrelated."
            ],
            "hook": "DEFERENCE: you DEFER to someone's wishes — you bow to their judgment out of respect."
        }
    },
    {
        "id": "vocab_defunct",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DEFUNCT mean?",
        "context": "The defunct airline's planes were sold off for spare parts.",
        "correct": "No longer existing or functioning",
        "wrong": [
            "Functioning perfectly",
            "Funky or unusual in style",
            "Missing essential parts"
        ],
        "explanation": {
            "right": "DEFUNCT means no longer existing or functioning — dead, inactive, out of business. From Latin defunctus (dead — literally 'finished with life').",
            "traps": [
                "'Functioning perfectly' is the opposite — defunct means it STOPPED functioning.",
                "'Funky or unusual' is a sound trap — de-FUNCT sounds like FUNKY but means dead/inactive.",
                "'Missing parts' is too specific — defunct means completely non-operational, not just incomplete."
            ],
            "hook": "DE-FUNCT: the FUNCTION is DE-stroyed. It no longer functions. It's done."
        }
    },
    {
        "id": "vocab_delineate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DELINEATE mean?",
        "context": "The peace treaty delineated the new border between the two nations.",
        "correct": "To describe precisely or indicate exact limits",
        "wrong": [
            "To cross out or delete",
            "To form a straight line",
            "To remove from a waiting list"
        ],
        "explanation": {
            "right": "DELINEATE means to describe or portray something precisely, or to indicate the exact position of a boundary. From Latin delineare (to sketch out).",
            "traps": [
                "'Cross out or delete' confuses DE- with deletion — delineate means to DRAW precisely, not erase.",
                "'Form a straight line' takes the LINE part too literally — it's about precise description, not physical lines.",
                "'Remove from a list' confuses it with 'de-list' — not a real connection."
            ],
            "hook": "DE-LINE-ATE: draw the LINES precisely. Delineate boundaries = draw exact borders."
        }
    },
    {
        "id": "vocab_denounce",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DENOUNCE mean?",
        "context": "The senator denounced the policy as unconstitutional and demanded its repeal.",
        "correct": "To publicly declare something wrong or evil",
        "wrong": [
            "To announce good news",
            "To give up a title of nobility",
            "To pronounce words clearly"
        ],
        "explanation": {
            "right": "DENOUNCE means to publicly declare something to be wrong, evil, or unacceptable — to condemn openly. From Latin denuntiare (to announce/threaten).",
            "traps": [
                "'Announce good news' confuses DENOUNCE with ANNOUNCE — denouncing is negative public declaration, not neutral news-sharing.",
                "'Give up a title' confuses DENOUNCE with RENOUNCE — renounce means to formally give up, denounce means to publicly condemn.",
                "'Pronounce clearly' confuses it with PRONOUNCE/ENUNCIATE — different words."
            ],
            "hook": "DE-NOUNCE: to make a NEGATIVE announcement. You publicly say 'this is WRONG.'"
        }
    },
    {
        "id": "vocab_depict",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DEPICT mean?",
        "context": "The novel depicts life in rural America during the Great Depression era.",
        "correct": "To represent in a picture or describe in words",
        "wrong": [
            "To remove a picture from a wall",
            "To choose or select carefully",
            "To predict future events"
        ],
        "explanation": {
            "right": "DEPICT means to represent something by a picture, sculpture, or words — to show or describe. From Latin depingere (to paint).",
            "traps": [
                "'Remove a picture' misreads DE- as removal — here it's an intensifier, not negation.",
                "'Choose carefully' confuses DEPICT with PICK/SELECT — no connection.",
                "'Predict the future' confuses DEPICT with PREDICT — both end in -ict but have different roots."
            ],
            "hook": "DE-PICT: to PICTURE something. A depiction is a picture or portrayal."
        }
    },
    {
        "id": "vocab_deprecate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DEPRECATE mean?",
        "context": "The critic deprecated the film's heavy reliance on tired clichés.",
        "correct": "To express disapproval of; to belittle",
        "wrong": [
            "To decrease in financial value",
            "To appreciate greatly",
            "To pray or worship"
        ],
        "explanation": {
            "right": "DEPRECATE means to express disapproval of something — to belittle or disparage. From Latin deprecari (to pray against). Also used in computing: to phase out.",
            "traps": [
                "'Decrease in value' confuses DEPRECATE with DEPRECIATE — very similar words! Depreciate = decline in value. Deprecate = express disapproval.",
                "'Appreciate greatly' is the opposite — and confuses it with APPRECIATE.",
                "'Pray or worship' takes the Latin root (deprecari = to pray against) too literally."
            ],
            "hook": "DEPRECATE vs DEPRECIATE: deprecATE = you hATE it (disapprove). depreciATE = it loses vALUE (financial decline)."
        }
    },
    {
        "id": "vocab_derivative",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DERIVATIVE mean (in arts/writing)?",
        "context": "Critics dismissed the novel as derivative, noting its heavy borrowing from earlier works.",
        "correct": "Imitative and unoriginal",
        "wrong": [
            "Highly creative and innovative",
            "Derived from mathematical formulas",
            "Extremely profitable"
        ],
        "explanation": {
            "right": "DERIVATIVE (in arts/writing) means imitative of someone else's work — not original, borrowing heavily from existing sources. From Latin derivare (to lead away from).",
            "traps": [
                "'Highly creative' is the exact opposite — derivative work LACKS creativity.",
                "'Mathematical formulas' is the calculus meaning — a derivative in math is the rate of change. Different context.",
                "'Extremely profitable' has no connection."
            ],
            "hook": "DERIVATIVE art is DERIVED from other art — it's a copy, not an original."
        }
    },
    {
        "id": "vocab_despondent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DESPONDENT mean?",
        "context": "After three rejections, she grew despondent about her chances of finding work.",
        "correct": "In low spirits from loss of hope",
        "wrong": [
            "Responding quickly to a situation",
            "Relying on someone else",
            "Spending money wastefully"
        ],
        "explanation": {
            "right": "DESPONDENT means in low spirits from loss of hope or courage — deeply discouraged and sad. From Latin despondre (to lose heart, to give up).",
            "traps": [
                "'Responding quickly' confuses DESPONDENT with RESPONDENT — both have -spond- but different prefixes change meaning entirely.",
                "'Relying on someone' confuses it with DEPENDENT — similar sound but different word.",
                "'Spending wastefully' has no connection."
            ],
            "hook": "DE-SPOND-ENT: DE (down) + SPOND (spirit/promise) = your spirit is DOWN. Hopeless."
        }
    },
    {
        "id": "vocab_detrimental",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DETRIMENTAL mean?",
        "context": "Excessive screen time can be detrimental to children's cognitive development.",
        "correct": "Tending to cause harm",
        "wrong": [
            "Extremely important",
            "Related to dental health",
            "Helping to determine an outcome"
        ],
        "explanation": {
            "right": "DETRIMENTAL means tending to cause harm — damaging, injurious, hurtful. From Latin detrimentum (loss, damage).",
            "traps": [
                "'Extremely important' confuses DETRIMENTAL with INSTRUMENTAL — instrumental means helpful/important.",
                "'Dental health' is a sound trap with no real connection.",
                "'Helping determine' confuses DETRIMENTAL with DETERMINANT — similar sounds but one means harmful, the other means deciding factor."
            ],
            "hook": "DETRI-MENTAL: think DETRIMENT = damage. Detrimental = causing detriment/damage."
        }
    },
    {
        "id": "vocab_didactic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DIDACTIC mean?",
        "context": "The novel was occasionally too didactic, with the author's moral message hammered home in every chapter.",
        "correct": "Intended to teach; overly moralistic",
        "wrong": [
            "Related to dictators or tyranny",
            "Self-taught without formal education",
            "Having two distinct parts"
        ],
        "explanation": {
            "right": "DIDACTIC means intended to teach, especially moral lessons. Often used negatively to mean excessively moralistic or preachy. From Greek didaktikos (apt at teaching).",
            "traps": [
                "'Related to dictators' confuses DIDACTIC with DICTATORIAL — DID- vs DICT-, different roots.",
                "'Self-taught' confuses it with AUTODIDACT (a self-taught person) — related root but different word.",
                "'Two distinct parts' confuses it with DICHOTOMY or DI- (two) — didactic has nothing to do with the number two."
            ],
            "hook": "DIDACTIC: a teacher being DIDACTIC is being preachy — teaching you a lesson whether you want it or not."
        }
    },
    {
        "id": "vocab_diffident",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DIFFIDENT mean?",
        "context": "The diffident student rarely raised her hand despite always knowing the answers.",
        "correct": "Modest or shy due to lack of self-confidence",
        "wrong": [
            "Showing no interest or concern",
            "Strongly disagreeing with others",
            "Having a different opinion"
        ],
        "explanation": {
            "right": "DIFFIDENT means modest or shy because of a lack of self-confidence — hesitant to put yourself forward. From Latin diffidere (to distrust oneself).",
            "traps": [
                "'No interest or concern' confuses DIFFIDENT with INDIFFERENT — THE #1 trap. Diffident = shy. Indifferent = doesn't care. Completely different!",
                "'Strongly disagreeing' confuses it with DEFIANT — diffident people are quiet, not rebellious.",
                "'Different opinion' confuses it with DIFFERENT — similar spelling but no shared meaning."
            ],
            "hook": "DIFFIDENT: DIF-FID-ENT = not having FIDE (faith/confidence) in yourself. Shy because you don't trust your own abilities."
        }
    },
    {
        "id": "vocab_digress",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DIGRESS mean?",
        "context": "The professor would often digress into fascinating tangents about his own research.",
        "correct": "To leave the main subject temporarily",
        "wrong": [
            "To express strong disagreement",
            "To move backward or regress",
            "To break down food in the stomach"
        ],
        "explanation": {
            "right": "DIGRESS means to leave the main subject temporarily in speech or writing — to go off on a tangent. From Latin digredi (to step aside).",
            "traps": [
                "'Express disagreement' has no connection — you might be thinking of DISAGREE.",
                "'Move backward' confuses DIGRESS with REGRESS — re- means back, di- means apart/aside.",
                "'Break down food' confuses DIGRESS with DIGEST — very similar spelling but completely different meanings."
            ],
            "hook": "DI-GRESS: to step to the side (DI = apart). 'But I digress...' = 'I've wandered off topic.'"
        }
    },
    {
        "id": "vocab_diligent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DILIGENT mean?",
        "context": "Her diligent preparation for the exam paid off with a near-perfect score.",
        "correct": "Showing care and effort in one's work",
        "wrong": [
            "Extremely intelligent",
            "Moving slowly and reluctantly",
            "Breaking the rules deliberately"
        ],
        "explanation": {
            "right": "DILIGENT means having or showing care, conscientiousness, and persistent effort in one's work. From Latin diligens (loving, attentive).",
            "traps": [
                "'Extremely intelligent' is wrong — diligent means hardworking, not smart. You can be diligent without being brilliant.",
                "'Moving slowly' is wrong — diligent implies steady effort, not slowness. A diligent worker might be fast.",
                "'Breaking rules' confuses DILIGENT with DELINQUENT — similar sound but opposite meanings!"
            ],
            "hook": "DILIGENT: think of a DILIGENT student who does ALL the homework carefully. Hard worker."
        }
    },
    {
        "id": "vocab_discredit",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DISCREDIT mean?",
        "context": "The new study discredited the earlier research by exposing flawed methodology.",
        "correct": "To cause to seem less believable; to harm a reputation",
        "wrong": [
            "To give proper credit to someone",
            "To remove someone's credit card",
            "To express disbelief"
        ],
        "explanation": {
            "right": "DISCREDIT means to harm the good reputation of, or to make something seem less believable or trustworthy. From dis- (not) + credit (belief/trust).",
            "traps": [
                "'Give proper credit' is the opposite — discredit REMOVES credibility.",
                "'Remove a credit card' takes 'credit' too literally in the financial sense.",
                "'Express disbelief' is close but wrong — discredit means to CAUSE others to disbelieve, not to feel disbelief yourself."
            ],
            "hook": "DIS-CREDIT: to take away someone's CREDibility. They lose trust."
        }
    },
    {
        "id": "vocab_disparage",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DISPARAGE mean?",
        "context": "It is unprofessional to disparage your competitors during a job interview.",
        "correct": "To regard or represent as being of little worth",
        "wrong": [
            "To separate into different groups",
            "To cause great damage",
            "To disappear from view"
        ],
        "explanation": {
            "right": "DISPARAGE means to speak of as being of little worth — to belittle, dismiss, or put down. From Old French desparagier (to marry unequally — to lower in rank).",
            "traps": [
                "'Separate into groups' confuses DISPARAGE with DISPARATE (different/distinct) — related root but different word.",
                "'Cause great damage' is too physical — disparaging is verbal belittlement, not physical destruction.",
                "'Disappear' confuses it with DISAPPEAR — similar start but no connection."
            ],
            "hook": "DIS-PARAGE: to say someone is NOT on PAR — not up to standard. Belittling them."
        }
    },
    {
        "id": "vocab_dispel",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DISPEL mean?",
        "context": "The new data dispelled any remaining doubt about the treatment's effectiveness.",
        "correct": "To make a doubt or feeling disappear",
        "wrong": [
            "To cast a magic spell",
            "To spell a word incorrectly",
            "To expel someone from school"
        ],
        "explanation": {
            "right": "DISPEL means to make a doubt, feeling, or belief disappear — to drive away. From Latin dispellere (to drive apart/scatter).",
            "traps": [
                "'Cast a magic spell' confuses DISPEL with SPELL — ironically, dispel means to BREAK a metaphorical spell, not cast one.",
                "'Spell incorrectly' is another SPELL confusion — unrelated to spelling words.",
                "'Expel from school' confuses DISPEL with EXPEL — both have -pel (to drive) but dis- means apart, ex- means out."
            ],
            "hook": "DIS-PEL: to DRIVE (pel) APART (dis). Scatter the doubts — make them vanish."
        }
    },
    {
        "id": "vocab_dissonance",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DISSONANCE mean?",
        "context": "There was cognitive dissonance in claiming to value equality while supporting discriminatory policies.",
        "correct": "Lack of harmony; tension from conflicting ideas",
        "wrong": [
            "A type of musical instrument",
            "Perfect agreement between people",
            "The quality of being resonant"
        ],
        "explanation": {
            "right": "DISSONANCE means a lack of harmony among sounds, or more broadly, tension caused by a combination of conflicting ideas or beliefs. From Latin dissonare (to be discordant).",
            "traps": [
                "'Musical instrument' is wrong — dissonance describes a quality of SOUND (unpleasant clash), not an instrument.",
                "'Perfect agreement' is the opposite — that would be CONSONANCE or HARMONY.",
                "'Being resonant' confuses DISSONANCE with RESONANCE — resonance means vibrating richly, dissonance means clashing unpleasantly."
            ],
            "hook": "DIS-SONANCE: DIS (not/apart) + SONANCE (sound) = sounds that DON'T go together. Discord."
        }
    },
    {
        "id": "vocab_dogmatic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does DOGMATIC mean?",
        "context": "The dogmatic professor refused to consider any evidence that challenged his position.",
        "correct": "Stubbornly opinionated; treating beliefs as absolute truth",
        "wrong": [
            "Related to dogs or animal behavior",
            "Extremely flexible in thinking",
            "Following orders without question"
        ],
        "explanation": {
            "right": "DOGMATIC means inclined to lay down principles as incontrovertibly true — rigidly holding opinions without considering other viewpoints. From Greek dogma (that which one thinks is true).",
            "traps": [
                "'Related to dogs' is a humorous trap — DOG-matic has nothing to do with dogs. It's from Greek DOGMA.",
                "'Extremely flexible' is the exact opposite — dogmatic people are intellectually rigid.",
                "'Following orders' confuses it with OBEDIENT — dogmatic people GIVE orders about beliefs, they don't take them."
            ],
            "hook": "DOG-MATIC: holding onto beliefs like a DOG holds a bone — refusing to let go no matter what."
        }
    },
    {
        "id": "vocab_ebullient",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EBULLIENT mean?",
        "context": "The ebullient crowd greeted the champion's return with deafening cheers.",
        "correct": "Cheerful and full of energy",
        "wrong": [
            "About to boil over with anger",
            "Stubbornly rebellious",
            "Extremely intelligent"
        ],
        "explanation": {
            "right": "EBULLIENT means cheerful and full of energy — overflowing with enthusiasm and excitement. From Latin ebullire (to boil over).",
            "traps": [
                "'Boiling with anger' uses the same root (boil) but in the wrong direction — ebullient is positive energy boiling over, not anger.",
                "'Stubbornly rebellious' has no connection to the word.",
                "'Extremely intelligent' is wrong — ebullient describes energy and mood, not intellect."
            ],
            "hook": "E-BULL-IENT: energy BOILING over like a pot — bubbling up with enthusiasm."
        }
    },
    {
        "id": "vocab_eccentric",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ECCENTRIC mean?",
        "context": "The eccentric inventor worked only at night and kept twelve cats in his laboratory.",
        "correct": "Unconventional and slightly strange",
        "wrong": [
            "Perfectly centered and balanced",
            "Related to electricity",
            "Extremely focused on one task"
        ],
        "explanation": {
            "right": "ECCENTRIC means unconventional and slightly strange — deviating from the norm in an unusual or quirky way. From Latin eccentricus (not having the same center).",
            "traps": [
                "'Perfectly centered' is the literal opposite — eccentric literally means OFF-center.",
                "'Related to electricity' confuses it with ELECTRIC — no connection.",
                "'Extremely focused' confuses it with CONCENTRATED — eccentric people are off-center, not hyper-focused."
            ],
            "hook": "EC-CENTRIC: EX (away from) + CENTRIC (center) = off-center. An eccentric person is off the beaten path."
        }
    },
    {
        "id": "vocab_efficacious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EFFICACIOUS mean?",
        "context": "The new vaccine proved highly efficacious in preventing the disease in clinical trials.",
        "correct": "Successful in producing a desired result",
        "wrong": [
            "Requiring very little effort",
            "Extremely efficient with resources",
            "Having strong side effects"
        ],
        "explanation": {
            "right": "EFFICACIOUS means successful in producing a desired or intended result — effective. From Latin efficax (powerful, effective).",
            "traps": [
                "'Requiring little effort' confuses EFFICACIOUS with EFFORTLESS — something can be efficacious but still require great effort.",
                "'Extremely efficient' confuses EFFICACIOUS with EFFICIENT — efficient means using resources well; efficacious means it WORKS.",
                "'Strong side effects' is wrong — efficacious specifically means it achieves the DESIRED result."
            ],
            "hook": "EFFICACIOUS = it produces the EFFECT you want. Effective. It works."
        }
    },
    {
        "id": "vocab_elusive",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ELUSIVE mean?",
        "context": "Peace remained elusive despite years of painstaking negotiations between the two nations.",
        "correct": "Difficult to find, catch, or achieve",
        "wrong": [
            "Creating an optical illusion",
            "Extremely exclusive and elite",
            "Referring to something indirectly"
        ],
        "explanation": {
            "right": "ELUSIVE means difficult to find, catch, or achieve — something that evades your grasp. From Latin eludere (to evade, to escape by trickery).",
            "traps": [
                "'Optical illusion' confuses ELUSIVE with ILLUSION/ILLUSORY — related Latin roots but different words. Illusory = fake. Elusive = hard to catch.",
                "'Exclusive and elite' confuses ELUSIVE with EXCLUSIVE — similar sound but exclusive means restricted access.",
                "'Referring indirectly' confuses it with ALLUSIVE — to allude means to hint at. Elusive means hard to find."
            ],
            "hook": "ELUSIVE: it ELUDES you — slips away just when you think you've got it."
        }
    },
    {
        "id": "vocab_empathy",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EMPATHY mean?",
        "context": "Good doctors combine technical skill with genuine empathy for their patients' suffering.",
        "correct": "The ability to understand and share another's feelings",
        "wrong": [
            "Feeling sorry for someone from a distance",
            "Having no emotional response",
            "Anger toward another person"
        ],
        "explanation": {
            "right": "EMPATHY means the ability to understand and share the feelings of another person — to feel what they feel. From Greek em (in) + pathos (feeling).",
            "traps": [
                "'Feeling sorry from a distance' is SYMPATHY, not empathy. Sympathy = feeling sorry FOR someone. Empathy = feeling what they feel WITH them.",
                "'No emotional response' is APATHY — a (without) + pathos (feeling).",
                "'Anger toward another' is unrelated — empathy is about shared understanding, not hostility."
            ],
            "hook": "EM-PATHY: EM (in) + PATHY (feeling) = getting IN someone's feelings. You feel what they feel."
        }
    },
    {
        "id": "vocab_empirical",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EMPIRICAL mean?",
        "context": "The scientist demanded empirical evidence before changing her conclusions.",
        "correct": "Based on observation or experience rather than theory",
        "wrong": [
            "Related to an empire or emperor",
            "Purely theoretical",
            "Happening by chance"
        ],
        "explanation": {
            "right": "EMPIRICAL means based on, concerned with, or verifiable by observation or experience rather than pure theory or logic. From Greek empeirikos (experienced).",
            "traps": [
                "'Related to an empire' confuses EMPIRICAL with IMPERIAL — similar sound but EMPIRE vs EXPERIENCE.",
                "'Purely theoretical' is the exact opposite — empirical means based on REAL observations, not theory.",
                "'Happening by chance' confuses it with RANDOM — empirical evidence is systematically gathered."
            ],
            "hook": "EMPIRICAL: think EXPERIENCE. You can OBSERVE it, TEST it, MEASURE it — not just theorize."
        }
    },
    {
        "id": "vocab_enigmatic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ENIGMATIC mean?",
        "context": "The Mona Lisa's enigmatic smile has been analyzed by scholars for centuries.",
        "correct": "Difficult to interpret; mysterious",
        "wrong": [
            "Extremely energetic",
            "Causing allergic reactions",
            "Related to puzzles or games"
        ],
        "explanation": {
            "right": "ENIGMATIC means difficult to interpret or understand — mysterious and puzzling. From Greek ainigma (riddle).",
            "traps": [
                "'Extremely energetic' confuses ENIGMATIC with ENERGETIC — similar start but different meanings.",
                "'Causing allergies' has no connection.",
                "'Related to puzzles' is close but too literal — enigmatic means mysteriously difficult to understand, not literally a puzzle game."
            ],
            "hook": "ENIGMATIC: think ENIGMA — a mystery, a riddle. An enigmatic person is hard to figure out."
        }
    },
    {
        "id": "vocab_ephemeral",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EPHEMERAL mean?",
        "context": "Social media fame is often ephemeral — viral one week, completely forgotten the next.",
        "correct": "Lasting for a very short time",
        "wrong": [
            "Lasting forever",
            "Related to the atmosphere",
            "Extremely important"
        ],
        "explanation": {
            "right": "EPHEMERAL means lasting for a very short time — transient and fleeting. From Greek epi (on) + hemera (day) — literally 'lasting only a day.'",
            "traps": [
                "'Lasting forever' is the exact opposite — that's ETERNAL or PERMANENT.",
                "'Related to atmosphere' confuses EPHEMERAL with ETHEREAL — ethereal means delicate/heavenly, ephemeral means short-lived.",
                "'Extremely important' has no connection — ephemeral things are often trivial precisely because they don't last."
            ],
            "hook": "EPHEMERAL: EPI + HEMERA = 'upon a day' — lasting just one day. Here today, gone tomorrow."
        }
    },
    {
        "id": "vocab_equivocal",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EQUIVOCAL mean?",
        "context": "The politician gave an equivocal answer that satisfied neither supporters nor critics.",
        "correct": "Open to more than one interpretation; ambiguous",
        "wrong": [
            "Equal in value or amount",
            "Spoken in a calm, even voice",
            "Morally correct and fair"
        ],
        "explanation": {
            "right": "EQUIVOCAL means open to more than one interpretation — ambiguous, unclear, or deliberately vague. From Latin aequus (equal) + vox (voice) — speaking with equal voices on both sides.",
            "traps": [
                "'Equal in value' confuses EQUIVOCAL with EQUIVALENT — equi- means equal in both, but -vocal vs -valent changes everything.",
                "'Calm, even voice' takes EQUI (equal) + VOCAL too literally — it's about ambiguous MEANING, not tone of voice.",
                "'Morally correct' confuses it with EQUITABLE — equitable means fair, equivocal means unclear."
            ],
            "hook": "EQUI-VOCAL: EQUAL VOICES on both sides — the statement could go either way. Ambiguous."
        }
    },
    {
        "id": "vocab_erratic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ERRATIC mean?",
        "context": "The stock's erratic behavior made it far too risky for conservative investors.",
        "correct": "Not even or regular; unpredictable",
        "wrong": [
            "Moving in a straight line",
            "Related to errors or mistakes",
            "Extremely fast-moving"
        ],
        "explanation": {
            "right": "ERRATIC means not even or regular in pattern or movement — unpredictable, inconsistent. From Latin errare (to wander).",
            "traps": [
                "'Moving in a straight line' is the opposite — erratic movement wanders and is unpredictable.",
                "'Related to errors' is a partial trap — same Latin root (errare = to wander/stray) but erratic doesn't mean making mistakes; it means being unpredictable.",
                "'Extremely fast' is wrong — erratic refers to inconsistency, not speed."
            ],
            "hook": "ERRATIC: think of a car ERRATICALLY swerving — unpredictable, all over the road."
        }
    },
    {
        "id": "vocab_esoteric",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ESOTERIC mean?",
        "context": "The lecture on quantum chromodynamics was too esoteric for the general audience.",
        "correct": "Understood only by those with specialized knowledge",
        "wrong": [
            "Related to outer space",
            "Extremely beautiful and exotic",
            "Easy for anyone to understand"
        ],
        "explanation": {
            "right": "ESOTERIC means intended for or likely understood only by a small number of people with specialized knowledge. From Greek esoterikos (inner — belonging to the inner circle).",
            "traps": [
                "'Related to outer space' confuses ESOTERIC with EXOSPHERE or EXTRATERRESTRIAL — the ESO- here means inner, not outer.",
                "'Beautiful and exotic' confuses it with EXOTIC — esoteric means hard to understand, not visually appealing.",
                "'Easy to understand' is the exact opposite — that would be EXOTERIC (for the outside/general public)."
            ],
            "hook": "ESOTERIC: for the INNER circle only. ESO = inner. Only specialists get it."
        }
    },
    {
        "id": "vocab_euphemism",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EUPHEMISM mean?",
        "context": "'Downsizing' is a euphemism for firing workers — it sounds nicer than what it actually means.",
        "correct": "A mild word used in place of one that seems too harsh",
        "wrong": [
            "A feeling of great happiness",
            "A pleasant musical sound",
            "An exaggerated statement"
        ],
        "explanation": {
            "right": "EUPHEMISM means a mild or indirect word or expression used in place of one considered too harsh, blunt, or offensive. From Greek euphemismos (use of auspicious words).",
            "traps": [
                "'Great happiness' confuses EUPHEMISM with EUPHORIA — both start with EU- (good) but are different words.",
                "'Pleasant sound' confuses it with EUPHONY — eu (good) + phone (sound) = good sound. Different word.",
                "'Exaggerated statement' confuses it with HYPERBOLE — euphemism softens, hyperbole exaggerates."
            ],
            "hook": "EU-PHEM-ISM: EU (good) + PHEM (speaking) = speaking in a GOOD way about something bad. Sugarcoating."
        }
    },
    {
        "id": "vocab_exacerbate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EXACERBATE mean?",
        "context": "The drought was exacerbated by poor water management policies.",
        "correct": "To make a problem worse",
        "wrong": [
            "To remove all traces of something",
            "To make more exact or precise",
            "To greatly improve a situation"
        ],
        "explanation": {
            "right": "EXACERBATE means to make a problem, bad situation, or negative feeling worse — to intensify something negative. From Latin exacerbare (to make harsh).",
            "traps": [
                "'Remove all traces' confuses it with ERADICATE — both start with EX- but mean different things.",
                "'Make more exact' confuses EXACERBATE with EXACT — similar letters but no connection.",
                "'Greatly improve' is the exact opposite — exacerbate makes things WORSE, not better."
            ],
            "hook": "EXACERBATE: makes things EXCESSIVELY ACERBIC (bitter/harsh). Pours fuel on the fire."
        }
    },
    {
        "id": "vocab_exemplary",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EXEMPLARY mean?",
        "context": "Her exemplary conduct earned her employee of the year recognition.",
        "correct": "Serving as an outstanding example; representing the best",
        "wrong": [
            "Free from any rules or requirements",
            "Serving as a warning to others",
            "Average or typical"
        ],
        "explanation": {
            "right": "EXEMPLARY means serving as a desirable model — representing the best of its kind, worthy of imitation. From Latin exemplum (example).",
            "traps": [
                "'Free from rules' confuses EXEMPLARY with EXEMPT — exempt means excused from, exemplary means outstanding.",
                "'Warning to others' is a secondary meaning (exemplary punishment = punishment as a warning) but the primary SAT meaning is 'outstanding.'",
                "'Average or typical' is wrong — exemplary means ABOVE average, not merely representative."
            ],
            "hook": "EXEMPLARY: an EXAMPLE worth following. The gold standard. The best."
        }
    },
    {
        "id": "vocab_exhaustive",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EXHAUSTIVE mean?",
        "context": "The report was exhaustive, covering every aspect of the project's environmental impact.",
        "correct": "Including all elements; completely thorough",
        "wrong": [
            "Extremely tiring",
            "Running out of resources",
            "Brief and incomplete"
        ],
        "explanation": {
            "right": "EXHAUSTIVE means examining, including, or considering all elements or aspects — completely thorough and comprehensive. From Latin exhaustus (drawn out completely).",
            "traps": [
                "'Extremely tiring' confuses EXHAUSTIVE with EXHAUSTING — exhaustive = thorough; exhausting = tiring. Different!",
                "'Running out of resources' confuses it with EXHAUSTED (depleted) — an exhausted supply vs. an exhaustive search.",
                "'Brief and incomplete' is the opposite — exhaustive means it covers EVERYTHING."
            ],
            "hook": "EXHAUSTIVE: it EXHAUSTS the topic — covers it so completely there's nothing left to say."
        }
    },
    {
        "id": "vocab_exonerate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EXONERATE mean?",
        "context": "New DNA evidence exonerated the man who had spent twelve years in prison.",
        "correct": "To officially absolve from blame",
        "wrong": [
            "To make an example of someone",
            "To increase in importance",
            "To decorate elaborately"
        ],
        "explanation": {
            "right": "EXONERATE means to officially absolve someone from blame or a criminal charge — to clear them of wrongdoing. From Latin exonerare (to free from a burden).",
            "traps": [
                "'Make an example of' is wrong — that's to punish publicly, the opposite of clearing someone.",
                "'Increase in importance' has no connection.",
                "'Decorate elaborately' confuses EXONERATE with ORNATE — ornate means fancy/decorated."
            ],
            "hook": "EX-ONERATE: remove the ONUS (burden/blame). Free someone from the weight of accusation."
        }
    },
    {
        "id": "vocab_expedient",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EXPEDIENT mean?",
        "context": "Taking the shortcut was expedient but not entirely ethical.",
        "correct": "Convenient and practical, though possibly improper",
        "wrong": [
            "Moving very quickly",
            "Extremely experienced",
            "Following all proper procedures"
        ],
        "explanation": {
            "right": "EXPEDIENT means convenient and practical for achieving a purpose, though possibly improper or immoral. Often implies sacrificing principle for practicality. From Latin expedire (to free the feet).",
            "traps": [
                "'Moving very quickly' confuses EXPEDIENT with EXPEDITIOUS — expeditious means fast; expedient means convenient (possibly at a moral cost).",
                "'Extremely experienced' has no connection.",
                "'Following proper procedures' is the opposite implication — expedient often means cutting corners."
            ],
            "hook": "EXPEDIENT: it gets the job done FAST (like an expedition), but maybe cuts some corners."
        }
    },
    {
        "id": "vocab_explicit",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does EXPLICIT mean?",
        "context": "The instructions were explicit about what was allowed and what was strictly forbidden.",
        "correct": "Stated clearly and in detail; leaving no room for confusion",
        "wrong": [
            "Implied but not directly stated",
            "Containing inappropriate content",
            "Extremely complicated"
        ],
        "explanation": {
            "right": "EXPLICIT means stated clearly and in detail, leaving no room for confusion or doubt. From Latin explicitus (unfolded). Antonym: implicit (implied but not stated).",
            "traps": [
                "'Implied but not stated' is the antonym — that's IMPLICIT. This is the #1 confusion on the SAT.",
                "'Inappropriate content' is a common everyday usage (explicit lyrics) but NOT the SAT meaning — on the SAT, explicit = clearly stated.",
                "'Extremely complicated' is wrong — explicit things are CLEAR, not complex."
            ],
            "hook": "EXPLICIT vs IMPLICIT: EXPLICIT = EX (out) = spelled OUT clearly. IMPLICIT = IM (in) = hidden IN the subtext."
        }
    },
    {
        "id": "vocab_facilitate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FACILITATE mean?",
        "context": "The new software facilitates collaboration between team members across different time zones.",
        "correct": "To make an action or process easier",
        "wrong": [
            "To make something more difficult",
            "To create an exact copy",
            "To shut down a facility"
        ],
        "explanation": {
            "right": "FACILITATE means to make an action or process easier — to help something happen smoothly. From Latin facilis (easy).",
            "traps": [
                "'Make more difficult' is the opposite — that would be IMPEDE or HINDER.",
                "'Create an exact copy' confuses FACILITATE with FACSIMILE — different words despite shared FAC- root.",
                "'Shut down a facility' confuses the word with FACILITY — a facilitator helps things happen, doesn't shut them down."
            ],
            "hook": "FACIL-ITATE: FACIL = easy (like 'facile'). To facilitate = to make EASY."
        }
    },
    {
        "id": "vocab_fallacious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FALLACIOUS mean?",
        "context": "The argument that correlation always equals causation is fallacious.",
        "correct": "Based on a mistaken belief; misleading",
        "wrong": [
            "Likely to fall or collapse",
            "Extremely beautiful",
            "Unable to make errors"
        ],
        "explanation": {
            "right": "FALLACIOUS means based on a mistaken belief or faulty reasoning — misleading, logically flawed. From Latin fallax (deceitful). Related: fallacy (noun).",
            "traps": [
                "'Likely to fall' confuses FALLACIOUS with FALL — different root (fallax = deceit, not falling).",
                "'Extremely beautiful' has no connection.",
                "'Unable to make errors' confuses it with INFALLIBLE — INfallible means CAN'T be wrong; fallacious means IS wrong."
            ],
            "hook": "FALLACIOUS: contains FALLACY. A fallacious argument commits a FALLACY — a logical error."
        }
    },
    {
        "id": "vocab_fervid",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FERVID mean?",
        "context": "She was a fervid advocate for criminal justice reform, speaking at every opportunity.",
        "correct": "Intensely enthusiastic or passionate",
        "wrong": [
            "Slightly warm or lukewarm",
            "Nervous and fidgeting",
            "Running a high fever"
        ],
        "explanation": {
            "right": "FERVID means intensely enthusiastic, passionate, or zealous — burning with conviction. From Latin fervidus (glowing, boiling).",
            "traps": [
                "'Slightly warm' is far too mild — fervid implies INTENSE heat/passion, not lukewarm.",
                "'Nervous and fidgeting' confuses FERVID with FERVID being close to NERVOUS — unrelated.",
                "'Running a fever' takes the heat metaphor too literally — fervid is figurative passion, not literal body temperature."
            ],
            "hook": "FERVID: FERV = boil/burn (like fervent). Passion that BOILS inside you."
        }
    },
    {
        "id": "vocab_fickle",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FICKLE mean?",
        "context": "Fashion trends are fickle — what is stylish today is outdated tomorrow.",
        "correct": "Changing frequently in loyalty or interest",
        "wrong": [
            "Weak and fragile",
            "Difficult to understand",
            "Small and insignificant"
        ],
        "explanation": {
            "right": "FICKLE means changing frequently, especially regarding loyalties, interests, or affections — unreliable and inconsistent. From Old English ficol (deceitful).",
            "traps": [
                "'Weak and fragile' confuses FICKLE with FEEBLE — similar F-sound but different meanings.",
                "'Difficult to understand' has no connection — that would be CRYPTIC or ABSTRUSE.",
                "'Small and insignificant' confuses FICKLE with words like PALTRY or TRIVIAL."
            ],
            "hook": "FICKLE: think of a FICKLE friend who changes favorites constantly — loyal to you Monday, ignoring you Tuesday."
        }
    },
    {
        "id": "vocab_flagrant",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FLAGRANT mean?",
        "context": "The referee could not ignore such a flagrant foul — it was visible to everyone.",
        "correct": "Conspicuously or obviously offensive",
        "wrong": [
            "Having a pleasant fragrance",
            "Waving like a flag in the wind",
            "Barely noticeable"
        ],
        "explanation": {
            "right": "FLAGRANT means conspicuously or obviously offensive — so bad it's impossible to overlook. From Latin flagrare (to burn — blazing for all to see).",
            "traps": [
                "'Pleasant fragrance' confuses FLAGRANT with FRAGRANT — one letter difference! Fragrant = smells good. Flagrant = obviously bad.",
                "'Waving like a flag' is a visual trap — FLAG-rant looks like FLAG but comes from Latin 'to burn.'",
                "'Barely noticeable' is the opposite — flagrant means SO obvious it can't be missed."
            ],
            "hook": "FLAGRANT vs FRAGRANT: fLagrant = L for LOUSY (obviously bad). fRagrant = R for ROSES (smells good)."
        }
    },
    {
        "id": "vocab_fleeting",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FLEETING mean?",
        "context": "She caught only a fleeting glimpse of the deer before it vanished into the forest.",
        "correct": "Lasting for a very short time",
        "wrong": [
            "Moving quickly through water",
            "Running away from danger",
            "Relating to a fleet of ships"
        ],
        "explanation": {
            "right": "FLEETING means lasting for a very short time — passing swiftly, brief and transient. From Old Norse fljota (to float away quickly).",
            "traps": [
                "'Moving through water' confuses FLEETING with FLOATING — related origin but different modern meaning.",
                "'Running from danger' confuses it with FLEEING — to flee is to run away; fleeting means brief.",
                "'Fleet of ships' confuses it with FLEET (noun) — a fleet is a group of ships; fleeting (adj) means short-lived."
            ],
            "hook": "FLEETING moment = it FLEES quickly. Blink and you miss it."
        }
    },
    {
        "id": "vocab_forthright",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FORTHRIGHT mean?",
        "context": "He appreciated her forthright manner — she never sugarcoated bad news.",
        "correct": "Direct and outspoken; frank",
        "wrong": [
            "Moving forward in a straight line",
            "Correct and proper",
            "Coming from the right side"
        ],
        "explanation": {
            "right": "FORTHRIGHT means direct and outspoken — honest and frank in speech without hiding behind politeness. From Old English forþ (forward) + riht (right/straight).",
            "traps": [
                "'Moving forward' takes FORTH too literally — forthright is about directness in communication, not physical movement.",
                "'Correct and proper' confuses RIGHT with being RIGHT/correct — forthright means direct, not necessarily correct.",
                "'From the right side' is a literal misreading of FORTH + RIGHT — it's about speaking straight (right) forward (forth)."
            ],
            "hook": "FORTH-RIGHT: coming RIGHT FORTH with the truth. No beating around the bush."
        }
    },
    {
        "id": "vocab_frugal",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does FRUGAL mean?",
        "context": "Despite his considerable wealth, he remained frugal, driving a ten-year-old car.",
        "correct": "Sparing or economical with money",
        "wrong": [
            "Extremely generous with spending",
            "Related to fruit or vegetation",
            "Weak and delicate"
        ],
        "explanation": {
            "right": "FRUGAL means sparing or economical with money or food — careful not to waste resources. From Latin frugalis (virtuous, thrifty).",
            "traps": [
                "'Extremely generous' is the opposite — a frugal person saves, not spends.",
                "'Related to fruit' confuses FRUGAL with FRUGIVORE or FRUIT — the Latin root frugalis is about virtue/thrift, not fruit.",
                "'Weak and delicate' confuses FRUGAL with FRAGILE — similar start but different meanings."
            ],
            "hook": "FRUGAL: FRU-GAL saves every penny. Thrifty, not wasteful."
        }
    },
    {
        "id": "vocab_garrulous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does GARRULOUS mean?",
        "context": "The garrulous neighbor kept her talking on the doorstep for forty minutes.",
        "correct": "Excessively talkative",
        "wrong": [
            "Extremely garish in appearance",
            "Brave and chivalrous",
            "Growling or grumbling"
        ],
        "explanation": {
            "right": "GARRULOUS means excessively talkative, especially about trivial things — chatty to an annoying degree. From Latin garrire (to chatter).",
            "traps": [
                "'Garish in appearance' confuses GARRULOUS with GARISH — both start with GAR- but garish means loud/tacky in appearance.",
                "'Brave and chivalrous' has no connection — you might be thinking of GALLANT.",
                "'Growling or grumbling' confuses the GAR- sound with animal sounds — unrelated."
            ],
            "hook": "GARRULOUS: GAR-RULE-OUS — they rule the conversation by talking NON-STOP."
        }
    },
    {
        "id": "vocab_gratuitous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does GRATUITOUS mean?",
        "context": "Critics found the violence in the film gratuitous — it served no narrative purpose.",
        "correct": "Uncalled for; without good reason",
        "wrong": [
            "Deserving of gratitude",
            "Given as a gift",
            "Extremely grateful"
        ],
        "explanation": {
            "right": "GRATUITOUS means uncalled for, unnecessary, or without good reason — done without justification. From Latin gratuitus (free, without charge — given freely, i.e., with no reason required).",
            "traps": [
                "'Deserving gratitude' confuses GRATUITOUS with GRATEFUL/GRATITUDE — same Latin root (gratus = pleasing) but different direction.",
                "'Given as a gift' is the original meaning (free of charge, like a gratuity/tip) but on the SAT it means 'unnecessary.'",
                "'Extremely grateful' confuses it with GRATEFUL — different word."
            ],
            "hook": "GRATUITOUS: like leaving a huge GRATUITY (tip) for terrible service — unnecessary, uncalled for."
        }
    },
    {
        "id": "vocab_gregarious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does GREGARIOUS mean?",
        "context": "The gregarious host made sure every guest felt welcome and included in conversation.",
        "correct": "Fond of company; sociable",
        "wrong": [
            "Living alone and avoiding others",
            "Extremely greedy",
            "Tending to complain a lot"
        ],
        "explanation": {
            "right": "GREGARIOUS means fond of company — sociable and enjoying being with others. Also used for animals that live in flocks or herds. From Latin gregarius (of the flock).",
            "traps": [
                "'Living alone' is the exact opposite — that would be RECLUSIVE or SOLITARY.",
                "'Extremely greedy' confuses GREGARIOUS with GREEDY — similar start but no connection.",
                "'Complaining a lot' has no connection — that would be QUERULOUS."
            ],
            "hook": "GREGARIOUS: think GREG in a GROUP. Gregarious people love being in GROUPS (greges = flock in Latin)."
        }
    },
    {
        "id": "vocab_hackneyed",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does HACKNEYED mean?",
        "context": "The speech was full of hackneyed phrases like 'think outside the box' and 'at the end of the day.'",
        "correct": "Overused and unoriginal; clichéd",
        "wrong": [
            "Skillfully crafted",
            "Violently attacked",
            "Related to horse-drawn carriages"
        ],
        "explanation": {
            "right": "HACKNEYED means lacking significance through having been overused — trite, clichéd, unoriginal. From Hackney (London borough) — hackney horses were so commonplace they became synonymous with 'ordinary.'",
            "traps": [
                "'Skillfully crafted' is wrong — hackneyed means the OPPOSITE of fresh and well-crafted.",
                "'Violently attacked' confuses HACKNEYED with HACKED — to hack means to chop; hackneyed means overused.",
                "'Horse-drawn carriages' is the historical origin but not the modern meaning — today it means clichéd."
            ],
            "hook": "HACKNEYED: a HACK writer uses hackneyed phrases — boring, unoriginal, heard a million times."
        }
    },
    {
        "id": "vocab_hegemony",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does HEGEMONY mean?",
        "context": "The book examines how one nation established cultural hegemony over its neighbors.",
        "correct": "Leadership or dominance, especially of one group over others",
        "wrong": [
            "A type of geometric shape",
            "Equal sharing of power",
            "A large gemstone"
        ],
        "explanation": {
            "right": "HEGEMONY means leadership or dominance, especially by one country or social group over others — dominant influence or authority. From Greek hegemonia (leadership).",
            "traps": [
                "'Geometric shape' confuses HEGEMONY with HEXAGON or similar — no connection.",
                "'Equal sharing of power' is the opposite — hegemony means one group DOMINATES, not shares.",
                "'Large gemstone' confuses it with a nonexistent word — no connection to gems."
            ],
            "hook": "HEGEMONY: the HEGEMON (leader) has DOMINANCE over everyone else. One boss rules all."
        }
    },
    {
        "id": "vocab_hypocritical",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does HYPOCRITICAL mean?",
        "context": "It seemed hypocritical to preach environmental responsibility while flying on private jets.",
        "correct": "Claiming beliefs that contradict one's own behavior",
        "wrong": [
            "Being overly critical of others",
            "Related to medical hypotheses",
            "Extremely skeptical"
        ],
        "explanation": {
            "right": "HYPOCRITICAL means claiming to have moral standards or beliefs that one's own behavior does not match — saying one thing and doing another. From Greek hypokrites (actor — one who plays a part).",
            "traps": [
                "'Overly critical' confuses HYPOCRITICAL with HYPER-CRITICAL — hyper + critical = excessively critical. Different word.",
                "'Medical hypotheses' confuses HYPO- with HYPOTHETICAL — different prefix usage.",
                "'Extremely skeptical' confuses it with CRITICAL thinking — hypocritical is about behavioral contradictions, not skepticism."
            ],
            "hook": "HYPO-CRITICAL: wearing a mask (like an actor — Greek hypokrites). Your public face doesn't match your private behavior."
        }
    },
    {
        "id": "vocab_immutable",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does IMMUTABLE mean?",
        "context": "The laws of physics are immutable — they apply the same everywhere in the universe.",
        "correct": "Unchanging over time; unable to be changed",
        "wrong": [
            "Able to be changed easily",
            "Silent or unable to speak",
            "Extremely loud or noisy"
        ],
        "explanation": {
            "right": "IMMUTABLE means unchanging over time or unable to be changed — permanent and fixed. From Latin in (not) + mutare (to change).",
            "traps": [
                "'Easily changed' is the exact opposite — that would be MUTABLE.",
                "'Silent or unable to speak' confuses IMMUTABLE with MUTE — im-MUTABLE vs MUTE. Different roots.",
                "'Extremely loud' is the opposite of mute and still wrong — immutable is about change, not sound."
            ],
            "hook": "IM-MUTABLE: IM (not) + MUTABLE (changeable) = NOT changeable. Fixed forever. Like MUTATE means to change — immutable can't mutate."
        }
    },
    {
        "id": "vocab_impartial",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does IMPARTIAL mean?",
        "context": "A judge must remain impartial, setting aside all personal opinions during a trial.",
        "correct": "Treating all sides equally; unbiased",
        "wrong": [
            "Giving only part of the information",
            "Not participating at all",
            "Taking one side strongly"
        ],
        "explanation": {
            "right": "IMPARTIAL means treating all rivals or disputants equally — fair and unbiased, not favoring either side. From Latin in (not) + pars (part/side).",
            "traps": [
                "'Only part of the information' confuses IM-PARTIAL with PARTIAL (incomplete) — but impartial means not taking a PART/side.",
                "'Not participating' confuses it with being uninvolved — impartial people ARE involved but remain neutral.",
                "'Taking one side strongly' is the opposite — that's PARTIAL (biased toward one side)."
            ],
            "hook": "IM-PARTIAL: NOT taking a PART (side). Not partial to either team. Neutral referee."
        }
    },
    {
        "id": "vocab_impede",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does IMPEDE mean?",
        "context": "The fallen tree impeded traffic on the highway for several hours.",
        "correct": "To delay or prevent by obstructing",
        "wrong": [
            "To move at high speed",
            "To formally accuse someone",
            "To beg or plead"
        ],
        "explanation": {
            "right": "IMPEDE means to delay or prevent something by obstructing it — to hinder or slow down progress. From Latin impedire (to shackle the feet — pes/pedis = foot).",
            "traps": [
                "'Move at high speed' confuses IMPEDE with SPEED — impede is the opposite of speeding up.",
                "'Formally accuse' confuses it with IMPEACH — similar start but impeach means to charge with misconduct.",
                "'Beg or plead' confuses it with IMPLORE — different word entirely."
            ],
            "hook": "IM-PEDE: shackle the PEDES (feet). If your feet are chained, you're IMPEDED — blocked from moving forward."
        }
    },
    {
        "id": "vocab_implicit",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does IMPLICIT mean?",
        "context": "There was an implicit understanding that the meeting discussion was strictly confidential.",
        "correct": "Implied though not directly stated",
        "wrong": [
            "Stated clearly and openly",
            "Done without thinking",
            "Extremely complicated"
        ],
        "explanation": {
            "right": "IMPLICIT means implied or understood without being directly stated — suggested rather than spelled out. Also means absolute/unquestioning (implicit trust). From Latin implicitus (entwined). Antonym: explicit.",
            "traps": [
                "'Stated clearly' is the antonym — that's EXPLICIT. The SAT loves testing this pair.",
                "'Done without thinking' confuses IMPLICIT with IMPULSIVE — impulsive = acting without thought.",
                "'Extremely complicated' confuses it with COMPLEX or IMPLICATED — different words."
            ],
            "hook": "IMPLICIT = hidden IN (im-) the message. You have to read between the lines. EXPLICIT = spelled OUT (ex-)."
        }
    },
    {
        "id": "vocab_inadvertent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INADVERTENT mean?",
        "context": "The programmer made an inadvertent error that caused the entire system to crash.",
        "correct": "Not deliberate; unintentional",
        "wrong": [
            "Done on purpose",
            "Not advertised or promoted",
            "Turned inward or introverted"
        ],
        "explanation": {
            "right": "INADVERTENT means not resulting from deliberate intent — unintentional, accidental. From Latin in (not) + advertere (to turn the mind to).",
            "traps": [
                "'Done on purpose' is the exact opposite — inadvertent means it was an ACCIDENT.",
                "'Not advertised' breaks the word as IN-ADVERTENT (not advertised) — wrong etymology. It's from 'not turning attention to.'",
                "'Turned inward' confuses IN- with INTRO- — unrelated to introversion."
            ],
            "hook": "IN-ADVERTENT: you weren't ADVERTISING (paying attention to) what you were doing. It was an accident."
        }
    },
    {
        "id": "vocab_incisive",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INCISIVE mean?",
        "context": "Her incisive critique identified the core weakness of the research methodology.",
        "correct": "Intelligently analytical and clear-thinking",
        "wrong": [
            "Making a physical cut or incision",
            "Unable to make decisions",
            "Extremely hurtful or cruel"
        ],
        "explanation": {
            "right": "INCISIVE means intelligently analytical and clear-thinking — cutting right to the heart of an issue with sharp insight. From Latin incidere (to cut into).",
            "traps": [
                "'Physical cut' takes the cutting metaphor literally — incisive is about intellectual sharpness, not surgery.",
                "'Unable to decide' confuses INCISIVE with INDECISIVE — in- here is 'into,' not 'not.' Opposite meanings!",
                "'Extremely hurtful' is wrong — incisive is positive (sharp thinking), not negative (cruelty)."
            ],
            "hook": "INCISIVE: cuts IN-to the heart of the matter like a sharp knife. Precise, penetrating analysis."
        }
    },
    {
        "id": "vocab_incongruous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INCONGRUOUS mean?",
        "context": "The modern skyscraper looked incongruous in the small colonial-era town center.",
        "correct": "Not in harmony with surroundings; out of place",
        "wrong": [
            "Perfectly matching and harmonious",
            "Meeting in a formal gathering",
            "Unable to be proven wrong"
        ],
        "explanation": {
            "right": "INCONGRUOUS means not in harmony or keeping with the surroundings — seeming out of place or inappropriate in context. From Latin in (not) + congruere (to agree, fit together).",
            "traps": [
                "'Perfectly matching' is the opposite — that's CONGRUOUS.",
                "'Meeting in a gathering' confuses it with CONGRESS (coming together) — same CONGRU- root but different word.",
                "'Unable to be disproven' is wrong — that would be IRREFUTABLE."
            ],
            "hook": "IN-CONGRUOUS: NOT CONGRUENT. Doesn't fit. Like wearing a tuxedo to the beach — out of place."
        }
    },
    {
        "id": "vocab_indolent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INDOLENT mean?",
        "context": "The indolent student did the bare minimum required to pass each class.",
        "correct": "Wanting to avoid effort; lazy",
        "wrong": [
            "Extremely wealthy",
            "Free from pain",
            "Generous and giving"
        ],
        "explanation": {
            "right": "INDOLENT means wanting to avoid activity or exertion — lazy, idle, slothful. From Latin in (not) + dolere (to feel pain) — not suffering from effort because you never make any.",
            "traps": [
                "'Extremely wealthy' confuses INDOLENT with OPULENT — different words.",
                "'Free from pain' is the literal Latin meaning (in-dolent = not hurting) but the modern English meaning is LAZY.",
                "'Generous and giving' confuses it with INDULGENT — indulgent means overly permissive; indolent means lazy."
            ],
            "hook": "INDOLENT: IN-DOLENT = not feeling any DOLOR (pain/effort). Too lazy to even feel tired."
        }
    },
    {
        "id": "vocab_inert",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INERT mean?",
        "context": "Noble gases are chemically inert — they rarely react with other elements.",
        "correct": "Lacking ability to move or act; inactive",
        "wrong": [
            "Deeply internal or private",
            "Extremely skilled or expert",
            "Moving rapidly and energetically"
        ],
        "explanation": {
            "right": "INERT means lacking the ability or strength to move or act — chemically unreactive or lacking vigor. From Latin iners (unskilled, inactive).",
            "traps": [
                "'Deeply internal' confuses INERT with INNER/INTERNAL — different words.",
                "'Extremely skilled' is the opposite of the Latin root — iners literally means UN-skilled.",
                "'Rapidly moving' is the opposite — inert means motionless and unreactive."
            ],
            "hook": "INERT: like an INERT gas that just sits there and does NOTHING. No reaction."
        }
    },
    {
        "id": "vocab_inevitable",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INEVITABLE mean?",
        "context": "With neither side willing to compromise, armed conflict seemed inevitable.",
        "correct": "Certain to happen; unavoidable",
        "wrong": [
            "Possible but unlikely",
            "Easy to prevent",
            "Happening very slowly"
        ],
        "explanation": {
            "right": "INEVITABLE means certain to happen — unable to be avoided or prevented. From Latin in (not) + evitabilis (avoidable).",
            "traps": [
                "'Possible but unlikely' is too weak — inevitable means it WILL happen, not just might.",
                "'Easy to prevent' is the opposite — inevitable means it CANNOT be prevented.",
                "'Happening slowly' confuses inevitability with pace — inevitable events can happen fast or slow."
            ],
            "hook": "IN-EVIT-ABLE: NOT EVITABLE (avoidable). You cannot EVADE it. It's coming no matter what."
        }
    },
    {
        "id": "vocab_infer",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INFER mean?",
        "context": "From her expression, we could infer that the news was not encouraging.",
        "correct": "To deduce or conclude from evidence",
        "wrong": [
            "To suggest or hint at something",
            "To set on fire",
            "To make someone feel inferior"
        ],
        "explanation": {
            "right": "INFER means to deduce or conclude something from evidence and reasoning rather than from explicit statements. From Latin inferre (to bring in).",
            "traps": [
                "'Suggest or hint' confuses INFER with IMPLY — THE most tested distinction. The speaker IMPLIES; the listener INFERS. Imply = put meaning in. Infer = take meaning out.",
                "'Set on fire' confuses INFER with INFERNO — similar sound but no connection.",
                "'Feel inferior' confuses it with INFERIOR — same INF- start but different words."
            ],
            "hook": "INFER vs IMPLY: I IMPLY (I put the hint in). You INFER (you figure it out). Speaker implies, listener infers."
        }
    },
    {
        "id": "vocab_innovative",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INNOVATIVE mean?",
        "context": "The innovative design won first prize at the international architecture competition.",
        "correct": "Featuring new methods; original and creative",
        "wrong": [
            "Following traditional approaches",
            "Located indoors",
            "Not moving or static"
        ],
        "explanation": {
            "right": "INNOVATIVE means introducing new ideas, methods, or inventions — original, creative, groundbreaking. From Latin innovare (to renew, to make new).",
            "traps": [
                "'Following tradition' is the opposite — innovative means breaking from tradition with NEW approaches.",
                "'Located indoors' confuses INNOVATIVE with INTERIOR — no connection.",
                "'Not moving' confuses it with INERT or IMMOBILE — innovative is about creative newness, not physical motion."
            ],
            "hook": "INNOV-ATIVE: NOVA = new (like a supernova — a new star). Innovative = making things NEW."
        }
    },
    {
        "id": "vocab_insular",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INSULAR mean?",
        "context": "Growing up in a small, insular community, she had never encountered these diverse perspectives.",
        "correct": "Isolated and uninterested in outside ideas",
        "wrong": [
            "Extremely insulting to others",
            "Related to insulation or warmth",
            "Located on an island"
        ],
        "explanation": {
            "right": "INSULAR means ignorant of or uninterested in cultures, ideas, or peoples outside one's own experience — narrow-minded due to isolation. From Latin insula (island).",
            "traps": [
                "'Extremely insulting' confuses INSULAR with INSULT — similar start but completely different.",
                "'Related to insulation' shares the same root (insula = island, insulation = isolation from heat) but insular means culturally closed-off.",
                "'Located on an island' is the literal root meaning — but insular is used figuratively to mean mentally/culturally isolated."
            ],
            "hook": "INSULAR: like living on an ISLAND (insula). Cut off from the outside world. Narrow-minded."
        }
    },
    {
        "id": "vocab_intrepid",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does INTREPID mean?",
        "context": "The intrepid journalist traveled to the war zone to report the story firsthand.",
        "correct": "Fearless; adventurous",
        "wrong": [
            "Extremely afraid",
            "Moving very slowly",
            "Trapped and unable to escape"
        ],
        "explanation": {
            "right": "INTREPID means fearless, adventurous, and brave — willing to face danger without hesitation. From Latin in (not) + trepidus (alarmed/trembling).",
            "traps": [
                "'Extremely afraid' is the exact opposite — IN-trepid means NOT afraid.",
                "'Moving slowly' has no connection — you might be thinking of PLODDING.",
                "'Trapped' confuses INTREPID with TRAPPED — similar sounds but an intrepid person fears no trap."
            ],
            "hook": "IN-TREPID: NOT TREPID (trembling with fear). No fear. The USS Intrepid aircraft carrier = fearless warship."
        }
    },
    {
        "id": "vocab_irony",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does IRONY mean?",
        "context": "The irony was unmistakable: the fire station itself had burned to the ground.",
        "correct": "A state of affairs opposite to what was expected",
        "wrong": [
            "Made entirely of iron",
            "Extremely angry or irate",
            "Smoothing out wrinkles with heat"
        ],
        "explanation": {
            "right": "IRONY means a state of affairs that seems contrary to what one expects — or the use of language that normally signifies the opposite of what is meant. From Greek eironeia (dissimulation). The SAT distinguishes verbal irony (saying the opposite) from situational irony (unexpected outcome).",
            "traps": [
                "'Made of iron' is a humorous literal trap — IRONY has nothing to do with the metal iron.",
                "'Extremely angry' confuses IRONY with IRATE — different words.",
                "'Smoothing wrinkles' confuses it with IRONING — pressing clothes with an iron. Unrelated."
            ],
            "hook": "IRONY: the OPPOSITE of what you'd expect. A fire station burning down. A lifeguard drowning."
        }
    },
    {
        "id": "vocab_jeopardize",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does JEOPARDIZE mean?",
        "context": "The information leak jeopardized the entire undercover investigation.",
        "correct": "To put in danger of loss or harm",
        "wrong": [
            "To make a joke about something",
            "To travel to a distant place",
            "To make a legal judgment"
        ],
        "explanation": {
            "right": "JEOPARDIZE means to put someone or something into a situation where there is a danger of loss, harm, or failure — to risk or endanger. From Old French jeu parti (a divided game — an uncertain situation).",
            "traps": [
                "'Make a joke' confuses JEOPARDIZE with JEST or JOKE — no connection.",
                "'Travel far' has no connection to the word.",
                "'Make a judgment' confuses JEOPARDIZE with JUDGE — different words."
            ],
            "hook": "JEOPARDIZE: put in JEOPARDY. Like the game show — you're risking everything on each question."
        }
    },
    {
        "id": "vocab_judicious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does JUDICIOUS mean?",
        "context": "A judicious investor carefully balances risk and reward before making decisions.",
        "correct": "Having or showing good judgment; wise",
        "wrong": [
            "Being overly judgmental of others",
            "Related to the legal system",
            "Making decisions impulsively"
        ],
        "explanation": {
            "right": "JUDICIOUS means having, showing, or done with good judgment and sense — wise, careful, well-considered. From Latin judex (judge).",
            "traps": [
                "'Overly judgmental' confuses JUDICIOUS with JUDGMENTAL — judicious = wise decisions; judgmental = unfairly critical of others.",
                "'Legal system' confuses it with JUDICIAL — judicial relates to courts; judicious means wise.",
                "'Making decisions impulsively' is the opposite — judicious decisions are careful and well-thought-out."
            ],
            "hook": "JUDICIOUS: using the wisdom of a good JUDGE — fair, balanced, well-reasoned decisions."
        }
    },
    {
        "id": "vocab_languid",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does LANGUID mean?",
        "context": "The languid pace of summer afternoons made it nearly impossible to concentrate.",
        "correct": "Weak or faint; lacking energy or spirit",
        "wrong": [
            "Related to language or speech",
            "Extremely long or drawn out",
            "Belonging to a foreign land"
        ],
        "explanation": {
            "right": "LANGUID means displaying or having a disinclination for physical exertion — weak, sluggish, slow. From Latin languere (to be faint/weary).",
            "traps": [
                "'Related to language' confuses LANGUID with LANGUAGE/LINGUISTIC — similar start but from totally different Latin roots.",
                "'Extremely long' confuses it with LENGTH — languid moments might feel long, but the word means slow/weak, not long.",
                "'Foreign land' confuses LANGUID with words like LAND — no connection."
            ],
            "hook": "LANGUID: LANGU-ID — like a language that has lost all its energy and just... droops. Limp and lazy."
        }
    },
    {
        "id": "vocab_laud",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does LAUD mean?",
        "context": "Critics lauded the film as a masterpiece of modern independent cinema.",
        "correct": "To praise highly",
        "wrong": [
            "To speak very loudly",
            "To laugh heartily",
            "To wash or clean"
        ],
        "explanation": {
            "right": "LAUD means to praise highly — to extol, celebrate, or commend. From Latin laudare (to praise). Related: laudatory (full of praise), laudable (worthy of praise).",
            "traps": [
                "'Speak loudly' confuses LAUD with LOUD — very similar spelling but different meanings and different origins.",
                "'Laugh heartily' is a sound confusion — LAUD and LAUGH start similarly but are unrelated.",
                "'Wash or clean' confuses LAUD with LAUNDER — different words."
            ],
            "hook": "LAUD = APPLAUD without the AP-. When you applaud, you're lauding (praising) someone."
        }
    },
    {
        "id": "vocab_lethargic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does LETHARGIC mean?",
        "context": "After the twelve-hour flight, she felt too lethargic to even unpack her suitcase.",
        "correct": "Sluggish and lacking energy",
        "wrong": [
            "Extremely energetic",
            "Dangerously poisonous",
            "Forgetful and confused"
        ],
        "explanation": {
            "right": "LETHARGIC means affected by lethargy — sluggish, apathetic, and lacking energy or enthusiasm. From Greek lethe (forgetfulness) + argos (idle).",
            "traps": [
                "'Extremely energetic' is the exact opposite — lethargic means drained of energy.",
                "'Dangerously poisonous' confuses LETHARGIC with LETHAL — lethal means deadly; lethargic means sluggish.",
                "'Forgetful' is partially connected (Greek lethe = forgetfulness, as in River Lethe) but the modern meaning is specifically about sluggishness, not memory."
            ],
            "hook": "LETHARGIC: think of a SLOTH that's so lazy it's LETHARGIC. Zero energy. Can't move."
        }
    },
    {
        "id": "vocab_lucid",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does LUCID mean?",
        "context": "The professor's lucid explanation made the complex theory accessible to everyone in the room.",
        "correct": "Expressed clearly; easy to understand",
        "wrong": [
            "Extremely lucky",
            "Shiny and reflective",
            "Related to profit or money"
        ],
        "explanation": {
            "right": "LUCID means expressed clearly and easy to understand, or (of a person) thinking or speaking clearly. From Latin lucidus (light, bright) — ideas made 'bright' with clarity.",
            "traps": [
                "'Extremely lucky' confuses LUCID with LUCKY or LUCRATIVE — different words.",
                "'Shiny and reflective' takes the 'light' root too literally — lucid means intellectually clear, not physically bright.",
                "'Related to profit' confuses it with LUCRATIVE (profitable) — both from LUC- (light) but different meanings."
            ],
            "hook": "LUCID: LUC = light (like TRANSLUCENT). A lucid explanation sheds LIGHT on a topic. Crystal clear."
        }
    },
    {
        "id": "vocab_magnanimous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does MAGNANIMOUS mean?",
        "context": "The champion was magnanimous in victory, praising his opponent's skill and effort.",
        "correct": "Very generous or forgiving, especially toward a rival",
        "wrong": [
            "Extremely magnetic in personality",
            "Large in physical size",
            "Holding a grudge for a long time"
        ],
        "explanation": {
            "right": "MAGNANIMOUS means very generous or forgiving, especially toward a rival or someone less powerful — having a noble spirit. From Latin magnus (great) + animus (soul).",
            "traps": [
                "'Magnetic personality' confuses MAGNANIMOUS with MAGNETIC — similar start but different roots.",
                "'Large in size' takes MAGNUS (great) too literally — magnanimous refers to greatness of spirit, not physical size.",
                "'Holding a grudge' is the opposite — a magnanimous person forgives generously."
            ],
            "hook": "MAGNA-NIMOUS: MAGNA (great) + ANIMUS (spirit/soul) = great-souled. Big-hearted, generous in spirit."
        }
    },
    {
        "id": "vocab_malleable",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does MALLEABLE mean?",
        "context": "Young minds are malleable — shaped by the experiences and influences of early childhood.",
        "correct": "Easily shaped or influenced",
        "wrong": [
            "Extremely hard and resistant",
            "Related to shopping centers",
            "Infected with disease"
        ],
        "explanation": {
            "right": "MALLEABLE means able to be hammered or pressed into shape without breaking, or figuratively, easily influenced or changed. From Latin malleare (to hammer).",
            "traps": [
                "'Hard and resistant' is the opposite — malleable materials yield to pressure.",
                "'Shopping centers' confuses MALLEABLE with MALL — no connection despite similar spelling.",
                "'Infected with disease' confuses it with MALADY — mal- prefix but different word."
            ],
            "hook": "MALLE-ABLE: able to be hit with a MALLET and shaped. Flexible, moldable."
        }
    },
    {
        "id": "vocab_meticulous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does METICULOUS mean?",
        "context": "The surgeon's meticulous technique reduced the risk of complications significantly.",
        "correct": "Showing great attention to detail; very careful",
        "wrong": [
            "Extremely fast and efficient",
            "Related to weather or meteorology",
            "Careless and sloppy"
        ],
        "explanation": {
            "right": "METICULOUS means showing great attention to detail — extremely careful, precise, and thorough. From Latin metus (fear — originally meant overly fearful about details).",
            "traps": [
                "'Fast and efficient' is wrong — meticulous implies CAREFUL, which often means slower, not faster.",
                "'Related to weather' confuses METICULOUS with METEOROLOGICAL — similar MET- start but completely different.",
                "'Careless and sloppy' is the exact opposite of meticulous."
            ],
            "hook": "METICULOUS: every tiny METRIC is checked. Nothing escapes notice. Obsessively careful."
        }
    },
    {
        "id": "vocab_mitigate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does MITIGATE mean?",
        "context": "Wearing sunscreen can mitigate the harmful effects of UV radiation on the skin.",
        "correct": "To make less severe or painful",
        "wrong": [
            "To completely eliminate",
            "To make something worse",
            "To move to a new location"
        ],
        "explanation": {
            "right": "MITIGATE means to make something bad less severe, serious, or painful — to reduce but not remove. From Latin mitigare (to soften). Mitigate ≠ eliminate.",
            "traps": [
                "'Completely eliminate' is too strong — mitigate only REDUCES severity, it doesn't remove the problem entirely.",
                "'Make worse' is the opposite — that's EXACERBATE or AGGRAVATE.",
                "'Move to a new location' confuses MITIGATE with MIGRATE — very similar sound but completely different meanings!"
            ],
            "hook": "MITIGATE vs MIGRATE: mitiGATE = close the GATE on damage (reduce it). miGRATE = move to a new place."
        }
    },
    {
        "id": "vocab_mollify",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does MOLLIFY mean?",
        "context": "She tried to mollify the upset customer with a sincere apology and a discount.",
        "correct": "To appease someone's anger or anxiety",
        "wrong": [
            "To make something moldy or rotten",
            "To destroy completely",
            "To make more difficult"
        ],
        "explanation": {
            "right": "MOLLIFY means to appease the anger or anxiety of someone — to soothe, calm down, or reduce the intensity of negative feelings. From Latin mollificare (to soften).",
            "traps": [
                "'Make moldy' confuses MOLLIFY with MOLD — similar start but unrelated.",
                "'Destroy completely' is the opposite direction — mollifying calms, it doesn't destroy.",
                "'Make difficult' has no connection to the word."
            ],
            "hook": "MOLLIFY: think EMOLLIENT (skin softener). To mollify = to SOFTEN someone's anger."
        }
    },
    {
        "id": "vocab_nefarious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does NEFARIOUS mean?",
        "context": "The hacker's nefarious scheme cost thousands of innocent people their life savings.",
        "correct": "Wicked or criminal",
        "wrong": [
            "Extremely famous",
            "Related to nephews or family",
            "Not caring about anything"
        ],
        "explanation": {
            "right": "NEFARIOUS means wicked, villainous, or criminal — flagrantly evil. From Latin nefas (crime against divine law, from ne- 'not' + fas 'divine law').",
            "traps": [
                "'Extremely famous' confuses NEFARIOUS with FAMOUS — no connection.",
                "'Related to family' confuses it with NEPHEW — the NEF- is coincidental.",
                "'Not caring' confuses it with NONCHALANT or APATHETIC — nefarious means actively evil, not passively indifferent."
            ],
            "hook": "NEFARIOUS: NE-FARIOUS = against what's RIGHT (fas = divine law). Villainous evil."
        }
    },
    {
        "id": "vocab_nominal",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does NOMINAL mean?",
        "context": "He remained the nominal head of the company but had no real decision-making power.",
        "correct": "Existing in name only; very small",
        "wrong": [
            "Extremely large or significant",
            "Normal and expected",
            "Related to nominations or elections"
        ],
        "explanation": {
            "right": "NOMINAL means existing in name only (not in reality), or referring to a very small amount compared to the real value. From Latin nomen (name).",
            "traps": [
                "'Extremely large' is the opposite — a nominal fee is tiny, not large.",
                "'Normal and expected' confuses NOMINAL with NORMAL — similar sound but different meanings.",
                "'Related to nominations' shares the same root (nomen = name) but nominal means 'in name only,' not 'being nominated.'"
            ],
            "hook": "NOMINAL: in NAME only. The NOMINAL leader has the title but not the power. A nominal fee = barely anything."
        }
    },
    {
        "id": "vocab_nuance",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does NUANCE mean?",
        "context": "The translation captured the literal meaning but lost much of the nuance of the original poem.",
        "correct": "A subtle difference in meaning or expression",
        "wrong": [
            "A major, obvious difference",
            "A type of annoyance",
            "A new development or innovation"
        ],
        "explanation": {
            "right": "NUANCE means a subtle difference in or shade of meaning, expression, or sound — a fine distinction. From French nuer (to shade).",
            "traps": [
                "'Major obvious difference' is wrong — nuances are SUBTLE, not obvious.",
                "'A type of annoyance' confuses NUANCE with NUISANCE — very similar sound but different meanings!",
                "'New development' confuses it with NOUVEAU/NEW — nuance comes from 'shade,' not 'new.'"
            ],
            "hook": "NUANCE: like shades of gray between black and white. The SUBTLE differences that matter."
        }
    },
    {
        "id": "vocab_objective",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does OBJECTIVE mean (as adjective)?",
        "context": "A good journalist strives to remain objective, presenting facts without personal bias.",
        "correct": "Not influenced by personal feelings; based on facts",
        "wrong": [
            "Based on personal opinions and emotions",
            "Refusing to participate",
            "Having a clear goal in mind"
        ],
        "explanation": {
            "right": "OBJECTIVE (adj) means not influenced by personal feelings or opinions — dealing with facts impartially and without bias. Antonym: subjective.",
            "traps": [
                "'Based on personal opinions' is the antonym — that's SUBJECTIVE.",
                "'Refusing to participate' confuses objectivity with abstention — being objective means being fair, not absent.",
                "'Having a clear goal' confuses the adjective (unbiased) with the noun (an objective = a goal). Both are valid uses but different meanings."
            ],
            "hook": "OBJECTIVE vs SUBJECTIVE: OBJECTIVE = based on the OBJECT (facts out there). SUBJECTIVE = based on the SUBJECT (feelings in here)."
        }
    },
    {
        "id": "vocab_obsolete",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does OBSOLETE mean?",
        "context": "The invention of smartphones rendered many older technologies completely obsolete.",
        "correct": "No longer in use; outdated",
        "wrong": [
            "Brand new and cutting-edge",
            "Absolutely necessary",
            "Partially complete"
        ],
        "explanation": {
            "right": "OBSOLETE means no longer produced or used — out of date, superseded by something newer. From Latin obsolescere (to fall into disuse).",
            "traps": [
                "'Brand new' is the opposite — obsolete means OLD and replaced.",
                "'Absolutely necessary' confuses OBSOLETE with ABSOLUTE — different words entirely.",
                "'Partially complete' has no connection to the meaning."
            ],
            "hook": "OBSOLETE: OB-SO-LETE — it's SO old it's been deleted from use. Gone, replaced, outdated."
        }
    },
    {
        "id": "vocab_obscure",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does OBSCURE mean?",
        "context": "The report obscured the true costs behind layers of technical jargon.",
        "correct": "To conceal or make unclear; not well-known",
        "wrong": [
            "To make extremely clear",
            "To cure a disease",
            "Offensive or profane"
        ],
        "explanation": {
            "right": "OBSCURE means (adj) not well-known or hard to understand, or (verb) to keep from being seen or understood — to conceal. From Latin obscurus (dark).",
            "traps": [
                "'Make extremely clear' is the opposite — to obscure is to make LESS clear, to hide.",
                "'Cure a disease' has no connection.",
                "'Offensive or profane' confuses OBSCURE with OBSCENE — similar start but very different meanings!"
            ],
            "hook": "OBSCURE: think of darkness (obscurus = dark). Things hidden in the dark are obscure — hard to see or understand."
        }
    },
    {
        "id": "vocab_obstinate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does OBSTINATE mean?",
        "context": "The obstinate negotiator refused every compromise offered to her.",
        "correct": "Stubbornly refusing to change opinion or action",
        "wrong": [
            "Blocking a pathway physically",
            "Giving in easily to pressure",
            "Extremely rude and hostile"
        ],
        "explanation": {
            "right": "OBSTINATE means stubbornly refusing to change one's opinion or chosen course of action — immovable in one's position. From Latin obstinare (to persist, resolve).",
            "traps": [
                "'Blocking a pathway' confuses OBSTINATE with OBSTRUCT — both start with OBST- but obstruct is physical blocking, obstinate is mental stubbornness.",
                "'Giving in easily' is the exact opposite — that would be COMPLIANT or YIELDING.",
                "'Extremely rude' confuses stubbornness with rudeness — you can be obstinate politely."
            ],
            "hook": "OBSTINATE: OB-STIN-ATE — they STAND (stin) their ground. Won't budge. Stubborn as a mule."
        }
    },
    {
        "id": "vocab_overt",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does OVERT mean?",
        "context": "The discrimination was overt — she was told directly that women were not welcome.",
        "correct": "Done openly; not secret or hidden",
        "wrong": [
            "Done in secret; hidden",
            "Excessive or too much",
            "Turned over or upside down"
        ],
        "explanation": {
            "right": "OVERT means done or shown openly — plainly apparent, not secret or hidden. From Old French ouvert (open). Antonym: covert (hidden/secret).",
            "traps": [
                "'Done in secret' is the antonym — that's COVERT. Overt = open, covert = hidden.",
                "'Excessive' confuses OVERT with OVER (too much) — overt means visible, not excessive.",
                "'Turned over' confuses it with OVERTURN — different word."
            ],
            "hook": "OVERT vs COVERT: OVERT = OPEN (both start with O). COVERT = COVERED/hidden (both start with COV)."
        }
    },
    {
        "id": "vocab_paradox",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PARADOX mean?",
        "context": "It is a paradox that standing still in a crowded airport often gets you to your gate faster than rushing.",
        "correct": "A seemingly contradictory statement that may be true",
        "wrong": [
            "Two parallel lines that never meet",
            "A perfect example of something",
            "A pair of matching items"
        ],
        "explanation": {
            "right": "PARADOX means a statement or situation that contradicts itself but may nonetheless be true — something that seems logically impossible yet is real. From Greek para (contrary to) + doxa (opinion).",
            "traps": [
                "'Parallel lines' confuses PARA-DOX with PARALLEL — both have para- but different roots.",
                "'Perfect example' confuses it with PARADIGM — a paradigm is a model; a paradox is a contradiction.",
                "'Pair of matching items' misreads PARA- as 'pair' — wrong."
            ],
            "hook": "PARA-DOX: CONTRARY to common OPINION (doxa). Seems wrong but is right. Mind-bending."
        }
    },
    {
        "id": "vocab_partisan",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PARTISAN mean?",
        "context": "The news coverage was criticized for being partisan rather than balanced and fair.",
        "correct": "Strongly biased in favor of a particular side",
        "wrong": [
            "Divided into equal parts",
            "Participating in something",
            "Related to walls or barriers"
        ],
        "explanation": {
            "right": "PARTISAN means prejudiced in favor of a particular cause, group, or political party — strongly biased, not neutral. From French partisan (one who takes a part/side).",
            "traps": [
                "'Divided into equal parts' confuses PARTISAN with PARTITION — partition = dividing; partisan = taking one side.",
                "'Participating' confuses it with PARTICIPANT — similar root (part) but different meaning.",
                "'Walls or barriers' confuses it with PARTITION again — a partition separates; partisan means biased."
            ],
            "hook": "PARTISAN: taking one PART (side) strongly. A partisan reporter clearly favors one team."
        }
    },
    {
        "id": "vocab_pedantic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PEDANTIC mean?",
        "context": "The editor's pedantic corrections focused on minor comma placement while ignoring major structural flaws.",
        "correct": "Excessively concerned with minor details or rules",
        "wrong": [
            "Related to feet or walking",
            "Teaching in an inspiring way",
            "Moving very slowly"
        ],
        "explanation": {
            "right": "PEDANTIC means excessively concerned with minor details or rules — being overly academic or fussy about correctness at the expense of the bigger picture. From Italian pedante (schoolmaster).",
            "traps": [
                "'Related to feet' confuses PED-ANTIC with PED- (foot, as in pedestrian) — pedantic comes from 'pedagogue' (teacher), not 'ped' (foot).",
                "'Inspiring teaching' is wrong — pedantic teaching is BORING and overly focused on trivia, not inspiring.",
                "'Moving slowly' confuses PED- with PEDESTRIAN (walking) — unrelated."
            ],
            "hook": "PEDANTIC: a PED-ANT (teacher ant) correcting every tiny comma. Missing the forest for the trees."
        }
    },
    {
        "id": "vocab_peripheral",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PERIPHERAL mean?",
        "context": "The issue was peripheral to the main debate and shouldn't have consumed so much time.",
        "correct": "Of secondary importance; on the outer edge",
        "wrong": [
            "Absolutely central and critical",
            "Extremely dangerous",
            "Relating to time periods"
        ],
        "explanation": {
            "right": "PERIPHERAL means relating to or situated on the edge or periphery — of secondary or minor importance compared to the main issue. From Greek periphereia (circumference).",
            "traps": [
                "'Central and critical' is the opposite — peripheral means on the EDGE, not the CENTER.",
                "'Extremely dangerous' confuses PERIPHERAL with PERILOUS — similar sound but perilous means dangerous.",
                "'Time periods' confuses it with PERIOD — no connection."
            ],
            "hook": "PERIPHERAL: on the PERIPHERY — the outer edge. Peripheral vision = what you see on the EDGES. Peripheral issues = side issues."
        }
    },
    {
        "id": "vocab_pervasive",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PERVASIVE mean?",
        "context": "A pervasive sense of anxiety gripped the entire city after the earthquake.",
        "correct": "Spreading widely throughout an area; prevalent",
        "wrong": [
            "Extremely persuasive",
            "Stubbornly resistant",
            "Limited to one small area"
        ],
        "explanation": {
            "right": "PERVASIVE means spreading widely through an area or group of people — present everywhere, difficult to escape. From Latin pervadere (to go through).",
            "traps": [
                "'Extremely persuasive' confuses PERVASIVE with PERSUASIVE — similar sound but pervasive means widespread, persuasive means convincing.",
                "'Stubbornly resistant' has no connection.",
                "'Limited to one area' is the opposite — pervasive means it's EVERYWHERE, not contained."
            ],
            "hook": "PER-VASIVE: it perVADES (spreads through) everything. Like a pervasive smell — it's everywhere."
        }
    },
    {
        "id": "vocab_placate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PLACATE mean?",
        "context": "The manager tried to placate angry employees with promises of future raises.",
        "correct": "To make someone less angry; to appease",
        "wrong": [
            "To place something in a specific location",
            "To cover with a flat surface",
            "To make more angry"
        ],
        "explanation": {
            "right": "PLACATE means to make someone less angry or hostile — to soothe, appease, or calm down. From Latin placare (to calm, appease).",
            "traps": [
                "'Place something' confuses PLACATE with PLACE — similar spelling but different roots (placare vs. platea).",
                "'Cover with a surface' confuses it with PLATE or PLAQUE — unrelated.",
                "'Make more angry' is the opposite — placating REDUCES anger."
            ],
            "hook": "PLACATE: bring someone to a PLACID (calm, peaceful) state. Calm them down."
        }
    },
    {
        "id": "vocab_plausible",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PLAUSIBLE mean?",
        "context": "The suspect's alibi was plausible but investigators remained unconvinced.",
        "correct": "Seeming reasonable or probable",
        "wrong": [
            "Definitely true and proven",
            "Worthy of applause",
            "Impossible to believe"
        ],
        "explanation": {
            "right": "PLAUSIBLE means seeming reasonable or probable — believable on the surface, though not necessarily proven true. From Latin plausibilis (deserving applause, acceptable).",
            "traps": [
                "'Definitely true' is too strong — plausible means it SEEMS true, not that it IS proven true.",
                "'Worthy of applause' is the Latin root meaning but not the modern English meaning.",
                "'Impossible to believe' is the opposite — that would be IMPLAUSIBLE."
            ],
            "hook": "PLAUSIBLE: PLAUS-IBLE = able to get APPLAUSE (acceptance). It sounds believable enough."
        }
    },
    {
        "id": "vocab_pragmatic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PRAGMATIC mean?",
        "context": "A pragmatic approach to politics focuses on what works rather than on pure ideology.",
        "correct": "Dealing with things practically and realistically",
        "wrong": [
            "Extremely dramatic and emotional",
            "Following strict rules without exception",
            "Related to fragments or pieces"
        ],
        "explanation": {
            "right": "PRAGMATIC means dealing with things sensibly and realistically — focused on practical results rather than theory or ideology. From Greek pragma (a thing done, a deed).",
            "traps": [
                "'Dramatic and emotional' confuses PRAGMATIC with DRAMATIC — opposite energies. Pragmatic = calm and practical.",
                "'Following strict rules' confuses it with DOGMATIC — dogmatic is about rigid beliefs; pragmatic is about flexible solutions.",
                "'Fragments or pieces' confuses it with FRAGMENT — no connection."
            ],
            "hook": "PRAGMATIC: PRAGMA = things done. A pragmatic person asks 'what WORKS?' not 'what's ideal?'"
        }
    },
    {
        "id": "vocab_preclude",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PRECLUDE mean?",
        "context": "Her serious knee injury precluded any possibility of competing in the championship.",
        "correct": "To prevent from happening; to make impossible",
        "wrong": [
            "To come before something",
            "To include as a preliminary step",
            "To draw a conclusion"
        ],
        "explanation": {
            "right": "PRECLUDE means to prevent something from happening — to make it impossible in advance. From Latin praecludere (to shut before, to close off).",
            "traps": [
                "'Come before' confuses PRE-CLUDE with PRECEDE — pre- means before in both, but preclude means to block, precede means to come first.",
                "'Include as a preliminary' confuses PRECLUDE with PRELUDE or INCLUDE — preclude means to EXCLUDE/prevent, not include.",
                "'Draw a conclusion' confuses it with CONCLUDE — different root (cludere = to close vs concludere = to close together)."
            ],
            "hook": "PRE-CLUDE: to CLOSE (clude) the door BEFORE (pre) something can happen. Block it in advance."
        }
    },
    {
        "id": "vocab_predominant",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PREDOMINANT mean?",
        "context": "The predominant view among climate scientists is that human activity drives warming.",
        "correct": "Present as the strongest or main element",
        "wrong": [
            "Equally balanced among all elements",
            "Coming before the dominant one",
            "Extremely domineering and controlling"
        ],
        "explanation": {
            "right": "PREDOMINANT means present as the strongest or main element — having the most influence, authority, or prevalence. From Latin prae (before) + dominari (to rule).",
            "traps": [
                "'Equally balanced' is wrong — predominant means ONE element is STRONGER than the rest.",
                "'Coming before the dominant' misreads PRE- as sequential — here it intensifies, meaning 'most dominant.'",
                "'Domineering and controlling' confuses PREDOMINANT (most common/powerful) with DOMINEERING (bullying) — related root but different application."
            ],
            "hook": "PRE-DOMINANT: the MOST DOMINANT. The one that rules above all others."
        }
    },
    {
        "id": "vocab_pretentious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PRETENTIOUS mean?",
        "context": "The restaurant's pretentious menu used obscure French terms for ordinary dishes like grilled chicken.",
        "correct": "Trying to appear more important or cultured than one really is",
        "wrong": [
            "Genuinely sophisticated and cultured",
            "Making false legal claims",
            "Paying close attention to detail"
        ],
        "explanation": {
            "right": "PRETENTIOUS means attempting to impress by affecting greater importance, talent, or culture than is actually possessed — putting on airs, being phony-sophisticated. From Latin praetendere (to allege, to claim).",
            "traps": [
                "'Genuinely sophisticated' is what pretentious people PRETEND to be — the key word is PRETEND. They're faking it.",
                "'False legal claims' takes PRETEND/CLAIM too literally in a legal sense.",
                "'Paying attention to detail' confuses PRETENTIOUS with METICULOUS — unrelated."
            ],
            "hook": "PRETENTIOUS: PRE-TEND-tious. They PRETEND to be fancy. All show, no substance."
        }
    },
    {
        "id": "vocab_pristine",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PRISTINE mean?",
        "context": "The national park preserves thousands of acres of pristine wilderness untouched by development.",
        "correct": "In original condition; unspoiled; spotlessly clean",
        "wrong": [
            "Extremely old and decaying",
            "Related to prisons or confinement",
            "Artificially created"
        ],
        "explanation": {
            "right": "PRISTINE means in its original condition — unspoiled, fresh, and clean as if brand new. From Latin pristinus (former, original).",
            "traps": [
                "'Old and decaying' is wrong — pristine means preserved in ORIGINAL condition, not deteriorated.",
                "'Related to prisons' confuses PRISTINE with PRISON — similar sound but no connection.",
                "'Artificially created' is wrong — pristine implies NATURAL and untouched, not manufactured."
            ],
            "hook": "PRISTINE: think of a PRISTINE beach — untouched, perfect, like no human has ever walked on it."
        }
    },
    {
        "id": "vocab_prodigal",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PRODIGAL mean?",
        "context": "The prodigal heir spent his entire inheritance within a single reckless decade.",
        "correct": "Spending money or resources wastefully",
        "wrong": [
            "Returning home after a long absence",
            "Extremely talented or gifted",
            "Producing in large quantities"
        ],
        "explanation": {
            "right": "PRODIGAL means spending money or resources freely and recklessly — wastefully extravagant. From Latin prodigus (wasteful).",
            "traps": [
                "'Returning home' is the #1 misconception — from the 'Prodigal Son' Bible story, people think prodigal means 'returning.' It means WASTEFUL. The son was prodigal because he wasted his inheritance.",
                "'Extremely talented' confuses PRODIGAL with PRODIGY — a prodigy is a gifted person; prodigal means wasteful.",
                "'Producing in large quantities' confuses it with PROLIFIC — different word."
            ],
            "hook": "PRODIGAL ≠ returning. PRODIGAL = WASTEFUL. The Prodigal Son was named for WASTING his money, not for coming home."
        }
    },
    {
        "id": "vocab_profound",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PROFOUND mean?",
        "context": "The loss of the factory had a profound effect on the small town's economy and morale.",
        "correct": "Very great or intense; showing deep insight",
        "wrong": [
            "Shallow and superficial",
            "Related to professional expertise",
            "Extremely loud or noisy"
        ],
        "explanation": {
            "right": "PROFOUND means very great or intense, or having/showing great knowledge or deep insight. From Latin profundus (deep — pro 'forward' + fundus 'bottom').",
            "traps": [
                "'Shallow and superficial' is the exact opposite — profound means DEEP, not shallow.",
                "'Professional expertise' confuses PROFOUND with PROFICIENT — pro- prefix but different words.",
                "'Extremely loud' confuses it with words like PRONOUNCED — profound is about depth, not volume."
            ],
            "hook": "PRO-FOUND: think FOUND the bottom — gone PRO-foundly DEEP. Deep thought, deep impact."
        }
    },
    {
        "id": "vocab_prolific",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PROLIFIC mean?",
        "context": "She was a prolific author, publishing three critically acclaimed novels every year.",
        "correct": "Producing many works; present in large numbers",
        "wrong": [
            "Producing very high quality",
            "Making large profits",
            "Supporting a professional career"
        ],
        "explanation": {
            "right": "PROLIFIC means present in large numbers or quantities, or producing many works/results — highly productive. From Latin proles (offspring) + facere (to make).",
            "traps": [
                "'High quality' is wrong — prolific means HIGH QUANTITY, not necessarily high quality. You can be prolific AND mediocre.",
                "'Large profits' confuses PROLIFIC with PROFITABLE — similar PRO- start but different meanings.",
                "'Professional career' confuses PRO-LIFIC with PRO-FESSIONAL — unrelated."
            ],
            "hook": "PROLIFIC: PRO (many) + LIFIC (offspring/making). Making LOTS of things. Quantity, quantity, quantity."
        }
    },
    {
        "id": "vocab_propagate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PROPAGATE mean?",
        "context": "Social media can propagate misinformation at an alarming speed across millions of users.",
        "correct": "To spread and promote widely",
        "wrong": [
            "To investigate thoroughly",
            "To prevent from spreading",
            "To move forward slowly"
        ],
        "explanation": {
            "right": "PROPAGATE means to spread and promote an idea, belief, or information widely — also to breed or multiply (plants/animals). From Latin propagare (to multiply, extend).",
            "traps": [
                "'Investigate thoroughly' has no connection to the word.",
                "'Prevent from spreading' is the opposite — propagating SPREADS things, not contains them.",
                "'Move forward slowly' confuses PROPAGATE with PLOD or TRUDGE — no connection."
            ],
            "hook": "PROPAGATE: think PROPAGANDA — both are about SPREADING ideas widely."
        }
    },
    {
        "id": "vocab_prudent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does PRUDENT mean?",
        "context": "It is prudent to save at least three months of living expenses for emergencies.",
        "correct": "Acting with care and thought for the future; wise",
        "wrong": [
            "Overly cautious to the point of cowardice",
            "Uptight about matters of decency",
            "Showing excellent physical fitness"
        ],
        "explanation": {
            "right": "PRUDENT means acting with or showing care and thought for the future — sensible, wise, and forward-thinking. From Latin prudens (foreseeing).",
            "traps": [
                "'Overly cautious/cowardly' is too negative — prudent is positive (wise caution), not fearful.",
                "'Uptight about decency' confuses PRUDENT with PRUDISH — a prude is overly modest; prudent means wisely careful. Different words!",
                "'Physical fitness' has no connection."
            ],
            "hook": "PRUDENT: a PRUDENT person sees the future (prudens = foreseeing). They plan ahead wisely."
        }
    },
    {
        "id": "vocab_qualitative",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does QUALITATIVE mean?",
        "context": "The interview study provided qualitative insights that raw survey numbers could not capture.",
        "correct": "Relating to the quality or character of something",
        "wrong": [
            "Relating to numbers and measurements",
            "Meeting a high standard of excellence",
            "Able to be qualified for something"
        ],
        "explanation": {
            "right": "QUALITATIVE means relating to, measuring, or measured by the quality/nature/character of something rather than its quantity. From Latin qualitas (quality).",
            "traps": [
                "'Numbers and measurements' is the opposite — that's QUANTITATIVE. Qualitative = quality/nature. Quantitative = quantity/numbers.",
                "'High standard' confuses QUALITATIVE with QUALITY — qualitative doesn't mean good quality, it means describing characteristics.",
                "'Able to qualify' confuses it with QUALIFIED — different word."
            ],
            "hook": "QUALITATIVE vs QUANTITATIVE: QUAL = what KIND? (descriptions). QUANT = how MANY? (numbers)."
        }
    },
    {
        "id": "vocab_quell",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does QUELL mean?",
        "context": "The authorities struggled to quell the growing riot in the city center.",
        "correct": "To put an end to; to suppress",
        "wrong": [
            "To ask a series of questions",
            "To feel nauseous or queasy",
            "To satisfy or fulfill"
        ],
        "explanation": {
            "right": "QUELL means to put an end to something, typically by force — to suppress, crush, or calm. From Old English cwellan (to kill).",
            "traps": [
                "'Ask questions' confuses QUELL with QUERY — different words.",
                "'Feel nauseous' confuses QUELL with QUEASY — similar QUE- start but unrelated.",
                "'Satisfy or fulfill' is wrong — that would be QUENCH (quench a thirst). Quell means to suppress."
            ],
            "hook": "QUELL: to KILL a rebellion or fear. From Old English 'to kill' — crushing it completely."
        }
    },
    {
        "id": "vocab_recalcitrant",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does RECALCITRANT mean?",
        "context": "The recalcitrant student refused every attempt at mediation or compromise.",
        "correct": "Obstinately uncooperative; resistant to authority",
        "wrong": [
            "Willing to recalculate or reconsider",
            "Returning to a previous state",
            "Extremely good at math"
        ],
        "explanation": {
            "right": "RECALCITRANT means having an obstinately uncooperative attitude toward authority or discipline — stubbornly defiant. From Latin recalcitrare (to kick back — like a stubborn horse).",
            "traps": [
                "'Willing to reconsider' confuses RE-CALCITRANT with RE-CALCULATE — completely different despite RE- prefix.",
                "'Returning to previous state' confuses RE- with going back — recalcitrant means kicking back against authority.",
                "'Good at math' confuses CALCITRANT with CALCULATE — the root is calcitrare (to kick), not calculus (pebble/counting)."
            ],
            "hook": "RE-CALCITRANT: kicking BACK (re-) like a stubborn horse. Refusing to cooperate."
        }
    },
    {
        "id": "vocab_rectify",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does RECTIFY mean?",
        "context": "The company issued an apology and promised to rectify the billing error immediately.",
        "correct": "To put right; to correct",
        "wrong": [
            "To make rectangular in shape",
            "To make worse or more complicated",
            "To officially approve or authorize"
        ],
        "explanation": {
            "right": "RECTIFY means to put right — to correct an error, fix a problem, or amend a wrong. From Latin rectificare (to make right — rectus = right/straight).",
            "traps": [
                "'Make rectangular' confuses RECT-IFY with RECTANGLE — same root (rectus = straight) but rectify means to correct, not to shape.",
                "'Make worse' is the opposite — rectifying FIXES problems.",
                "'Officially approve' confuses RECTIFY with RATIFY — ratify means to formally approve (a treaty); rectify means to correct (an error)."
            ],
            "hook": "RECTIFY: make it RIGHT (rect = right/correct). Fix the error. Straighten things out."
        }
    },
    {
        "id": "vocab_redundant",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does REDUNDANT mean?",
        "context": "In 'ATM machine,' the word 'machine' is redundant because ATM already stands for Automatic Teller Machine.",
        "correct": "Not needed; using more words than necessary",
        "wrong": [
            "Extremely important and essential",
            "Repeated for emphasis",
            "Flowing abundantly"
        ],
        "explanation": {
            "right": "REDUNDANT means not or no longer needed — superfluous, excessive, or using more words than necessary. From Latin redundare (to overflow — there's more than you need, spilling over).",
            "traps": [
                "'Extremely important' is the opposite — redundant means UNnecessary.",
                "'Repeated for emphasis' is partially right (redundant things ARE repeated) but misses the key point — redundancy is UNNECESSARY repetition, not useful emphasis.",
                "'Flowing abundantly' takes the Latin root (overflow) too literally."
            ],
            "hook": "REDUNDANT: RE-DUN-DANT = done AGAIN unnecessarily. Already said it. Don't need to say it twice."
        }
    },
    {
        "id": "vocab_reticent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does RETICENT mean?",
        "context": "He was reticent about discussing his family background with colleagues.",
        "correct": "Not revealing thoughts readily; reserved",
        "wrong": [
            "Eager to share personal stories",
            "Feeling resentful or bitter",
            "Extremely repetitive"
        ],
        "explanation": {
            "right": "RETICENT means not revealing one's thoughts or feelings readily — reserved, quiet, inclined to say little. From Latin reticere (to keep silent).",
            "traps": [
                "'Eager to share' is the opposite — reticent people hold back.",
                "'Resentful or bitter' confuses RETICENT with RESENTFUL — similar RE- start but different meanings.",
                "'Extremely repetitive' confuses it with REPETITIVE or REITERATIVE — no connection."
            ],
            "hook": "RETICENT: RE-TIC-ENT — keeping your TICK-et (thoughts) to yourself. Silent, reserved."
        }
    },
    {
        "id": "vocab_rhetoric",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does RHETORIC mean?",
        "context": "The speech was powerful rhetoric but ultimately lacked specific policy proposals.",
        "correct": "The art of persuasive speaking or writing",
        "wrong": [
            "A question that doesn't need an answer",
            "Extreme or exaggerated language",
            "The study of historical events"
        ],
        "explanation": {
            "right": "RHETORIC means the art of effective or persuasive speaking or writing — language designed to have a convincing effect. From Greek rhetor (orator/speaker).",
            "traps": [
                "'Question without an answer' confuses RHETORIC with RHETORICAL QUESTION — a rhetorical question is one type that uses rhetoric, but rhetoric itself is the broader art of persuasion.",
                "'Extreme language' is partially right (rhetoric CAN be heated) but the core meaning is persuasive language, not necessarily extreme.",
                "'Study of history' has no connection."
            ],
            "hook": "RHETORIC: a RHETOR (speaker) uses RHETORIC to persuade. The art of convincing people with words."
        }
    },
    {
        "id": "vocab_rigorous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does RIGOROUS mean?",
        "context": "The clinical trial followed a rigorous protocol to ensure completely unbiased results.",
        "correct": "Extremely thorough and careful; strictly applied",
        "wrong": [
            "Extremely rigid and unable to bend",
            "Related to rigor mortis or death",
            "Casual and relaxed"
        ],
        "explanation": {
            "right": "RIGOROUS means extremely thorough, exhaustive, and careful — adhering strictly to rules and standards. From Latin rigor (stiffness, strictness).",
            "traps": [
                "'Unable to bend' takes RIGOR too literally in the physical sense — rigorous is about intellectual/procedural strictness.",
                "'Related to death' confuses RIGOROUS with RIGOR MORTIS — same root but rigorous means thorough/strict, not deadly.",
                "'Casual and relaxed' is the opposite — rigorous means strict and demanding."
            ],
            "hook": "RIGOROUS: done with RIGOR — strict discipline and thoroughness. No shortcuts allowed."
        }
    },
    {
        "id": "vocab_scrutinize",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SCRUTINIZE mean?",
        "context": "The auditors scrutinized every single transaction in the company's financial records.",
        "correct": "To examine closely and thoroughly",
        "wrong": [
            "To glance at briefly",
            "To criticize harshly",
            "To clean or sanitize"
        ],
        "explanation": {
            "right": "SCRUTINIZE means to examine or inspect closely and thoroughly — to look at something with extreme care and attention to detail. From Latin scrutari (to examine, search).",
            "traps": [
                "'Glance briefly' is the opposite — scrutinizing means CAREFUL, THOROUGH examination, not a quick look.",
                "'Criticize harshly' is wrong — scrutinizing is about EXAMINING, not necessarily criticizing. You can scrutinize and find nothing wrong.",
                "'Clean or sanitize' confuses SCRUTINIZE with SANITIZE — no connection."
            ],
            "hook": "SCRUTINIZE: put something under a MICROSCOPE. Examine every tiny detail."
        }
    },
    {
        "id": "vocab_skeptical",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SKEPTICAL mean?",
        "context": "Scientists must remain skeptical of new claims until independently verified.",
        "correct": "Not easily convinced; having doubts",
        "wrong": [
            "Completely trusting and accepting",
            "Physically unwell or nauseous",
            "Related to the skeleton or bones"
        ],
        "explanation": {
            "right": "SKEPTICAL means not easily convinced — having doubts or reservations, requiring evidence before believing. From Greek skeptikos (inquiring, reflective).",
            "traps": [
                "'Completely trusting' is the opposite — that would be CREDULOUS or GULLIBLE.",
                "'Physically unwell' has no connection.",
                "'Related to bones' confuses SKEPTICAL with SKELETAL — similar sound but different words entirely."
            ],
            "hook": "SKEPTICAL: a SKEPTIC questions everything. 'Prove it' is their motto."
        }
    },
    {
        "id": "vocab_solvent",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SOLVENT mean (in finance)?",
        "context": "After the restructuring, the company was finally solvent again and could pay its debts.",
        "correct": "Having enough assets to pay all debts",
        "wrong": [
            "Unable to pay debts; bankrupt",
            "Able to dissolve other substances",
            "Finding a solution to a problem"
        ],
        "explanation": {
            "right": "SOLVENT (in finance) means having assets in excess of liabilities — able to pay all debts. From Latin solvere (to loosen, pay, dissolve).",
            "traps": [
                "'Unable to pay debts' is the opposite — that's INSOLVENT.",
                "'Dissolving substances' is the chemistry meaning — a solvent dissolves things. Same word, different context.",
                "'Finding a solution' confuses SOLVENT with SOLUTION — related root (solvere) but different application."
            ],
            "hook": "SOLVENT: can SOLVE (pay off) all debts. Financially healthy. Opposite of bankrupt."
        }
    },
    {
        "id": "vocab_spurious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SPURIOUS mean?",
        "context": "The study was later discredited as based on spurious data that had been fabricated.",
        "correct": "Not genuine; false; based on false reasoning",
        "wrong": [
            "Happening suddenly and spontaneously",
            "Encouraging or inspiring others",
            "Related to spurs or horse riding"
        ],
        "explanation": {
            "right": "SPURIOUS means not being what it purports to be — false, fake, or based on false reasoning. From Latin spurius (illegitimate, false).",
            "traps": [
                "'Sudden and spontaneous' confuses SPURIOUS with SPONTANEOUS or SPUR-of-the-moment — similar sound but different.",
                "'Encouraging others' confuses it with INSPIRING or SPURRING ON — to spur means to encourage, but spurious means false.",
                "'Horse riding' confuses SPURIOUS with SPURS — a spur is a riding tool; spurious means fake."
            ],
            "hook": "SPURIOUS: SPUR-ious data = data that should be SPURNED (rejected) because it's FAKE."
        }
    },
    {
        "id": "vocab_stoic",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does STOIC mean?",
        "context": "He accepted the devastating diagnosis with stoic calm, showing no outward emotion.",
        "correct": "Enduring hardship without showing emotion",
        "wrong": [
            "Extremely emotional and expressive",
            "Physically very strong",
            "Stuck in one position"
        ],
        "explanation": {
            "right": "STOIC means enduring pain or hardship without showing feelings or complaining — calmly indifferent to pleasure and pain. From Greek Stoa (the porch where Stoic philosophers taught).",
            "traps": [
                "'Extremely emotional' is the exact opposite — a stoic person suppresses outward emotion.",
                "'Physically strong' confuses emotional strength with physical strength — stoicism is mental/emotional.",
                "'Stuck in one position' confuses STOIC with STATIC — static means unmoving; stoic means emotionally steady."
            ],
            "hook": "STOIC: like a STONE — unmoved by emotions. Calm face no matter what happens."
        }
    },
    {
        "id": "vocab_subjective",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SUBJECTIVE mean?",
        "context": "Art criticism is inherently subjective — beauty truly is in the eye of the beholder.",
        "correct": "Based on personal feelings or opinions",
        "wrong": [
            "Based on facts and evidence",
            "Related to the subject of a sentence",
            "Submitting to someone else's authority"
        ],
        "explanation": {
            "right": "SUBJECTIVE means based on or influenced by personal feelings, tastes, or opinions — not impartial or factual. From Latin subjectus. Antonym: objective.",
            "traps": [
                "'Based on facts' is the opposite — that's OBJECTIVE.",
                "'Subject of a sentence' uses 'subject' in the grammatical sense — different application.",
                "'Submitting to authority' confuses SUBJECTIVE with SUBMISSIVE — different words."
            ],
            "hook": "SUBJECTIVE = from the SUBJECT (the person). Your personal view. OBJECTIVE = about the OBJECT (the facts)."
        }
    },
    {
        "id": "vocab_subtle",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SUBTLE mean?",
        "context": "There was a subtle but important difference between the two policy proposals.",
        "correct": "Difficult to detect; making fine distinctions",
        "wrong": [
            "Extremely obvious and clear",
            "Located below the surface",
            "Related to subtitles or text"
        ],
        "explanation": {
            "right": "SUBTLE means so delicate or precise as to be difficult to analyze or detect — not obvious, requiring careful perception. From Latin subtilis (fine, thin).",
            "traps": [
                "'Extremely obvious' is the opposite — subtle things are hard to notice.",
                "'Below the surface' confuses SUBTLE with SUB (under) — the word actually comes from subtilis (finely woven), not sub (below).",
                "'Related to subtitles' is a spelling coincidence — subtitles are 'sub-titles' (below the picture); subtle is from 'finely woven.'"
            ],
            "hook": "SUBTLE: so thin and fine you almost miss it. A subtle hint is barely there."
        }
    },
    {
        "id": "vocab_superfluous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SUPERFLUOUS mean?",
        "context": "The report included pages of superfluous data that obscured the key findings.",
        "correct": "Unnecessary; more than what is needed",
        "wrong": [
            "Extremely excellent or superior",
            "Flowing smoothly and easily",
            "Not having enough"
        ],
        "explanation": {
            "right": "SUPERFLUOUS means unnecessary, especially through being more than enough — exceeding what is needed. From Latin superfluere (to overflow — super 'over' + fluere 'to flow').",
            "traps": [
                "'Extremely excellent' confuses SUPER-fluous with SUPER (great) — superfluous means too much, not too good.",
                "'Flowing smoothly' takes FLUERE (to flow) too literally — superfluous means overflowing, i.e., excessive.",
                "'Not having enough' is the opposite — superfluous means having MORE than enough."
            ],
            "hook": "SUPER-FLUOUS: OVERFLOWING. More than you need. Super + flow = too much flowing over."
        }
    },
    {
        "id": "vocab_suppress",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does SUPPRESS mean?",
        "context": "The government attempted to suppress publication of the embarrassing documents.",
        "correct": "To put an end to forcibly; to prevent from being known",
        "wrong": [
            "To support or hold up",
            "To provide additional resources",
            "To rise up above others"
        ],
        "explanation": {
            "right": "SUPPRESS means to forcibly put an end to something, or to prevent information from being revealed or published. From Latin supprimere (to press under — sub 'under' + premere 'to press').",
            "traps": [
                "'Support or hold up' confuses SUPPRESS with SUPPORT — SUP- prefix but opposite meanings! Suppress = press DOWN. Support = hold UP.",
                "'Provide resources' confuses it with SUPPLY — different word.",
                "'Rise above' is the opposite direction — suppress pushes DOWN."
            ],
            "hook": "SUP-PRESS: press something DOWN (sub = under). Keep it under wraps. Crush it."
        }
    },
    {
        "id": "vocab_tenacious",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does TENACIOUS mean?",
        "context": "Despite repeated setbacks, she was tenacious in pursuing her research goals.",
        "correct": "Holding firmly; not giving up easily",
        "wrong": [
            "Extremely nervous or tense",
            "Lasting for ten years",
            "Gentle and easy to work with"
        ],
        "explanation": {
            "right": "TENACIOUS means tending to keep a firm hold of something — persistent, determined, not easily giving up. From Latin tenax (holding fast, from tenere 'to hold').",
            "traps": [
                "'Extremely nervous' confuses TENACIOUS with TENSE — similar TEN- start but different roots.",
                "'Lasting ten years' confuses TEN-ACIOUS with TEN (the number) — the root is tenere (to hold), not decem (ten).",
                "'Gentle and easy' is the opposite energy — tenacious people grip hard and don't let go."
            ],
            "hook": "TENACIOUS: TENANT holds onto their apartment. TENACIOUS people hold onto their goals. Both from TENERE (to hold)."
        }
    },
    {
        "id": "vocab_tentative",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does TENTATIVE mean?",
        "context": "The tentative agreement still needed to be ratified by both boards before becoming final.",
        "correct": "Not certain or fixed; hesitant",
        "wrong": [
            "Fully committed and final",
            "Related to tents or camping",
            "Lasting for exactly ten days"
        ],
        "explanation": {
            "right": "TENTATIVE means not certain or fixed — provisional, hesitant, done as a trial that may be changed. From Latin tentare (to try, to test).",
            "traps": [
                "'Fully committed' is the opposite — tentative means still uncertain, NOT locked in.",
                "'Related to tents' confuses TENTATIVE with TENT — different words (tentare = to try; tentorium = tent).",
                "'Ten days' confuses TEN-TATIVE with TEN — no connection to the number."
            ],
            "hook": "TENTATIVE: like a TENTACLE cautiously reaching out, testing the water. Not committed yet."
        }
    },
    {
        "id": "vocab_terse",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does TERSE mean?",
        "context": "His terse reply — 'No.' — left no room for further discussion.",
        "correct": "Using few words; brief to the point of seeming rude",
        "wrong": [
            "Extremely long-winded",
            "Nervous and tightly wound",
            "Written in verse or poetry"
        ],
        "explanation": {
            "right": "TERSE means sparing in the use of words — brief, concise, and potentially curt or abrupt. From Latin tersus (wiped clean — stripped of unnecessary words).",
            "traps": [
                "'Long-winded' is the exact opposite — terse means as FEW words as possible.",
                "'Nervous and tightly wound' confuses TERSE with TENSE — one letter different but tense means anxious, terse means brief.",
                "'Written in verse' confuses TERSE with VERSE — similar sound but different meaning."
            ],
            "hook": "TERSE: think TERSE = concise (both end in -se). Or: a terse text message is just one word."
        }
    },
    {
        "id": "vocab_transient",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does TRANSIENT mean?",
        "context": "The pain was transient, disappearing completely within an hour.",
        "correct": "Lasting only for a short time; temporary",
        "wrong": [
            "Moving from one place to another",
            "Extremely significant and important",
            "Transparent or see-through"
        ],
        "explanation": {
            "right": "TRANSIENT means lasting only for a short time — impermanent, brief, passing quickly. From Latin transire (to go across — passing through quickly).",
            "traps": [
                "'Moving between places' takes TRANS (across) too literally — a transient person DOES move around, but the core meaning is 'temporary/brief.'",
                "'Extremely significant' is often wrong — transient things are usually minor BECAUSE they don't last.",
                "'Transparent' confuses TRANSIENT with TRANSPARENT — both start with TRANS- but transparent means see-through."
            ],
            "hook": "TRANSIENT: TRANS (across/through) + IENT — passing THROUGH quickly. Here today, gone tomorrow."
        }
    },
    {
        "id": "vocab_trivial",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does TRIVIAL mean?",
        "context": "Don't waste precious time on trivial details when the main argument is fundamentally flawed.",
        "correct": "Of little value or importance",
        "wrong": [
            "Consisting of three parts",
            "Extremely difficult",
            "Related to travel or journeys"
        ],
        "explanation": {
            "right": "TRIVIAL means of little value or importance — not worth serious attention, minor, insignificant. From Latin trivialis (of the crossroads, common, ordinary).",
            "traps": [
                "'Consisting of three parts' confuses TRIV-IAL with TRI- (three) — the Latin root trivialis comes from trivium (crossroads, three-road junction) but means 'common/ordinary.'",
                "'Extremely difficult' confuses it with TRIVIAL's opposite — trivial problems are EASY because they're unimportant.",
                "'Related to travel' confuses it with words like TRIP — no connection."
            ],
            "hook": "TRIVIAL: think TRIVIAL PURSUIT (the game) — fun facts that don't really matter. Small, unimportant stuff."
        }
    },
    {
        "id": "vocab_truncate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does TRUNCATE mean?",
        "context": "The editor truncated the article to fit the available page space.",
        "correct": "To shorten by cutting off the end",
        "wrong": [
            "To join two things together",
            "To speak like a trumpet",
            "To move heavy objects on wheels"
        ],
        "explanation": {
            "right": "TRUNCATE means to shorten something by cutting off the top or end — to cut short. From Latin truncare (to cut off, maim — truncus = trunk/stump).",
            "traps": [
                "'Join together' is the opposite action — truncating removes, not adds.",
                "'Speak like a trumpet' confuses TRUNCATE with TRUMPET — similar sound but unrelated.",
                "'Move on wheels' confuses it with TRUCK or TRUNDLE — no connection."
            ],
            "hook": "TRUNCATE: a tree TRUNK is what's left after you TRUNCATE (cut off) the branches. Cut short."
        }
    },
    {
        "id": "vocab_ubiquitous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does UBIQUITOUS mean?",
        "context": "Smartphones have become ubiquitous — nearly every person on Earth carries one.",
        "correct": "Found or present everywhere",
        "wrong": [
            "Extremely unique and rare",
            "Confusing and hard to understand",
            "Related to the internet"
        ],
        "explanation": {
            "right": "UBIQUITOUS means present, appearing, or found everywhere — seeming to be in all places at once. From Latin ubique (everywhere).",
            "traps": [
                "'Unique and rare' is the opposite — ubiquitous means EVERYWHERE, not rare.",
                "'Confusing' has no connection to the word.",
                "'Related to internet' is wrong — things online can be ubiquitous, but the word applies to anything widespread."
            ],
            "hook": "UBIQUITOUS: UBIQUE = everywhere. Like Starbucks or WiFi — you see it everywhere you go."
        }
    },
    {
        "id": "vocab_undermine",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does UNDERMINE mean?",
        "context": "The scandal gradually undermined public trust in the institution over several months.",
        "correct": "To weaken or damage gradually",
        "wrong": [
            "To dig a tunnel underground",
            "To support from below",
            "To understand deeply"
        ],
        "explanation": {
            "right": "UNDERMINE means to erode the base or foundation of something — to weaken or damage gradually from underneath. From 'under' + 'mine' (to dig beneath in order to cause collapse).",
            "traps": [
                "'Dig a tunnel' takes the word too literally — the modern meaning is figurative weakening, not physical digging.",
                "'Support from below' misreads UNDER-MINE as 'propping up from under' — it's actually about digging UNDER to cause COLLAPSE.",
                "'Understand deeply' confuses UNDERMINE with UNDERSTAND — different compound words."
            ],
            "hook": "UNDERMINE: dig a MINE UNDER a building's foundation — it collapses. Figuratively: weaken from beneath."
        }
    },
    {
        "id": "vocab_unequivocal",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does UNEQUIVOCAL mean?",
        "context": "The court's ruling was unequivocal: the law was unconstitutional.",
        "correct": "Leaving no doubt; completely clear",
        "wrong": [
            "Not equal or balanced",
            "Open to multiple interpretations",
            "Unable to speak clearly"
        ],
        "explanation": {
            "right": "UNEQUIVOCAL means leaving no doubt — completely clear, unambiguous, and unmistakable. From un- (not) + equivocal (ambiguous).",
            "traps": [
                "'Not equal' confuses UN-EQUI-VOCAL with UN-EQUAL — equivocal is about ambiguity, not equality.",
                "'Multiple interpretations' is the opposite — that's EQUIVOCAL. UN-equivocal means NOT ambiguous.",
                "'Unable to speak' confuses VOCAL with inability — unequivocal statements are clear, not silent."
            ],
            "hook": "UN-EQUIVOCAL: NOT equivocal (ambiguous). 100% clear. No room for misinterpretation."
        }
    },
    {
        "id": "vocab_validate",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does VALIDATE mean?",
        "context": "The experiment was repeated multiple times to validate the original results.",
        "correct": "To confirm the truth or value of something",
        "wrong": [
            "To make something invalid",
            "To express strong disapproval",
            "To say farewell"
        ],
        "explanation": {
            "right": "VALIDATE means to check or prove the validity of something — to confirm, verify, or make officially acceptable. From Latin validus (strong).",
            "traps": [
                "'Make invalid' is the opposite — that's INVALIDATE.",
                "'Express disapproval' has no connection.",
                "'Say farewell' confuses VALIDATE with VALEDICTION (farewell) — both from Latin val- but different words (validus = strong vs vale = be well/goodbye)."
            ],
            "hook": "VALIDATE: make VALID — confirm it's true, correct, and legitimate."
        }
    },
    {
        "id": "vocab_verbose",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does VERBOSE mean?",
        "context": "The verbose report could have made its point effectively in half the number of pages.",
        "correct": "Using more words than needed; wordy",
        "wrong": [
            "Speaking in verbs only",
            "Extremely brief and concise",
            "Written in verse form"
        ],
        "explanation": {
            "right": "VERBOSE means using or expressed in more words than are needed — wordy, long-winded, not concise. From Latin verbosus (full of words — verbum = word).",
            "traps": [
                "'Speaking in verbs' confuses VERBOSE with VERB — verbose comes from VERBUM (word), not specifically verbs.",
                "'Brief and concise' is the exact opposite — that would be TERSE or SUCCINCT.",
                "'Written in verse' confuses VERBOSE with VERSE — similar sound but verbose means wordy, verse means poetry."
            ],
            "hook": "VERBOSE: VERB-OSE = full of WORDS (verbum = word). Too many words. Get to the point!"
        }
    },
    {
        "id": "vocab_viable",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does VIABLE mean?",
        "context": "Electric vehicles have finally become a viable alternative to gasoline cars.",
        "correct": "Capable of working successfully; feasible",
        "wrong": [
            "Able to be seen clearly",
            "Extremely lively and energetic",
            "Accessible by road"
        ],
        "explanation": {
            "right": "VIABLE means capable of working successfully — feasible, practical, able to survive or succeed. From Latin vita (life) — originally 'able to live.'",
            "traps": [
                "'Able to be seen' confuses VIABLE with VISIBLE — VIA-ble vs VIS-ible, different roots.",
                "'Lively and energetic' confuses it with VIBRANT — viable means workable/feasible, not energetic.",
                "'Accessible by road' confuses VIA-BLE with VIA (road/route) — same Latin root but different application."
            ],
            "hook": "VIABLE: from VITA (life). A viable plan can LIVE — it has a chance of survival and success."
        }
    },
    {
        "id": "vocab_vigilant",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does VIGILANT mean?",
        "context": "Security personnel must remain vigilant at all times, watching for any unusual activity.",
        "correct": "Keeping careful watch for danger",
        "wrong": [
            "Acting as a vigilante",
            "Extremely strong and vigorous",
            "Relaxed and inattentive"
        ],
        "explanation": {
            "right": "VIGILANT means keeping careful watch for possible danger or difficulties — alert, watchful, and on guard. From Latin vigilare (to keep watch).",
            "traps": [
                "'Acting as vigilante' is related (vigilante = one who takes law enforcement into own hands) but different — vigilant just means watchful, not taking illegal action.",
                "'Strong and vigorous' confuses VIGILANT with VIGOROUS — both from Latin vigor-related roots but different meanings.",
                "'Relaxed and inattentive' is the exact opposite of vigilant."
            ],
            "hook": "VIGILANT: VIGIL (a period of staying awake to keep watch). Vigilant = always watching."
        }
    },
    {
        "id": "vocab_volatile",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does VOLATILE mean?",
        "context": "The political situation remained volatile, with ceasefire agreements breaking down regularly.",
        "correct": "Liable to change rapidly and unpredictably",
        "wrong": [
            "Extremely stable and predictable",
            "Related to voting or elections",
            "Able to fly or float"
        ],
        "explanation": {
            "right": "VOLATILE means liable to change rapidly and unpredictably, especially for the worse — also: easily evaporated, or (of a person) easily angered. From Latin volatilis (flying — things that fly away quickly).",
            "traps": [
                "'Stable and predictable' is the exact opposite — volatile means unpredictable and changeable.",
                "'Related to voting' confuses VOLATILE with VOTE — no connection.",
                "'Able to fly' is the original Latin meaning (volatilis = flying) but the modern meaning is about instability and rapid change."
            ],
            "hook": "VOLATILE: like a VOLCANO — could erupt at any moment. Unstable, unpredictable, explosive."
        }
    },
    {
        "id": "vocab_wary",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does WARY mean?",
        "context": "She was wary of investing in a company with no proven track record.",
        "correct": "Feeling cautious about possible dangers",
        "wrong": [
            "Extremely tired and exhausted",
            "Full of worry and anxiety",
            "Brave and unafraid"
        ],
        "explanation": {
            "right": "WARY means feeling or showing caution about possible dangers or problems — watchful, careful, on guard. From Old English waer (aware).",
            "traps": [
                "'Extremely tired' confuses WARY with WEARY — one letter different! WARY = cautious. WEARY = tired. Classic SAT trap.",
                "'Full of worry' confuses WARY with WORRIED — wary is about CAUTION (being careful), not WORRY (feeling anxious). Related but different.",
                "'Brave and unafraid' is the opposite — a wary person is cautious precisely because they sense danger."
            ],
            "hook": "WARY vs WEARY: WARY = beWARE (cautious). WEARY = need to REST (tired). Don't mix them up!"
        }
    },
    {
        "id": "vocab_zealous",
        "category": "vocabulary",
        "subcategory": "tier1",
        "question": "What does ZEALOUS mean?",
        "context": "He was a zealous reformer who worked eighteen-hour days to change the system.",
        "correct": "Having great energy or enthusiasm for a cause",
        "wrong": [
            "Extremely jealous of others",
            "Feeling zero motivation",
            "Related to zebras or wildlife"
        ],
        "explanation": {
            "right": "ZEALOUS means having or showing great energy, enthusiasm, and devotion in pursuit of a cause or objective — fervent and passionate. From Greek zelos (zeal, fervor).",
            "traps": [
                "'Extremely jealous' confuses ZEALOUS with JEALOUS — they rhyme and share a Greek root (zelos also meant jealousy) but modern English separates them clearly.",
                "'Zero motivation' is the opposite — zealous people have MAXIMUM motivation.",
                "'Related to zebras' is a humorous sound trap — no connection to wildlife."
            ],
            "hook": "ZEALOUS: full of ZEAL — burning passion and energy for a cause. A zealot takes it to extremes."
        }
    },
    {
        "id": "gram_sv_01",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "The collection of rare manuscripts is housed in the library's vault.",
        "wrong": [
            "The collection of rare manuscripts are housed in the library's vault.",
            "The collection of rare manuscripts have been housed in the library's vault.",
            "The collection of rare manuscripts were housed in the library's vault."
        ],
        "explanation": {
            "right": "The subject is 'collection' (singular), not 'manuscripts.' Singular subjects take singular verbs.",
            "traps": [
                "'are' is plural — wrongly agrees with 'manuscripts' instead of 'collection'.",
                "'have been' is plural — same prepositional phrase distraction.",
                "'were' is plural — incorrect match with the prepositional object."
            ],
            "hook": "Cross out prepositional phrases to find the true subject."
        }
    },
    {
        "id": "gram_sv_02",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "Neither the teacher nor the students were aware of the schedule change.",
        "wrong": [
            "Neither the teacher nor the students was aware of the schedule change.",
            "Neither the teacher nor the students is aware of the schedule change.",
            "Neither the teacher nor the students has been aware of the schedule change."
        ],
        "explanation": {
            "right": "With 'neither...nor,' the verb agrees with the CLOSER subject. 'Students' is plural, so use 'were.'",
            "traps": [
                "'was' is singular — matches 'teacher' but ignores proximity rule.",
                "'is' is singular — same error in present tense.",
                "'has been' is singular — violates the proximity agreement rule."
            ],
            "hook": "Neither/nor and either/or: verb agrees with the CLOSER noun."
        }
    },
    {
        "id": "gram_sv_03",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "Each of the volunteers has completed the required training.",
        "wrong": [
            "Each of the volunteers have completed the required training.",
            "Each of the volunteers are completing the required training.",
            "Each of the volunteers were completing the required training."
        ],
        "explanation": {
            "right": "'Each' is always singular and takes a singular verb ('has'), regardless of the plural noun that follows.",
            "traps": [
                "'have' is plural — wrongly attracted to 'volunteers'.",
                "'are' is plural — 'each' is never plural.",
                "'were' is plural — same subject-verb error."
            ],
            "hook": "EACH is ALWAYS singular: each person HAS, each student IS."
        }
    },
    {
        "id": "gram_sv_04",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "The data from the experiment suggest a need for further research.",
        "wrong": [
            "The data from the experiment suggests a need for further research.",
            "The data from the experiment is suggesting a need for further research.",
            "The data from the experiment was suggesting a need for further research."
        ],
        "explanation": {
            "right": "'Data' is the plural form of 'datum.' It takes a plural verb ('suggest').",
            "traps": [
                "'suggests' treats 'data' as singular — common error.",
                "'is suggesting' is singular — 'data' requires plural verb.",
                "'was suggesting' is singular — same plural noun error."
            ],
            "hook": "Data ARE, criteria ARE, phenomena ARE — these plurals need plural verbs."
        }
    },
    {
        "id": "gram_sv_05",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "There are several reasons why the project failed to meet its deadline.",
        "wrong": [
            "There is several reasons why the project failed to meet its deadline.",
            "There was several reasons why the project failed to meet its deadline.",
            "There has been several reasons why the project failed to meet its deadline."
        ],
        "explanation": {
            "right": "In 'there is/are' constructions, the verb agrees with the noun that follows. 'Reasons' is plural, so use 'are.'",
            "traps": [
                "'is' is singular — doesn't agree with plural 'reasons'.",
                "'was' is singular past tense — same agreement error.",
                "'has been' is singular — violates subject-verb agreement."
            ],
            "hook": "There IS/ARE: look AFTER the verb to find the real subject."
        }
    },
    {
        "id": "gram_sv_06",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "Every student and teacher was evacuated during the fire drill.",
        "wrong": [
            "Every student and teacher were evacuated during the fire drill.",
            "Every student and teacher have been evacuated during the fire drill.",
            "Every student and teacher are evacuated during the fire drill."
        ],
        "explanation": {
            "right": "'Every' (like 'each') makes compound subjects singular. Use singular verb 'was.'",
            "traps": [
                "'were' is plural — 'every' overrides the compound subject.",
                "'have been' is plural — 'every' forces singular agreement.",
                "'are' is plural — same violation of the 'every' rule."
            ],
            "hook": "EVERY makes everything singular, even compound subjects joined by 'and.'"
        }
    },
    {
        "id": "gram_sv_07",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "The number of applicants has increased dramatically this year.",
        "wrong": [
            "The number of applicants have increased dramatically this year.",
            "The number of applicants are increasing dramatically this year.",
            "The number of applicants were increasing dramatically this year."
        ],
        "explanation": {
            "right": "'The number' is singular and takes 'has.' Contrast with 'a number,' which is plural.",
            "traps": [
                "'have' is plural — wrongly attracted to 'applicants'.",
                "'are' is plural — 'the number' is always singular.",
                "'were' is plural — same subject-verb error."
            ],
            "hook": "THE number IS singular; A number ARE plural."
        }
    },
    {
        "id": "gram_sv_08",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "Physics is one of the most challenging subjects in the curriculum.",
        "wrong": [
            "Physics are one of the most challenging subjects in the curriculum.",
            "Physics have been one of the most challenging subjects in the curriculum.",
            "Physics were one of the most challenging subjects in the curriculum."
        ],
        "explanation": {
            "right": "Academic subjects ending in '-ics' (physics, mathematics, economics) are singular despite the 's' ending.",
            "traps": [
                "'are' treats 'physics' as plural — the '-s' ending is deceptive.",
                "'have been' is plural — same error.",
                "'were' is plural — academic subjects are singular."
            ],
            "hook": "Words ending in -ics are usually singular: physics IS, mathematics IS."
        }
    },
    {
        "id": "gram_sv_09",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "A number of scientists have questioned the validity of the findings.",
        "wrong": [
            "A number of scientists has questioned the validity of the findings.",
            "A number of scientists is questioning the validity of the findings.",
            "A number of scientists was questioning the validity of the findings."
        ],
        "explanation": {
            "right": "'A number of' is treated as plural, taking 'have.' The emphasis is on the multiple scientists.",
            "traps": [
                "'has' is singular — 'a number of' requires plural verb.",
                "'is' is singular — same error in present progressive.",
                "'was' is singular — 'a number of' is always plural."
            ],
            "hook": "A number of [things] ARE (plural); THE number IS (singular)."
        }
    },
    {
        "id": "gram_sv_10",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "The team of researchers has published its findings in a prestigious journal.",
        "wrong": [
            "The team of researchers have published its findings in a prestigious journal.",
            "The team of researchers have published their findings in a prestigious journal.",
            "The team of researchers are publishing their findings in a prestigious journal."
        ],
        "explanation": {
            "right": "'Team' is a collective noun acting as a single unit, so it takes singular 'has' and singular pronoun 'its.'",
            "traps": [
                "'have' with 'its' is inconsistent — mixing singular and plural.",
                "'have' with 'their' is fully plural — but 'team' is singular here.",
                "'are' with 'their' is plural — 'team' is acting as one unit."
            ],
            "hook": "Collective nouns acting as ONE unit take singular verbs."
        }
    },
    {
        "id": "gram_sv_11",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "Either the manager or her assistants are responsible for handling complaints.",
        "wrong": [
            "Either the manager or her assistants is responsible for handling complaints.",
            "Either the manager or her assistants was responsible for handling complaints.",
            "Either the manager or her assistants has been responsible for handling complaints."
        ],
        "explanation": {
            "right": "With 'either...or,' the verb agrees with the closer subject. 'Assistants' is plural, so use 'are.'",
            "traps": [
                "'is' is singular — ignores the closer plural subject 'assistants'.",
                "'was' is singular — same proximity rule violation.",
                "'has been' is singular — verb must match 'assistants.'"
            ],
            "hook": "Either/or: match the verb to whichever noun is CLOSER."
        }
    },
    {
        "id": "gram_sv_12",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "The committee has voted to approve the new policy changes.",
        "wrong": [
            "The committee have voted to approve the new policy changes.",
            "The committee are voting to approve the new policy changes.",
            "The committee were voting to approve the new policy changes."
        ],
        "explanation": {
            "right": "'Committee' is a collective noun acting as a unit, taking singular verb 'has.'",
            "traps": [
                "'have' is plural — treats committee as individuals, not a unit.",
                "'are' is plural — collective noun should be singular here.",
                "'were' is plural — same collective noun error."
            ],
            "hook": "Committee, jury, group, team: singular when acting as ONE unit."
        }
    },
    {
        "id": "gram_sv_13",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "Ten dollars is too much to pay for a cup of coffee.",
        "wrong": [
            "Ten dollars are too much to pay for a cup of coffee.",
            "Ten dollars have been too much to pay for a cup of coffee.",
            "Ten dollars were too much to pay for a cup of coffee."
        ],
        "explanation": {
            "right": "Amounts of money, time, or distance are treated as singular units when the focus is on the total amount.",
            "traps": [
                "'are' is plural — treats each dollar separately.",
                "'have been' is plural — money amounts as units are singular.",
                "'were' is plural — same error treating amount as plural."
            ],
            "hook": "Money, time, distance as a TOTAL amount: use singular verbs."
        }
    },
    {
        "id": "gram_sv_14",
        "category": "grammar",
        "subcategory": "subject-verb",
        "question": "Which sentence uses correct subject-verb agreement?",
        "context": null,
        "correct": "One of the paintings hanging in the gallery is a genuine Picasso.",
        "wrong": [
            "One of the paintings hanging in the gallery are a genuine Picasso.",
            "One of the paintings hanging in the gallery have been a genuine Picasso.",
            "One of the paintings hanging in the gallery were a genuine Picasso."
        ],
        "explanation": {
            "right": "'One' is the subject (singular), not 'paintings.' Use singular 'is.'",
            "traps": [
                "'are' is plural — wrongly agrees with 'paintings' instead of 'one'.",
                "'have been' is plural — same distraction from the true subject.",
                "'were' is plural — 'one' always takes singular verb."
            ],
            "hook": "ONE of [plural noun] IS — the subject is ONE, not the plural."
        }
    },
    {
        "id": "gram_pn_01",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "Each student must submit his or her assignment by Friday.",
        "wrong": [
            "Each student must submit their assignment by Friday.",
            "Each student must submit its assignment by Friday.",
            "Each students must submit their assignments by Friday."
        ],
        "explanation": {
            "right": "'Each' is singular, requiring singular pronouns 'his or her.' (Note: SAT increasingly accepts 'their' with singular antecedents, but traditional formal writing requires singular pronouns.)",
            "traps": [
                "'their' is plural — though common in speech, traditionally doesn't match singular 'each'.",
                "'its' is for non-human objects — inappropriate for people.",
                "Makes 'student' plural incorrectly — 'each' takes singular."
            ],
            "hook": "EACH, EVERY, EVERYONE = singular pronouns (he/she/his/her)."
        }
    },
    {
        "id": "gram_pn_02",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "The company announced that it would expand its operations overseas.",
        "wrong": [
            "The company announced that they would expand their operations overseas.",
            "The company announced that he would expand his operations overseas.",
            "The company announced that she would expand her operations overseas."
        ],
        "explanation": {
            "right": "Companies are singular entities and take singular pronoun 'it.'",
            "traps": [
                "'they' treats the company as plural — companies are singular.",
                "'he' is for individual males — not organizations.",
                "'she' is for individual females — not organizations."
            ],
            "hook": "Organizations and companies: IT, not THEY."
        }
    },
    {
        "id": "gram_pn_03",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "Neither Maria nor Elena remembered to bring her permission slip.",
        "wrong": [
            "Neither Maria nor Elena remembered to bring their permission slip.",
            "Neither Maria nor Elena remembered to bring its permission slip.",
            "Neither Maria nor Elena remembered to bring his permission slip."
        ],
        "explanation": {
            "right": "With 'neither...nor,' the pronoun agrees with the closer noun. 'Elena' is singular female, so use 'her.'",
            "traps": [
                "'their' is plural — the pronoun must match the closer singular noun.",
                "'its' is for objects — both are people.",
                "'his' is male — both antecedents are female."
            ],
            "hook": "Neither/nor: pronoun matches the CLOSER antecedent."
        }
    },
    {
        "id": "gram_pn_04",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "Everyone in the audience raised his or her hand to ask a question.",
        "wrong": [
            "Everyone in the audience raised their hand to ask a question.",
            "Everyone in the audience raised its hand to ask a question.",
            "Everyone in the audience raised his hand to ask a question."
        ],
        "explanation": {
            "right": "'Everyone' is singular and requires singular pronouns 'his or her.'",
            "traps": [
                "'their' is plural — 'everyone' is grammatically singular.",
                "'its' is for non-human things — not people.",
                "'his' alone excludes females — need inclusive language."
            ],
            "hook": "EVERYONE is singular: everyone has HIS OR HER own opinion."
        }
    },
    {
        "id": "gram_pn_05",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "The orchestra members tuned their instruments before the concert.",
        "wrong": [
            "The orchestra members tuned its instruments before the concert.",
            "The orchestra members tuned his instruments before the concert.",
            "The orchestra members tuned her instruments before the concert."
        ],
        "explanation": {
            "right": "'Members' is plural, so use plural pronoun 'their.'",
            "traps": [
                "'its' is singular — doesn't match plural 'members'.",
                "'his' is singular male — needs plural for 'members'.",
                "'her' is singular female — same plural disagreement."
            ],
            "hook": "Match pronoun number: plural antecedent = plural pronoun."
        }
    },
    {
        "id": "gram_pn_06",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "Either the coach or the players must adjust their strategy.",
        "wrong": [
            "Either the coach or the players must adjust his strategy.",
            "Either the coach or the players must adjust its strategy.",
            "Either the coach or the players must adjust her strategy."
        ],
        "explanation": {
            "right": "With 'either...or,' the pronoun agrees with the closer noun. 'Players' is plural, so use 'their.'",
            "traps": [
                "'his' is singular — pronoun must match closer plural 'players'.",
                "'its' is for objects — refers to people here.",
                "'her' is singular female — needs plural pronoun."
            ],
            "hook": "Either/or: pronoun agrees with the CLOSER noun."
        }
    },
    {
        "id": "gram_pn_07",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "The jury announced its verdict after three hours of deliberation.",
        "wrong": [
            "The jury announced their verdict after three hours of deliberation.",
            "The jury announced his verdict after three hours of deliberation.",
            "The jury announced her verdict after three hours of deliberation."
        ],
        "explanation": {
            "right": "'Jury' is a collective noun acting as a unit, taking singular pronoun 'its.'",
            "traps": [
                "'their' is plural — jury is acting as one unit here.",
                "'his' is for individual males — jury is a group entity.",
                "'her' is for individual females — same error."
            ],
            "hook": "Collective nouns as a UNIT: singular pronoun IT."
        }
    },
    {
        "id": "gram_pn_08",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "Someone left his or her laptop in the conference room.",
        "wrong": [
            "Someone left their laptop in the conference room.",
            "Someone left its laptop in the conference room.",
            "Someone left his laptop in the conference room."
        ],
        "explanation": {
            "right": "'Someone' is singular and requires singular pronouns 'his or her.'",
            "traps": [
                "'their' is plural — 'someone' is singular.",
                "'its' is for objects — 'someone' is a person.",
                "'his' alone is not inclusive — need both options."
            ],
            "hook": "SOMEONE, ANYONE, EVERYONE: all singular indefinite pronouns."
        }
    },
    {
        "id": "gram_pn_09",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "The team celebrated their victory with a parade through the city.",
        "wrong": [
            "The team celebrated its victory with a parade through the city.",
            "The team celebrated his victory with a parade through the city.",
            "The team celebrated her victory with a parade through the city."
        ],
        "explanation": {
            "right": "When a collective noun emphasizes the individual members acting separately, use plural 'their.'",
            "traps": [
                "'its' treats team as a unit — celebrating suggests individual action.",
                "'his' is singular male — team is plural individuals here.",
                "'her' is singular female — needs plural pronoun."
            ],
            "hook": "Collective nouns emphasizing INDIVIDUALS: plural pronouns."
        }
    },
    {
        "id": "gram_pn_10",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "Both of the candidates presented their platforms during the debate.",
        "wrong": [
            "Both of the candidates presented his platform during the debate.",
            "Both of the candidates presented her platform during the debate.",
            "Both of the candidates presented its platform during the debate."
        ],
        "explanation": {
            "right": "'Both' is plural, requiring plural pronoun 'their.'",
            "traps": [
                "'his' is singular — doesn't match plural 'both'.",
                "'her' is singular — same disagreement.",
                "'its' is singular and for objects — needs plural personal pronoun."
            ],
            "hook": "BOTH is always plural: both have THEIR reasons."
        }
    },
    {
        "id": "gram_pn_11",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "Nobody wanted to admit that he or she had made a mistake.",
        "wrong": [
            "Nobody wanted to admit that they had made a mistake.",
            "Nobody wanted to admit that it had made a mistake.",
            "Nobody wanted to admit that he had made a mistake."
        ],
        "explanation": {
            "right": "'Nobody' is singular, requiring singular pronouns 'he or she.'",
            "traps": [
                "'they' is plural — 'nobody' is singular.",
                "'it' is for objects — 'nobody' refers to people.",
                "'he' alone is not inclusive of all genders."
            ],
            "hook": "NOBODY, NO ONE: singular pronouns (he or she, his or her)."
        }
    },
    {
        "id": "gram_pn_12",
        "category": "grammar",
        "subcategory": "pronoun",
        "question": "Which sentence uses correct pronoun agreement?",
        "context": null,
        "correct": "All of the evidence suggests that it was mishandled during the investigation.",
        "wrong": [
            "All of the evidence suggests that they were mishandled during the investigation.",
            "All of the evidence suggests that he was mishandled during the investigation.",
            "All of the evidence suggests that she was mishandled during the investigation."
        ],
        "explanation": {
            "right": "'Evidence' is an uncountable singular noun, taking singular pronoun 'it.'",
            "traps": [
                "'they' is plural — 'evidence' is singular even with 'all'.",
                "'he' is for people — evidence is a thing.",
                "'she' is for people — same error."
            ],
            "hook": "Uncountable nouns (evidence, information, furniture): IT, not THEY."
        }
    },
    {
        "id": "gram_vt_01",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "By the time the guests arrived, the chef had already prepared all the appetizers.",
        "wrong": [
            "By the time the guests arrived, the chef already prepared all the appetizers.",
            "By the time the guests arrived, the chef prepares all the appetizers.",
            "By the time the guests had arrived, the chef already prepared all the appetizers."
        ],
        "explanation": {
            "right": "Past perfect 'had prepared' shows that the preparation was completed before the guests arrived (simple past).",
            "traps": [
                "Missing 'had' — need past perfect to show the earlier action.",
                "Present tense 'prepares' — clashes with past 'arrived'.",
                "First clause uses past perfect but second should too — timing is reversed."
            ],
            "hook": "Use past perfect (had + verb) for the action that happened FIRST in the past."
        }
    },
    {
        "id": "gram_vt_02",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "She has lived in Boston for ten years and plans to stay indefinitely.",
        "wrong": [
            "She lived in Boston for ten years and plans to stay indefinitely.",
            "She is living in Boston for ten years and plans to stay indefinitely.",
            "She had lived in Boston for ten years and plans to stay indefinitely."
        ],
        "explanation": {
            "right": "Present perfect 'has lived' indicates an action that started in the past and continues to the present.",
            "traps": [
                "Simple past 'lived' suggests the action is finished — but she still lives there.",
                "Present progressive with 'for ten years' is awkward — present perfect is standard.",
                "Past perfect 'had lived' suggests she no longer lives there — contradicts 'plans to stay'."
            ],
            "hook": "Action started in past, continues NOW: use present perfect (has/have + verb)."
        }
    },
    {
        "id": "gram_vt_03",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "While the students were taking the exam, the fire alarm rang unexpectedly.",
        "wrong": [
            "While the students took the exam, the fire alarm rang unexpectedly.",
            "While the students are taking the exam, the fire alarm rang unexpectedly.",
            "While the students had taken the exam, the fire alarm rang unexpectedly."
        ],
        "explanation": {
            "right": "Past progressive 'were taking' shows ongoing action interrupted by simple past 'rang.'",
            "traps": [
                "Simple past 'took' doesn't show the ongoing nature of the exam.",
                "Present progressive 'are taking' clashes with past tense 'rang'.",
                "Past perfect 'had taken' suggests exam was finished — but it was interrupted."
            ],
            "hook": "Ongoing action interrupted: use past progressive (was/were + -ing)."
        }
    },
    {
        "id": "gram_vt_04",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "Scientists predict that global temperatures will rise significantly by 2050.",
        "wrong": [
            "Scientists predict that global temperatures rose significantly by 2050.",
            "Scientists predict that global temperatures are rising significantly by 2050.",
            "Scientists predict that global temperatures have risen significantly by 2050."
        ],
        "explanation": {
            "right": "Future tense 'will rise' is correct because 2050 is in the future.",
            "traps": [
                "Past tense 'rose' — 2050 hasn't happened yet.",
                "Present progressive 'are rising' — doesn't indicate future completion by 2050.",
                "Present perfect 'have risen' — suggests already happened, but it's future."
            ],
            "hook": "Future time marker? Use WILL or future tense form."
        }
    },
    {
        "id": "gram_vt_05",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "The author writes novels that explore themes of identity and belonging.",
        "wrong": [
            "The author wrote novels that explore themes of identity and belonging.",
            "The author is writing novels that explore themes of identity and belonging.",
            "The author has written novels that explore themes of identity and belonging."
        ],
        "explanation": {
            "right": "Simple present 'writes' describes a habitual or general truth about the author's work.",
            "traps": [
                "Past 'wrote' — doesn't match present tense 'explore' and suggests finished activity.",
                "Present progressive 'is writing' — too specific, not about general habit.",
                "Present perfect 'has written' — emphasizes past up to now, but simple present is clearer for habit."
            ],
            "hook": "General facts and habits: use simple present tense."
        }
    },
    {
        "id": "gram_vt_06",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "If she had studied harder, she would have passed the examination.",
        "wrong": [
            "If she studied harder, she would have passed the examination.",
            "If she had studied harder, she would pass the examination.",
            "If she has studied harder, she would have passed the examination."
        ],
        "explanation": {
            "right": "Past unreal conditional requires past perfect 'had studied' with 'would have passed.'",
            "traps": [
                "Simple past 'studied' — need past perfect for hypothetical past.",
                "'would pass' is wrong tense — need 'would have passed' for past hypothetical.",
                "Present perfect 'has studied' — wrong form for hypothetical past."
            ],
            "hook": "Hypothetical PAST: IF + had + verb, WOULD HAVE + verb."
        }
    },
    {
        "id": "gram_vt_07",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "By next month, the construction crew will have completed the renovation.",
        "wrong": [
            "By next month, the construction crew completes the renovation.",
            "By next month, the construction crew completed the renovation.",
            "By next month, the construction crew will complete the renovation."
        ],
        "explanation": {
            "right": "Future perfect 'will have completed' shows action finished before a future time point.",
            "traps": [
                "Simple present 'completes' — doesn't indicate future completion.",
                "Simple past 'completed' — past tense doesn't work with future 'next month'.",
                "Simple future 'will complete' — doesn't emphasize completion before the deadline."
            ],
            "hook": "Action finished BEFORE a future time: use future perfect (will have + verb)."
        }
    },
    {
        "id": "gram_vt_08",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "The museum displays artifacts that date back to ancient civilizations.",
        "wrong": [
            "The museum displayed artifacts that date back to ancient civilizations.",
            "The museum will display artifacts that date back to ancient civilizations.",
            "The museum has displayed artifacts that date back to ancient civilizations."
        ],
        "explanation": {
            "right": "Simple present 'displays' describes what the museum currently does as a general fact.",
            "traps": [
                "Simple past 'displayed' — doesn't match present 'date' and suggests past only.",
                "Future 'will display' — the display is current, not future.",
                "Present perfect 'has displayed' — overcomplicates; simple present is clearer."
            ],
            "hook": "Current, ongoing facts: use simple present tense."
        }
    },
    {
        "id": "gram_vt_09",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "When the bell rings, the students will leave the classroom immediately.",
        "wrong": [
            "When the bell will ring, the students will leave the classroom immediately.",
            "When the bell rang, the students will leave the classroom immediately.",
            "When the bell is ringing, the students will leave the classroom immediately."
        ],
        "explanation": {
            "right": "In time clauses with 'when,' use simple present 'rings' even though the meaning is future.",
            "traps": [
                "'will ring' — don't use future in time clauses with when/after/before.",
                "Past 'rang' — clashes with future 'will leave'.",
                "Present progressive 'is ringing' — simple present is standard in time clauses."
            ],
            "hook": "Time clauses (when, after, before): use simple PRESENT for future meaning."
        }
    },
    {
        "id": "gram_vt_10",
        "category": "grammar",
        "subcategory": "verb-tense",
        "question": "Which sentence uses correct verb tense?",
        "context": null,
        "correct": "The scientist had been researching the topic for years before making the breakthrough.",
        "wrong": [
            "The scientist was researching the topic for years before making the breakthrough.",
            "The scientist researched the topic for years before making the breakthrough.",
            "The scientist has been researching the topic for years before making the breakthrough."
        ],
        "explanation": {
            "right": "Past perfect progressive 'had been researching' emphasizes duration of an action completed before another past event.",
            "traps": [
                "Past progressive 'was researching' — doesn't show the earlier timeframe clearly.",
                "Simple past 'researched' — doesn't emphasize the ongoing duration.",
                "Present perfect progressive 'has been' — wrong for action before past event."
            ],
            "hook": "Long action completed BEFORE another past event: had been + -ing."
        }
    },
    {
        "id": "gram_par_01",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The workshop teaches students to write clearly, to edit carefully, and to revise thoroughly.",
        "wrong": [
            "The workshop teaches students to write clearly, to edit carefully, and revising thoroughly.",
            "The workshop teaches students to write clearly, editing carefully, and to revise thoroughly.",
            "The workshop teaches students writing clearly, to edit carefully, and to revise thoroughly."
        ],
        "explanation": {
            "right": "All three items use the same structure: 'to [verb] [adverb].' This maintains parallel form.",
            "traps": [
                "Third item switches to gerund 'revising' — breaks parallel infinitive structure.",
                "Second item switches to gerund 'editing' — not parallel with infinitives.",
                "First item uses gerund 'writing' — inconsistent with the other two infinitives."
            ],
            "hook": "Lists must match: all infinitives, all gerunds, or all same structure."
        }
    },
    {
        "id": "gram_par_02",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "She enjoys hiking in the mountains, swimming in the ocean, and biking through the countryside.",
        "wrong": [
            "She enjoys hiking in the mountains, swimming in the ocean, and to bike through the countryside.",
            "She enjoys hiking in the mountains, to swim in the ocean, and biking through the countryside.",
            "She enjoys to hike in the mountains, swimming in the ocean, and biking through the countryside."
        ],
        "explanation": {
            "right": "All three activities use gerunds: 'hiking,' 'swimming,' 'biking.'",
            "traps": [
                "Third item switches to infinitive 'to bike' — breaks gerund pattern.",
                "Second item switches to infinitive 'to swim' — inconsistent.",
                "First item switches to infinitive 'to hike' — not parallel."
            ],
            "hook": "After ENJOY, use all gerunds (-ing): enjoy hiking, swimming, biking."
        }
    },
    {
        "id": "gram_par_03",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The candidate promised to lower taxes, to create jobs, and to improve infrastructure.",
        "wrong": [
            "The candidate promised to lower taxes, creating jobs, and to improve infrastructure.",
            "The candidate promised lowering taxes, to create jobs, and to improve infrastructure.",
            "The candidate promised to lower taxes, to create jobs, and improving infrastructure."
        ],
        "explanation": {
            "right": "All three promises use infinitives: 'to lower,' 'to create,' 'to improve.'",
            "traps": [
                "Second item switches to gerund 'creating' — breaks infinitive pattern.",
                "First item switches to gerund 'lowering' — not parallel.",
                "Third item switches to gerund 'improving' — inconsistent structure."
            ],
            "hook": "In a series, keep the same verb form throughout: all to + verb."
        }
    },
    {
        "id": "gram_par_04",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The novel is praised for its vivid imagery, its compelling characters, and its unexpected plot twists.",
        "wrong": [
            "The novel is praised for its vivid imagery, its compelling characters, and having unexpected plot twists.",
            "The novel is praised for its vivid imagery, compelling characters, and its unexpected plot twists.",
            "The novel is praised for having vivid imagery, its compelling characters, and its unexpected plot twists."
        ],
        "explanation": {
            "right": "All three elements follow the same structure: 'its [adjective] [noun].'",
            "traps": [
                "Third item switches to 'having' — breaks the 'its + adjective + noun' pattern.",
                "Second item drops 'its' — inconsistent with the other two items.",
                "First item uses 'having' — doesn't match the possessive structure."
            ],
            "hook": "Keep the same structure: if you start with 'its,' use 'its' throughout."
        }
    },
    {
        "id": "gram_par_05",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The coach emphasized that discipline is important, that teamwork is essential, and that dedication is necessary.",
        "wrong": [
            "The coach emphasized that discipline is important, teamwork is essential, and that dedication is necessary.",
            "The coach emphasized that discipline is important, that teamwork is essential, and dedication is necessary.",
            "The coach emphasized discipline is important, that teamwork is essential, and that dedication is necessary."
        ],
        "explanation": {
            "right": "All three clauses begin with 'that': 'that discipline is,' 'that teamwork is,' 'that dedication is.'",
            "traps": [
                "Second clause drops 'that' — breaks parallel structure.",
                "Third clause drops 'that' — inconsistent.",
                "First clause drops 'that' — not parallel with the others."
            ],
            "hook": "If you start with THAT, repeat THAT in all clauses in the series."
        }
    },
    {
        "id": "gram_par_06",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The museum is known for displaying rare artifacts, hosting educational programs, and preserving cultural heritage.",
        "wrong": [
            "The museum is known for displaying rare artifacts, hosting educational programs, and the preservation of cultural heritage.",
            "The museum is known for displaying rare artifacts, to host educational programs, and preserving cultural heritage.",
            "The museum is known for the display of rare artifacts, hosting educational programs, and preserving cultural heritage."
        ],
        "explanation": {
            "right": "All three activities use gerunds: 'displaying,' 'hosting,' 'preserving.'",
            "traps": [
                "Third item switches to noun 'preservation' — breaks gerund pattern.",
                "Second item switches to infinitive 'to host' — not parallel.",
                "First item switches to noun phrase 'the display' — inconsistent."
            ],
            "hook": "FOR + gerund pattern: keep all items as gerunds (-ing forms)."
        }
    },
    {
        "id": "gram_par_07",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The project requires planning carefully, executing efficiently, and evaluating thoroughly.",
        "wrong": [
            "The project requires planning carefully, to execute efficiently, and evaluating thoroughly.",
            "The project requires to plan carefully, executing efficiently, and evaluating thoroughly.",
            "The project requires planning carefully, executing efficiently, and to evaluate thoroughly."
        ],
        "explanation": {
            "right": "All three actions use gerunds: 'planning,' 'executing,' 'evaluating.'",
            "traps": [
                "Second item switches to infinitive 'to execute' — breaks gerund pattern.",
                "First item switches to infinitive 'to plan' — not parallel.",
                "Third item switches to infinitive 'to evaluate' — inconsistent."
            ],
            "hook": "After REQUIRES, use matching forms: all gerunds or all infinitives."
        }
    },
    {
        "id": "gram_par_08",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The senator argued passionately, spoke eloquently, and voted consistently.",
        "wrong": [
            "The senator argued passionately, spoke eloquently, and was voting consistently.",
            "The senator argued passionately, was speaking eloquently, and voted consistently.",
            "The senator was arguing passionately, spoke eloquently, and voted consistently."
        ],
        "explanation": {
            "right": "All three verbs use simple past tense: 'argued,' 'spoke,' 'voted.'",
            "traps": [
                "Third verb switches to past progressive 'was voting' — breaks pattern.",
                "Second verb switches to past progressive 'was speaking' — not parallel.",
                "First verb switches to past progressive 'was arguing' — inconsistent."
            ],
            "hook": "Keep verb tenses consistent in a series: all simple past or all progressive."
        }
    },
    {
        "id": "gram_par_09",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "Successful entrepreneurs are creative, persistent, and willing to take risks.",
        "wrong": [
            "Successful entrepreneurs are creative, persistent, and take risks willingly.",
            "Successful entrepreneurs are creative, show persistence, and willing to take risks.",
            "Successful entrepreneurs show creativity, are persistent, and willing to take risks."
        ],
        "explanation": {
            "right": "All three qualities use adjectives/adjective phrases: 'creative,' 'persistent,' 'willing to take risks.'",
            "traps": [
                "Third item switches to verb phrase 'take risks' — breaks adjective pattern.",
                "Second item switches to verb phrase 'show persistence' — not parallel.",
                "First item switches to verb phrase 'show creativity' — inconsistent."
            ],
            "hook": "After ARE, use all adjectives or all nouns — stay consistent."
        }
    },
    {
        "id": "gram_par_10",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The documentary explores how pollution affects oceans, how deforestation impacts wildlife, and how climate change threatens ecosystems.",
        "wrong": [
            "The documentary explores how pollution affects oceans, how deforestation impacts wildlife, and the threat of climate change to ecosystems.",
            "The documentary explores how pollution affects oceans, the impact of deforestation on wildlife, and how climate change threatens ecosystems.",
            "The documentary explores the effect of pollution on oceans, how deforestation impacts wildlife, and how climate change threatens ecosystems."
        ],
        "explanation": {
            "right": "All three clauses follow the pattern: 'how [subject] [verb] [object].'",
            "traps": [
                "Third clause switches to noun phrase — breaks 'how + clause' pattern.",
                "Second clause switches to noun phrase — not parallel.",
                "First clause switches to noun phrase — inconsistent structure."
            ],
            "hook": "If you start with HOW, repeat HOW in each clause of the series."
        }
    },
    {
        "id": "gram_par_11",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The company values innovation, integrity, and excellence in all its operations.",
        "wrong": [
            "The company values innovation, integrity, and being excellent in all its operations.",
            "The company values being innovative, integrity, and excellence in all its operations.",
            "The company values innovation, having integrity, and excellence in all its operations."
        ],
        "explanation": {
            "right": "All three qualities are abstract nouns: 'innovation,' 'integrity,' 'excellence.'",
            "traps": [
                "Third item switches to gerund phrase 'being excellent' — breaks noun pattern.",
                "First item switches to gerund phrase 'being innovative' — not parallel.",
                "Second item switches to gerund phrase 'having integrity' — inconsistent."
            ],
            "hook": "List of qualities: use all nouns or all adjectives, not mixed."
        }
    },
    {
        "id": "gram_par_12",
        "category": "grammar",
        "subcategory": "parallelism",
        "question": "Which sentence uses correct parallel structure?",
        "context": null,
        "correct": "The research aims to identify the causes, to analyze the effects, and to propose solutions.",
        "wrong": [
            "The research aims to identify the causes, analyzing the effects, and to propose solutions.",
            "The research aims to identify the causes, to analyze the effects, and proposing solutions.",
            "The research aims at identifying the causes, to analyze the effects, and to propose solutions."
        ],
        "explanation": {
            "right": "All three goals use infinitives: 'to identify,' 'to analyze,' 'to propose.'",
            "traps": [
                "Second item switches to gerund 'analyzing' — breaks infinitive pattern.",
                "Third item switches to gerund 'proposing' — not parallel.",
                "First item uses gerund 'identifying' with 'at' — changes the structure."
            ],
            "hook": "AIMS TO: keep all items as infinitives (to + verb)."
        }
    },
    {
        "id": "gram_mod_01",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Walking through the park, I noticed the cherry blossoms were in full bloom.",
        "wrong": [
            "Walking through the park, the cherry blossoms were noticed by me in full bloom.",
            "Walking through the park, the cherry blossoms in full bloom were noticed.",
            "The cherry blossoms were in full bloom, walking through the park."
        ],
        "explanation": {
            "right": "The modifier 'Walking through the park' correctly modifies 'I,' the person doing the walking.",
            "traps": [
                "Makes it sound like the cherry blossoms were walking — misplaced modifier.",
                "Same error — blossoms can't walk through the park.",
                "Modifier at end makes it seem blossoms are walking — illogical."
            ],
            "hook": "Opening modifier must describe the subject right after the comma."
        }
    },
    {
        "id": "gram_mod_02",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Exhausted from the long journey, the travelers collapsed into their hotel beds.",
        "wrong": [
            "Exhausted from the long journey, the hotel beds welcomed the travelers.",
            "The travelers collapsed into their hotel beds, exhausted from the long journey.",
            "Exhausted from the long journey, the beds were where the travelers collapsed."
        ],
        "explanation": {
            "right": "'Exhausted from the long journey' correctly modifies 'travelers,' who were exhausted.",
            "traps": [
                "Makes it sound like the beds were exhausted — illogical modifier.",
                "While technically acceptable, placing modifier at end is less clear — front is preferred.",
                "Makes beds the exhausted party — misplaced modifier."
            ],
            "hook": "Modifier describes WHO or WHAT is doing/feeling — place it next to that word."
        }
    },
    {
        "id": "gram_mod_03",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "To earn a promotion, an employee must demonstrate exceptional performance.",
        "wrong": [
            "To earn a promotion, exceptional performance must be demonstrated by an employee.",
            "An employee must demonstrate exceptional performance to earn a promotion.",
            "To earn a promotion, it is necessary for an employee to demonstrate exceptional performance."
        ],
        "explanation": {
            "right": "'To earn a promotion' correctly modifies 'employee,' the one who wants the promotion. (Note: option 2 is also correct but less preferred on the SAT when the infinitive phrase opens the sentence.)",
            "traps": [
                "'Performance' can't earn a promotion — only employees can.",
                "While grammatically acceptable, opening with the infinitive phrase is stylistically preferred.",
                "Uses impersonal 'it' — weaker construction than direct subject."
            ],
            "hook": "Infinitive phrase at start should describe the subject after the comma."
        }
    },
    {
        "id": "gram_mod_04",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Covered in snow, the mountain peak glistened in the morning sunlight.",
        "wrong": [
            "Covered in snow, the morning sunlight made the mountain peak glisten.",
            "The mountain peak glistened in the morning sunlight, covered in snow.",
            "Covered in snow, it was the mountain peak that glistened in the morning sunlight."
        ],
        "explanation": {
            "right": "'Covered in snow' correctly modifies 'mountain peak,' which is covered in snow.",
            "traps": [
                "Makes it sound like sunlight is covered in snow — misplaced modifier.",
                "Modifier at end is less clear — could seem like sunlight is covered.",
                "Uses weak 'it was...that' construction — less direct."
            ],
            "hook": "Opening descriptive phrase modifies the first noun after the comma."
        }
    },
    {
        "id": "gram_mod_05",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Having completed the assignment, the student submitted it before the deadline.",
        "wrong": [
            "Having completed the assignment, it was submitted by the student before the deadline.",
            "The student submitted the assignment before the deadline, having completed it.",
            "Having completed the assignment, the deadline was met by the student."
        ],
        "explanation": {
            "right": "'Having completed the assignment' correctly modifies 'student,' who did the completing.",
            "traps": [
                "'It' (the assignment) didn't complete itself — dangling modifier.",
                "While acceptable, front position for the participial phrase is clearer.",
                "'Deadline' didn't complete the assignment — misplaced modifier."
            ],
            "hook": "Having/Being phrases: make sure the subject after the comma did the action."
        }
    },
    {
        "id": "gram_mod_06",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Barking loudly at the mailman, the dog startled the neighbors.",
        "wrong": [
            "Barking loudly at the mailman, the neighbors were startled by the dog.",
            "The dog startled the neighbors, barking loudly at the mailman.",
            "Barking loudly at the mailman, it was the dog that startled the neighbors."
        ],
        "explanation": {
            "right": "'Barking loudly' correctly modifies 'dog,' which is doing the barking.",
            "traps": [
                "Makes it sound like neighbors were barking — misplaced modifier.",
                "While grammatically acceptable, opening position is clearer for participial phrases.",
                "Uses weak 'it was...that' construction — less direct."
            ],
            "hook": "-ING phrase at start: the subject right after must be doing that action."
        }
    },
    {
        "id": "gram_mod_07",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Wrapped in colorful paper, the gift sat under the Christmas tree.",
        "wrong": [
            "Wrapped in colorful paper, the Christmas tree had the gift sitting under it.",
            "The gift sat under the Christmas tree, wrapped in colorful paper.",
            "Wrapped in colorful paper, there was a gift under the Christmas tree."
        ],
        "explanation": {
            "right": "'Wrapped in colorful paper' correctly modifies 'gift,' which is wrapped.",
            "traps": [
                "Makes it sound like the tree is wrapped — misplaced modifier.",
                "While acceptable, could be unclear whether tree or gift is wrapped.",
                "Uses weak 'there was' construction — less direct."
            ],
            "hook": "Descriptive phrase at start modifies the subject immediately following."
        }
    },
    {
        "id": "gram_mod_08",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Frustrated by the delay, the passengers demanded to speak with a manager.",
        "wrong": [
            "Frustrated by the delay, a manager was demanded by the passengers.",
            "The passengers demanded to speak with a manager, frustrated by the delay.",
            "Frustrated by the delay, the demand to speak with a manager was made by passengers."
        ],
        "explanation": {
            "right": "'Frustrated by the delay' correctly modifies 'passengers,' who were frustrated.",
            "traps": [
                "Makes it sound like the manager was frustrated — misplaced modifier.",
                "While acceptable, placing modifier at end is less clear about who's frustrated.",
                "'Demand' can't be frustrated — only people can feel frustration."
            ],
            "hook": "Emotion words (frustrated, excited, worried): modify the person feeling it."
        }
    },
    {
        "id": "gram_mod_09",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Written in 1813, the novel Pride and Prejudice remains popular today.",
        "wrong": [
            "Written in 1813, today the novel Pride and Prejudice remains popular.",
            "The novel Pride and Prejudice remains popular today, written in 1813.",
            "Written in 1813, popularity of the novel Pride and Prejudice remains today."
        ],
        "explanation": {
            "right": "'Written in 1813' correctly modifies 'novel,' which was written then.",
            "traps": [
                "Awkward placement of 'today' — creates confusion about what's modified.",
                "While acceptable, front position for date is standard for emphasis.",
                "'Popularity' wasn't written — the novel was."
            ],
            "hook": "Past participles (written, built, created): modify what was acted upon."
        }
    },
    {
        "id": "gram_mod_10",
        "category": "grammar",
        "subcategory": "modifiers",
        "question": "Which sentence uses modifiers correctly?",
        "context": null,
        "correct": "Determined to succeed, Maria practiced her presentation for hours every day.",
        "wrong": [
            "Determined to succeed, hours were spent by Maria practicing her presentation every day.",
            "Maria practiced her presentation for hours every day, determined to succeed.",
            "Determined to succeed, the presentation was practiced for hours every day by Maria."
        ],
        "explanation": {
            "right": "'Determined to succeed' correctly modifies 'Maria,' who is determined.",
            "traps": [
                "'Hours' can't be determined — only people have determination.",
                "While acceptable, front position for the modifier is clearer and more emphatic.",
                "'Presentation' can't be determined — misplaced modifier."
            ],
            "hook": "Opening modifier describes the person doing the action in the main clause."
        }
    },
    {
        "id": "gram_frag_01",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "Although the storm was severe, all residents were evacuated safely.",
        "wrong": [
            "Although the storm was severe.",
            "All residents evacuated safely. Although the storm was severe.",
            "The storm being severe. All residents were evacuated safely."
        ],
        "explanation": {
            "right": "Complete sentence with dependent clause 'Although...' properly joined to independent clause.",
            "traps": [
                "Fragment — dependent clause 'Although...' needs an independent clause.",
                "The second sentence is a fragment — 'Although' clause can't stand alone.",
                "Fragment — 'being' creates a participial phrase, not a complete sentence."
            ],
            "hook": "ALTHOUGH, BECAUSE, WHILE start dependent clauses — need main clause too."
        }
    },
    {
        "id": "gram_frag_02",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "The scientist who discovered the cure received international recognition.",
        "wrong": [
            "The scientist who discovered the cure.",
            "Who discovered the cure and received international recognition.",
            "The scientist. Who discovered the cure."
        ],
        "explanation": {
            "right": "Complete sentence with relative clause properly integrated with main clause and verb.",
            "traps": [
                "Fragment — relative clause 'who discovered' lacks a main verb for 'scientist'.",
                "Fragment — starts with 'who' without antecedent, no clear subject.",
                "First is fragment — lacks verb. Second is fragment — 'who' clause needs main clause."
            ],
            "hook": "WHO, WHICH, THAT clauses are not complete — need independent clause."
        }
    },
    {
        "id": "gram_frag_03",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "Running through the forest, the deer escaped from the hunters.",
        "wrong": [
            "Running through the forest.",
            "The deer running through the forest.",
            "Running through the forest. The deer escaped from the hunters."
        ],
        "explanation": {
            "right": "Complete sentence with participial phrase properly attached to independent clause with subject and verb.",
            "traps": [
                "Fragment — participial phrase lacks subject and verb.",
                "Fragment — 'running' is a participle, not a main verb; sentence needs finite verb.",
                "First is fragment — participial phrase can't stand alone."
            ],
            "hook": "-ING phrases alone are fragments — need subject + helping verb or main clause."
        }
    },
    {
        "id": "gram_frag_04",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "After finishing her homework, she went to bed early.",
        "wrong": [
            "After finishing her homework.",
            "She went to bed early. After finishing her homework.",
            "Finishing her homework. She went to bed early."
        ],
        "explanation": {
            "right": "Complete sentence with prepositional phrase + gerund properly connected to independent clause.",
            "traps": [
                "Fragment — prepositional phrase with gerund lacks independent clause.",
                "Second sentence is fragment — 'After...' phrase can't stand alone.",
                "Fragment — gerund phrase without subject or main verb."
            ],
            "hook": "AFTER, BEFORE, WHILE + -ING are fragments — attach to complete clause."
        }
    },
    {
        "id": "gram_frag_05",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "Because the roads were icy, schools announced a two-hour delay.",
        "wrong": [
            "Because the roads were icy.",
            "Schools announced a two-hour delay. Because the roads were icy.",
            "The roads being icy. Schools announced a two-hour delay."
        ],
        "explanation": {
            "right": "Complete sentence with dependent clause properly connected to independent clause.",
            "traps": [
                "Fragment — 'Because' clause is dependent, needs independent clause.",
                "Second sentence is fragment — 'Because' clause can't stand alone.",
                "Fragment — 'being' creates a phrase, not a complete clause."
            ],
            "hook": "BECAUSE starts a reason clause — it's incomplete without a main clause."
        }
    },
    {
        "id": "gram_frag_06",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "The students, eager to begin their project, gathered in the library.",
        "wrong": [
            "The students eager to begin their project.",
            "Eager to begin their project.",
            "The students. Eager to begin their project."
        ],
        "explanation": {
            "right": "Complete sentence with appositive phrase properly set off and complete predicate 'gathered.'",
            "traps": [
                "Fragment — lacks main verb; 'eager' is adjective, not verb.",
                "Fragment — phrase alone without subject or verb.",
                "First lacks verb. Second is fragment — adjective phrase needs complete sentence."
            ],
            "hook": "Every sentence needs a SUBJECT and a FINITE VERB (not just -ing or adjective)."
        }
    },
    {
        "id": "gram_frag_07",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "To prepare for the marathon, she trained six days a week.",
        "wrong": [
            "To prepare for the marathon.",
            "She trained six days a week. To prepare for the marathon.",
            "Preparing for the marathon. She trained six days a week."
        ],
        "explanation": {
            "right": "Complete sentence with infinitive phrase properly connected to independent clause.",
            "traps": [
                "Fragment — infinitive phrase lacks subject and verb.",
                "Second sentence is fragment — infinitive phrase can't stand alone.",
                "Fragment — gerund phrase without complete predicate."
            ],
            "hook": "TO + VERB phrases are fragments — must attach to independent clause."
        }
    },
    {
        "id": "gram_frag_08",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "When the concert ended, the audience gave a standing ovation.",
        "wrong": [
            "When the concert ended.",
            "The audience gave a standing ovation. When the concert ended.",
            "The concert ending. The audience gave a standing ovation."
        ],
        "explanation": {
            "right": "Complete sentence with time clause properly joined to independent clause.",
            "traps": [
                "Fragment — 'When' clause is dependent, needs main clause.",
                "Second sentence is fragment — 'When' clause can't stand alone.",
                "Fragment — participle 'ending' without helping verb or connection."
            ],
            "hook": "WHEN, WHILE, BEFORE, AFTER clauses are incomplete — need main clause."
        }
    },
    {
        "id": "gram_frag_09",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "Having studied all night, the student felt confident about the exam.",
        "wrong": [
            "Having studied all night.",
            "The student felt confident about the exam. Having studied all night.",
            "Studied all night. The student felt confident about the exam."
        ],
        "explanation": {
            "right": "Complete sentence with perfect participle phrase properly attached to independent clause.",
            "traps": [
                "Fragment — perfect participle phrase lacks subject and finite verb.",
                "Second sentence is fragment — 'Having...' phrase needs independent clause.",
                "Fragment — past participle without helping verb or subject."
            ],
            "hook": "HAVING + past participle is a fragment — attach to complete sentence."
        }
    },
    {
        "id": "gram_frag_10",
        "category": "grammar",
        "subcategory": "fragments",
        "question": "Which sentence is grammatically complete and correct?",
        "context": null,
        "correct": "Despite the challenges, the team completed the project on schedule.",
        "wrong": [
            "Despite the challenges.",
            "The team completed the project on schedule. Despite the challenges.",
            "The challenges being many. The team completed the project."
        ],
        "explanation": {
            "right": "Complete sentence with prepositional phrase properly connected to independent clause.",
            "traps": [
                "Fragment — prepositional phrase lacks subject and verb.",
                "Second sentence is fragment — 'Despite' phrase can't stand alone.",
                "Fragment — 'being' creates incomplete phrase without main verb."
            ],
            "hook": "DESPITE, DURING, WITHOUT start phrases — not complete sentences alone."
        }
    },
    {
        "id": "gram_com_01",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "After the meeting ended, the committee members discussed their concerns.",
        "wrong": [
            "After the meeting ended the committee members discussed their concerns.",
            "After the meeting, ended the committee members discussed their concerns.",
            "After the meeting ended the committee members, discussed their concerns."
        ],
        "explanation": {
            "right": "Introductory phrase 'After the meeting ended' is correctly followed by a comma.",
            "traps": [
                "Missing comma after introductory clause — needed to separate from main clause.",
                "Comma incorrectly breaks up the introductory clause itself.",
                "Comma incorrectly separates subject 'members' from verb 'discussed'."
            ],
            "hook": "Introductory phrase or clause: put comma AFTER it, before main clause."
        }
    },
    {
        "id": "gram_com_02",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "The scientist, who won the Nobel Prize, will speak at our university.",
        "wrong": [
            "The scientist who won the Nobel Prize will speak at our university.",
            "The scientist, who won the Nobel Prize will speak at our university.",
            "The scientist who won, the Nobel Prize, will speak at our university."
        ],
        "explanation": {
            "right": "Non-restrictive clause 'who won the Nobel Prize' is correctly set off with commas on both sides.",
            "traps": [
                "Missing commas — if the clause adds extra info (non-restrictive), use commas.",
                "Missing closing comma — non-restrictive clauses need commas on BOTH sides.",
                "Comma placement is wrong — breaks up 'won the Nobel Prize.'"
            ],
            "hook": "Non-essential info (can be removed): set off with commas on BOTH sides."
        }
    },
    {
        "id": "gram_com_03",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "We need pencils, paper, notebooks, and calculators for the exam.",
        "wrong": [
            "We need pencils, paper, notebooks and calculators for the exam.",
            "We need pencils paper notebooks and calculators for the exam.",
            "We need pencils, paper, notebooks, and, calculators for the exam."
        ],
        "explanation": {
            "right": "Series of four items correctly separated by commas, including Oxford comma before 'and.'",
            "traps": [
                "Missing Oxford comma before 'and' — SAT prefers it for clarity.",
                "Missing all commas in series — items must be separated.",
                "Extra comma after 'and' — only one comma before final item."
            ],
            "hook": "Series of items: comma after each item, including before AND (Oxford comma)."
        }
    },
    {
        "id": "gram_com_04",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "My sister, an accomplished pianist, performed at Carnegie Hall.",
        "wrong": [
            "My sister an accomplished pianist performed at Carnegie Hall.",
            "My sister, an accomplished pianist performed at Carnegie Hall.",
            "My sister an accomplished pianist, performed at Carnegie Hall."
        ],
        "explanation": {
            "right": "Appositive 'an accomplished pianist' is correctly set off with commas on both sides.",
            "traps": [
                "Missing both commas — appositive needs to be set off.",
                "Missing closing comma — appositives need commas on BOTH sides.",
                "Only one comma — appositive must be enclosed by commas."
            ],
            "hook": "Appositive (renames noun): surround with commas on BOTH sides."
        }
    },
    {
        "id": "gram_com_05",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "Yes, I will attend the conference next week.",
        "wrong": [
            "Yes I will attend the conference next week.",
            "Yes, I will, attend the conference next week.",
            "Yes I will, attend the conference next week."
        ],
        "explanation": {
            "right": "Introductory word 'Yes' is correctly followed by comma before main sentence.",
            "traps": [
                "Missing comma after introductory 'Yes' — always use comma here.",
                "Extra comma incorrectly separates 'will' from 'attend'.",
                "Comma in wrong place — should come after 'Yes' only."
            ],
            "hook": "Introductory YES, NO, WELL: always follow with comma."
        }
    },
    {
        "id": "gram_com_06",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "The movie was entertaining, but the ending was disappointing.",
        "wrong": [
            "The movie was entertaining but the ending was disappointing.",
            "The movie was entertaining, but, the ending was disappointing.",
            "The movie was, entertaining but the ending was disappointing."
        ],
        "explanation": {
            "right": "Comma correctly placed before coordinating conjunction 'but' joining two independent clauses.",
            "traps": [
                "Missing comma before 'but' — need comma when joining independent clauses.",
                "Extra comma after 'but' — only one comma, before the conjunction.",
                "Comma incorrectly placed — should be before 'but,' not after 'was'."
            ],
            "hook": "Two complete sentences joined by AND, BUT, OR: comma BEFORE conjunction."
        }
    },
    {
        "id": "gram_com_07",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "The package will arrive on Tuesday, May 15, at noon.",
        "wrong": [
            "The package will arrive on Tuesday May 15 at noon.",
            "The package will arrive on Tuesday, May 15 at noon.",
            "The package will arrive on Tuesday May 15, at noon."
        ],
        "explanation": {
            "right": "Date format correctly uses comma after day of week and after complete date.",
            "traps": [
                "Missing commas in date — need comma after 'Tuesday' and after '15'.",
                "Missing second comma — dates need comma AFTER as well.",
                "Missing first comma — need comma after day of week."
            ],
            "hook": "Full dates: comma after day of week, comma after date number."
        }
    },
    {
        "id": "gram_com_08",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "Born in Chicago, Illinois, in 1985, she became a renowned architect.",
        "wrong": [
            "Born in Chicago Illinois in 1985 she became a renowned architect.",
            "Born in Chicago, Illinois in 1985, she became a renowned architect.",
            "Born in Chicago Illinois, in 1985 she became a renowned architect."
        ],
        "explanation": {
            "right": "City and state separated by comma, state followed by comma, and introductory phrase followed by comma.",
            "traps": [
                "Missing all commas — need comma after state and after year.",
                "Missing comma after state — city/state needs comma AFTER state too.",
                "Missing comma after city — need comma between city and state."
            ],
            "hook": "City, State format: comma AFTER state too when sentence continues."
        }
    },
    {
        "id": "gram_com_09",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "She earned her degree in biology, not chemistry, before attending medical school.",
        "wrong": [
            "She earned her degree in biology not chemistry before attending medical school.",
            "She earned her degree in biology, not chemistry before attending medical school.",
            "She earned her degree in biology not chemistry, before attending medical school."
        ],
        "explanation": {
            "right": "Contrasting phrase 'not chemistry' is correctly set off with commas on both sides.",
            "traps": [
                "Missing commas around contrast — 'not chemistry' is parenthetical info.",
                "Missing second comma — contrasting elements need commas on BOTH sides.",
                "Missing first comma — contrast must be set off before 'not'."
            ],
            "hook": "NOT phrases (contrasts): set off with commas on both sides."
        }
    },
    {
        "id": "gram_com_10",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "Having finished her work, Maria left the office early.",
        "wrong": [
            "Having finished her work Maria left the office early.",
            "Having, finished her work Maria left the office early.",
            "Having finished her work Maria, left the office early."
        ],
        "explanation": {
            "right": "Participial phrase 'Having finished her work' is correctly followed by comma.",
            "traps": [
                "Missing comma after introductory participial phrase.",
                "Comma incorrectly placed within the phrase itself.",
                "Comma incorrectly separates subject 'Maria' from verb 'left'."
            ],
            "hook": "Participial phrase at start: comma AFTER the whole phrase."
        }
    },
    {
        "id": "gram_com_11",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "The tall, elegant woman entered the room gracefully.",
        "wrong": [
            "The tall elegant woman entered the room gracefully.",
            "The, tall elegant woman entered the room gracefully.",
            "The tall, elegant, woman entered the room gracefully."
        ],
        "explanation": {
            "right": "Coordinate adjectives 'tall' and 'elegant' are correctly separated by comma.",
            "traps": [
                "Missing comma between coordinate adjectives — both equally describe 'woman'.",
                "Comma incorrectly placed after 'The' — should be between adjectives.",
                "Extra comma after 'elegant' — adjectives shouldn't be separated from noun."
            ],
            "hook": "Coordinate adjectives (equal weight): separate with comma."
        }
    },
    {
        "id": "gram_com_12",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "The museum, which opened last year, features contemporary art.",
        "wrong": [
            "The museum which opened last year features contemporary art.",
            "The museum, which opened last year features contemporary art.",
            "The museum which opened, last year, features contemporary art."
        ],
        "explanation": {
            "right": "Non-restrictive 'which' clause correctly set off with commas on both sides.",
            "traps": [
                "Missing commas — 'which' clauses are non-restrictive, need commas.",
                "Missing closing comma — non-restrictive clause needs both commas.",
                "Commas in wrong places — should surround entire 'which' clause."
            ],
            "hook": "WHICH clauses: non-restrictive, always use commas on both sides."
        }
    },
    {
        "id": "gram_com_13",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "Please send the report to John Smith, Director of Marketing, by Friday.",
        "wrong": [
            "Please send the report to John Smith Director of Marketing by Friday.",
            "Please send the report to John Smith, Director of Marketing by Friday.",
            "Please send the report to, John Smith Director of Marketing, by Friday."
        ],
        "explanation": {
            "right": "Title 'Director of Marketing' as appositive correctly set off with commas on both sides.",
            "traps": [
                "Missing commas around appositive title.",
                "Missing closing comma — appositive needs commas on both sides.",
                "Comma in wrong place — should surround the title, not precede the name."
            ],
            "hook": "Titles as appositives: commas on BOTH sides of the title."
        }
    },
    {
        "id": "gram_com_14",
        "category": "grammar",
        "subcategory": "commas",
        "question": "Which sentence uses commas correctly?",
        "context": null,
        "correct": "In fact, the experiment yielded unexpected results.",
        "wrong": [
            "In fact the experiment yielded unexpected results.",
            "In, fact the experiment yielded unexpected results.",
            "In fact, the experiment, yielded unexpected results."
        ],
        "explanation": {
            "right": "Transitional phrase 'In fact' correctly followed by comma.",
            "traps": [
                "Missing comma after transitional phrase — always use comma here.",
                "Comma incorrectly placed within the phrase 'In fact'.",
                "Extra comma incorrectly separates subject 'experiment' from verb 'yielded'."
            ],
            "hook": "Transitional phrases (in fact, however, therefore): comma AFTER them."
        }
    },
    {
        "id": "gram_semi_01",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The experiment failed; however, the team learned valuable lessons.",
        "wrong": [
            "The experiment failed, however, the team learned valuable lessons.",
            "The experiment failed; however the team learned valuable lessons.",
            "The experiment failed however; the team learned valuable lessons."
        ],
        "explanation": {
            "right": "Semicolon correctly separates two independent clauses joined by 'however,' which is followed by comma.",
            "traps": [
                "Comma splice — two independent clauses need semicolon or period, not just comma.",
                "Missing comma after 'however' — conjunctive adverbs need comma after them.",
                "Semicolon in wrong place — should come BEFORE 'however,' not after."
            ],
            "hook": "Conjunctive adverbs (however, therefore, moreover): semicolon BEFORE, comma AFTER."
        }
    },
    {
        "id": "gram_semi_02",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "She studied biology, chemistry, and physics; traveled to Paris, Rome, and Athens; and learned French, Italian, and Greek.",
        "wrong": [
            "She studied biology, chemistry, and physics, traveled to Paris, Rome, and Athens, and learned French, Italian, and Greek.",
            "She studied biology, chemistry, and physics; traveled to Paris; Rome; and Athens; and learned French, Italian, and Greek.",
            "She studied biology; chemistry; and physics; traveled to Paris, Rome, and Athens; and learned French, Italian, and Greek."
        ],
        "explanation": {
            "right": "Semicolons correctly separate complex list items that already contain commas.",
            "traps": [
                "Using only commas creates confusion — semicolons clarify major divisions.",
                "Too many semicolons — use them only between major list items, not within.",
                "Semicolons within the first group — use only between the three main activities."
            ],
            "hook": "Complex lists with internal commas: use semicolons to separate main items."
        }
    },
    {
        "id": "gram_semi_03",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The concert was sold out; we watched it online instead.",
        "wrong": [
            "The concert was sold out, we watched it online instead.",
            "The concert was sold out; and we watched it online instead.",
            "The concert was sold out we watched it online instead."
        ],
        "explanation": {
            "right": "Semicolon correctly joins two closely related independent clauses without conjunction.",
            "traps": [
                "Comma splice — two independent clauses can't be joined with just comma.",
                "Semicolon with 'and' is redundant — use one or the other, not both.",
                "Run-on sentence — needs semicolon, period, or comma + conjunction."
            ],
            "hook": "Two complete sentences, closely related: join with semicolon (no conjunction needed)."
        }
    },
    {
        "id": "gram_semi_04",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The conference included speakers from Boston, Massachusetts; Portland, Oregon; and Austin, Texas.",
        "wrong": [
            "The conference included speakers from Boston, Massachusetts, Portland, Oregon, and Austin, Texas.",
            "The conference included speakers from Boston; Massachusetts; Portland; Oregon; and Austin; Texas.",
            "The conference included speakers from Boston, Massachusetts; Portland; Oregon; and Austin, Texas."
        ],
        "explanation": {
            "right": "Semicolons correctly separate city-state pairs in a list.",
            "traps": [
                "Using only commas is confusing — looks like six items instead of three.",
                "Too many semicolons — separate between city-state pairs, not within them.",
                "Inconsistent — should use semicolons between all city-state pairs."
            ],
            "hook": "List of city-state pairs: use semicolons between pairs for clarity."
        }
    },
    {
        "id": "gram_semi_05",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The data was inconclusive; therefore, we need to conduct additional research.",
        "wrong": [
            "The data was inconclusive, therefore, we need to conduct additional research.",
            "The data was inconclusive; therefore we need to conduct additional research.",
            "The data was inconclusive therefore; we need to conduct additional research."
        ],
        "explanation": {
            "right": "Semicolon before 'therefore' and comma after correctly join two independent clauses.",
            "traps": [
                "Comma splice — 'therefore' is not a coordinating conjunction, needs semicolon before.",
                "Missing comma after 'therefore' — conjunctive adverbs need comma after them.",
                "Semicolon in wrong place — should come before 'therefore,' not after."
            ],
            "hook": "THEREFORE, THUS, CONSEQUENTLY: semicolon before, comma after."
        }
    },
    {
        "id": "gram_semi_06",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The new policy benefits many employees; moreover, it reduces company expenses.",
        "wrong": [
            "The new policy benefits many employees, moreover, it reduces company expenses.",
            "The new policy benefits many employees; moreover it reduces company expenses.",
            "The new policy benefits many employees moreover; it reduces company expenses."
        ],
        "explanation": {
            "right": "Semicolon correctly precedes 'moreover' and comma follows it.",
            "traps": [
                "Comma splice — need semicolon before 'moreover,' not comma.",
                "Missing comma after 'moreover' — conjunctive adverbs require comma after.",
                "Semicolon in wrong position — must come before 'moreover.'"
            ],
            "hook": "MOREOVER, FURTHERMORE, NEVERTHELESS: semicolon before, comma after."
        }
    },
    {
        "id": "gram_semi_07",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "I need to call my mother; my brother is visiting her today.",
        "wrong": [
            "I need to call my mother, my brother is visiting her today.",
            "I need to call my mother; because my brother is visiting her today.",
            "I need to call; my mother my brother is visiting her today."
        ],
        "explanation": {
            "right": "Semicolon correctly joins two independent clauses that are closely related.",
            "traps": [
                "Comma splice — can't join two independent clauses with just comma.",
                "Semicolon with 'because' is wrong — 'because' makes dependent clause, use comma.",
                "Semicolon in wrong place — breaks up the first complete thought."
            ],
            "hook": "Semicolon joins TWO COMPLETE sentences that are closely related."
        }
    },
    {
        "id": "gram_semi_08",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The team included Maria, the captain; James, the goalkeeper; and Sara, the top scorer.",
        "wrong": [
            "The team included Maria, the captain, James, the goalkeeper, and Sara, the top scorer.",
            "The team included Maria; the captain; James; the goalkeeper; and Sara; the top scorer.",
            "The team included Maria, the captain; James the goalkeeper; and Sara, the top scorer."
        ],
        "explanation": {
            "right": "Semicolons correctly separate list items that contain internal commas (appositives).",
            "traps": [
                "Using only commas is confusing — six commas make it hard to see three people.",
                "Too many semicolons — separate between people, not within each person's description.",
                "Missing comma in second item — each appositive needs its own comma."
            ],
            "hook": "List items with internal commas: separate items with semicolons."
        }
    },
    {
        "id": "gram_semi_09",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The results were surprising; indeed, they contradicted the original hypothesis.",
        "wrong": [
            "The results were surprising, indeed, they contradicted the original hypothesis.",
            "The results were surprising; indeed they contradicted the original hypothesis.",
            "The results were surprising indeed; they contradicted the original hypothesis."
        ],
        "explanation": {
            "right": "Semicolon before 'indeed' and comma after correctly connect two independent clauses.",
            "traps": [
                "Comma splice — need semicolon before 'indeed,' not just comma.",
                "Missing comma after 'indeed' — conjunctive adverbs need comma after.",
                "Semicolon in wrong place — should be before 'indeed,' not after."
            ],
            "hook": "INDEED: semicolon before it, comma after it."
        }
    },
    {
        "id": "gram_semi_10",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The workshop is full; consequently, you'll need to register for the next session.",
        "wrong": [
            "The workshop is full, consequently, you'll need to register for the next session.",
            "The workshop is full; consequently you'll need to register for the next session.",
            "The workshop is full consequently; you'll need to register for the next session."
        ],
        "explanation": {
            "right": "Semicolon correctly placed before 'consequently' with comma after.",
            "traps": [
                "Comma splice — 'consequently' needs semicolon before, not just comma.",
                "Missing comma after 'consequently' — conjunctive adverbs need comma after.",
                "Semicolon in wrong position — must come before 'consequently.'"
            ],
            "hook": "Conjunctive adverb formula: ; conjunctive adverb,"
        }
    },
    {
        "id": "gram_semi_11",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "The museum exhibits art from various periods; the ancient collection is particularly impressive.",
        "wrong": [
            "The museum exhibits art from various periods, the ancient collection is particularly impressive.",
            "The museum exhibits art from various periods; and the ancient collection is particularly impressive.",
            "The museum exhibits; art from various periods the ancient collection is particularly impressive."
        ],
        "explanation": {
            "right": "Semicolon correctly joins two related independent clauses without conjunction.",
            "traps": [
                "Comma splice — two independent clauses need stronger punctuation.",
                "Semicolon plus 'and' is redundant — use semicolon alone or comma + 'and.'",
                "Semicolon in wrong place — breaks up the first complete thought."
            ],
            "hook": "Semicolon = stronger comma. Joins two complete, related sentences."
        }
    },
    {
        "id": "gram_semi_12",
        "category": "grammar",
        "subcategory": "semicolons",
        "question": "Which sentence uses semicolons correctly?",
        "context": null,
        "correct": "He loves reading; his favorite genres are mystery, science fiction, and fantasy.",
        "wrong": [
            "He loves reading, his favorite genres are mystery, science fiction, and fantasy.",
            "He loves reading; his favorite genres are; mystery, science fiction, and fantasy.",
            "He loves; reading his favorite genres are mystery, science fiction, and fantasy."
        ],
        "explanation": {
            "right": "Semicolon correctly separates two independent clauses that are related.",
            "traps": [
                "Comma splice — can't join independent clauses with just comma.",
                "Second semicolon is wrong — 'are' needs its complement without interruption.",
                "Semicolon in wrong place — breaks up 'loves reading.'"
            ],
            "hook": "One semicolon joins two complete thoughts; don't use multiple semicolons incorrectly."
        }
    },
    {
        "id": "gram_apos_01",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "The teacher's desk was covered with students' assignments.",
        "wrong": [
            "The teachers desk was covered with students assignments.",
            "The teachers' desk was covered with student's assignments.",
            "The teacher's desk was covered with students assignments."
        ],
        "explanation": {
            "right": "Singular possessive 'teacher's' and plural possessive 'students'' are both correct.",
            "traps": [
                "Missing both apostrophes — possessives need apostrophes.",
                "'teachers'' is plural possessive (multiple teachers) — only one teacher here; 'student's' is singular but assignments come from multiple students.",
                "Missing apostrophe in 'students' — plural possessive needs apostrophe after s."
            ],
            "hook": "Singular possessive: 's; Plural ending in s: s' only."
        }
    },
    {
        "id": "gram_apos_02",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "It's important to respect others' opinions, even when they're different from yours.",
        "wrong": [
            "Its important to respect others' opinions, even when they're different from yours.",
            "It's important to respect others opinions, even when their different from yours.",
            "It's important to respect others' opinions, even when they're different from your's."
        ],
        "explanation": {
            "right": "'It's' (it is), 'others'' (plural possessive), 'they're' (they are), and 'yours' (no apostrophe) are all correct.",
            "traps": [
                "'Its' without apostrophe means possessive — here we need 'it is' = it's.",
                "Missing apostrophe in 'others' possessive; 'their' is possessive pronoun, not contraction.",
                "'your's' is wrong — possessive pronouns (yours, hers, its) never have apostrophes."
            ],
            "hook": "IT'S = it is; ITS = possessive. Possessive pronouns (yours, theirs) = NO apostrophe."
        }
    },
    {
        "id": "gram_apos_03",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "The children's toys were scattered across the room.",
        "wrong": [
            "The childrens toys were scattered across the room.",
            "The childrens' toys were scattered across the room.",
            "The children's toy's were scattered across the room."
        ],
        "explanation": {
            "right": "'Children' is plural but doesn't end in s, so possessive is 'children's.'",
            "traps": [
                "Missing apostrophe — possessive form is needed.",
                "'childrens'' is wrong — 'children' doesn't end in s, so use 's not s'.",
                "Unnecessary apostrophe in 'toy's' — plural 'toys' doesn't need apostrophe."
            ],
            "hook": "Irregular plurals (children, women, men): add 's for possessive."
        }
    },
    {
        "id": "gram_apos_04",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "James's car is parked next to the Joneses' house.",
        "wrong": [
            "James' car is parked next to the Jones's house.",
            "James car is parked next to the Joneses house.",
            "James's car is parked next to the Jones' house."
        ],
        "explanation": {
            "right": "Singular name 'James' takes 's (James's); plural family name 'Joneses' takes s' (Joneses').",
            "traps": [
                "While 'James'' is sometimes accepted, 'James's' is preferred; 'Jones's' should be 'Joneses'' for the whole family.",
                "Missing apostrophes in both possessives.",
                "'Jones'' is incomplete — family name needs plural 'Joneses' then apostrophe."
            ],
            "hook": "Names ending in s: add 's. Plural family names: make plural, then add apostrophe."
        }
    },
    {
        "id": "gram_apos_05",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "You're going to love the company's new policies; they're very employee-friendly.",
        "wrong": [
            "Your going to love the company's new policies; their very employee-friendly.",
            "You're going to love the companys new policies; they're very employee-friendly.",
            "You're going to love the company's new policies; there very employee-friendly."
        ],
        "explanation": {
            "right": "'You're' (you are), 'company's' (possessive), and 'they're' (they are) all correct.",
            "traps": [
                "'Your' is possessive (not 'you are'); 'their' is possessive (not 'they are').",
                "Missing apostrophe in possessive 'company's.'",
                "'there' is a location — need 'they're' (they are)."
            ],
            "hook": "YOU'RE = you are; YOUR = possessive. THEY'RE = they are; THEIR = possessive; THERE = place."
        }
    },
    {
        "id": "gram_apos_06",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "The women's soccer team won three championships in the 1990s.",
        "wrong": [
            "The womens soccer team won three championships in the 1990's.",
            "The women's soccer team won three championship's in the 1990s.",
            "The womens' soccer team won three championships in the 1990s."
        ],
        "explanation": {
            "right": "'Women' is irregular plural, so possessive is 'women's'; decades are plural without apostrophe '1990s.'",
            "traps": [
                "Missing apostrophe in 'womens'; decades don't need apostrophes — '1990s' not '1990's'.",
                "Unnecessary apostrophe in plural 'championships'; decades shouldn't have apostrophes.",
                "'womens'' is wrong — 'women' doesn't end in s, use 's not s'."
            ],
            "hook": "Decades: no apostrophe (1990s, 2000s). Irregular plural possessive: add 's."
        }
    },
    {
        "id": "gram_apos_07",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "Whose book is this? I think it's Maria's.",
        "wrong": [
            "Who's book is this? I think its Maria's.",
            "Whose book is this? I think it's Marias.",
            "Who's book is this? I think it's Maria's."
        ],
        "explanation": {
            "right": "'Whose' (possessive), 'it's' (it is), and 'Maria's' (possessive) are all correct.",
            "traps": [
                "'Who's' means 'who is' — need possessive 'whose'; 'its' without apostrophe is possessive but we need 'it is.'",
                "Missing apostrophe in possessive 'Maria's.'",
                "'Who's' means 'who is' — need possessive 'whose' for ownership questions."
            ],
            "hook": "WHOSE = possessive (whose book?); WHO'S = who is. IT'S = it is; ITS = possessive."
        }
    },
    {
        "id": "gram_apos_08",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "The dog wagged its tail when it's happy.",
        "wrong": [
            "The dog wagged it's tail when its happy.",
            "The dog wagged its tail when its happy.",
            "The dog wagged it's tail when it's happy."
        ],
        "explanation": {
            "right": "First 'its' is possessive (no apostrophe); second 'it's' means 'it is' (with apostrophe).",
            "traps": [
                "Reversed — 'it's' should be 'its' for possessive; 'its' should be 'it's' for 'it is.'",
                "Second 'its' should be 'it's' (it is) — possessive 'its' doesn't fit the meaning.",
                "First 'it's' should be 'its' — possessive form has no apostrophe."
            ],
            "hook": "ITS = possessive (its tail); IT'S = it is (it's happy)."
        }
    },
    {
        "id": "gram_apos_09",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "The boss's office is on the third floor, near the employees' lounge.",
        "wrong": [
            "The boss' office is on the third floor, near the employee's lounge.",
            "The bosses office is on the third floor, near the employees lounge.",
            "The boss's office is on the third floor, near the employee's lounge."
        ],
        "explanation": {
            "right": "Singular possessive 'boss's' and plural possessive 'employees'' are both correct.",
            "traps": [
                "While 'boss'' is sometimes used, 'boss's' is preferred; 'employee's' is singular but the lounge is for multiple employees.",
                "Missing apostrophes in both possessives.",
                "'employee's' is singular possessive — but lounge is for multiple employees, need 'employees''."
            ],
            "hook": "Singular nouns ending in s: add 's. Plural possessive: add ' after the s."
        }
    },
    {
        "id": "gram_apos_10",
        "category": "grammar",
        "subcategory": "apostrophes",
        "question": "Which sentence uses apostrophes correctly?",
        "context": null,
        "correct": "There are three A's and two B's on my transcript.",
        "wrong": [
            "There are three As and two Bs on my transcript.",
            "There are three A's' and two B's' on my transcript.",
            "There are three As' and two Bs' on my transcript."
        ],
        "explanation": {
            "right": "Plurals of single letters use apostrophe before s to avoid confusion (A's, B's).",
            "traps": [
                "Without apostrophes, 'As' and 'Bs' can be confused with words — apostrophes add clarity.",
                "Extra apostrophe after s is wrong — possessive form not needed here.",
                "Apostrophe after s suggests possessive — need 's for plural letters."
            ],
            "hook": "Plural of single letters: add 's (A's, B's) to prevent confusion."
        }
    },
    {
        "id": "gram_err_01",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Each of the candidates have presented their platform to the voters.",
        "wrong": [
            "Each of the candidates has presented a platform to the voters.",
            "The candidates have each presented their platforms to the voters.",
            "Every candidate has presented a unique platform to the voters."
        ],
        "explanation": {
            "right": "'Each' is singular and requires 'has,' not 'have.' The correct version is 'Each of the candidates has presented...'",
            "traps": [
                "This sentence is correct — 'Each...has' with singular verb.",
                "This sentence is correct — 'candidates have' with plural subject.",
                "This sentence is correct — 'Every candidate has' with singular."
            ],
            "hook": "EACH and EVERY are always singular: each HAS, every student IS."
        }
    },
    {
        "id": "gram_err_02",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Walking through the museum, the ancient artifacts were admired by the tourists.",
        "wrong": [
            "Walking through the museum, the tourists admired the ancient artifacts.",
            "The tourists admired the ancient artifacts while walking through the museum.",
            "While walking through the museum, the tourists admired the ancient artifacts."
        ],
        "explanation": {
            "right": "Dangling modifier — the artifacts weren't walking. Should be: 'Walking through the museum, the tourists admired the ancient artifacts.'",
            "traps": [
                "This sentence is correct — the tourists are walking and admiring.",
                "This sentence is correct — clear subject performing both actions.",
                "This sentence is correct — properly connects the walking to the tourists."
            ],
            "hook": "Opening -ING phrase: the subject right after the comma must be doing that action."
        }
    },
    {
        "id": "gram_err_03",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The committee have voted unanimously to approve the new budget.",
        "wrong": [
            "The committee has voted unanimously to approve the new budget.",
            "Committee members have voted unanimously to approve the new budget.",
            "The committee voted unanimously to approve the new budget."
        ],
        "explanation": {
            "right": "'Committee' is a collective noun acting as one unit and takes singular verb 'has,' not 'have.'",
            "traps": [
                "This sentence is correct — 'committee has' with singular verb.",
                "This sentence is correct — 'members have' with plural noun.",
                "This sentence is correct — simple past works for both singular and plural."
            ],
            "hook": "Collective nouns acting as ONE unit: use singular verbs (committee HAS, team IS)."
        }
    },
    {
        "id": "gram_err_04",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Neither the supervisor nor the employees was aware of the policy change.",
        "wrong": [
            "Neither the supervisor nor the employees were aware of the policy change.",
            "The supervisor and the employees were unaware of the policy change.",
            "No one, neither supervisor nor employees, was aware of the policy change."
        ],
        "explanation": {
            "right": "With 'neither...nor,' verb agrees with the CLOSER subject. 'Employees' is plural, so use 'were,' not 'was.'",
            "traps": [
                "This sentence is correct — 'employees were' follows proximity rule.",
                "This sentence is correct — compound subject with 'and' takes plural verb.",
                "This sentence is correct — 'no one' is singular taking 'was.'"
            ],
            "hook": "Neither/nor: verb agrees with the CLOSER noun (here: employees WERE)."
        }
    },
    {
        "id": "gram_err_05",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "She enjoys hiking, swimming, and to ride her bicycle on weekends.",
        "wrong": [
            "She enjoys hiking, swimming, and riding her bicycle on weekends.",
            "She enjoys hiking, swimming, and biking on weekends.",
            "On weekends, she enjoys hiking, swimming, and cycling."
        ],
        "explanation": {
            "right": "Lack of parallel structure — should be 'hiking, swimming, and riding' (all gerunds), not mixing gerund with infinitive 'to ride.'",
            "traps": [
                "This sentence is correct — all three activities use gerunds.",
                "This sentence is correct — parallel structure with gerunds.",
                "This sentence is correct — maintains parallelism with gerunds."
            ],
            "hook": "After ENJOY: all gerunds (-ing), no infinitives (to + verb)."
        }
    },
    {
        "id": "gram_err_06",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Everyone in the class submitted their final project on time.",
        "wrong": [
            "Everyone in the class submitted his or her final project on time.",
            "All students in the class submitted their final projects on time.",
            "Every student in the class submitted a final project on time."
        ],
        "explanation": {
            "right": "Pronoun disagreement — 'everyone' is singular, requires 'his or her,' not plural 'their.' (Note: Modern usage increasingly accepts singular 'they/their.')' but traditional SAT grammar requires singular pronouns.",
            "traps": [
                "This sentence is correct — 'everyone...his or her' with singular pronoun.",
                "This sentence is correct — 'all students...their' with plural agreement.",
                "This sentence is correct — 'every student' is properly singular."
            ],
            "hook": "Traditional rule: EVERYONE is singular = his or her (though 'their' gaining acceptance)."
        }
    },
    {
        "id": "gram_err_07",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "By the time we arrived at the theater, the movie already started.",
        "wrong": [
            "By the time we arrived at the theater, the movie had already started.",
            "When we arrived at the theater, the movie had already started.",
            "The movie had already started by the time we arrived at the theater."
        ],
        "explanation": {
            "right": "Verb tense error — need past perfect 'had started' to show movie started before the arrival. Simple past 'started' is incorrect.",
            "traps": [
                "This sentence is correct — 'had started' shows earlier action with past perfect.",
                "This sentence is correct — past perfect correctly indicates sequence.",
                "This sentence is correct — past perfect properly shows timing."
            ],
            "hook": "Two past actions: use past perfect (HAD + verb) for the one that happened FIRST."
        }
    },
    {
        "id": "gram_err_08",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The data shows a significant increase in temperature over the past decade.",
        "wrong": [
            "The data show a significant increase in temperature over the past decade.",
            "These data show a significant increase in temperature over the past decade.",
            "The statistics show a significant increase in temperature over the past decade."
        ],
        "explanation": {
            "right": "'Data' is plural (datum = singular), so requires plural verb 'show,' not singular 'shows.'",
            "traps": [
                "This sentence is correct — 'data show' with plural verb.",
                "This sentence is correct — 'these data show' clearly plural.",
                "This sentence is correct — 'statistics show' with plural noun and verb."
            ],
            "hook": "DATA, CRITERIA, PHENOMENA are plural — they SHOW, they ARE."
        }
    },
    {
        "id": "gram_err_09",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Me and my sister went to the concert last night.",
        "wrong": [
            "My sister and I went to the concert last night.",
            "Last night, my sister and I went to the concert.",
            "My sister and I attended the concert last night."
        ],
        "explanation": {
            "right": "Subject pronoun error — should be 'My sister and I' not 'Me and my sister.' 'Me' is object pronoun, can't be subject.",
            "traps": [
                "This sentence is correct — 'my sister and I' as subject.",
                "This sentence is correct — correct pronoun usage.",
                "This sentence is correct — proper subject pronoun."
            ],
            "hook": "Subject of sentence: I, not ME. Test by removing the other person: I went (not Me went)."
        }
    },
    {
        "id": "gram_err_10",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The meeting was attended by the CEO, the CFO, and myself.",
        "wrong": [
            "The meeting was attended by the CEO, the CFO, and me.",
            "The CEO, the CFO, and I attended the meeting.",
            "I attended the meeting along with the CEO and the CFO."
        ],
        "explanation": {
            "right": "Reflexive pronoun error — 'myself' should only be used reflexively or for emphasis. Should be 'me' (object pronoun).",
            "traps": [
                "This sentence is correct — 'me' as object of preposition 'by.'",
                "This sentence is correct — 'I' as subject.",
                "This sentence is correct — 'I' as subject."
            ],
            "hook": "MYSELF only when you already said I: I hurt MYSELF. Don't use to sound formal."
        }
    },
    {
        "id": "gram_err_11",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The company's profits, which had declined for three years, has finally begun to recover.",
        "wrong": [
            "The company's profits, which had declined for three years, have finally begun to recover.",
            "The company's profits have finally begun to recover after declining for three years.",
            "After three years of decline, the company's profits have finally begun to recover."
        ],
        "explanation": {
            "right": "Subject-verb disagreement — 'profits' is plural, requires 'have,' not singular 'has.'",
            "traps": [
                "This sentence is correct — 'profits...have' with plural agreement.",
                "This sentence is correct — plural subject and verb agree.",
                "This sentence is correct — 'profits have' maintains agreement."
            ],
            "hook": "Find the TRUE subject. PROFITS (plural) HAVE, not HAS."
        }
    },
    {
        "id": "gram_err_12",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Because the weather was severe, schools were closed, and roads were hazardous.",
        "wrong": [
            "Because the weather was severe, schools were closed and roads were hazardous.",
            "Schools were closed and roads were hazardous because the weather was severe.",
            "The severe weather resulted in school closures and hazardous roads."
        ],
        "explanation": {
            "right": "Comma error — when a sentence has a dependent clause + two independent clauses joined by 'and,' you need comma before 'and' to separate the independent clauses. Correct: 'severe, schools were closed, and roads...'",
            "traps": [
                "This sentence is correct — comma properly placed before 'and.'",
                "This sentence is correct — compound predicate after 'because' clause.",
                "This sentence is correct — simple sentence with compound object."
            ],
            "hook": "Two independent clauses joined by AND: comma before AND."
        }
    },
    {
        "id": "gram_err_13",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The reason the experiment failed is because the temperature was too high.",
        "wrong": [
            "The reason the experiment failed is that the temperature was too high.",
            "The experiment failed because the temperature was too high.",
            "The high temperature was the reason the experiment failed."
        ],
        "explanation": {
            "right": "Redundant construction — 'reason...is because' is redundant. Should be 'reason...is that' or simply use 'because' without 'reason.'",
            "traps": [
                "This sentence is correct — 'reason...is that' is proper construction.",
                "This sentence is correct — uses 'because' without redundant 'reason.'",
                "This sentence is correct — avoids the redundancy altogether."
            ],
            "hook": "Never say 'reason is BECAUSE' — say 'reason is THAT' or just use 'because.'"
        }
    },
    {
        "id": "gram_err_14",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "There is several reasons why the project was delayed.",
        "wrong": [
            "There are several reasons why the project was delayed.",
            "Several reasons explain why the project was delayed.",
            "The project was delayed for several reasons."
        ],
        "explanation": {
            "right": "Subject-verb disagreement — 'reasons' is plural, requires 'are,' not singular 'is.'",
            "traps": [
                "This sentence is correct — 'there are' agrees with plural 'reasons.'",
                "This sentence is correct — plural subject and verb.",
                "This sentence is correct — avoids the 'there is/are' construction."
            ],
            "hook": "THERE IS/ARE: look at the noun AFTER the verb to determine singular/plural."
        }
    },
    {
        "id": "gram_err_15",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Having completed the assignment, it was submitted before the deadline.",
        "wrong": [
            "Having completed the assignment, the student submitted it before the deadline.",
            "The student completed the assignment and submitted it before the deadline.",
            "After completing the assignment, the student submitted it before the deadline."
        ],
        "explanation": {
            "right": "Dangling modifier — 'it' (the assignment) didn't complete anything. Should be: 'Having completed the assignment, the student submitted...'",
            "traps": [
                "This sentence is correct — 'the student' properly follows the participial phrase.",
                "This sentence is correct — clear subjects for both actions.",
                "This sentence is correct — 'the student' is the subject doing both actions."
            ],
            "hook": "HAVING + past participle: the subject after comma must be the one who did it."
        }
    },
    {
        "id": "gram_err_16",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "If I would have known about the traffic, I would have left earlier.",
        "wrong": [
            "If I had known about the traffic, I would have left earlier.",
            "Had I known about the traffic, I would have left earlier.",
            "I would have left earlier if I had known about the traffic."
        ],
        "explanation": {
            "right": "Conditional error — don't use 'would have' in the 'if' clause. Should be 'If I had known' (past perfect), not 'If I would have known.'",
            "traps": [
                "This sentence is correct — 'if I had known' with proper past perfect.",
                "This sentence is correct — inverted form 'had I known' is correct.",
                "This sentence is correct — proper past perfect in if-clause."
            ],
            "hook": "Hypothetical past: IF + had + verb, WOULD HAVE + verb (never 'if would have')."
        }
    },
    {
        "id": "gram_err_17",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The professor, along with her students, are conducting research on climate change.",
        "wrong": [
            "The professor, along with her students, is conducting research on climate change.",
            "The professor and her students are conducting research on climate change.",
            "Research on climate change is being conducted by the professor and her students."
        ],
        "explanation": {
            "right": "Subject-verb disagreement — 'along with' doesn't make a compound subject. The subject is 'professor' (singular), so use 'is,' not 'are.'",
            "traps": [
                "This sentence is correct — 'professor...is' correctly singular.",
                "This sentence is correct — 'and' creates compound subject taking plural 'are.'",
                "This sentence is correct — compound subject with proper plural verb."
            ],
            "hook": "ALONG WITH, AS WELL AS don't create compound subjects — verb matches main subject only."
        }
    },
    {
        "id": "gram_err_18",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Between you and I, the new policy seems unfair.",
        "wrong": [
            "Between you and me, the new policy seems unfair.",
            "The new policy, between you and me, seems unfair.",
            "Just between you and me, I think the new policy is unfair."
        ],
        "explanation": {
            "right": "Pronoun case error — after preposition 'between,' use object pronoun 'me,' not subject pronoun 'I.'",
            "traps": [
                "This sentence is correct — 'between you and me' with object pronouns.",
                "This sentence is correct — proper use of object pronouns.",
                "This sentence is correct — 'between you and me' is correct form."
            ],
            "hook": "After prepositions (between, for, with): use object pronouns (ME, not I)."
        }
    },
    {
        "id": "gram_err_19",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The book was laying on the table when I arrived.",
        "wrong": [
            "The book was lying on the table when I arrived.",
            "The book lay on the table when I arrived.",
            "When I arrived, the book was lying on the table."
        ],
        "explanation": {
            "right": "Verb confusion — 'laying' requires a direct object (laying something down). Should be 'lying' (reclining) without an object.",
            "traps": [
                "This sentence is correct — 'lying' is intransitive (no object needed).",
                "This sentence is correct — 'lay' is simple past of 'lie' (recline).",
                "This sentence is correct — 'lying' properly used without object."
            ],
            "hook": "LIE (recline) = lie, lay, lain, lying. LAY (put down) = lay, laid, laid, laying + OBJECT."
        }
    },
    {
        "id": "gram_err_20",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The new policy will effect significant changes in how we operate.",
        "wrong": [
            "The new policy will affect significant changes in how we operate.",
            "The new policy will bring about significant changes in how we operate.",
            "Significant changes in how we operate will result from the new policy."
        ],
        "explanation": {
            "right": "Word confusion — 'effect' as a verb means 'to bring about.' Here we need 'affect' (to influence). Exception: 'effect change' means 'bring about change' but that's not the meaning here since we want 'cause' not 'bring about' — actually wait, this is tricky. Actually 'effect changes' CAN be correct meaning 'bring about changes,' but the more common usage in this context would be 'affect' meaning 'cause/influence.' The error is subtle but 'affect' is more standard here.",
            "traps": [
                "This sentence is correct — 'affect' as verb meaning 'influence.'",
                "This sentence is correct — avoids the affect/effect issue.",
                "This sentence is correct — restructured to avoid confusion."
            ],
            "hook": "AFFECT = verb (influence); EFFECT = noun (result). Exception: 'effect change' = cause change."
        }
    },
    {
        "id": "gram_err_21",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The audience were captivated by the performer's extraordinary talent.",
        "wrong": [
            "The audience was captivated by the performer's extraordinary talent.",
            "The performer's extraordinary talent captivated the audience.",
            "Captivated by the performer's extraordinary talent, the audience sat in silence."
        ],
        "explanation": {
            "right": "Subject-verb disagreement — 'audience' is a collective noun acting as one unit, takes singular 'was,' not plural 'were.'",
            "traps": [
                "This sentence is correct — 'audience was' with singular collective noun.",
                "This sentence is correct — avoids the collective noun as subject.",
                "This sentence is correct — properly uses singular collective noun."
            ],
            "hook": "Collective noun as ONE unit: singular verb (audience WAS, group IS)."
        }
    },
    {
        "id": "gram_err_22",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "I would of completed the project on time if I had received the materials earlier.",
        "wrong": [
            "I would have completed the project on time if I had received the materials earlier.",
            "I could have completed the project on time if I had received the materials earlier.",
            "Had I received the materials earlier, I would have completed the project on time."
        ],
        "explanation": {
            "right": "Contraction confusion — 'would of' is incorrect. Should be 'would have' (or 'would've'). 'Of' is not a helping verb.",
            "traps": [
                "This sentence is correct — 'would have' is proper conditional form.",
                "This sentence is correct — 'could have' is grammatically correct.",
                "This sentence is correct — 'would have' properly used."
            ],
            "hook": "WOULD HAVE, COULD HAVE, SHOULD HAVE — never 'would of, could of, should of.'"
        }
    },
    {
        "id": "gram_err_23",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The team's strategy was to play aggressive, maintain possession, and score early.",
        "wrong": [
            "The team's strategy was to play aggressively, maintain possession, and score early.",
            "The team's strategy was to play aggressively, to maintain possession, and to score early.",
            "Playing aggressively, maintaining possession, and scoring early were the team's strategy."
        ],
        "explanation": {
            "right": "Parallelism and word form error — 'play aggressive' should be 'play aggressively' (adverb). Also, should repeat 'to' or drop it: 'to play, maintain, and score' OR 'to play, to maintain, and to score.'",
            "traps": [
                "This sentence is correct — 'play aggressively' with adverb and parallel infinitives.",
                "This sentence is correct — parallel infinitives with 'to' repeated.",
                "This sentence is correct — parallel gerunds."
            ],
            "hook": "After PLAY: use adverb (play AGGRESSIVELY). Parallel structure: all infinitives or all gerunds."
        }
    },
    {
        "id": "gram_err_24",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The documentary explores the effects of pollution on marine life, deforestation on wildlife, and how climate change threatens ecosystems.",
        "wrong": [
            "The documentary explores the effects of pollution on marine life, the effects of deforestation on wildlife, and the threat that climate change poses to ecosystems.",
            "The documentary explores how pollution affects marine life, how deforestation impacts wildlife, and how climate change threatens ecosystems.",
            "The documentary explores pollution's effects on marine life, deforestation's impact on wildlife, and climate change's threat to ecosystems."
        ],
        "explanation": {
            "right": "Parallelism error — first two items are noun phrases ('effects of...'), but third switches to clause ('how climate change...'). Should be consistent structure.",
            "traps": [
                "This sentence is correct — all three items are noun phrases with parallel structure.",
                "This sentence is correct — all three items are 'how' clauses.",
                "This sentence is correct — all three items are possessive noun phrases."
            ],
            "hook": "Series must be parallel: all noun phrases OR all clauses, not mixed."
        }
    },
    {
        "id": "gram_err_25",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The scientist whom discovered the cure received international recognition.",
        "wrong": [
            "The scientist who discovered the cure received international recognition.",
            "The scientist that discovered the cure received international recognition.",
            "The scientist discovering the cure received international recognition."
        ],
        "explanation": {
            "right": "Pronoun case error — 'whom' is object form, but here we need subject form 'who' because it's the subject of 'discovered.'",
            "traps": [
                "This sentence is correct — 'who' is subject of 'discovered.'",
                "This sentence is correct — 'that' can refer to people in restrictive clauses.",
                "This sentence is correct — participle 'discovering' modifies 'scientist.'"
            ],
            "hook": "WHO = subject of clause; WHOM = object. Test: he/him — if HE fits, use WHO."
        }
    },
    {
        "id": "gram_err_26",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "Despite of the challenges, the team completed the project successfully.",
        "wrong": [
            "Despite the challenges, the team completed the project successfully.",
            "In spite of the challenges, the team completed the project successfully.",
            "Notwithstanding the challenges, the team completed the project successfully."
        ],
        "explanation": {
            "right": "Preposition error — 'despite of' is incorrect. Should be 'despite' alone (no 'of') or 'in spite of.'",
            "traps": [
                "This sentence is correct — 'despite' alone is correct (no 'of').",
                "This sentence is correct — 'in spite of' is the correct phrase.",
                "This sentence is correct — 'notwithstanding' is a correct alternative."
            ],
            "hook": "DESPITE (no 'of'), or IN SPITE OF (with 'of') — never 'despite of.'"
        }
    },
    {
        "id": "gram_err_27",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The number of students who commutes to school has increased significantly.",
        "wrong": [
            "The number of students who commute to school has increased significantly.",
            "The number of commuting students has increased significantly.",
            "There has been a significant increase in the number of students who commute to school."
        ],
        "explanation": {
            "right": "Subject-verb disagreement in relative clause — 'who' refers to 'students' (plural), so verb should be 'commute,' not 'commutes.'",
            "traps": [
                "This sentence is correct — 'students who commute' with plural verb.",
                "This sentence is correct — avoids the relative clause issue.",
                "This sentence is correct — restructured with correct agreement."
            ],
            "hook": "In WHO/THAT clauses: verb agrees with the antecedent (students COMMUTE, not COMMUTES)."
        }
    },
    {
        "id": "gram_err_28",
        "category": "grammar",
        "subcategory": "error-id",
        "question": "Which sentence contains a grammatical error?",
        "context": null,
        "correct": "The report suggests that less people are reading print newspapers than ever before.",
        "wrong": [
            "The report suggests that fewer people are reading print newspapers than ever before.",
            "The report suggests that not as many people are reading print newspapers as before.",
            "According to the report, fewer people read print newspapers now than in the past."
        ],
        "explanation": {
            "right": "Usage error — 'less' is for uncountable nouns; 'fewer' is for countable nouns. 'People' are countable, so use 'fewer,' not 'less.'",
            "traps": [
                "This sentence is correct — 'fewer people' with countable noun.",
                "This sentence is correct — avoids the less/fewer issue.",
                "This sentence is correct — properly uses 'fewer' with countable 'people.'"
            ],
            "hook": "FEWER = countable (fewer people, fewer cars); LESS = uncountable (less water, less time)."
        }
    },
    {
        "id": "read_mi_01",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "What is the primary purpose of this passage?",
        "context": "Recent studies have shown that urban green spaces do more than beautify neighborhoods. Researchers at three universities found that residents living within 500 meters of a park reported 23% lower stress levels and made 15% fewer visits to primary care physicians. The effect held across income levels, suggesting the benefit is not merely a proxy for wealth.",
        "correct": "To present evidence that urban parks provide measurable health benefits",
        "wrong": [
            "To argue that cities should prioritize park construction over healthcare spending",
            "To explain why wealthy neighborhoods have more green spaces",
            "To compare the effectiveness of different types of urban development"
        ],
        "explanation": {
            "right": "The passage presents specific research findings (23% lower stress, 15% fewer doctor visits) connecting parks to health outcomes. It reports evidence without advocating specific policy.",
            "traps": [
                "The passage never suggests parks should replace healthcare — it only reports a correlation.",
                "The passage explicitly says the effect held 'across income levels,' contradicting a wealth explanation.",
                "No comparison between development types is made — only parks are discussed."
            ],
            "hook": "Main idea = what does the passage ACTUALLY say? Not what it implies, not what you could argue from it."
        }
    },
    {
        "id": "read_mi_02",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "Which statement best summarizes the central claim of this passage?",
        "context": "The traditional model of scientific discovery — a lone genius experiencing a eureka moment — bears little resemblance to how breakthroughs actually occur. Analysis of Nobel Prize-winning research reveals that the average team size has grown from 1.9 researchers in 1950 to 4.2 in 2020. Furthermore, papers with diverse authorship teams receive 35% more citations, suggesting that collaboration across disciplines produces more impactful work.",
        "correct": "Scientific breakthroughs increasingly depend on collaborative teams rather than individual geniuses",
        "wrong": [
            "Nobel Prize committees should award teams rather than individuals",
            "Diverse hiring practices are more important than research funding",
            "The quality of scientific research has declined since 1950"
        ],
        "explanation": {
            "right": "The passage argues against the 'lone genius' model by showing team sizes have grown and diverse teams produce more cited work. The central claim is that collaboration drives breakthroughs.",
            "traps": [
                "The passage describes Nobel research but never argues about how prizes should be awarded — that's an unsupported inference.",
                "While diversity is mentioned, the passage is about team science broadly, not hiring practices.",
                "Growing team size and citation counts suggest research is thriving, not declining."
            ],
            "hook": "Central claim = the ONE big argument the author is making. Everything else supports it."
        }
    },
    {
        "id": "read_mi_03",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "The author's primary purpose in this passage is to:",
        "context": "Critics of standardized testing often point to cultural bias in question design. However, a more fundamental problem may be what these tests fail to measure entirely. Howard Gardner's theory of multiple intelligences suggests that linguistic and logical-mathematical abilities — the only types assessed by most standardized tests — represent just two of at least eight distinct cognitive strengths. Students gifted in spatial reasoning, musical intelligence, or interpersonal skills receive no recognition from current testing frameworks.",
        "correct": "Argue that standardized tests measure too narrow a range of cognitive abilities",
        "wrong": [
            "Prove that Howard Gardner's theory is scientifically valid",
            "Advocate for eliminating standardized testing entirely",
            "Demonstrate that cultural bias makes test scores meaningless"
        ],
        "explanation": {
            "right": "The passage uses Gardner's theory to argue that tests only measure 2 of 8 intelligence types — the core argument is about what tests MISS, not just what they get wrong.",
            "traps": [
                "The passage uses Gardner's theory as support but doesn't try to prove it valid — it's assumed as a framework.",
                "The passage criticizes the narrowness of tests but never says they should be eliminated entirely.",
                "Cultural bias is mentioned only as what critics 'often point to' — the author's own argument is about scope, not bias."
            ],
            "hook": "Watch for the word 'however' — it often signals where the author's REAL argument begins, contrasting with what others say."
        }
    },
    {
        "id": "read_mi_04",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "Which title best captures the main idea of this passage?",
        "context": "In 1970, the average American consumed 16 pounds of fish per year. By 2020, that figure had risen to 19.2 pounds — a modest increase that masks a dramatic transformation in sourcing. Wild-caught fish now accounts for less than half of global supply, with aquaculture filling the gap. This shift has reduced pressure on depleted ocean stocks while creating new environmental challenges: coastal habitat destruction, antibiotic resistance, and genetic contamination of wild populations.",
        "correct": "The Hidden Trade-offs of the Aquaculture Revolution",
        "wrong": [
            "Why Americans Should Eat Less Fish",
            "The Complete Collapse of Ocean Fisheries",
            "How Technology Has Solved Overfishing"
        ],
        "explanation": {
            "right": "The passage describes how fish farming (aquaculture) has grown to fill demand while creating new problems — it's about trade-offs, not simple progress or decline.",
            "traps": [
                "The passage never argues people should eat less fish — consumption is presented neutrally.",
                "The passage says pressure on ocean stocks is 'reduced,' not that fisheries have collapsed.",
                "'Solved' is too optimistic — the passage explicitly lists new problems created by aquaculture."
            ],
            "hook": "Best title = captures BOTH the topic AND the author's angle on it. Look for balance when the passage shows two sides."
        }
    },
    {
        "id": "read_mi_05",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "The passage is primarily concerned with:",
        "context": "The widespread assumption that automation will eliminate millions of jobs rests on a misunderstanding of economic history. Every major technological shift — the printing press, the steam engine, electrification — initially displaced workers but ultimately created more jobs than it destroyed. The key mechanism is complementarity: as machines handle routine tasks, the value of distinctly human skills — creativity, emotional intelligence, complex judgment — increases rather than decreases.",
        "correct": "Challenging the belief that automation will cause permanent mass unemployment",
        "wrong": [
            "Predicting which specific jobs automation will eliminate",
            "Arguing that governments should slow the pace of automation",
            "Proving that all workers will benefit equally from technological change"
        ],
        "explanation": {
            "right": "The passage directly challenges ('rests on a misunderstanding') the assumption that automation destroys jobs, using historical precedent and the concept of complementarity.",
            "traps": [
                "The passage discusses automation broadly but never predicts specific jobs that will be lost.",
                "No policy recommendations are made — the argument is about economics, not government action.",
                "The passage argues net jobs will increase but never claims all workers benefit equally."
            ],
            "hook": "When a passage says 'the assumption that X rests on a misunderstanding,' the main purpose is to CHALLENGE X."
        }
    },
    {
        "id": "read_mi_06",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "What is the main argument presented in this passage?",
        "context": "Sleep deprivation among teenagers is not merely an inconvenience — it is a public health crisis with measurable academic consequences. Schools that shifted start times from 7:30 AM to 8:30 AM saw average GPAs rise by 0.2 points, tardiness drop by 40%, and car accidents among student drivers fall by 70%. The biological evidence is unambiguous: adolescent circadian rhythms shift later during puberty, making early wake times equivalent to asking an adult to perform at 4 AM.",
        "correct": "Early school start times harm teenage health and academic performance due to biological sleep needs",
        "wrong": [
            "Teenagers are inherently lazy and need more discipline",
            "All schools should start after 9 AM",
            "Sleep deprivation is the primary cause of car accidents"
        ],
        "explanation": {
            "right": "The passage argues that early start times conflict with teen biology (circadian shift during puberty), causing measurable harm (lower GPAs, more accidents). The core claim links biology to school policy outcomes.",
            "traps": [
                "The passage attributes early waking problems to BIOLOGY (circadian rhythms), not laziness — this is explicitly countered.",
                "While the passage supports later starts, it doesn't prescribe a specific time or say 'all schools' must change.",
                "Car accidents are ONE data point, not claimed as the primary cause — sleep deprivation causes many problems."
            ],
            "hook": "Main argument = claim + evidence. What does the author CLAIM, and what EVIDENCE supports it?"
        }
    },
    {
        "id": "read_mi_07",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "The primary function of this passage is to:",
        "context": "When we describe someone as 'thinking with their gut,' we may be more literally correct than we realize. The enteric nervous system — a network of 500 million neurons lining the digestive tract — operates largely independently of the brain, earning it the nickname 'the second brain.' Recent research has established that gut bacteria produce over 90% of the body's serotonin, a neurotransmitter critical to mood regulation. This gut-brain axis may explain why gastrointestinal disorders and depression so frequently co-occur.",
        "correct": "Explain the scientific basis for the connection between digestive health and mental state",
        "wrong": [
            "Prove that gut bacteria are more important than brain chemistry",
            "Argue that depression should be treated with dietary changes",
            "Describe the complete anatomy of the digestive system"
        ],
        "explanation": {
            "right": "The passage explains HOW the gut connects to the brain (enteric nervous system, serotonin production, gut-brain axis) — it's an explanatory passage establishing a scientific connection.",
            "traps": [
                "The passage never claims gut bacteria are MORE important — it says they produce serotonin, connecting two systems.",
                "No treatment recommendations are made — the passage explains a mechanism, not a therapy.",
                "Only one aspect of digestion (the nervous system) is discussed, not 'complete anatomy.'"
            ],
            "hook": "Explanatory passages say 'here's HOW this works.' They don't argue for action — they illuminate a mechanism."
        }
    },
    {
        "id": "read_mi_08",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "Which statement best expresses the central idea of this passage?",
        "context": "The notion that reading fiction makes people more empathetic has become a popular claim in educational circles. The evidence, however, is more complicated than advocates suggest. While several studies show short-term increases in perspective-taking after reading literary fiction, longitudinal research finds no lasting difference in empathy between avid readers and non-readers. The benefits may be real but transient — like a muscle that strengthens during exercise but atrophies without consistent engagement.",
        "correct": "Reading fiction may temporarily boost empathy, but the evidence for lasting effects is weak",
        "wrong": [
            "Reading fiction definitively makes people more empathetic",
            "Fiction has no measurable effect on empathy whatsoever",
            "People who don't read fiction are less moral than readers"
        ],
        "explanation": {
            "right": "The passage takes a nuanced middle position: short-term effects are real, but lasting effects aren't supported. The muscle analogy reinforces 'real but transient.'",
            "traps": [
                "'Definitively' is too strong — the passage explicitly says evidence is 'more complicated' and lasting effects aren't proven.",
                "'No measurable effect' is too strong in the other direction — short-term effects ARE documented.",
                "The passage discusses empathy (understanding feelings), not morality — and never compares readers' moral character."
            ],
            "hook": "When a passage says 'the evidence is more complicated,' expect a NUANCED answer. Reject extreme positions."
        }
    },
    {
        "id": "read_mi_09",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "The author most likely wrote this passage in order to:",
        "context": "Archaeologists have long debated whether the transition from hunter-gatherer societies to agriculture represented progress or decline. Skeletal evidence from the Neolithic period tells a surprising story: early farmers were shorter, had more dental cavities, showed more signs of nutritional deficiency, and died younger than their foraging predecessors. What agriculture offered was not individual health but collective scale — the ability to support larger, denser populations that could develop complex social institutions.",
        "correct": "Complicate the assumption that agriculture was unambiguously beneficial for early humans",
        "wrong": [
            "Argue that humans should return to hunter-gatherer lifestyles",
            "Prove that farming caused more deaths than foraging",
            "Explain the complete history of the agricultural revolution"
        ],
        "explanation": {
            "right": "The passage complicates a simple narrative: agriculture made individuals LESS healthy but enabled SOCIAL complexity. It shows the trade-off, not a simple good/bad judgment.",
            "traps": [
                "The passage never suggests returning to foraging — it acknowledges agriculture enabled complex societies.",
                "'More deaths' overstates — the passage says farmers died younger, not that farming killed people directly.",
                "'Complete history' is far too broad — this passage covers only the health trade-off aspect."
            ],
            "hook": "'Surprising story' and 'not X but Y' signal the author is complicating a simple assumption."
        }
    },
    {
        "id": "read_mi_10",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "What is the overarching theme of this passage?",
        "context": "In 1854, Dr. John Snow removed the handle from a water pump on Broad Street in London, effectively ending a cholera outbreak that had killed over 600 people. He had no knowledge of bacteria — germ theory would not be established for another decade. What Snow possessed was a revolutionary methodology: mapping disease cases geographically and looking for spatial patterns. His approach — drawing conclusions from data rather than from prevailing theory — established the foundation of modern epidemiology.",
        "correct": "Innovative methodology can produce life-saving results even without complete theoretical understanding",
        "wrong": [
            "Cholera was the most dangerous disease in Victorian London",
            "John Snow was a greater scientist than Louis Pasteur",
            "Geographic mapping is the most important tool in medicine"
        ],
        "explanation": {
            "right": "The passage emphasizes that Snow's METHOD (data-driven spatial analysis) succeeded despite lacking theoretical knowledge (germ theory). The theme is methodology > theory in certain contexts.",
            "traps": [
                "Cholera is the example, not the theme — the passage uses it to illustrate a point about methodology.",
                "No comparison with Pasteur is made — Snow is discussed independently.",
                "'Most important' is too absolute — the passage says mapping founded epidemiology, not that it's the single greatest medical tool."
            ],
            "hook": "Theme = the BIGGER lesson beyond the specific story. What does this example teach about how knowledge works?"
        }
    },
    {
        "id": "read_mi_11",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "The passage primarily serves to:",
        "context": "The term 'invasive species' carries an implicit moral judgment that may distort ecological thinking. When we label a organism as 'invasive,' we frame its presence as a problem to be solved rather than a change to be understood. Many species classified as invasive actually increase local biodiversity, provide food sources for native wildlife, and stabilize eroding landscapes. A more productive framework might focus on ecological function rather than geographic origin.",
        "correct": "Challenge the usefulness of the 'invasive species' framework in ecology",
        "wrong": [
            "List the benefits of all non-native species",
            "Prove that invasive species never cause environmental harm",
            "Propose specific legislation to protect non-native organisms"
        ],
        "explanation": {
            "right": "The passage argues that the 'invasive species' label is problematic because it's a moral judgment that distorts scientific thinking. It proposes an alternative framework (ecological function).",
            "traps": [
                "'All non-native species' is too broad — the passage says 'many' provide benefits, not all.",
                "'Never cause harm' is too absolute — the passage doesn't deny all harm, just argues the framework is flawed.",
                "No legislation is proposed — the argument stays in the realm of scientific thinking, not policy."
            ],
            "hook": "When a passage says a TERM or FRAMEWORK is problematic, the purpose is to challenge that framework."
        }
    },
    {
        "id": "read_mi_12",
        "category": "reading",
        "subcategory": "main-idea",
        "question": "Which statement best captures the author's central point?",
        "context": "Public debates about artificial intelligence tend to oscillate between utopian promises and dystopian fears. Both extremes share a common error: they treat AI as a unified force with a single trajectory. In reality, artificial intelligence encompasses thousands of distinct systems, each with different capabilities, limitations, and social contexts. A facial recognition algorithm and a poetry generator share little beyond the label 'AI.' More productive discourse requires abandoning the singular narrative in favor of case-by-case analysis.",
        "correct": "Treating AI as a single entity prevents meaningful discussion of its diverse applications",
        "wrong": [
            "AI will inevitably lead to either utopia or dystopia",
            "Facial recognition is more dangerous than other AI applications",
            "Public debate about technology is always unproductive"
        ],
        "explanation": {
            "right": "The author's point is that lumping all AI together ('a unified force with a single trajectory') prevents useful analysis. The solution offered is case-by-case thinking.",
            "traps": [
                "The passage explicitly rejects BOTH utopia and dystopia as 'extremes' sharing a 'common error.'",
                "Facial recognition and poetry generators are mentioned only as examples of diversity, not ranked by danger.",
                "The passage says CURRENT discourse is flawed but that 'more productive discourse' IS possible — not all debate is pointless."
            ],
            "hook": "When an author says 'both sides make the same error,' their point is about THAT error, not about picking a side."
        }
    },
    {
        "id": "read_det_01",
        "category": "reading",
        "subcategory": "detail",
        "question": "According to the passage, what specific evidence supports the author's claim?",
        "context": "The Mediterranean diet's reputation rests largely on a single landmark study. In 1958, Ancel Keys began tracking cardiovascular health across seven countries, finding dramatically lower rates of heart disease in Mediterranean regions. Critics note, however, that Keys initially examined data from 22 countries and published results from only seven — those that supported his hypothesis. Countries like France, with high fat consumption but low heart disease, were excluded.",
        "correct": "Keys selectively published data from only 7 of the 22 countries he initially studied",
        "wrong": [
            "The Mediterranean diet has been proven ineffective by modern research",
            "France has the highest rate of heart disease in Europe",
            "Ancel Keys fabricated his research data entirely"
        ],
        "explanation": {
            "right": "The specific evidence is factual: Keys examined 22 countries but published only 7 (those supporting his thesis). France, a counter-example, was excluded. This supports the claim of selection bias.",
            "traps": [
                "The passage questions the STUDY, not the diet itself — it doesn't say the diet is ineffective.",
                "France is cited as having LOW heart disease despite high fat — the opposite of what this answer claims.",
                "'Fabricated entirely' is much stronger than what the passage says — selection bias ≠ fabrication."
            ],
            "hook": "Detail questions ask WHAT the passage SAYS — not what you can infer. Look for specific facts stated directly."
        }
    },
    {
        "id": "read_det_02",
        "category": "reading",
        "subcategory": "detail",
        "question": "Based on the passage, which factor does the author identify as most influential?",
        "context": "Language acquisition researchers have identified a 'critical period' — roughly birth to age seven — during which children absorb language with remarkable ease. After this window closes, language learning requires conscious effort and rarely achieves native-like fluency. The critical period is not about intelligence or motivation; it reflects a specific phase of neural development during which the brain's language circuits are maximally plastic and receptive to linguistic input.",
        "correct": "A phase of neural development that makes the brain especially receptive to language input",
        "wrong": [
            "The intelligence level of the child during early years",
            "The amount of formal instruction a child receives",
            "The motivation and effort a child puts into learning"
        ],
        "explanation": {
            "right": "The passage explicitly states the critical period 'is not about intelligence or motivation' but rather 'a specific phase of neural development' with 'maximally plastic' language circuits.",
            "traps": [
                "The passage explicitly excludes intelligence as a factor: 'not about intelligence.'",
                "No mention of formal instruction — the passage discusses natural absorption, not schooling.",
                "Motivation is explicitly excluded: 'not about... motivation.'"
            ],
            "hook": "When a passage says 'it's NOT about X or Y, it's about Z,' the answer is Z. Don't pick what's been ruled out."
        }
    },
    {
        "id": "read_det_03",
        "category": "reading",
        "subcategory": "detail",
        "question": "The passage states that the primary reason for the described change was:",
        "context": "Between 1960 and 2020, the average size of an American home grew from 1,200 square feet to 2,300 square feet, while the average household shrank from 3.3 to 2.5 people. This paradox — larger homes for smaller families — reflects neither increased wealth nor improved construction technology. Rather, researchers attribute it to the cultural equation of home size with social status, reinforced by zoning laws that mandate minimum lot sizes and effectively prohibit smaller, more affordable housing.",
        "correct": "Cultural association of home size with social status, reinforced by zoning regulations",
        "wrong": [
            "Dramatic increases in family wealth over six decades",
            "Breakthroughs in construction technology making large homes cheaper",
            "Government programs subsidizing home purchases"
        ],
        "explanation": {
            "right": "The passage directly states the cause: 'the cultural equation of home size with social status, reinforced by zoning laws.' It explicitly rejects wealth and technology as explanations.",
            "traps": [
                "The passage explicitly says it 'reflects neither increased wealth' — this answer is directly contradicted.",
                "Construction technology is also explicitly rejected: 'nor improved construction technology.'",
                "Government subsidies are never mentioned in the passage."
            ],
            "hook": "When a passage says 'neither X nor Y, rather Z,' the answer is ALWAYS Z. The others are explicitly eliminated."
        }
    },
    {
        "id": "read_det_04",
        "category": "reading",
        "subcategory": "detail",
        "question": "According to the passage, what distinguishes the phenomenon described from similar ones?",
        "context": "Colony collapse disorder differs from previous bee die-offs in a crucial respect: the bees simply vanish. In typical colony death, dead bees litter the hive entrance. In CCD, the hive is found nearly empty — no corpses, no signs of disease, no predator damage. The queen and a handful of young bees remain, surrounded by ample honey stores. It is as though the foraging workforce departed and never returned.",
        "correct": "The absence of dead bees in the hive, unlike typical colony deaths",
        "wrong": [
            "The presence of a deadly virus that kills all bees instantly",
            "The complete destruction of all honey stores within the hive",
            "The death of the queen bee before worker bees"
        ],
        "explanation": {
            "right": "The passage explicitly contrasts CCD ('bees simply vanish,' 'no corpses') with typical die-offs ('dead bees litter the hive entrance'). The distinguishing feature is absence of bodies.",
            "traps": [
                "The passage says 'no signs of disease' — a virus would leave evidence. Bees vanish rather than die visibly.",
                "The passage states 'ample honey stores' remain — the opposite of this answer.",
                "The passage says the queen REMAINS — she survives while workers disappear."
            ],
            "hook": "Detail questions often hinge on contrasts the passage draws. 'Differs from' and 'unlike' signal the key detail."
        }
    },
    {
        "id": "read_det_05",
        "category": "reading",
        "subcategory": "detail",
        "question": "The passage provides which of the following as evidence for its claim?",
        "context": "Contrary to popular belief, medieval Europeans did not believe the Earth was flat. Educated people from ancient Greece onward knew the Earth was spherical — Eratosthenes calculated its circumference in 240 BCE with remarkable accuracy. The 'flat Earth myth' was largely invented in the 19th century by writers seeking to portray the Middle Ages as an era of ignorance, thereby glorifying their own age of scientific progress.",
        "correct": "Eratosthenes calculated Earth's circumference in 240 BCE, proving ancient knowledge of a spherical Earth",
        "wrong": [
            "Medieval maps consistently depicted a round Earth",
            "Christopher Columbus proved the Earth was round in 1492",
            "Church records show priests taught spherical Earth doctrine"
        ],
        "explanation": {
            "right": "The passage specifically cites Eratosthenes' calculation (240 BCE) as evidence that people knew the Earth was spherical long before the Middle Ages.",
            "traps": [
                "Medieval maps are never mentioned in the passage.",
                "Columbus is never mentioned — and the passage argues the flat Earth belief is a myth, making Columbus's 'proof' irrelevant.",
                "Church records are never cited as evidence in this passage."
            ],
            "hook": "Evidence questions: only pick what the passage ACTUALLY cites. If it's not explicitly stated, it's wrong — even if it's true."
        }
    },
    {
        "id": "read_det_06",
        "category": "reading",
        "subcategory": "detail",
        "question": "Which specific detail does the author use to support the central argument?",
        "context": "The '10,000 hours' rule — popularized by Malcolm Gladwell — suggests that expertise requires a fixed amount of deliberate practice. But research by Brooke Macnamara found that practice accounted for only 26% of variance in games performance, 21% in music, and just 4% in education. The remaining variance is explained by factors including working memory capacity, age of first exposure, and genetic predisposition for the skill domain.",
        "correct": "Practice accounts for only 4% to 26% of performance differences depending on the domain",
        "wrong": [
            "Malcolm Gladwell's original study included 10,000 participants",
            "All experts practiced for exactly 10,000 hours before achieving mastery",
            "Working memory is entirely determined by practice volume"
        ],
        "explanation": {
            "right": "The passage cites Macnamara's specific percentages (26% games, 21% music, 4% education) to show practice explains a minority of performance differences.",
            "traps": [
                "The passage never mentions study participants — 10,000 refers to HOURS, not people.",
                "'All experts practiced exactly 10,000 hours' is the claim being CHALLENGED, not supported.",
                "Working memory is listed as an ALTERNATIVE to practice, not as something caused by practice."
            ],
            "hook": "Look for NUMBERS and NAMES — they're usually the specific evidence. Macnamara's percentages are the key detail here."
        }
    },
    {
        "id": "read_det_07",
        "category": "reading",
        "subcategory": "detail",
        "question": "The passage indicates that the described effect occurs because:",
        "context": "Eyewitness testimony, long considered the gold standard of criminal evidence, proves remarkably unreliable under controlled conditions. When researchers staged a mock crime and interviewed witnesses 48 hours later, 73% of witnesses recalled details that never occurred. The mechanism is not lying but memory reconstruction: each time we recall an event, we unconsciously rebuild it from fragments, filling gaps with plausible details that become indistinguishable from genuine memories.",
        "correct": "Memory reconstruction causes people to fill gaps with plausible but false details during recall",
        "wrong": [
            "Witnesses intentionally lie to protect the criminal",
            "Witnesses have poor eyesight and cannot see clearly during crimes",
            "The stress of witnessing a crime permanently damages memory capacity"
        ],
        "explanation": {
            "right": "The passage explicitly states the mechanism: 'not lying but memory reconstruction' — filling gaps with plausible details that feel real.",
            "traps": [
                "The passage explicitly states 'not lying' — intentional deception is ruled out.",
                "Vision/eyesight is never mentioned — the problem is memory, not perception.",
                "The passage doesn't mention stress or permanent damage — the issue is normal memory reconstruction that happens to everyone."
            ],
            "hook": "Cause-and-effect questions: find the sentence that explains the MECHANISM. 'The mechanism is...' is a direct answer."
        }
    },
    {
        "id": "read_det_08",
        "category": "reading",
        "subcategory": "detail",
        "question": "According to the passage, what resulted from the change described?",
        "context": "When Iceland shortened its standard work week from 40 to 35-36 hours in trials spanning 2015-2019, involving over 2,500 workers, productivity either maintained or increased in the majority of workplaces. Worker well-being improved significantly: reported stress declined, work-life balance scores rose, and burnout rates fell by 30%. Following the trials, 86% of Iceland's workforce has now moved to shorter hours or gained the right to negotiate them.",
        "correct": "Productivity stayed the same or improved while worker well-being increased substantially",
        "wrong": [
            "Productivity dropped sharply, requiring the trials to be abandoned",
            "Only highly-paid workers benefited from the shorter hours",
            "Iceland's economy contracted due to reduced working hours"
        ],
        "explanation": {
            "right": "The passage states productivity 'maintained or increased' and well-being 'improved significantly' — with specific metrics (stress declined, burnout fell 30%).",
            "traps": [
                "Productivity dropping is the opposite of what the passage reports — it stayed the same or improved.",
                "The passage says 86% of the WORKFORCE (not just high-paid workers) moved to shorter hours — suggesting broad benefit.",
                "Economic contraction is never mentioned — the passage reports positive outcomes."
            ],
            "hook": "Result questions: find what HAPPENED AFTER the change. Look for outcome language: 'resulted in,' 'led to,' 'following.'"
        }
    },
    {
        "id": "read_det_09",
        "category": "reading",
        "subcategory": "detail",
        "question": "The passage explicitly states that:",
        "context": "The Great Pacific Garbage Patch is not, as commonly imagined, a solid island of trash. Rather, it consists of microplastics — fragments smaller than 5 millimeters — suspended at various depths throughout a region roughly twice the size of Texas. Because the particles are so small and dispersed, the patch is largely invisible to the naked eye and undetectable in satellite imagery. This invisibility paradoxically makes it more dangerous: organisms ingest the particles, introducing toxins into the food chain.",
        "correct": "The garbage patch cannot be seen by eye or detected by satellites due to particle size",
        "wrong": [
            "The garbage patch is a solid floating island visible from space",
            "The patch contains only large items like bottles and bags",
            "Microplastics are harmless because they are too small to affect organisms"
        ],
        "explanation": {
            "right": "The passage directly states the patch is 'invisible to the naked eye and undetectable in satellite imagery' due to the small, dispersed particles.",
            "traps": [
                "The passage explicitly contradicts this: 'not, as commonly imagined, a solid island.'",
                "The passage says it consists of particles 'smaller than 5 millimeters' — the opposite of large items.",
                "The passage says organisms INGEST particles, introducing TOXINS — the opposite of harmless."
            ],
            "hook": "'Explicitly states' = find the sentence that DIRECTLY says it. No inference needed."
        }
    },
    {
        "id": "read_det_10",
        "category": "reading",
        "subcategory": "detail",
        "question": "Which claim is directly supported by information in the passage?",
        "context": "Bilingual individuals do not simply store two separate language systems in their brains. Neuroimaging studies reveal that both languages are simultaneously active during all speech, requiring constant cognitive management to suppress the non-target language. This perpetual juggling act strengthens executive function — the same mental faculty used for planning, problem-solving, and filtering distractions. Bilinguals consistently outperform monolinguals on tasks requiring attentional control, even when those tasks are entirely non-verbal.",
        "correct": "The effort of managing two active languages strengthens general cognitive control abilities",
        "wrong": [
            "Bilinguals are more intelligent than monolinguals overall",
            "Only one language is active in a bilingual brain at any time",
            "Bilingual advantages are limited to language-related tasks"
        ],
        "explanation": {
            "right": "The passage directly links constant language management ('perpetual juggling') to strengthened executive function and better performance on attentional control tasks.",
            "traps": [
                "The passage shows bilinguals have better EXECUTIVE FUNCTION, not higher overall intelligence — these are different.",
                "The passage explicitly states BOTH languages are 'simultaneously active during all speech' — the opposite of this claim.",
                "The passage says bilinguals outperform on 'entirely non-verbal' tasks — showing the advantage extends beyond language."
            ],
            "hook": "Supported claims must be DIRECTLY stated or clearly follows from stated facts. 'Intelligence' is too broad a leap from 'executive function.'"
        }
    },
    {
        "id": "read_det_11",
        "category": "reading",
        "subcategory": "detail",
        "question": "The passage provides which piece of information to explain the described relationship?",
        "context": "Trees in a forest are not isolated competitors but members of a cooperative network. Through underground fungal connections called mycorrhizal networks, mature trees share nutrients with saplings growing in deep shade. Ecologist Suzanne Simard documented that a single Douglas fir can be connected to over 40 other trees, transferring carbon to those most in need. Older 'mother trees' preferentially direct resources toward their own seedlings, though they also support unrelated neighbors.",
        "correct": "Mature trees transfer carbon through fungal networks to younger trees that need it most",
        "wrong": [
            "Trees compete aggressively for sunlight by growing taller than their neighbors",
            "Saplings in shade die quickly because they receive no help from larger trees",
            "Fungal networks harm trees by stealing their nutrients"
        ],
        "explanation": {
            "right": "The passage describes mycorrhizal networks through which mature trees 'share nutrients with saplings' and transfer 'carbon to those most in need.'",
            "traps": [
                "The passage presents trees as COOPERATIVE ('not isolated competitors'), contradicting aggressive competition.",
                "The passage says saplings RECEIVE help ('share nutrients with saplings growing in deep shade').",
                "Fungal networks are described as beneficial connections, not parasitic — trees share THROUGH them."
            ],
            "hook": "Relationship explanations: find the MECHANISM connecting A to B. Here: trees → fungal network → saplings."
        }
    },
    {
        "id": "read_det_12",
        "category": "reading",
        "subcategory": "detail",
        "question": "Based on the passage, which statement accurately reflects the author's factual claims?",
        "context": "The widespread belief that humans use only 10% of their brains is neuroscientific nonsense. Brain imaging shows that virtually all regions are active over the course of a day, with no large dormant areas awaiting activation. The myth persists partly because of its aspirational appeal — the fantasy that unlocking the remaining 90% would grant superhuman abilities. In reality, even minor brain damage routinely causes significant cognitive impairment, which would not occur if most of the brain were unused.",
        "correct": "Brain imaging shows all brain regions are active, and even minor damage causes significant impairment",
        "wrong": [
            "Humans genuinely use only 10% of their brain capacity at any time",
            "Brain damage never affects cognitive function in meaningful ways",
            "Scientists have found dormant regions that could theoretically be activated"
        ],
        "explanation": {
            "right": "The passage explicitly states: imaging shows 'virtually all regions are active' and 'minor brain damage routinely causes significant cognitive impairment.'",
            "traps": [
                "The passage calls the 10% claim 'neuroscientific nonsense' — this answer repeats the debunked myth.",
                "The passage says minor damage DOES cause impairment — this answer contradicts a stated fact.",
                "The passage says there are 'no large dormant areas awaiting activation' — directly contradicting this answer."
            ],
            "hook": "Factual claim questions: the answer must match EXACTLY what the passage states. Reject anything the passage calls false."
        }
    },
    {
        "id": "read_inf_01",
        "category": "reading",
        "subcategory": "inference",
        "question": "It can be reasonably inferred from the passage that:",
        "context": "The company's quarterly earnings exceeded analyst predictions by 15%, yet its stock price fell 3% following the announcement. Market analysts noted that while current performance was strong, the CEO's cautious language about 'headwinds in the coming quarters' and reduced capital expenditure guidance suggested the company anticipated slower growth ahead.",
        "correct": "Investors value future expectations more than current performance when pricing stocks",
        "wrong": [
            "The company deliberately manipulated its stock price downward",
            "Analysts always correctly predict earnings within 5%",
            "Stock prices never fall after positive earnings reports"
        ],
        "explanation": {
            "right": "The stock fell DESPITE beating expectations because forward-looking language was negative. This implies the market prices FUTURE outlook more heavily than PAST performance.",
            "traps": [
                "Nothing suggests deliberate manipulation — the CEO's cautious language caused a natural market reaction.",
                "The passage shows predictions were off by 15% — contradicting 'always within 5%.'",
                "This very passage IS an example of a price falling after positive earnings — so 'never' is false."
            ],
            "hook": "Inference = what MUST be true based on the facts given. If good news → price drop, then price must depend on something other than current news."
        }
    },
    {
        "id": "read_inf_02",
        "category": "reading",
        "subcategory": "inference",
        "question": "The passage most strongly implies that:",
        "context": "After decades of decline, downtown business districts in mid-sized American cities are experiencing revival — but with a twist. The new tenants are coffee shops, yoga studios, and coworking spaces rather than department stores and law offices. Evening foot traffic has increased 40% while weekday 9-to-5 traffic remains flat. City planners note that the revival is driven primarily by residents under 35 seeking walkable neighborhoods with social amenities.",
        "correct": "The revived downtowns serve primarily as social and lifestyle spaces rather than traditional commercial centers",
        "wrong": [
            "Department stores are returning to downtown locations in large numbers",
            "Downtown areas are most active during traditional business hours",
            "Older residents are the primary drivers of downtown revival"
        ],
        "explanation": {
            "right": "Coffee shops, yoga, coworking (lifestyle), evening traffic UP but daytime FLAT, driven by young residents seeking 'social amenities' — all imply a social/lifestyle function rather than commercial.",
            "traps": [
                "The passage says new tenants are coffee shops/yoga 'rather than department stores' — department stores are the ones being REPLACED.",
                "Weekday 9-to-5 traffic is 'flat' while evening is up 40% — activity peaks OUTSIDE business hours.",
                "The passage says revival is driven by 'residents under 35' — the opposite of older residents."
            ],
            "hook": "Implies = what do all the details POINT TOWARD together? Don't pick any detail that contradicts the pattern."
        }
    },
    {
        "id": "read_inf_03",
        "category": "reading",
        "subcategory": "inference",
        "question": "What can be inferred about the author's view on the topic?",
        "context": "Proponents of year-round schooling argue that the traditional summer break leads to 'summer slide' — the documented loss of academic skills during extended absence. What these advocates rarely acknowledge is that the research on summer slide shows the effect concentrated almost entirely among low-income students who lack access to enrichment activities. For middle-class and affluent students, summer break produces no measurable learning loss. The real problem, then, is not the calendar but inequality of access.",
        "correct": "The author believes the year-round schooling debate misidentifies the root problem",
        "wrong": [
            "The author strongly supports year-round schooling for all students",
            "The author believes summer break benefits all students equally",
            "The author thinks low-income students learn better in summer than during school"
        ],
        "explanation": {
            "right": "The author says advocates 'rarely acknowledge' the real pattern, and concludes 'the real problem is not the calendar but inequality of access' — implying the debate misdiagnoses the issue.",
            "traps": [
                "The author challenges year-round schooling advocates by showing the problem is inequality, not schedules — this suggests the author does NOT simply support year-round school.",
                "The passage says summer break causes loss ONLY for low-income students — the opposite of 'equally.'",
                "The passage says low-income students LOSE skills in summer — they learn less, not more."
            ],
            "hook": "Author's view inference: look for evaluative language ('rarely acknowledge,' 'the REAL problem') — these reveal what the author actually thinks."
        }
    },
    {
        "id": "read_inf_04",
        "category": "reading",
        "subcategory": "inference",
        "question": "Based on the passage, one can reasonably conclude that:",
        "context": "Honeybees performing the 'waggle dance' communicate the direction and distance of food sources to hivemates with remarkable precision. The angle of the dance relative to vertical corresponds to the angle between the sun and the food source, while the duration of the waggle phase indicates distance. Despite this sophistication, researchers have discovered that approximately 30% of bees who observe the dance fly to the wrong location. The colony compensates through sheer numbers — enough bees decode correctly to exploit the resource efficiently.",
        "correct": "Individual communication errors can be overcome by collective redundancy in social systems",
        "wrong": [
            "The waggle dance is an ineffective communication system that should have evolved away",
            "Bees that fly to wrong locations are less intelligent than those that navigate correctly",
            "All bee communication is perfectly accurate with no room for error"
        ],
        "explanation": {
            "right": "Despite 30% error rate, the colony succeeds through 'sheer numbers' — individual errors are compensated by collective redundancy. This principle extends beyond bees to any social system.",
            "traps": [
                "The system IS effective (the colony exploits resources efficiently) — error rate alone doesn't make it ineffective.",
                "The passage attributes errors to decoding difficulty, not intelligence differences between individual bees.",
                "The passage explicitly states 30% fly to wrong locations — perfect accuracy is directly contradicted."
            ],
            "hook": "Reasonable conclusion = extend the specific example to a general principle. Bee colony → any system where numbers compensate for individual error."
        }
    },
    {
        "id": "read_inf_05",
        "category": "reading",
        "subcategory": "inference",
        "question": "The passage suggests that the commonly held belief is flawed because:",
        "context": "Popular psychology holds that creative people are right-brained while analytical people are left-brained. Functional MRI studies have thoroughly debunked this dichotomy. Creativity requires intense coordination between hemispheres — the right generating novel combinations, the left evaluating them for coherence and usefulness. The most creative individuals in controlled studies show not hemisphere dominance but hemisphere integration: dense connections between left and right that facilitate rapid evaluation of novel ideas.",
        "correct": "Creativity requires both hemispheres working together, not one hemisphere working alone",
        "wrong": [
            "The right brain is actually responsible for analytical thinking",
            "fMRI technology is too unreliable to measure brain activity",
            "Creative people don't actually exist as a distinct category"
        ],
        "explanation": {
            "right": "The flaw in 'right-brained creativity' is that creativity needs BOTH hemispheres coordinating — 'hemisphere integration,' not dominance of one side.",
            "traps": [
                "The passage says the right generates novel combinations — it's still involved in creativity, just not ALONE.",
                "The passage uses fMRI as credible evidence — it doesn't question the technology.",
                "The passage discusses creative INDIVIDUALS in studies — they exist, they just use both hemispheres."
            ],
            "hook": "'Flawed because' = what evidence contradicts the belief? The belief says ONE side; the evidence says BOTH sides."
        }
    },
    {
        "id": "read_inf_06",
        "category": "reading",
        "subcategory": "inference",
        "question": "It can be inferred that the author would most likely agree with which statement?",
        "context": "The movement to teach 'financial literacy' in high schools has gained bipartisan support, with 25 states now requiring such courses for graduation. Yet longitudinal studies consistently show that financial literacy courses produce no lasting change in behavior. Students can pass tests on compound interest and budgeting immediately after the course but make the same financial mistakes as untrained peers five years later. The problem may be that financial decisions occur in emotional contexts — stress, social pressure, immediate temptation — that classroom knowledge cannot override.",
        "correct": "Knowledge alone is insufficient to change behavior when emotional factors are involved",
        "wrong": [
            "Financial literacy should never be taught in schools",
            "Students are incapable of learning financial concepts",
            "Emotional decision-making is always irrational"
        ],
        "explanation": {
            "right": "The author notes students CAN learn (they pass tests) but DON'T change behavior (same mistakes later), attributing this to 'emotional contexts that classroom knowledge cannot override.' This implies knowledge ≠ behavior change when emotions are involved.",
            "traps": [
                "The author questions effectiveness, not whether it should exist at all — 'never' is too absolute.",
                "Students DO learn (they pass tests) — the issue is that knowledge doesn't transfer to behavior.",
                "The passage doesn't call emotional decisions 'irrational' — it says they override classroom learning, which is different."
            ],
            "hook": "Author agreement inferences: find the principle BEHIND their specific argument. Here: knowing ≠ doing when emotions are involved."
        }
    },
    {
        "id": "read_inf_07",
        "category": "reading",
        "subcategory": "inference",
        "question": "What does the passage imply about the future of the described trend?",
        "context": "Global meat consumption has risen steadily for decades, driven by growing populations and increasing affluence in developing nations. However, recent data from Western Europe reveals a plateau: per-capita consumption has remained flat or declined since 2014. The shift correlates with generational change — consumers under 30 cite environmental concerns and animal welfare as primary motivations. If this generational pattern holds as younger cohorts age into peak spending years, global demand projections may need significant revision.",
        "correct": "Global meat demand projections may be too high if younger generations maintain their current preferences",
        "wrong": [
            "Meat consumption will inevitably increase forever regardless of generational change",
            "Western Europe will completely eliminate meat consumption within a decade",
            "Developing nations will follow exactly the same consumption pattern as Western Europe"
        ],
        "explanation": {
            "right": "The passage's conditional ('if this generational pattern holds') implies that IF young people maintain preferences, demand will be lower than projected. The future is uncertain but points toward lower-than-expected growth.",
            "traps": [
                "The passage presents the plateau as a possible trend-change, directly questioning 'inevitably increase.'",
                "'Completely eliminate' is far too extreme — the passage shows a plateau or slight decline, not elimination.",
                "The passage only describes Western Europe's pattern — it doesn't claim developing nations will follow."
            ],
            "hook": "Future implications: look for conditional language ('if X holds,' 'may need revision'). The inference follows the IF."
        }
    },
    {
        "id": "read_inf_08",
        "category": "reading",
        "subcategory": "inference",
        "question": "The passage implies that the historical understanding of the event was incorrect because:",
        "context": "For generations, the Irish Potato Famine of 1845-1852 was attributed solely to a natural disaster — the potato blight that destroyed crops. Modern historians emphasize that Ireland actually produced sufficient food throughout the famine years; grain, cattle, and dairy were exported to England continuously during the crisis. The famine was not a failure of nature but of politics: British colonial policies prioritized export profits over Irish survival, and relief efforts were deliberately minimized to avoid disrupting market forces.",
        "correct": "Ireland had enough food but colonial economic policies caused it to be exported rather than consumed locally",
        "wrong": [
            "The potato blight never actually occurred in Ireland",
            "Irish farmers chose to export food voluntarily for profit",
            "Britain sent massive food aid that Ireland refused to accept"
        ],
        "explanation": {
            "right": "The passage shows the old view (natural disaster) was wrong because Ireland produced enough food — it was EXPORTED under colonial policy, not absent. Politics, not nature, caused starvation.",
            "traps": [
                "The blight DID happen — the passage says crops were destroyed. The point is that OTHER food existed but was exported.",
                "The passage blames 'British colonial policies,' not voluntary Irish choice — farmers didn't choose to export.",
                "The passage says relief was 'deliberately minimized,' not that aid was sent and refused."
            ],
            "hook": "Corrected history: the OLD view (nature) vs NEW view (politics). The inference is about WHY the old view was wrong."
        }
    },
    {
        "id": "read_inf_09",
        "category": "reading",
        "subcategory": "inference",
        "question": "What can be inferred about the relationship between the two factors discussed?",
        "context": "Countries with the highest levels of economic inequality also tend to have the lowest levels of social trust. Scandinavian nations — with Gini coefficients below 0.28 — report trust levels above 60%, while highly unequal societies like Brazil and South Africa report trust below 15%. Researchers debate the causal direction: does inequality erode trust, or does low trust prevent the collective action needed to reduce inequality? The answer may be both — a self-reinforcing cycle that is difficult to break from either end.",
        "correct": "Inequality and distrust likely reinforce each other in a cycle rather than one simply causing the other",
        "wrong": [
            "Inequality definitively causes low trust with no reverse effect",
            "Scandinavian countries achieved equality by first building trust",
            "The relationship between inequality and trust is purely coincidental"
        ],
        "explanation": {
            "right": "The passage explicitly suggests 'both' directions and a 'self-reinforcing cycle' — implying mutual causation rather than simple one-way causation.",
            "traps": [
                "The passage presents both causal directions as plausible and suggests 'both' — not just inequality → distrust.",
                "While plausible, this specific sequence isn't what the passage argues — it says the cycle is 'difficult to break from either end.'",
                "The passage shows consistent correlation across many countries and discusses CAUSAL mechanisms — not coincidence."
            ],
            "hook": "Relationship inferences: when a passage says 'the answer may be both,' the inference is about mutual/cyclical causation."
        }
    },
    {
        "id": "read_inf_10",
        "category": "reading",
        "subcategory": "inference",
        "question": "Based on the information in the passage, which scenario would the author most likely predict?",
        "context": "Social media platforms are designed to maximize engagement through algorithmic amplification of content that provokes strong emotional reactions. Research consistently shows that outrage, fear, and moral indignation generate more shares and comments than nuanced, balanced reporting. The predictable result is a media ecosystem that systematically selects for extremity — not because users prefer extreme content, but because the architecture rewards it with visibility.",
        "correct": "A new social media platform using the same engagement metrics would also amplify extreme content",
        "wrong": [
            "Users would stop using social media if shown balanced content instead",
            "A platform without algorithms would have no engagement at all",
            "Social media companies could easily fix this by choosing to do so"
        ],
        "explanation": {
            "right": "The passage argues the problem is structural ('architecture rewards it') not preference-based. Any platform with the same architecture (engagement metrics) would produce the same result.",
            "traps": [
                "The passage says users don't PREFER extreme content — it's the algorithm. Balanced content might still engage users, just differently.",
                "Engagement existed before algorithms — the passage argues algorithms AMPLIFY extremity, not that they create all engagement.",
                "'Easily fix' contradicts the structural analysis — the problem is built into the engagement-maximization design itself."
            ],
            "hook": "Prediction inferences: if the cause is STRUCTURAL, the effect repeats wherever the same structure exists."
        }
    },
    {
        "id": "read_inf_11",
        "category": "reading",
        "subcategory": "inference",
        "question": "The passage implies that the conventional approach fails because:",
        "context": "Traditional addiction treatment focuses on willpower and abstinence — the belief that addicts must simply choose to stop. Neuroscience research has revealed that chronic substance use physically restructures reward circuits in the brain, reducing dopamine receptor density and weakening prefrontal cortex control over impulses. Asking an addict to 'just stop' is neurologically equivalent to asking someone with a broken leg to 'just walk.' The brain changes are not a choice but a consequence of exposure.",
        "correct": "Addiction physically alters brain structure, making willpower insufficient as a sole treatment approach",
        "wrong": [
            "Willpower doesn't exist as a real psychological concept",
            "All addicts are permanently incapable of recovery",
            "Brain damage from addiction is always completely reversible"
        ],
        "explanation": {
            "right": "The passage shows addiction restructures the brain, making 'just choose to stop' insufficient — like asking a broken leg to walk. The conventional approach (willpower alone) fails because it ignores physical brain changes.",
            "traps": [
                "The passage doesn't deny willpower exists — it says willpower alone is insufficient against physical brain changes.",
                "The passage discusses why simple abstinence fails, not that recovery is impossible — treatments exist beyond willpower.",
                "Reversibility is never discussed — the passage focuses on why willpower-only approaches fail."
            ],
            "hook": "Failure inference: the approach assumes X (it's just choice), but the evidence shows Y (physical brain changes). X fails because it ignores Y."
        }
    },
    {
        "id": "read_inf_12",
        "category": "reading",
        "subcategory": "inference",
        "question": "What does the passage suggest about the broader implications of the finding?",
        "context": "When researchers assigned students randomly to either handwrite or type their lecture notes, handwriters performed significantly better on conceptual questions one week later — despite producing fewer total words. Analysis revealed that typists tended to transcribe lectures verbatim, while handwriters were forced by speed limitations to paraphrase and summarize in real time. The act of reformulating ideas during note-taking, not the notes themselves, appears to drive deeper learning.",
        "correct": "The cognitive effort of processing information during encoding matters more than the quantity of information recorded",
        "wrong": [
            "Computers should be banned from all educational settings",
            "Students who type more words always learn more than those who type fewer",
            "Handwriting is superior to typing for all tasks in all contexts"
        ],
        "explanation": {
            "right": "Handwriters learn more BECAUSE they must paraphrase (cognitive processing) despite writing less. The broader implication: active processing > passive recording, regardless of medium.",
            "traps": [
                "The finding is about note-taking strategy, not computers broadly — typing with intentional paraphrasing might work equally well.",
                "The passage shows the OPPOSITE — more words (verbatim typing) led to WORSE learning.",
                "'All tasks in all contexts' is far too broad — the finding is specific to learning/encoding, not all typing situations."
            ],
            "hook": "Broader implications: extract the PRINCIPLE. Here: effortful processing > effortless recording. Active > passive."
        }
    },
    {
        "id": "read_vc_01",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'grave' most nearly means:",
        "context": "The committee regarded the environmental report's findings as grave, scheduling an emergency session to discuss immediate policy responses.",
        "correct": "Serious and requiring urgent attention",
        "wrong": [
            "Related to burial or death",
            "Deeply carved or engraved",
            "Marked with an accent"
        ],
        "explanation": {
            "right": "In this context, 'grave' means serious/solemn — the findings are so important they triggered an emergency meeting. Not related to burial.",
            "traps": [
                "A grave (noun) is a burial site, but here 'grave' is an adjective meaning serious — context makes this clear.",
                "'Engraved' shares the root but is a different application.",
                "A grave accent (è) exists in French but isn't relevant here."
            ],
            "hook": "Context clue: 'emergency session' and 'immediate policy responses' show this is about SERIOUSNESS, not death."
        }
    },
    {
        "id": "read_vc_02",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'coin' most nearly means:",
        "context": "The biologist coined the term 'biodiversity' in 1985, providing a concise label for a concept that researchers had been discussing in more cumbersome language for decades.",
        "correct": "To invent or create a new word or phrase",
        "wrong": [
            "To produce metal money",
            "To make a lucky discovery",
            "To imitate or copy someone else's idea"
        ],
        "explanation": {
            "right": "Here 'coined' means invented/created a new term. The biologist didn't find the word — she MADE it. The context ('providing a concise label') confirms this.",
            "traps": [
                "Making metal money is the most common meaning of 'coin' but doesn't fit — you can't mint a term.",
                "'Lucky discovery' confuses 'coined' with 'coincidence' — unrelated.",
                "'Copy someone else's idea' is the opposite — coining means creating something NEW, not copying."
            ],
            "hook": "Context: 'providing a label' that didn't exist before = CREATING a new term. That's what coining means figuratively."
        }
    },
    {
        "id": "read_vc_03",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'charged' most nearly means:",
        "context": "The politically charged atmosphere made any discussion of immigration reform impossible without accusations from both sides.",
        "correct": "Filled with strong emotion or tension",
        "wrong": [
            "Required to pay a fee",
            "Accused of a crime",
            "Loaded with electrical energy"
        ],
        "explanation": {
            "right": "'Charged' here means emotionally loaded or tense — the atmosphere is filled with strong feelings that prevent calm discussion.",
            "traps": [
                "Paying a fee (charged $50) doesn't fit an 'atmosphere.'",
                "Criminal charges (charged with theft) don't apply to an atmosphere.",
                "Electrical charge is the physics meaning — used metaphorically here for emotional intensity."
            ],
            "hook": "Context: 'impossible without accusations' tells you the atmosphere is emotionally INTENSE — that's what 'charged' means here."
        }
    },
    {
        "id": "read_vc_04",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'platform' most nearly means:",
        "context": "The candidate used her platform to advocate for healthcare reform, reaching millions through speeches and media appearances.",
        "correct": "A position of public visibility used to communicate ideas",
        "wrong": [
            "A raised physical structure to stand on",
            "A computer operating system",
            "A train station boarding area"
        ],
        "explanation": {
            "right": "Here 'platform' means a position of influence from which to communicate — her public visibility as a candidate lets her reach millions.",
            "traps": [
                "A physical platform (stage) is related metaphorically but too literal for this context.",
                "A computing platform (Windows, iOS) doesn't fit a political context.",
                "A train platform is another literal meaning that doesn't fit."
            ],
            "hook": "Context: 'advocate,' 'reaching millions,' 'speeches' — she's using her POSITION to communicate. That's a platform."
        }
    },
    {
        "id": "read_vc_05",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'arrested' most nearly means:",
        "context": "The disease's progression was arrested by the new treatment, halting further deterioration of the patient's vision.",
        "correct": "Stopped or halted",
        "wrong": [
            "Taken into police custody",
            "Made more beautiful or eye-catching",
            "Caused to develop faster"
        ],
        "explanation": {
            "right": "'Arrested' here means stopped or halted — the disease stopped progressing. Context: 'halting further deterioration' confirms the meaning.",
            "traps": [
                "Police custody is the most common meaning but doesn't apply to a disease.",
                "'Arresting' can mean eye-catching (an arresting image) but that doesn't fit disease progression.",
                "Causing faster development is the opposite of arresting (stopping)."
            ],
            "hook": "'Halting further deterioration' = STOPPING. 'Arrested' = stopped in its tracks."
        }
    },
    {
        "id": "read_vc_06",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'economy' most nearly means:",
        "context": "The writer was praised for her economy of language — each sentence conveyed maximum meaning in minimum words.",
        "correct": "Careful and efficient use of resources",
        "wrong": [
            "A nation's system of trade and industry",
            "An inexpensive or budget option",
            "The study of supply and demand"
        ],
        "explanation": {
            "right": "'Economy' here means careful, efficient use — specifically of words. Maximum meaning, minimum waste. Like economic efficiency applied to language.",
            "traps": [
                "National economy (GDP, trade) doesn't apply to writing style.",
                "Budget/cheap option doesn't fit — economy of language means EFFICIENT, not cheap.",
                "The academic field of economics doesn't fit this literary context."
            ],
            "hook": "Context: 'maximum meaning in minimum words' = EFFICIENT use. That's 'economy' in the sense of no waste."
        }
    },
    {
        "id": "read_vc_07",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'elevated' most nearly means:",
        "context": "The author's elevated prose style, with its elaborate syntax and classical allusions, alienated readers who preferred direct, conversational writing.",
        "correct": "Formal, refined, and sophisticated in style",
        "wrong": [
            "Physically raised to a higher position",
            "Made better or improved",
            "Promoted to a higher job rank"
        ],
        "explanation": {
            "right": "'Elevated' here means formal, refined, lofty in style — the opposite of 'direct, conversational.' It's about literary register, not physical height.",
            "traps": [
                "Physical height doesn't apply to prose style.",
                "'Improved' is too simple — elevated style isn't necessarily better (it 'alienated readers').",
                "Job promotion doesn't fit a discussion of writing style."
            ],
            "hook": "Context: 'elaborate syntax and classical allusions' vs. 'direct, conversational' — elevated = formal/sophisticated register."
        }
    },
    {
        "id": "read_vc_08",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'cultivate' most nearly means:",
        "context": "The diplomat worked to cultivate relationships with officials across the political spectrum, knowing that allies in both parties would prove essential during negotiations.",
        "correct": "To develop carefully over time through deliberate effort",
        "wrong": [
            "To grow crops in soil",
            "To destroy or uproot",
            "To ignore deliberately"
        ],
        "explanation": {
            "right": "'Cultivate' here means to develop or nurture carefully — building relationships deliberately over time, like a farmer tends crops. Metaphorical use.",
            "traps": [
                "Growing crops is the literal/agricultural meaning — here it's used figuratively for relationships.",
                "Destroying/uprooting is the opposite of cultivating.",
                "Ignoring is the opposite of the deliberate attention that cultivating requires."
            ],
            "hook": "A farmer CULTIVATES crops with care and patience. The diplomat CULTIVATES relationships the same way — carefully, over time."
        }
    },
    {
        "id": "read_vc_09",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'measured' most nearly means:",
        "context": "Despite the provocation, her response was measured — careful, proportionate, and free from the emotional outbursts her critics hoped to provoke.",
        "correct": "Carefully considered and restrained",
        "wrong": [
            "Determined by using a ruler or instrument",
            "Exactly equal to a specific amount",
            "Rhythmic and regular in pattern"
        ],
        "explanation": {
            "right": "'Measured' here means carefully considered, restrained, controlled — not impulsive. The context ('careful, proportionate, free from outbursts') confirms this.",
            "traps": [
                "Using measuring tools is the literal meaning but doesn't apply to a response/behavior.",
                "Exact amount doesn't fit — 'measured' here is about temperament, not quantity.",
                "Rhythmic (measured pace) is a valid use but doesn't match the context of emotional restraint."
            ],
            "hook": "Context: 'careful, proportionate, free from outbursts' = RESTRAINED. A measured response is deliberately controlled."
        }
    },
    {
        "id": "read_vc_10",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'reservation' most nearly means:",
        "context": "The committee approved the proposal with some reservation, noting that while the benefits were clear, the long-term costs remained uncertain.",
        "correct": "A feeling of doubt or hesitation about something",
        "wrong": [
            "A booking at a restaurant or hotel",
            "Land set aside for indigenous peoples",
            "An area of wilderness protected from development"
        ],
        "explanation": {
            "right": "'Reservation' here means doubt or qualified hesitation — they approved but with lingering concerns. Context: 'long-term costs remained uncertain' explains the doubt.",
            "traps": [
                "A restaurant/hotel booking is the everyday meaning but doesn't fit this context.",
                "Indigenous land reservation is a different meaning entirely.",
                "Protected wilderness doesn't fit a committee meeting context."
            ],
            "hook": "Context: approved BUT 'costs remained uncertain' = they had DOUBTS. Reservation = lingering hesitation."
        }
    },
    {
        "id": "read_vc_11",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'liberal' most nearly means:",
        "context": "The chef was liberal with the seasoning, using nearly twice the amount specified in the original recipe.",
        "correct": "Generous or abundant in quantity",
        "wrong": [
            "Politically left-leaning",
            "Favoring individual freedoms",
            "Related to a liberal arts education"
        ],
        "explanation": {
            "right": "'Liberal' here means generous/abundant — using a lot of something freely. Context: 'nearly twice the amount' confirms generous quantity.",
            "traps": [
                "Political liberalism is the most common association but doesn't apply to seasoning.",
                "Individual freedoms is the philosophical meaning — not relevant to cooking.",
                "Liberal arts education is another usage but unrelated to this context."
            ],
            "hook": "Context: 'nearly twice the amount' = GENEROUS with seasoning. Liberal = free/generous in giving."
        }
    },
    {
        "id": "read_vc_12",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'exhausted' most nearly means:",
        "context": "Having exhausted every diplomatic option, the nation reluctantly prepared for military action as a last resort.",
        "correct": "Used up completely; tried everything available",
        "wrong": [
            "Feeling extremely tired",
            "Breathing heavily after exercise",
            "Drained of all resources permanently"
        ],
        "explanation": {
            "right": "'Exhausted' here means used up completely — every diplomatic option has been tried and found insufficient. No options remain.",
            "traps": [
                "Physical tiredness is the common meaning but doesn't fit 'diplomatic options.'",
                "Heavy breathing relates to physical exhaustion, not options.",
                "'Permanently drained' is too strong — the nation may have resources; it's the OPTIONS that are used up."
            ],
            "hook": "Context: 'every option' + 'last resort' = all possibilities have been USED UP. Exhausted = completely depleted."
        }
    },
    {
        "id": "read_vc_13",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'volatile' most nearly means:",
        "context": "The volatile exchange between the senators drew gasps from the gallery, with both legislators abandoning their prepared remarks to trade personal accusations.",
        "correct": "Explosive and emotionally intense",
        "wrong": [
            "Likely to evaporate quickly",
            "Changing unpredictably over time",
            "Related to volcanic activity"
        ],
        "explanation": {
            "right": "'Volatile' here means emotionally explosive and intense — the exchange escalated dramatically. Context: 'gasps,' 'abandoning prepared remarks,' 'personal accusations' = explosive interaction.",
            "traps": [
                "Chemical evaporation is a scientific meaning that doesn't fit a Senate debate.",
                "Unpredictable change is a valid meaning of volatile but here it specifically means explosive/intense in the moment.",
                "Volcanic is a related metaphor but volatile doesn't literally mean volcanic."
            ],
            "hook": "Context: gasps, abandoning scripts, personal attacks = EXPLOSIVE encounter. Volatile here = emotionally combustible."
        }
    },
    {
        "id": "read_vc_14",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'check' most nearly means:",
        "context": "The new regulations were designed to check the unconstrained growth of monopolistic corporations before they could eliminate all competition.",
        "correct": "To restrain or slow down",
        "wrong": [
            "To verify or confirm accuracy",
            "To mark with a checkmark",
            "To hand over for temporary storage"
        ],
        "explanation": {
            "right": "'Check' here means to restrain or stop — preventing unconstrained growth. Like 'check' in chess (threatening the king, limiting movement).",
            "traps": [
                "Verifying (checking your work) is the most common meaning but doesn't fit 'growth.'",
                "Marking a checkbox doesn't apply to corporate growth.",
                "Checking a coat or bag doesn't fit this governmental/regulatory context."
            ],
            "hook": "Context: 'unconstrained growth' needs to be STOPPED/SLOWED. 'Check' = put the brakes on. Like chess: check = limiting movement."
        }
    },
    {
        "id": "read_vc_15",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'wanting' most nearly means:",
        "context": "The committee found the applicant's qualifications wanting, noting significant gaps in both experience and formal training.",
        "correct": "Lacking or deficient",
        "wrong": [
            "Desiring or wishing for something",
            "Attractive and appealing",
            "Needed or required"
        ],
        "explanation": {
            "right": "'Wanting' here means lacking, insufficient, deficient — her qualifications fell short. Context: 'significant gaps' confirms deficiency.",
            "traps": [
                "Desiring (I'm wanting a cookie) is the common modern usage but archaic/formal 'wanting' means lacking.",
                "Attractive/appealing has no connection.",
                "Needed/required is a stretch — 'found wanting' is a fixed phrase meaning 'found to be deficient.'"
            ],
            "hook": "'Found wanting' = weighed and found LACKING. Biblical origin (Daniel 5:27). It means coming up short."
        }
    },
    {
        "id": "read_vc_16",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'stock' most nearly means:",
        "context": "The professor delivered the stock response that administrators always gave: budgets were tight and hiring would resume when conditions improved.",
        "correct": "Standard, routine, and unoriginal",
        "wrong": [
            "Shares in a company",
            "Supplies kept on hand",
            "Broth used for cooking"
        ],
        "explanation": {
            "right": "'Stock' here means standard/routine — a pre-prepared, unoriginal response that everyone gives. Like a stock phrase or stock character.",
            "traps": [
                "Company shares (stock market) don't apply to a response.",
                "Supplies in stock is about inventory, not about standardness.",
                "Cooking stock (broth) is completely unrelated to this context."
            ],
            "hook": "Context: 'always gave' = this response is STANDARD, ROUTINE, pre-packaged. Stock = off-the-shelf, not custom."
        }
    },
    {
        "id": "read_vc_17",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'temper' most nearly means:",
        "context": "The coach's enthusiasm was tempered by realism — she celebrated the victory while acknowledging that tougher opponents lay ahead.",
        "correct": "To moderate or balance with a contrasting quality",
        "wrong": [
            "To become extremely angry",
            "To heat and cool metal to strengthen it",
            "To have a specific mood or disposition"
        ],
        "explanation": {
            "right": "'Tempered' here means moderated or balanced — enthusiasm is kept in check by realism. Two opposing qualities find balance.",
            "traps": [
                "Losing one's temper (anger) is common but opposite — tempering CALMS, it doesn't inflame.",
                "Metalworking (tempering steel) is the literal origin — heating/cooling to find the right balance. The figurative meaning follows.",
                "Having a temperament is related but not what 'tempered by' means in context."
            ],
            "hook": "Context: enthusiasm + realism = BALANCED. 'Tempered by' = moderated by an opposing force."
        }
    },
    {
        "id": "read_vc_18",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'harbor' most nearly means:",
        "context": "Despite her outward friendliness, she harbored deep resentment toward colleagues who had been promoted ahead of her.",
        "correct": "To hold or maintain secretly within oneself",
        "wrong": [
            "A sheltered body of water for ships",
            "To give shelter to a fugitive",
            "To navigate a boat into port"
        ],
        "explanation": {
            "right": "'Harbored' here means to hold or maintain (feelings) secretly — she kept her resentment hidden inside despite appearing friendly.",
            "traps": [
                "A harbor (noun) for ships is the literal meaning but doesn't fit feelings.",
                "Sheltering a fugitive is closer (harbor a criminal) but here it's about feelings, not people.",
                "Navigating into port doesn't fit the context of hidden emotions."
            ],
            "hook": "Context: 'outward friendliness' + 'deep resentment' = hidden feelings. Harbor = keep something sheltered INSIDE, hidden from view."
        }
    },
    {
        "id": "read_vc_19",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'compromise' most nearly means:",
        "context": "The leaked documents compromised the security of operatives working undercover in three countries, forcing their immediate extraction.",
        "correct": "To expose to danger or weaken the position of",
        "wrong": [
            "To reach a mutual agreement through concessions",
            "To settle a dispute by meeting halfway",
            "To lower one's moral standards"
        ],
        "explanation": {
            "right": "'Compromised' here means exposed to danger — the operatives' security was endangered/weakened by the leak. A compromised position = a weakened, vulnerable position.",
            "traps": [
                "Mutual agreement (compromise in negotiation) is the most common meaning but doesn't fit security contexts.",
                "Meeting halfway is the same negotiation meaning — doesn't apply.",
                "Lowering moral standards ('compromising your values') is closer but here it's about security/safety, not morality."
            ],
            "hook": "Context: leaked documents + 'forcing immediate extraction' = operatives are in DANGER. Compromised = made vulnerable."
        }
    },
    {
        "id": "read_vc_20",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'novel' most nearly means:",
        "context": "The researcher's novel approach to data analysis revealed patterns that traditional methods had consistently missed for decades.",
        "correct": "New, original, and unlike anything done before",
        "wrong": [
            "A book-length work of fiction",
            "Simple and easy to understand",
            "Proven and well-established"
        ],
        "explanation": {
            "right": "'Novel' here means new and original — an approach unlike traditional methods. Context: 'revealed patterns that traditional methods had missed' = something NEW worked where OLD methods failed.",
            "traps": [
                "A novel (noun) is a book, but here 'novel' is an adjective meaning new/original.",
                "Simple and easy don't connect — novel approaches can be complex.",
                "Proven/established is the opposite — novel means NEW and untested."
            ],
            "hook": "Context: 'traditional methods missed' but this approach FOUND patterns = it's NEW and DIFFERENT. Novel = original."
        }
    },
    {
        "id": "read_vc_21",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'appreciation' most nearly means:",
        "context": "The property saw substantial appreciation over the decade, rising in value from $200,000 to $450,000.",
        "correct": "An increase in value over time",
        "wrong": [
            "Gratitude or thankfulness",
            "Understanding or recognition of quality",
            "A formal expression of thanks"
        ],
        "explanation": {
            "right": "'Appreciation' here means increase in value — the property grew from $200K to $450K. Financial appreciation = getting more valuable.",
            "traps": [
                "Gratitude (appreciate your help) is the most common meaning but doesn't fit property values.",
                "Understanding quality (appreciate fine art) is another common meaning but not about financial value.",
                "Formal thanks doesn't apply to property value discussion."
            ],
            "hook": "Context: 'rising in value from $200,000 to $450,000' = financial GROWTH. Appreciation = increase in worth."
        }
    },
    {
        "id": "read_vc_22",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'pedestrian' most nearly means:",
        "context": "Critics dismissed the director's latest film as pedestrian, lacking the visual innovation and daring storytelling of her earlier work.",
        "correct": "Dull, uninspired, and lacking imagination",
        "wrong": [
            "Related to people walking on foot",
            "Moving at a slow pace",
            "Accessible to ordinary people"
        ],
        "explanation": {
            "right": "'Pedestrian' here means dull, ordinary, and uninspired — lacking creativity. Context: 'lacking visual innovation and daring' confirms it means boringly conventional.",
            "traps": [
                "A pedestrian (person walking) is the literal meaning but doesn't apply to a film critique.",
                "Slow-paced is not quite right — pedestrian means ORDINARY, not necessarily slow.",
                "Accessible/ordinary is close but misses the NEGATIVE judgment — pedestrian implies disappointingly ordinary."
            ],
            "hook": "Context: 'lacking innovation and daring' = BORING and ORDINARY. Pedestrian = so common it's dull. Walking speed = unremarkable."
        }
    },
    {
        "id": "read_vc_23",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'sound' most nearly means:",
        "context": "The engineer determined that the bridge's structural foundations were sound despite the visible surface damage from the earthquake.",
        "correct": "Strong, stable, and in good condition",
        "wrong": [
            "Related to noise or audio",
            "Deep and restful, as in sleep",
            "To measure the depth of water"
        ],
        "explanation": {
            "right": "'Sound' here means structurally strong and reliable — the foundations are intact and safe despite cosmetic damage. Sound = solid, trustworthy.",
            "traps": [
                "Noise/audio (sound waves) is the most common meaning but doesn't fit structural engineering.",
                "Sound sleep means deep sleep — related concept (solid/undisturbed) but wrong context.",
                "Sounding water depth is a nautical term — not about bridge safety."
            ],
            "hook": "Context: 'structural foundations' + 'despite damage' = the core is SOLID and RELIABLE. Sound = in good condition."
        }
    },
    {
        "id": "read_vc_24",
        "category": "reading",
        "subcategory": "vocab-context",
        "question": "As used in the passage, 'qualify' most nearly means:",
        "context": "The scientist was careful to qualify her conclusions, noting that the sample size was small and further research was needed before any definitive claims could be made.",
        "correct": "To limit or add conditions to a statement",
        "wrong": [
            "To meet the requirements for something",
            "To make someone officially certified",
            "To reach the next round of competition"
        ],
        "explanation": {
            "right": "'Qualify' here means to limit or add reservations to a statement — making conclusions less absolute by noting limitations. She's tempering her claims with caveats.",
            "traps": [
                "Meeting requirements (qualify for the job) is common but doesn't fit limiting conclusions.",
                "Official certification (a qualified doctor) is another meaning but not about limiting statements.",
                "Competition rounds (qualify for the finals) doesn't fit scientific research context."
            ],
            "hook": "Context: 'small sample size,' 'further research needed,' 'before definitive claims' = she's LIMITING her conclusions. Qualify = add conditions/restrictions."
        }
    },
    {
        "id": "read_tone_01",
        "category": "reading",
        "subcategory": "tone",
        "question": "The author's tone in this passage is best described as:",
        "context": "One might charitably describe the committee's response as 'deliberate.' Less charitably, one might note that three years to produce a twelve-page report suggests a relationship with urgency that most of us would find unfamiliar.",
        "correct": "Wryly sarcastic",
        "wrong": [
            "Genuinely admiring",
            "Neutrally objective",
            "Bitterly hostile"
        ],
        "explanation": {
            "right": "The understatement ('charitably describe'), ironic contrast ('deliberate' vs. obviously slow), and dry humor ('relationship with urgency' as euphemism for laziness) = wry sarcasm.",
            "traps": [
                "'Genuinely admiring' is the opposite — the passage mocks the committee through faint praise.",
                "'Neutrally objective' misses the clear mockery in 'one might charitably describe.'",
                "'Bitterly hostile' is too strong — the tone is AMUSED mockery, not angry attack."
            ],
            "hook": "Wry/sardonic = humor through understatement and irony. If the author is clearly making fun but staying calm, that's wry sarcasm."
        }
    },
    {
        "id": "read_tone_02",
        "category": "reading",
        "subcategory": "tone",
        "question": "The author's attitude toward the subject can best be characterized as:",
        "context": "The volunteer firefighters of rural Appalachia receive no salary, minimal equipment, and almost no public recognition. They respond to calls at 3 AM, miss family dinners, and risk their lives for neighbors who may never know their names. If this is not heroism, the word has no meaning.",
        "correct": "Deep admiration and respect",
        "wrong": [
            "Detached neutrality",
            "Mild pity",
            "Amused condescension"
        ],
        "explanation": {
            "right": "The detailed list of sacrifices (no pay, 3 AM calls, risk lives) building to 'if this is not heroism' = profound respect and admiration for their service.",
            "traps": [
                "'Detached neutrality' is wrong — 'if this is not heroism, the word has no meaning' is clearly emotional and admiring.",
                "'Mild pity' is wrong — the author RESPECTS them as heroes, not pities them as victims.",
                "'Amused condescension' is the opposite — the tone is sincere reverence, not looking down."
            ],
            "hook": "Tone signal: building catalog of noble sacrifices + emotional conclusion = ADMIRATION. Watch for escalating positive details."
        }
    },
    {
        "id": "read_tone_03",
        "category": "reading",
        "subcategory": "tone",
        "question": "Which word best describes the author's tone?",
        "context": "The pharmaceutical company's spokesperson assured reporters that patient safety was 'our number one priority' — a claim somewhat difficult to reconcile with internal emails revealing that executives had known about the drug's side effects for eighteen months before issuing a recall.",
        "correct": "Skeptical",
        "wrong": [
            "Supportive",
            "Indifferent",
            "Confused"
        ],
        "explanation": {
            "right": "The contrast between the spokesperson's claim and the damning evidence ('somewhat difficult to reconcile') expressed with understatement = skeptical tone. The author clearly doubts the company's sincerity.",
            "traps": [
                "'Supportive' is the opposite — the author undermines the company's claim with contradicting evidence.",
                "'Indifferent' is wrong — the careful juxtaposition of claim vs. evidence shows the author CARES about exposing the contradiction.",
                "'Confused' is wrong — the author is not confused; they're pointing out hypocrisy clearly and deliberately."
            ],
            "hook": "'Somewhat difficult to reconcile' = IRONIC UNDERSTATEMENT. When an author understates an obvious contradiction, they're being skeptical/critical."
        }
    },
    {
        "id": "read_tone_04",
        "category": "reading",
        "subcategory": "tone",
        "question": "The passage's overall tone is best described as:",
        "context": "We stand at a remarkable juncture. For the first time in human history, we possess the technological means to feed every person on Earth, cure diseases that once decimated continents, and connect billions of minds in real-time collaboration. Whether we deploy these tools wisely or squander them remains the defining question of our generation.",
        "correct": "Cautiously optimistic",
        "wrong": [
            "Unrelentingly pessimistic",
            "Coldly analytical",
            "Wildly enthusiastic"
        ],
        "explanation": {
            "right": "'Remarkable juncture,' listing amazing capabilities = optimism. But 'whether we deploy wisely OR SQUANDER' = caution. Together: cautiously optimistic — hopeful but aware of risk.",
            "traps": [
                "Pessimistic is wrong — the passage celebrates capabilities and sees potential, not doom.",
                "Coldly analytical is wrong — 'remarkable,' 'for the first time in human history' = emotional engagement.",
                "Wildly enthusiastic is too strong — the cautionary ending ('or squander them') tempers the enthusiasm."
            ],
            "hook": "Optimism + warning = cautiously optimistic. The author is hopeful but not naive."
        }
    },
    {
        "id": "read_tone_05",
        "category": "reading",
        "subcategory": "tone",
        "question": "The author's attitude toward the critics mentioned in the passage is:",
        "context": "Those who dismiss social media as merely a platform for vanity and triviality have evidently not witnessed its role in organizing democratic movements across three continents, connecting isolated communities, or enabling small businesses to reach global markets. Dismissal is easy; understanding requires effort.",
        "correct": "Dismissive of their oversimplified view",
        "wrong": [
            "Respectful of their valid concerns",
            "Fearful of their growing influence",
            "Neutral and non-judgmental"
        ],
        "explanation": {
            "right": "The author counters critics with strong evidence and ends with 'dismissal is easy; understanding requires effort' — implying critics are lazy thinkers. The attitude is dismissive of THEIR dismissiveness.",
            "traps": [
                "'Respectful' is wrong — 'evidently not witnessed' implies ignorance, and the final line implies intellectual laziness.",
                "'Fearful' has no support — the author is confident in countering critics, not afraid of them.",
                "'Neutral' is wrong — 'dismissal is easy; understanding requires effort' is clearly a judgment."
            ],
            "hook": "'Evidently not witnessed' + 'dismissal is easy' = the author thinks critics are superficial. That's a DISMISSIVE attitude toward them."
        }
    },
    {
        "id": "read_tone_06",
        "category": "reading",
        "subcategory": "tone",
        "question": "The tone of the passage shifts from:",
        "context": "When I first opened the acceptance letter, I felt nothing but elation. A full scholarship to my dream school — everything I had worked toward for four years. It was only later, as I watched my mother's smile falter when she realized I would be moving 3,000 miles away, that the celebration became complicated by the weight of what was being left behind.",
        "correct": "Joy to bittersweet reflection",
        "wrong": [
            "Anger to acceptance",
            "Confusion to clarity",
            "Indifference to excitement"
        ],
        "explanation": {
            "right": "Opening: 'nothing but elation,' 'everything I worked toward.' Shift: 'mother's smile falter,' 'complicated by weight of what was being left behind.' Joy → bittersweet (happiness mixed with sadness).",
            "traps": [
                "No anger appears in the passage — the initial emotion is pure joy, not anger.",
                "There's no confusion — the narrator knows exactly what happened and what it means.",
                "The narrator is never indifferent — they start with strong positive emotion."
            ],
            "hook": "Tone shifts: find the PIVOT word. Here: 'It was only later' + 'complicated' signals the turn from simple joy to complex emotion."
        }
    },
    {
        "id": "read_tone_07",
        "category": "reading",
        "subcategory": "tone",
        "question": "The author's tone when discussing the research findings is best described as:",
        "context": "The results, while preliminary, offer a tantalizing glimpse of what may become possible. If replicated in larger trials — an important 'if' — this treatment could fundamentally alter the prognosis for millions of patients. For now, cautious excitement seems the appropriate response: hope grounded in evidence, tempered by the knowledge that many promising early results fail to survive rigorous testing.",
        "correct": "Guardedly hopeful",
        "wrong": [
            "Completely convinced",
            "Deeply skeptical",
            "Emotionally detached"
        ],
        "explanation": {
            "right": "Signal words: 'tantalizing,' 'could fundamentally alter' = hope. But 'preliminary,' 'important if,' 'cautious,' 'tempered' = guarded. Together: guardedly hopeful.",
            "traps": [
                "'Completely convinced' ignores all the hedging: 'preliminary,' 'if replicated,' 'many fail.'",
                "'Deeply skeptical' ignores the positive language: 'tantalizing,' 'fundamentally alter,' 'hope.'",
                "'Emotionally detached' is wrong — 'tantalizing' and 'hope' show emotional investment."
            ],
            "hook": "Hope language + caution language = guardedly hopeful. Count the hedges vs. the enthusiasm to find the balance."
        }
    },
    {
        "id": "read_tone_08",
        "category": "reading",
        "subcategory": "tone",
        "question": "The author's tone toward the historical figure is primarily:",
        "context": "To his contemporaries, Edison was simply a genius — the 'Wizard of Menlo Park.' Modern scholarship reveals a more complicated figure: a brilliant organizer and self-promoter who took credit for his team's innovations, aggressively suppressed competitors, and prioritized profit over the safety of his own workers. Edison's legacy deserves neither uncritical worship nor wholesale dismissal.",
        "correct": "Nuanced and balanced",
        "wrong": [
            "Worshipful and uncritical",
            "Entirely condemning",
            "Completely indifferent"
        ],
        "explanation": {
            "right": "The passage explicitly rejects both extremes: 'neither uncritical worship nor wholesale dismissal.' It presents both positives ('brilliant organizer') and negatives ('suppressed competitors'). = balanced, nuanced.",
            "traps": [
                "'Worshipful' is explicitly rejected: 'neither uncritical worship.'",
                "'Entirely condemning' is also explicitly rejected: 'nor wholesale dismissal.'",
                "'Completely indifferent' contradicts the detailed engagement with Edison's legacy."
            ],
            "hook": "When a passage says 'neither X nor Y,' the tone is NUANCED/BALANCED — refusing extremes."
        }
    },
    {
        "id": "read_tone_09",
        "category": "reading",
        "subcategory": "tone",
        "question": "Which best describes the author's attitude?",
        "context": "The university's decision to eliminate the philosophy department — while expanding the business school's budget by 40% — tells us everything we need to know about what this institution truly values. The promotional materials still speak of 'developing the whole person,' though apparently that person needs neither ethics nor critical thinking.",
        "correct": "Biting criticism through irony",
        "wrong": [
            "Mild disappointment",
            "Objective reporting",
            "Enthusiastic approval"
        ],
        "explanation": {
            "right": "'Everything we need to know' (sarcastic) + quoting promotional language against reality ('whole person' who needs no ethics) = biting irony. The author is attacking the university's hypocrisy through sharp sarcasm.",
            "traps": [
                "'Mild disappointment' is far too weak for the anger in 'tells us everything we need to know.'",
                "'Objective reporting' is wrong — the author is clearly making a harsh judgment, not neutrally reporting.",
                "'Enthusiastic approval' is the opposite of what's expressed."
            ],
            "hook": "Quoting someone's words to show their hypocrisy = IRONIC criticism. The author weaponizes the university's own language against it."
        }
    },
    {
        "id": "read_tone_10",
        "category": "reading",
        "subcategory": "tone",
        "question": "The narrator's tone in recounting this experience is:",
        "context": "I spent three weeks preparing my presentation, rehearsing until I could deliver it in my sleep. When the day arrived, I walked to the podium, opened my mouth, and promptly forgot my own name. Three hundred faces stared back at me in what I can only describe as collective secondhand embarrassment. Somehow, eventually, words emerged. They were not the right words, but they were words.",
        "correct": "Self-deprecating humor",
        "wrong": [
            "Traumatized and distressed",
            "Proud and triumphant",
            "Angry at the audience"
        ],
        "explanation": {
            "right": "'Forgot my own name,' 'collective secondhand embarrassment,' 'not the right words, but they were words' = laughing at oneself. The narrator turns embarrassment into comedy.",
            "traps": [
                "'Traumatized' is too strong — the humorous tone ('not the right words, but they were words') shows the narrator has gained distance and can laugh.",
                "'Proud' doesn't match forgetting your own name and delivering wrong words.",
                "'Angry at the audience' has no support — the audience is described with humor, not hostility."
            ],
            "hook": "Self-deprecating = making yourself the butt of the joke. Exaggerating your own failure for comic effect."
        }
    },
    {
        "id": "read_tone_11",
        "category": "reading",
        "subcategory": "tone",
        "question": "The passage conveys which overall mood?",
        "context": "The last photograph shows the team on the summit — seven climbers silhouetted against a sky that seems almost too blue to be real. They are smiling, arms raised, unaware that the weather system already moving toward them will prevent four from ever descending. This image, frozen in triumph, is the only record of the moment when everything was still possible.",
        "correct": "Elegiac and mournful",
        "wrong": [
            "Celebratory and joyful",
            "Suspenseful and thrilling",
            "Angry and accusatory"
        ],
        "explanation": {
            "right": "'Unaware that... will prevent four from ever descending' + 'when everything was still possible' = mourning a loss through a frozen moment of unknowing joy. Elegiac = mourning beauty that is about to be lost.",
            "traps": [
                "The climbers are celebrating, but the AUTHOR'S mood is mournful — we know what they don't.",
                "'Suspenseful' implies uncertainty about what happens — but the author already tells us four will die. It's grief, not suspense.",
                "'Angry' has no target — the passage doesn't blame anyone, it mourns."
            ],
            "hook": "Dramatic irony (we know what they don't) + loss = ELEGIAC. The beauty of the moment is heightened by its impending destruction."
        }
    },
    {
        "id": "read_tone_12",
        "category": "reading",
        "subcategory": "tone",
        "question": "The author's tone in discussing the opposing viewpoint is:",
        "context": "Proponents of the measure argue — with admirable confidence if not equal rigor — that deregulation will stimulate job growth. The evidence from the twelve states that have already implemented similar policies suggests otherwise: job growth remained flat while workplace injuries increased by 23%.",
        "correct": "Politely dismissive",
        "wrong": [
            "Openly hostile and combative",
            "Genuinely uncertain about who is correct",
            "Fully supportive of their position"
        ],
        "explanation": {
            "right": "'Admirable confidence if not equal rigor' = polite way of saying 'bold claims, weak evidence.' Then contradicting evidence follows. Tone is politely dismissive — respectful surface, critical substance.",
            "traps": [
                "'Openly hostile' is too strong — 'admirable confidence' maintains surface politeness even while disagreeing.",
                "'Genuinely uncertain' is wrong — the author presents clear counter-evidence (flat jobs, +23% injuries) and clearly disagrees.",
                "'Fully supportive' is contradicted by 'evidence suggests otherwise' and the damaging statistics."
            ],
            "hook": "'Admirable X if not equal Y' = polite dismissal pattern. Praising their confidence while noting their lack of rigor = respectful but devastating."
        }
    },
    {
        "id": "read_ev_01",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which quotation from the passage best supports the claim that the author views the trend as concerning?",
        "context": "The consolidation of local news outlets accelerated dramatically after 2010. More than 2,100 newspapers have closed since 2004, leaving entire regions without dedicated coverage of school boards, city councils, and local courts. Studies link these 'news deserts' to lower voter turnout, increased municipal corruption, and higher borrowing costs for local governments — consequences that fall hardest on communities already marginalized.",
        "correct": "\"consequences that fall hardest on communities already marginalized\"",
        "wrong": [
            "\"More than 2,100 newspapers have closed since 2004\"",
            "\"consolidation of local news outlets accelerated dramatically\"",
            "\"Studies link these 'news deserts' to lower voter turnout\""
        ],
        "explanation": {
            "right": "The phrase 'consequences that fall hardest on communities already marginalized' reveals the author's concern — it's not just describing what happened but emphasizing that harm targets vulnerable people. This is evaluative, not merely descriptive.",
            "traps": [
                "The closure statistic is factual reporting — it describes the trend but doesn't reveal the author's feelings about it.",
                "Acceleration is also descriptive — it reports the pace without judgment.",
                "Linking to voter turnout is also presented as research finding, not author opinion — it's the 'fall hardest on marginalized' that shows concern."
            ],
            "hook": "Evidence for author CONCERN: look for language about WHO is HARMED and whether the harm is framed as unjust."
        }
    },
    {
        "id": "read_ev_02",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which sentence best serves as evidence for the author's main argument?",
        "context": "Opponents of remote work cite reduced collaboration as their primary concern. Yet the data tells a different story. A Stanford study of 16,000 workers found that remote employees were 13% more productive, took fewer sick days, and reported higher job satisfaction. The collaboration concern may be valid for certain creative roles, but as a blanket argument against remote work, it collapses under the weight of evidence.",
        "correct": "\"A Stanford study of 16,000 workers found that remote employees were 13% more productive\"",
        "wrong": [
            "\"Opponents of remote work cite reduced collaboration\"",
            "\"The collaboration concern may be valid for certain creative roles\"",
            "\"Yet the data tells a different story\""
        ],
        "explanation": {
            "right": "The Stanford study with specific numbers (16,000 workers, 13% more productive) is the EVIDENCE supporting the author's argument that remote work is effective. It's the data that 'tells a different story.'",
            "traps": [
                "This sentence describes the OPPOSING view, not evidence for the author's argument.",
                "This sentence is a CONCESSION — acknowledging a partial validity of the opposing view, not evidence for the author.",
                "This is a TRANSITION sentence announcing evidence will follow — it's not the evidence itself."
            ],
            "hook": "Best evidence = the sentence with SPECIFIC DATA (numbers, studies, measurements) that supports the main claim."
        }
    },
    {
        "id": "read_ev_03",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which detail from the passage most effectively supports the conclusion that the policy failed?",
        "context": "The city's 2015 anti-littering campaign cost $2.3 million and featured celebrity endorsements, billboard advertisements, and a viral social media hashtag that generated 50,000 shares. Post-campaign surveys showed that 89% of residents recognized the campaign slogan. Despite this awareness, litter measurements taken at 200 city locations showed a 2% increase in debris during the campaign period compared to the previous year.",
        "correct": "\"litter measurements taken at 200 city locations showed a 2% increase in debris\"",
        "wrong": [
            "\"The campaign cost $2.3 million\"",
            "\"89% of residents recognized the campaign slogan\"",
            "\"a viral social media hashtag that generated 50,000 shares\""
        ],
        "explanation": {
            "right": "The 2% INCREASE in litter directly demonstrates failure — despite spending and awareness, the actual problem got WORSE. This is outcome evidence contradicting the campaign's goal.",
            "traps": [
                "Cost alone doesn't prove failure — an expensive campaign could still work.",
                "High recognition shows the message REACHED people but doesn't show whether behavior changed — awareness ≠ action.",
                "Social media engagement measures campaign spread, not impact on littering behavior."
            ],
            "hook": "Policy failure evidence = OUTCOME data (did the problem improve?). Inputs (money spent) and outputs (awareness) don't prove outcomes."
        }
    },
    {
        "id": "read_ev_04",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which line from the passage provides the strongest support for the author's skepticism?",
        "context": "The startup's CEO projected $50 million in revenue by year three, citing 'explosive growth potential' in the wellness technology sector. Investors noted the company's current revenue of $200,000, its negative cash flow, and the fact that its core product — a meditation app — competed directly with 47 existing alternatives, none of which had achieved profitability.",
        "correct": "\"its core product competed directly with 47 existing alternatives, none of which had achieved profitability\"",
        "wrong": [
            "\"The startup's CEO projected $50 million in revenue by year three\"",
            "\"Investors noted the company's current revenue of $200,000\"",
            "\"citing 'explosive growth potential' in the wellness technology sector\""
        ],
        "explanation": {
            "right": "47 unprofitable competitors in the same space is the STRONGEST evidence for skepticism — if nobody else has made money doing this, why would this startup? It challenges the very possibility of the business model.",
            "traps": [
                "The CEO's projection is what's BEING questioned, not evidence for why it's questionable.",
                "Low current revenue shows the company is small but doesn't prove it can't grow — many startups start small.",
                "'Explosive growth potential' in quotes shows skepticism but is the CEO's claim, not evidence against it."
            ],
            "hook": "Strongest evidence for skepticism = what makes success STRUCTURALLY unlikely. Market-level data (no one profits here) > company-level data (small now)."
        }
    },
    {
        "id": "read_ev_05",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which piece of evidence most directly contradicts the conventional wisdom described?",
        "context": "Conventional wisdom holds that competition improves educational outcomes — that students perform best when ranked against peers. A meta-analysis of 168 studies found the opposite: cooperative learning structures produced higher achievement in 65% of comparisons, while competitive structures outperformed cooperation in only 8% of cases. The remaining 27% showed no significant difference.",
        "correct": "\"competitive structures outperformed cooperation in only 8% of cases\"",
        "wrong": [
            "\"Conventional wisdom holds that competition improves outcomes\"",
            "\"A meta-analysis of 168 studies\"",
            "\"The remaining 27% showed no significant difference\""
        ],
        "explanation": {
            "right": "The conventional wisdom says competition is better. The most DIRECT contradiction is that competition won in only 8% of cases — it almost never outperforms cooperation. This directly inverts the conventional claim.",
            "traps": [
                "This sentence STATES the conventional wisdom — it doesn't contradict it.",
                "The meta-analysis description establishes credibility but isn't itself a finding that contradicts anything.",
                "No significant difference (27%) is neutral — it doesn't contradict the claim that competition helps."
            ],
            "hook": "Direct contradiction = evidence that shows the conventional claim is WRONG, not just incomplete. 8% success rate directly inverts 'competition improves outcomes.'"
        }
    },
    {
        "id": "read_ev_06",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which quotation best supports the inference that the author considers the problem urgent?",
        "context": "Topsoil erosion proceeds at varying rates depending on land management practices. Under conventional tillage, farmland loses approximately 1 millimeter of topsoil per year. Given that topsoil formation requires roughly 500 years per inch, we are depleting in decades what nature requires centuries to build. At current rates, some agricultural regions will exhaust their productive soil within 60 years.",
        "correct": "\"we are depleting in decades what nature requires centuries to build\"",
        "wrong": [
            "\"Topsoil erosion proceeds at varying rates\"",
            "\"farmland loses approximately 1 millimeter per year\"",
            "\"depending on land management practices\""
        ],
        "explanation": {
            "right": "The contrast between 'decades' (depletion speed) and 'centuries' (replacement speed) framed as 'we are depleting' conveys urgency — the imbalance is dramatic and the framing is active/alarming.",
            "traps": [
                "'Varying rates' is neutral scientific description — no urgency.",
                "'1 millimeter per year' sounds small and undramatic — it doesn't convey urgency on its own.",
                "'Land management practices' mentions a variable but doesn't create any sense of urgency."
            ],
            "hook": "Urgency evidence: look for CONTRAST between speed of damage vs. speed of repair. Decades vs. centuries = unsustainable."
        }
    },
    {
        "id": "read_ev_07",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which detail best supports the claim that the experiment's design was flawed?",
        "context": "The landmark 1971 study concluded that prison environments inevitably corrupt those within them. However, methodological reviews have identified serious problems. The experimenter actively coached 'guards' to behave aggressively, participants were aware they were being observed and later reported performing for the cameras, and no control group existed for comparison. Of 24 participants, several reported that they behaved as they believed experimenters wanted them to behave.",
        "correct": "\"several reported that they behaved as they believed experimenters wanted them to behave\"",
        "wrong": [
            "\"The landmark 1971 study concluded that prison environments inevitably corrupt\"",
            "\"methodological reviews have identified serious problems\"",
            "\"However\" signals a shift in the argument"
        ],
        "explanation": {
            "right": "Participants acting as they thought experimenters wanted = DEMAND CHARACTERISTICS, a fundamental design flaw. The experiment measured compliance with expectations, not natural behavior.",
            "traps": [
                "The study's conclusion is what's being CHALLENGED — it's the claim, not evidence of flaws.",
                "'Methodological reviews identified problems' announces flaws but doesn't demonstrate a specific one.",
                "'However' is a transition word, not evidence of anything."
            ],
            "hook": "Design flaw evidence: participants behaving to meet expectations = demand characteristics. The experiment contaminated its own results."
        }
    },
    {
        "id": "read_ev_08",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which evidence from the passage best supports the author's optimism about the technology?",
        "context": "Early solar panels converted barely 6% of sunlight into electricity, making them impractical for mainstream use. Current commercial panels achieve 22% efficiency, while laboratory prototypes have reached 47%. Manufacturing costs have fallen 99% since 1976. Perhaps most significantly, solar electricity is now cheaper than coal in every major market — a threshold crossed without any government subsidy in the comparison.",
        "correct": "\"solar electricity is now cheaper than coal in every major market\"",
        "wrong": [
            "\"Early solar panels converted barely 6% of sunlight\"",
            "\"laboratory prototypes have reached 47%\"",
            "\"Manufacturing costs have fallen 99% since 1976\""
        ],
        "explanation": {
            "right": "Being cheaper than coal 'in every major market' means solar has already won on economics — the main barrier (cost) has been eliminated. The author flags this as 'most significantly,' confirming it's the strongest basis for optimism.",
            "traps": [
                "6% efficiency is the historical PROBLEM, not evidence for optimism.",
                "47% in labs is impressive but labs aren't commercial reality — it's promising but not yet deployed.",
                "99% cost reduction is important but doesn't alone prove solar is economically viable vs. alternatives."
            ],
            "hook": "The author literally says 'perhaps most significantly' before this fact — when an author tells you which evidence matters most, believe them."
        }
    },
    {
        "id": "read_ev_09",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which statement from the passage best supports the conclusion that the author views both sides as partially correct?",
        "context": "The debate over nature versus nurture has produced more heat than light. Twin studies show that genetics accounts for roughly 50% of variation in personality traits — a finding that supports neither extreme. Genes set a range of possibilities; environment determines where within that range an individual lands. Neither genes nor experiences alone explain human behavior, and framing the question as a choice between them guarantees a wrong answer.",
        "correct": "\"Genes set a range of possibilities; environment determines where within that range an individual lands\"",
        "wrong": [
            "\"The debate has produced more heat than light\"",
            "\"genetics accounts for roughly 50% of variation\"",
            "\"framing the question as a choice between them guarantees a wrong answer\""
        ],
        "explanation": {
            "right": "This sentence gives BOTH factors a specific role: genes set the range, environment picks the spot within it. This explicitly validates both sides by showing how they work TOGETHER.",
            "traps": [
                "'More heat than light' criticizes the DEBATE but doesn't validate either side.",
                "50% is suggestive of both mattering but doesn't explain HOW they interact — it's data, not synthesis.",
                "This sentence says choosing one is WRONG but doesn't explain how both are RIGHT — it's critique, not synthesis."
            ],
            "hook": "Both sides correct: look for the sentence that gives EACH factor a specific, complementary role. That's the synthesis."
        }
    },
    {
        "id": "read_ev_10",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which line best serves as evidence that the change described was unexpected?",
        "context": "Every major projection from 2010 underestimated the speed of renewable energy adoption. The International Energy Agency predicted that solar would supply 1% of global electricity by 2020; the actual figure was 3.7%. Wind power capacity doubled in half the time experts had projected. These forecasting failures shared a common cause: models assumed linear growth in a sector experiencing exponential acceleration.",
        "correct": "\"Every major projection from 2010 underestimated the speed of renewable energy adoption\"",
        "wrong": [
            "\"solar would supply 1% of global electricity by 2020\"",
            "\"models assumed linear growth\"",
            "\"Wind power capacity doubled\""
        ],
        "explanation": {
            "right": "'Every major projection underestimated' directly states that what happened was faster than ANYONE expected — this is the definition of unexpected.",
            "traps": [
                "The 1% prediction is what was expected (wrong), not evidence of surprise at what happened.",
                "Explaining WHY models failed is analysis, not evidence of surprise.",
                "Wind doubling is a fact but without context of expectations, it doesn't show it was unexpected."
            ],
            "hook": "Unexpected = contrary to what people predicted. Look for language about predictions being WRONG or experts being SURPRISED."
        }
    },
    {
        "id": "read_ev_11",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which detail provides the most convincing evidence for the passage's central argument?",
        "context": "The argument that violent video games cause real-world violence rests on correlation studies showing that aggressive children tend to play violent games. But correlation does not establish causation. Longitudinal research tracking the same individuals over time finds no increase in violent behavior after exposure to violent media. Moreover, as video game sales have risen 300% since 1995, violent crime rates have simultaneously fallen by 50% — a pattern that directly contradicts the proposed causal relationship.",
        "correct": "\"as video game sales have risen 300% since 1995, violent crime rates have simultaneously fallen by 50%\"",
        "wrong": [
            "\"correlation does not establish causation\"",
            "\"aggressive children tend to play violent games\"",
            "\"Longitudinal research finds no increase in violent behavior\""
        ],
        "explanation": {
            "right": "If games cause violence, MORE games should mean MORE violence. But the opposite happened (300% more games, 50% less crime). This directly contradicts the causal claim at a societal level.",
            "traps": [
                "'Correlation ≠ causation' is a methodological principle, not specific evidence against this particular claim.",
                "Aggressive children playing violent games is the OPPOSING evidence — it supports the other side.",
                "Longitudinal research showing no increase is good evidence but the societal-level inverse relationship is more dramatic and harder to explain away."
            ],
            "hook": "Most convincing evidence: look for data that makes the opposing view IMPOSSIBLE, not just unlikely. If A causes B, more A with less B kills the theory."
        }
    },
    {
        "id": "read_ev_12",
        "category": "reading",
        "subcategory": "evidence",
        "question": "Which sentence best supports the author's claim that the traditional explanation is insufficient?",
        "context": "The traditional explanation for the extinction of large Ice Age mammals — that human hunters killed them all — faces a serious timing problem. Humans crossed into the Americas approximately 15,000 years ago, yet many megafauna species survived for thousands of years after human arrival. The mammoth persisted until 4,000 years ago on isolated islands. If human hunting alone explained these extinctions, we would expect rapid die-offs immediately following human contact, not gradual declines spanning millennia.",
        "correct": "\"many megafauna species survived for thousands of years after human arrival\"",
        "wrong": [
            "\"Humans crossed into the Americas approximately 15,000 years ago\"",
            "\"The mammoth persisted until 4,000 years ago on isolated islands\"",
            "\"The traditional explanation faces a serious timing problem\""
        ],
        "explanation": {
            "right": "If humans killed megafauna, we'd expect rapid extinction upon arrival. But species surviving 'thousands of years after human arrival' shows the timeline doesn't match — undermining the hunting hypothesis.",
            "traps": [
                "When humans arrived is background context — it doesn't alone challenge the theory.",
                "Mammoth survival on islands is interesting but could be explained by isolation — the mainland survival is more damaging to the theory.",
                "This sentence STATES there's a timing problem but doesn't DEMONSTRATE it — it's the claim, not the evidence."
            ],
            "hook": "Insufficient explanation evidence: show the PREDICTION doesn't match REALITY. Theory predicts X; evidence shows not-X."
        }
    },
    {
        "id": "read_pair_01",
        "category": "reading",
        "subcategory": "paired",
        "question": "How do these two passages relate to each other on the topic of social media regulation?",
        "context": "Passage A: Social media companies must be regulated like public utilities. Their platforms have become essential infrastructure for civic participation, and their algorithms shape public discourse with no democratic oversight. No private entity should wield this power unchecked.\n\nPassage B: Regulating social media as utilities would freeze innovation and entrench current market leaders. The internet thrives on competition and disruption. Heavy regulation always protects incumbents at the expense of startups that could offer better alternatives.",
        "correct": "Passage A argues for regulation based on democratic accountability; Passage B argues against it based on innovation concerns",
        "wrong": [
            "Both passages support regulation but disagree on implementation",
            "Passage A discusses technology while Passage B discusses politics",
            "The passages address completely different topics with no overlap"
        ],
        "explanation": {
            "right": "A: regulate because democratic accountability requires it. B: don't regulate because it kills innovation. They directly oppose each other on the SAME question (should we regulate?) with different VALUES driving their positions.",
            "traps": [
                "Only A supports regulation — B opposes it. They disagree on WHETHER to regulate, not how.",
                "Both passages discuss the intersection of technology AND politics — they're not separated by topic.",
                "They address the SAME topic (social media regulation) from opposing perspectives."
            ],
            "hook": "Paired passages: identify (1) what question both address, (2) what each answers, (3) what VALUE drives each answer."
        }
    },
    {
        "id": "read_pair_02",
        "category": "reading",
        "subcategory": "paired",
        "question": "On which point would both authors most likely agree?",
        "context": "Passage A: Homework reinforces classroom learning and builds self-discipline. Students who complete regular homework assignments consistently outperform those who don't on standardized assessments.\n\nPassage B: Homework consumes family time without proven benefit for elementary students. Research shows meaningful gains only begin in middle school, and even then, more than two hours nightly shows diminishing returns.",
        "correct": "Homework has some measurable academic benefit for older students",
        "wrong": [
            "Homework should be eliminated entirely for all grade levels",
            "Elementary students benefit greatly from daily homework",
            "The amount of homework assigned is always appropriate"
        ],
        "explanation": {
            "right": "A says homework works (implying all levels). B says it works starting in middle school. BOTH agree it has value for older students — they only disagree about elementary and about optimal amount.",
            "traps": [
                "Only B questions homework for young students; A would not agree to eliminate it for all.",
                "B explicitly says no 'proven benefit for elementary students' — B directly contradicts this.",
                "B says 'more than two hours shows diminishing returns' — suggesting current amounts may be excessive."
            ],
            "hook": "Agreement between opposing passages: find where their positions OVERLAP. If A says 'always works' and B says 'works for older kids,' they agree on 'works for older kids.'"
        }
    },
    {
        "id": "read_pair_03",
        "category": "reading",
        "subcategory": "paired",
        "question": "How would the author of Passage B most likely respond to Passage A's main claim?",
        "context": "Passage A: Space exploration is humanity's most important long-term investment. Earth will eventually become uninhabitable — whether through asteroid impact, solar expansion, or self-inflicted catastrophe — and species survival requires becoming multiplanetary.\n\nPassage B: Every dollar spent on space colonization is a dollar not spent on the billions suffering today. Clean water, disease prevention, and hunger relief offer immediate, measurable returns. We cannot justify luxury projects while children die of preventable causes.",
        "correct": "Passage B would argue that long-term species survival doesn't justify ignoring present suffering",
        "wrong": [
            "Passage B would agree that space exploration should be the top priority",
            "Passage B would deny that Earth faces any future threats",
            "Passage B would argue that space exploration is technologically impossible"
        ],
        "explanation": {
            "right": "B's core value is present human suffering > future theoretical risk. B would likely say: even if Earth might become uninhabitable someday, people are suffering NOW and that takes priority.",
            "traps": [
                "B explicitly prioritizes Earth-based spending — would not agree space is top priority.",
                "B doesn't discuss future threats — their argument is about PRIORITIES, not about whether threats exist.",
                "B doesn't question feasibility — they question PRIORITY. 'Can we?' vs 'should we?' are different debates."
            ],
            "hook": "Response questions: use Passage B's CORE VALUE to evaluate Passage A's claim. B values present welfare → would challenge A's focus on distant future."
        }
    },
    {
        "id": "read_pair_04",
        "category": "reading",
        "subcategory": "paired",
        "question": "What is the fundamental difference in how the two passages frame the issue?",
        "context": "Passage A: Access to healthy food is a matter of personal responsibility. Grocery stores exist in every community; individuals choose what to purchase. Blaming 'food deserts' absolves people of accountability for their own dietary decisions.\n\nPassage B: In neighborhoods classified as food deserts, residents must travel over a mile to reach a full-service grocery store. When the nearest source of fresh produce requires a 45-minute bus ride, describing food choices as 'free' ignores the structural constraints that shape those choices.",
        "correct": "Passage A frames food access as individual choice; Passage B frames it as structural constraint",
        "wrong": [
            "Passage A is about urban areas; Passage B is about rural areas",
            "Both passages agree that food deserts don't actually exist",
            "Passage A discusses nutrition science; Passage B discusses economics"
        ],
        "explanation": {
            "right": "A: individual responsibility framework (people choose). B: structural/environmental framework (infrastructure constrains choice). This is the classic individual vs. systemic framing difference.",
            "traps": [
                "Neither passage specifies urban vs. rural — the distinction is about framing, not geography.",
                "Both acknowledge food deserts exist (A says they're not an excuse; B says they constrain choice).",
                "Neither discusses nutrition science per se — both discuss ACCESS and RESPONSIBILITY."
            ],
            "hook": "Fundamental framing difference: does the passage blame INDIVIDUALS (choices) or SYSTEMS (constraints)? This is a common SAT contrast."
        }
    },
    {
        "id": "read_pair_05",
        "category": "reading",
        "subcategory": "paired",
        "question": "Which evidence from Passage B most directly challenges Passage A's argument?",
        "context": "Passage A: Nuclear energy is too dangerous for widespread use. The Chernobyl disaster contaminated thousands of square miles, and Fukushima demonstrated that even advanced nations cannot prevent catastrophic reactor failures.\n\nPassage B: Per unit of energy produced, nuclear power has caused fewer deaths than any other source — including solar and wind (due to manufacturing and installation accidents). Coal kills approximately 24 people per terawatt-hour through air pollution alone; nuclear kills 0.03. Modern reactor designs are physically incapable of the meltdown types that occurred at Chernobyl.",
        "correct": "\"Per unit of energy produced, nuclear power has caused fewer deaths than any other source\"",
        "wrong": [
            "\"Coal kills approximately 24 people per terawatt-hour\"",
            "\"Modern reactor designs are physically incapable of Chernobyl-type meltdowns\"",
            "\"including solar and wind due to manufacturing accidents\""
        ],
        "explanation": {
            "right": "Passage A says nuclear is 'too dangerous.' B counters with deaths-per-energy data showing nuclear is the SAFEST — directly inverting A's danger claim with comparative evidence.",
            "traps": [
                "Coal's death rate supports nuclear indirectly but doesn't directly counter 'nuclear is dangerous.'",
                "Modern designs address A's Chernobyl example but don't directly counter the broader 'too dangerous' claim.",
                "Solar/wind deaths are a surprising detail but don't directly address nuclear's own safety record."
            ],
            "hook": "Direct challenge = evidence that makes the other passage's claim FALSE, not just incomplete. 'Safest source' directly contradicts 'too dangerous.'"
        }
    },
    {
        "id": "read_pair_06",
        "category": "reading",
        "subcategory": "paired",
        "question": "The two passages differ primarily in their:",
        "context": "Passage A: Learning a musical instrument teaches children discipline, patience, and the satisfaction of incremental improvement. These character qualities transfer to academic performance and career success.\n\nPassage B: Music education activates neural pathways involved in spatial reasoning, pattern recognition, and executive function. Brain imaging studies show measurable structural differences in the corpus callosum of musicians, indicating enhanced communication between brain hemispheres.",
        "correct": "Type of evidence used — personal development vs. neuroscience",
        "wrong": [
            "Conclusion about whether music education is valuable",
            "Subject population they discuss — adults vs. children",
            "Level of support for music education"
        ],
        "explanation": {
            "right": "Both support music education, but A uses character/behavioral evidence (discipline, patience) while B uses neuroscience evidence (brain imaging, neural pathways). Same conclusion, different evidence types.",
            "traps": [
                "Both conclude music education is valuable — they agree on the conclusion.",
                "Both discuss children/students — the population is the same.",
                "Both strongly support music education — they agree in strength of support."
            ],
            "hook": "When paired passages reach the SAME conclusion, the difference is usually HOW they get there — what type of evidence or reasoning they use."
        }
    },
    {
        "id": "read_pair_07",
        "category": "reading",
        "subcategory": "paired",
        "question": "Which statement would the author of Passage A most likely make about Passage B's conclusion?",
        "context": "Passage A: Zoos serve a vital conservation role by maintaining breeding populations of endangered species. Without zoo programs, the California condor, Arabian oryx, and black-footed ferret would be extinct.\n\nPassage B: Zoos prioritize charismatic megafauna (elephants, pandas, lions) that attract visitors over truly endangered species that might save ecosystems. Of 850 species in a typical zoo, fewer than 20 are part of genuine breeding programs. Zoos are entertainment businesses marketing themselves as conservation organizations.",
        "correct": "\"While most zoo species may not be in breeding programs, the programs that DO exist have prevented real extinctions\"",
        "wrong": [
            "\"Passage B is entirely wrong — all zoo animals are part of conservation efforts\"",
            "\"Zoos should immediately release all animals and close permanently\"",
            "\"Entertainment and conservation cannot coexist in the same institution\""
        ],
        "explanation": {
            "right": "A would likely CONCEDE B's point (most zoo animals aren't in breeding programs) while DEFENDING their core claim (the programs that exist have saved species from extinction — condor, oryx, ferret). Nuanced defense, not total rejection.",
            "traps": [
                "A focuses on specific successes (condor, oryx) — they wouldn't claim ALL animals are in programs because that's easily disproven.",
                "A supports zoos for conservation — they wouldn't advocate closing them.",
                "A clearly believes zoos can do both — their argument IS that zoos successfully conserve while also existing as public institutions."
            ],
            "hook": "How would A respond to B? Find what A can CONCEDE (B's data) while still DEFENDING (A's core point). The response is usually nuanced, not total rejection."
        }
    },
    {
        "id": "read_pair_08",
        "category": "reading",
        "subcategory": "paired",
        "question": "The authors of both passages would most likely agree that:",
        "context": "Passage A: Standardized test scores are the most objective measure of student achievement. Unlike grades, which vary wildly between teachers and schools, standardized tests provide a common benchmark that enables fair comparison across diverse educational contexts.\n\nPassage B: Standardized tests measure a narrow band of skills under artificial conditions. They reward quick processing speed and test-taking strategy over deep understanding, creativity, or collaborative ability. Grades, while imperfect, capture sustained effort and growth over time.",
        "correct": "School grades alone are an imperfect measure of student ability",
        "wrong": [
            "Standardized tests should be eliminated",
            "Grades are a more reliable measure than test scores",
            "Multiple measures together give the fullest picture"
        ],
        "explanation": {
            "right": "A says grades 'vary wildly' (imperfect). B says grades are 'imperfect.' BOTH acknowledge grades have limitations — they just disagree about whether tests are better or worse.",
            "traps": [
                "Only B is critical of tests — A considers them the 'most objective measure.'",
                "Only B prefers grades over tests — A explicitly argues tests are superior.",
                "Neither passage discusses using MULTIPLE measures — they each argue for ONE approach over the other."
            ],
            "hook": "Agreement point: both passages mention grades are imperfect. A says 'wildly varying' (bad). B says 'while imperfect' (acknowledging limitation). They AGREE on this even while disagreeing on tests."
        }
    },
    {
        "id": "read_pair_09",
        "category": "reading",
        "subcategory": "paired",
        "question": "What assumption does Passage A make that Passage B explicitly challenges?",
        "context": "Passage A: Economic growth is the surest path out of poverty. As nations industrialize and GDP rises, living standards improve for all citizens. The priority for developing nations must be rapid economic expansion, even at short-term environmental cost.\n\nPassage B: GDP growth in many developing nations has enriched a small elite while leaving rural populations no better off. Between 2000 and 2020, several African nations doubled their GDP while inequality indexes worsened. Growth without redistribution does not reach the poor — it concentrates wealth upward.",
        "correct": "That economic growth automatically benefits all citizens",
        "wrong": [
            "That poverty exists in developing nations",
            "That GDP can be measured accurately",
            "That industrialization involves environmental costs"
        ],
        "explanation": {
            "right": "A assumes growth 'improves living standards for all.' B directly challenges this: growth 'enriched a small elite while leaving rural populations no better off.' B shows growth doesn't automatically trickle down.",
            "traps": [
                "Both passages acknowledge poverty exists — this isn't a point of contention.",
                "Neither passage questions GDP measurement methodology.",
                "Both acknowledge environmental costs — A accepts them as worthwhile, but B doesn't dispute they exist."
            ],
            "hook": "Challenged assumption: find what A takes for granted ('for all citizens') that B provides evidence against ('leaving rural populations no better off')."
        }
    },
    {
        "id": "read_pair_10",
        "category": "reading",
        "subcategory": "paired",
        "question": "The relationship between the two passages is best described as:",
        "context": "Passage A: The discovery of antibiotics in 1928 represents medicine's greatest achievement. Before penicillin, a simple scratch could prove fatal. Antibiotics have saved an estimated 200 million lives and enabled modern surgery to exist.\n\nPassage B: Antibiotic resistance now kills 1.27 million people annually — more than HIV or malaria. The miracle drugs of the 20th century are failing in the 21st. Without new antibiotics or alternative treatments, routine surgeries could once again become life-threatening, returning us to a pre-penicillin reality.",
        "correct": "Passage A celebrates a medical achievement that Passage B argues is now being lost",
        "wrong": [
            "The passages completely contradict each other on antibiotics' value",
            "Passage B argues antibiotics were never effective",
            "Both passages are equally optimistic about the future of antibiotics"
        ],
        "explanation": {
            "right": "A: antibiotics = greatest achievement (past success). B: that achievement is being lost to resistance (present/future threat). They're two CHAPTERS of the same story — triumph followed by potential reversal.",
            "traps": [
                "They DON'T contradict on value — B acknowledges antibiotics were 'miracle drugs.' The disagreement is about their FUTURE, not their past.",
                "B calls them 'miracle drugs of the 20th century' — clearly acknowledging effectiveness.",
                "B is alarming/pessimistic while A is celebratory — they're NOT equally optimistic."
            ],
            "hook": "Temporal relationship: A = the triumph (past). B = the threat to that triumph (present/future). Not contradiction but continuation."
        }
    },
    {
        "id": "read_pair_11",
        "category": "reading",
        "subcategory": "paired",
        "question": "Which shared assumption underlies both passages despite their different conclusions?",
        "context": "Passage A: Children should learn to code because it teaches logical thinking, problem decomposition, and the ability to communicate precisely — skills essential in any career.\n\nPassage B: Mandatory coding education is unnecessary for most students. Not everyone will become a programmer, and schools already struggle to teach reading and math adequately. Limited resources should prioritize foundational skills that ALL students will use daily.",
        "correct": "Both assume that schools have limited time and must prioritize what they teach",
        "wrong": [
            "Both believe coding is the most important skill for future careers",
            "Both think reading and math are adequately taught currently",
            "Both agree that all students should learn to code"
        ],
        "explanation": {
            "right": "A argues coding deserves time (implying prioritization). B argues other subjects deserve that time instead. BOTH operate from the assumption that school time is limited and choices must be made about what to include.",
            "traps": [
                "Only A implies coding is important for careers — B argues most students won't need it.",
                "B says schools 'struggle to teach reading and math adequately' — the opposite of this claim.",
                "Only A supports universal coding — B explicitly argues against mandatory coding."
            ],
            "hook": "Shared assumptions: what do BOTH passages take for granted WITHOUT stating? If both argue about WHAT to prioritize, they share the assumption that prioritization is necessary."
        }
    },
    {
        "id": "read_pair_12",
        "category": "reading",
        "subcategory": "paired",
        "question": "How does Passage B's use of evidence differ from Passage A's?",
        "context": "Passage A: The American healthcare system produces the world's best outcomes. We have the most advanced technology, the shortest wait times for specialists, and the most innovative pharmaceutical industry. Patients travel from around the world to receive treatment at American hospitals.\n\nPassage B: Americans pay twice as much per capita for healthcare as citizens of other developed nations while ranking 37th in overall health outcomes. Life expectancy is lower than in 22 other countries. Infant mortality exceeds that of every Western European nation.",
        "correct": "Passage A uses qualitative claims while Passage B uses comparative statistics",
        "wrong": [
            "Both passages rely primarily on anecdotal evidence",
            "Passage A uses more data than Passage B",
            "Both passages use identical methodologies to reach their conclusions"
        ],
        "explanation": {
            "right": "A: superlatives without numbers ('most advanced,' 'best'). B: specific comparative data (37th, twice as much, lower than 22 countries). A uses claims; B uses measurements.",
            "traps": [
                "Neither uses anecdotes (personal stories) — A uses broad claims, B uses statistics.",
                "B has MORE specific data (rankings, ratios, comparisons) than A, which makes unsupported superlative claims.",
                "They use completely different approaches — one claims, the other measures."
            ],
            "hook": "Evidence type differences: QUALITATIVE (best, most, greatest) vs QUANTITATIVE (37th, 2x, lower than 22). Numbers are harder to argue with."
        }
    },
    {
        "id": "read_data_01",
        "category": "reading",
        "subcategory": "data",
        "question": "Based on the data described, which conclusion is best supported?",
        "context": "The study tracked 10,000 employees across 50 companies over 5 years. Employees who worked remotely 3-4 days per week received promotions at 72% the rate of fully in-office peers, despite receiving equivalent or higher performance reviews. The gap was largest in companies without structured remote-work policies and smallest in organizations with explicit promotion criteria tied to measurable outcomes.",
        "correct": "Remote workers face a promotion disadvantage that structured policies can reduce",
        "wrong": [
            "Remote workers are less competent than in-office workers",
            "All companies should eliminate remote work immediately",
            "Performance reviews accurately predict promotion outcomes"
        ],
        "explanation": {
            "right": "72% promotion rate despite equal/higher reviews = disadvantage NOT explained by performance. Gap smallest with structured criteria = policies help. Evidence supports: disadvantage exists but is reducible.",
            "traps": [
                "Performance reviews are 'equivalent or higher' — competence isn't the issue.",
                "'Eliminate remote work' is far too extreme — the data shows policies can fix the gap.",
                "Reviews are high but promotions lag — showing reviews DON'T predict promotions well for remote workers."
            ],
            "hook": "Data interpretation: what does the NUMBER mean? 72% rate with equal reviews = bias, not performance. Smallest gap with policies = solutions exist."
        }
    },
    {
        "id": "read_data_02",
        "category": "reading",
        "subcategory": "data",
        "question": "Which interpretation of the data is NOT supported by the passage?",
        "context": "A survey of 5,000 college graduates found that students who had unpaid internships earned starting salaries identical to those with no internship experience ($35,200 average). Students with paid internships earned $51,800 on average. Students who held both paid and unpaid internships earned $48,300. The survey controlled for major, GPA, and university selectivity.",
        "correct": "Unpaid internships provide the same career advantage as paid internships",
        "wrong": [
            "Unpaid internships provide no salary advantage over no internship at all",
            "Paid internships correlate with significantly higher starting salaries",
            "Having a paid internship is more valuable than having only unpaid experience"
        ],
        "explanation": {
            "right": "Unpaid interns earn $35,200 = same as NO internship ($35,200). Paid interns earn $51,800. So unpaid ≠ paid in career value — this interpretation (that they're the same) is NOT supported.",
            "traps": [
                "This IS supported: unpaid = $35,200, no internship = $35,200. Identical.",
                "This IS supported: paid ($51,800) >> no internship ($35,200).",
                "This IS supported: paid ($51,800) > unpaid ($35,200)."
            ],
            "hook": "NOT supported questions: find the claim the data CONTRADICTS. Unpaid ($35.2K) ≠ Paid ($51.8K), so saying they're equivalent is unsupported."
        }
    },
    {
        "id": "read_data_03",
        "category": "reading",
        "subcategory": "data",
        "question": "What is the most significant limitation of the data described?",
        "context": "Researchers found that students who ate breakfast scored 17% higher on morning exams than those who skipped it. The study surveyed 500 students at one university, asking them to self-report their breakfast habits and then comparing exam scores. The researchers concluded that breakfast consumption directly improves academic performance.",
        "correct": "Self-reported data and lack of random assignment make causation claims unreliable",
        "wrong": [
            "500 students is too small a sample for any valid conclusion",
            "The 17% difference is too small to be meaningful",
            "Morning exams are not representative of academic performance"
        ],
        "explanation": {
            "right": "Two key limitations: (1) self-reported habits (unreliable) and (2) no random assignment (students who eat breakfast may differ systematically from those who don't — motivation, socioeconomic status, etc.). Correlation ≠ causation.",
            "traps": [
                "500 is a reasonable sample size for detecting a 17% difference — sample size isn't the main problem.",
                "17% is actually a large effect — the issue is whether it's CAUSED by breakfast or by confounding variables.",
                "The question is about breakfast and exams specifically — generalizability to all performance is a secondary concern."
            ],
            "hook": "Data limitations: SELF-REPORT (unreliable) + NO RANDOMIZATION (can't prove causation) = the two biggest threats to any study's conclusions."
        }
    },
    {
        "id": "read_data_04",
        "category": "reading",
        "subcategory": "data",
        "question": "According to the data presented, which trend is most clearly established?",
        "context": "Global average temperatures have risen 1.1°C since pre-industrial times. The rate of warming has accelerated: the 0.7°C increase from 1900-2000 was followed by a 0.4°C increase in just the 20 years from 2000-2020. Arctic ice volume has declined 75% since 1979. Sea levels have risen 21cm since 1900, with the rate of rise doubling every decade since 1990.",
        "correct": "The rate of climate change is accelerating, not remaining constant",
        "wrong": [
            "Global temperatures have remained stable since 2000",
            "Sea level rise has slowed in recent decades",
            "Arctic ice has recovered significantly since 1979"
        ],
        "explanation": {
            "right": "Every metric shows ACCELERATION: 0.7°C in 100 years then 0.4°C in just 20 years; sea level rise 'doubling every decade.' The clear trend is accelerating change.",
            "traps": [
                "0.4°C increase 2000-2020 shows temperatures rising FASTER, not stable.",
                "Sea level rise is 'doubling every decade' — accelerating, not slowing.",
                "75% decline in Arctic ice = massive loss, not recovery."
            ],
            "hook": "Trend identification: look for patterns across ALL the data points. When every metric says 'faster,' the trend is acceleration."
        }
    },
    {
        "id": "read_data_05",
        "category": "reading",
        "subcategory": "data",
        "question": "Which conclusion does the data best support?",
        "context": "A school district implemented a new math curriculum in 20 schools while keeping the old curriculum in 20 similar schools as a control. After one year, test scores rose 8% in the new-curriculum schools. However, the new curriculum also came with additional teacher training, smaller class sizes, and new textbooks — none of which were provided to control schools.",
        "correct": "The improvement cannot be attributed to the curriculum alone due to confounding variables",
        "wrong": [
            "The new curriculum is definitively more effective than the old one",
            "Teacher training has no effect on student performance",
            "The control schools prove the old curriculum is harmful"
        ],
        "explanation": {
            "right": "Multiple changes happened simultaneously (curriculum + training + smaller classes + new books). Any combination could explain the 8% gain. Without isolating variables, you can't credit the curriculum specifically.",
            "traps": [
                "Can't say 'definitively' because training, class size, and materials also changed — which caused the improvement?",
                "Teacher training is one of the confounding variables that MIGHT explain the improvement — can't say it has 'no effect.'",
                "Control schools staying the same doesn't prove their curriculum is harmful — they just didn't get extra resources."
            ],
            "hook": "Confounding variables: when MULTIPLE things change at once, you can't attribute results to any ONE factor. That's why controlled experiments change only ONE variable."
        }
    },
    {
        "id": "read_data_06",
        "category": "reading",
        "subcategory": "data",
        "question": "What does the comparison in the data reveal?",
        "context": "Country A spends $12,000 per student annually on education and ranks 38th in international math assessments. Country B spends $5,800 per student and ranks 5th. Country C spends $9,200 per student and ranks 12th. Country D spends $4,100 per student and ranks 41st.",
        "correct": "Higher education spending does not guarantee better academic outcomes",
        "wrong": [
            "Spending less money always leads to better results",
            "Country A's students are less intelligent than Country B's",
            "There is no relationship whatsoever between spending and outcomes"
        ],
        "explanation": {
            "right": "A: most money, poor rank. B: less money, excellent rank. This shows spending alone doesn't guarantee outcomes. But D (least money, worst rank) shows money isn't irrelevant either.",
            "traps": [
                "'Less money always = better results' is contradicted by Country D (lowest spending AND lowest rank).",
                "Intelligence isn't measured here — outcomes depend on many factors beyond spending OR intelligence.",
                "'No relationship whatsoever' is too strong — D shows very low spending CAN correlate with poor outcomes. The relationship is just not simple/linear."
            ],
            "hook": "Comparison data: look for cases that BREAK the expected pattern. A (high spend, low rank) breaks 'more money = better results.' D breaks 'less money = better results.' Reality is complex."
        }
    },
    {
        "id": "read_data_07",
        "category": "reading",
        "subcategory": "data",
        "question": "Which factor does the data suggest is most important?",
        "context": "Researchers studied what predicted student success in college. High school GPA predicted college GPA with a correlation of 0.56. SAT scores predicted with a correlation of 0.35. Parental education level predicted with 0.28. The strongest single predictor was 'academic self-discipline' (measured by questionnaire), with a correlation of 0.67 — higher than any traditional academic metric.",
        "correct": "Self-discipline predicts college success more strongly than test scores or grades",
        "wrong": [
            "SAT scores are completely useless for predicting college outcomes",
            "Parental education has no influence on student success",
            "High school GPA is the best available predictor of college success"
        ],
        "explanation": {
            "right": "Self-discipline (0.67) > GPA (0.56) > SAT (0.35) > Parental education (0.28). Self-discipline has the highest correlation, making it the strongest predictor.",
            "traps": [
                "SAT (0.35) is weaker than GPA or self-discipline but still has meaningful predictive value — 'completely useless' is too extreme.",
                "0.28 is smaller but not zero — parental education has SOME influence.",
                "GPA (0.56) is good but self-discipline (0.67) is higher — GPA is second-best, not best."
            ],
            "hook": "Strongest predictor = highest correlation number. Compare the numbers directly: 0.67 > 0.56 > 0.35 > 0.28."
        }
    },
    {
        "id": "read_data_08",
        "category": "reading",
        "subcategory": "data",
        "question": "What important caveat does the data presentation suggest?",
        "context": "The drug reduced symptom severity by 45% compared to placebo in a 12-week trial of 200 patients. Side effects were reported by 23% of participants in the treatment group versus 8% in the placebo group. The trial was funded entirely by the drug's manufacturer, and 4 of 6 researchers held financial interests in the company.",
        "correct": "Potential conflicts of interest may have influenced the study's design or reporting",
        "wrong": [
            "The drug is completely ineffective and the results are fabricated",
            "Side effects prove the drug is too dangerous to use",
            "200 patients is far too few to detect any drug effect"
        ],
        "explanation": {
            "right": "Manufacturer funding + researcher financial interests = potential bias. This doesn't PROVE fraud but is an important caveat that should make readers scrutinize the methods and reporting more carefully.",
            "traps": [
                "Conflicts of interest suggest caution, not that results are fabricated — many funded studies are legitimate.",
                "23% side effects vs 8% placebo means side effects exist but doesn't alone prove it's 'too dangerous' — that requires risk-benefit analysis.",
                "200 patients detecting a 45% difference is statistically feasible — sample size isn't the main concern here."
            ],
            "hook": "Caveats in data: WHO funded the study and WHO profits from the results? Conflicts don't prove fraud but demand extra scrutiny."
        }
    },
    {
        "id": "read_data_09",
        "category": "reading",
        "subcategory": "data",
        "question": "Which statement accurately describes what the data shows versus what it doesn't show?",
        "context": "A study found that children who played a musical instrument for at least 3 years scored 15% higher on standardized reading tests than non-musicians. The study compared 1,000 young musicians to 1,000 non-musicians matched for age, school district, and parental income level.",
        "correct": "The data shows a correlation between music training and reading scores but cannot prove music caused the improvement",
        "wrong": [
            "The matching process eliminates all possible confounding variables",
            "The data definitively proves that music training improves reading ability",
            "The study is too small to show any meaningful relationship"
        ],
        "explanation": {
            "right": "Even with matching for age, district, and income, other factors may differ (parental involvement, general motivation, cognitive ability). Correlation (musicians score higher) ≠ causation (music MADE them score higher).",
            "traps": [
                "Matching reduces but cannot eliminate ALL confounders — families who enroll kids in music may differ in unmeasured ways (valuing education, providing other enrichment).",
                "Cannot 'definitively prove' without random assignment — we don't know if music caused the difference or if naturally better readers are more likely to study music.",
                "2,000 total participants detecting a 15% difference is statistically powerful — size is adequate."
            ],
            "hook": "Shows vs. doesn't show: correlation = shows. Causation = doesn't show (without randomization). Always distinguish these."
        }
    },
    {
        "id": "read_data_10",
        "category": "reading",
        "subcategory": "data",
        "question": "What pattern in the data is most noteworthy?",
        "context": "Survey results on trust in institutions (2005 vs 2025): Science: 72% → 58%. Medicine: 68% → 52%. Journalism: 32% → 18%. Congress: 14% → 9%. Military: 74% → 71%. Small business: 67% → 70%. Local police: 53% → 44%.",
        "correct": "Trust has declined across nearly all institutions, with some declining more sharply than others",
        "wrong": [
            "Trust in all institutions has declined by exactly the same amount",
            "Only political institutions have lost public trust",
            "Trust in the military and small business has collapsed"
        ],
        "explanation": {
            "right": "Most institutions show decline: Science (-14), Medicine (-16), Journalism (-14), Congress (-5), Police (-9). But military (-3) and small business (+3) are stable/growing. Pattern: broad decline with variation in severity.",
            "traps": [
                "Declines vary widely: Congress -5 points vs Medicine -16 points — NOT uniform.",
                "Science, Medicine, Journalism, and Police all declined — it's not just political institutions.",
                "Military dropped only 3 points (71% is still high) and small business GREW — they haven't collapsed."
            ],
            "hook": "Pattern recognition: look at the DIRECTION (most declining) and the EXCEPTIONS (military stable, small business up). Both the rule and exceptions matter."
        }
    },
    {
        "id": "read_data_11",
        "category": "reading",
        "subcategory": "data",
        "question": "What does the data suggest about the relationship described?",
        "context": "Cities that invested in bicycle infrastructure saw different outcomes: City A built 50 miles of protected bike lanes and saw cycling increase 340%. City B painted 50 miles of unprotected bike lanes (paint-only, no physical barrier) and saw cycling increase only 12%. City C built 25 miles of protected lanes and saw a 180% increase. All three cities had similar populations and climate.",
        "correct": "Physical protection, not just painted lanes, drives significant increases in cycling",
        "wrong": [
            "The total miles of lanes is the only factor that matters",
            "City size and climate determine cycling rates more than infrastructure",
            "All types of bicycle infrastructure produce equal results"
        ],
        "explanation": {
            "right": "Protected lanes (A: 340%, C: 180%) massively outperform unprotected paint-only lanes (B: 12%) despite B having the same total miles as A. The key variable is PROTECTION, not total distance.",
            "traps": [
                "B has 50 miles (same as A) but only 12% increase vs A's 340% — miles alone don't determine results.",
                "All three cities have 'similar populations and climate' — these are controlled, not driving the difference.",
                "B (paint-only: 12%) vs A (protected: 340%) shows dramatically unequal results from different infrastructure types."
            ],
            "hook": "Controlled comparison: same miles, same climate, same population size — ONLY difference is protection type. That's your answer."
        }
    },
    {
        "id": "read_data_12",
        "category": "reading",
        "subcategory": "data",
        "question": "Which conclusion is best supported by the data described?",
        "context": "A longitudinal study tracked 5,000 people's happiness levels and social connections over 20 years. People with 5+ close friendships reported happiness scores of 7.2/10. Those with 1-4 close friends scored 6.8/10. Those reporting zero close friends scored 4.1/10. Interestingly, having more than 15 close friendships (self-reported) correlated with happiness scores of 6.5/10 — lower than the 5-15 range.",
        "correct": "Social connections improve happiness up to a point, after which additional relationships may offer diminishing returns",
        "wrong": [
            "Having exactly 5 friends produces maximum happiness",
            "People with no friends are equally happy as those with many",
            "More friends always means more happiness without limit"
        ],
        "explanation": {
            "right": "Happiness rises with friends: 0 friends (4.1) → 1-4 (6.8) → 5+ (7.2). But 15+ drops to 6.5 — suggesting diminishing or negative returns beyond a point. Pattern: benefit up to a threshold.",
            "traps": [
                "5+ (not exactly 5) has the highest score, and it's a range — the data doesn't pinpoint an exact number.",
                "0 friends (4.1) vs 5+ friends (7.2) is a massive gap — they're NOT equally happy.",
                "15+ friends (6.5) scores LOWER than 5-15 friends (7.2) — more is NOT always better."
            ],
            "hook": "Diminishing returns pattern: benefit increases, then plateaus or decreases. When MORE of something stops helping (or hurts), that's the key finding."
        }
    },
    {
        "id": "root_anti_01",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix ANTI- mean?",
        "context": "Example words: antibiotic, antisocial, antithesis",
        "correct": "Against or opposite",
        "wrong": [
            "Before in time",
            "Around or surrounding",
            "Self or same"
        ],
        "explanation": {
            "right": "Anti- means against: an antibiotic works against bacteria, antisocial means against social norms.",
            "traps": [
                "'Before in time' is the meaning of ante-, not anti-.",
                "'Around or surrounding' is the meaning of circum- or peri-.",
                "'Self or same' is the meaning of auto-."
            ],
            "hook": "Think of antivirus software - it fights AGAINST viruses."
        }
    },
    {
        "id": "root_auto_02",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix AUTO- mean?",
        "context": "Example words: autobiography, automatic, autonomy",
        "correct": "Self",
        "wrong": [
            "Many or multiple",
            "Against",
            "New or recent"
        ],
        "explanation": {
            "right": "Auto- means self: an autobiography is a self-written life story, autonomy is self-governance.",
            "traps": [
                "'Many or multiple' is the meaning of multi- or poly-.",
                "'Against' is the meaning of anti- or contra-.",
                "'New or recent' is the meaning of neo-."
            ],
            "hook": "An AUTOmobile moves by itself (without horses)."
        }
    },
    {
        "id": "root_bene_03",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix BENE- mean?",
        "context": "Example words: benefit, benevolent, benediction",
        "correct": "Good or well",
        "wrong": [
            "Two or double",
            "Bad or harmful",
            "Below or under"
        ],
        "explanation": {
            "right": "Bene- means good or well: a benefit is something good, benevolent means wishing well.",
            "traps": [
                "'Two or double' is the meaning of bi-.",
                "'Bad or harmful' is the meaning of mal-.",
                "'Below or under' is the meaning of sub-."
            ],
            "hook": "A BENEfactor does GOOD for others."
        }
    },
    {
        "id": "root_circum_04",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix CIRCUM- mean?",
        "context": "Example words: circumference, circumnavigate, circumstance",
        "correct": "Around",
        "wrong": [
            "Against",
            "Beyond or outside",
            "Between"
        ],
        "explanation": {
            "right": "Circum- means around: circumference is the distance around a circle, circumnavigate means to sail around.",
            "traps": [
                "'Against' is the meaning of contra- or anti-.",
                "'Beyond or outside' is the meaning of extra-.",
                "'Between' is the meaning of inter-."
            ],
            "hook": "Think of a CIRCUS ring - performers move AROUND in a circle."
        }
    },
    {
        "id": "root_contra_05",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix CONTRA- mean?",
        "context": "Example words: contradict, contrary, contrast",
        "correct": "Against or opposite",
        "wrong": [
            "With or together",
            "Around",
            "Across or beyond"
        ],
        "explanation": {
            "right": "Contra- means against: to contradict is to speak against, contrary means opposite.",
            "traps": [
                "'With or together' is the meaning of syn- or com-.",
                "'Around' is the meaning of circum-.",
                "'Across or beyond' is the meaning of trans-."
            ],
            "hook": "A CONTRAst shows things set AGAINST each other."
        }
    },
    {
        "id": "root_de_06",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix DE- mean?",
        "context": "Example words: decrease, depart, devalue, decompose",
        "correct": "Down, away from, or removal",
        "wrong": [
            "Into or within",
            "Again or back",
            "Not or opposite"
        ],
        "explanation": {
            "right": "De- means down/away/removal: decrease means to go down, depart means to go away.",
            "traps": [
                "'Into or within' is the meaning of in- or intra-.",
                "'Again or back' is the meaning of re-.",
                "'Not or opposite' is the meaning of un- or non-."
            ],
            "hook": "To DEscend is to go DOWN; to DEpart is to go AWAY."
        }
    },
    {
        "id": "root_dis_07",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix DIS- mean?",
        "context": "Example words: disagree, disconnect, disappear, disbelief",
        "correct": "Not, apart, or away",
        "wrong": [
            "Two or double",
            "Badly or wrongly",
            "Before"
        ],
        "explanation": {
            "right": "Dis- means not/apart/away: disagree means to not agree, disconnect means to separate apart.",
            "traps": [
                "'Two or double' is the meaning of bi- or di-.",
                "'Badly or wrongly' is the meaning of mis-.",
                "'Before' is the meaning of pre-."
            ],
            "hook": "DISconnect pulls things APART; DISagree means you're NOT in agreement."
        }
    },
    {
        "id": "root_ex_08",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix EX- mean?",
        "context": "Example words: export, exclude, exhale, extract",
        "correct": "Out of or former",
        "wrong": [
            "Into or inward",
            "Above or over",
            "Beyond or outside"
        ],
        "explanation": {
            "right": "Ex- means out of: to export is to carry out, to exhale is to breathe out.",
            "traps": [
                "'Into or inward' is the meaning of in-.",
                "'Above or over' is the meaning of super-.",
                "'Beyond or outside' is the meaning of extra-."
            ],
            "hook": "An EXIT is the way OUT."
        }
    },
    {
        "id": "root_extra_09",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix EXTRA- mean?",
        "context": "Example words: extraordinary, extravagant, extraterrestrial",
        "correct": "Beyond or outside",
        "wrong": [
            "Out of or former",
            "Within or inside",
            "Extremely or very"
        ],
        "explanation": {
            "right": "Extra- means beyond or outside: extraordinary is beyond ordinary, extraterrestrial is outside Earth.",
            "traps": [
                "'Out of or former' is the meaning of ex-.",
                "'Within or inside' is the meaning of intra-.",
                "'Extremely or very' confuses the casual English use of 'extra' with its Latin root meaning."
            ],
            "hook": "An EXTRATERRESTRIAL is from BEYOND Earth."
        }
    },
    {
        "id": "root_hyper_10",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix HYPER- mean?",
        "context": "Example words: hyperactive, hyperbole, hypertension",
        "correct": "Over, above, or excessive",
        "wrong": [
            "Under or below",
            "Around",
            "Between"
        ],
        "explanation": {
            "right": "Hyper- means over/excessive: hyperactive means excessively active, hypertension is high blood pressure.",
            "traps": [
                "'Under or below' is the meaning of hypo-, which sounds very similar.",
                "'Around' is the meaning of peri- or circum-.",
                "'Between' is the meaning of inter-."
            ],
            "hook": "A HYPER child has TOO MUCH (excessive) energy."
        }
    },
    {
        "id": "root_hypo_11",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix HYPO- mean?",
        "context": "Example words: hypothermia, hypothesis, hypodermic",
        "correct": "Under or below",
        "wrong": [
            "Over or excessive",
            "Against",
            "False or fake"
        ],
        "explanation": {
            "right": "Hypo- means under: hypothermia is body temperature below normal, hypodermic means under the skin.",
            "traps": [
                "'Over or excessive' is the meaning of hyper-, which sounds similar.",
                "'Against' is the meaning of anti-.",
                "'False or fake' confuses hypo- with something like pseudo-."
            ],
            "hook": "HYPOthermia = body temp drops BELOW normal. HYPO is LOW."
        }
    },
    {
        "id": "root_in_not_12",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix IN-/IM- mean when used in words like 'impossible' and 'inactive'?",
        "context": "Example words: impossible, inactive, invisible, immature",
        "correct": "Not or without",
        "wrong": [
            "Into or within",
            "Between",
            "Again"
        ],
        "explanation": {
            "right": "In-/Im- (negation) means not: impossible means not possible, invisible means not visible.",
            "traps": [
                "'Into or within' is the OTHER meaning of in- (as in 'insert').",
                "'Between' is the meaning of inter-.",
                "'Again' is the meaning of re-."
            ],
            "hook": "IMpossible = NOT possible. The IM- cancels the meaning."
        }
    },
    {
        "id": "root_in_into_13",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix IN-/IM- mean when used in words like 'import' and 'inject'?",
        "context": "Example words: import, inject, influx, immerse",
        "correct": "Into or within",
        "wrong": [
            "Not or without",
            "Out of",
            "Above"
        ],
        "explanation": {
            "right": "In-/Im- (directional) means into: to import is to bring into, to inject is to throw into.",
            "traps": [
                "'Not or without' is the OTHER meaning of in- (as in 'invisible').",
                "'Out of' is the meaning of ex-.",
                "'Above' is the meaning of super-."
            ],
            "hook": "To INject is to push something INTO you. Direction = INTO."
        }
    },
    {
        "id": "root_inter_14",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix INTER- mean?",
        "context": "Example words: international, interact, interstate, intervene",
        "correct": "Between or among",
        "wrong": [
            "Within or inside",
            "Not or opposite",
            "Before"
        ],
        "explanation": {
            "right": "Inter- means between: international means between nations, interact means to act between/among.",
            "traps": [
                "'Within or inside' is the meaning of intra-, which looks similar.",
                "'Not or opposite' confuses inter- with in- (negation).",
                "'Before' is the meaning of pre-."
            ],
            "hook": "The INTERNET connects BETWEEN computers worldwide."
        }
    },
    {
        "id": "root_intra_15",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix INTRA- mean?",
        "context": "Example words: intravenous, intramural, intranet, intrastate",
        "correct": "Within or inside",
        "wrong": [
            "Between or among",
            "Into",
            "Against"
        ],
        "explanation": {
            "right": "Intra- means within: intravenous means within the veins, intramural means within the walls (of a school).",
            "traps": [
                "'Between or among' is the meaning of inter-, which looks very similar.",
                "'Into' is one meaning of in-, but intra- specifically means inside/within.",
                "'Against' is the meaning of anti-."
            ],
            "hook": "An INTRA-net is WITHIN one organization; the INTER-net is BETWEEN them."
        }
    },
    {
        "id": "root_mal_16",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix MAL- mean?",
        "context": "Example words: malfunction, malice, malnutrition, malpractice",
        "correct": "Bad or evil",
        "wrong": [
            "Good or well",
            "Many or much",
            "Wrongly or incorrectly"
        ],
        "explanation": {
            "right": "Mal- means bad: malfunction is bad functioning, malice means bad intent.",
            "traps": [
                "'Good or well' is the opposite - that's bene-.",
                "'Many or much' confuses mal- with multi-.",
                "'Wrongly or incorrectly' is close but that's more precisely mis-."
            ],
            "hook": "A MALicious villain is BAD/EVIL. Malware = BAD software."
        }
    },
    {
        "id": "root_mis_17",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix MIS- mean?",
        "context": "Example words: mistake, mislead, misunderstand, misfortune",
        "correct": "Wrongly or badly",
        "wrong": [
            "Not or without",
            "Bad or evil",
            "Half"
        ],
        "explanation": {
            "right": "Mis- means wrongly: a mistake is something done wrong, mislead means to lead wrongly.",
            "traps": [
                "'Not or without' is the meaning of un- or in-.",
                "'Bad or evil' is the meaning of mal- (though close, mis- emphasizes error rather than evil).",
                "'Half' is the meaning of semi-."
            ],
            "hook": "A MIStake is something done WRONG."
        }
    },
    {
        "id": "root_mono_18",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix MONO- mean?",
        "context": "Example words: monologue, monotone, monopoly, monogamy",
        "correct": "One or single",
        "wrong": [
            "Many or multiple",
            "Two or double",
            "All or every"
        ],
        "explanation": {
            "right": "Mono- means one: a monologue is one person speaking, monotone is one tone.",
            "traps": [
                "'Many or multiple' is the meaning of poly- or multi-.",
                "'Two or double' is the meaning of bi-.",
                "'All or every' is the meaning of omni- or pan-."
            ],
            "hook": "A MONOcle is ONE lens for ONE eye."
        }
    },
    {
        "id": "root_multi_19",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix MULTI- mean?",
        "context": "Example words: multiply, multicultural, multitask, multimedia",
        "correct": "Many or multiple",
        "wrong": [
            "One or single",
            "All or every",
            "Half"
        ],
        "explanation": {
            "right": "Multi- means many: multicultural means many cultures, multitask means doing many tasks.",
            "traps": [
                "'One or single' is the meaning of mono- or uni-.",
                "'All or every' is the meaning of omni- or pan-.",
                "'Half' is the meaning of semi-."
            ],
            "hook": "MULTIply = make MANY more."
        }
    },
    {
        "id": "root_neo_20",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix NEO- mean?",
        "context": "Example words: neoclassical, neonatal, neophyte, neologism",
        "correct": "New or recent",
        "wrong": [
            "Old or ancient",
            "Against",
            "Again or back"
        ],
        "explanation": {
            "right": "Neo- means new: neoclassical is a new form of classical, neonatal refers to a newborn.",
            "traps": [
                "'Old or ancient' is the opposite - that would be paleo-.",
                "'Against' is the meaning of anti-.",
                "'Again or back' is the meaning of re-."
            ],
            "hook": "A NEOphyte is a NEW beginner. NEOn lights were the NEW technology."
        }
    },
    {
        "id": "root_omni_21",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix OMNI- mean?",
        "context": "Example words: omniscient, omnivore, omnipotent, omnipresent",
        "correct": "All or every",
        "wrong": [
            "One or single",
            "Many or multiple",
            "Above or over"
        ],
        "explanation": {
            "right": "Omni- means all: omniscient means all-knowing, omnivore eats all (types of food).",
            "traps": [
                "'One or single' is the meaning of mono-.",
                "'Many or multiple' is the meaning of multi- (omni- goes further: ALL, not just many).",
                "'Above or over' is the meaning of super-."
            ],
            "hook": "An OMNIvore eats ALL types of food - plants AND meat."
        }
    },
    {
        "id": "root_pan_22",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix PAN- mean?",
        "context": "Example words: pandemic, panorama, pan-American, pantheon",
        "correct": "All or every",
        "wrong": [
            "Bread or food",
            "Across",
            "Few or some"
        ],
        "explanation": {
            "right": "Pan- means all: a pandemic affects all people, a panorama is an all-encompassing view.",
            "traps": [
                "'Bread or food' confuses the prefix with the cooking pan or bread (pan in Spanish).",
                "'Across' is the meaning of trans-.",
                "'Few or some' is the opposite of what pan- means."
            ],
            "hook": "A PANdemic spreads to ALL people. PANorama = ALL around view."
        }
    },
    {
        "id": "root_peri_23",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix PERI- mean?",
        "context": "Example words: perimeter, periscope, peripheral, peripatetic",
        "correct": "Around or surrounding",
        "wrong": [
            "Through or thorough",
            "Near or close",
            "Before"
        ],
        "explanation": {
            "right": "Peri- means around: perimeter is the measurement around, peripheral means surrounding the center.",
            "traps": [
                "'Through or thorough' is the meaning of per-.",
                "'Near or close' is partially related but peri- specifically means around.",
                "'Before' is the meaning of pre-."
            ],
            "hook": "The PERImeter goes AROUND the outside of a shape."
        }
    },
    {
        "id": "root_post_24",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix POST- mean?",
        "context": "Example words: postpone, postmortem, postgraduate, posterior",
        "correct": "After or behind",
        "wrong": [
            "Before",
            "First or chief",
            "Mail or send"
        ],
        "explanation": {
            "right": "Post- means after: postpone means to put after (delay), postmortem means after death.",
            "traps": [
                "'Before' is the meaning of pre-, the opposite of post-.",
                "'First or chief' is the meaning of prim- or proto-.",
                "'Mail or send' confuses the prefix with the postal service."
            ],
            "hook": "POSTpone = put something AFTER the current time (delay it)."
        }
    },
    {
        "id": "root_pre_25",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix PRE- mean?",
        "context": "Example words: preview, predict, prehistoric, precaution",
        "correct": "Before",
        "wrong": [
            "After",
            "For or in favor of",
            "Forward"
        ],
        "explanation": {
            "right": "Pre- means before: a preview is viewing before, prehistoric means before recorded history.",
            "traps": [
                "'After' is the meaning of post-, the opposite.",
                "'For or in favor of' is the meaning of pro-.",
                "'Forward' is close but that's more precisely pro-."
            ],
            "hook": "A PREview lets you see BEFORE the main event."
        }
    },
    {
        "id": "root_pro_26",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix PRO- mean?",
        "context": "Example words: progress, promote, proactive, propose",
        "correct": "Forward, for, or in favor of",
        "wrong": [
            "Before",
            "Against",
            "First"
        ],
        "explanation": {
            "right": "Pro- means forward/for: progress means moving forward, promote means to push forward.",
            "traps": [
                "'Before' is the meaning of pre-.",
                "'Against' is the meaning of anti- or contra-.",
                "'First' is the meaning of proto- or prim-."
            ],
            "hook": "PROgress = moving FORWARD. Pro-democracy = FOR democracy."
        }
    },
    {
        "id": "root_re_27",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix RE- mean?",
        "context": "Example words: return, rebuild, reconsider, replay",
        "correct": "Again or back",
        "wrong": [
            "Forward",
            "Not or opposite",
            "Truly or very"
        ],
        "explanation": {
            "right": "Re- means again or back: rebuild means to build again, return means to go back.",
            "traps": [
                "'Forward' is the meaning of pro-.",
                "'Not or opposite' is the meaning of un- or in-.",
                "'Truly or very' is not a standard prefix meaning."
            ],
            "hook": "REplay = play AGAIN. REturn = go BACK."
        }
    },
    {
        "id": "root_sub_28",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix SUB- mean?",
        "context": "Example words: submarine, subtract, subway, subordinate",
        "correct": "Under or below",
        "wrong": [
            "Above or over",
            "Half or partial",
            "Instead of"
        ],
        "explanation": {
            "right": "Sub- means under: a submarine goes under water, a subway is an underground way.",
            "traps": [
                "'Above or over' is the meaning of super-, the opposite.",
                "'Half or partial' is the meaning of semi-.",
                "'Instead of' confuses sub- with substitute's casual meaning."
            ],
            "hook": "A SUBmarine goes UNDER the sea."
        }
    },
    {
        "id": "root_super_29",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix SUPER- mean?",
        "context": "Example words: supernatural, superior, supervise, superfluous",
        "correct": "Above, over, or beyond",
        "wrong": [
            "Under or below",
            "All or every",
            "Extremely fast"
        ],
        "explanation": {
            "right": "Super- means above/over: supernatural is above nature, supervise means to look over.",
            "traps": [
                "'Under or below' is the meaning of sub-, the opposite.",
                "'All or every' is the meaning of omni-.",
                "'Extremely fast' confuses the prefix with casual 'super fast' usage."
            ],
            "hook": "A SUPERvisor watches from ABOVE/OVER the workers."
        }
    },
    {
        "id": "root_trans_30",
        "category": "roots",
        "subcategory": "prefix",
        "question": "What does the prefix TRANS- mean?",
        "context": "Example words: transport, transform, translate, transcontinental",
        "correct": "Across or through",
        "wrong": [
            "Between",
            "Beyond or outside",
            "Around"
        ],
        "explanation": {
            "right": "Trans- means across: transport means to carry across, transcontinental means across the continent.",
            "traps": [
                "'Between' is the meaning of inter-.",
                "'Beyond or outside' is the meaning of extra- or ultra-.",
                "'Around' is the meaning of circum-."
            ],
            "hook": "TRANSatlantic flights go ACROSS the Atlantic Ocean."
        }
    },
    {
        "id": "root_anim_31",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root ANIM mean?",
        "context": "Example words: animal, animate, animosity, unanimous",
        "correct": "Life, spirit, or mind",
        "wrong": [
            "Movement or motion",
            "Breath or air",
            "Love or desire"
        ],
        "explanation": {
            "right": "Anim means life/spirit: to animate is to give life, an animal is a living creature.",
            "traps": [
                "'Movement or motion' - animation involves motion, but the root means life/spirit.",
                "'Breath or air' confuses anim with anem- (wind).",
                "'Love or desire' confuses anim with am- (love)."
            ],
            "hook": "To ANIMATE a cartoon is to give it LIFE."
        }
    },
    {
        "id": "root_anthrop_32",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root ANTHROP mean?",
        "context": "Example words: anthropology, misanthrope, philanthropy, anthropomorphic",
        "correct": "Human or humankind",
        "wrong": [
            "Ancient or old",
            "Culture or society",
            "Ape or primate"
        ],
        "explanation": {
            "right": "Anthrop means human: anthropology is the study of humans, a misanthrope hates humankind.",
            "traps": [
                "'Ancient or old' confuses anthropology's focus on history with the root's actual meaning.",
                "'Culture or society' is what anthropology studies, but the root itself means human.",
                "'Ape or primate' confuses the root with the study of evolution."
            ],
            "hook": "ANTHROPology = study of HUMANS."
        }
    },
    {
        "id": "root_aud_33",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root AUD mean?",
        "context": "Example words: audience, auditorium, audio, audible",
        "correct": "Hear or listen",
        "wrong": [
            "See or watch",
            "Speak or say",
            "Bold or daring"
        ],
        "explanation": {
            "right": "Aud means hear: an audience listens, audio relates to sound/hearing, audible means can be heard.",
            "traps": [
                "'See or watch' confuses aud with vid/vis.",
                "'Speak or say' confuses hearing with speaking (dict/loqu).",
                "'Bold or daring' confuses aud with audacious (different Latin root)."
            ],
            "hook": "AUDIO equipment helps you HEAR things."
        }
    },
    {
        "id": "root_bio_34",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root BIO mean?",
        "context": "Example words: biology, biography, antibiotic, biopsy",
        "correct": "Life",
        "wrong": [
            "Two or double",
            "Book or writing",
            "Growth or nature"
        ],
        "explanation": {
            "right": "Bio means life: biology is the study of life, a biography is a written account of someone's life.",
            "traps": [
                "'Two or double' confuses bio with bi-.",
                "'Book or writing' confuses bio with biblio-.",
                "'Growth or nature' is related but the root specifically means life."
            ],
            "hook": "BIOlogy = the study of LIFE."
        }
    },
    {
        "id": "root_cap_cept_35",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root CAP/CEPT mean?",
        "context": "Example words: capture, accept, receptacle, capable",
        "correct": "Take or seize",
        "wrong": [
            "Head or chief",
            "Hold or contain",
            "Cut or divide"
        ],
        "explanation": {
            "right": "Cap/cept means take: to capture is to take, to accept is to take to oneself.",
            "traps": [
                "'Head or chief' confuses cap (take) with capit (head).",
                "'Hold or contain' is close but that's ten- (retain/contain).",
                "'Cut or divide' is the meaning of sect or cis."
            ],
            "hook": "To CAPture is to TAKE someone prisoner."
        }
    },
    {
        "id": "root_chron_36",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root CHRON mean?",
        "context": "Example words: chronological, chronic, synchronize, chronicle",
        "correct": "Time",
        "wrong": [
            "Color",
            "Circle or ring",
            "Crown or ruler"
        ],
        "explanation": {
            "right": "Chron means time: chronological means in time order, chronic means lasting a long time.",
            "traps": [
                "'Color' confuses chron with chrom (as in chromatic).",
                "'Circle or ring' confuses chron with circ.",
                "'Crown or ruler' confuses chron with coron (corona)."
            ],
            "hook": "A CHRONicle records events in TIME order."
        }
    },
    {
        "id": "root_cog_gno_37",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root COG/GNO mean?",
        "context": "Example words: cognition, recognize, diagnose, prognosis",
        "correct": "Know or knowledge",
        "wrong": [
            "Think or believe",
            "Name or call",
            "See or observe"
        ],
        "explanation": {
            "right": "Cog/gno means know: cognition is the process of knowing, recognize means to know again.",
            "traps": [
                "'Think or believe' is close but the root specifically means know, not just think.",
                "'Name or call' confuses gno with nom/nomen.",
                "'See or observe' confuses knowing with visual perception (spec/vid)."
            ],
            "hook": "REcogNIze = to KNOW again when you see something."
        }
    },
    {
        "id": "root_corp_38",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root CORP mean?",
        "context": "Example words: corpse, corporation, corporal, incorporate",
        "correct": "Body",
        "wrong": [
            "Group or gathering",
            "Heart",
            "Strength or power"
        ],
        "explanation": {
            "right": "Corp means body: a corpse is a dead body, corporal punishment is punishment of the body.",
            "traps": [
                "'Group or gathering' confuses corporation (a body of people) with the root meaning.",
                "'Heart' confuses corp with cor/cord.",
                "'Strength or power' confuses body with physical power."
            ],
            "hook": "A CORPse is a dead BODY."
        }
    },
    {
        "id": "root_cred_39",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root CRED mean?",
        "context": "Example words: incredible, credit, credible, credentials",
        "correct": "Believe or trust",
        "wrong": [
            "Money or wealth",
            "Create or make",
            "Fear or dread"
        ],
        "explanation": {
            "right": "Cred means believe: incredible means not believable, credentials prove you can be believed/trusted.",
            "traps": [
                "'Money or wealth' confuses credit cards with the root meaning.",
                "'Create or make' sounds similar to cred but is a different root.",
                "'Fear or dread' confuses cred with a rhyming word."
            ],
            "hook": "Is that story CREDible? Can you BELIEVE it?"
        }
    },
    {
        "id": "root_dem_40",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root DEM mean?",
        "context": "Example words: democracy, demographic, epidemic, pandemic",
        "correct": "People",
        "wrong": [
            "God or divine",
            "Power or rule",
            "Land or territory"
        ],
        "explanation": {
            "right": "Dem means people: democracy is rule by the people, demographics is the study of populations.",
            "traps": [
                "'God or divine' confuses dem with theo/dei.",
                "'Power or rule' confuses the -cracy suffix with the dem root.",
                "'Land or territory' confuses dem with terr."
            ],
            "hook": "DEMocracy = PEOPLE rule (demos + kratos)."
        }
    },
    {
        "id": "root_dict_41",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root DICT mean?",
        "context": "Example words: dictionary, predict, contradict, dictate",
        "correct": "Say or speak",
        "wrong": [
            "Write or record",
            "Lead or guide",
            "Point or direct"
        ],
        "explanation": {
            "right": "Dict means say/speak: a dictionary lists what words say/mean, to dictate is to speak aloud.",
            "traps": [
                "'Write or record' confuses dict with scrib/script.",
                "'Lead or guide' confuses dict with duc/duct.",
                "'Point or direct' confuses dictate with direct (different root)."
            ],
            "hook": "A DICTator tells people what to do - they SAY and you obey."
        }
    },
    {
        "id": "root_duc_duct_42",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root DUC/DUCT mean?",
        "context": "Example words: conduct, produce, educate, deduce",
        "correct": "Lead or bring",
        "wrong": [
            "Build or construct",
            "Say or speak",
            "Pull or draw"
        ],
        "explanation": {
            "right": "Duc/duct means lead: to conduct is to lead together, to educate is to lead out (of ignorance).",
            "traps": [
                "'Build or construct' confuses duct with struct.",
                "'Say or speak' confuses duc with dict.",
                "'Pull or draw' confuses lead with tract (pull/drag)."
            ],
            "hook": "A conDUCTor LEADS the orchestra."
        }
    },
    {
        "id": "root_fac_fic_43",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root FAC/FIC mean?",
        "context": "Example words: factory, fiction, manufacture, artificial",
        "correct": "Make or do",
        "wrong": [
            "Face or front",
            "True or real",
            "Easy or simple"
        ],
        "explanation": {
            "right": "Fac/fic means make: a factory is where things are made, fiction is something made up.",
            "traps": [
                "'Face or front' confuses fac with facial (different Latin root).",
                "'True or real' is the opposite - fiction means MADE up, not true.",
                "'Easy or simple' confuses fac with facile (which derives from this root but took on that meaning)."
            ],
            "hook": "A FACTory is where things are MADE."
        }
    },
    {
        "id": "root_gen_44",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root GEN mean?",
        "context": "Example words: generate, genetics, genesis, genocide",
        "correct": "Birth, origin, or produce",
        "wrong": [
            "People or race",
            "Kind or type",
            "Gentle or noble"
        ],
        "explanation": {
            "right": "Gen means birth/origin/produce: to generate is to produce, genesis is the origin/beginning.",
            "traps": [
                "'People or race' partially overlaps but the core meaning is birth/origin.",
                "'Kind or type' confuses gen with genus (which derives from gen but has a narrower meaning).",
                "'Gentle or noble' confuses gen with gentle (which historically derives from gen but has diverged)."
            ],
            "hook": "GENesis = the BIRTH/ORIGIN of something."
        }
    },
    {
        "id": "root_graph_45",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root GRAPH mean?",
        "context": "Example words: biography, photograph, autograph, graphic",
        "correct": "Write or draw",
        "wrong": [
            "Picture or image",
            "Record or remember",
            "Measure or count"
        ],
        "explanation": {
            "right": "Graph means write/draw: an autograph is self-writing, a photograph is light-writing (drawing with light).",
            "traps": [
                "'Picture or image' confuses the result (graphics) with the root meaning (writing/drawing).",
                "'Record or remember' is a related concept but not the root meaning.",
                "'Measure or count' confuses graph with metr."
            ],
            "hook": "An autoGRAPH is someone's own handWRITING."
        }
    },
    {
        "id": "root_loc_46",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root LOC mean?",
        "context": "Example words: location, local, relocate, locomotion",
        "correct": "Place",
        "wrong": [
            "Lock or close",
            "Speech or talk",
            "Move or motion"
        ],
        "explanation": {
            "right": "Loc means place: a location is a place, local means of a particular place.",
            "traps": [
                "'Lock or close' confuses loc with lock (different origin).",
                "'Speech or talk' confuses loc with loqu/locut.",
                "'Move or motion' confuses locomotion's meaning with just the loc part."
            ],
            "hook": "Your LOCation is the PLACE where you are."
        }
    },
    {
        "id": "root_log_47",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root LOG/LOGUE mean?",
        "context": "Example words: dialogue, monologue, logic, prologue",
        "correct": "Word, speech, or reason",
        "wrong": [
            "Study or science",
            "Write or record",
            "Long or lengthy"
        ],
        "explanation": {
            "right": "Log/logue means word/speech/reason: a dialogue is words between two, logic is reasoning.",
            "traps": [
                "'Study or science' confuses -logy (study of) with log itself; -logy combines log + -y.",
                "'Write or record' confuses log with graph or scrib.",
                "'Long or lengthy' confuses log with long (unrelated)."
            ],
            "hook": "A monoLOGUE is one person's SPEECH (words)."
        }
    },
    {
        "id": "root_luc_lum_48",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root LUC/LUM mean?",
        "context": "Example words: lucid, illuminate, luminous, translucent",
        "correct": "Light",
        "wrong": [
            "Clear or pure",
            "Moon",
            "Wealth or money"
        ],
        "explanation": {
            "right": "Luc/lum means light: luminous means giving off light, illuminate means to shine light on.",
            "traps": [
                "'Clear or pure' - lucid does mean clear, but because light makes things clear to see.",
                "'Moon' confuses lum with luna (moon), though the moon gives light.",
                "'Wealth or money' confuses luc with lucr- (as in lucrative)."
            ],
            "hook": "A LUMinous object glows with LIGHT."
        }
    },
    {
        "id": "root_manu_49",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root MANU mean?",
        "context": "Example words: manual, manuscript, manufacture, manipulate",
        "correct": "Hand",
        "wrong": [
            "Make or build",
            "Many or much",
            "Man or human"
        ],
        "explanation": {
            "right": "Manu means hand: a manual is a handbook, a manuscript is written by hand.",
            "traps": [
                "'Make or build' confuses manu with fac- (manufacture means make by hand).",
                "'Many or much' confuses manu with multi-.",
                "'Man or human' confuses the sound of manu with 'man'."
            ],
            "hook": "A MANUscript was originally written by HAND."
        }
    },
    {
        "id": "root_morph_50",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root MORPH mean?",
        "context": "Example words: metamorphosis, morphology, amorphous, anthropomorphic",
        "correct": "Shape or form",
        "wrong": [
            "Change or transform",
            "Death",
            "Sleep or dream"
        ],
        "explanation": {
            "right": "Morph means shape/form: morphology studies forms, amorphous means without shape.",
            "traps": [
                "'Change or transform' - metamorphosis involves change, but morph itself means shape.",
                "'Death' confuses morph with mort.",
                "'Sleep or dream' confuses Morph with Morpheus (god of dreams)."
            ],
            "hook": "When something MORPHs, it changes SHAPE."
        }
    },
    {
        "id": "root_mort_51",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root MORT mean?",
        "context": "Example words: mortal, immortal, mortician, mortgage",
        "correct": "Death",
        "wrong": [
            "Shape or form",
            "More or greater",
            "Wall or barrier"
        ],
        "explanation": {
            "right": "Mort means death: mortal means subject to death, a mortician handles the dead.",
            "traps": [
                "'Shape or form' confuses mort with morph.",
                "'More or greater' confuses mort with the English word 'more'.",
                "'Wall or barrier' confuses mort with mur (as in mural, wall)."
            ],
            "hook": "MORTal beings face DEATH. ImMORTal = never dying."
        }
    },
    {
        "id": "root_path_52",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root PATH mean?",
        "context": "Example words: sympathy, pathology, empathy, apathy",
        "correct": "Feeling or suffering",
        "wrong": [
            "Way or road",
            "Disease or sickness",
            "Father"
        ],
        "explanation": {
            "right": "Path means feeling/suffering: sympathy is feeling together with someone, apathy is without feeling.",
            "traps": [
                "'Way or road' confuses the Greek root pathos with English 'path' (a trail).",
                "'Disease or sickness' - pathology studies disease, but path means feeling/suffering.",
                "'Father' confuses path with patr- (patriarch)."
            ],
            "hook": "SYMPATHY = FEELING together with someone's pain."
        }
    },
    {
        "id": "root_ped_53",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root PED mean (from Latin)?",
        "context": "Example words: pedestrian, pedal, biped, centipede",
        "correct": "Foot",
        "wrong": [
            "Child",
            "Push or drive",
            "Earth or ground"
        ],
        "explanation": {
            "right": "Ped (Latin) means foot: a pedestrian travels on foot, a pedal is operated by foot.",
            "traps": [
                "'Child' is the Greek meaning of ped (as in pediatrics) - a common trap.",
                "'Push or drive' confuses ped with pel/puls.",
                "'Earth or ground' confuses foot with terra."
            ],
            "hook": "A PEDestrian walks on FOOT. A centiPEDE has 100 FEET."
        }
    },
    {
        "id": "root_phil_54",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root PHIL mean?",
        "context": "Example words: philosophy, philanthropy, bibliophile, Philadelphia",
        "correct": "Love",
        "wrong": [
            "Wisdom or knowledge",
            "Friend or ally",
            "Many or much"
        ],
        "explanation": {
            "right": "Phil means love: philosophy is love of wisdom, philanthropy is love of humankind.",
            "traps": [
                "'Wisdom or knowledge' - philosophy involves wisdom, but phil means love.",
                "'Friend or ally' is related (you love friends) but the root means love specifically.",
                "'Many or much' confuses phil with poly."
            ],
            "hook": "PHILadelphia = city of brotherly LOVE."
        }
    },
    {
        "id": "root_phon_55",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root PHON mean?",
        "context": "Example words: telephone, phonics, microphone, symphony",
        "correct": "Sound or voice",
        "wrong": [
            "Call or summon",
            "Light or glow",
            "False or fake"
        ],
        "explanation": {
            "right": "Phon means sound: a telephone carries sound far, phonics teaches letter sounds.",
            "traps": [
                "'Call or summon' - phones are used to call, but the root means sound.",
                "'Light or glow' confuses phon with phot/phos.",
                "'False or fake' confuses phon with phony (unrelated)."
            ],
            "hook": "A microPHONE amplifies SOUND."
        }
    },
    {
        "id": "root_port_56",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root PORT mean?",
        "context": "Example words: transport, portable, export, import",
        "correct": "Carry",
        "wrong": [
            "Door or gate",
            "Harbor or safe place",
            "Part or portion"
        ],
        "explanation": {
            "right": "Port means carry: transport means to carry across, portable means able to be carried.",
            "traps": [
                "'Door or gate' confuses port with porta (door) - related but different usage.",
                "'Harbor or safe place' confuses the root with port (harbor) from a different origin.",
                "'Part or portion' confuses port with part."
            ],
            "hook": "PORTable = able to be CARRIED."
        }
    },
    {
        "id": "root_psych_57",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root PSYCH mean?",
        "context": "Example words: psychology, psyche, psychiatry, psychopath",
        "correct": "Mind or soul",
        "wrong": [
            "Brain or nervous system",
            "Behavior or action",
            "Crazy or abnormal"
        ],
        "explanation": {
            "right": "Psych means mind/soul: psychology is the study of the mind, psyche refers to the soul/self.",
            "traps": [
                "'Brain or nervous system' confuses the physical brain with the concept of mind.",
                "'Behavior or action' is what psychology studies, but the root means mind.",
                "'Crazy or abnormal' confuses colloquial 'psycho' with the actual root meaning."
            ],
            "hook": "PSYCHology = study of the MIND."
        }
    },
    {
        "id": "root_rupt_58",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root RUPT mean?",
        "context": "Example words: rupture, interrupt, erupt, corrupt",
        "correct": "Break or burst",
        "wrong": [
            "Tear or rip",
            "Sudden or quick",
            "Destroy or ruin"
        ],
        "explanation": {
            "right": "Rupt means break/burst: to rupture is to break open, to interrupt is to break into.",
            "traps": [
                "'Tear or rip' is close but rupt specifically means break/burst, not tear.",
                "'Sudden or quick' confuses the sudden nature of eruptions with the root meaning.",
                "'Destroy or ruin' goes too far - rupt means break, not completely destroy."
            ],
            "hook": "A volcano eRUPTs - it BREAKS open and BURSTS out."
        }
    },
    {
        "id": "root_scrib_script_59",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root SCRIB/SCRIPT mean?",
        "context": "Example words: describe, manuscript, prescription, inscribe",
        "correct": "Write",
        "wrong": [
            "Draw or sketch",
            "Read or recite",
            "Cut or carve"
        ],
        "explanation": {
            "right": "Scrib/script means write: a manuscript is hand-written, to inscribe is to write on.",
            "traps": [
                "'Draw or sketch' confuses scrib with drawing (graph means draw/write).",
                "'Read or recite' confuses writing with reading (leg means read).",
                "'Cut or carve' confuses inscribing with engraving/cutting."
            ],
            "hook": "A SCRIPT is something WRITTEN for actors to follow."
        }
    },
    {
        "id": "root_spec_spect_60",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root SPEC/SPECT mean?",
        "context": "Example words: spectator, inspect, spectacle, perspective",
        "correct": "Look or see",
        "wrong": [
            "Special or unique",
            "Hope or expect",
            "Mirror or reflect"
        ],
        "explanation": {
            "right": "Spec/spect means look/see: a spectator looks/watches, to inspect is to look into.",
            "traps": [
                "'Special or unique' confuses the root with the word special (different development).",
                "'Hope or expect' - expect involves looking forward, but spec means look/see.",
                "'Mirror or reflect' confuses seeing with reflection."
            ],
            "hook": "SPECTacles (glasses) help you SEE/LOOK better."
        }
    },
    {
        "id": "root_struct_61",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root STRUCT mean?",
        "context": "Example words: construct, structure, instruct, destruct",
        "correct": "Build",
        "wrong": [
            "Stand or upright",
            "Order or arrange",
            "Strong or firm"
        ],
        "explanation": {
            "right": "Struct means build: to construct is to build together, structure is how something is built.",
            "traps": [
                "'Stand or upright' confuses struct with stat/stit (stand).",
                "'Order or arrange' is related to building but not the root meaning.",
                "'Strong or firm' confuses the sturdiness of structures with the root meaning."
            ],
            "hook": "To conSTRUCT is to BUILD something."
        }
    },
    {
        "id": "root_temp_62",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root TEMP mean?",
        "context": "Example words: temporary, contemporary, temporal, tempo",
        "correct": "Time",
        "wrong": [
            "Heat or warmth",
            "Try or attempt",
            "Moderate or mild"
        ],
        "explanation": {
            "right": "Temp means time: temporary means for a limited time, contemporary means at the same time.",
            "traps": [
                "'Heat or warmth' confuses temp (time) with temperature (which has a different origin path).",
                "'Try or attempt' confuses temp with tempt.",
                "'Moderate or mild' confuses temp with temper (even temper)."
            ],
            "hook": "TEMPorary = lasting only for a limited TIME."
        }
    },
    {
        "id": "root_terr_63",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root TERR mean?",
        "context": "Example words: terrain, territory, terrestrial, subterranean",
        "correct": "Earth or land",
        "wrong": [
            "Fear or fright",
            "Three",
            "End or boundary"
        ],
        "explanation": {
            "right": "Terr means earth/land: terrain is the land surface, terrestrial means of the earth.",
            "traps": [
                "'Fear or fright' confuses terr (land) with terror (different Latin root terrere = frighten).",
                "'Three' confuses terr with tri-.",
                "'End or boundary' confuses territory's borders with the root meaning."
            ],
            "hook": "TERRain = the shape of the LAND/EARTH."
        }
    },
    {
        "id": "root_tract_64",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root TRACT mean?",
        "context": "Example words: attract, tractor, extract, contract",
        "correct": "Pull or drag",
        "wrong": [
            "Track or follow",
            "Road or path",
            "Touch or feel"
        ],
        "explanation": {
            "right": "Tract means pull/drag: attract means to pull toward, a tractor pulls/drags loads.",
            "traps": [
                "'Track or follow' confuses tract with track (unrelated).",
                "'Road or path' confuses tract (pull) with tract of land (different development).",
                "'Touch or feel' confuses tract with tact/tang (touch)."
            ],
            "hook": "A TRACTor PULLS heavy loads across a farm."
        }
    },
    {
        "id": "root_vid_vis_65",
        "category": "roots",
        "subcategory": "root",
        "question": "What does the root VID/VIS mean?",
        "context": "Example words: video, visible, vision, evidence",
        "correct": "See",
        "wrong": [
            "Life or living",
            "Empty or void",
            "Divide or separate"
        ],
        "explanation": {
            "right": "Vid/vis means see: video is something you see, visible means able to be seen.",
            "traps": [
                "'Life or living' confuses vid/vis with vit/viv.",
                "'Empty or void' confuses vis with void.",
                "'Divide or separate' confuses vid with divide (different origin)."
            ],
            "hook": "VIDEO = something you SEE on a screen."
        }
    },
    {
        "id": "root_able_ible_66",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -ABLE/-IBLE mean?",
        "context": "Example words: readable, flexible, capable, visible",
        "correct": "Able to be or capable of",
        "wrong": [
            "Full of",
            "Without or lacking",
            "In the manner of"
        ],
        "explanation": {
            "right": "-Able/-ible means able to be: readable means able to be read, flexible means able to bend.",
            "traps": [
                "'Full of' is the meaning of -ful or -ous.",
                "'Without or lacking' is the meaning of -less.",
                "'In the manner of' is the meaning of -ly."
            ],
            "hook": "ReadABLE = ABLE to BE read."
        }
    },
    {
        "id": "root_archy_67",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -ARCHY mean?",
        "context": "Example words: monarchy, anarchy, oligarchy, matriarchy",
        "correct": "Rule or government",
        "wrong": [
            "Ancient or old",
            "Structure or building",
            "Study or science"
        ],
        "explanation": {
            "right": "-Archy means rule: monarchy is rule by one, anarchy is without rule.",
            "traps": [
                "'Ancient or old' confuses -archy with archae- (ancient).",
                "'Structure or building' confuses rule/hierarchy with physical structures.",
                "'Study or science' confuses -archy with -logy."
            ],
            "hook": "MONarchy = rule by ONE (mono + archy)."
        }
    },
    {
        "id": "root_cracy_68",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -CRACY mean?",
        "context": "Example words: democracy, theocracy, aristocracy, bureaucracy",
        "correct": "Rule by or government by",
        "wrong": [
            "Belief in",
            "State or condition",
            "Madness or obsession"
        ],
        "explanation": {
            "right": "-Cracy means rule by: democracy is rule by the people, theocracy is rule by religion/god.",
            "traps": [
                "'Belief in' confuses -cracy with -ism.",
                "'State or condition' confuses -cracy with -cy.",
                "'Madness or obsession' confuses -cracy with -mania."
            ],
            "hook": "DemoCRACY = the people RULE. TheoCRACY = god RULES."
        }
    },
    {
        "id": "root_fy_ify_69",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -FY/-IFY mean?",
        "context": "Example words: simplify, magnify, terrify, purify",
        "correct": "To make or become",
        "wrong": [
            "Full of",
            "The study of",
            "One who does"
        ],
        "explanation": {
            "right": "-Fy/-ify means to make: simplify means to make simple, purify means to make pure.",
            "traps": [
                "'Full of' is the meaning of -ful or -ous.",
                "'The study of' is the meaning of -logy.",
                "'One who does' is the meaning of -ist or -er."
            ],
            "hook": "SimplIFY = to MAKE something simple."
        }
    },
    {
        "id": "root_ism_70",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -ISM mean?",
        "context": "Example words: capitalism, realism, heroism, criticism",
        "correct": "Belief, doctrine, or practice",
        "wrong": [
            "One who believes",
            "The act of",
            "Against or opposing"
        ],
        "explanation": {
            "right": "-Ism means belief/doctrine/practice: capitalism is the doctrine of capital, realism is the practice of being real.",
            "traps": [
                "'One who believes' is the meaning of -ist (the person who follows an -ism).",
                "'The act of' is the meaning of -tion/-ment.",
                "'Against or opposing' confuses -ism with anti-."
            ],
            "hook": "Every -ISM is a system of BELIEF or PRACTICE (capitalism, socialism, etc.)."
        }
    },
    {
        "id": "root_ist_71",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -IST mean?",
        "context": "Example words: scientist, artist, pianist, optimist",
        "correct": "One who practices or believes",
        "wrong": [
            "The practice or belief itself",
            "The study of",
            "Relating to or like"
        ],
        "explanation": {
            "right": "-Ist means one who: a scientist is one who does science, an artist is one who makes art.",
            "traps": [
                "'The practice or belief itself' is the meaning of -ism.",
                "'The study of' is the meaning of -logy.",
                "'Relating to or like' is the meaning of -istic or -al."
            ],
            "hook": "An artIST is ONE WHO creates art."
        }
    },
    {
        "id": "root_logy_72",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -LOGY mean?",
        "context": "Example words: biology, psychology, geology, technology",
        "correct": "Study of or science of",
        "wrong": [
            "Speech or words",
            "Collection of",
            "Process of"
        ],
        "explanation": {
            "right": "-Logy means study of: biology is the study of life, geology is the study of earth.",
            "traps": [
                "'Speech or words' is the meaning of the root log/logue itself, but -logy specifically means study.",
                "'Collection of' confuses -logy with -ology as if it means a collection.",
                "'Process of' confuses -logy with -tion."
            ],
            "hook": "BioLOGY = the STUDY OF life."
        }
    },
    {
        "id": "root_ment_73",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -MENT mean?",
        "context": "Example words: achievement, government, development, movement",
        "correct": "Act, process, or result of",
        "wrong": [
            "State of being",
            "One who does",
            "Place where"
        ],
        "explanation": {
            "right": "-Ment means act/process/result: achievement is the result of achieving, movement is the act of moving.",
            "traps": [
                "'State of being' is closer to the meaning of -ness or -ity.",
                "'One who does' is the meaning of -er/-or or -ist.",
                "'Place where' is the meaning of -arium or -orium."
            ],
            "hook": "AchieveMENT = the RESULT OF achieving something."
        }
    },
    {
        "id": "root_ness_74",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -NESS mean?",
        "context": "Example words: happiness, darkness, kindness, awareness",
        "correct": "State or quality of being",
        "wrong": [
            "Full of",
            "Without",
            "Act or process of"
        ],
        "explanation": {
            "right": "-Ness means state/quality of being: happiness is the state of being happy, darkness is the quality of being dark.",
            "traps": [
                "'Full of' is the meaning of -ful.",
                "'Without' is the meaning of -less.",
                "'Act or process of' is the meaning of -ment or -tion."
            ],
            "hook": "HappiNESS = the STATE OF BEING happy."
        }
    },
    {
        "id": "root_ous_ious_75",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -OUS/-IOUS mean?",
        "context": "Example words: dangerous, curious, famous, spacious",
        "correct": "Full of or having the quality of",
        "wrong": [
            "Able to be",
            "Without or lacking",
            "One who is"
        ],
        "explanation": {
            "right": "-Ous/-ious means full of: dangerous means full of danger, curious means full of curiosity.",
            "traps": [
                "'Able to be' is the meaning of -able/-ible.",
                "'Without or lacking' is the meaning of -less.",
                "'One who is' is the meaning of -ist or -er."
            ],
            "hook": "DangerOUS = FULL OF danger."
        }
    },
    {
        "id": "root_phile_76",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -PHILE mean?",
        "context": "Example words: bibliophile, audiophile, Anglophile, philanthrope",
        "correct": "One who loves or is attracted to",
        "wrong": [
            "One who fears",
            "One who studies",
            "One who collects"
        ],
        "explanation": {
            "right": "-Phile means one who loves: a bibliophile loves books, an audiophile loves high-quality sound.",
            "traps": [
                "'One who fears' is the meaning of -phobe, the opposite.",
                "'One who studies' confuses love with academic study (-logist).",
                "'One who collects' is related (lovers often collect) but the root means love."
            ],
            "hook": "A biblioPHILE LOVES books (philos = love)."
        }
    },
    {
        "id": "root_phobe_77",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -PHOBE mean?",
        "context": "Example words: claustrophobe, arachnophobe, xenophobe, technophobe",
        "correct": "One who fears or hates",
        "wrong": [
            "One who loves",
            "One who avoids",
            "One who destroys"
        ],
        "explanation": {
            "right": "-Phobe means one who fears: a claustrophobe fears enclosed spaces, a xenophobe fears foreigners.",
            "traps": [
                "'One who loves' is the meaning of -phile, the opposite.",
                "'One who avoids' is a result of fear, but the root means fear itself.",
                "'One who destroys' confuses fear with aggression."
            ],
            "hook": "A claustrophPHOBE FEARS small spaces. Phobia = FEAR."
        }
    },
    {
        "id": "root_tion_sion_78",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -TION/-SION mean?",
        "context": "Example words: education, discussion, creation, decision",
        "correct": "Act, state, or process of",
        "wrong": [
            "One who does",
            "Able to be done",
            "Place of"
        ],
        "explanation": {
            "right": "-Tion/-sion means act/state/process: education is the process of educating, creation is the act of creating.",
            "traps": [
                "'One who does' is the meaning of -er/-or or -ist.",
                "'Able to be done' is the meaning of -able/-ible.",
                "'Place of' is the meaning of -arium."
            ],
            "hook": "EducaTION = the PROCESS OF educating."
        }
    },
    {
        "id": "root_ward_79",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -WARD mean?",
        "context": "Example words: forward, backward, homeward, upward",
        "correct": "In the direction of",
        "wrong": [
            "To protect or guard",
            "One who watches",
            "Away from"
        ],
        "explanation": {
            "right": "-Ward means in the direction of: forward is in the front direction, homeward is toward home.",
            "traps": [
                "'To protect or guard' confuses -ward with warden/guard.",
                "'One who watches' confuses -ward with watchward/warden.",
                "'Away from' is the opposite - -ward means toward, not away."
            ],
            "hook": "HomeWARD = IN THE DIRECTION OF home."
        }
    },
    {
        "id": "root_wise_80",
        "category": "roots",
        "subcategory": "suffix",
        "question": "What does the suffix -WISE mean?",
        "context": "Example words: clockwise, otherwise, likewise, lengthwise",
        "correct": "In the manner or direction of",
        "wrong": [
            "Having wisdom about",
            "Full of knowledge",
            "Without or lacking"
        ],
        "explanation": {
            "right": "-Wise means in the manner/direction of: clockwise means in the direction of a clock, likewise means in the same manner.",
            "traps": [
                "'Having wisdom about' confuses the suffix with the adjective 'wise' (intelligent).",
                "'Full of knowledge' confuses -wise with wisdom.",
                "'Without or lacking' confuses -wise with -less."
            ],
            "hook": "ClockWISE = IN THE DIRECTION OF a clock's hands."
        }
    },
    {
        "id": "writ_transitions_01",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice most effectively signals the contrast between the two sentences?",
        "context": "The city council approved funding for a new public transit line. ______, ridership on existing routes has been declining for three consecutive years.",
        "correct": "However",
        "wrong": [
            "Moreover",
            "Consequently",
            "Similarly"
        ],
        "explanation": {
            "right": "The second sentence presents information that contrasts with or complicates the first (spending more despite declining ridership), so a contrast transition is needed.",
            "traps": [
                "'Moreover' adds supporting info, but the second sentence complicates rather than supports the first.",
                "'Consequently' implies cause-effect, but declining ridership didn't result from the funding approval.",
                "'Similarly' implies the ideas are alike, but they actually contrast."
            ],
            "hook": "If sentence B undermines or complicates sentence A, use a contrast word: however, nevertheless, nonetheless."
        }
    },
    {
        "id": "writ_transitions_02",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition word best connects these sentences?",
        "context": "Coral reefs support roughly 25% of all marine species. ______, their destruction would have catastrophic effects on ocean biodiversity.",
        "correct": "Consequently",
        "wrong": [
            "Nevertheless",
            "Meanwhile",
            "Alternatively"
        ],
        "explanation": {
            "right": "'Consequently' correctly shows that the second sentence is a logical result of the first: because reefs support so many species, their loss would be catastrophic.",
            "traps": [
                "'Nevertheless' implies contrast, but the second sentence follows logically from the first.",
                "'Meanwhile' suggests simultaneous but unrelated events.",
                "'Alternatively' suggests a different option, which doesn't fit this cause-effect relationship."
            ],
            "hook": "When sentence B is a direct result of sentence A, use cause-effect transitions: consequently, therefore, as a result, thus."
        }
    },
    {
        "id": "writ_transitions_03",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice provides the most logical transition?",
        "context": "The experiment required participants to memorize a list of 30 words. ______, they were asked to recall as many words as possible after a 24-hour delay.",
        "correct": "Then",
        "wrong": [
            "However",
            "For instance",
            "In contrast"
        ],
        "explanation": {
            "right": "'Then' correctly indicates a sequence of events: first memorize, then recall after a delay.",
            "traps": [
                "'However' implies contrast, but both sentences describe steps in the same procedure.",
                "'For instance' implies the second sentence is an example, but it's actually the next step.",
                "'In contrast' suggests opposition between the ideas, but they're sequential steps."
            ],
            "hook": "For chronological sequences (step 1 followed by step 2), use time-order transitions: then, next, subsequently, afterward."
        }
    },
    {
        "id": "writ_transitions_04",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition most effectively links these ideas?",
        "context": "Many historians credit Gutenberg with inventing the printing press. ______, movable type had already been developed in China centuries earlier.",
        "correct": "In fact",
        "wrong": [
            "Furthermore",
            "As a result",
            "For example"
        ],
        "explanation": {
            "right": "'In fact' introduces a correction or surprising clarification that challenges the common assumption in the first sentence.",
            "traps": [
                "'Furthermore' would add to the claim about Gutenberg, but the second sentence actually challenges it.",
                "'As a result' implies causation that doesn't exist here.",
                "'For example' would introduce an illustration of the first point, but the second sentence contradicts it."
            ],
            "hook": "Use 'in fact' or 'actually' when sentence B corrects, sharpens, or surprises relative to sentence A."
        }
    },
    {
        "id": "writ_transitions_05",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice best introduces supporting evidence?",
        "context": "Urban green spaces have measurable benefits for mental health. ______, a 2023 study found that residents living within 300 meters of a park reported 20% lower anxiety levels.",
        "correct": "For example",
        "wrong": [
            "Nevertheless",
            "On the other hand",
            "Instead"
        ],
        "explanation": {
            "right": "'For example' correctly introduces a specific study that illustrates the general claim in the first sentence.",
            "traps": [
                "'Nevertheless' implies contrast, but the study supports rather than contradicts the claim.",
                "'On the other hand' suggests a different perspective, but the study reinforces the same point.",
                "'Instead' implies replacement or substitution, which doesn't fit here."
            ],
            "hook": "When sentence B provides a specific case supporting sentence A's general claim, use: for example, for instance, specifically."
        }
    },
    {
        "id": "writ_transitions_06",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition word is most appropriate here?",
        "context": "The vaccine proved highly effective against the original virus strain. ______, new variants with mutations in the spike protein showed partial resistance to the antibodies it produced.",
        "correct": "Nevertheless",
        "wrong": [
            "Therefore",
            "Likewise",
            "In addition"
        ],
        "explanation": {
            "right": "'Nevertheless' signals that despite the vaccine's effectiveness, a complicating factor (variant resistance) emerged.",
            "traps": [
                "'Therefore' implies the variants' resistance was a result of the vaccine's effectiveness, which is illogical.",
                "'Likewise' implies the second point is similar, but it actually presents a complication.",
                "'In addition' would add a supporting point, but the second sentence introduces a problem."
            ],
            "hook": "'Nevertheless' and 'nonetheless' mean 'despite that' - use them when sentence B acknowledges a complication without fully contradicting sentence A."
        }
    },
    {
        "id": "writ_transitions_07",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice provides the best transition between these sentences?",
        "context": "The building's exterior featured ornate Gothic arches and flying buttresses. ______, its interior was minimalist, with clean lines and sparse decoration.",
        "correct": "In contrast",
        "wrong": [
            "Moreover",
            "Accordingly",
            "Specifically"
        ],
        "explanation": {
            "right": "'In contrast' correctly signals the opposition between the ornate exterior and minimalist interior.",
            "traps": [
                "'Moreover' would add similar information, but the interior is the opposite of the exterior.",
                "'Accordingly' implies the interior style resulted from the exterior, which doesn't make sense.",
                "'Specifically' would narrow the focus, but the interior description introduces an opposing quality."
            ],
            "hook": "Use 'in contrast' or 'conversely' when two things are being directly compared and shown to differ."
        }
    },
    {
        "id": "writ_transitions_08",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition best fits the logical relationship?",
        "context": "The company invested $50 million in renewable energy infrastructure. ______, it pledged to eliminate single-use plastics from all its facilities by 2027.",
        "correct": "Additionally",
        "wrong": [
            "However",
            "As a result",
            "On the contrary"
        ],
        "explanation": {
            "right": "'Additionally' correctly signals that the plastic pledge is another action in the same direction (environmental commitment) as the energy investment.",
            "traps": [
                "'However' implies contrast, but both actions serve the same environmental goal.",
                "'As a result' implies the plastic pledge was caused by the energy investment, but they're parallel initiatives.",
                "'On the contrary' suggests direct opposition, but both sentences describe pro-environment actions."
            ],
            "hook": "When sentence B adds another point in the same direction as sentence A, use additive transitions: additionally, moreover, furthermore, also."
        }
    },
    {
        "id": "writ_transitions_09",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice most logically connects these ideas?",
        "context": "Dr. Patel hypothesized that sleep deprivation impairs creative problem-solving. ______, she designed an experiment comparing the performance of well-rested and sleep-deprived participants on divergent thinking tasks.",
        "correct": "To test this",
        "wrong": [
            "Surprisingly",
            "In other words",
            "On the other hand"
        ],
        "explanation": {
            "right": "'To test this' shows that the experiment was designed as a direct response to the hypothesis, clarifying the purpose of the action.",
            "traps": [
                "'Surprisingly' implies the experiment was unexpected, but it logically follows from the hypothesis.",
                "'In other words' would rephrase the hypothesis, but the second sentence describes a new action.",
                "'On the other hand' implies contrast, but the experiment supports rather than opposes the hypothesis."
            ],
            "hook": "When sentence B describes an action taken to investigate or address sentence A, use purpose transitions: to test this, to that end, for this reason."
        }
    },
    {
        "id": "writ_transitions_10",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition word best fits the blank?",
        "context": "The proposed highway expansion would reduce commute times by an estimated 15 minutes. ______, it would require the demolition of 200 homes in established neighborhoods.",
        "correct": "At the same time",
        "wrong": [
            "In other words",
            "As a result",
            "For instance"
        ],
        "explanation": {
            "right": "'At the same time' introduces a simultaneous consideration that complicates the benefit, acknowledging both the positive and negative aspects.",
            "traps": [
                "'In other words' would rephrase the first sentence, but the second introduces a new concern.",
                "'As a result' implies demolition is caused by reduced commute times, confusing the logic.",
                "'For instance' would give an example of reduced commute times, but demolition is a separate issue."
            ],
            "hook": "Use 'at the same time' or 'simultaneously' when introducing a counterpoint that coexists with rather than negates the first point."
        }
    },
    {
        "id": "writ_transitions_11",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice provides the most logical transition?",
        "context": "The Great Barrier Reef has experienced severe bleaching events in recent years due to rising ocean temperatures. ______, marine biologists have documented a 50% decline in coral cover since 1995.",
        "correct": "Indeed",
        "wrong": [
            "Conversely",
            "Alternatively",
            "Regardless"
        ],
        "explanation": {
            "right": "'Indeed' intensifies or confirms the first statement by providing supporting data that strengthens the same point.",
            "traps": [
                "'Conversely' implies the opposite, but declining coral cover supports the bleaching claim.",
                "'Alternatively' suggests a different scenario, not a confirmation.",
                "'Regardless' implies the second point holds despite the first, but they actually reinforce each other."
            ],
            "hook": "Use 'indeed' when sentence B provides evidence that strengthens or confirms sentence A's claim."
        }
    },
    {
        "id": "writ_transitions_12",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition most effectively connects these sentences?",
        "context": "Ancient Roman engineers built aqueducts that transported water across vast distances using gravity alone. ______, some of these structures still stand today, a testament to their sophisticated construction techniques.",
        "correct": "Remarkably",
        "wrong": [
            "Therefore",
            "By contrast",
            "Meanwhile"
        ],
        "explanation": {
            "right": "'Remarkably' introduces the surprising fact that these ancient structures have endured, emphasizing how impressive this is.",
            "traps": [
                "'Therefore' implies the structures standing is a logical consequence, but longevity isn't an automatic result of using gravity.",
                "'By contrast' implies opposition between the two sentences, but the second sentence builds on the first.",
                "'Meanwhile' suggests unrelated simultaneous events, but the sentences are closely connected."
            ],
            "hook": "Use 'remarkably' or 'surprisingly' when sentence B presents an impressive or unexpected fact related to sentence A."
        }
    },
    {
        "id": "writ_transitions_13",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition best indicates a summary?",
        "context": "The study found links between social media use and anxiety, documented correlations with sleep disruption, and identified associations with decreased face-to-face interaction. ______, excessive screen time appears to affect multiple dimensions of adolescent well-being.",
        "correct": "In short",
        "wrong": [
            "Next",
            "Granted",
            "Specifically"
        ],
        "explanation": {
            "right": "'In short' correctly signals that the second sentence is a concise summary of the multiple findings listed in the first.",
            "traps": [
                "'Next' implies a new step or sequence, but the second sentence wraps up rather than continues.",
                "'Granted' concedes a point, which doesn't fit a summary function.",
                "'Specifically' would narrow the focus, but the second sentence broadens to a general conclusion."
            ],
            "hook": "For concluding summaries, use: in short, in summary, overall, in brief, ultimately."
        }
    },
    {
        "id": "writ_transitions_14",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice best introduces a concession?",
        "context": "______ the initial costs of solar panel installation can be significant, homeowners typically recoup their investment within eight years through reduced energy bills.",
        "correct": "Although",
        "wrong": [
            "Because",
            "Since",
            "Unless"
        ],
        "explanation": {
            "right": "'Although' introduces a concession (high initial cost) before the main point (long-term savings), creating a balanced argument.",
            "traps": [
                "'Because' would make the high cost the reason for savings, which is illogical.",
                "'Since' implies the same causal relationship as 'because.'",
                "'Unless' introduces a condition, changing the meaning entirely."
            ],
            "hook": "Use 'although,' 'while,' or 'even though' to introduce a point you'll concede before making your main argument."
        }
    },
    {
        "id": "writ_transitions_15",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition best connects these sentences about a scientific process?",
        "context": "The researchers collected soil samples from twelve different locations in the watershed. ______, each sample was tested for heavy metal concentrations using atomic absorption spectroscopy.",
        "correct": "Subsequently",
        "wrong": [
            "In contrast",
            "For this reason",
            "Nonetheless"
        ],
        "explanation": {
            "right": "'Subsequently' correctly indicates that the testing happened after the collection, maintaining chronological order.",
            "traps": [
                "'In contrast' implies opposition between collection and testing, but they're sequential steps.",
                "'For this reason' implies causation rather than simple sequence.",
                "'Nonetheless' implies the testing happened despite some obstacle, which isn't indicated."
            ],
            "hook": "For steps in a process or chronological narrative, use: subsequently, then, next, afterward, following this."
        }
    },
    {
        "id": "writ_transitions_16",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice most logically completes the transition?",
        "context": "Some economists argue that automation will eliminate millions of jobs. ______, others contend that new technologies historically create more jobs than they destroy.",
        "correct": "By contrast",
        "wrong": [
            "Similarly",
            "In addition",
            "As a result"
        ],
        "explanation": {
            "right": "'By contrast' signals that the second group of economists holds an opposing view to the first.",
            "traps": [
                "'Similarly' implies both groups agree, but they hold opposing views.",
                "'In addition' would add a supporting point, but the second view opposes the first.",
                "'As a result' implies causation between the two views, which doesn't exist."
            ],
            "hook": "When presenting two opposing viewpoints, use contrast transitions: by contrast, conversely, on the other hand, however."
        }
    },
    {
        "id": "writ_transitions_17",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition best fits the relationship between these sentences?",
        "context": "The novelist spent three years researching 18th-century maritime law for her historical fiction. ______, the book's courtroom scenes are praised for their authentic legal detail.",
        "correct": "As a result",
        "wrong": [
            "In contrast",
            "Meanwhile",
            "Granted"
        ],
        "explanation": {
            "right": "'As a result' shows that the praise for authentic detail is a direct consequence of the extensive research.",
            "traps": [
                "'In contrast' implies the praise contradicts the research, but it's actually caused by it.",
                "'Meanwhile' suggests unrelated simultaneous events rather than cause and effect.",
                "'Granted' would concede a point, but the sentence isn't making a concession."
            ],
            "hook": "When sentence B is a direct outcome of what's described in sentence A, use: as a result, consequently, therefore, thus."
        }
    },
    {
        "id": "writ_transitions_18",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition best introduces this elaboration?",
        "context": "The city's air quality has improved dramatically since the factory closures. ______, levels of particulate matter have dropped by 40%, and asthma-related hospital visits have decreased by a third.",
        "correct": "Specifically",
        "wrong": [
            "However",
            "Alternatively",
            "On the contrary"
        ],
        "explanation": {
            "right": "'Specifically' introduces precise data that elaborates on and quantifies the general claim of 'improved dramatically.'",
            "traps": [
                "'However' implies contrast, but the data supports the improvement claim.",
                "'Alternatively' suggests a different possibility, not elaboration.",
                "'On the contrary' implies the data contradicts the first sentence, but it confirms it."
            ],
            "hook": "Use 'specifically' or 'in particular' when sentence B provides precise details that elaborate on sentence A's general claim."
        }
    },
    {
        "id": "writ_transitions_19",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which transition most effectively connects these ideas?",
        "context": "The orchestra's interpretation of the symphony was technically flawless. ______, critics noted that the performance lacked the emotional depth that distinguishes a good rendition from a great one.",
        "correct": "Even so",
        "wrong": [
            "Consequently",
            "Likewise",
            "In other words"
        ],
        "explanation": {
            "right": "'Even so' acknowledges the technical excellence while introducing the criticism, showing that despite being flawless, something was still lacking.",
            "traps": [
                "'Consequently' implies the criticism resulted from the flawlessness, which reverses the logic.",
                "'Likewise' implies critics agreed the performance was flawless, missing the contrast.",
                "'In other words' would rephrase the first sentence, but the second introduces a new criticism."
            ],
            "hook": "'Even so' and 'still' concede the first point but introduce a complication: 'Yes, that's true, but...'"
        }
    },
    {
        "id": "writ_transitions_20",
        "category": "writing",
        "subcategory": "transitions",
        "question": "Which choice provides the most effective transition between paragraphs?",
        "context": "[End of previous paragraph: The discovery of penicillin in 1928 revolutionized the treatment of bacterial infections.] ______, the widespread overuse of antibiotics has created a new crisis: drug-resistant bacteria that threaten to render these medications ineffective.",
        "correct": "In the decades since",
        "wrong": [
            "For example",
            "Similarly",
            "In other words"
        ],
        "explanation": {
            "right": "'In the decades since' provides both a time transition and signals a shift from the positive discovery to its problematic long-term consequences.",
            "traps": [
                "'For example' would illustrate penicillin's revolution, but the new paragraph shifts to a problem.",
                "'Similarly' implies the resistance crisis is like the discovery, but it's actually a consequence over time.",
                "'In other words' would rephrase the discovery, but the new paragraph introduces a different topic."
            ],
            "hook": "Between paragraphs, transitions often need to do double duty: signal time passage AND shift in focus or tone."
        }
    },
    {
        "id": "writ_combining_01",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines the underlined sentences?",
        "context": "The archaeologist discovered a clay tablet. The tablet contained symbols that resembled an unknown writing system.",
        "correct": "The archaeologist discovered a clay tablet containing symbols that resembled an unknown writing system.",
        "wrong": [
            "The archaeologist discovered a clay tablet, and it contained symbols that resembled an unknown writing system.",
            "The archaeologist discovered a clay tablet; the tablet contained symbols that resembled an unknown writing system.",
            "The archaeologist discovered a clay tablet. It contained symbols resembling an unknown writing system."
        ],
        "explanation": {
            "right": "A participial phrase ('containing symbols...') efficiently combines the sentences by embedding the second idea as a modifier of 'tablet,' eliminating redundancy.",
            "traps": [
                "The coordinating conjunction version is grammatically correct but wordy and doesn't show the relationship between ideas clearly.",
                "The semicolon version repeats 'tablet' unnecessarily and doesn't truly combine the sentences.",
                "This version keeps them as two sentences, which doesn't combine them at all."
            ],
            "hook": "When sentence B describes sentence A's noun, convert B into a participial phrase (-ing or -ed) modifying that noun."
        }
    },
    {
        "id": "writ_combining_02",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "Marie Curie won the Nobel Prize in Physics in 1903. She won the Nobel Prize in Chemistry in 1911. She remains the only person to win Nobel Prizes in two different sciences.",
        "correct": "Marie Curie, who won Nobel Prizes in Physics (1903) and Chemistry (1911), remains the only person to have won in two different sciences.",
        "wrong": [
            "Marie Curie won the Nobel Prize in Physics in 1903 and then she won the Nobel Prize in Chemistry in 1911, and she remains the only person to win in two different sciences.",
            "Marie Curie won Nobel Prizes in Physics in 1903 and Chemistry in 1911. She remains the only person to win in two different sciences.",
            "Winning the Nobel Prize in Physics in 1903 and Chemistry in 1911, Marie Curie remains the only person to win in two different sciences, which she did."
        ],
        "explanation": {
            "right": "The nonrestrictive clause ('who won...') efficiently packages the background information while making the main clause about her unique distinction, which is the most important point.",
            "traps": [
                "Chaining three clauses with 'and' is wordy, monotonous, and doesn't emphasize the main point.",
                "This keeps two sentences and doesn't fully integrate the information into one effective sentence.",
                "The last phrase 'which she did' is redundant and the dangling modifier structure is awkward."
            ],
            "hook": "Use a 'who' clause to embed background facts, keeping the main clause for the most important idea."
        }
    },
    {
        "id": "writ_combining_03",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "The river flooded its banks last spring. The flooding destroyed crops across three counties. This caused $40 million in agricultural losses.",
        "correct": "When the river flooded its banks last spring, it destroyed crops across three counties, causing $40 million in agricultural losses.",
        "wrong": [
            "The river flooded its banks last spring, and the flooding destroyed crops across three counties, and this caused $40 million in agricultural losses.",
            "The river flooded its banks last spring; crops across three counties were destroyed; $40 million in agricultural losses resulted.",
            "Last spring the river flooded its banks destroying crops across three counties which caused $40 million in agricultural losses."
        ],
        "explanation": {
            "right": "The subordinate clause ('When...') establishes timing, the main clause states the key action, and the participial phrase ('causing...') shows the result, creating a clear logical flow.",
            "traps": [
                "Three clauses joined by 'and' creates a run-on feel and doesn't show the causal chain clearly.",
                "Three semicolon-separated clauses feel choppy and passive, losing the narrative flow.",
                "Missing commas make this a grammatically incorrect run-on with an ambiguous 'which' reference."
            ],
            "hook": "For cause-effect chains, use subordination (when/because) + main clause + participial result (-ing)."
        }
    },
    {
        "id": "writ_combining_04",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines the underlined sentences?",
        "context": "The telescope was launched in 1990. It orbits Earth at an altitude of 547 kilometers. It has captured images of galaxies over 13 billion light-years away.",
        "correct": "Launched in 1990 and orbiting Earth at 547 kilometers, the telescope has captured images of galaxies over 13 billion light-years away.",
        "wrong": [
            "The telescope was launched in 1990 and orbits Earth at an altitude of 547 kilometers and has captured images of galaxies over 13 billion light-years away.",
            "The telescope, which was launched in 1990, orbits Earth at an altitude of 547 kilometers, and it has captured images of galaxies over 13 billion light-years away.",
            "The telescope was launched in 1990. Orbiting Earth at 547 kilometers, it has captured images of galaxies over 13 billion light-years away."
        ],
        "explanation": {
            "right": "The participial phrases ('Launched...' and 'orbiting...') compress background details into modifiers, letting the main clause highlight the telescope's most impressive achievement.",
            "traps": [
                "Three predicates joined by 'and' treats all facts as equally important, burying the impressive achievement.",
                "The relative clause version is grammatically correct but long and doesn't emphasize the key accomplishment.",
                "This still uses two sentences, failing to combine all three ideas effectively."
            ],
            "hook": "Put background information in opening participial phrases and save the main clause for the most significant or interesting fact."
        }
    },
    {
        "id": "writ_combining_05",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "Dr. Chen studies sleep patterns in adolescents. She has found that early school start times correlate with lower academic performance.",
        "correct": "Dr. Chen, who studies sleep patterns in adolescents, has found that early school start times correlate with lower academic performance.",
        "wrong": [
            "Dr. Chen studies sleep patterns in adolescents, and she has found that early school start times correlate with lower academic performance.",
            "Studying sleep patterns in adolescents, Dr. Chen found early school start times correlating with lower academic performance.",
            "Dr. Chen studies sleep patterns in adolescents; she has found that early school start times correlate with lower academic performance."
        ],
        "explanation": {
            "right": "The nonrestrictive 'who' clause neatly identifies Dr. Chen's field while the main clause delivers her finding, making the research conclusion the focus.",
            "traps": [
                "The 'and' conjunction treats both ideas as equally weighted independent clauses without showing their relationship.",
                "The participial opener is grammatically acceptable but creates an awkward 'correlating' construction that sounds unnatural.",
                "The semicolon keeps the sentences structurally separate without truly integrating them."
            ],
            "hook": "Use a nonrestrictive 'who' clause for credentials or background, keeping the main clause for the person's key action or finding."
        }
    },
    {
        "id": "writ_combining_06",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "The painting depicts a woman reading a letter by a window. The painting was completed by Vermeer around 1657. It is now housed in the Gemaldegalerie in Dresden.",
        "correct": "Completed by Vermeer around 1657, the painting of a woman reading a letter by a window is now housed in the Gemaldegalerie in Dresden.",
        "wrong": [
            "The painting depicts a woman reading a letter by a window and was completed by Vermeer around 1657 and is now housed in the Gemaldegalerie in Dresden.",
            "The painting, which depicts a woman reading a letter by a window, was completed by Vermeer around 1657, and it is now housed in the Gemaldegalerie in Dresden.",
            "Vermeer completed the painting around 1657, and it depicts a woman reading a letter by a window, and it is now in the Gemaldegalerie in Dresden."
        ],
        "explanation": {
            "right": "The past participial opener ('Completed by...') handles attribution and date, the subject includes the description, and the predicate states the current location - three facts in one clear sentence.",
            "traps": [
                "Three predicates joined by 'and' creates a tedious list without hierarchy.",
                "The relative clause version is wordy and buries the current location as an afterthought.",
                "Multiple 'and' conjunctions with repeated 'it' is choppy and repetitive."
            ],
            "hook": "When combining facts about an object, use participial phrases for history/context and the main clause for the most current or relevant information."
        }
    },
    {
        "id": "writ_combining_07",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "The mayor proposed a bike-sharing program. The program would add 500 bicycles at 50 stations across downtown. The goal is to reduce traffic congestion.",
        "correct": "To reduce traffic congestion, the mayor proposed a bike-sharing program that would place 500 bicycles at 50 stations across downtown.",
        "wrong": [
            "The mayor proposed a bike-sharing program, which would add 500 bicycles at 50 stations across downtown, because the goal is to reduce traffic congestion.",
            "The mayor proposed a bike-sharing program adding 500 bicycles at 50 stations across downtown to reduce traffic congestion, which was the goal.",
            "A bike-sharing program was proposed by the mayor with 500 bicycles at 50 stations across downtown and the goal of reducing traffic congestion."
        ],
        "explanation": {
            "right": "Leading with the purpose ('To reduce...') gives context, the main clause identifies the actor and proposal, and the relative clause ('that would place...') provides specifics.",
            "traps": [
                "Ending with 'because the goal is to reduce' is awkward and buries the purpose at the end.",
                "The 'which was the goal' at the end is redundant and the sentence has unclear modifier placement.",
                "Passive voice ('was proposed') weakens the sentence and 'with 500 bicycles' creates an ambiguous modifier."
            ],
            "hook": "Lead with purpose (To + verb) when it clarifies WHY an action is being taken, then give details in a relative clause."
        }
    },
    {
        "id": "writ_combining_08",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "The novelist wrote in a cramped apartment above a bakery. She produced three novels in five years. All three became bestsellers.",
        "correct": "Writing in a cramped apartment above a bakery, the novelist produced three novels in five years, all of which became bestsellers.",
        "wrong": [
            "The novelist wrote in a cramped apartment above a bakery, and she produced three novels in five years, and all three became bestsellers.",
            "The novelist, writing in a cramped apartment above a bakery, produced three novels in five years and all three became bestsellers.",
            "In a cramped apartment above a bakery the novelist wrote three novels in five years that all became bestsellers."
        ],
        "explanation": {
            "right": "The participial opener ('Writing in...') sets the scene, the main clause delivers the impressive productivity, and the appositive phrase adds the bestseller detail.",
            "traps": [
                "Three 'and' clauses are monotonous and don't emphasize any one fact over the others.",
                "Missing comma before 'and all three' creates a grammatical error in the compound structure.",
                "Missing comma after 'bakery' and ambiguous 'that' (did the years become bestsellers or the novels?) makes this unclear."
            ],
            "hook": "Use participial phrases to set the scene, save the main clause for the key achievement, and add impressive results in an appended phrase."
        }
    },
    {
        "id": "writ_combining_09",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "The vaccine was developed in record time. It normally takes ten to fifteen years to develop a vaccine. This one was ready in under a year.",
        "correct": "Though vaccine development normally takes ten to fifteen years, this vaccine was ready in under a year.",
        "wrong": [
            "The vaccine was developed in record time because it normally takes ten to fifteen years to develop a vaccine but this one was ready in under a year.",
            "Normally taking ten to fifteen years, vaccine development was achieved in under a year for this vaccine, which was record time.",
            "The vaccine was developed in record time; it normally takes ten to fifteen years to develop a vaccine, and this one was ready in under a year."
        ],
        "explanation": {
            "right": "The concessive clause ('Though...') provides the context of normal timelines, making the main clause's 'under a year' dramatically clear. It's concise and eliminates the redundant first sentence.",
            "traps": [
                "This version is a run-on that confuses the logic by using 'because' incorrectly.",
                "Awkward construction with dangling modifier and redundant 'which was record time.'",
                "The semicolon version is wordy and doesn't truly integrate the information."
            ],
            "hook": "Use 'though' or 'while' to set up a norm or expectation, then let the main clause deliver the surprising exception."
        }
    },
    {
        "id": "writ_combining_10",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "The artist uses recycled materials in her sculptures. These materials include discarded electronics, old car parts, and broken furniture. Her work comments on consumer waste.",
        "correct": "Using recycled materials such as discarded electronics, old car parts, and broken furniture, the artist creates sculptures that comment on consumer waste.",
        "wrong": [
            "The artist uses recycled materials in her sculptures, including discarded electronics, old car parts, and broken furniture, and her work comments on consumer waste.",
            "The artist uses recycled materials (discarded electronics, old car parts, and broken furniture) in her sculptures; her work comments on consumer waste.",
            "Discarded electronics, old car parts, and broken furniture are recycled materials the artist uses in her sculptures which comment on consumer waste."
        ],
        "explanation": {
            "right": "The participial phrase with examples ('Using recycled materials such as...') efficiently packages the method and materials, while the main clause connects them to the artistic purpose.",
            "traps": [
                "Long compound sentence with 'and' joining unequal ideas; the comma before 'and her work' is ambiguous.",
                "The parenthetical works but the semicolon creates two disconnected thoughts without showing their relationship.",
                "Leading with the materials list is awkward and buries the artist as subject; 'which' reference is ambiguous."
            ],
            "hook": "When combining method + examples + purpose, put method and examples in an opening phrase and purpose in the main clause."
        }
    },
    {
        "id": "writ_combining_11",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "The library was built in 1923. It serves over 10,000 patrons monthly. The city council is considering its demolition.",
        "correct": "Despite serving over 10,000 patrons monthly since its construction in 1923, the library faces possible demolition by the city council.",
        "wrong": [
            "The library was built in 1923 and it serves over 10,000 patrons monthly but the city council is considering its demolition.",
            "Built in 1923, the library serves over 10,000 patrons monthly; however, the city council is considering its demolition.",
            "The library was built in 1923, serves over 10,000 patrons monthly, and is being considered for demolition by the city council."
        ],
        "explanation": {
            "right": "'Despite' in the opening phrase creates dramatic tension by juxtaposing the library's long service with the threat of demolition, combining all three ideas with clear logical relationships.",
            "traps": [
                "Missing commas before 'and' and 'but' make this a run-on, and the flat structure doesn't show the irony.",
                "While grammatically correct, using two sentences (main + however) doesn't achieve a single combined sentence as effectively.",
                "The parallel predicate structure treats all three facts equally, losing the contrast between service and threatened demolition."
            ],
            "hook": "Use 'despite' + gerund phrase when you want to highlight irony or tension between what something deserves and what it gets."
        }
    },
    {
        "id": "writ_combining_12",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "The candidate won the rural vote by a wide margin. She lost the urban vote decisively. The election results were extremely close overall.",
        "correct": "Although the candidate won the rural vote by a wide margin, she lost the urban vote decisively, making the overall election results extremely close.",
        "wrong": [
            "The candidate won the rural vote by a wide margin, but she lost the urban vote decisively, and the election results were extremely close overall.",
            "The candidate won the rural vote by a wide margin; however, she lost the urban vote decisively. The election results were extremely close overall.",
            "Winning the rural vote by a wide margin but losing the urban vote decisively, the overall election results were extremely close for the candidate."
        ],
        "explanation": {
            "right": "The subordinate clause ('Although...') establishes the positive, the main clause delivers the negative, and the participial phrase ('making...') shows the combined result.",
            "traps": [
                "Two conjunctions ('but' and 'and') create a flat structure without clear emphasis.",
                "This uses a semicolon and a separate sentence, not truly combining all three into one.",
                "Dangling modifier: 'Winning...but losing' modifies 'results' instead of the candidate."
            ],
            "hook": "Watch for dangling modifiers when combining sentences - the subject of the participial phrase must match the subject of the main clause."
        }
    },
    {
        "id": "writ_combining_13",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "Saturn's rings appear solid from a distance. They are actually composed of billions of individual ice particles. These particles range in size from grains of sand to houses.",
        "correct": "Though Saturn's rings appear solid from a distance, they are actually composed of billions of ice particles ranging in size from grains of sand to houses.",
        "wrong": [
            "Saturn's rings appear solid from a distance, but they are actually composed of billions of individual ice particles, and these particles range in size from grains of sand to houses.",
            "Saturn's rings, which appear solid from a distance, are actually composed of billions of individual ice particles that range in size from grains of sand to houses.",
            "Appearing solid from a distance, Saturn's rings are billions of ice particles. These range from sand-grain-sized to house-sized."
        ],
        "explanation": {
            "right": "The concessive clause ('Though...') sets up the illusion, the main clause reveals reality, and the participial phrase ('ranging...') adds detail without a new clause.",
            "traps": [
                "Two conjunctions chain three clauses without clear emphasis on the surprising reality.",
                "While grammatically correct, the nested relative clauses ('which...that...') make the sentence harder to follow.",
                "This splits into two sentences and oversimplifies, losing the smooth flow of a single combined sentence."
            ],
            "hook": "Use 'though' for appearance vs. reality combinations: appearance in the subordinate clause, reality in the main clause."
        }
    },
    {
        "id": "writ_combining_14",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "The musician began playing piano at age four. She gave her first public concert at age seven. She signed a recording contract at age twelve.",
        "correct": "The musician, who began playing piano at age four and gave her first public concert at age seven, signed a recording contract at age twelve.",
        "wrong": [
            "The musician began playing piano at age four, gave her first public concert at age seven, and signed a recording contract at age twelve.",
            "Beginning to play piano at age four and giving her first public concert at age seven, the musician signed a recording contract at age twelve.",
            "The musician began playing piano at age four; she gave her first public concert at age seven; she signed a recording contract at age twelve."
        ],
        "explanation": {
            "right": "The 'who' clause packages the early milestones as background, making the recording contract (the climactic achievement) the main predicate.",
            "traps": [
                "While concise, the three-item series treats all milestones as equally important, losing the sense of building toward the contract.",
                "The participial phrase version works but is slightly less elegant and harder to parse with two gerunds stacked.",
                "Three semicolons create a choppy, list-like effect without truly combining the sentences."
            ],
            "hook": "In chronological combinations, put earlier events in a subordinate structure and let the main clause deliver the climax."
        }
    },
    {
        "id": "writ_combining_15",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "The company recalled 2 million vehicles. A software glitch caused the braking system to malfunction. No injuries were reported.",
        "correct": "After a software glitch caused braking system malfunctions, the company recalled 2 million vehicles, though no injuries were reported.",
        "wrong": [
            "The company recalled 2 million vehicles because a software glitch caused the braking system to malfunction, and no injuries were reported.",
            "A software glitch caused the braking system to malfunction, so the company recalled 2 million vehicles; no injuries were reported.",
            "The company recalled 2 million vehicles due to a braking system software glitch and no injuries were reported."
        ],
        "explanation": {
            "right": "The temporal clause ('After...') establishes the cause, the main clause states the action taken, and the concessive clause ('though...') adds the reassuring detail - creating a clear narrative arc.",
            "traps": [
                "'And no injuries were reported' feels tacked on without showing its relationship to the recall.",
                "The semicolon separates the injury information without showing whether it's a relief, a contrast, or additional detail.",
                "Missing comma before 'and' creates a run-on, and 'due to' is less clear than showing the causal sequence."
            ],
            "hook": "For event + cause + outcome combinations, try: cause clause, then main event, then result/context at the end."
        }
    },
    {
        "id": "writ_combining_16",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "Monarch butterflies migrate up to 3,000 miles each fall. They travel from Canada to central Mexico. Scientists still do not fully understand how they navigate.",
        "correct": "Each fall, monarch butterflies migrate up to 3,000 miles from Canada to central Mexico, yet scientists still do not fully understand how they navigate.",
        "wrong": [
            "Monarch butterflies migrate up to 3,000 miles each fall, traveling from Canada to central Mexico, and scientists still do not fully understand how they navigate.",
            "Monarch butterflies migrate up to 3,000 miles each fall from Canada to central Mexico; scientists still do not fully understand how they navigate.",
            "Migrating up to 3,000 miles from Canada to central Mexico each fall, scientists still do not fully understand how monarch butterflies navigate."
        ],
        "explanation": {
            "right": "Merging the distance and route into one clause and using 'yet' to introduce the mystery creates a clear two-part sentence: impressive fact + lingering question.",
            "traps": [
                "The participial phrase 'traveling' works but 'and scientists' tacked on doesn't clearly show the contrast between the feat and the mystery.",
                "The semicolon version works but doesn't signal the contrast relationship between the migration and the scientific mystery.",
                "Dangling modifier: 'Migrating...' appears to modify 'scientists' rather than 'butterflies.'"
            ],
            "hook": "Always check: does the participial phrase's implied subject match the main clause's actual subject? If not, it's a dangling modifier."
        }
    },
    {
        "id": "writ_combining_17",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "The study surveyed 5,000 participants. The participants were between the ages of 18 and 65. The study lasted three years.",
        "correct": "The three-year study surveyed 5,000 participants between the ages of 18 and 65.",
        "wrong": [
            "The study surveyed 5,000 participants who were between the ages of 18 and 65 and lasted three years.",
            "The study, which lasted three years, surveyed 5,000 participants, and they were between the ages of 18 and 65.",
            "Lasting three years, the study surveyed 5,000 participants. They were between the ages of 18 and 65."
        ],
        "explanation": {
            "right": "Converting 'three years' into an adjective and 'between the ages' into a prepositional phrase creates one tight sentence with no unnecessary words.",
            "traps": [
                "'And lasted three years' ambiguously modifies either 'participants' or 'study,' creating confusion about what lasted three years.",
                "The relative clause version is wordy and the final 'and they were' clause is awkward and disconnected.",
                "Splitting into two sentences fails to combine all information into one unit."
            ],
            "hook": "Convert separate sentences about attributes into adjectives or prepositional phrases: 'a study that lasted three years' becomes 'a three-year study.'"
        }
    },
    {
        "id": "writ_combining_18",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "The documentary premiered at the Sundance Film Festival. It received standing ovations from audiences. Critics called it the most important environmental film of the decade.",
        "correct": "After premiering at the Sundance Film Festival to standing ovations, the documentary was hailed by critics as the most important environmental film of the decade.",
        "wrong": [
            "The documentary premiered at the Sundance Film Festival, and it received standing ovations from audiences, and critics called it the most important environmental film of the decade.",
            "The documentary premiered at the Sundance Film Festival. Receiving standing ovations from audiences, critics called it the most important environmental film of the decade.",
            "Premiering at Sundance and receiving standing ovations, critics called the documentary the most important environmental film of the decade."
        ],
        "explanation": {
            "right": "The temporal phrase ('After premiering...') compresses the festival debut and audience reaction, while the main clause delivers the critical acclaim as the sentence's key point.",
            "traps": [
                "Three clauses joined by 'and' is monotonous and doesn't build toward the most impressive claim.",
                "The second sentence has a dangling modifier: 'Receiving standing ovations' appears to modify 'critics.'",
                "Another dangling modifier: 'Premiering at Sundance' appears to modify 'critics' instead of the documentary."
            ],
            "hook": "The subject immediately after a participial phrase must be the one performing the action in that phrase."
        }
    },
    {
        "id": "writ_combining_19",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which choice most effectively combines these sentences?",
        "context": "The new policy requires all employees to complete cybersecurity training. The training must be completed annually. Failure to comply results in suspension of network access.",
        "correct": "Under the new policy, employees who fail to complete the required annual cybersecurity training will have their network access suspended.",
        "wrong": [
            "The new policy requires all employees to complete cybersecurity training annually, and failure to comply results in suspension of network access.",
            "All employees must complete cybersecurity training annually per the new policy; failure to comply results in the suspension of network access.",
            "The new policy requires annual cybersecurity training for all employees, and if they fail to comply their network access will be suspended."
        ],
        "explanation": {
            "right": "Restructuring around the consequence creates a more impactful sentence: the prepositional phrase sets context, and the main clause combines the requirement with its enforcement.",
            "traps": [
                "The 'and' joining two clauses works but feels like a flat list rather than an integrated policy statement.",
                "The semicolon version keeps the ideas too separate and reads like a list of rules rather than a unified statement.",
                "The 'and if' construction is grammatically correct but wordy and doesn't integrate the information as smoothly."
            ],
            "hook": "Sometimes the best combination requires restructuring: put the most important information (consequence) in the main clause, not at the end."
        }
    },
    {
        "id": "writ_combining_20",
        "category": "writing",
        "subcategory": "combining",
        "question": "Which revision most effectively combines these sentences?",
        "context": "The bridge was designed by Santiago Calatrava. It features a single 400-foot pylon. Cables extend from the pylon to support the roadway below.",
        "correct": "Designed by Santiago Calatrava, the bridge features a single 400-foot pylon from which cables extend to support the roadway below.",
        "wrong": [
            "The bridge was designed by Santiago Calatrava, and it features a single 400-foot pylon, and cables extend from the pylon to support the roadway below.",
            "Santiago Calatrava designed the bridge featuring a single 400-foot pylon with cables extending from it to support the roadway below.",
            "The bridge, designed by Santiago Calatrava, features a single 400-foot pylon; cables extend from the pylon to support the roadway below."
        ],
        "explanation": {
            "right": "The past participial opener ('Designed by...') handles attribution, the main clause introduces the pylon, and 'from which' elegantly connects the cables without starting a new clause.",
            "traps": [
                "Three 'and' clauses create a flat, list-like structure without architectural elegance matching the subject.",
                "While grammatically correct, this version buries the designer's name and the 'with cables extending from it' is awkward.",
                "The semicolon divides the structural description unnecessarily, and 'the pylon' is repeated."
            ],
            "hook": "Use 'from which,' 'in which,' or 'on which' to connect related details without starting a new clause or repeating a noun."
        }
    },
    {
        "id": "writ_rhetoric_01",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer is considering adding the following sentence: 'In 2019 alone, plastic waste in the ocean increased by an estimated 8 million metric tons.' Should the writer make this addition?",
        "context": "Paragraph: Ocean pollution poses an existential threat to marine ecosystems worldwide. [Proposed insertion point] Conservation organizations have called for immediate international action to address the crisis.",
        "correct": "Yes, because it provides specific evidence that supports the paragraph's claim about the severity of ocean pollution.",
        "wrong": [
            "Yes, because it introduces a new argument about the timeline of ocean pollution.",
            "No, because it distracts from the paragraph's focus on conservation organizations.",
            "No, because it repeats information that has already been stated in the paragraph."
        ],
        "explanation": {
            "right": "The statistic directly quantifies the 'existential threat' mentioned in the first sentence, strengthening the paragraph's argument with concrete evidence before the call to action.",
            "traps": [
                "The sentence provides evidence, not a new argument - it supports the existing claim rather than introducing a new one.",
                "The paragraph's focus is ocean pollution's severity, not conservation organizations specifically. The data supports the main claim.",
                "No prior statistics appear in the paragraph, so this can't be repetitive."
            ],
            "hook": "Add/delete questions: ask 'Does this sentence support the paragraph's MAIN CLAIM?' If yes, add it. If it's about a side topic, don't."
        }
    },
    {
        "id": "writ_rhetoric_02",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer wants to establish the significance of the research findings. Which choice best accomplishes this goal?",
        "context": "The team's discovery of a new antibiotic compound was published in Nature last month.",
        "correct": "The compound is the first new class of antibiotic discovered in over 30 years, offering hope in the fight against drug-resistant infections.",
        "wrong": [
            "The research team consisted of twelve scientists from three different universities.",
            "The paper was reviewed by four independent experts before publication.",
            "The team had been studying soil bacteria for approximately six years before making the discovery."
        ],
        "explanation": {
            "right": "This establishes significance by placing the discovery in historical context ('first in 30 years') and connecting it to a critical problem (drug resistance).",
            "traps": [
                "Team composition doesn't establish the significance of the findings themselves.",
                "Peer review is standard procedure, not an indicator of a finding's significance.",
                "Duration of research is background information, not a measure of the discovery's importance."
            ],
            "hook": "To establish significance, show either: historical context (first/largest/only), practical impact (solves X problem), or scale (affects X million people)."
        }
    },
    {
        "id": "writ_rhetoric_03",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer is considering deleting the underlined sentence. Should it be kept or deleted?",
        "context": "The architectural firm's proposal for the new concert hall emphasized sustainability. [Underlined: The building would feature a green roof, solar panels, and a rainwater harvesting system.] City officials praised the design for its innovative approach to urban construction.",
        "correct": "Kept, because it provides specific examples that illustrate what 'sustainability' means in this context.",
        "wrong": [
            "Kept, because it establishes that the firm is more environmentally conscious than its competitors.",
            "Deleted, because it interrupts the discussion of city officials' response to the proposal.",
            "Deleted, because the specific features listed are not relevant to architecture."
        ],
        "explanation": {
            "right": "The sentence concretizes the abstract claim 'emphasized sustainability' with three specific features, helping the reader understand what the firm proposed.",
            "traps": [
                "No comparison to competitors is made or implied in the paragraph.",
                "The sentence doesn't interrupt - it provides necessary detail between the claim and the praise, making the praise more understandable.",
                "Green roofs, solar panels, and rainwater systems are absolutely relevant to architectural design."
            ],
            "hook": "Keep sentences that turn abstract claims into concrete details. Delete sentences that introduce unrelated information."
        }
    },
    {
        "id": "writ_rhetoric_04",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "What is the primary function of the second paragraph in relation to the passage as a whole?",
        "context": "Paragraph 1: Introduces the claim that urban farming can help address food insecurity. Paragraph 2: Describes a successful urban farming program in Detroit that increased fresh produce access by 40% in low-income neighborhoods. Paragraph 3: Acknowledges challenges including soil contamination and limited growing seasons.",
        "correct": "It provides a specific case study that supports the general claim made in the first paragraph.",
        "wrong": [
            "It presents a counterargument to the claim in the first paragraph.",
            "It transitions from the introduction to the conclusion of the passage.",
            "It establishes the author's credentials for discussing urban farming."
        ],
        "explanation": {
            "right": "Paragraph 2 takes the general claim from paragraph 1 (urban farming addresses food insecurity) and proves it with a real example (Detroit program), following a general-to-specific pattern.",
            "traps": [
                "A counterargument would challenge urban farming, but the Detroit example supports it.",
                "Paragraph 2 is in the middle of the passage providing evidence, not transitioning to a conclusion.",
                "A case study about Detroit doesn't establish the author's credentials."
            ],
            "hook": "Paragraph function questions: ask 'Does this paragraph SUPPORT, COUNTER, EXTEND, or QUALIFY the main argument?'"
        }
    },
    {
        "id": "writ_rhetoric_05",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer wants to strengthen the argument that renewable energy is economically viable. Which choice best accomplishes this goal?",
        "context": "Critics have long argued that renewable energy is too expensive to compete with fossil fuels. ______",
        "correct": "However, the cost of solar energy has dropped by 89% since 2010, making it cheaper than coal in most markets.",
        "wrong": [
            "Solar panels are made from silicon, which is the second most abundant element in Earth's crust.",
            "Many environmental activists have protested against the continued use of fossil fuels.",
            "The first solar cell was invented at Bell Labs in 1954 by Daryl Chapin, Calvin Fuller, and Gerald Pearson."
        ],
        "explanation": {
            "right": "This directly counters the 'too expensive' criticism with current cost data, making an economic argument for viability.",
            "traps": [
                "Silicon abundance is a materials science fact that doesn't address the cost argument.",
                "Activist protests are about environmental concerns, not economic viability.",
                "Historical information about invention doesn't address current economic competitiveness."
            ],
            "hook": "To 'strengthen an argument,' the added sentence must directly address the specific claim being made - usually with evidence, data, or expert testimony."
        }
    },
    {
        "id": "writ_rhetoric_06",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer is considering adding the following sentence: 'Shakespeare, of course, is widely considered the greatest English-language playwright.' Should the writer make this addition?",
        "context": "Paragraph discussing how the Globe Theatre's architectural design influenced the staging of Shakespeare's plays, focusing on the thrust stage and audience proximity.",
        "correct": "No, because it introduces a commonly known claim that is not relevant to the paragraph's focus on theater architecture.",
        "wrong": [
            "Yes, because it provides important context about why Shakespeare's works are still studied.",
            "Yes, because it establishes the writer's knowledge of literary history.",
            "No, because it contradicts the paragraph's argument about the Globe Theatre."
        ],
        "explanation": {
            "right": "The paragraph is about how physical theater design affected staging. Shakespeare's general reputation, while true, doesn't contribute to this architectural argument.",
            "traps": [
                "The paragraph isn't about why Shakespeare is studied; it's about stage design. This context isn't needed here.",
                "Academic writing doesn't work by proving the author's knowledge; every sentence should advance the argument.",
                "The sentence doesn't contradict anything - it's simply irrelevant to the architectural focus."
            ],
            "hook": "Don't add sentences just because they're true. They must be relevant to the SPECIFIC argument the paragraph is making."
        }
    },
    {
        "id": "writ_rhetoric_07",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "Which choice best introduces the main argument of the paragraph?",
        "context": "[Opening sentence needed] Research has shown that students who eat breakfast score an average of 17% higher on morning exams. Additionally, breakfast consumption is linked to improved concentration and memory retention throughout the school day.",
        "correct": "School breakfast programs may be one of the simplest ways to improve academic performance.",
        "wrong": [
            "Breakfast is often called the most important meal of the day.",
            "Many schools across the country have implemented breakfast programs in recent years.",
            "The debate over school nutrition funding has intensified in the past decade."
        ],
        "explanation": {
            "right": "This sentence makes a clear claim (breakfast programs improve academics) that the evidence in the following sentences directly supports.",
            "traps": [
                "This is a cliche that doesn't make a specific argument the paragraph can then support.",
                "This provides background information but doesn't state the argument the evidence will prove.",
                "This introduces a different topic (funding debates) that the paragraph's evidence doesn't address."
            ],
            "hook": "A paragraph's topic sentence should make the CLAIM that the rest of the paragraph will support with evidence."
        }
    },
    {
        "id": "writ_rhetoric_08",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer is considering deleting the underlined sentence. Should it be kept or deleted?",
        "context": "The museum's new wing was designed by Zaha Hadid, known for her fluid, futuristic architectural style. [Underlined: Hadid, who was born in Baghdad in 1950, studied mathematics at the American University of Beirut before attending the Architectural Association in London.] The wing's sweeping curves and cantilevered forms reflect Hadid's signature approach to challenging conventional geometric boundaries.",
        "correct": "Deleted, because it provides biographical information that disrupts the paragraph's analysis of the building's design.",
        "wrong": [
            "Kept, because it explains why Hadid's mathematical background influenced the wing's curves.",
            "Kept, because it establishes Hadid's international perspective as relevant to the design.",
            "Deleted, because readers would already know Hadid's biographical details."
        ],
        "explanation": {
            "right": "The paragraph focuses on the building's design characteristics. The biographical sentence, while interesting, breaks the flow between describing Hadid's style and showing how the wing exemplifies it.",
            "traps": [
                "The paragraph doesn't make a connection between math and curves; it's about her 'signature approach,' not her educational background.",
                "No claim about international perspective is made in the paragraph, so this justification doesn't apply.",
                "We can't assume readers' prior knowledge. The reason to delete is relevance, not redundancy."
            ],
            "hook": "Delete sentences that, however interesting, break the logical flow between a paragraph's claim and its supporting evidence."
        }
    },
    {
        "id": "writ_rhetoric_09",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "What is the primary purpose of the final paragraph?",
        "context": "An essay arguing that cities should invest in public transportation. Final paragraph: 'Of course, public transit alone cannot solve every urban challenge. Traffic congestion, housing costs, and air quality depend on many interconnected factors. However, investment in reliable, affordable transit systems represents a critical foundation upon which other solutions can be built.'",
        "correct": "To acknowledge limitations of the argument while reaffirming the central claim.",
        "wrong": [
            "To introduce a new argument in favor of public transportation.",
            "To concede that the author's position is ultimately incorrect.",
            "To summarize all the evidence presented in earlier paragraphs."
        ],
        "explanation": {
            "right": "The paragraph concedes limitations ('cannot solve every urban challenge') but ends by reasserting the thesis ('critical foundation'), a common rhetorical strategy that strengthens credibility.",
            "traps": [
                "No new argument is introduced; the paragraph revisits the existing one after acknowledging its limits.",
                "The author reaffirms the position ('critical foundation') rather than conceding defeat.",
                "The paragraph doesn't reference or summarize specific evidence from earlier paragraphs."
            ],
            "hook": "Acknowledging limitations + reaffirming = stronger conclusion. This pattern shows the writer has considered objections and still stands by the claim."
        }
    },
    {
        "id": "writ_rhetoric_10",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer wants to provide a smooth transition from the previous paragraph, which discussed the economic costs of invasive species. Which opening sentence best accomplishes this?",
        "context": "Previous paragraph ended with: '...costing the agricultural industry an estimated $120 billion annually.' [New paragraph discusses ecological damage from invasive species.]",
        "correct": "Beyond their economic toll, invasive species inflict severe damage on native ecosystems.",
        "wrong": [
            "Invasive species are organisms that are not native to an ecosystem.",
            "Many people are unaware of the problems caused by invasive species.",
            "The economic costs of invasive species are difficult to calculate precisely."
        ],
        "explanation": {
            "right": "'Beyond their economic toll' acknowledges the previous paragraph's topic while 'inflict severe damage on native ecosystems' introduces the new paragraph's focus on ecology.",
            "traps": [
                "Defining invasive species is too basic at this point in the essay and doesn't connect to the previous paragraph.",
                "Audience awareness is irrelevant to the shift from economic to ecological impacts.",
                "This refers back to the previous paragraph's topic without transitioning to the new one."
            ],
            "hook": "Good paragraph transitions acknowledge what came before (a word or phrase) and then pivot to what comes next (the new topic)."
        }
    },
    {
        "id": "writ_rhetoric_11",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer is considering adding the following sentence: 'My grandmother always said that hard work is its own reward.' Should the writer make this addition?",
        "context": "A research paper analyzing data on the correlation between hours studied and exam performance in undergraduate biology courses.",
        "correct": "No, because an informal personal anecdote is inappropriate for the tone and purpose of an academic research paper.",
        "wrong": [
            "Yes, because it provides a relatable introduction that will engage the reader.",
            "No, because the claim about hard work has been disproven by modern research.",
            "Yes, because it establishes the writer's personal connection to the research topic."
        ],
        "explanation": {
            "right": "Academic research papers require objective, evidence-based writing. A grandmother's saying is anecdotal and informal, undermining the paper's scholarly tone.",
            "traps": [
                "While personal anecdotes can engage readers in some contexts, they are inappropriate in formal academic research writing.",
                "The issue isn't whether the claim is true or false but whether a personal anecdote belongs in this type of writing.",
                "Personal connections don't strengthen research papers; data and methodology do."
            ],
            "hook": "Match content to context: personal anecdotes suit narratives and opinion essays, not academic research papers."
        }
    },
    {
        "id": "writ_rhetoric_12",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "Which choice most effectively sets up the contrast in the sentence that follows?",
        "context": "______ In reality, the process took over a decade and required the collaboration of more than 2,000 scientists across six countries.",
        "correct": "The popular narrative suggests that the Human Genome Project was a quick triumph of American ingenuity.",
        "wrong": [
            "The Human Genome Project was an ambitious scientific undertaking.",
            "Many scientists contributed to the Human Genome Project.",
            "The Human Genome Project began in 1990 and was completed in 2003."
        ],
        "explanation": {
            "right": "This sets up a clear contrast: 'quick triumph of American ingenuity' vs. the reality of 'over a decade' and 'six countries.' The sentence creates expectations that the next sentence will overturn.",
            "traps": [
                "'Ambitious undertaking' is vague and doesn't specifically contrast with 'decade' or 'six countries.'",
                "'Many scientists contributed' partially overlaps with the reality rather than contrasting with it.",
                "Stating the dates doesn't set up a contrast since it aligns with rather than contradicts 'over a decade.'"
            ],
            "hook": "To set up a contrast, the preceding sentence must present the specific misconception that the 'in reality' sentence will correct."
        }
    },
    {
        "id": "writ_rhetoric_13",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer wants to conclude the essay with a call to action. Which choice best accomplishes this goal?",
        "context": "Essay about declining pollinator populations and their importance to food production. Previous sentences discuss the scope of the problem.",
        "correct": "Citizens, corporations, and governments must act now - by reducing pesticide use, preserving wild habitats, and funding pollinator research - before these critical species disappear entirely.",
        "wrong": [
            "In conclusion, pollinators are clearly very important to our food system.",
            "Further research is needed to fully understand the complex factors driving pollinator decline.",
            "The decline of pollinators is a tragic reminder of humanity's troubled relationship with nature."
        ],
        "explanation": {
            "right": "A call to action specifies WHO should act, WHAT they should do, and WHY urgency is needed. This sentence does all three.",
            "traps": [
                "Restating importance is a summary, not a call to action - it doesn't tell anyone to do anything.",
                "Calling for more research is passive and academic, not an urgent call to action.",
                "This is a reflective observation, not an actionable demand."
            ],
            "hook": "A call to action must answer: Who should act? What should they do? Why now? Without all three, it's just a conclusion."
        }
    },
    {
        "id": "writ_rhetoric_14",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "Which choice best supports the claim made in the previous sentence?",
        "context": "Previous sentence: 'Remote work has fundamentally altered commercial real estate markets in major cities.' ______",
        "correct": "Office vacancy rates in Manhattan reached 22% in 2024, the highest level since the metric was first tracked in the 1970s.",
        "wrong": [
            "Many employees report preferring the flexibility of working from home.",
            "Commercial real estate includes office buildings, retail spaces, and industrial properties.",
            "The shift to remote work began during the pandemic but has continued in the years since."
        ],
        "explanation": {
            "right": "A specific statistic (22% vacancy, historical high) directly demonstrates the 'fundamental alteration' of commercial real estate markets claimed in the previous sentence.",
            "traps": [
                "Employee preferences explain WHY markets changed but don't demonstrate THAT markets changed.",
                "Defining commercial real estate doesn't support the claim about how markets have been altered.",
                "Explaining when the shift began provides timeline context but doesn't prove the market impact."
            ],
            "hook": "The best support for a claim provides measurable evidence (statistics, specific examples) that directly demonstrates the claim is true."
        }
    },
    {
        "id": "writ_rhetoric_15",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer is considering adding the following sentence: 'Interestingly, Van Gogh only sold one painting during his lifetime.' Should the writer make this addition?",
        "context": "A paragraph analyzing the brushwork techniques Van Gogh developed during his time in Arles, focusing on the thick impasto application in 'The Starry Night.'",
        "correct": "No, because it introduces biographical information unrelated to the paragraph's technical analysis of brushwork.",
        "wrong": [
            "Yes, because it adds pathos that will make readers more interested in Van Gogh's technique.",
            "Yes, because it explains why Van Gogh's brushwork was not appreciated by his contemporaries.",
            "No, because the claim about selling only one painting has been disputed by historians."
        ],
        "explanation": {
            "right": "The paragraph is performing technical analysis of brushwork. Van Gogh's commercial failure, while a famous fact, doesn't contribute to understanding his impasto technique.",
            "traps": [
                "Emotional engagement doesn't justify including off-topic information in a technical analysis.",
                "The sentence doesn't actually explain why his technique wasn't appreciated - it just states a sales fact.",
                "The accuracy of the claim isn't the issue; its relevance to the paragraph's purpose is."
            ],
            "hook": "Every sentence must serve the paragraph's specific purpose. Famous facts about a subject aren't automatically relevant."
        }
    },
    {
        "id": "writ_rhetoric_16",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "What is the function of the examples in the second sentence?",
        "context": "Biomimicry - the practice of modeling technology after biological systems - has produced numerous engineering breakthroughs. Velcro was inspired by burrs clinging to dog fur, bullet train noses by kingfisher beaks, and wind turbine blades by humpback whale fins.",
        "correct": "To illustrate the range and real-world impact of biomimicry with specific, well-known cases.",
        "wrong": [
            "To argue that biological systems are superior to human engineering.",
            "To provide a comprehensive history of biomimicry research.",
            "To contrast successful biomimicry projects with unsuccessful ones."
        ],
        "explanation": {
            "right": "The three examples (Velcro, bullet trains, wind turbines) span different fields and technologies, demonstrating that biomimicry's 'numerous breakthroughs' are real and varied.",
            "traps": [
                "The examples show collaboration between biology and engineering, not the superiority of one over the other.",
                "Three examples don't constitute a 'comprehensive history' - they're selected illustrations.",
                "All three examples are successes; no unsuccessful projects are mentioned for contrast."
            ],
            "hook": "Examples in argumentative writing typically serve to ILLUSTRATE (show the claim is real), PROVE (provide evidence), or CLARIFY (make abstract ideas concrete)."
        }
    },
    {
        "id": "writ_rhetoric_17",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer wants to address a potential counterargument. Which choice best accomplishes this goal?",
        "context": "Essay arguing that standardized testing should be eliminated from college admissions. Previous paragraph presented evidence that test scores correlate with family income rather than academic potential.",
        "correct": "Proponents of standardized tests argue that without them, admissions officers would have no objective metric for comparing students from different schools - but transcript analysis and portfolio review offer equally standardized alternatives.",
        "wrong": [
            "Standardized testing is a multibillion-dollar industry that profits from students' anxiety.",
            "Many prestigious universities, including Harvard and MIT, have already adopted test-optional policies.",
            "Students from low-income families often cannot afford the expensive test prep courses that wealthier peers access easily."
        ],
        "explanation": {
            "right": "This presents the opposition's strongest argument (need for objectivity) and then refutes it (alternatives exist), which is the definition of addressing a counterargument.",
            "traps": [
                "Criticizing the testing industry's profits is an attack on motives, not an engagement with the counterargument.",
                "Citing universities that agree with the author adds support but doesn't address what opponents believe.",
                "This reinforces the author's existing argument about income correlation rather than engaging with the opposing view."
            ],
            "hook": "Addressing a counterargument means: STATE what opponents believe + EXPLAIN why they're wrong. Both parts are needed."
        }
    },
    {
        "id": "writ_rhetoric_18",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer is considering deleting the final sentence. Should it be kept or deleted?",
        "context": "The experiment yielded unexpected results: plants exposed to classical music grew 15% faster than the control group, while those exposed to heavy metal music grew 8% slower. Further trials with varied genres produced similar patterns. These findings suggest that sound wave frequency and amplitude may affect cellular processes in plants.",
        "correct": "Kept, because it interprets the experimental results and provides a scientific explanation for the observed phenomenon.",
        "wrong": [
            "Kept, because it proves conclusively that music affects plant growth.",
            "Deleted, because it speculates beyond what the data can support.",
            "Deleted, because it merely repeats information already stated in earlier sentences."
        ],
        "explanation": {
            "right": "The final sentence moves from describing results to interpreting them scientifically (sound waves affecting cells), which is an essential part of presenting research findings.",
            "traps": [
                "The word 'suggest' indicates a hypothesis, not conclusive proof.",
                "Using 'suggest' and 'may affect' shows appropriate scientific caution - this is interpretation, not unsupported speculation.",
                "The earlier sentences state WHAT happened; the final sentence proposes WHY, which is new information."
            ],
            "hook": "In science writing, interpretation sentences (why something happened) serve a different function than result sentences (what happened). Both are necessary."
        }
    },
    {
        "id": "writ_rhetoric_19",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "Which choice most effectively establishes the writer's credibility on this topic?",
        "context": "Opening of an op-ed arguing for changes to juvenile sentencing guidelines. First sentence needed.",
        "correct": "In my twenty years as a juvenile court judge, I have sentenced over 3,000 young offenders - and I have come to believe our system fails them.",
        "wrong": [
            "Everyone knows that the juvenile justice system is broken and needs to be fixed immediately.",
            "I recently read a very interesting article about juvenile sentencing in The New York Times.",
            "Juvenile sentencing is a complex issue with many stakeholders and no easy answers."
        ],
        "explanation": {
            "right": "Citing specific professional experience (20 years, 3,000 cases) establishes authority through direct expertise, making the reader trust the writer's judgment on this topic.",
            "traps": [
                "'Everyone knows' is an appeal to common belief, not personal credibility, and it's actually a logical fallacy.",
                "Referencing someone else's article undermines rather than builds the writer's own authority.",
                "Acknowledging complexity is intellectually honest but doesn't establish why THIS writer is qualified to weigh in."
            ],
            "hook": "Credibility comes from relevant experience, expertise, or direct knowledge - not from citing others or claiming universal agreement."
        }
    },
    {
        "id": "writ_rhetoric_20",
        "category": "writing",
        "subcategory": "rhetoric",
        "question": "The writer wants to emphasize the unexpected nature of the discovery. Which choice best accomplishes this goal?",
        "context": "The research team had been studying soil samples for potential agricultural applications. ______",
        "correct": "What they found instead was a compound with remarkable antibiotic properties - a discovery that would redirect the entire focus of their laboratory.",
        "wrong": [
            "They eventually identified several compounds of interest in the soil samples.",
            "The soil samples came from a region known for its biodiversity.",
            "Their research was funded by a grant from the National Science Foundation."
        ],
        "explanation": {
            "right": "'Instead' signals the unexpected pivot, 'remarkable' emphasizes surprise, and 'redirect the entire focus' conveys how dramatic the discovery was.",
            "traps": [
                "'Eventually identified' suggests gradual, expected progress rather than an unexpected discovery.",
                "The soil's origin provides background but doesn't convey surprise.",
                "Funding source is administrative information with no element of surprise."
            ],
            "hook": "To emphasize the unexpected, use contrast words (instead, surprisingly, contrary to expectations) and show the magnitude of the surprise through its consequences."
        }
    },
    {
        "id": "writ_word-choice_01",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice most effectively eliminates wordiness while maintaining the sentence's meaning?",
        "context": "Due to the fact that the bridge was undergoing repairs, traffic was diverted to an alternate route for a period of three weeks.",
        "correct": "Because the bridge was being repaired, traffic was diverted to an alternate route for three weeks.",
        "wrong": [
            "Due to the fact that repairs were being done on the bridge, traffic went to an alternate route for three weeks.",
            "The bridge was undergoing repairs, and because of this fact, traffic was diverted for a period of approximately three weeks.",
            "On account of the bridge being in a state of repair, traffic was diverted to an alternate route for three weeks."
        ],
        "explanation": {
            "right": "'Because' replaces the wordy 'due to the fact that,' and 'for three weeks' replaces the padded 'for a period of three weeks.'",
            "traps": [
                "Still uses 'due to the fact that' and adds the informal 'went to.'",
                "Adds unnecessary words ('because of this fact,' 'approximately') while keeping 'a period of.'",
                "'On account of' and 'in a state of repair' are even wordier than the original."
            ],
            "hook": "Replace these wordy phrases: 'due to the fact that' = because; 'for a period of' = for; 'in order to' = to; 'at this point in time' = now."
        }
    },
    {
        "id": "writ_word-choice_02",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which word most precisely describes the researcher's action in this context?",
        "context": "After reviewing the contradictory data from the three trials, Dr. Yamamoto ______ that the initial hypothesis was flawed and needed revision.",
        "correct": "concluded",
        "wrong": [
            "felt",
            "guessed",
            "alleged"
        ],
        "explanation": {
            "right": "'Concluded' indicates a judgment reached through evidence and reasoning, which matches the context of reviewing data from multiple trials.",
            "traps": [
                "'Felt' implies an emotional reaction rather than a logical assessment based on data.",
                "'Guessed' implies random speculation without evidence, contradicting the careful review described.",
                "'Alleged' implies an accusation or unproven claim, which doesn't fit a scientist revising a hypothesis."
            ],
            "hook": "In scientific contexts, use words that reflect the evidence-based reasoning process: concluded, determined, established, demonstrated."
        }
    },
    {
        "id": "writ_word-choice_03",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice uses the most precise language?",
        "context": "The new regulation will ______ companies from dumping industrial waste into waterways.",
        "correct": "prohibit",
        "wrong": [
            "stop",
            "discourage",
            "prevent"
        ],
        "explanation": {
            "right": "'Prohibit' means to formally forbid by law or regulation, which precisely matches the context of a regulation making an action illegal.",
            "traps": [
                "'Stop' is informal and vague - regulations don't physically stop actions, they legally forbid them.",
                "'Discourage' implies making something less attractive rather than making it illegal.",
                "'Prevent' implies making something impossible, but regulations can be violated - they forbid, not physically prevent."
            ],
            "hook": "Match precision to context: laws/regulations PROHIBIT or MANDATE; they don't casually 'stop' or 'prevent.'"
        }
    },
    {
        "id": "writ_word-choice_04",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice maintains the formal, academic tone of the passage?",
        "context": "The senator's proposal, while politically popular, was criticized by economists who argued that its long-term fiscal consequences would be ______.",
        "correct": "detrimental",
        "wrong": [
            "really bad",
            "catastrophic beyond imagination",
            "not great"
        ],
        "explanation": {
            "right": "'Detrimental' is appropriately formal, precise, and measured - consistent with how economists would express concern in an academic context.",
            "traps": [
                "'Really bad' is colloquial and imprecise, inappropriate for academic writing.",
                "'Catastrophic beyond imagination' is hyperbolic and emotionally charged, not matching the measured tone of economic criticism.",
                "'Not great' is informal understatement that doesn't match academic register."
            ],
            "hook": "Academic tone requires: formal vocabulary, measured claims (not hyperbole), and precise meaning. Avoid slang, casual phrasing, and extreme language."
        }
    },
    {
        "id": "writ_word-choice_05",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice eliminates the redundancy in this sentence?",
        "context": "The biography provides a detailed account of the artist's life, describing her early childhood beginnings, her education, and her eventual rise to fame.",
        "correct": "The biography provides a detailed account of the artist's life, describing her childhood, her education, and her rise to fame.",
        "wrong": [
            "The biography provides an account of the artist's life, describing her early childhood beginnings, education, and eventual rise to fame.",
            "The biography provides a detailed account of the life of the artist, describing childhood beginnings, education, and the rise to fame.",
            "A detailed biography provides an account of the artist's life from early childhood beginnings to her eventual rise to fame."
        ],
        "explanation": {
            "right": "Removing 'early' from 'early childhood beginnings' eliminates a triple redundancy (early, child, beginnings all mean 'start'), and removing 'eventual' eliminates the redundancy with 'rise.'",
            "traps": [
                "Still contains 'early childhood beginnings' - the core redundancy remains.",
                "Still contains 'childhood beginnings' - beginning is redundant with childhood.",
                "Still contains both 'early childhood beginnings' and 'eventual rise.'"
            ],
            "hook": "Test for redundancy: does one word already contain the meaning of another? 'Childhood' already means 'early beginnings,' so adding those words is redundant."
        }
    },
    {
        "id": "writ_word-choice_06",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which word best fits the tone and context of this scientific passage?",
        "context": "The fossil record ______ that dinosaurs and early mammals coexisted for over 100 million years, contradicting earlier assumptions about their temporal separation.",
        "correct": "demonstrates",
        "wrong": [
            "proves beyond a doubt",
            "hints",
            "says"
        ],
        "explanation": {
            "right": "'Demonstrates' is appropriately strong for fossil evidence (physical proof) while maintaining scientific precision without overclaiming.",
            "traps": [
                "'Proves beyond a doubt' is too absolute for scientific writing, which acknowledges potential for revision.",
                "'Hints' is too weak for physical evidence in the fossil record, which is quite direct.",
                "'Says' personifies the fossil record inappropriately and is too informal for scientific writing."
            ],
            "hook": "Scientific evidence hierarchy: hints/suggests (weak) < indicates/shows (moderate) < demonstrates/establishes (strong) < proves (rarely used in science)."
        }
    },
    {
        "id": "writ_word-choice_07",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice uses the most concise phrasing without losing meaning?",
        "context": "It is important to note that the results of the study are not necessarily applicable in all situations to every population demographic.",
        "correct": "The study's results may not apply to all populations.",
        "wrong": [
            "It is important to note that the study's results may not apply to all populations.",
            "The results may not necessarily be applicable to every single population.",
            "It should be noted that the results are not always applicable in all situations."
        ],
        "explanation": {
            "right": "This eliminates the throat-clearing phrase ('It is important to note that'), the redundancy ('all situations' + 'every population'), and the hedge stacking ('not necessarily').",
            "traps": [
                "Still begins with the unnecessary 'It is important to note that' - a common filler phrase.",
                "'Not necessarily' and 'every single' are padded hedges; 'may not' alone suffices.",
                "'It should be noted' is the same throat-clearing problem, and 'not always applicable in all situations' is redundant."
            ],
            "hook": "Delete throat-clearing phrases: 'It is important to note that,' 'It should be mentioned that,' 'It goes without saying.' Just say the thing."
        }
    },
    {
        "id": "writ_word-choice_08",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice uses the most precise verb for this context?",
        "context": "The archaeological team carefully ______ the fragile pottery shards from the surrounding soil, using fine brushes and dental picks.",
        "correct": "extracted",
        "wrong": [
            "removed",
            "got out",
            "took"
        ],
        "explanation": {
            "right": "'Extracted' precisely describes the careful, deliberate removal of something embedded in another substance, matching the archaeological context of removing artifacts from soil.",
            "traps": [
                "'Removed' is too general - it doesn't convey the delicacy and precision of archaeological work.",
                "'Got out' is colloquial and imprecise, inappropriate for academic or professional writing.",
                "'Took' is vague and doesn't specify the careful process described by the brushes and dental picks."
            ],
            "hook": "Choose verbs that match the precision of the action: 'extract' (careful removal from surroundings), 'excavate' (dig out), 'retrieve' (recover something specific)."
        }
    },
    {
        "id": "writ_word-choice_09",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which word correctly distinguishes between these commonly confused terms?",
        "context": "The new policy will ______ all employees, requiring them to complete additional training hours regardless of their tenure.",
        "correct": "affect",
        "wrong": [
            "effect",
            "impact upon",
            "afflict"
        ],
        "explanation": {
            "right": "'Affect' (verb) means to influence or have an impact on, which is correct here since the policy is influencing all employees.",
            "traps": [
                "'Effect' as a verb means to bring about or create (as in 'effect change'), not to influence existing things.",
                "'Impact upon' is wordy and 'impact' as a verb, while common, is less precise than 'affect' in formal writing.",
                "'Afflict' means to cause suffering, which is too negative for a neutral training requirement."
            ],
            "hook": "Affect = verb (to influence). Effect = usually a noun (the result). 'Effect' as a verb means 'to create' (effect change), not 'to influence.'"
        }
    },
    {
        "id": "writ_word-choice_10",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice eliminates the unnecessary words while preserving the meaning?",
        "context": "In today's modern society, there are many people who believe that the educational system is in need of significant reform and change.",
        "correct": "Many people believe the educational system needs significant reform.",
        "wrong": [
            "In modern society, many people believe that the educational system is in need of reform and change.",
            "Today, there are people who believe that the educational system needs significant reform.",
            "In today's society, many believe the educational system is in need of reform and significant change."
        ],
        "explanation": {
            "right": "Eliminates: 'In today's modern society' (filler), 'there are...who' (expletive construction), 'is in need of' (wordy for 'needs'), 'and change' (redundant with 'reform').",
            "traps": [
                "Still contains 'is in need of' and the redundant 'reform and change.'",
                "'There are people who' is still a wordy expletive construction.",
                "Still contains 'In today's society' (filler) and 'is in need of' (wordy)."
            ],
            "hook": "Eliminate expletive constructions: 'There are many people who believe' = 'Many people believe.' The meaning is identical with fewer words."
        }
    },
    {
        "id": "writ_word-choice_11",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice uses language most appropriate for the intended audience?",
        "context": "A nutritionist writing a guide for the general public: 'Consuming adequate quantities of dietary fiber ______ gastrointestinal motility and may reduce the risk of colorectal neoplasms.'",
        "correct": "Eating enough fiber helps digestion and may lower the risk of colon cancer.",
        "wrong": [
            "Consuming adequate quantities of dietary fiber promotes gastrointestinal motility and may reduce colorectal neoplasm risk.",
            "Eating lots of fiber makes your gut work better and keeps you from getting cancer.",
            "Fiber consumption in adequate amounts is beneficial for the promotion of digestive regularity."
        ],
        "explanation": {
            "right": "For a general audience, medical jargon should be replaced with plain language: 'eating enough fiber,' 'helps digestion,' 'colon cancer' are accurate but accessible.",
            "traps": [
                "This retains the medical jargon (gastrointestinal motility, colorectal neoplasms) that a general audience wouldn't understand.",
                "While simple, this is too casual ('makes your gut work better') and overclaims ('keeps you from getting cancer' vs. 'may reduce risk').",
                "Nominalizations ('consumption,' 'promotion') and passive constructions make this harder to read than the original."
            ],
            "hook": "Match language to audience: general public = plain language; academic = technical terms; professional = industry jargon. Accuracy must be preserved regardless."
        }
    },
    {
        "id": "writ_word-choice_12",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which word most precisely conveys the meaning in this context?",
        "context": "The committee's decision to fund the arts program was ______; every member voted in favor without reservation.",
        "correct": "unanimous",
        "wrong": [
            "popular",
            "undisputed",
            "obvious"
        ],
        "explanation": {
            "right": "'Unanimous' precisely means every single member agreed, which matches 'every member voted in favor.'",
            "traps": [
                "'Popular' means widely liked but doesn't require complete agreement - a popular decision could still have dissenters.",
                "'Undisputed' means no one challenged it, which is slightly different from everyone actively voting yes.",
                "'Obvious' describes the clarity of the choice, not the unanimity of the vote."
            ],
            "hook": "Unanimous = every single person agrees. Popular = most people agree. Undisputed = no one argues against. Each has a distinct meaning."
        }
    },
    {
        "id": "writ_word-choice_13",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which revision eliminates the cliche while preserving the meaning?",
        "context": "At the end of the day, the research team's perseverance paid off when they finally isolated the high temperature superconducting compound.",
        "correct": "Ultimately, the research team's perseverance paid off when they isolated the superconducting compound.",
        "wrong": [
            "When all was said and done, the research team's hard work resulted in the isolation of the superconducting compound.",
            "The research team's perseverance, at the end of the day, paid off when they finally isolated the compound.",
            "At the end of the day, the team's blood, sweat, and tears led to isolating the superconducting compound."
        ],
        "explanation": {
            "right": "'Ultimately' replaces the cliche 'at the end of the day' with a precise, formal adverb meaning 'in the final outcome.' Also removes the filler word 'finally' (redundant with 'ultimately').",
            "traps": [
                "'When all was said and done' is an equally worn cliche replacing the original one.",
                "Moving 'at the end of the day' to a parenthetical position doesn't eliminate the cliche.",
                "'Blood, sweat, and tears' adds another cliche instead of removing one."
            ],
            "hook": "Replace cliches with precise language: 'at the end of the day' = ultimately; 'think outside the box' = innovate; 'tip of the iceberg' = a small fraction."
        }
    },
    {
        "id": "writ_word-choice_14",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice corrects the misused word in this sentence?",
        "context": "The principle objective of the study was to determine whether meditation could ______ the symptoms of chronic anxiety.",
        "correct": "The principal objective of the study was to determine whether meditation could alleviate the symptoms of chronic anxiety.",
        "wrong": [
            "The principle objective of the study was to determine whether meditation could elevate the symptoms of chronic anxiety.",
            "The principal objective of the study was to determine whether meditation could aggravate the symptoms of chronic anxiety.",
            "The principle objective of the study was to determine whether meditation could exasperate the symptoms of chronic anxiety."
        ],
        "explanation": {
            "right": "'Principal' (adjective meaning 'main') replaces the misused 'principle' (noun meaning 'rule/belief'). 'Alleviate' means to reduce severity, matching the intent to help anxiety.",
            "traps": [
                "Still misuses 'principle' and 'elevate' means to raise/increase, the opposite of the intended meaning.",
                "While 'principal' is correct, 'aggravate' means to make worse, the opposite of what a helpful study would aim to show.",
                "Still misuses 'principle' and 'exasperate' means to irritate a person, not worsen symptoms (confused with 'exacerbate')."
            ],
            "hook": "Principal = main (adjective) or school leader. Principle = rule or belief (always a noun). The principal reason is the MAIN reason."
        }
    },
    {
        "id": "writ_word-choice_15",
        "category": "writing",
        "subcategory": "word-choice",
        "question": "Which choice is most concise without sacrificing clarity?",
        "context": "The CEO made the decision to implement a new policy that would require each and every employee to undergo training in the area of cybersecurity.",
        "correct": "The CEO decided to require all employees to undergo cybersecurity training.",
        "wrong": [
            "The CEO made the decision to implement a policy requiring each employee to undergo cybersecurity training.",
            "The CEO decided to implement a new policy requiring each and every employee to be trained in cybersecurity.",
            "A decision was made by the CEO to require all employees to undergo training in the area of cybersecurity."
        ],
        "explanation": {
            "right": "'Decided' replaces 'made the decision' (nominalization). 'All employees' replaces 'each and every employee' (redundancy). 'Cybersecurity training' replaces 'training in the area of cybersecurity' (wordiness).",
            "traps": [
                "Still uses 'made the decision' instead of the more concise 'decided.'",
                "Still uses 'each and every' (redundant pair) and 'implement a new policy' is unnecessary when the action itself is stated.",
                "Passive voice ('was made by') is wordier than active, and 'in the area of' is still present."
            ],
            "hook": "Convert nominalizations back to verbs: 'made the decision' = decided; 'conducted an investigation' = investigated; 'performed an analysis' = analyzed."
        }
    },
    {
        "id": "writ_organization_01",
        "category": "writing",
        "subcategory": "organization",
        "question": "For the sake of cohesion, sentence 3 should be placed:",
        "context": "[1] The city's public library system has served the community for over a century. [2] In recent years, libraries have expanded beyond books to offer digital resources, community programs, and maker spaces. [3] The first branch opened in 1912 with a collection of just 5,000 volumes. [4] Today, the system includes 12 branches and over 2 million items.",
        "correct": "After sentence 1",
        "wrong": [
            "Where it is now (after sentence 2)",
            "After sentence 4",
            "Before sentence 1"
        ],
        "explanation": {
            "right": "Sentence 3 provides historical detail ('first branch opened in 1912') that logically follows the mention of 'over a century' in sentence 1, creating a chronological progression: century of service > first branch > recent expansion > today.",
            "traps": [
                "After sentence 2 (current position), it breaks the flow from modern services back to 1912 history.",
                "After sentence 4, the historical information about 1912 would be anticlimactic after describing the current system.",
                "Before sentence 1, the specific detail would precede the general statement, weakening the paragraph's opening."
            ],
            "hook": "For placement questions, look for logical connectors: time words (first, recently, today), pronoun references, and cause-effect chains."
        }
    },
    {
        "id": "writ_organization_02",
        "category": "writing",
        "subcategory": "organization",
        "question": "To make the paragraph most logical, sentence 5 should be placed:",
        "context": "[1] Honeybees communicate the location of food sources through an elaborate dance language. [2] A bee that has found nectar performs a 'waggle dance' on the honeycomb. [3] The angle of the dance relative to the sun indicates the direction of the food source. [4] The duration of the waggle indicates distance. [5] Karl von Frisch decoded this dance language in the 1940s, earning a Nobel Prize for his discovery.",
        "correct": "Before sentence 1",
        "wrong": [
            "Where it is now (after sentence 4)",
            "After sentence 1",
            "After sentence 2"
        ],
        "explanation": {
            "right": "Sentence 5 provides the historical context of the discovery. Placing it first establishes WHO discovered the dance language before the paragraph explains HOW it works (sentences 1-4), creating a logical introduction-to-detail structure.",
            "traps": [
                "At the end (current position), the historical attribution feels like an afterthought rather than setting up the explanation.",
                "After sentence 1 would interrupt the flow between introducing the dance and explaining how it works.",
                "After sentence 2 would break the sequence explaining direction (3) and distance (4) from the initial description."
            ],
            "hook": "Historical attribution or discovery context often works best as an introduction that sets up the detailed explanation that follows."
        }
    },
    {
        "id": "writ_organization_03",
        "category": "writing",
        "subcategory": "organization",
        "question": "Which sentence provides the most effective opening for this paragraph?",
        "context": "[Opening needed] For instance, the Amazon River dolphin has evolved a flexible neck that allows it to navigate through flooded forests, while the Ganges River dolphin has developed echolocation so precise it can detect fish in murky water. These specializations demonstrate that river dolphins are not simply ocean dolphins that wandered upstream.",
        "correct": "River dolphins around the world have developed remarkable adaptations specific to their freshwater environments.",
        "wrong": [
            "Dolphins are among the most intelligent mammals on Earth.",
            "There are several species of river dolphins found on different continents.",
            "The Amazon River dolphin, also known as the boto, can grow up to eight feet long."
        ],
        "explanation": {
            "right": "This sentence makes a claim (remarkable adaptations for freshwater) that the 'for instance' examples directly support, and the final sentence circles back to ('These specializations demonstrate...').",
            "traps": [
                "Intelligence is not what the paragraph discusses; it's about physical adaptations to specific environments.",
                "While true, merely listing where dolphins live doesn't set up the examples of specific adaptations.",
                "A detail about one species' size doesn't introduce a paragraph about adaptations across multiple species."
            ],
            "hook": "The opening sentence must make the claim that 'for instance' or 'for example' will support. Work backward from the evidence to find the right topic sentence."
        }
    },
    {
        "id": "writ_organization_04",
        "category": "writing",
        "subcategory": "organization",
        "question": "The writer wants to add the following sentence: 'This process, known as nitrogen fixation, is essential for plant growth.' Where should it be placed?",
        "context": "[1] Legumes such as soybeans and clover have a unique relationship with certain soil bacteria. [2] These bacteria colonize the plants' root nodules. [3] There, they convert atmospheric nitrogen into ammonia, a form plants can absorb. [4] For this reason, farmers often plant legumes as a rotation crop to naturally enrich depleted soil.",
        "correct": "After sentence 3",
        "wrong": [
            "After sentence 1",
            "After sentence 2",
            "After sentence 4"
        ],
        "explanation": {
            "right": "The new sentence names and explains the significance of the process described in sentence 3 (converting nitrogen to ammonia). It logically follows the description and precedes the practical application in sentence 4.",
            "traps": [
                "After sentence 1, the term 'this process' has no referent yet - no process has been described.",
                "After sentence 2, colonizing root nodules hasn't introduced the nitrogen conversion that 'nitrogen fixation' refers to.",
                "After sentence 4, naming the process is anticlimactic since the paragraph has already moved to practical applications."
            ],
            "hook": "Place defining/naming sentences immediately after the concept they name. 'This process, known as X' must follow the sentence that describes the process."
        }
    },
    {
        "id": "writ_organization_05",
        "category": "writing",
        "subcategory": "organization",
        "question": "Which sequence of paragraphs creates the most logical structure for this essay?",
        "context": "Paragraph A: Describes the current water crisis in Cape Town. Paragraph B: Explains the geological and climate factors that make Cape Town vulnerable to drought. Paragraph C: Presents solutions other drought-prone cities have implemented. Paragraph D: Proposes specific policy recommendations for Cape Town based on those examples.",
        "correct": "A, B, C, D",
        "wrong": [
            "B, A, D, C",
            "C, D, A, B",
            "A, C, B, D"
        ],
        "explanation": {
            "right": "A (current problem) > B (underlying causes) > C (solutions elsewhere) > D (specific recommendations) follows a logical problem-cause-precedent-solution structure.",
            "traps": [
                "Starting with causes before the problem lacks urgency; placing recommendations before examples removes their foundation.",
                "Starting with other cities' solutions before establishing Cape Town's problem provides no context for why we should care.",
                "Jumping from the problem to solutions (C) before explaining causes (B) skips the analysis needed to understand why solutions are needed."
            ],
            "hook": "Argumentative essays typically follow: Problem > Causes > Evidence/Examples > Solution. Each section builds on the previous one."
        }
    },
    {
        "id": "writ_organization_06",
        "category": "writing",
        "subcategory": "organization",
        "question": "For the sake of cohesion, sentence 4 should be placed:",
        "context": "[1] The researchers began by collecting water samples from twelve sites along the river. [2] Each sample was tested for pH, dissolved oxygen, and heavy metal concentrations. [3] The team then compared their results to baseline measurements taken in 2015. [4] All samples were stored at 4 degrees Celsius until analysis could be performed. [5] Significant increases in lead and mercury levels were found at sites downstream from the industrial park.",
        "correct": "After sentence 2",
        "wrong": [
            "Where it is now (after sentence 3)",
            "After sentence 5",
            "Before sentence 1"
        ],
        "explanation": {
            "right": "Sentence 4 describes sample storage (a step between collection and testing). It logically fits between testing preparation (sentence 2 describes WHAT was tested) and analysis/comparison (sentence 3). Actually, it best follows collection (sentence 1) or precedes testing (sentence 2), but placing it after 2 groups all sample handling together before moving to results.",
            "traps": [
                "After sentence 3 (current position), storage information disrupts the flow from comparison to findings.",
                "After sentence 5, storage is irrelevant once results have been presented.",
                "Before sentence 1, a storage detail makes no sense before samples have been collected."
            ],
            "hook": "In methodology descriptions, follow chronological order: collect > store > test > compare > report results."
        }
    },
    {
        "id": "writ_organization_07",
        "category": "writing",
        "subcategory": "organization",
        "question": "Which choice provides the most effective conclusion for this paragraph?",
        "context": "Urban beekeeping has surged in popularity over the past decade. Cities including New York, London, and Paris have revised ordinances to permit rooftop hives. Studies show that urban bees actually produce more honey per hive than rural bees, likely due to the diverse flowering plants in parks and gardens. ______",
        "correct": "What was once dismissed as an eccentric hobby has become a mainstream urban sustainability practice.",
        "wrong": [
            "Bees are fascinating insects that have been kept by humans for thousands of years.",
            "However, some critics argue that too many hives in a small area could spread disease among bee populations.",
            "The first evidence of beekeeping dates to ancient Egypt, where bees were kept in cylindrical clay hives."
        ],
        "explanation": {
            "right": "This effectively concludes by framing the paragraph's evidence (legal changes, productivity data) as proof of a larger shift from 'eccentric hobby' to 'mainstream practice,' providing a satisfying wrap-up.",
            "traps": [
                "General facts about bees don't conclude the specific argument about urban beekeeping's rise.",
                "Introducing a counterargument in the last sentence opens a new discussion rather than concluding the paragraph.",
                "Ancient Egyptian history doesn't conclude a paragraph about modern urban beekeeping trends."
            ],
            "hook": "Effective conclusions zoom out: they show the bigger picture or significance of the evidence presented in the paragraph."
        }
    },
    {
        "id": "writ_organization_08",
        "category": "writing",
        "subcategory": "organization",
        "question": "The writer wants to add the following sentence: 'However, recent evidence suggests this long-held assumption may be incorrect.' Where should it be placed?",
        "context": "[1] For decades, scientists believed that adult human brains could not generate new neurons. [2] In 1998, researchers at the Sahlgrenska University Hospital in Sweden detected new neuron growth in the hippocampus of adult patients. [3] Since then, multiple studies have confirmed that neurogenesis continues throughout adult life, primarily in regions associated with memory and learning. [4] This discovery has profound implications for treating neurodegenerative diseases.",
        "correct": "After sentence 1",
        "wrong": [
            "Before sentence 1",
            "After sentence 3",
            "After sentence 4"
        ],
        "explanation": {
            "right": "The sentence pivots from the old belief (sentence 1: brains can't generate new neurons) to the new evidence (sentence 2: they can). It's the logical bridge between the assumption and its refutation.",
            "traps": [
                "Before sentence 1, there's no assumption yet to refer to with 'this long-held assumption.'",
                "After sentence 3, the evidence has already been presented, making 'recent evidence suggests' redundant and late.",
                "After sentence 4, the passage has already moved to implications, making a pivot back to questioning the assumption illogical."
            ],
            "hook": "Pivot sentences ('However, recent evidence...') belong between the old idea they challenge and the new evidence they introduce."
        }
    },
    {
        "id": "writ_organization_09",
        "category": "writing",
        "subcategory": "organization",
        "question": "Which choice most effectively introduces the paragraph that follows?",
        "context": "[Introduction needed for a paragraph that discusses:] The challenges of the construction included unstable permafrost, extreme temperatures reaching -50 degrees Celsius, and the need to transport materials across roadless terrain for hundreds of kilometers.",
        "correct": "Building the Trans-Siberian Railway required engineers to overcome some of the most hostile conditions on Earth.",
        "wrong": [
            "The Trans-Siberian Railway is the longest railway line in the world.",
            "Russia's climate varies dramatically from west to east.",
            "Many workers died during the construction of the Trans-Siberian Railway."
        ],
        "explanation": {
            "right": "This sentence introduces 'hostile conditions' that the paragraph then specifies (permafrost, extreme cold, roadless terrain), creating a clear general-to-specific structure.",
            "traps": [
                "Length is interesting but doesn't set up a paragraph about construction challenges.",
                "Russia's climate variation is too broad and doesn't specifically introduce construction challenges.",
                "Worker deaths, while related to difficulty, are not what the paragraph actually discusses (it focuses on environmental obstacles)."
            ],
            "hook": "An introductory sentence should be a general version of what the paragraph specifies. If details are A, B, C, the intro should name the category they share."
        }
    },
    {
        "id": "writ_organization_10",
        "category": "writing",
        "subcategory": "organization",
        "question": "To improve the logical flow of the paragraph, sentence 2 should be placed:",
        "context": "[1] The museum's new exhibit traces the evolution of aviation from the Wright Brothers to modern spacecraft. [2] Visitors particularly enjoy the flight simulator, which replicates the experience of piloting a 1940s fighter plane. [3] The first gallery displays replicas of early gliders and the original Wright Flyer blueprints. [4] The second gallery covers the golden age of commercial aviation, featuring a restored DC-3 fuselage. [5] The final gallery showcases space exploration artifacts, including an Apollo-era spacesuit.",
        "correct": "After sentence 5",
        "wrong": [
            "Where it is now (after sentence 1)",
            "After sentence 3",
            "After sentence 4"
        ],
        "explanation": {
            "right": "Sentences 3, 4, and 5 form a chronological tour of the galleries (early aviation > commercial > space). Sentence 2 about the flight simulator is a separate highlight that fits best after the tour description is complete.",
            "traps": [
                "After sentence 1 (current position), it interrupts the chronological gallery descriptions that should follow immediately.",
                "After sentence 3, it breaks the chronological sequence between early aviation and commercial aviation galleries.",
                "After sentence 4, it interrupts the progression from commercial aviation to space exploration."
            ],
            "hook": "When one sentence breaks a clear sequence (chronological, spatial, logical), move it before or after the sequence so it doesn't interrupt the flow."
        }
    },
    {
        "id": "writ_organization_11",
        "category": "writing",
        "subcategory": "organization",
        "question": "Which choice most effectively opens the essay?",
        "context": "Essay about how the discovery of deep-sea hydrothermal vents in 1977 challenged fundamental assumptions about where life can exist. The essay goes on to discuss the unique organisms found near vents and their implications for astrobiology.",
        "correct": "Before 1977, biologists assumed that all life on Earth ultimately depended on sunlight - an assumption that shattered when researchers discovered thriving ecosystems in the pitch-black depths of the ocean floor.",
        "wrong": [
            "The ocean covers more than 70% of Earth's surface and remains largely unexplored.",
            "In this essay, I will discuss hydrothermal vents and their importance to biology.",
            "Hydrothermal vents are openings in the sea floor where geothermally heated water is discharged."
        ],
        "explanation": {
            "right": "This opening establishes the pre-1977 assumption and its dramatic overturning, creating narrative tension that propels the reader into the essay's argument.",
            "traps": [
                "General ocean facts are too broad and don't connect to the specific argument about life and sunlight.",
                "Announcing what you'll discuss ('In this essay, I will...') is weak and academic writing convention discourages it.",
                "A technical definition is informative but lacks the narrative hook and doesn't frame why the discovery mattered."
            ],
            "hook": "Strong essay openings often present a 'before vs. after' that shows why the topic is surprising or important. They make the reader want to know more."
        }
    },
    {
        "id": "writ_organization_12",
        "category": "writing",
        "subcategory": "organization",
        "question": "The writer wants to add the sentence: 'This finding contradicted the prevailing theory that color perception was fixed at birth.' Where should it be placed?",
        "context": "[1] Researchers at the University of Washington conducted an experiment on color perception in adults. [2] Participants were shown ambiguous color samples at the boundary between blue and green. [3] After two weeks of training with labeled samples, participants' categorical boundaries shifted measurably. [4] The implications for understanding brain plasticity extend well beyond color vision.",
        "correct": "After sentence 3",
        "wrong": [
            "After sentence 1",
            "After sentence 2",
            "After sentence 4"
        ],
        "explanation": {
            "right": "The new sentence interprets the finding in sentence 3 (boundaries shifted) by explaining its significance (contradicted the fixed-at-birth theory). It bridges the specific result and the broader implications in sentence 4.",
            "traps": [
                "After sentence 1, no finding has been described yet to contradict anything.",
                "After sentence 2, the experiment's result hasn't been stated yet, so there's nothing to interpret.",
                "After sentence 4, the passage has already moved to broader implications, making a return to interpretation awkward."
            ],
            "hook": "Interpretation sentences belong between the result they explain and the broader implications they introduce. Order: Method > Result > Interpretation > Implication."
        }
    },
    {
        "id": "writ_organization_13",
        "category": "writing",
        "subcategory": "organization",
        "question": "Which ordering of the body paragraphs creates the most logical argument?",
        "context": "Thesis: Schools should replace letter grades with narrative evaluations. Paragraph X: Addresses the counterargument that narrative evaluations are too time-intensive for teachers. Paragraph Y: Presents research showing narrative feedback improves student learning more than letter grades. Paragraph Z: Explains how letter grades create anxiety and discourage risk-taking in students.",
        "correct": "Z, Y, X",
        "wrong": [
            "X, Y, Z",
            "Y, Z, X",
            "X, Z, Y"
        ],
        "explanation": {
            "right": "Z (problem with current system) > Y (evidence that alternative is better) > X (addressing objections) follows the logical pattern: establish the problem, present the solution's benefits, then handle objections.",
            "traps": [
                "Leading with the counterargument (X) before establishing the problem weakens the argument by putting the reader on the defensive.",
                "Starting with evidence (Y) before explaining the problem (Z) gives solutions before the reader understands what needs fixing.",
                "Leading with the counterargument and ending with evidence leaves the strongest material in the middle where it has less impact."
            ],
            "hook": "Persuasive essay structure: Problem > Solution/Evidence > Address Objections. Build your case before defending it."
        }
    },
    {
        "id": "writ_organization_14",
        "category": "writing",
        "subcategory": "organization",
        "question": "For cohesion, where should the following sentence be placed: 'These proteins, called antifreeze glycoproteins, lower the freezing point of the fish's blood.'?",
        "context": "[1] Antarctic icefish have evolved a remarkable adaptation to survive in waters that drop below 0 degrees Celsius. [2] Their bodies produce specialized proteins that prevent ice crystals from forming in their bloodstream. [3] Without this adaptation, the fish's blood would freeze solid within minutes of exposure to Antarctic waters. [4] Scientists are now studying these proteins for potential applications in organ preservation and food storage.",
        "correct": "After sentence 2",
        "wrong": [
            "After sentence 1",
            "After sentence 3",
            "After sentence 4"
        ],
        "explanation": {
            "right": "The new sentence names the proteins ('antifreeze glycoproteins') and explains their mechanism ('lower the freezing point'), directly elaborating on the 'specialized proteins' introduced in sentence 2.",
            "traps": [
                "After sentence 1, no proteins have been mentioned yet for 'these proteins' to refer to.",
                "After sentence 3, the survival context has closed and the explanation would interrupt the pivot to applications.",
                "After sentence 4, returning to explain the proteins' mechanism after discussing applications would be anticlimactic."
            ],
            "hook": "Naming/defining sentences should immediately follow the first mention of the concept they name. 'These X, called Y' must follow the sentence introducing X."
        }
    },
    {
        "id": "writ_organization_15",
        "category": "writing",
        "subcategory": "organization",
        "question": "Which choice provides the most effective transition between these two paragraphs?",
        "context": "End of paragraph 1: '...and by 1995, the wolf population in Yellowstone had been completely eliminated.' Beginning of paragraph 2 (transition needed): ______ Elk populations, freed from their primary predator, exploded to unsustainable levels, overgrazing willows and aspens along riverbanks.",
        "correct": "The wolves' absence triggered an ecological cascade that transformed the park's entire landscape.",
        "wrong": [
            "Wolves are apex predators that play an important role in ecosystems.",
            "In 1995, wolves were reintroduced to Yellowstone National Park.",
            "Many environmentalists were concerned about the loss of wolves in Yellowstone."
        ],
        "explanation": {
            "right": "This sentence bridges the wolf elimination (end of paragraph 1) and its ecological effects (paragraph 2's content about elk overpopulation), previewing the paragraph's argument about cascading consequences.",
            "traps": [
                "A general statement about wolves' ecological role doesn't specifically connect the elimination to the consequences that follow.",
                "Wolf reintroduction is likely a later topic; this paragraph discusses the effects of their ABSENCE, not their return.",
                "Environmentalists' concerns don't set up the specific ecological data about elk and vegetation that follows."
            ],
            "hook": "Paragraph transitions should look both backward (acknowledging what was just discussed) and forward (previewing what comes next)."
        }
    },
    {
        "id": "vocab2_acquiesce",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ACQUIESCE mean?",
        "context": "Rather than continue the argument, she chose to acquiesce to her parents' wishes about college.",
        "correct": "To accept something reluctantly but without protest",
        "wrong": [
            "To acquire something through effort",
            "To accuse someone formally",
            "To become familiar with a topic"
        ],
        "explanation": {
            "right": "From Latin acquiescere (to find rest in). It means to comply passively, accepting without resistance even if you disagree.",
            "traps": [
                "'Acquire' sounds similar but means to obtain something.",
                "'Accuse' shares the 'ac-' prefix but means to charge with wrongdoing.",
                "'Acquaint' sounds similar but means to make aware or familiar."
            ],
            "hook": "ACQUIESCE = AC-QUIET-S: you go quiet and accept it."
        }
    },
    {
        "id": "vocab2_acrimonious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ACRIMONIOUS mean?",
        "context": "The divorce proceedings became increasingly acrimonious, with both sides making bitter accusations.",
        "correct": "Angry and bitter, especially in speech or debate",
        "wrong": [
            "Ceremonious and formal",
            "Criminal in nature",
            "Deeply sorrowful"
        ],
        "explanation": {
            "right": "From Latin acrimonia (sharpness). Describes harsh, bitter feelings or words, especially in disputes.",
            "traps": [
                "'Ceremonious' sounds somewhat similar but means formally polite.",
                "'Criminal' shares the 'cri-' sound but relates to lawbreaking.",
                "'Sorrowful' is negative but passive; acrimonious is actively hostile."
            ],
            "hook": "ACRID + MONEY: think of a bitter fight over money in a divorce."
        }
    },
    {
        "id": "vocab2_admonish",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ADMONISH mean?",
        "context": "The teacher admonished the students for talking during the exam, warning them not to do it again.",
        "correct": "To warn or reprimand someone firmly",
        "wrong": [
            "To admire greatly",
            "To demolish completely",
            "To publish widely"
        ],
        "explanation": {
            "right": "From Latin admonere (to advise, warn). It means to scold or caution, but with the intent of correcting behavior.",
            "traps": [
                "'Admire' shares the 'adm-' prefix but means to regard with respect.",
                "'Demolish' sounds similar but means to destroy.",
                "'Publish' rhymes but means to make public."
            ],
            "hook": "AD-MON-ISH: a MONitor (teacher) gives you an AD (warning)."
        }
    },
    {
        "id": "vocab2_aggrandize",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does AGGRANDIZE mean?",
        "context": "The CEO used every press interview to aggrandize his own role in the company's success.",
        "correct": "To increase the power, status, or wealth of; to make appear greater",
        "wrong": [
            "To make angry or agitated",
            "To organize into groups",
            "To summarize briefly"
        ],
        "explanation": {
            "right": "From French agrandir (to make larger). Means to enhance reputation or power, often in an exaggerated way.",
            "traps": [
                "'Aggravate' shares 'aggr-' but means to annoy or worsen.",
                "'Aggregate' sounds similar but means to collect together.",
                "'Abridge' relates to size but means to shorten."
            ],
            "hook": "ag-GRAND-ize: to make yourself look GRAND."
        }
    },
    {
        "id": "vocab2_alacrity",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ALACRITY mean?",
        "context": "When offered the promotion, she accepted with alacrity, eager to take on new challenges.",
        "correct": "Brisk and cheerful readiness; eager willingness",
        "wrong": [
            "A state of alarm or panic",
            "Clarity of thought",
            "A lack of energy or motivation"
        ],
        "explanation": {
            "right": "From Latin alacritas (liveliness). It means enthusiastic and prompt readiness to act.",
            "traps": [
                "'Alarm' shares 'ala-' but means fear or warning.",
                "'Clarity' rhymes but means clearness of thought.",
                "'Lethargy' is the opposite: sluggishness and lack of energy."
            ],
            "hook": "A-LACK-rity: there's a LACK of hesitation; you jump right in."
        }
    },
    {
        "id": "vocab2_ameliorate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does AMELIORATE mean?",
        "context": "The new policy was designed to ameliorate the housing crisis by increasing affordable units.",
        "correct": "To make something bad or unsatisfactory better",
        "wrong": [
            "To make worse or more severe",
            "To measure precisely",
            "To melt or dissolve gradually"
        ],
        "explanation": {
            "right": "From Latin ameliorare (to make better). Specifically means improving something that was previously bad.",
            "traps": [
                "'Exacerbate' is the opposite: to make worse.",
                "'Calibrate' involves measurement, not improvement.",
                "'Deteriorate' means to worsen, the exact opposite."
            ],
            "hook": "A-MELIORATE: think 'a MELIOR (better)' - Latin melior means better."
        }
    },
    {
        "id": "vocab2_anachronism",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ANACHRONISM mean?",
        "context": "The wristwatch on the actor's arm was an anachronism in a film set in ancient Rome.",
        "correct": "Something placed in the wrong time period",
        "wrong": [
            "A type of spider or arachnid",
            "A person who lives alone",
            "A word with two meanings"
        ],
        "explanation": {
            "right": "From Greek ana (against) + chronos (time). Something out of its proper historical time.",
            "traps": [
                "'Arachnid' sounds similar but refers to spiders.",
                "'Anarchist' shares 'ana-' but means someone who rejects authority.",
                "'Anagram' shares 'ana-' but is a word puzzle."
            ],
            "hook": "ANA-CHRON-ism: CHRON = time (like chronology). Something AGAINST its TIME."
        }
    },
    {
        "id": "vocab2_anathema",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ANATHEMA mean?",
        "context": "The idea of censorship was anathema to the journalist who had devoted her life to free speech.",
        "correct": "Something or someone intensely disliked or loathed",
        "wrong": [
            "A national song or hymn",
            "A mathematical formula",
            "A collection of literary works"
        ],
        "explanation": {
            "right": "From Greek anathema (accursed thing). Means something detested or cursed, the ultimate object of aversion.",
            "traps": [
                "'Anthem' sounds very similar but means a song of praise or patriotism.",
                "'Theorem' shares '-ema' but is a mathematical statement.",
                "'Anthology' shares 'anth-' but means a collection of writings."
            ],
            "hook": "ANATHEMA is NOT an ANTHEM - it's something you absolutely HATE, not celebrate."
        }
    },
    {
        "id": "vocab2_antediluvian",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ANTEDILUVIAN mean?",
        "context": "His antediluvian views on women's roles in society shocked the younger members of the committee.",
        "correct": "Extremely old-fashioned or outdated",
        "wrong": [
            "Opposed to flooding or water damage",
            "Relating to a formal introduction",
            "Occurring before dinner"
        ],
        "explanation": {
            "right": "From Latin ante (before) + diluvium (flood/deluge). Literally 'before the Biblical flood' - so ancient as to be ridiculously outdated.",
            "traps": [
                "'Anti-diluvian' might suggest being against floods, but 'ante' means before, not against.",
                "'Antecedent' shares 'ante-' but means something that comes before.",
                "'Ante-dinner' is not a real word; 'ante' here refers to the Biblical deluge."
            ],
            "hook": "ANTE-DILUVIAN: before the DELUGE (Noah's flood). So old it's prehistoric."
        }
    },
    {
        "id": "vocab2_antithesis",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ANTITHESIS mean?",
        "context": "Her calm, measured approach was the antithesis of his impulsive decision-making style.",
        "correct": "The direct opposite or contrast of something",
        "wrong": [
            "A supporting argument or evidence",
            "A medical treatment for poison",
            "A preliminary theory or guess"
        ],
        "explanation": {
            "right": "From Greek anti (against) + thesis (placing). The complete opposite or contrast to something else.",
            "traps": [
                "'Synthesis' sounds similar but means combining things together.",
                "'Antidote' shares 'anti-' but is a remedy for poison.",
                "'Hypothesis' shares '-thesis' but means a proposed explanation."
            ],
            "hook": "ANTI-THESIS: literally AGAINST the THESIS - the exact opposite position."
        }
    },
    {
        "id": "vocab2_apocryphal",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does APOCRYPHAL mean?",
        "context": "The story about George Washington and the cherry tree is almost certainly apocryphal.",
        "correct": "Of doubtful authenticity; widely circulated but probably untrue",
        "wrong": [
            "Related to the apocalypse or end times",
            "Extremely important or prophetic",
            "Written in a cryptic code"
        ],
        "explanation": {
            "right": "From Greek apokryphos (hidden, obscure). Describes stories or accounts that are widely believed but likely fabricated.",
            "traps": [
                "'Apocalyptic' sounds similar but relates to catastrophic end-of-world events.",
                "'Prophetic' relates to predictions, not questionable stories.",
                "'Cryptic' shares 'cryp-' but means mysterious or coded."
            ],
            "hook": "A-POCRYPHAL: a POCKET-full of stories that probably aren't real."
        }
    },
    {
        "id": "vocab2_approbation",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does APPROBATION mean?",
        "context": "The scientist's groundbreaking research earned the approbation of the entire academic community.",
        "correct": "Approval or praise, especially formal or official",
        "wrong": [
            "A period of testing or trial",
            "Strong disapproval or condemnation",
            "An approximate calculation"
        ],
        "explanation": {
            "right": "From Latin approbare (to approve). Formal expression of approval, praise, or commendation.",
            "traps": [
                "'Probation' sounds very similar but means a trial period or supervised release.",
                "'Opprobrium' sounds similar but means the OPPOSITE: harsh criticism.",
                "'Approximation' shares 'app-' but means a rough estimate."
            ],
            "hook": "APPRO-BATION: APPROVAL. Not to be confused with probation (testing)."
        }
    },
    {
        "id": "vocab2_assiduous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ASSIDUOUS mean?",
        "context": "Through assiduous practice over many years, she became one of the finest violinists of her generation.",
        "correct": "Showing great care, attention, and persistent effort",
        "wrong": [
            "Extremely acidic or corrosive",
            "Happening by chance or accident",
            "Sly and deceitful"
        ],
        "explanation": {
            "right": "From Latin assidere (to sit beside). Means showing careful, sustained attention and hard work.",
            "traps": [
                "'Acidulous' sounds similar but means sharp or sour.",
                "'Casual' is the opposite: careless and informal.",
                "'Insidious' sounds similar but means treacherous or harmful in a subtle way."
            ],
            "hook": "ASSIDUOUS: you SIT (assid-) and work diligently, never leaving your task."
        }
    },
    {
        "id": "vocab2_auspicious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does AUSPICIOUS mean?",
        "context": "The sunny weather on graduation day seemed like an auspicious start to their new lives.",
        "correct": "Suggesting a positive and successful future; favorable",
        "wrong": [
            "Suspicious or causing doubt",
            "Related to hospital care",
            "Extremely luxurious"
        ],
        "explanation": {
            "right": "From Latin auspicium (divination by observing birds). Means showing signs that suggest future success.",
            "traps": [
                "'Suspicious' sounds very similar but means causing distrust.",
                "'Hospice' shares some sounds but relates to end-of-life care.",
                "'Ostentatious' is about showy display, not favorable signs."
            ],
            "hook": "AUS-PIC-IOUS: ancient Romans watched birds (avis) for PICTURES of the future. Good birds = good future."
        }
    },
    {
        "id": "vocab2_avarice",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does AVARICE mean?",
        "context": "The billionaire's avarice knew no bounds; despite his wealth, he refused to donate to any charity.",
        "correct": "Extreme greed for wealth or material gain",
        "wrong": [
            "A strong desire for adventure",
            "Deep-seated hatred or malice",
            "An appreciation for fine art"
        ],
        "explanation": {
            "right": "From Latin avaritia (greed). One of the seven deadly sins - an insatiable desire for money and possessions.",
            "traps": [
                "'Adventure' shares 'av-' but means exciting experiences.",
                "'Malice' is negative but means desire to harm, not desire for wealth.",
                "'Aesthetics' might connect to 'appreciation' but avarice is pure greed."
            ],
            "hook": "AVAR-ICE: an AVATAR of greed, cold as ICE toward others' needs."
        }
    },
    {
        "id": "vocab2_bellicose",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does BELLICOSE mean?",
        "context": "The senator's bellicose rhetoric about the neighboring country alarmed diplomats on both sides.",
        "correct": "Demonstrating aggression and willingness to fight",
        "wrong": [
            "Beautiful and graceful",
            "Loudly vocal or noisy",
            "Generous and charitable"
        ],
        "explanation": {
            "right": "From Latin bellum (war). Describes someone eager to fight or start conflicts.",
            "traps": [
                "'Belle' (beautiful) shares the sound but has completely different meaning.",
                "'Vociferous' (loud) might be confused because bellicose people are often loud.",
                "'Benevolent' starts with 'be-' but means kind and generous."
            ],
            "hook": "BELLI-COSE: BELLUM = war in Latin. A bellicose person rings the war BELL."
        }
    },
    {
        "id": "vocab2_bilious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does BILIOUS mean?",
        "context": "After reading the unfair review, she wrote a bilious response that she later regretted sending.",
        "correct": "Spiteful; bad-tempered; sickeningly unpleasant",
        "wrong": [
            "Having billions of something",
            "Relating to bills or legislation",
            "Extremely happy and content"
        ],
        "explanation": {
            "right": "From Latin bilis (bile). Originally meant nauseated; now means ill-tempered or full of bitter ill-feeling.",
            "traps": [
                "'Billions' sounds similar but is a number.",
                "'Bills' shares the 'bil-' sound but relates to money or laws.",
                "'Blissful' is the opposite emotional state."
            ],
            "hook": "BILIOUS = full of BILE. When bile rises, you feel sick and angry."
        }
    },
    {
        "id": "vocab2_blandishment",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does BLANDISHMENT mean?",
        "context": "Despite the salesman's blandishments, she refused to buy the overpriced extended warranty.",
        "correct": "Flattering or pleasing statements used to persuade",
        "wrong": [
            "A bland or tasteless quality",
            "A harsh punishment or reprimand",
            "A written legal document"
        ],
        "explanation": {
            "right": "From Latin blandiri (to flatter). Means coaxing, flattering words or actions meant to persuade someone.",
            "traps": [
                "'Bland' is embedded in the word but blandishments are actively flattering, not dull.",
                "'Punishment' is the opposite: blandishments are sweet talk.",
                "'Banishment' sounds similar but means exile or expulsion."
            ],
            "hook": "BLAND-ishment: they make criticism BLAND by coating it with sweet flattery."
        }
    },
    {
        "id": "vocab2_bombastic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does BOMBASTIC mean?",
        "context": "The politician's bombastic speeches were full of grand promises but short on practical details.",
        "correct": "High-sounding language with little meaning; pompously inflated",
        "wrong": [
            "Explosive and destructive",
            "Fantastic and wonderful",
            "Energetic and enthusiastic"
        ],
        "explanation": {
            "right": "From 'bombast' (cotton padding used to stuff clothes). Language that is padded with important-sounding but empty words.",
            "traps": [
                "'Bomb' is in the word but it means inflated speech, not explosions.",
                "'Fantastic' rhymes but means wonderful.",
                "'Enthusiastic' shares '-astic' but means genuinely excited."
            ],
            "hook": "BOMB-ASTIC: speech STUFFED with hot air, like a bomb about to burst with emptiness."
        }
    },
    {
        "id": "vocab2_byzantine",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does BYZANTINE mean?",
        "context": "Navigating the byzantine regulations of the tax code required hiring three different specialists.",
        "correct": "Excessively complicated and typically involving intrigue",
        "wrong": [
            "Ancient and historically significant",
            "Relating to business or commerce",
            "Simple and straightforward"
        ],
        "explanation": {
            "right": "From the Byzantine Empire, known for its complex politics and bureaucracy. Means overly intricate and devious.",
            "traps": [
                "It does relate to the Byzantine Empire historically, but the adjective means 'overly complex.'",
                "'Business' sounds somewhat similar but is unrelated.",
                "'Simple' is the exact opposite of byzantine."
            ],
            "hook": "BYZANTINE = the most COMPLEX bureaucracy imaginable, like the old empire's court intrigues."
        }
    },
    {
        "id": "vocab2_cabal",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CABAL mean?",
        "context": "A cabal of senior executives secretly plotted to oust the company's founder from the board.",
        "correct": "A secret political group or faction engaged in plotting",
        "wrong": [
            "A type of cable or rope",
            "A horse-drawn carriage",
            "A large public gathering"
        ],
        "explanation": {
            "right": "From Hebrew qabbalah (tradition/mystical interpretation). A small, secretive group conspiring for political purposes.",
            "traps": [
                "'Cable' sounds similar but is a wire or rope.",
                "'Cabriolet' (cab) is a vehicle, not a conspiracy.",
                "'Assembly' is a gathering but public, not secret."
            ],
            "hook": "CABAL: a CAB full of plotters, secretly driving toward their goal."
        }
    },
    {
        "id": "vocab2_cacophony",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CACOPHONY mean?",
        "context": "The cacophony of car horns, jackhammers, and shouting vendors made conversation impossible.",
        "correct": "A harsh, jarring mixture of discordant sounds",
        "wrong": [
            "A beautiful musical harmony",
            "A type of telephone device",
            "A large collection of plants"
        ],
        "explanation": {
            "right": "From Greek kakos (bad) + phone (sound). A mixture of loud, unpleasant, clashing sounds.",
            "traps": [
                "'Euphony' (pleasant sound) is the opposite.",
                "'Telephone' shares '-phone' (sound) but is a communication device.",
                "'Canopy' sounds similar but is an overhead covering."
            ],
            "hook": "CACO-PHONY: CACO = bad, PHONY = sound. BAD SOUND."
        }
    },
    {
        "id": "vocab2_capitulate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CAPITULATE mean?",
        "context": "After a six-month siege, the starving garrison had no choice but to capitulate to the enemy.",
        "correct": "To surrender or give in to an opponent's demands",
        "wrong": [
            "To take advantage of a situation",
            "To organize into chapters or headings",
            "To invest money wisely"
        ],
        "explanation": {
            "right": "From Latin capitulare (to draw up under headings - terms of surrender). Means to cease resisting and accept defeat.",
            "traps": [
                "'Capitalize' sounds similar but means to take advantage of or to use capital letters.",
                "'Capitulate' contains 'capit-' (head/chapter) but doesn't mean to organize.",
                "'Capital' relates to money but capitulate means to surrender."
            ],
            "hook": "CAP-IT-ULATE: you CAP IT (put a lid on resistance) and give up."
        }
    },
    {
        "id": "vocab2_castigate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CASTIGATE mean?",
        "context": "The editorial castigated the mayor for his failure to address the city's crumbling infrastructure.",
        "correct": "To reprimand or criticize someone severely",
        "wrong": [
            "To cast aside or discard",
            "To investigate thoroughly",
            "To purify or cleanse"
        ],
        "explanation": {
            "right": "From Latin castigare (to correct, chasten). Means to severely criticize or punish verbally.",
            "traps": [
                "'Cast' is in the word but it doesn't mean to throw away.",
                "'Investigate' shares '-igate' but means to examine.",
                "'Fumigate' shares '-igate' but means to cleanse with fumes."
            ],
            "hook": "CAST-I-GATE: they CAST harsh words at you like throwing stones at a GATE."
        }
    },
    {
        "id": "vocab2_circumlocution",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CIRCUMLOCUTION mean?",
        "context": "His circumlocution frustrated the interviewer, who simply wanted a yes or no answer.",
        "correct": "The use of many words to say something that could be said more directly",
        "wrong": [
            "The act of moving in a circle",
            "A formal speech given at a ceremony",
            "The process of locating something precisely"
        ],
        "explanation": {
            "right": "From Latin circum (around) + locutio (speaking). Talking around a subject instead of addressing it directly.",
            "traps": [
                "'Circumnavigate' shares 'circum-' and involves going around, but physically.",
                "'Elocution' shares '-locution' but means the art of clear speaking.",
                "'Geolocation' shares '-location' but means finding a physical position."
            ],
            "hook": "CIRCUM-LOCUTION: speaking in CIRCLES around the point (LOCUTION = speech)."
        }
    },
    {
        "id": "vocab2_clandestine",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CLANDESTINE mean?",
        "context": "The spy conducted clandestine meetings in darkened coffee shops to exchange classified information.",
        "correct": "Done secretly or kept hidden, especially because illicit",
        "wrong": [
            "Relating to a specific clan or family",
            "Extremely clean and pristine",
            "Happening by accident"
        ],
        "explanation": {
            "right": "From Latin clandestinus (secret, hidden). Done in secret, often because it would not be approved of.",
            "traps": [
                "'Clan' is embedded but clandestine means secret, not family-related.",
                "'Pristine' sounds somewhat similar but means perfectly clean.",
                "'Accidental' is unrelated; clandestine acts are deliberate."
            ],
            "hook": "CLAN-DESTINE: a secret CLAN with a hidden DESTINY."
        }
    },
    {
        "id": "vocab2_cogent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does COGENT mean?",
        "context": "The lawyer presented a cogent argument that convinced even the most skeptical jurors.",
        "correct": "Clear, logical, and convincing",
        "wrong": [
            "Related to thinking or cognition",
            "Urgent and pressing",
            "Aware and conscious"
        ],
        "explanation": {
            "right": "From Latin cogere (to compel). An argument so well-reasoned and logical that it compels agreement.",
            "traps": [
                "'Cognition' shares 'cog-' and relates to thinking, but cogent specifically means convincing.",
                "'Urgent' (pressing) is confused with the compelling force of cogent reasoning.",
                "'Cognizant' shares 'cog-' but means aware."
            ],
            "hook": "CO-GENT: like a gentle COG that perfectly fits, making the argument's machinery work smoothly."
        }
    },
    {
        "id": "vocab2_commensurate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does COMMENSURATE mean?",
        "context": "The salary offered was not commensurate with her ten years of experience in the field.",
        "correct": "Corresponding in size, extent, or degree; proportional",
        "wrong": [
            "Beginning at the same time",
            "Worthy of commemoration",
            "Able to be measured accurately"
        ],
        "explanation": {
            "right": "From Latin com (together) + mensurare (to measure). Means in proportion, matching in scale or degree.",
            "traps": [
                "'Commence' sounds similar but means to begin.",
                "'Commemorate' shares 'comm-' but means to honor in memory.",
                "'Measurable' relates to the root 'mensur-' but commensurate means proportional, not just measurable."
            ],
            "hook": "COM-MENSUR-ATE: things MEASURED together that match up proportionally."
        }
    },
    {
        "id": "vocab2_concomitant",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CONCOMITANT mean?",
        "context": "Economic growth brought concomitant increases in pollution and urban sprawl.",
        "correct": "Naturally accompanying or associated with something",
        "wrong": [
            "In conflict or disagreement with",
            "Occurring beforehand as a warning",
            "Impressive and commanding"
        ],
        "explanation": {
            "right": "From Latin concomitari (to accompany). Something that happens alongside something else as a natural companion.",
            "traps": [
                "'Conflicting' starts with 'con-' but means opposing, not accompanying.",
                "'Premonitory' means warning beforehand, not accompanying.",
                "'Commanding' shares some sounds but means authoritative."
            ],
            "hook": "CON-COMIT-ANT: COM = with, like a COMPANION that always comes along."
        }
    },
    {
        "id": "vocab2_conflagration",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CONFLAGRATION mean?",
        "context": "The conflagration destroyed three city blocks before firefighters could bring it under control.",
        "correct": "An extensive and destructive fire",
        "wrong": [
            "A public celebration with flags",
            "A heated verbal argument",
            "A gathering of world leaders"
        ],
        "explanation": {
            "right": "From Latin conflagrare (to burn up). A large, devastating fire that causes serious damage.",
            "traps": [
                "'Flags' appears in the word but it has nothing to do with flags or celebrations.",
                "'Altercation' (argument) is a conflict but not a fire.",
                "'Conference' starts with 'conf-' but means a meeting."
            ],
            "hook": "CON-FLAG-RATION: imagine FLAGS on fire, burning everything down."
        }
    },
    {
        "id": "vocab2_conflate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CONFLATE mean?",
        "context": "Critics argue that the media often conflates correlation with causation in science reporting.",
        "correct": "To merge or combine two or more things, especially mistakenly",
        "wrong": [
            "To inflate or exaggerate greatly",
            "To contradict or oppose",
            "To set on fire"
        ],
        "explanation": {
            "right": "From Latin conflare (to blow together). To combine two distinct things into one, often incorrectly treating them as the same.",
            "traps": [
                "'Inflate' shares '-flate' but means to expand or exaggerate.",
                "'Conflict' shares 'confl-' but means to oppose.",
                "'Conflagration' shares 'confl-' but relates to fire."
            ],
            "hook": "CON-FLATE: blowing (flat = blow) two things TOGETHER until they seem like one."
        }
    },
    {
        "id": "vocab2_contrite",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CONTRITE mean?",
        "context": "The student appeared genuinely contrite after realizing how much her cheating had hurt her classmates.",
        "correct": "Feeling deep remorse and guilt for wrongdoing",
        "wrong": [
            "Stubbornly defiant",
            "Overly polite or formal",
            "Physically exhausted"
        ],
        "explanation": {
            "right": "From Latin conterere (to grind, crush). Feeling crushed by guilt; deeply sorry for one's actions.",
            "traps": [
                "'Contrary' sounds similar but means opposite or defiant.",
                "'Courteous' shares some sounds but means polite.",
                "'Contorted' sounds similar but means twisted."
            ],
            "hook": "CON-TRITE: your spirit is GROUND DOWN (trite = worn) by guilt."
        }
    },
    {
        "id": "vocab2_corpulent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CORPULENT mean?",
        "context": "The corpulent man struggled to fit comfortably into the narrow airplane seat.",
        "correct": "Having a large, bulky body; excessively fat",
        "wrong": [
            "Relating to a military corps",
            "Physically strong and muscular",
            "Pale and lifeless like a corpse"
        ],
        "explanation": {
            "right": "From Latin corpulentus (fleshy). A formal or literary way to describe someone who is very overweight.",
            "traps": [
                "'Corps' shares the root 'corp-' (body) but refers to a military unit.",
                "'Muscular' relates to body type but means strong, not fat.",
                "'Corpse-like' shares 'corp-' but means deathly pale, not fat."
            ],
            "hook": "CORP-ULENT: a BODY (corpus) that is very FULL and round."
        }
    },
    {
        "id": "vocab2_corroborate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CORROBORATE mean?",
        "context": "Three independent witnesses corroborated the defendant's claim that he was elsewhere that night.",
        "correct": "To confirm or support with evidence or authority",
        "wrong": [
            "To work together on a project",
            "To decay or wear away gradually",
            "To contradict or deny firmly"
        ],
        "explanation": {
            "right": "From Latin corroborare (to strengthen). To provide additional evidence that confirms a statement or theory.",
            "traps": [
                "'Collaborate' sounds similar but means to work together.",
                "'Corrode' shares 'corr-' but means to wear away.",
                "'Contradict' starts with 'contr-' and means to deny, the opposite."
            ],
            "hook": "CORR-OBOR-ATE: to make ROBUST (robor = strength). Evidence that STRENGTHENS a claim."
        }
    },
    {
        "id": "vocab2_dearth",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DEARTH mean?",
        "context": "There is a dearth of affordable housing in many major cities, forcing families into overcrowded conditions.",
        "correct": "A scarcity or lack of something",
        "wrong": [
            "An abundance or surplus",
            "The earth or ground beneath",
            "A dear or beloved person"
        ],
        "explanation": {
            "right": "From Middle English derthe (costliness, scarcity). A severe shortage or inadequate supply of something.",
            "traps": [
                "It sounds like it could mean 'abundance' (dear = valuable = plentiful?) but it means the opposite.",
                "'Earth' is embedded but dearth means shortage, not ground.",
                "'Dear' is the root but dearth means scarcity (things are dear/expensive BECAUSE they're scarce)."
            ],
            "hook": "DEARTH: when things are DEAR (expensive), there's a DEARTH (shortage) of them."
        }
    },
    {
        "id": "vocab2_deferential",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DEFERENTIAL mean?",
        "context": "The young intern was deferential toward the senior partners, always addressing them formally.",
        "correct": "Showing respectful submission to someone's authority or wishes",
        "wrong": [
            "Different or distinct from others",
            "Tending to delay or postpone",
            "Indifferent or uncaring"
        ],
        "explanation": {
            "right": "From Latin deferre (to carry away, yield). Showing polite respect and yielding to another's judgment.",
            "traps": [
                "'Different' sounds similar but means unlike or distinct.",
                "'Dilatory' (delaying) connects to 'defer' (postpone) but deferential means respectful.",
                "'Indifferent' sounds related but means not caring."
            ],
            "hook": "DEFER-ENTIAL: you DEFER (yield) to someone because you respect their authority."
        }
    },
    {
        "id": "vocab2_deleterious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DELETERIOUS mean?",
        "context": "Years of smoking had a deleterious effect on her lung function and overall cardiovascular health.",
        "correct": "Causing harm or damage",
        "wrong": [
            "Causing something to be deleted or removed",
            "Extremely delightful or pleasing",
            "Occurring rapidly without warning"
        ],
        "explanation": {
            "right": "From Greek deleterios (destructive). Causing subtle or gradual harm, especially to health.",
            "traps": [
                "'Delete' sounds related and both involve destruction, but deleterious means harmful, not erased.",
                "'Delightful' shares 'dele-' but means pleasurable.",
                "'Accelerating' is unrelated; deleterious describes harm, not speed."
            ],
            "hook": "DELETE-RIOUS: it DELETES your health, seriously (seriously = rious)."
        }
    },
    {
        "id": "vocab2_demagogue",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DEMAGOGUE mean?",
        "context": "The demagogue exploited people's fears about immigration to gain political support.",
        "correct": "A political leader who gains power by appealing to popular fears and prejudices",
        "wrong": [
            "A democratic leader elected by the people",
            "An expert in demographics or population studies",
            "A person who demolishes old buildings"
        ],
        "explanation": {
            "right": "From Greek demos (people) + agogos (leading). A leader who manipulates masses through emotional appeals rather than rational argument.",
            "traps": [
                "'Democrat' shares 'demo-' (people) but means a supporter of democracy.",
                "'Demographer' shares 'demo-' but studies populations.",
                "'Demolisher' shares 'demo-' but means one who destroys."
            ],
            "hook": "DEMA-GOGUE: leads the PEOPLE (demos) through fear and emotion, not reason."
        }
    },
    {
        "id": "vocab2_desultory",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DESULTORY mean?",
        "context": "Their desultory conversation jumped from topic to topic without ever settling on anything meaningful.",
        "correct": "Lacking a clear plan, purpose, or direction; random",
        "wrong": [
            "Insulting or offensive",
            "Extremely boring and dull",
            "Purposeful and determined"
        ],
        "explanation": {
            "right": "From Latin desultor (a circus rider who leaps between horses). Means jumping from one thing to another without focus.",
            "traps": [
                "'Insulting' sounds embedded in the word but is unrelated.",
                "'Sultry' sounds similar but means hot and humid.",
                "'Resolute' (determined) is the opposite."
            ],
            "hook": "DE-SULT-ORY: like a circus rider who VAULTS (salire = jump) from horse to horse without settling."
        }
    },
    {
        "id": "vocab2_didactic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DIDACTIC mean?",
        "context": "The novel was criticized as too didactic, with characters delivering lengthy speeches about morality.",
        "correct": "Intended to teach, especially in a heavy-handed or moralizing way",
        "wrong": [
            "Relating to dictators or authoritarian rule",
            "Extremely detailed and precise",
            "Self-taught or autodidactic"
        ],
        "explanation": {
            "right": "From Greek didaktikos (apt at teaching). Can be neutral (educational) but often implies being preachy or patronizing.",
            "traps": [
                "'Dictatorial' sounds similar but means tyrannical.",
                "'Meticulous' (detailed) is about precision, not teaching.",
                "'Autodidact' (self-taught) uses the same root but describes the learner, not the teacher."
            ],
            "hook": "DID-ACTIC: 'Did you learn your lesson?' - that's the tone of something overly didactic."
        }
    },
    {
        "id": "vocab2_diffident",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DIFFIDENT mean?",
        "context": "Despite her enormous talent, she was diffident about performing in front of large audiences.",
        "correct": "Modest and shy; lacking self-confidence",
        "wrong": [
            "Different or unlike others",
            "Difficult to deal with",
            "Indifferent or apathetic"
        ],
        "explanation": {
            "right": "From Latin diffidere (to mistrust). Lacking confidence in oneself; reserved and hesitant.",
            "traps": [
                "'Different' sounds almost identical but means unlike.",
                "'Difficult' shares 'diff-' but means hard to do.",
                "'Indifferent' shares sounds but means uncaring."
            ],
            "hook": "DIFFI-DENT: you DISTRUST (dis + fidere) yourself, putting a DENT in your confidence."
        }
    },
    {
        "id": "vocab2_dilatory",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DILATORY mean?",
        "context": "The company's dilatory response to the safety concerns cost them millions in eventual lawsuits.",
        "correct": "Slow to act; intended to cause delay",
        "wrong": [
            "Related to dilation or expansion",
            "Extremely harmful or destructive",
            "Tending to dilute or weaken"
        ],
        "explanation": {
            "right": "From Latin dilatorius (tending to delay). Describes someone or something that wastes time or causes intentional delay.",
            "traps": [
                "'Dilate' sounds similar but means to expand or widen.",
                "'Deleterious' sounds similar but means harmful.",
                "'Dilute' shares 'dil-' but means to weaken by adding liquid."
            ],
            "hook": "DILA-TORY: DELAY-TORY. Someone who delays everything."
        }
    },
    {
        "id": "vocab2_dissemble",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DISSEMBLE mean?",
        "context": "He tried to dissemble his true feelings, but his trembling voice betrayed his anxiety.",
        "correct": "To conceal or disguise one's true motives or feelings",
        "wrong": [
            "To take apart or disassemble",
            "To distribute or spread widely",
            "To resemble or look similar to"
        ],
        "explanation": {
            "right": "From Latin dissimulare (to disguise). To hide one's real character, feelings, or intentions under a pretense.",
            "traps": [
                "'Disassemble' (take apart) sounds almost identical but means to deconstruct physically.",
                "'Disseminate' shares 'diss-' but means to spread information.",
                "'Resemble' shares '-semble' but means to look alike."
            ],
            "hook": "DIS-SEMBLE: you DIS-guise how you really feel, putting on a false SEMBLANCE."
        }
    },
    {
        "id": "vocab2_ebullient",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EBULLIENT mean?",
        "context": "The ebullient crowd erupted in cheers when the team scored the winning goal in overtime.",
        "correct": "Overflowing with enthusiasm, excitement, or cheerfulness",
        "wrong": [
            "Boiling hot in temperature",
            "Stubborn and unyielding",
            "Verbally abusive or cruel"
        ],
        "explanation": {
            "right": "From Latin ebullire (to bubble out). Describes someone bursting with high spirits and enthusiasm.",
            "traps": [
                "'Boiling' connects to the Latin root (bubbling) but ebullient describes emotional excitement.",
                "'Obstinate' (stubborn) is a different personality trait entirely.",
                "'Virulent' rhymes but means poisonous or hostile."
            ],
            "hook": "E-BULL-IENT: emotions BUBBLING over like boiling water, full of energy like a BULL."
        }
    },
    {
        "id": "vocab2_efficacious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EFFICACIOUS mean?",
        "context": "Clinical trials showed the new vaccine to be highly efficacious against all known variants.",
        "correct": "Successful in producing a desired result; effective",
        "wrong": [
            "Efficient in using resources",
            "Self-serving or selfish",
            "Superficially attractive"
        ],
        "explanation": {
            "right": "From Latin efficax (powerful, effective). Means producing the intended effect, especially of medicines or treatments.",
            "traps": [
                "'Efficient' is related but means using minimum resources; efficacious means actually achieving the result.",
                "'Egotistical' shares 'e-' but means self-centered.",
                "'Meretricious' means superficially attractive, not genuinely effective."
            ],
            "hook": "EFFI-CACIOUS: it has the CAPACITY to be EFFECTIVE. Results that actually work."
        }
    },
    {
        "id": "vocab2_effulgent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EFFULGENT mean?",
        "context": "The effulgent sunset painted the sky in brilliant shades of gold and crimson.",
        "correct": "Shining brightly; radiant",
        "wrong": [
            "Overflowing with emotion",
            "Foul-smelling and offensive",
            "Extremely wasteful"
        ],
        "explanation": {
            "right": "From Latin effulgere (to shine forth). Describes something radiating brilliant light or splendor.",
            "traps": [
                "'Effusive' (overflowing emotion) sounds similar but describes feelings, not light.",
                "'Effluent' (waste/sewage) sounds almost identical but means something foul.",
                "'Profligate' (wasteful) is unrelated to shining."
            ],
            "hook": "EF-FULG-ENT: FULG = flash/shine (like fulgent, refulgent). Light SHINING FORTH."
        }
    },
    {
        "id": "vocab2_egregious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EGREGIOUS mean?",
        "context": "The report documented egregious violations of patient safety protocols at the hospital.",
        "correct": "Outstandingly bad; shockingly terrible",
        "wrong": [
            "Eager and enthusiastic",
            "Standing out in a positive way",
            "Relating to a group or congregation"
        ],
        "explanation": {
            "right": "From Latin egregius (outstanding, from 'e grege' = out of the flock). Originally meant remarkably good but now means remarkably BAD.",
            "traps": [
                "'Eager' shares 'eg-' but means enthusiastic.",
                "The Latin root originally meant 'outstanding' positively, which can confuse.",
                "'Gregarious' shares the 'greg-' root (flock) but means sociable."
            ],
            "hook": "E-GREG-IOUS: stands OUT from the FLOCK (greg) for being terribly, shockingly bad."
        }
    },
    {
        "id": "vocab2_enervate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ENERVATE mean?",
        "context": "The tropical heat enervated the hikers, leaving them too exhausted to continue.",
        "correct": "To drain of energy or vitality; to weaken",
        "wrong": [
            "To energize or invigorate",
            "To irritate or annoy greatly",
            "To strengthen one's nerves"
        ],
        "explanation": {
            "right": "From Latin enervare (to cut the sinews). To deprive of strength or vitality - the OPPOSITE of energize.",
            "traps": [
                "MOST COMMON TRAP: 'energize' sounds similar but enervate means the OPPOSITE.",
                "'Irritate' (get on nerves) connects to 'nerve' but enervate means to weaken.",
                "'Innervate' (stimulate nerves) is the medical opposite."
            ],
            "hook": "ENERVATE removes your NERVES (energy). E-NERVE-ATE = your energy is EATEN away."
        }
    },
    {
        "id": "vocab2_ephemeral",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EPHEMERAL mean?",
        "context": "The cherry blossoms are ephemeral, lasting only a week or two before falling to the ground.",
        "correct": "Lasting for a very short time; fleeting",
        "wrong": [
            "Eternal and everlasting",
            "Existing only in fantasy",
            "Relating to the skin or surface"
        ],
        "explanation": {
            "right": "From Greek ephemeros (lasting only a day). Describes something transient that exists only briefly.",
            "traps": [
                "'Eternal' sounds somewhat similar but is the exact opposite.",
                "'Ethereal' sounds similar but means delicate/heavenly, not short-lived.",
                "'Epidermal' shares 'eph-' sounds but relates to skin."
            ],
            "hook": "EPHER-MERAL: lasts only a MERE moment, like a mayfly (ephemera) that lives one day."
        }
    },
    {
        "id": "vocab2_equanimity",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EQUANIMITY mean?",
        "context": "She received the devastating news with remarkable equanimity, calmly planning her next steps.",
        "correct": "Mental calmness and composure, especially in difficult situations",
        "wrong": [
            "A state of equality or fairness",
            "Uncertainty or ambiguity",
            "A feeling of animosity or hostility"
        ],
        "explanation": {
            "right": "From Latin equus (even) + animus (mind). Evenness of mind; staying calm and balanced under pressure.",
            "traps": [
                "'Equality' shares 'equa-' but means fairness, not calm.",
                "'Equivocal' shares 'equi-' but means ambiguous.",
                "'Animosity' contains 'anim-' but means hostility, the opposite of calm."
            ],
            "hook": "EQUA-NIMITY: an EQUAL MIND (animus) that stays balanced no matter what."
        }
    },
    {
        "id": "vocab2_equivocate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EQUIVOCATE mean?",
        "context": "When asked directly whether he would raise taxes, the candidate equivocated rather than give a straight answer.",
        "correct": "To use ambiguous language to avoid committing to a position",
        "wrong": [
            "To make things equal or fair",
            "To speak with equal volume",
            "To prove something is equivalent"
        ],
        "explanation": {
            "right": "From Latin equivocus (of equal voice/ambiguous). To deliberately use vague language to mislead or avoid the truth.",
            "traps": [
                "'Equalize' shares 'equi-' but means to make equal.",
                "'Elocution' relates to speaking but means clear speech, not vague.",
                "'Equivalent' shares 'equi-' but means equal in value."
            ],
            "hook": "EQUI-VOCATE: EQUAL VOICES on both sides - you won't commit to either one."
        }
    },
    {
        "id": "vocab2_ersatz",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ERSATZ mean?",
        "context": "During the war, citizens drank ersatz coffee made from roasted acorns and chicory.",
        "correct": "An artificial substitute, typically inferior to the original",
        "wrong": [
            "Of German origin or style",
            "Extremely rare and valuable",
            "First or original version"
        ],
        "explanation": {
            "right": "From German Ersatz (replacement/substitute). Describes an inferior imitation used as a substitute for something genuine.",
            "traps": [
                "It IS German but doesn't mean 'German-style' - it means substitute.",
                "'Rare' is the opposite; ersatz things are cheap replacements.",
                "'Original' is the opposite; ersatz means a copy or substitute."
            ],
            "hook": "ERSATZ: it's a REPLACEMENT that's never as good as the real thing."
        }
    },
    {
        "id": "vocab2_esoteric",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ESOTERIC mean?",
        "context": "The professor's lecture on quantum chromodynamics was too esoteric for anyone outside the physics department.",
        "correct": "Understood by only a small number of people with specialized knowledge",
        "wrong": [
            "Relating to the exterior or outside",
            "Exotic and foreign in nature",
            "Extremely boring or tedious"
        ],
        "explanation": {
            "right": "From Greek esoterikos (inner, belonging to an inner circle). Knowledge so specialized that few can understand it.",
            "traps": [
                "'Exoteric' (external) is actually the opposite of esoteric.",
                "'Exotic' sounds similar but means foreign or unusual.",
                "'Monotonous' is unrelated; esoteric means obscure, not boring."
            ],
            "hook": "ESO-TERIC: for the INNER circle only. Only insiders understand it."
        }
    },
    {
        "id": "vocab2_exacerbate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EXACERBATE mean?",
        "context": "Adding more troops to the region only exacerbated tensions rather than calming the situation.",
        "correct": "To make a problem, bad situation, or negative feeling worse",
        "wrong": [
            "To examine or investigate closely",
            "To free from blame or guilt",
            "To exercise or work out vigorously"
        ],
        "explanation": {
            "right": "From Latin exacerbare (to irritate, embitter). To aggravate or intensify something that is already bad.",
            "traps": [
                "'Examine' shares 'exa-' but means to inspect.",
                "'Exonerate' shares 'ex-' but means to clear of blame.",
                "'Exercise' shares 'ex-' but means physical activity."
            ],
            "hook": "EX-ACERB-ATE: makes things more ACERBIC (bitter/harsh). Pours fuel on the fire."
        }
    },
    {
        "id": "vocab2_excoriate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EXCORIATE mean?",
        "context": "The film critic excoriated the director's latest effort, calling it the worst movie of the decade.",
        "correct": "To criticize someone or something very harshly",
        "wrong": [
            "To decorate or embellish elaborately",
            "To remove the core or center of something",
            "To restore to its original condition"
        ],
        "explanation": {
            "right": "From Latin excoriare (to strip off the skin). Literally to flay; figuratively to criticize so harshly it's like stripping skin.",
            "traps": [
                "'Decorate' shares some sounds but means to adorn.",
                "'Core' is embedded but excoriate means to flay, not remove a core.",
                "'Restore' shares '-ore' but means to bring back to original state."
            ],
            "hook": "EX-CORI-ATE: to strip the SKIN (corium) off someone with brutal criticism."
        }
    },
    {
        "id": "vocab2_exculpate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EXCULPATE mean?",
        "context": "New DNA evidence exculpated the man who had spent twenty years in prison for a crime he did not commit.",
        "correct": "To prove that someone is not guilty of wrongdoing",
        "wrong": [
            "To expel or remove forcibly",
            "To excavate or dig up",
            "To blame or incriminate someone"
        ],
        "explanation": {
            "right": "From Latin ex (out of) + culpa (blame). To clear someone of guilt or fault.",
            "traps": [
                "'Expel' shares 'ex-' but means to force out.",
                "'Excavate' shares 'exc-' but means to dig.",
                "'Inculpate' is the exact opposite: to accuse or incriminate."
            ],
            "hook": "EX-CULP-ATE: remove the CULP (guilt/blame, like 'culprit'). Proven NOT guilty."
        }
    },
    {
        "id": "vocab2_exigent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EXIGENT mean?",
        "context": "The exigent circumstances of the flood required emergency services to act without waiting for formal authorization.",
        "correct": "Pressing; demanding immediate action or attention",
        "wrong": [
            "Currently existing or present",
            "Extremely small or insignificant",
            "Leaving or departing"
        ],
        "explanation": {
            "right": "From Latin exigere (to drive out, demand). Describes a situation requiring urgent action or extremely demanding conditions.",
            "traps": [
                "'Existent' (existing) sounds similar but means currently real.",
                "'Exiguous' (tiny) sounds similar but means very small.",
                "'Exit' shares 'exi-' but means to leave."
            ],
            "hook": "EXI-GENT: it EXIT demands you EXIT normal procedures and act NOW."
        }
    },
    {
        "id": "vocab2_expunge",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EXPUNGE mean?",
        "context": "After completing community service, the juvenile's record was expunged as if the offense never occurred.",
        "correct": "To erase or remove completely; to obliterate",
        "wrong": [
            "To squeeze out like a sponge",
            "To explain or elaborate on",
            "To punish severely"
        ],
        "explanation": {
            "right": "From Latin expungere (to mark for deletion by pricking dots). To completely wipe out or remove, leaving no trace.",
            "traps": [
                "'Sponge' sounds similar but expunge means erase, not absorb.",
                "'Expound' shares 'exp-' but means to explain in detail.",
                "'Punish' sounds embedded but expunge means to erase, not punish."
            ],
            "hook": "EX-PUNGE: PUNCH it out of existence. Completely erased, gone forever."
        }
    },
    {
        "id": "vocab2_extirpate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EXTIRPATE mean?",
        "context": "The conservation program aims to prevent the extirpation of wolves from the region entirely.",
        "correct": "To root out and destroy completely; to eradicate",
        "wrong": [
            "To stir up or agitate",
            "To estimate or extrapolate",
            "To sweat or perspire heavily"
        ],
        "explanation": {
            "right": "From Latin extirpare (to root out, from stirps = root). To completely destroy or remove something, especially by pulling it out at the root.",
            "traps": [
                "'Stir' sounds embedded but extirpate means to uproot, not agitate.",
                "'Extrapolate' shares 'ext-' but means to project from known data.",
                "'Perspire' shares '-pire' but means to sweat."
            ],
            "hook": "EX-TIRP-ATE: pull out the ROOTS (stirps) completely. Total eradication."
        }
    },
    {
        "id": "vocab2_facetious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does FACETIOUS mean?",
        "context": "She made a facetious comment about his cooking, but he took the joke personally and got upset.",
        "correct": "Treating serious issues with deliberately inappropriate humor",
        "wrong": [
            "Relating to the face or facial expressions",
            "Extremely easy or effortless",
            "Superficially pleasing but lacking substance"
        ],
        "explanation": {
            "right": "From French facetieux (witty). Using humor at inappropriate times, not taking things seriously when you should.",
            "traps": [
                "'Facial' shares 'face-' but relates to the physical face.",
                "'Facile' sounds similar but means too easy or superficial.",
                "'Facetious' is often confused with 'sarcastic' but facetious is playful, not cutting."
            ],
            "hook": "FACE-TIOUS: keeping a straight FACE while making jokes at the wrong time."
        }
    },
    {
        "id": "vocab2_fastidious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does FASTIDIOUS mean?",
        "context": "The fastidious editor caught every misplaced comma and inconsistent hyphenation in the manuscript.",
        "correct": "Very attentive to accuracy and detail; excessively particular",
        "wrong": [
            "Extremely quick or fast-moving",
            "Causing disgust or revulsion",
            "Stubbornly fixed in opinion"
        ],
        "explanation": {
            "right": "From Latin fastidium (loathing, squeamishness). Meticulous to the point of being fussy about details.",
            "traps": [
                "'Fast' is embedded but fastidious means meticulous, not quick.",
                "'Fastidium' (its root) means loathing, but the modern word means picky about quality.",
                "'Obstinate' (stubborn) is different; fastidious is about precision, not stubbornness."
            ],
            "hook": "FAST-IDIOUS: so picky they FAST (refuse) anything less than perfect."
        }
    },
    {
        "id": "vocab2_fatuous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does FATUOUS mean?",
        "context": "His fatuous grin during the serious meeting made his colleagues question his judgment.",
        "correct": "Silly and pointless; showing a lack of intelligence",
        "wrong": [
            "Relating to fate or destiny",
            "Extremely overweight",
            "Full of pride or vanity"
        ],
        "explanation": {
            "right": "From Latin fatuus (foolish). Describes something or someone complacently or vacuously stupid.",
            "traps": [
                "'Fate' sounds related but fatuous means foolish, not destined.",
                "'Fat' is embedded but fatuous means silly, not overweight.",
                "'Vain' is negative but means proud; fatuous means pointlessly stupid."
            ],
            "hook": "FAT-U-OUS: a FAT head full of nothing - complacently silly."
        }
    },
    {
        "id": "vocab2_felicitous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does FELICITOUS mean?",
        "context": "The speaker found a felicitous phrase that captured the mood of the audience perfectly.",
        "correct": "Well-chosen and particularly apt; pleasingly appropriate",
        "wrong": [
            "Bringing good luck or fortune",
            "Extremely happy and joyful",
            "Relating to cats or feline behavior"
        ],
        "explanation": {
            "right": "From Latin felicitas (happiness). Means well-suited to the occasion; particularly well expressed or apt.",
            "traps": [
                "'Felicity' (happiness) is related, but felicitous specifically means apt or well-chosen.",
                "'Lucky' connects to the Latin root but felicitous means appropriate, not fortunate.",
                "'Feline' shares 'feli-' sounds but relates to cats."
            ],
            "hook": "FELICIT-OUS: a FELICITOUS choice makes everyone HAPPY (felix = happy) because it fits perfectly."
        }
    },
    {
        "id": "vocab2_filibuster",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does FILIBUSTER mean?",
        "context": "The senator launched a filibuster, speaking for fourteen hours to delay the vote on the controversial bill.",
        "correct": "A prolonged speech or action used to delay legislative proceedings",
        "wrong": [
            "A type of pirate or buccaneer",
            "A military blockade of a port",
            "A formal vote or ballot"
        ],
        "explanation": {
            "right": "From Spanish filibustero (pirate/freebooter). In politics, an obstructive tactic of making extremely long speeches to prevent a vote.",
            "traps": [
                "The word DID originally mean pirate, but in modern usage it means legislative obstruction.",
                "'Blockade' relates to obstruction but is military, not legislative.",
                "'Ballot' relates to voting but a filibuster prevents voting."
            ],
            "hook": "FILI-BUSTER: you BUST the proceedings by talking endlessly, like a pirate hijacking the Senate."
        }
    },
    {
        "id": "vocab2_fulminate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does FULMINATE mean?",
        "context": "The columnist fulminated against the new policy, calling it a betrayal of democratic principles.",
        "correct": "To express vehement protest or criticism; to explode violently",
        "wrong": [
            "To illuminate or light up brightly",
            "To fulfill or bring to completion",
            "To fumigate or cleanse with chemicals"
        ],
        "explanation": {
            "right": "From Latin fulminare (to strike with lightning). To loudly and passionately denounce something, like a verbal thunderbolt.",
            "traps": [
                "'Illuminate' shares some sounds but means to light up.",
                "'Fulfill' shares 'ful-' but means to complete.",
                "'Fumigate' sounds similar but means to disinfect with fumes."
            ],
            "hook": "FULMIN-ATE: like being struck by LIGHTNING (fulmen). Explosive verbal thunder."
        }
    },
    {
        "id": "vocab2_garrulous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does GARRULOUS mean?",
        "context": "The garrulous taxi driver talked nonstop for the entire thirty-minute ride to the airport.",
        "correct": "Excessively talkative, especially about trivial matters",
        "wrong": [
            "Brave and courageous in battle",
            "Old and decrepit",
            "Covered in warts or bumps"
        ],
        "explanation": {
            "right": "From Latin garrire (to chatter). Describes someone who talks far too much, especially about unimportant things.",
            "traps": [
                "'Garrison' (military post) sounds similar but is unrelated.",
                "'Geriatric' shares some sounds but means elderly.",
                "'Gnarled' sounds somewhat similar but means twisted or knotty."
            ],
            "hook": "GARR-ULOUS: they go on and on, GARGLING words endlessly."
        }
    },
    {
        "id": "vocab2_grandiloquent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does GRANDILOQUENT mean?",
        "context": "The politician's grandiloquent promises sounded impressive but offered no practical solutions.",
        "correct": "Using pompous or extravagant language; overly grand in style",
        "wrong": [
            "Truly magnificent and impressive",
            "Speaking multiple languages fluently",
            "Generous and charitable toward others"
        ],
        "explanation": {
            "right": "From Latin grandis (grand) + loqui (to speak). Speaking in a lofty, pompous style meant to impress but often empty.",
            "traps": [
                "'Grand' is in the word, but grandiloquent implies the grandness is excessive and hollow.",
                "'Multilingual' relates to language but means speaking many languages.",
                "'Magnanimous' (generous) shares the 'grand' feeling but means big-hearted."
            ],
            "hook": "GRANDI-LOQUENT: GRAND + ELOQUENT = speaking in an overly grand way. All style, little substance."
        }
    },
    {
        "id": "vocab2_gratuitous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does GRATUITOUS mean?",
        "context": "Critics condemned the film for its gratuitous violence, which added nothing to the storyline.",
        "correct": "Uncalled for; lacking good reason; unnecessary",
        "wrong": [
            "Given freely as a gift; generous",
            "Expressing gratitude or thankfulness",
            "Extremely pleasing or satisfying"
        ],
        "explanation": {
            "right": "From Latin gratuitus (free, spontaneous). Means without justification or good reason; uncalled for.",
            "traps": [
                "'Gratuity' (tip) connects to 'free/given' but gratuitous means unjustified.",
                "'Gratitude' shares the root but means thankfulness.",
                "'Gratifying' shares 'grat-' but means pleasing."
            ],
            "hook": "GRATUIT-OUS: like a gratuity nobody asked for - unnecessary and unwanted."
        }
    },
    {
        "id": "vocab2_gregarious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does GREGARIOUS mean?",
        "context": "Her gregarious personality made her the natural choice to lead the company's networking events.",
        "correct": "Fond of company; sociable and outgoing",
        "wrong": [
            "Extremely greedy or grasping",
            "Living in isolation from others",
            "Aggressive and confrontational"
        ],
        "explanation": {
            "right": "From Latin gregarius (belonging to a flock, from grex = flock). Enjoying being with other people; sociable.",
            "traps": [
                "'Greedy' shares 'gre-' but means wanting too much.",
                "'Solitary' is the opposite of gregarious.",
                "'Aggressive' shares some sounds but means hostile."
            ],
            "hook": "GREG-ARIOUS: from FLOCK (grex). Gregarious people flock together, like social animals."
        }
    },
    {
        "id": "vocab2_harangue",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does HARANGUE mean?",
        "context": "The coach harangued the team for twenty minutes about their lack of effort in the first half.",
        "correct": "A lengthy and aggressive speech or lecture; to lecture aggressively",
        "wrong": [
            "To arrange or organize methodically",
            "To harass or bully physically",
            "To question or interrogate formally"
        ],
        "explanation": {
            "right": "From Old French harangue (public address). A forceful, critical speech delivered at length, often scolding or berating.",
            "traps": [
                "'Arrange' sounds embedded but harangue means to lecture angrily.",
                "'Harass' shares 'har-' but means to persistently bother, not specifically to lecture.",
                "'Interrogate' involves questioning; a harangue is one-directional lecturing."
            ],
            "hook": "HAR-ANGUE: a speech full of ANGER that goes on and on."
        }
    },
    {
        "id": "vocab2_hegemony",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does HEGEMONY mean?",
        "context": "After World War II, the United States established economic hegemony over much of the Western world.",
        "correct": "Dominance or leadership, especially of one nation over others",
        "wrong": [
            "A form of democratic government",
            "Harmony and cooperation between nations",
            "A large sum of money or inheritance"
        ],
        "explanation": {
            "right": "From Greek hegemonia (leadership, from hegemon = leader). The political, economic, or military dominance of one state over others.",
            "traps": [
                "'Democracy' is a form of government but means rule by the people, not dominance.",
                "'Harmony' sounds somewhat similar but means peaceful cooperation.",
                "'Legacy' shares some sounds but means an inheritance."
            ],
            "hook": "HE-GEM-ONY: the HE-MAN with all the GEMS has dominance over everyone."
        }
    },
    {
        "id": "vocab2_iconoclast",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ICONOCLAST mean?",
        "context": "The architect was an iconoclast who rejected classical design principles in favor of radical new forms.",
        "correct": "A person who attacks or challenges cherished beliefs or institutions",
        "wrong": [
            "A person who creates religious icons or images",
            "A person who studies ancient symbols",
            "A person who worships or idolizes others"
        ],
        "explanation": {
            "right": "From Greek eikon (image) + klastes (breaker). Originally someone who destroyed religious images; now anyone who challenges established norms.",
            "traps": [
                "'Icon maker' is the opposite - iconoclasts BREAK icons, not make them.",
                "'Iconography' relates to studying images, but an iconoclast destroys them.",
                "'Idolater' (worshipper) is the opposite; iconoclasts reject idols."
            ],
            "hook": "ICONO-CLAST: they SMASH (clast = break) the ICONS of tradition."
        }
    },
    {
        "id": "vocab2_ignominious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does IGNOMINIOUS mean?",
        "context": "The team's ignominious defeat - losing 52 to 0 - led to the coach's immediate dismissal.",
        "correct": "Deserving or causing public disgrace or shame",
        "wrong": [
            "Easily ignored or overlooked",
            "Lacking knowledge or education",
            "Anonymous or unnamed"
        ],
        "explanation": {
            "right": "From Latin ignominia (loss of good name). Causing deep shame and public humiliation.",
            "traps": [
                "'Ignore' sounds embedded but ignominious means shameful, not ignorable.",
                "'Ignorant' shares 'igno-' but means lacking knowledge.",
                "'Anonymous' shares '-nomi-' sounds but means unnamed."
            ],
            "hook": "IGNO-MINIOUS: your good NAME (nomen) is destroyed. Public disgrace."
        }
    },
    {
        "id": "vocab2_implacable",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does IMPLACABLE mean?",
        "context": "The prosecutor was implacable in her pursuit of justice, refusing to accept any plea deal.",
        "correct": "Unable to be appeased or pacified; relentless",
        "wrong": [
            "Impossible to put in place or install",
            "Calm and easy to please",
            "Unable to be explained or understood"
        ],
        "explanation": {
            "right": "From Latin implacabilis (not able to be appeased). Describes someone or something that cannot be calmed, satisfied, or stopped.",
            "traps": [
                "'Place' sounds embedded but implacable comes from 'placare' (to please/calm).",
                "'Placid' (calm) is the opposite root meaning.",
                "'Inexplicable' sounds similar but means unexplainable."
            ],
            "hook": "IM-PLAC-ABLE: cannot be PLACATED (calmed). Nothing will stop them."
        }
    },
    {
        "id": "vocab2_impugn",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does IMPUGN mean?",
        "context": "The defense attorney sought to impugn the credibility of the prosecution's star witness.",
        "correct": "To dispute the truth, validity, or honesty of something",
        "wrong": [
            "To punish or penalize severely",
            "To stab or pierce with a weapon",
            "To improve or make better"
        ],
        "explanation": {
            "right": "From Latin impugnare (to attack, fight against). To challenge or call into question someone's character or claims.",
            "traps": [
                "'Punish' sounds embedded but impugn means to challenge credibility.",
                "'Impale' (stab) shares 'imp-' but is physical violence.",
                "'Improve' shares 'imp-' but means to make better."
            ],
            "hook": "IM-PUGN: to fight against (pugn = fight, like pugilist). You're FIGHTING their credibility."
        }
    },
    {
        "id": "vocab2_inchoate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INCHOATE mean?",
        "context": "The startup had only an inchoate business plan - just rough ideas scrawled on a whiteboard.",
        "correct": "Just begun and not fully formed or developed; rudimentary",
        "wrong": [
            "Extremely chaotic and disorganized",
            "Filled with intense hatred",
            "Unable to speak clearly"
        ],
        "explanation": {
            "right": "From Latin inchoare (to begin). Describes something in its earliest stages, not yet properly developed.",
            "traps": [
                "'Chaotic' sounds similar but means disordered; inchoate means undeveloped.",
                "'Hate' might be heard in '-choate' but is unrelated.",
                "'Inarticulate' shares 'in-' but means unable to express clearly."
            ],
            "hook": "IN-CHO-ATE: just HATCHING (like a chick). Barely begun, still forming."
        }
    },
    {
        "id": "vocab2_indefatigable",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INDEFATIGABLE mean?",
        "context": "The indefatigable activist continued campaigning for reform well into her eighties.",
        "correct": "Persisting tirelessly; impossible to exhaust",
        "wrong": [
            "Impossible to defeat in battle",
            "Unable to be defined clearly",
            "Stubbornly refusing to change"
        ],
        "explanation": {
            "right": "From Latin indefatigabilis (that cannot be wearied). Someone who never seems to get tired or give up.",
            "traps": [
                "'Indefensible' (cannot defend) sounds similar but means unjustifiable.",
                "'Indefinable' shares 'indef-' but means cannot be defined.",
                "'Inflexible' (rigid) sounds similar but means unwilling to bend."
            ],
            "hook": "IN-DE-FATIG-ABLE: cannot be FATIGUED. Tireless energy that never quits."
        }
    },
    {
        "id": "vocab2_indigenous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INDIGENOUS mean?",
        "context": "The indigenous peoples of the Amazon have lived in the rainforest for thousands of years.",
        "correct": "Originating or occurring naturally in a particular place; native",
        "wrong": [
            "Living in poverty or hardship",
            "Unable to digest certain foods",
            "Deserving of indignation or anger"
        ],
        "explanation": {
            "right": "From Latin indigena (native). Describes people, plants, or animals that originated in and naturally belong to a particular region.",
            "traps": [
                "'Indigent' (poor) sounds almost identical but means impoverished.",
                "'Indigestion' shares 'indig-' but relates to digestive problems.",
                "'Indignant' (angry) shares 'indig-' but means feeling unjustly treated."
            ],
            "hook": "INDIGEN-OUS: born IN the land (genos = born). Native to that place since the beginning."
        }
    },
    {
        "id": "vocab2_inscrutable",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INSCRUTABLE mean?",
        "context": "The diplomat maintained an inscrutable expression throughout the tense negotiations, revealing nothing.",
        "correct": "Impossible to understand or interpret; mysterious",
        "wrong": [
            "Unable to be written or inscribed",
            "Extremely detailed and precise",
            "Beyond criticism or reproach"
        ],
        "explanation": {
            "right": "From Latin inscrutabilis (that cannot be searched into). Impossible to figure out or read, especially of expressions or motives.",
            "traps": [
                "'Inscribe' shares 'inscr-' but means to write; inscrutable means unreadable in a figurative sense.",
                "'Scrupulous' shares 'scru-' but means careful and precise.",
                "'Unimpeachable' (beyond criticism) sounds similar in meaning but isn't."
            ],
            "hook": "IN-SCRUT-ABLE: cannot be SCRUTINIZED. Their face or motives are a total mystery."
        }
    },
    {
        "id": "vocab2_insolent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INSOLENT mean?",
        "context": "The student's insolent reply to the principal earned her an immediate detention.",
        "correct": "Showing a rude and arrogant lack of respect",
        "wrong": [
            "Unable to be dissolved or solved",
            "Financially bankrupt or unable to pay debts",
            "Isolated and alone"
        ],
        "explanation": {
            "right": "From Latin insolentem (unaccustomed, arrogant). Boldly disrespectful in speech or behavior toward authority.",
            "traps": [
                "'Insoluble' (can't dissolve) sounds similar but is about chemistry or unsolvable problems.",
                "'Insolvent' (bankrupt) sounds nearly identical but means unable to pay debts.",
                "'Insular' (isolated) shares 'ins-' but means cut off from others."
            ],
            "hook": "IN-SOL-ENT: they think they're the SOL (sun) - arrogantly disrespectful to everyone."
        }
    },
    {
        "id": "vocab2_insuperable",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INSUPERABLE mean?",
        "context": "The language barrier proved an insuperable obstacle to completing the business deal on time.",
        "correct": "Impossible to overcome; insurmountable",
        "wrong": [
            "Extremely superior or excellent",
            "Unable to be supported or sustained",
            "Tolerant and accepting of others"
        ],
        "explanation": {
            "right": "From Latin insuperabilis (that cannot be passed over). A difficulty so great that it cannot be conquered.",
            "traps": [
                "'Superior' is embedded but insuperable means cannot be overcome, not 'very superior.'",
                "'Unsupportable' sounds similar but means cannot be supported.",
                "'Insufferable' sounds similar but means intolerable (of a person)."
            ],
            "hook": "IN-SUPER-ABLE: you can't get OVER (super) it. An obstacle too high to cross."
        }
    },
    {
        "id": "vocab2_intransigent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INTRANSIGENT mean?",
        "context": "Both sides in the labor dispute remained intransigent, refusing to budge on any of their demands.",
        "correct": "Unwilling to change one's views or to agree; stubbornly inflexible",
        "wrong": [
            "In the process of transitioning or changing",
            "Unable to be translated into another language",
            "Moving from place to place; transient"
        ],
        "explanation": {
            "right": "From Spanish intransigente (uncompromising). Absolutely refusing to modify one's position or compromise.",
            "traps": [
                "'Transitioning' sounds embedded but intransigent means refusing to change.",
                "'Untranslatable' shares 'intrans-' sounds but relates to language.",
                "'Transient' shares 'trans-' but means temporary or passing through."
            ],
            "hook": "IN-TRANS-IGENT: they will NOT TRANSIT (move) from their position. Immovable."
        }
    },
    {
        "id": "vocab2_invective",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INVECTIVE mean?",
        "context": "The debate devolved into personal invective, with each candidate hurling insults at the other.",
        "correct": "Insulting, abusive, or highly critical language",
        "wrong": [
            "An inventive or creative approach",
            "A formal investigation or inquiry",
            "A type of investment or financial stake"
        ],
        "explanation": {
            "right": "From Latin invectivus (attacking, from invehi = to attack with words). Vehemently abusive or denunciatory speech.",
            "traps": [
                "'Inventive' sounds almost identical but means creative.",
                "'Investigation' shares 'inve-' but means a formal inquiry.",
                "'Investment' shares 'inve-' but relates to finance."
            ],
            "hook": "IN-VECT-IVE: words used as VECTORS of attack. Verbal missiles aimed at someone."
        }
    },
    {
        "id": "vocab2_inveterate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INVETERATE mean?",
        "context": "An inveterate procrastinator, he always waited until the last possible moment to begin any assignment.",
        "correct": "Having a particular habit or interest that is long-established and unlikely to change",
        "wrong": [
            "Relating to veterinary medicine or animal care",
            "Inexperienced or new to something",
            "Turned inside out or reversed"
        ],
        "explanation": {
            "right": "From Latin inveteratus (of long standing). Describes a deeply ingrained habit or characteristic, often negative.",
            "traps": [
                "'Veterinarian' shares 'veter-' but relates to animal medicine.",
                "'Novice' is the opposite: new and inexperienced.",
                "'Inverted' sounds similar but means turned upside down."
            ],
            "hook": "IN-VETER-ATE: like a VETERAN of a habit - they've been doing it so long it's permanent."
        }
    },
    {
        "id": "vocab2_irascible",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does IRASCIBLE mean?",
        "context": "The irascible old professor was known for snapping at students who arrived even one minute late.",
        "correct": "Having or showing a tendency to be easily angered",
        "wrong": [
            "Impossible to erase or remove",
            "Unpredictable and unreliable",
            "Unable to make rational decisions"
        ],
        "explanation": {
            "right": "From Latin irascibilis (prone to anger, from ira = anger). Describes someone who gets angry very easily; hot-tempered.",
            "traps": [
                "'Erasable' sounds similar but means can be removed.",
                "'Erratic' (unpredictable) shares sounds but means inconsistent.",
                "'Irrational' shares 'ira-' but means illogical."
            ],
            "hook": "IRASC-IBLE: full of IRA (anger in Latin, like 'irate'). Quick to ANGER."
        }
    },
    {
        "id": "vocab2_jejune",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does JEJUNE mean?",
        "context": "The critic dismissed the novel as jejune, saying it offered nothing beyond simplistic moralizing.",
        "correct": "Naive, simplistic, and superficial; lacking substance",
        "wrong": [
            "Youthful and energetic",
            "Relating to the month of June",
            "Resembling a gemstone; sparkling"
        ],
        "explanation": {
            "right": "From Latin jejunus (fasting, barren, meager). Means intellectually unsatisfying, childishly simple, or dull.",
            "traps": [
                "'Jeune' (French for young) might suggest youthful energy, but jejune means childishly simplistic.",
                "'June' sounds embedded but is unrelated.",
                "'Jewel' shares 'je-' but is completely unrelated."
            ],
            "hook": "JE-JUNE: intellectually FASTING - empty and unsatisfying, like a mind with no nourishment."
        }
    },
    {
        "id": "vocab2_juxtapose",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does JUXTAPOSE mean?",
        "context": "The documentary juxtaposes images of extreme wealth with scenes of abject poverty.",
        "correct": "To place close together for comparison or contrast",
        "wrong": [
            "To oppose or resist something",
            "To pose a question or problem",
            "To arrange in a specific order"
        ],
        "explanation": {
            "right": "From Latin juxta (next to) + French poser (to place). To put two things side by side to highlight their differences or similarities.",
            "traps": [
                "'Oppose' shares '-pose' but means to resist, not place beside.",
                "'Propose' shares '-pose' but means to suggest.",
                "'Compose' shares '-pose' but means to arrange or create."
            ],
            "hook": "JUXTA-POSE: POSE two things NEXT TO (juxta) each other to see the contrast."
        }
    },
    {
        "id": "vocab2_laconic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does LACONIC mean?",
        "context": "When asked how the battle went, the laconic general replied simply, 'We won.'",
        "correct": "Using very few words; brief and concise in speech",
        "wrong": [
            "Lacking in energy or enthusiasm",
            "Relating to lakes or bodies of water",
            "Sarcastic and mocking in tone"
        ],
        "explanation": {
            "right": "From Greek Lakonikos (of Laconia/Sparta). Spartans were famous for their brief speech. Means using minimum words.",
            "traps": [
                "'Lackadaisical' (lacking energy) shares 'lac-' but means lazy.",
                "'Lacustrine' (relating to lakes) shares 'lac-' but is about water.",
                "'Sardonic' (mocking) rhymes but means darkly humorous."
            ],
            "hook": "LACON-IC: like the SPARTANS of LACONIA who used as few words as possible."
        }
    },
    {
        "id": "vocab2_languid",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does LANGUID mean?",
        "context": "On the languid summer afternoon, the cat stretched lazily across the warm windowsill.",
        "correct": "Displaying a disinclination for physical exertion; slow and relaxed",
        "wrong": [
            "Relating to language or linguistics",
            "Extremely long and drawn-out",
            "Experiencing intense thirst"
        ],
        "explanation": {
            "right": "From Latin languidus (faint, weak). Describes a pleasant, dreamy slowness; lacking energy but in a relaxed way.",
            "traps": [
                "'Language' shares 'langu-' but relates to words and speech.",
                "'Lengthy' shares 'lang-' sounds but means very long.",
                "'Languish' (suffer) is related but more negative; languid can be pleasantly relaxed."
            ],
            "hook": "LANGU-ID: you LANGUISH in comfortable laziness, too relaxed to move."
        }
    },
    {
        "id": "vocab2_legerdemain",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does LEGERDEMAIN mean?",
        "context": "The accountant's financial legerdemain hid millions in losses from the company's investors.",
        "correct": "Skillful use of one's hands for tricks; deception or trickery",
        "wrong": [
            "A legal domain or jurisdiction",
            "The main or primary text of a document",
            "A type of light dessert or pastry"
        ],
        "explanation": {
            "right": "From French leger de main (light of hand). Originally sleight of hand magic; now any skillful deception.",
            "traps": [
                "'Legal domain' sounds embedded but is completely unrelated.",
                "'Legend' shares 'lege-' but means a famous story.",
                "'Light' (leger) is the root but it refers to nimble hands, not weight."
            ],
            "hook": "LEGER-DE-MAIN: LIGHT of HAND (French). Sleight of hand - whether magic tricks or deception."
        }
    },
    {
        "id": "vocab2_litigious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does LITIGIOUS mean?",
        "context": "America's litigious culture means businesses must constantly worry about potential lawsuits.",
        "correct": "Tending to engage in or prone to lawsuits",
        "wrong": [
            "Extremely religious or devout",
            "Prestigious and highly regarded",
            "Causing disagreement or controversy"
        ],
        "explanation": {
            "right": "From Latin litigiosus (quarrelsome, from lis = lawsuit). Describes a person or culture overly inclined to sue.",
            "traps": [
                "'Religious' rhymes but means devout in faith.",
                "'Prestigious' shares '-tigious' sounds but means highly respected.",
                "'Contentious' (controversial) is related but broader; litigious specifically means lawsuit-prone."
            ],
            "hook": "LITIG-IOUS: LITIGATION-prone. Always ready to take someone to court."
        }
    },
    {
        "id": "vocab2_lugubrious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does LUGUBRIOUS mean?",
        "context": "The funeral director's lugubrious expression never changed, even when he was off duty.",
        "correct": "Looking or sounding sad and dismal, often to an exaggerated degree",
        "wrong": [
            "Extremely slippery or well-lubricated",
            "Luxurious and indulgent",
            "Laughable or ridiculous"
        ],
        "explanation": {
            "right": "From Latin lugubris (mournful, from lugere = to mourn). Excessively mournful or gloomy, sometimes almost comically so.",
            "traps": [
                "'Lubricate' shares 'lub-' sounds but means to make slippery.",
                "'Luxurious' shares 'lu-' but means lavishly comfortable.",
                "'Ludicrous' shares 'lu-' but means absurdly ridiculous."
            ],
            "hook": "LUG-UBRIOUS: LUGging around a heavy sadness wherever they go."
        }
    },
    {
        "id": "vocab2_magnanimous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MAGNANIMOUS mean?",
        "context": "In a magnanimous gesture, the victor offered generous peace terms to the defeated nation.",
        "correct": "Very generous or forgiving, especially toward a rival or less powerful person",
        "wrong": [
            "Having a magnetic or charismatic personality",
            "Enormously large in physical size",
            "Animated and energetic in behavior"
        ],
        "explanation": {
            "right": "From Latin magnus (great) + animus (soul/spirit). Having a great, noble spirit that shows generosity especially to those you could punish.",
            "traps": [
                "'Magnetic' shares 'magn-' but means attracting attention or iron.",
                "'Magnified' (enlarged) shares 'magn-' but means made bigger.",
                "'Animated' shares '-anim-' but means lively."
            ],
            "hook": "MAGN-ANIM-OUS: a GREAT (magnus) SOUL (animus). Big-hearted, especially to those beneath you."
        }
    },
    {
        "id": "vocab2_malfeasance",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MALFEASANCE mean?",
        "context": "The mayor was removed from office after an investigation revealed years of financial malfeasance.",
        "correct": "Wrongdoing or illegal activity, especially by a public official",
        "wrong": [
            "A feeling of general discomfort or unease",
            "Poor performance or incompetence at work",
            "A festive celebration or feast"
        ],
        "explanation": {
            "right": "From French malfaisance (wrongdoing, from mal = bad + faire = to do). Illegal or unethical conduct by someone in a position of authority.",
            "traps": [
                "'Malaise' shares 'mal-' but means vague discomfort.",
                "'Malfeasance' vs 'misfeasance': malfeasance is illegal; misfeasance is legal but done wrongly.",
                "'Feast' sounds in '-feasance' but the root is 'faire' (to do), not feast."
            ],
            "hook": "MAL-FEAS-ANCE: doing (faire) something BAD (mal). Official wrongdoing."
        }
    },
    {
        "id": "vocab2_malinger",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MALINGER mean?",
        "context": "The sergeant suspected the private was malingering to avoid being sent to the front lines.",
        "correct": "To pretend to be ill in order to avoid duty or work",
        "wrong": [
            "To linger or stay too long in one place",
            "To speak badly about someone behind their back",
            "To feel lingering resentment or anger"
        ],
        "explanation": {
            "right": "From French malingre (sickly, weak). To fake illness or injury to escape responsibility.",
            "traps": [
                "'Linger' is embedded but malinger specifically means faking illness, not just staying around.",
                "'Malign' (speak ill of) shares 'mal-' but means to slander.",
                "'Anger' sounds in '-linger' but malinger means faking sickness."
            ],
            "hook": "MAL-INGER: you LINGER in bed pretending to be sick (MAL = bad/sick)."
        }
    },
    {
        "id": "vocab2_mendacious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MENDACIOUS mean?",
        "context": "The mendacious witness was later charged with perjury after the truth came to light.",
        "correct": "Not telling the truth; lying habitually",
        "wrong": [
            "Threatening or menacing in manner",
            "Capable of being mended or fixed",
            "Begging or asking for charity"
        ],
        "explanation": {
            "right": "From Latin mendax (lying, deceitful). Describes a person who lies or a statement that is untruthful.",
            "traps": [
                "'Menacing' shares 'men-' but means threatening.",
                "'Mendable' sounds similar but means fixable.",
                "'Mendicant' (beggar) shares 'mend-' but means one who begs."
            ],
            "hook": "MEND-ACIOUS: they need to MEND their ways because they're full of lies."
        }
    },
    {
        "id": "vocab2_mercurial",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MERCURIAL mean?",
        "context": "The artist's mercurial temperament meant the team never knew if she'd be elated or furious on any given day.",
        "correct": "Subject to sudden, unpredictable changes of mood or mind",
        "wrong": [
            "Relating to the planet Mercury or astronomy",
            "Motivated primarily by money or profit",
            "Showing mercy or compassion"
        ],
        "explanation": {
            "right": "From Mercury, the Roman messenger god known for speed and changeability. Describes volatile, rapidly changing moods.",
            "traps": [
                "Mercury the planet is the origin, but mercurial describes personality, not astronomy.",
                "'Mercenary' shares 'merc-' but means motivated by money.",
                "'Merciful' shares 'merc-' but means compassionate."
            ],
            "hook": "MERCUR-IAL: like liquid MERCURY that shifts shape constantly. Moods that change in a flash."
        }
    },
    {
        "id": "vocab2_meretricious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MERETRICIOUS mean?",
        "context": "The meretricious decorations made the restaurant look flashy but cheap, turning away discerning diners.",
        "correct": "Apparently attractive but having no real value; superficially appealing",
        "wrong": [
            "Deserving of merit or praise",
            "Extremely generous or charitable",
            "Truthful and trustworthy"
        ],
        "explanation": {
            "right": "From Latin meretrix (prostitute). Something that attracts attention through flashy appearance but lacks genuine worth.",
            "traps": [
                "'Meritorious' (praiseworthy) sounds almost identical but means the OPPOSITE.",
                "'Magnanimous' (generous) is unrelated.",
                "'Veracious' (truthful) is unrelated; meretricious things are deceptive."
            ],
            "hook": "MERETRICIOUS vs MERITORIOUS: meretricious is TRASHY glamour. No real MERIT despite the flashy surface."
        }
    },
    {
        "id": "vocab2_misanthrope",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MISANTHROPE mean?",
        "context": "Years of betrayal had turned him into a misanthrope who avoided social gatherings entirely.",
        "correct": "A person who dislikes and distrusts humankind",
        "wrong": [
            "A person who studies human anatomy",
            "A person who gives generously to charity",
            "A person who misinterprets situations"
        ],
        "explanation": {
            "right": "From Greek misos (hatred) + anthropos (human being). Someone who hates or distrusts all people.",
            "traps": [
                "'Anthropologist' shares 'anthrop-' but studies humans rather than hating them.",
                "'Philanthropist' uses the same 'anthrop-' root but means a lover of humanity.",
                "'Misunderstand' shares 'mis-' but the prefix here means hatred, not error."
            ],
            "hook": "MIS-ANTHROPE: HATES (mis-) HUMANS (anthrope). The opposite of a philanthropist."
        }
    },
    {
        "id": "vocab2_munificent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MUNIFICENT mean?",
        "context": "The munificent donor gave $50 million to build a new children's hospital wing.",
        "correct": "Extremely generous, especially with money",
        "wrong": [
            "Magnificent and splendid in appearance",
            "Relating to municipal or city government",
            "Having many different functions or uses"
        ],
        "explanation": {
            "right": "From Latin munificus (generous, from munus = gift + facere = to make). Lavishly generous in giving.",
            "traps": [
                "'Magnificent' sounds similar but means impressively grand.",
                "'Municipal' shares 'muni-' but relates to city government.",
                "'Multifunctional' is unrelated despite similar length."
            ],
            "hook": "MUNI-FICENT: making (facere) GIFTS (munus). A gift-giver on a grand scale."
        }
    },
    {
        "id": "vocab2_loquacious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does LOQUACIOUS mean?",
        "context": "The loquacious host kept guests entertained with a constant stream of anecdotes and observations.",
        "correct": "Tending to talk a great deal; very chatty",
        "wrong": [
            "Elegant and graceful in movement",
            "Located in a specific place",
            "Lacking in quality or substance"
        ],
        "explanation": {
            "right": "From Latin loquax (talkative, from loqui = to speak). Describes someone who talks excessively or at great length.",
            "traps": [
                "'Eloquent' shares the root loqui but means speaking well, not just speaking a lot.",
                "'Local' shares 'loc-' sounds but relates to place.",
                "'Lackluster' shares 'l-' and '-ous' but means dull."
            ],
            "hook": "LOQU-ACIOUS: LOQUI = to speak (like soliloquy, eloquent). They just won't stop SPEAKING."
        }
    },
    {
        "id": "vocab2_nadir",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does NADIR mean?",
        "context": "After losing his job, his marriage, and his home in the same month, Marcus felt he had reached the nadir of his life.",
        "correct": "The lowest point; the point of greatest adversity",
        "wrong": [
            "The highest point of achievement",
            "A turning point or crisis",
            "A state of complete indifference"
        ],
        "explanation": {
            "right": "Nadir comes from Arabic meaning 'opposite to the zenith' - it literally means the lowest point directly beneath you.",
            "traps": [
                "That's the opposite - zenith means the highest point.",
                "A turning point could go either way; nadir specifically means the bottom.",
                "Indifference describes apathy, not a low point."
            ],
            "hook": "Nadir sounds like 'nada' (nothing) - you're at rock bottom with nothing left."
        }
    },
    {
        "id": "vocab2_nascent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does NASCENT mean?",
        "context": "The nascent democracy was fragile, with institutions still forming and citizens learning to participate in governance.",
        "correct": "Just beginning to develop; emerging",
        "wrong": [
            "Rapidly declining or dying",
            "Fully mature and established",
            "Temporarily inactive or dormant"
        ],
        "explanation": {
            "right": "Nascent comes from Latin 'nasci' meaning 'to be born.' It describes something in its earliest stages of development.",
            "traps": [
                "Declining is the opposite - nascent means just being born.",
                "Fully mature contradicts nascent's meaning of just beginning.",
                "Dormant means inactive; nascent means actively emerging."
            ],
            "hook": "Nascent shares its root with 'natal' (birth) - something nascent is newborn."
        }
    },
    {
        "id": "vocab2_nebulous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does NEBULOUS mean?",
        "context": "Her plans for the future remained nebulous, with no clear timeline or specific goals in mind.",
        "correct": "Vague, unclear, or poorly defined",
        "wrong": [
            "Extremely detailed and precise",
            "Dangerously unstable",
            "Brilliantly illuminated"
        ],
        "explanation": {
            "right": "Nebulous comes from Latin 'nebula' meaning cloud or mist. Something nebulous is cloudy and hard to see clearly.",
            "traps": [
                "Detailed is the opposite of nebulous's meaning of vague.",
                "Unstable relates to danger, not clarity.",
                "Illuminated means bright; nebulous means cloudy and obscured."
            ],
            "hook": "Think of a nebula in space - a hazy, indistinct cloud of gas."
        }
    },
    {
        "id": "vocab2_nefarious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does NEFARIOUS mean?",
        "context": "The detective uncovered the nefarious scheme to defraud elderly investors of their retirement savings.",
        "correct": "Wicked, villainous, or criminal",
        "wrong": [
            "Extremely complicated or intricate",
            "Carried out in secret",
            "Poorly planned or amateurish"
        ],
        "explanation": {
            "right": "Nefarious comes from Latin 'nefas' meaning wrong or sin. It describes actions that are flagrantly wicked.",
            "traps": [
                "Complicated means complex, not evil.",
                "Secret describes concealment; nefarious describes moral wickedness.",
                "Poorly planned describes incompetence, not evil intent."
            ],
            "hook": "Nefarious has 'nefas' (sin) - think of it as 'not fair' taken to criminal extremes."
        }
    },
    {
        "id": "vocab2_nonplussed",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does NONPLUSSED mean?",
        "context": "The teacher was nonplussed when a student asked a question she had never considered in twenty years of teaching.",
        "correct": "Surprised and confused; at a loss for what to do",
        "wrong": [
            "Completely unbothered or unfazed",
            "Mildly annoyed but hiding it",
            "Extremely enthusiastic and eager"
        ],
        "explanation": {
            "right": "Nonplussed comes from Latin 'non plus' meaning 'no more' - you're so bewildered there's nothing more you can think to do.",
            "traps": [
                "This is the most common mistake - many people think nonplussed means unfazed, but it means the opposite.",
                "Annoyed describes irritation, not bewilderment.",
                "Enthusiastic describes eagerness, not confusion."
            ],
            "hook": "Non plus = no more ideas. You're stumped, bewildered, at a total loss."
        }
    },
    {
        "id": "vocab2_obdurate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does OBDURATE mean?",
        "context": "Despite the pleas of his family and friends, the obdurate old man refused to see a doctor about his worsening cough.",
        "correct": "Stubbornly refusing to change one's mind; hard-hearted",
        "wrong": [
            "Easily persuaded or compliant",
            "Physically robust and healthy",
            "Deeply sorrowful and repentant"
        ],
        "explanation": {
            "right": "Obdurate comes from Latin 'obdurare' meaning to harden. An obdurate person has hardened against persuasion or pity.",
            "traps": [
                "Easily persuaded is the opposite of obdurate.",
                "Physically robust describes health, not stubbornness.",
                "Repentant means sorry; obdurate people refuse to feel sorry."
            ],
            "hook": "Obdurate contains 'dure' (hard, like 'durable') - an obdurate person is hard-headed."
        }
    },
    {
        "id": "vocab2_obfuscate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does OBFUSCATE mean?",
        "context": "The politician tried to obfuscate the issue by introducing irrelevant statistics and complex jargon.",
        "correct": "To make unclear or confusing; to obscure",
        "wrong": [
            "To clarify and simplify",
            "To publicly condemn",
            "To secretly eliminate"
        ],
        "explanation": {
            "right": "Obfuscate comes from Latin 'obfuscare' meaning to darken. It means to deliberately make something harder to understand.",
            "traps": [
                "Clarify is the exact opposite of obfuscate.",
                "Condemn means to criticize, not to confuse.",
                "Eliminate means to remove; obfuscate means to cloud meaning."
            ],
            "hook": "Obfuscate sounds like 'ob-FUSS-cate' - making a fuss to create confusion."
        }
    },
    {
        "id": "vocab2_obstreperous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does OBSTREPEROUS mean?",
        "context": "The obstreperous crowd refused to quiet down, shouting over the speaker and banging on the tables.",
        "correct": "Noisy, unruly, and difficult to control",
        "wrong": [
            "Quietly rebellious or subversive",
            "Excessively polite and deferential",
            "Physically intimidating but silent"
        ],
        "explanation": {
            "right": "Obstreperous comes from Latin 'obstrepere' meaning to make noise against. It describes loud, defiant behavior.",
            "traps": [
                "Quietly rebellious contradicts the noisy aspect of obstreperous.",
                "Polite is the opposite of unruly.",
                "Silent contradicts the core meaning of noisy and loud."
            ],
            "hook": "Obstreperous sounds like 'obstruct + raucous' - noisily getting in the way."
        }
    },
    {
        "id": "vocab2_otiose",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does OTIOSE mean?",
        "context": "The committee meeting was otiose, as all the decisions had already been made by the director beforehand.",
        "correct": "Serving no practical purpose; pointless",
        "wrong": [
            "Extremely productive and efficient",
            "Morally questionable",
            "Overly elaborate or decorative"
        ],
        "explanation": {
            "right": "Otiose comes from Latin 'otiosus' meaning at leisure or idle. Something otiose has no useful function.",
            "traps": [
                "Productive is the opposite - otiose means useless.",
                "Morally questionable relates to ethics, not usefulness.",
                "Elaborate means ornate; otiose means purposeless."
            ],
            "hook": "Otiose sounds like 'oh-she-ose' - oh, she has nothing to do, it's pointless."
        }
    },
    {
        "id": "vocab2_palliative",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PALLIATIVE mean?",
        "context": "The new policy was merely palliative, easing symptoms of the housing crisis without addressing its root causes.",
        "correct": "Relieving symptoms without curing the underlying problem",
        "wrong": [
            "Providing a permanent and complete cure",
            "Making a situation dramatically worse",
            "Having no noticeable effect whatsoever"
        ],
        "explanation": {
            "right": "Palliative comes from Latin 'palliare' meaning to cloak. Palliative measures cloak or mask pain without fixing the source.",
            "traps": [
                "A permanent cure solves the problem; palliative only eases symptoms.",
                "Making worse is the opposite of providing relief.",
                "Having no effect contradicts palliative's meaning of providing some relief."
            ],
            "hook": "Palliative shares a root with 'pall' (a covering) - it covers up the pain but doesn't cure it."
        }
    },
    {
        "id": "vocab2_panacea",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PANACEA mean?",
        "context": "There is no panacea for climate change; solving it requires coordinated action across many sectors and nations.",
        "correct": "A solution or remedy for all problems or difficulties",
        "wrong": [
            "A widespread epidemic or catastrophe",
            "A minor inconvenience",
            "A controversial compromise"
        ],
        "explanation": {
            "right": "Panacea comes from Greek 'pan' (all) + 'akos' (remedy). Panacea was the Greek goddess of universal cures.",
            "traps": [
                "An epidemic is a problem, not a solution.",
                "A minor inconvenience is trivial; panacea refers to a cure-all.",
                "A compromise is a middle ground; panacea is a total solution."
            ],
            "hook": "Pan (all) + acea (cure) = a cure for ALL problems."
        }
    },
    {
        "id": "vocab2_parsimonious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PARSIMONIOUS mean?",
        "context": "The parsimonious billionaire still clipped coupons and refused to tip more than ten percent.",
        "correct": "Extremely unwilling to spend money; excessively frugal",
        "wrong": [
            "Generously charitable with wealth",
            "Meticulous about religious practices",
            "Overly talkative and boastful"
        ],
        "explanation": {
            "right": "Parsimonious comes from Latin 'parsimonia' meaning frugality. It implies stinginess beyond what is reasonable.",
            "traps": [
                "Generous is the exact opposite of parsimonious.",
                "Religious meticulousness describes piety, not frugality.",
                "Talkative describes verbosity, not spending habits."
            ],
            "hook": "Parsimonious - 'parse my money' carefully, because I refuse to spend any."
        }
    },
    {
        "id": "vocab2_pedantic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PEDANTIC mean?",
        "context": "His pedantic insistence on correcting everyone's grammar made him unpopular at dinner parties.",
        "correct": "Excessively concerned with minor details or rules",
        "wrong": [
            "Charmingly informal and relaxed",
            "Deliberately ignorant of rules",
            "Physically clumsy or awkward"
        ],
        "explanation": {
            "right": "Pedantic comes from Italian 'pedante' meaning teacher. A pedantic person fixates on trivial academic details.",
            "traps": [
                "Informal is the opposite of pedantic's fussy attention to rules.",
                "Ignorant of rules contradicts pedantic's obsession with them.",
                "Clumsy describes physical awkwardness, not intellectual fussiness."
            ],
            "hook": "A pedantic person is like a PED-ant - an ant obsessing over every tiny crumb of detail."
        }
    },
    {
        "id": "vocab2_pernicious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PERNICIOUS mean?",
        "context": "The pernicious effects of misinformation spread slowly through the community, eroding trust in all institutions.",
        "correct": "Having a harmful effect, especially in a gradual or subtle way",
        "wrong": [
            "Immediately obvious and dramatic",
            "Completely harmless and benign",
            "Intentionally helpful but misguided"
        ],
        "explanation": {
            "right": "Pernicious comes from Latin 'pernicies' meaning destruction. It implies harm that works insidiously over time.",
            "traps": [
                "Immediately obvious contradicts the subtle, gradual nature of pernicious harm.",
                "Harmless is the opposite of pernicious.",
                "Helpful contradicts the destructive meaning."
            ],
            "hook": "Pernicious = per (through) + nic (kill) - it kills you slowly, working through you."
        }
    },
    {
        "id": "vocab2_perspicacious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PERSPICACIOUS mean?",
        "context": "The perspicacious investor noticed subtle market signals that others had overlooked and acted on them early.",
        "correct": "Having keen mental perception and understanding; shrewd",
        "wrong": [
            "Excessively suspicious and paranoid",
            "Easily deceived or gullible",
            "Physically sharp-sighted"
        ],
        "explanation": {
            "right": "Perspicacious comes from Latin 'perspicax' meaning having the power of seeing through. It describes acute mental insight.",
            "traps": [
                "Suspicious implies distrust; perspicacious implies clear understanding.",
                "Gullible is the opposite of perspicacious.",
                "While related to 'seeing,' perspicacious refers to mental insight, not eyesight."
            ],
            "hook": "Perspicacious has 'spic' (look/see) - someone who sees through things with clarity."
        }
    },
    {
        "id": "vocab2_pertinacious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PERTINACIOUS mean?",
        "context": "The pertinacious journalist kept pursuing the story for three years until the corruption was finally exposed.",
        "correct": "Holding firmly to a purpose; stubbornly persistent",
        "wrong": [
            "Easily discouraged or giving up quickly",
            "Relevant and closely connected",
            "Impolite and intentionally rude"
        ],
        "explanation": {
            "right": "Pertinacious comes from Latin 'pertinax' meaning holding fast. It describes dogged, unyielding persistence.",
            "traps": [
                "Easily discouraged is the opposite of pertinacious.",
                "You might confuse it with 'pertinent' (relevant), but pertinacious means persistent.",
                "Rude describes behavior, not determination."
            ],
            "hook": "Don't confuse with 'pertinent.' Pertinacious = tenacious with extra 'per' (thoroughly tenacious)."
        }
    },
    {
        "id": "vocab2_phlegmatic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PHLEGMATIC mean?",
        "context": "Even when the building's fire alarm sounded, the phlegmatic librarian calmly finished shelving her books before walking to the exit.",
        "correct": "Calm and unemotional; not easily excited or upset",
        "wrong": [
            "Prone to violent emotional outbursts",
            "Suffering from a respiratory illness",
            "Deeply pessimistic about everything"
        ],
        "explanation": {
            "right": "Phlegmatic comes from the ancient belief that phlegm made people calm and sluggish. A phlegmatic person is stoically calm.",
            "traps": [
                "Violent outbursts are the opposite of phlegmatic calm.",
                "While 'phlegm' relates to mucus, phlegmatic describes temperament, not illness.",
                "Pessimistic describes outlook; phlegmatic describes emotional responsiveness."
            ],
            "hook": "Phlegmatic people are so calm they seem almost slug-like - nothing moves them."
        }
    },
    {
        "id": "vocab2_platitude",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PLATITUDE mean?",
        "context": "The graduation speaker offered nothing but platitudes like 'follow your dreams' and 'believe in yourself.'",
        "correct": "A trite, meaningless statement presented as if it were significant",
        "wrong": [
            "A deeply profound philosophical insight",
            "A carefully measured quantity",
            "A high, flat geographic area"
        ],
        "explanation": {
            "right": "Platitude comes from French 'plat' meaning flat. A platitude is flat, dull, and unoriginal despite sounding wise.",
            "traps": [
                "A profound insight has depth; a platitude is shallow.",
                "A measured quantity confuses it with 'magnitude' or 'latitude.'",
                "A flat area confuses it with 'plateau' - similar root but different meaning."
            ],
            "hook": "Platitude = flat + attitude. It's a flat, boring statement that falls flat."
        }
    },
    {
        "id": "vocab2_plethora",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PLETHORA mean?",
        "context": "The store offered a plethora of choices, with over two hundred varieties of cheese from around the world.",
        "correct": "An excessive or overabundant amount",
        "wrong": [
            "A severe shortage or scarcity",
            "An exactly adequate amount",
            "A carefully curated selection"
        ],
        "explanation": {
            "right": "Plethora comes from Greek 'plethore' meaning fullness. Originally a medical term for excess blood, it now means any overabundance.",
            "traps": [
                "A shortage is the opposite of plethora.",
                "An adequate amount is just enough; plethora implies too much.",
                "A curated selection implies careful choosing; plethora implies overwhelming quantity."
            ],
            "hook": "Plethora sounds like 'plenty more-a' - more than plenty, an excess."
        }
    },
    {
        "id": "vocab2_polemic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does POLEMIC mean?",
        "context": "Her latest book is less a scholarly analysis and more a polemic against the pharmaceutical industry.",
        "correct": "A strong verbal or written attack on someone's opinions or principles",
        "wrong": [
            "A balanced and neutral analysis",
            "A formal apology or retraction",
            "A humorous satirical essay"
        ],
        "explanation": {
            "right": "Polemic comes from Greek 'polemikos' meaning warlike. A polemic is an aggressive, one-sided argument.",
            "traps": [
                "Balanced and neutral is the opposite of a polemic's aggressive stance.",
                "An apology concedes; a polemic attacks.",
                "Satire uses humor; a polemic uses direct, forceful argument."
            ],
            "hook": "Polemic has 'pole' - it takes one pole (extreme position) and fights for it."
        }
    },
    {
        "id": "vocab2_proclivity",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PROCLIVITY mean?",
        "context": "She had a proclivity for expensive shoes, often spending her entire paycheck at the boutique.",
        "correct": "A natural inclination or tendency toward something",
        "wrong": [
            "A strong moral objection",
            "A learned professional skill",
            "A temporary phase or passing interest"
        ],
        "explanation": {
            "right": "Proclivity comes from Latin 'proclivis' meaning sloping forward. It suggests a natural leaning toward something.",
            "traps": [
                "An objection means opposition; proclivity means attraction toward.",
                "A learned skill is acquired; proclivity is a natural tendency.",
                "A temporary phase passes; proclivity implies an ingrained inclination."
            ],
            "hook": "Proclivity = pro (forward) + cline (lean). You lean forward toward it naturally."
        }
    },
    {
        "id": "vocab2_profligate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PROFLIGATE mean?",
        "context": "The profligate heir burned through his inheritance in just two years of lavish parties and reckless spending.",
        "correct": "Recklessly extravagant or wasteful",
        "wrong": [
            "Carefully thrifty and economical",
            "Morally upright and disciplined",
            "Professionally successful and admired"
        ],
        "explanation": {
            "right": "Profligate comes from Latin 'profligare' meaning to ruin or overthrow. A profligate person spends recklessly or lives dissolutely.",
            "traps": [
                "Thrifty is the exact opposite of profligate.",
                "Morally upright contradicts profligate's implication of dissolute living.",
                "Professionally successful confuses the 'pro' prefix with something positive."
            ],
            "hook": "Profligate = profit + gate opened wide - money flowing out the gate recklessly."
        }
    },
    {
        "id": "vocab2_propitiate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PROPITIATE mean?",
        "context": "The ancient Greeks would propitiate the gods with animal sacrifices before embarking on long sea voyages.",
        "correct": "To appease or pacify, especially a god or person in power",
        "wrong": [
            "To deliberately provoke or anger",
            "To predict the future",
            "To publicly celebrate or honor"
        ],
        "explanation": {
            "right": "Propitiate comes from Latin 'propitiare' meaning to make favorable. It means to win the goodwill of someone who might be hostile.",
            "traps": [
                "Provoking is the opposite of appeasing.",
                "Predicting confuses it with 'prophesy' or 'prognosticate.'",
                "Celebrating is public honor; propitiating is trying to avoid someone's wrath."
            ],
            "hook": "Propitiate = make propitious (favorable). You're trying to make someone favorable toward you."
        }
    },
    {
        "id": "vocab2_puerile",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PUERILE mean?",
        "context": "His puerile jokes about bodily functions embarrassed everyone at the formal dinner.",
        "correct": "Childishly silly or immature",
        "wrong": [
            "Sophisticated and worldly",
            "Pure and innocent",
            "Deliberately offensive and cruel"
        ],
        "explanation": {
            "right": "Puerile comes from Latin 'puerilis' meaning boyish, from 'puer' (boy). It describes behavior that is juvenile and immature.",
            "traps": [
                "Sophisticated is the opposite of childish.",
                "Pure might seem related to 'puerile' by sound, but puerile means immaturely silly, not innocent.",
                "Cruel implies malice; puerile implies childish silliness without malicious intent."
            ],
            "hook": "Puerile comes from 'puer' (boy) - acting like a silly little boy."
        }
    },
    {
        "id": "vocab2_punctilious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PUNCTILIOUS mean?",
        "context": "The punctilious host ensured every place setting was perfectly aligned and every napkin identically folded.",
        "correct": "Showing great attention to detail or correct behavior",
        "wrong": [
            "Frequently late or unreliable",
            "Aggressively confrontational",
            "Carelessly sloppy in work habits"
        ],
        "explanation": {
            "right": "Punctilious comes from Italian 'puntiglio' meaning a fine point. A punctilious person attends to every fine point of conduct or detail.",
            "traps": [
                "Being late confuses it with 'punctual' - they share a root but punctilious means detail-oriented.",
                "Confrontational describes aggression, not meticulousness.",
                "Sloppy is the opposite of punctilious."
            ],
            "hook": "Punctilious = every point (punctum) must be perfect. Think of a fine point of etiquette."
        }
    },
    {
        "id": "vocab2_pusillanimous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PUSILLANIMOUS mean?",
        "context": "The pusillanimous manager refused to confront the bully in his department, always finding excuses to avoid the conversation.",
        "correct": "Lacking courage; timid and cowardly",
        "wrong": [
            "Excessively aggressive and domineering",
            "Generous and large-hearted",
            "Physically very small in stature"
        ],
        "explanation": {
            "right": "Pusillanimous comes from Latin 'pusillus' (very small) + 'animus' (spirit/mind). Literally: having a tiny spirit.",
            "traps": [
                "Aggressive is the opposite of cowardly.",
                "Generous confuses 'animus' with generosity of spirit; here it means small-spirited.",
                "Physically small confuses the literal Latin with the figurative English meaning."
            ],
            "hook": "Pusillanimous = pussy (small) + animous (spirited). Small-spirited = cowardly."
        }
    },
    {
        "id": "vocab2_quixotic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does QUIXOTIC mean?",
        "context": "His quixotic plan to end world hunger by next Tuesday was admirable in spirit but hopelessly unrealistic.",
        "correct": "Extremely idealistic; unrealistic and impractical",
        "wrong": [
            "Cynically practical and calculating",
            "Dangerously unpredictable",
            "Quietly effective behind the scenes"
        ],
        "explanation": {
            "right": "Quixotic comes from Don Quixote, Cervantes' character who tilted at windmills believing them to be giants - noble but deluded.",
            "traps": [
                "Cynically practical is the opposite of quixotic idealism.",
                "Unpredictable describes erratic behavior, not idealistic impracticality.",
                "Quietly effective implies success; quixotic implies noble failure."
            ],
            "hook": "Think of Don Quixote fighting windmills - romantic and idealistic but completely impractical."
        }
    },
    {
        "id": "vocab2_raconteur",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does RACONTEUR mean?",
        "context": "Grandfather was a natural raconteur, holding the whole family spellbound with tales of his youth in the old country.",
        "correct": "A skilled and entertaining storyteller",
        "wrong": [
            "A professional investigator or detective",
            "A harsh and unforgiving critic",
            "A person who collects rare objects"
        ],
        "explanation": {
            "right": "Raconteur comes from French 'raconter' meaning to tell or recount. A raconteur excels at telling engaging stories.",
            "traps": [
                "An investigator finds facts; a raconteur tells stories.",
                "A critic judges; a raconteur entertains.",
                "A collector gathers objects; a raconteur gathers and tells stories."
            ],
            "hook": "Raconteur = recount +eur (one who). One who recounts tales with flair."
        }
    },
    {
        "id": "vocab2_recalcitrant",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does RECALCITRANT mean?",
        "context": "The recalcitrant teenager refused to follow any household rules, no matter how reasonable they seemed.",
        "correct": "Stubbornly uncooperative and resistant to authority",
        "wrong": [
            "Eager to please and obedient",
            "Calculating and strategically compliant",
            "Physically unable to participate"
        ],
        "explanation": {
            "right": "Recalcitrant comes from Latin 'recalcitrare' meaning to kick back. Like a mule that kicks when you try to lead it.",
            "traps": [
                "Eager to please is the opposite of recalcitrant.",
                "Strategically compliant implies cooperation; recalcitrant means outright resistance.",
                "Physically unable implies incapacity; recalcitrant implies willful refusal."
            ],
            "hook": "Recalcitrant = re (back) + calcitrant (kicking). Kicking back against authority, like a stubborn mule."
        }
    },
    {
        "id": "vocab2_redoubtable",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does REDOUBTABLE mean?",
        "context": "The redoubtable defense attorney had never lost a murder case in her thirty-year career.",
        "correct": "Formidable; inspiring fear or respect",
        "wrong": [
            "Full of self-doubt and insecurity",
            "Questionable or of doubtful quality",
            "Gentle and approachable"
        ],
        "explanation": {
            "right": "Redoubtable comes from French 'redouter' meaning to dread. Someone redoubtable is so formidable they inspire awe or fear.",
            "traps": [
                "Self-doubt confuses the 'doubt' in the word, but redoubtable means others fear you.",
                "Doubtful quality misreads the 'doubt' root - it means causing others to doubt they can beat you.",
                "Gentle is the opposite of the intimidating quality redoubtable implies."
            ],
            "hook": "Redoubtable = others re-doubt (doubt again) whether they can challenge you."
        }
    },
    {
        "id": "vocab2_refractory",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does REFRACTORY mean?",
        "context": "The disease proved refractory to all standard treatments, forcing doctors to try experimental therapies.",
        "correct": "Stubbornly resistant to treatment or control",
        "wrong": [
            "Highly responsive to treatment",
            "Related to the bending of light",
            "Easily broken or fragile"
        ],
        "explanation": {
            "right": "Refractory comes from Latin 'refractarius' meaning stubborn. It describes something that resists management or cure.",
            "traps": [
                "Responsive is the opposite of refractory.",
                "Bending light relates to 'refraction' - same root but different meaning.",
                "Fragile contradicts refractory's implication of stubborn resistance."
            ],
            "hook": "Don't confuse with refraction (light bending). Refractory = refuses to be fractured or broken down by treatment."
        }
    },
    {
        "id": "vocab2_remonstrate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does REMONSTRATE mean?",
        "context": "The neighbors remonstrated with the landlord about the building's crumbling staircase, but he ignored their complaints.",
        "correct": "To protest or object forcefully",
        "wrong": [
            "To demonstrate something again",
            "To quietly accept a situation",
            "To physically reconstruct or rebuild"
        ],
        "explanation": {
            "right": "Remonstrate comes from Latin 'remonstrare' meaning to show again (as in showing reasons for protest). It means to argue against something.",
            "traps": [
                "Demonstrating again confuses the root; remonstrate means to protest.",
                "Quietly accepting is the opposite of protesting.",
                "Rebuilding confuses 're-' prefix with physical reconstruction."
            ],
            "hook": "Remonstrate = re + monstrate (show). You show (demonstrate) your objections again and again."
        }
    },
    {
        "id": "vocab2_replete",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does REPLETE mean?",
        "context": "The museum was replete with artifacts from ancient civilizations, filling every room and hallway.",
        "correct": "Filled to capacity; abundantly supplied",
        "wrong": [
            "Completely empty or bare",
            "Partially filled but lacking",
            "Repetitively decorated"
        ],
        "explanation": {
            "right": "Replete comes from Latin 'repletus' meaning filled up. Something replete is stuffed full, brimming with contents.",
            "traps": [
                "Empty is the opposite of replete.",
                "Partially filled contradicts replete's meaning of full to capacity.",
                "Repetitively decorated confuses the sound with 'repeat.'"
            ],
            "hook": "Replete = re (again) + plete (fill, like 'complete'). Filled and filled again until overflowing."
        }
    },
    {
        "id": "vocab2_reprobate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does REPROBATE mean?",
        "context": "The old reprobate spent his days gambling, drinking, and telling scandalous stories to anyone who would listen.",
        "correct": "An immoral or unprincipled person",
        "wrong": [
            "A person on probation for a minor offense",
            "A deeply religious and moral person",
            "A person who has been proven innocent"
        ],
        "explanation": {
            "right": "Reprobate comes from Latin 'reprobare' meaning to disapprove. A reprobate is someone morally condemned, beyond reform.",
            "traps": [
                "On probation confuses the similar-sounding legal term; reprobate means morally corrupt.",
                "Religious and moral is the opposite of a reprobate.",
                "Proven innocent confuses 'reprob-' with 'reprieve' or acquittal."
            ],
            "hook": "Reprobate = re (again) + probate (test/prove). Tested again and again and always found wanting."
        }
    },
    {
        "id": "vocab2_reticent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does RETICENT mean?",
        "context": "She was reticent about her childhood, rarely sharing personal stories even with close friends.",
        "correct": "Inclined to keep one's thoughts and feelings to oneself; reserved",
        "wrong": [
            "Eager to share every detail of one's life",
            "Stubbornly refusing to cooperate",
            "Repetitive and tediously long-winded"
        ],
        "explanation": {
            "right": "Reticent comes from Latin 'reticere' meaning to keep silent. A reticent person holds back from speaking freely.",
            "traps": [
                "Eager to share is the opposite of reticent.",
                "Refusing to cooperate is broader; reticent specifically means reserved in speech.",
                "Long-winded contradicts reticent's meaning of saying little."
            ],
            "hook": "Reticent = 'ret-i-SCENT' - like a scent you can barely detect. They reveal barely a trace."
        }
    },
    {
        "id": "vocab2_sacrosanct",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SACROSANCT mean?",
        "context": "In their household, Sunday dinner together was sacrosanct - no one was allowed to schedule anything that conflicted.",
        "correct": "Regarded as too important or valuable to be interfered with",
        "wrong": [
            "Outdated and no longer relevant",
            "Related to religious ceremony only",
            "Secretly despised by everyone"
        ],
        "explanation": {
            "right": "Sacrosanct comes from Latin 'sacrosanctus' meaning consecrated with religious ceremonies. It means inviolable, above all criticism.",
            "traps": [
                "Outdated implies irrelevance; sacrosanct implies supreme importance.",
                "While it has religious roots, sacrosanct now applies to anything regarded as untouchable.",
                "Secretly despised contradicts the genuine reverence sacrosanct implies."
            ],
            "hook": "Sacrosanct = sacred + sanctified. Doubly holy - absolutely untouchable."
        }
    },
    {
        "id": "vocab2_sagacious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SAGACIOUS mean?",
        "context": "The sagacious elder offered advice that proved remarkably prescient as events unfolded over the following years.",
        "correct": "Having keen mental discernment and good judgment; wise",
        "wrong": [
            "Physically courageous and bold",
            "Extremely cautious to the point of inaction",
            "Wild and untamed in nature"
        ],
        "explanation": {
            "right": "Sagacious comes from Latin 'sagax' meaning of quick perception. A sagacious person shows exceptional wisdom and foresight.",
            "traps": [
                "Courageous describes bravery, not wisdom.",
                "Overly cautious describes timidity; sagacious describes wise judgment.",
                "Wild confuses it with 'savage' - completely different meaning."
            ],
            "hook": "Sagacious shares a root with 'sage' - a sagacious person is a wise sage."
        }
    },
    {
        "id": "vocab2_salubrious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SALUBRIOUS mean?",
        "context": "The doctor recommended a move to a more salubrious climate, where the clean air might help her respiratory condition.",
        "correct": "Conducive to health or well-being",
        "wrong": [
            "Extremely luxurious and expensive",
            "Dangerously polluted or toxic",
            "Socially prestigious and fashionable"
        ],
        "explanation": {
            "right": "Salubrious comes from Latin 'salubris' meaning healthful, related to 'salus' (health). It describes conditions that promote good health.",
            "traps": [
                "Luxurious describes expense, not health benefits.",
                "Polluted is the opposite of salubrious.",
                "Prestigious describes social standing, not health effects."
            ],
            "hook": "Salubrious = salut (health, as in 'salute' to your health). Good for your body."
        }
    },
    {
        "id": "vocab2_sangfroid",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SANGFROID mean?",
        "context": "The pilot maintained remarkable sangfroid during the engine failure, calmly executing emergency procedures while passengers panicked.",
        "correct": "Composure and coolness under pressure",
        "wrong": [
            "A state of frozen terror",
            "Cold-blooded cruelty",
            "Warm enthusiasm and passion"
        ],
        "explanation": {
            "right": "Sangfroid comes from French 'sang froid' literally meaning cold blood. It describes calm self-possession in dangerous situations.",
            "traps": [
                "Frozen terror is paralysis from fear; sangfroid is deliberate calm.",
                "Cold-blooded cruelty takes 'cold blood' literally toward evil; sangfroid means calm composure.",
                "Warm enthusiasm is the opposite of cool composure."
            ],
            "hook": "Sang (blood) + froid (cold) = cold-blooded calm. Cool under pressure."
        }
    },
    {
        "id": "vocab2_sardonic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SARDONIC mean?",
        "context": "She gave a sardonic smile when her ex-husband's new business failed, saying 'How surprising that happened.'",
        "correct": "Grimly mocking or cynically humorous",
        "wrong": [
            "Warmly affectionate and sincere",
            "Extremely loud and boisterous",
            "Deeply sympathetic and caring"
        ],
        "explanation": {
            "right": "Sardonic comes from Greek 'sardonios' referring to a Sardinian plant said to cause facial contortions resembling bitter laughter.",
            "traps": [
                "Warmly affectionate is the opposite of sardonic bitterness.",
                "Loud describes volume; sardonic describes a bitter, mocking tone.",
                "Sympathetic contradicts the mocking quality of sardonic humor."
            ],
            "hook": "Sardonic = sarcastic + demonic. A dark, biting humor with a cruel edge."
        }
    },
    {
        "id": "vocab2_scrupulous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SCRUPULOUS mean?",
        "context": "The accountant was scrupulous in her work, triple-checking every figure and documenting every transaction.",
        "correct": "Extremely careful and thorough; having strong moral principles",
        "wrong": [
            "Carelessly negligent in duties",
            "Morally corrupt but clever",
            "Excessively suspicious of others"
        ],
        "explanation": {
            "right": "Scrupulous comes from Latin 'scrupulus' meaning a small sharp stone (causing discomfort). A scrupulous person is pricked by conscience at every small wrong.",
            "traps": [
                "Negligent is the opposite of scrupulous.",
                "Morally corrupt contradicts scrupulous's implication of strong ethics.",
                "Suspicious describes distrust; scrupulous describes conscientiousness."
            ],
            "hook": "A scruple is like a pebble in your shoe - a scrupulous person is bothered by even tiny wrongs."
        }
    },
    {
        "id": "vocab2_sedulous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SEDULOUS mean?",
        "context": "Through sedulous practice over many years, the pianist transformed from a mediocre student into a concert performer.",
        "correct": "Showing great dedication and diligence; persevering",
        "wrong": [
            "Naturally talented without effort",
            "Lazily indifferent to outcomes",
            "Seductive and manipulative"
        ],
        "explanation": {
            "right": "Sedulous comes from Latin 'sedulus' meaning diligent. It describes persistent, careful, and hardworking effort.",
            "traps": [
                "Natural talent implies no effort; sedulous means working extremely hard.",
                "Lazily indifferent is the opposite of sedulous diligence.",
                "Seductive confuses the sound; sedulous relates to diligence, not seduction."
            ],
            "hook": "Sedulous sounds like 'schedule-ous' - someone who diligently follows their schedule of hard work."
        }
    },
    {
        "id": "vocab2_solicitous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SOLICITOUS mean?",
        "context": "The solicitous nurse checked on her patient every hour, always asking if there was anything more she could do.",
        "correct": "Showing attentive care and concern for someone's well-being",
        "wrong": [
            "Aggressively trying to sell something",
            "Coldly indifferent to suffering",
            "Seeking romantic attention inappropriately"
        ],
        "explanation": {
            "right": "Solicitous comes from Latin 'sollicitus' meaning anxious or concerned. A solicitous person shows eager, sometimes anxious, care for others.",
            "traps": [
                "Selling confuses it with 'soliciting' business; solicitous means showing concern.",
                "Coldly indifferent is the opposite of attentive care.",
                "Romantic attention confuses it with sexual solicitation."
            ],
            "hook": "Solicitous = 'soul-icitous' - someone whose soul is concerned about your well-being."
        }
    },
    {
        "id": "vocab2_soporific",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SOPORIFIC mean?",
        "context": "The professor's soporific lecture on tax law had half the class nodding off by the second slide.",
        "correct": "Tending to induce sleep; extremely boring",
        "wrong": [
            "Highly stimulating and energizing",
            "Deeply philosophical and thought-provoking",
            "Mildly amusing but forgettable"
        ],
        "explanation": {
            "right": "Soporific comes from Latin 'sopor' meaning deep sleep. Something soporific makes you drowsy or puts you to sleep.",
            "traps": [
                "Stimulating is the opposite of sleep-inducing.",
                "Thought-provoking engages the mind; soporific dulls it to sleep.",
                "Mildly amusing might be forgettable but doesn't imply sleep-inducing."
            ],
            "hook": "Soporific = sopor (sleep). It puts you in a stupor - think of sleeping pills."
        }
    },
    {
        "id": "vocab2_specious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SPECIOUS mean?",
        "context": "His specious argument sounded convincing at first, but fell apart under closer examination.",
        "correct": "Superficially plausible but actually wrong; misleading",
        "wrong": [
            "Genuinely valid and well-reasoned",
            "Obviously false and easily dismissed",
            "Related to a particular species or type"
        ],
        "explanation": {
            "right": "Specious comes from Latin 'speciosus' meaning beautiful or plausible. Something specious looks good on the surface but is fundamentally flawed.",
            "traps": [
                "Genuinely valid is what specious arguments appear to be but aren't.",
                "Obviously false contradicts the deceptive surface plausibility.",
                "Related to species confuses the similar-looking words."
            ],
            "hook": "Specious = special appearance but no substance. Looks right, is wrong."
        }
    },
    {
        "id": "vocab2_squalid",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SQUALID mean?",
        "context": "The refugees were forced to live in squalid conditions, with no running water and sewage in the streets.",
        "correct": "Extremely dirty, unpleasant, and degrading",
        "wrong": [
            "Luxuriously comfortable and clean",
            "Moderately uncomfortable but bearable",
            "Surprisingly spacious and well-organized"
        ],
        "explanation": {
            "right": "Squalid comes from Latin 'squalidus' meaning rough or dirty. It describes conditions that are filthy and morally degrading.",
            "traps": [
                "Luxurious is the opposite of squalid.",
                "Moderately uncomfortable understates squalid's extreme filth.",
                "Spacious and organized contradicts the degraded nature of squalid conditions."
            ],
            "hook": "Squalid = 'squal' sounds like 'squall' (a dirty storm). Think of the worst, filthiest conditions."
        }
    },
    {
        "id": "vocab2_stolid",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does STOLID mean?",
        "context": "The stolid farmer showed no emotion when told his crop had failed, simply nodding and planning for next season.",
        "correct": "Calm, dependable, and showing little emotion",
        "wrong": [
            "Extremely emotional and easily upset",
            "Intellectually brilliant but eccentric",
            "Physically solid and immovable"
        ],
        "explanation": {
            "right": "Stolid comes from Latin 'stolidus' meaning dull or stupid, but in English it means impassive and unemotional without implying stupidity.",
            "traps": [
                "Extremely emotional is the opposite of stolid's impassive nature.",
                "Brilliant but eccentric describes intelligence; stolid describes emotional reserve.",
                "Physically solid confuses the sound; stolid describes temperament, not body."
            ],
            "hook": "Stolid = solid temperament. Like a rock - emotionally unmoved by anything."
        }
    },
    {
        "id": "vocab2_supercilious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SUPERCILIOUS mean?",
        "context": "The supercilious waiter looked down his nose at customers who mispronounced the French menu items.",
        "correct": "Behaving as if one is superior to others; arrogantly disdainful",
        "wrong": [
            "Exceptionally helpful and accommodating",
            "Superficially friendly but secretly hostile",
            "Lacking in basic social awareness"
        ],
        "explanation": {
            "right": "Supercilious comes from Latin 'supercilium' meaning eyebrow - literally raising your eyebrow at others in contempt.",
            "traps": [
                "Helpful is the opposite of disdainful.",
                "Secretly hostile implies hidden feelings; supercilious is openly contemptuous.",
                "Lacking social awareness implies ignorance; supercilious implies deliberate condescension."
            ],
            "hook": "Supercilious = super (above) + cilium (eyebrow). Looking down with a raised eyebrow."
        }
    },
    {
        "id": "vocab2_sycophant",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SYCOPHANT mean?",
        "context": "The CEO surrounded himself with sycophants who praised every decision he made, no matter how ill-advised.",
        "correct": "A person who flatters powerful people to gain advantage",
        "wrong": [
            "A person who constantly criticizes authority",
            "A large musical instrument",
            "A person who mediates disputes fairly"
        ],
        "explanation": {
            "right": "Sycophant comes from Greek 'sykophantes' originally meaning an informer. Now it means a servile flatterer who seeks favor from the powerful.",
            "traps": [
                "Criticizing authority is the opposite of a sycophant's behavior.",
                "A musical instrument confuses it with 'saxophone' or similar.",
                "A fair mediator is neutral; a sycophant is biased toward power."
            ],
            "hook": "Sycophant = 'sick-o-fant' - it's sick how much they fawn over powerful people."
        }
    },
    {
        "id": "vocab2_taciturn",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does TACITURN mean?",
        "context": "The taciturn detective answered questions with single words, rarely offering more than was absolutely necessary.",
        "correct": "Habitually reserved and uncommunicative; saying little",
        "wrong": [
            "Excessively talkative and chatty",
            "Temporarily silent due to anger",
            "Unable to speak due to a medical condition"
        ],
        "explanation": {
            "right": "Taciturn comes from Latin 'tacitus' meaning silent. A taciturn person is characteristically quiet and untalkative.",
            "traps": [
                "Talkative is the opposite of taciturn.",
                "Temporarily silent implies choice in the moment; taciturn describes a permanent character trait.",
                "Unable to speak implies physical limitation; taciturn implies choosing not to talk."
            ],
            "hook": "Taciturn = tacit (silent) + turn. Every turn in conversation, they stay silent."
        }
    },
    {
        "id": "vocab2_tendentious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does TENDENTIOUS mean?",
        "context": "The documentary was criticized as tendentious, presenting only evidence that supported the director's political views.",
        "correct": "Expressing a strong opinion or bias, especially a controversial one",
        "wrong": [
            "Carefully balanced and objective",
            "Tender and emotionally sensitive",
            "Stretching the truth slightly but harmlessly"
        ],
        "explanation": {
            "right": "Tendentious comes from 'tendency' - it describes something that clearly tends toward a particular bias or agenda.",
            "traps": [
                "Balanced and objective is the opposite of biased.",
                "Tender confuses the similar sound; tendentious relates to tendency, not tenderness.",
                "Slightly stretching truth understates the deliberate bias tendentious implies."
            ],
            "hook": "Tendentious = tendency + ious. It has a clear tendency toward one biased point of view."
        }
    },
    {
        "id": "vocab2_toady",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does TOADY mean?",
        "context": "He was nothing but a toady to the department head, always agreeing and never offering an honest opinion.",
        "correct": "A person who flatters others for personal gain; a sycophant",
        "wrong": [
            "A small amphibian found near water",
            "A brave and independent rebel",
            "A person who works slowly and methodically"
        ],
        "explanation": {
            "right": "Toady comes from 'toad-eater' - an assistant who would eat toads (believed poisonous) so a quack doctor could 'cure' them, doing anything to please.",
            "traps": [
                "While related to the word 'toad,' a toady is a person, not an animal.",
                "A rebel opposes authority; a toady sucks up to it.",
                "Working slowly describes pace; toady describes servile flattery."
            ],
            "hook": "A toady would eat a toad if their boss asked - total servile obedience."
        }
    },
    {
        "id": "vocab2_trenchant",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does TRENCHANT mean?",
        "context": "Her trenchant analysis of the company's failures left the board members speechless and unable to defend their decisions.",
        "correct": "Vigorous, incisive, and effectively articulate",
        "wrong": [
            "Vague and poorly articulated",
            "Deeply entrenched and unchanging",
            "Trembling with nervous energy"
        ],
        "explanation": {
            "right": "Trenchant comes from French 'trancher' meaning to cut. A trenchant remark cuts right to the heart of the matter.",
            "traps": [
                "Vague is the opposite of trenchant's sharp clarity.",
                "Entrenched confuses similar sounds; trenchant means cutting, not dug-in.",
                "Trembling confuses the similar sound with 'tremble.'"
            ],
            "hook": "Trenchant = like a trench-cutting tool. It cuts sharply through confusion to the point."
        }
    },
    {
        "id": "vocab2_truculent",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does TRUCULENT mean?",
        "context": "The truculent union negotiator slammed his fist on the table and threatened to walk out unless demands were met immediately.",
        "correct": "Eager or quick to argue or fight; aggressively defiant",
        "wrong": [
            "Driving a large vehicle for a living",
            "Peacefully cooperative in negotiations",
            "Slow-moving and lethargic"
        ],
        "explanation": {
            "right": "Truculent comes from Latin 'truculentus' meaning fierce or savage. A truculent person is combative and quick to fight.",
            "traps": [
                "Driving a truck confuses the similar sound; truculent means fierce.",
                "Peacefully cooperative is the opposite of truculent aggression.",
                "Slow-moving confuses it with 'trudge'; truculent means fiercely aggressive."
            ],
            "hook": "Truculent = truck (fierce) + ulent. Like a truck barreling aggressively at you."
        }
    },
    {
        "id": "vocab2_turgid",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does TURGID mean?",
        "context": "The professor's turgid prose was so overblown and dense that students couldn't extract any clear meaning from it.",
        "correct": "Swollen, bloated; or (of language) pompously overblown",
        "wrong": [
            "Elegantly concise and clear",
            "Rapidly flowing and energetic",
            "Dangerously turbulent"
        ],
        "explanation": {
            "right": "Turgid comes from Latin 'turgidus' meaning swollen. It describes language that is inflated with pomposity, or literally swollen tissue.",
            "traps": [
                "Concise and clear is the opposite of bloated turgid prose.",
                "Rapidly flowing suggests movement; turgid implies sluggish heaviness.",
                "Turbulent confuses the similar sound; turgid means swollen, not chaotic."
            ],
            "hook": "Turgid = gorged. Language that's gorged with too many words, bloated and pompous."
        }
    },
    {
        "id": "vocab2_ubiquitous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does UBIQUITOUS mean?",
        "context": "Smartphones have become ubiquitous, found in the hands of people across nearly every country and income level.",
        "correct": "Present, appearing, or found everywhere",
        "wrong": [
            "Extremely rare and hard to find",
            "Unique to one specific location",
            "Secretly hidden from public view"
        ],
        "explanation": {
            "right": "Ubiquitous comes from Latin 'ubique' meaning everywhere. Something ubiquitous is seemingly present in all places at once.",
            "traps": [
                "Extremely rare is the opposite of ubiquitous.",
                "Unique to one location contradicts being found everywhere.",
                "Secretly hidden contradicts ubiquitous's meaning of being visibly everywhere."
            ],
            "hook": "Ubiquitous = 'you-BIQ-uitous' - you see it everywhere you look, big presence."
        }
    },
    {
        "id": "vocab2_unctuous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does UNCTUOUS mean?",
        "context": "The unctuous salesman oozed false sincerity as he assured the elderly couple this was the deal of a lifetime.",
        "correct": "Excessively flattering or ingratiating in a way that seems insincere",
        "wrong": [
            "Genuinely warm and caring",
            "Rough and abrasive in manner",
            "Physically greasy or oily without metaphor"
        ],
        "explanation": {
            "right": "Unctuous comes from Latin 'unctus' meaning anointed with oil. Figuratively, an unctuous person is slippery with false charm.",
            "traps": [
                "Genuinely warm is what unctuous people pretend to be.",
                "Rough is the opposite of unctuous smoothness.",
                "While literally meaning oily, in modern usage unctuous describes insincere flattery."
            ],
            "hook": "Unctuous = oily. An unctuous person is slick with fake charm - you can't trust their greasy smile."
        }
    },
    {
        "id": "vocab2_venal",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does VENAL mean?",
        "context": "The venal politician accepted bribes from three different corporations while publicly championing anti-corruption laws.",
        "correct": "Susceptible to bribery; corrupt and willing to act dishonestly for money",
        "wrong": [
            "Forgivable or easily pardoned",
            "Related to veins and blood circulation",
            "Vindictive and seeking revenge"
        ],
        "explanation": {
            "right": "Venal comes from Latin 'venalis' meaning for sale. A venal person's integrity is for sale to the highest bidder.",
            "traps": [
                "Forgivable confuses venal with 'venial' (a minor, pardonable sin) - they sound similar but differ greatly.",
                "Related to veins confuses it with 'venous.'",
                "Vindictive means revenge-seeking; venal means corruptible by money."
            ],
            "hook": "Venal vs venial: venAL = for sALe (corrupt). VeniAL = fOrgivable (minor sin). Don't mix them up!"
        }
    },
    {
        "id": "vocab2_veracious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does VERACIOUS mean?",
        "context": "The witness was known to be veracious, having never been caught in a lie throughout decades of testimony.",
        "correct": "Habitually truthful; accurate and honest",
        "wrong": [
            "Extremely hungry or greedy",
            "Bold and fearless in action",
            "Tending to speak at great length"
        ],
        "explanation": {
            "right": "Veracious comes from Latin 'verax' meaning truthful, from 'verus' (true). A veracious person consistently tells the truth.",
            "traps": [
                "Hungry/greedy confuses it with 'voracious' (ravenous).",
                "Bold confuses it with 'audacious.'",
                "Speaking at length confuses it with 'verbose' or 'loquacious.'"
            ],
            "hook": "Veracious = verify + aceous. A veracious person's words can always be verified as true."
        }
    },
    {
        "id": "vocab2_verisimilitude",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does VERISIMILITUDE mean?",
        "context": "The novel's verisimilitude was remarkable - readers often forgot they were reading fiction because every detail felt so real.",
        "correct": "The appearance of being true or real",
        "wrong": [
            "An exact factual replica",
            "A deliberate artistic distortion",
            "The quality of being similar to something else"
        ],
        "explanation": {
            "right": "Verisimilitude comes from Latin 'veri' (truth) + 'similitudo' (similarity). It means having the quality of seeming true or lifelike.",
            "traps": [
                "An exact replica implies actual truth; verisimilitude is the appearance of truth.",
                "Artistic distortion is the opposite of lifelike appearance.",
                "Being similar to something else is too broad; verisimilitude specifically means seeming true to life."
            ],
            "hook": "Verisimilitude = very similar to truth. It looks and feels real, even if it's fiction."
        }
    },
    {
        "id": "vocab2_vicissitude",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does VICISSITUDE mean?",
        "context": "Through all the vicissitudes of fortune - bankruptcy, illness, and loss - she maintained her dignity and resolve.",
        "correct": "A change of circumstances, typically unwelcome; life's ups and downs",
        "wrong": [
            "A permanent and unchanging state",
            "A moral failing or vice",
            "A form of legal punishment"
        ],
        "explanation": {
            "right": "Vicissitude comes from Latin 'vicissitudo' meaning change or alternation. It refers to the unpredictable changes and hardships of life.",
            "traps": [
                "A permanent state contradicts vicissitude's core meaning of change.",
                "A vice confuses the similar sound; vicissitude means life changes.",
                "Legal punishment confuses it with a sentence or verdict."
            ],
            "hook": "Vicissitude = 'vicious attitude' of fate - life's cruel twists and turns."
        }
    },
    {
        "id": "vocab2_vitriolic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does VITRIOLIC mean?",
        "context": "The vitriolic review called the restaurant 'a crime against food' and suggested the chef 'find a different career, like demolition.'",
        "correct": "Filled with bitter criticism or malice; caustic",
        "wrong": [
            "Full of life and positive energy",
            "Transparent and crystal-clear",
            "Mildly disapproving but fair"
        ],
        "explanation": {
            "right": "Vitriolic comes from 'vitriol' (sulfuric acid). Like acid, vitriolic speech burns and destroys with its harshness.",
            "traps": [
                "Full of life confuses 'vitr-' with 'vital.'",
                "Crystal-clear confuses 'vitr-' with 'vitreous' (glassy).",
                "Mildly disapproving understates the extreme caustic nature of vitriolic speech."
            ],
            "hook": "Vitriolic = vitriol (acid). Words so harsh they burn like acid."
        }
    },
    {
        "id": "vocab2_vituperate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does VITUPERATE mean?",
        "context": "The coach vituperated the referee for ten straight minutes, earning himself an ejection from the game.",
        "correct": "To blame or insult someone in strong, harsh language",
        "wrong": [
            "To praise excessively and publicly",
            "To recover strength and energy",
            "To speak quickly and energetically"
        ],
        "explanation": {
            "right": "Vituperate comes from Latin 'vituperare' meaning to blame or find fault with. It means to shower someone with abusive criticism.",
            "traps": [
                "Praising is the opposite of vituperating.",
                "Recovering energy confuses it with 'recuperate.'",
                "Speaking quickly confuses energy with the abusive nature of vituperation."
            ],
            "hook": "Vituperate = vicious + berate. Viciously berating someone with harsh language."
        }
    },
    {
        "id": "vocab2_voluble",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does VOLUBLE mean?",
        "context": "The voluble tour guide barely paused for breath, filling every moment with anecdotes, facts, and commentary.",
        "correct": "Speaking or spoken fluently, readily, and at length",
        "wrong": [
            "Extremely quiet and withdrawn",
            "Large in physical volume or size",
            "Easily changeable or volatile"
        ],
        "explanation": {
            "right": "Voluble comes from Latin 'volubilis' meaning rolling or flowing. A voluble person has words that flow freely and abundantly.",
            "traps": [
                "Quiet is the opposite of voluble's talkative nature.",
                "Physical volume confuses it with 'voluminous'; voluble describes speech.",
                "Volatile confuses the similar sound; voluble means talkative, not unstable."
            ],
            "hook": "Voluble = volume of speech. The words roll off their tongue in great volume."
        }
    },
    {
        "id": "vocab2_acumen",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ACUMEN mean?",
        "context": "Her business acumen allowed her to identify profitable opportunities that others consistently overlooked.",
        "correct": "The ability to make good judgments and quick decisions in a particular domain",
        "wrong": [
            "Accumulated wealth or financial assets",
            "Physical agility and quick reflexes",
            "A formal academic credential or degree"
        ],
        "explanation": {
            "right": "Acumen comes from Latin 'acuere' meaning to sharpen. Acumen is sharpness of mind in a specific area.",
            "traps": [
                "Wealth is what acumen might help you gain, but acumen itself is mental sharpness.",
                "Physical agility describes the body; acumen describes mental keenness.",
                "A credential is formal; acumen is innate sharpness of judgment."
            ],
            "hook": "Acumen = acute + men(tal). An acute, sharp mental ability."
        }
    },
    {
        "id": "vocab2_anomaly",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ANOMALY mean?",
        "context": "The warm December day was an anomaly in a region that typically saw heavy snowfall by mid-November.",
        "correct": "Something that deviates from what is standard, normal, or expected",
        "wrong": [
            "A perfectly predictable pattern",
            "An anonymous person or entity",
            "A serious error in judgment"
        ],
        "explanation": {
            "right": "Anomaly comes from Greek 'anomalos' meaning uneven or irregular. An anomaly doesn't fit the expected pattern.",
            "traps": [
                "A predictable pattern is the opposite of an anomaly.",
                "Anonymous confuses similar sounds; anomaly means irregular, not unnamed.",
                "An error in judgment describes a mistake; an anomaly is simply something unusual."
            ],
            "hook": "Anomaly = a + normal + y. It's A-not-normal - something that breaks the pattern."
        }
    },
    {
        "id": "vocab2_ascetic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ASCETIC mean?",
        "context": "The ascetic monk lived in a bare cell with only a mat for sleeping, eating one simple meal a day.",
        "correct": "Practicing severe self-discipline and abstaining from pleasure",
        "wrong": [
            "Devoted to beauty and artistic expression",
            "Living in extreme luxury and indulgence",
            "Focused on physical fitness and athletics"
        ],
        "explanation": {
            "right": "Ascetic comes from Greek 'asketes' meaning one who exercises or trains. An ascetic trains through self-denial.",
            "traps": [
                "Devoted to beauty confuses it with 'aesthetic' - they sound similar but differ completely.",
                "Luxury is the opposite of ascetic self-denial.",
                "Athletic fitness confuses physical training with spiritual self-denial."
            ],
            "hook": "Ascetic vs aesthetic: asCETic = self-denial (monk). aesTHETic = beauty. Don't mix them!"
        }
    },
    {
        "id": "vocab2_aspersion",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ASPERSION mean?",
        "context": "She cast aspersions on his character, implying without proof that he had embezzled company funds.",
        "correct": "An attack on someone's reputation; a damaging or false claim",
        "wrong": [
            "A generous compliment or praise",
            "A sprinkling of water in a ceremony",
            "A deep personal ambition or goal"
        ],
        "explanation": {
            "right": "Aspersion comes from Latin 'aspergere' meaning to sprinkle. Casting aspersions is like sprinkling dirt on someone's reputation.",
            "traps": [
                "A compliment is the opposite of an aspersion.",
                "Sprinkling water is the literal meaning of the Latin root, but aspersion means a reputational attack.",
                "An ambition confuses it with 'aspiration.'"
            ],
            "hook": "Aspersion = cast dirt (asperse = sprinkle). You sprinkle mud on someone's good name."
        }
    },
    {
        "id": "vocab2_atonement",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ATONEMENT mean?",
        "context": "He spent years in community service as atonement for the harm his drunk driving had caused the family.",
        "correct": "The act of making amends for a wrongdoing",
        "wrong": [
            "The state of being perfectly tuned musically",
            "A formal legal declaration of innocence",
            "The process of converting atoms into energy"
        ],
        "explanation": {
            "right": "Atonement comes from 'at-one-ment' - the process of becoming 'at one' again after a rift caused by wrongdoing.",
            "traps": [
                "Musical tuning confuses 'atone' with 'a tone.'",
                "Legal innocence removes blame; atonement accepts blame and makes amends.",
                "Converting atoms is atomic physics; atonement is moral reconciliation."
            ],
            "hook": "Atonement = at + one + ment. Becoming 'at one' with those you've wronged."
        }
    },
    {
        "id": "vocab2_calumny",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CALUMNY mean?",
        "context": "The politician sued the newspaper for calumny after it published false claims that he had a criminal record.",
        "correct": "The making of false and defamatory statements about someone; slander",
        "wrong": [
            "A period of calm and peaceful reflection",
            "A formal written agreement between parties",
            "A column or pillar in architecture"
        ],
        "explanation": {
            "right": "Calumny comes from Latin 'calumnia' meaning false accusation or trickery. It means malicious lies intended to damage reputation.",
            "traps": [
                "Calm confuses the sound; calumny is the opposite of peaceful.",
                "A written agreement is a contract; calumny is false accusation.",
                "A column confuses the similar sound with architectural terms."
            ],
            "hook": "Calumny = call + ummy - calling someone bad names (false, defamatory ones)."
        }
    },
    {
        "id": "vocab2_chicanery",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CHICANERY mean?",
        "context": "The contract was full of legal chicanery designed to trap unwary customers into paying hidden fees.",
        "correct": "The use of trickery or deception to achieve one's purpose",
        "wrong": [
            "Authentic Mexican or Chicano culture",
            "Brave and chivalrous behavior",
            "A type of roasted coffee preparation"
        ],
        "explanation": {
            "right": "Chicanery comes from French 'chicaner' meaning to quibble or use tricks. It describes clever but dishonest manipulation.",
            "traps": [
                "Chicano culture confuses similar sounds; chicanery means trickery.",
                "Chivalrous behavior is honorable; chicanery is deceptive.",
                "Coffee preparation confuses it with 'chicory.'"
            ],
            "hook": "Chicanery = cheat + trickery. Clever cheating disguised as legitimate dealings."
        }
    },
    {
        "id": "vocab2_compunction",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does COMPUNCTION mean?",
        "context": "He felt no compunction about firing the employee who had been stealing from the company for months.",
        "correct": "A feeling of guilt or moral scruple that prevents wrongdoing",
        "wrong": [
            "A mandatory legal requirement",
            "A physical puncture wound",
            "A sudden impulsive action"
        ],
        "explanation": {
            "right": "Compunction comes from Latin 'compungere' meaning to prick sharply. It's the pricking of conscience that makes you hesitate.",
            "traps": [
                "A legal requirement is external force; compunction is internal guilt.",
                "A puncture wound is physical; compunction is the figurative pricking of conscience.",
                "An impulsive action is the opposite - compunction restrains you from acting."
            ],
            "hook": "Compunction = con (with) + puncture. Your conscience pricks (punctures) you with guilt."
        }
    },
    {
        "id": "vocab2_confound",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does CONFOUND mean?",
        "context": "The magician's trick confounded even the expert debunkers, who could not explain how it was done.",
        "correct": "To cause surprise or confusion; to prove wrong by being unexpected",
        "wrong": [
            "To establish or create something new",
            "To agree completely with others",
            "To combine two things together"
        ],
        "explanation": {
            "right": "Confound comes from Latin 'confundere' meaning to pour together or mix up. To confound is to bewilder or defeat expectations.",
            "traps": [
                "To establish confuses it with 'found' (to establish); confound means to confuse.",
                "To agree confuses it with 'concur'; confound means to baffle.",
                "To combine confuses the 'found/fund' root; confound means to mix up mentally."
            ],
            "hook": "Confound = con (together) + found (pour) = pour everything together into confusion."
        }
    },
    {
        "id": "vocab2_denouement",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DENOUEMENT mean?",
        "context": "In the denouement of the mystery novel, all the loose threads were tied up and the killer's identity was revealed.",
        "correct": "The final resolution or outcome of a story or situation",
        "wrong": [
            "The opening scene that sets up the conflict",
            "A sudden plot twist in the middle",
            "A formal public accusation or denouncement"
        ],
        "explanation": {
            "right": "Denouement comes from French 'denouer' meaning to untie. It's the untying of all the plot's knots at the end.",
            "traps": [
                "The opening scene is exposition, not denouement.",
                "A middle plot twist is a complication; denouement is the resolution.",
                "A denouncement is a public accusation; a denouement is a story's conclusion."
            ],
            "hook": "Denouement = de (un) + noue (knot). Untying all the knots of the plot at the end."
        }
    },
    {
        "id": "vocab2_duplicity",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does DUPLICITY mean?",
        "context": "His duplicity was eventually exposed when both sides of the negotiation discovered he had been making contradictory promises.",
        "correct": "Deceitfulness; double-dealing or deception",
        "wrong": [
            "The quality of being an exact copy",
            "Doing something twice for safety",
            "Speaking two languages fluently"
        ],
        "explanation": {
            "right": "Duplicity comes from Latin 'duplicitas' meaning doubleness. It means being two-faced - saying one thing while doing another.",
            "traps": [
                "Being an exact copy relates to 'duplicate'; duplicity means double-dealing deception.",
                "Doing things twice confuses the 'dupli' (double) root with repetition for accuracy.",
                "Speaking two languages confuses it with bilingualism."
            ],
            "hook": "Duplicity = dupli (double) + city of lies. Being double-faced, two-faced, deceptive."
        }
    },
    {
        "id": "vocab2_edify",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EDIFY mean?",
        "context": "The professor's lectures didn't just inform students - they edified them, making them better thinkers and people.",
        "correct": "To instruct or improve someone morally or intellectually",
        "wrong": [
            "To modify or edit a document",
            "To construct a large building",
            "To officially certify or validate"
        ],
        "explanation": {
            "right": "Edify comes from Latin 'aedificare' meaning to build (originally a building). Figuratively, to edify is to build up someone's mind or character.",
            "traps": [
                "Editing a document confuses similar sounds; edify means to uplift intellectually.",
                "Constructing a building is the literal Latin root, but in English edify is figurative.",
                "Certifying confuses it with 'ratify' or 'verify.'"
            ],
            "hook": "Edify = edifice (building). You build up someone's mind and character."
        }
    },
    {
        "id": "vocab2_elucidate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ELUCIDATE mean?",
        "context": "Could you elucidate your position on this issue? I'm not sure I understand your argument fully.",
        "correct": "To make something clear; to explain or clarify",
        "wrong": [
            "To deliberately confuse or mislead",
            "To eliminate or remove completely",
            "To escape from a difficult situation"
        ],
        "explanation": {
            "right": "Elucidate comes from Latin 'elucidare' meaning to make light. To elucidate is to shed light on something unclear.",
            "traps": [
                "Confusing or misleading is the opposite of elucidating.",
                "Eliminating confuses the 'elu-' prefix; elucidate means to clarify.",
                "Escaping confuses it with 'elude'; elucidate means to explain."
            ],
            "hook": "Elucidate = e + lucid (clear/light). To make something lucid - to shed light on it."
        }
    },
    {
        "id": "vocab2_empirical",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EMPIRICAL mean?",
        "context": "The theory was compelling, but without empirical evidence from controlled experiments, it remained unproven.",
        "correct": "Based on observation or experience rather than theory alone",
        "wrong": [
            "Related to empires and imperial power",
            "Based purely on theoretical reasoning",
            "Emotionally persuasive but unverifiable"
        ],
        "explanation": {
            "right": "Empirical comes from Greek 'empeiria' meaning experience. Empirical knowledge comes from direct observation and testing.",
            "traps": [
                "Imperial power confuses the similar sound; empirical relates to experience.",
                "Purely theoretical is the opposite - empirical means based on observation.",
                "Emotionally persuasive is rhetoric; empirical means based on factual evidence."
            ],
            "hook": "Empirical = experience. You experience it, observe it, measure it - that's empirical evidence."
        }
    },
    {
        "id": "vocab2_engender",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does ENGENDER mean?",
        "context": "The manager's transparency engendered trust among employees, who felt respected and included in decisions.",
        "correct": "To cause or give rise to a feeling or situation",
        "wrong": [
            "To determine the gender of something",
            "To put in danger or endanger",
            "To make something more general or broad"
        ],
        "explanation": {
            "right": "Engender comes from Latin 'ingenerare' meaning to generate or produce. To engender is to bring something into existence.",
            "traps": [
                "Determining gender confuses 'gender' in the word; engender means to produce or cause.",
                "Endangering confuses similar sounds; engender means to create, not to threaten.",
                "Making general confuses it with 'generalize.'"
            ],
            "hook": "Engender = en + gender (generate/produce). To generate or produce a feeling or condition."
        }
    },
    {
        "id": "vocab2_exhort",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does EXHORT mean?",
        "context": "The coach exhorted her team to give their absolute best in the final quarter, reminding them what was at stake.",
        "correct": "To strongly encourage or urge someone to do something",
        "wrong": [
            "To publicly shame or humiliate",
            "To export goods to another country",
            "To breathe out heavily from exhaustion"
        ],
        "explanation": {
            "right": "Exhort comes from Latin 'exhortari' meaning to encourage thoroughly. To exhort is to earnestly urge someone toward action.",
            "traps": [
                "Shaming is negative; exhorting is encouraging someone toward positive action.",
                "Exporting confuses similar sounds; exhort means to urge.",
                "Breathing out confuses 'ex-' prefix with exhaling."
            ],
            "hook": "Exhort = ex (thoroughly) + hort (encourage, like 'hortatory'). To thoroughly encourage."
        }
    },
    {
        "id": "vocab2_fecund",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does FECUND mean?",
        "context": "The fecund river valley produced three harvests per year, supporting a dense and prosperous population.",
        "correct": "Highly fertile and productive",
        "wrong": [
            "Extremely dry and barren",
            "Foul-smelling and unpleasant",
            "Second in importance or rank"
        ],
        "explanation": {
            "right": "Fecund comes from Latin 'fecundus' meaning fruitful. It describes exceptional fertility or creative productivity.",
            "traps": [
                "Dry and barren is the opposite of fecund fertility.",
                "Foul-smelling confuses it with 'fetid' or 'fecal.'",
                "Second in rank confuses it with 'second'; fecund means fertile."
            ],
            "hook": "Fecund = fertile and fruitful. Think of it as 'fee-KUND' of life - brimming with life."
        }
    },
    {
        "id": "vocab2_harbinger",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does HARBINGER mean?",
        "context": "The first robin of spring is often seen as a harbinger of warmer days to come.",
        "correct": "A person or thing that announces or signals the approach of something",
        "wrong": [
            "A safe place of shelter or refuge",
            "A person who carries heavy burdens",
            "A final warning before punishment"
        ],
        "explanation": {
            "right": "Harbinger originally meant one who goes ahead to arrange lodging. Now it means any sign that foreshadows what's coming.",
            "traps": [
                "A shelter confuses it with 'harbor'; a harbinger signals what's coming.",
                "Carrying burdens confuses it with a bearer or porter.",
                "A final warning implies punishment; a harbinger simply announces what approaches."
            ],
            "hook": "A harbinger goes ahead to the harbor - they arrive first, signaling others are coming."
        }
    },
    {
        "id": "vocab2_hubris",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does HUBRIS mean?",
        "context": "It was sheer hubris to think he could summit Everest without a guide, and the mountain nearly claimed his life.",
        "correct": "Excessive pride or dangerous overconfidence",
        "wrong": [
            "A large gathering of people",
            "Extreme humility and self-deprecation",
            "Physical debris or wreckage"
        ],
        "explanation": {
            "right": "Hubris comes from Greek, where it meant outrageous arrogance that offends the gods. In English, it's dangerous excessive pride.",
            "traps": [
                "A gathering confuses it with 'hub'; hubris means arrogance.",
                "Humility is the opposite of hubris.",
                "Debris confuses similar sounds; hubris is a character flaw, not physical wreckage."
            ],
            "hook": "Hubris = the pride of someone who thinks they're the hub of the universe. It always leads to a fall."
        }
    },
    {
        "id": "vocab2_immutable",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does IMMUTABLE mean?",
        "context": "The laws of physics are immutable - no amount of wishing can change the speed of light or the force of gravity.",
        "correct": "Unchanging over time; unable to be changed",
        "wrong": [
            "Capable of being silenced or muted",
            "Constantly changing and unstable",
            "Able to be discussed or debated"
        ],
        "explanation": {
            "right": "Immutable comes from Latin 'immutabilis' - im (not) + mutabilis (changeable). Something immutable cannot be altered.",
            "traps": [
                "Being muted confuses the sound with 'mute'; immutable means unchangeable.",
                "Constantly changing is the opposite of immutable.",
                "Debatable confuses it with 'disputable'; immutable means fixed and unchanging."
            ],
            "hook": "Immutable = im (not) + mutable (changeable). It cannot mutate or change."
        }
    },
    {
        "id": "vocab2_impervious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does IMPERVIOUS mean?",
        "context": "She seemed impervious to criticism, carrying on with her plans regardless of what anyone said about them.",
        "correct": "Not allowing something to pass through; unaffected by",
        "wrong": [
            "Extremely sensitive and easily hurt",
            "Lacking any sense of direction",
            "Imperious and commanding in manner"
        ],
        "explanation": {
            "right": "Impervious comes from Latin 'im' (not) + 'pervius' (passable). Nothing can get through - physically or emotionally.",
            "traps": [
                "Extremely sensitive is the opposite of impervious.",
                "Lacking direction confuses it with being 'lost'; impervious means unaffected.",
                "Imperious (domineering) sounds similar but means something different entirely."
            ],
            "hook": "Impervious = im (not) + pervious (able to pass through). Nothing penetrates."
        }
    },
    {
        "id": "vocab2_incorrigible",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INCORRIGIBLE mean?",
        "context": "The incorrigible prankster continued pulling stunts despite detentions, suspensions, and repeated talks with the principal.",
        "correct": "Not able to be corrected, improved, or reformed",
        "wrong": [
            "Extremely easy to teach and reform",
            "Physically indestructible",
            "Factually incorrect but well-intentioned"
        ],
        "explanation": {
            "right": "Incorrigible comes from Latin 'in' (not) + 'corrigere' (to correct). An incorrigible person is beyond correction or reform.",
            "traps": [
                "Easy to reform is the opposite of incorrigible.",
                "Physically indestructible confuses moral reform with physical durability.",
                "Factually incorrect focuses on facts; incorrigible means unable to be reformed in behavior."
            ],
            "hook": "Incorrigible = in (not) + corrigible (correctable). Cannot be corrected no matter what you try."
        }
    },
    {
        "id": "vocab2_inexorable",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INEXORABLE mean?",
        "context": "The inexorable march of climate change continued despite international pledges to reduce emissions.",
        "correct": "Impossible to stop or prevent; relentless",
        "wrong": [
            "Easily reversed or undone",
            "Completely unexplainable or mysterious",
            "Flexible and open to negotiation"
        ],
        "explanation": {
            "right": "Inexorable comes from Latin 'in' (not) + 'exorabilis' (able to be moved by entreaty). Something inexorable cannot be persuaded or stopped.",
            "traps": [
                "Easily reversed is the opposite of unstoppable.",
                "Unexplainable confuses 'in-' with inexplicable; inexorable means relentless.",
                "Flexible contradicts inexorable's unyielding nature."
            ],
            "hook": "Inexorable = in (not) + exorable (able to be swayed). No prayer or plea can stop it."
        }
    },
    {
        "id": "vocab2_insidious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does INSIDIOUS mean?",
        "context": "The insidious nature of the disease meant that by the time symptoms appeared, significant damage had already been done.",
        "correct": "Proceeding in a gradual, subtle way but with harmful effects",
        "wrong": [
            "Immediately obvious and openly hostile",
            "Located on the interior or inside",
            "Inspiring confidence and trust"
        ],
        "explanation": {
            "right": "Insidious comes from Latin 'insidiosus' meaning cunning or deceitful, from 'insidiae' (ambush). It describes harm that creeps in unnoticed.",
            "traps": [
                "Immediately obvious contradicts insidious's gradual, hidden nature.",
                "Located inside confuses 'inside' with the meaning; insidious means subtly harmful.",
                "Inspiring trust is what insidious threats do to conceal themselves, not what insidious means."
            ],
            "hook": "Insidious = inside + hideous. Something hideous hiding inside, working its harm secretly."
        }
    },
    {
        "id": "vocab2_lethargic",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does LETHARGIC mean?",
        "context": "After the heavy Thanksgiving meal, everyone felt lethargic, barely able to move from the couch to the kitchen.",
        "correct": "Lacking energy; sluggish and drowsy",
        "wrong": [
            "Extremely energetic and hyperactive",
            "Dangerously toxic or poisonous",
            "Forgetful and absent-minded"
        ],
        "explanation": {
            "right": "Lethargic comes from Greek 'lethargia' meaning drowsiness, related to 'lethe' (forgetfulness/oblivion). It describes a state of sluggish inactivity.",
            "traps": [
                "Energetic and hyperactive is the opposite of lethargic.",
                "Toxic confuses it with 'lethal'; lethargic means sluggish, not deadly.",
                "Forgetful relates to the Greek root 'lethe' but lethargic specifically means lacking energy."
            ],
            "hook": "Lethargic comes from Lethe, the river of forgetfulness in Greek myth - you're so drowsy you forget to move."
        }
    },
    {
        "id": "vocab2_machination",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MACHINATION mean?",
        "context": "The board discovered the CEO's machinations to secretly transfer company assets to his personal accounts.",
        "correct": "A scheming plot or intrigue, especially one with evil intent",
        "wrong": [
            "The operation of heavy machinery",
            "A brilliant and innovative invention",
            "A routine mechanical process"
        ],
        "explanation": {
            "right": "Machination comes from Latin 'machinari' meaning to contrive or plot. It refers to crafty, underhanded schemes.",
            "traps": [
                "Operating machinery confuses the similar root; machination means plotting.",
                "An invention confuses 'machine' with scheming; machination is negative.",
                "A routine process implies the ordinary; machinations are devious plots."
            ],
            "hook": "Machination = machine + nation of evil. Someone's mind is a plotting machine, scheming like a villain."
        }
    },
    {
        "id": "vocab2_mitigate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MITIGATE mean?",
        "context": "Wearing a seatbelt won't prevent all injuries, but it can significantly mitigate the severity of harm in a crash.",
        "correct": "To make something less severe, serious, or painful",
        "wrong": [
            "To completely eliminate a problem",
            "To make something significantly worse",
            "To imitate or copy precisely"
        ],
        "explanation": {
            "right": "Mitigate comes from Latin 'mitigare' meaning to soften or make mild. To mitigate is to reduce the severity of something bad.",
            "traps": [
                "Completely eliminating goes beyond mitigating; mitigate means reducing, not removing.",
                "Making worse is the opposite of mitigating.",
                "Imitating confuses similar sounds; mitigate means to lessen."
            ],
            "hook": "Mitigate = make it less great (less greatly bad). Reduce the damage."
        }
    },
    {
        "id": "vocab2_mollify",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does MOLLIFY mean?",
        "context": "The company tried to mollify angry customers by offering full refunds and free future services.",
        "correct": "To appease or soothe someone's anger or anxiety",
        "wrong": [
            "To deliberately provoke or irritate",
            "To make something soft and moldable",
            "To multiply or increase greatly"
        ],
        "explanation": {
            "right": "Mollify comes from Latin 'mollificare' meaning to make soft. To mollify someone is to soften their anger.",
            "traps": [
                "Provoking is the opposite of mollifying.",
                "Making physically soft is the literal Latin meaning, but mollify means to soothe emotions.",
                "Multiplying confuses similar sounds; mollify means to calm."
            ],
            "hook": "Mollify = make emotions mollis (soft). Softening someone's hard anger."
        }
    },
    {
        "id": "vocab2_obsequious",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does OBSEQUIOUS mean?",
        "context": "The obsequious assistant anticipated her boss's every wish, bowing and scraping with excessive deference.",
        "correct": "Excessively compliant or servile; fawning",
        "wrong": [
            "Stubbornly defiant and rebellious",
            "Following events in chronological sequence",
            "Quietly observant but uninvolved"
        ],
        "explanation": {
            "right": "Obsequious comes from Latin 'obsequium' meaning compliance. An obsequious person is excessively eager to serve and please.",
            "traps": [
                "Defiant and rebellious is the opposite of servile.",
                "Chronological sequence confuses it with 'sequential.'",
                "Quietly observant is passive; obsequious is actively fawning."
            ],
            "hook": "Obsequious = 'ob-SEEK-wious' - obsessively seeking approval from those in power."
        }
    },
    {
        "id": "vocab2_ostensible",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does OSTENSIBLE mean?",
        "context": "The ostensible reason for the meeting was to discuss budgets, but the real purpose was to announce layoffs.",
        "correct": "Stated or appearing to be true, but not necessarily so",
        "wrong": [
            "Completely genuine and verified",
            "Impossible to show or demonstrate",
            "Extremely ostentatious and showy"
        ],
        "explanation": {
            "right": "Ostensible comes from Latin 'ostendere' meaning to show. Something ostensible is shown outwardly but may hide the real truth.",
            "traps": [
                "Completely genuine is what ostensible things only appear to be.",
                "Impossible to show contradicts the root meaning of 'shown outwardly.'",
                "Ostentatious confuses similar sounds; ostensible means apparent, not showy."
            ],
            "hook": "Ostensible = what's shown on the outside (ostend = show). The apparent reason, not necessarily the real one."
        }
    },
    {
        "id": "vocab2_paradigm",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PARADIGM mean?",
        "context": "The discovery of DNA created a new paradigm in biology, fundamentally changing how scientists understood heredity.",
        "correct": "A typical example or model; a framework of thinking",
        "wrong": [
            "A pair of contradictory ideas",
            "A paradise-like ideal state",
            "A mathematical proof or equation"
        ],
        "explanation": {
            "right": "Paradigm comes from Greek 'paradeigma' meaning pattern or example. A paradigm is the dominant model or framework in a field.",
            "traps": [
                "A pair of contradictions confuses it with 'paradox.'",
                "A paradise-like state confuses the sound with 'paradise.'",
                "A mathematical proof is too specific; a paradigm is a broader conceptual framework."
            ],
            "hook": "Paradigm = para (beside) + deigma (show/example). The example that all others are shown beside."
        }
    },
    {
        "id": "vocab2_paradox",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PARADOX mean?",
        "context": "It's a paradox that the more connected we become through technology, the more isolated many people feel.",
        "correct": "A seemingly contradictory statement that may nonetheless be true",
        "wrong": [
            "A pair of identical examples",
            "A heavenly or ideal situation",
            "A standard model or template"
        ],
        "explanation": {
            "right": "Paradox comes from Greek 'para' (contrary to) + 'doxa' (opinion). A paradox contradicts expectations yet contains truth.",
            "traps": [
                "A pair of identical things confuses 'para' (beside) with 'pair.'",
                "A heavenly situation confuses the sound with 'paradise.'",
                "A standard model confuses it with 'paradigm.'"
            ],
            "hook": "Paradox = para (against) + dox (belief). It goes against what you'd believe, yet it's true."
        }
    },
    {
        "id": "vocab2_portentous",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PORTENTOUS mean?",
        "context": "The portentous dark clouds gathering on the horizon made the sailors rush to secure their ship.",
        "correct": "Serving as a sign of something momentous or calamitous to come",
        "wrong": [
            "Extremely overweight or heavy",
            "Pretending to be important but actually trivial",
            "Related to carrying or transporting goods"
        ],
        "explanation": {
            "right": "Portentous comes from Latin 'portentum' meaning an omen. Something portentous signals that something significant (often bad) is approaching.",
            "traps": [
                "Overweight confuses it with 'corpulent' or 'ponderous.'",
                "Pretending to be important confuses a secondary meaning with the primary ominous sense.",
                "Transporting confuses 'port' with carrying; portentous means ominous."
            ],
            "hook": "Portentous = portent (omen) + ous. Full of omens about what's coming."
        }
    },
    {
        "id": "vocab2_prescient",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does PRESCIENT mean?",
        "context": "Her prescient warning about the housing bubble in 2005 proved tragically accurate when the market crashed in 2008.",
        "correct": "Having knowledge of events before they take place; showing foresight",
        "wrong": [
            "Existing in the present moment only",
            "Scientifically precise and measured",
            "Presiding over or controlling events"
        ],
        "explanation": {
            "right": "Prescient comes from Latin 'praescire' meaning to know beforehand. A prescient person seems to foresee the future.",
            "traps": [
                "Present moment contradicts the 'before' (pre) in prescient.",
                "Scientifically precise confuses 'scient' with science rather than foreknowledge.",
                "Presiding over events confuses 'pre-' with 'preside'; prescient means foreseeing."
            ],
            "hook": "Prescient = pre (before) + scient (knowing). Knowing something before it happens."
        }
    },
    {
        "id": "vocab2_recondite",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does RECONDITE mean?",
        "context": "The philosopher's recondite theories were accessible only to specialists who had spent decades studying the field.",
        "correct": "Obscure and little known; dealing with abstruse subject matter",
        "wrong": [
            "Well-known and easily understood by all",
            "In poor physical condition or disrepair",
            "Reconsidered and revised from an earlier version"
        ],
        "explanation": {
            "right": "Recondite comes from Latin 'reconditus' meaning hidden or put away. Recondite knowledge is so specialized it's hidden from most people.",
            "traps": [
                "Well-known and easy is the opposite of recondite's obscurity.",
                "Poor condition confuses it with 'decrepit' or 'reconditioned.'",
                "Revised confuses 're-' prefix with revision; recondite means deeply obscure."
            ],
            "hook": "Recondite = hidden away (re + condere = to hide). Knowledge so deep it's practically hidden."
        }
    },
    {
        "id": "vocab2_reverberate",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does REVERBERATE mean?",
        "context": "The thunder reverberated through the valley, bouncing off the cliff walls for several seconds after the initial boom.",
        "correct": "To echo repeatedly; to have continuing and spreading effects",
        "wrong": [
            "To speak in a reverential tone",
            "To return to a previous state",
            "To vibrate at an extremely high frequency"
        ],
        "explanation": {
            "right": "Reverberate comes from Latin 'reverberare' meaning to strike back. Sound reverberates when it bounces back again and again.",
            "traps": [
                "Reverential tone confuses similar sounds; reverberate means to echo.",
                "Returning to a previous state confuses 're-' with reverting.",
                "High-frequency vibration is too specific; reverberate means to echo and spread."
            ],
            "hook": "Reverberate = re (again) + verb (strike). Sound strikes and strikes again - echoing repeatedly."
        }
    },
    {
        "id": "vocab2_sanguine",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does SANGUINE mean?",
        "context": "Despite the team's losing streak, the coach remained sanguine about their chances in the playoffs.",
        "correct": "Optimistic or positive, especially in a difficult situation",
        "wrong": [
            "Covered in blood or bloody",
            "Deeply pessimistic and gloomy",
            "Calm and emotionless"
        ],
        "explanation": {
            "right": "Sanguine comes from Latin 'sanguineus' meaning blood-red. In medieval humors, excess blood made one cheerfully optimistic.",
            "traps": [
                "Bloody is the literal Latin meaning, but in English sanguine means optimistic.",
                "Pessimistic is the opposite of sanguine optimism.",
                "Calm and emotionless describes phlegmatic; sanguine means actively cheerful and hopeful."
            ],
            "hook": "Sanguine = blood (sanguinis) = rosy-cheeked optimism. A sanguine person sees life through rose-colored (blood-colored) glasses."
        }
    },
    {
        "id": "vocab2_stymie",
        "category": "vocabulary",
        "subcategory": "tier-2",
        "question": "What does STYMIE mean?",
        "context": "Budget cuts stymied the research team's progress, forcing them to abandon several promising experiments.",
        "correct": "To prevent or hinder the progress of; to block",
        "wrong": [
            "To encourage and accelerate progress",
            "To investigate thoroughly and systematically",
            "A specific style or characteristic approach"
        ],
        "explanation": {
            "right": "Stymie comes from golf, where a 'stymie' was an opponent's ball blocking your path to the hole. It means to obstruct or thwart.",
            "traps": [
                "Encouraging progress is the opposite of stymieing.",
                "Investigating confuses it with a different process; stymie means to block.",
                "A style confuses similar sounds; stymie means to obstruct."
            ],
            "hook": "Stymie = sty (pigpen) + me. Imagine being stuck in a sty with no way forward - blocked!"
        }
    }
];
