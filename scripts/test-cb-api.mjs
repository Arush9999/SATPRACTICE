const API_LIST =
  'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-questions';
const API_DETAIL =
  'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-question';

async function listQuestions(test, domain) {
  const res = await fetch(API_LIST, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ asmtEventId: 99, test, domain }),
  });
  const data = await res.json();
  console.log(`test=${test} domain=${domain} status=${res.status} count=${Array.isArray(data) ? data.length : 'err'}`);
  if (!Array.isArray(data)) {
    console.log(data);
    return [];
  }
  if (data[0]) {
    console.log('metadata sample:', JSON.stringify(data[0], null, 2).slice(0, 800));
  }
  return data;
}

async function getQuestion(externalId) {
  const res = await fetch(API_DETAIL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ external_id: externalId }),
  });
  const data = await res.json();
  console.log(`detail status=${res.status}`);
  console.log(JSON.stringify(data, null, 2).slice(0, 2000));
  return data;
}

const rw = await listQuestions(1, 'INI');
const math = await listQuestions(2, 'H');
if (math[0]?.external_id) {
  await getQuestion(math[0].external_id);
} else if (rw[0]?.external_id) {
  await getQuestion(rw[0].external_id);
}
