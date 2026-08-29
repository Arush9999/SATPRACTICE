import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import TimedTestSession from '../components/TimedTestSession';

export default function SectionPractice({ section }) {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const title = section === 'math' ? 'Math Practice' : 'English Practice';

  useEffect(() => {
    api.getSectionTest(section)
      .then(setTest)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [section]);

  return (
    <TimedTestSession
      title={title}
      sessionType={section}
      test={test}
      loading={loading}
      error={error}
    />
  );
}
