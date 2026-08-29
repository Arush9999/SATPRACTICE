import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import TimedTestSession from '../components/TimedTestSession';

export default function FullTest() {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.getFullTest()
      .then(setTest)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <TimedTestSession
      title="Full Length SAT"
      sessionType="full"
      test={test}
      loading={loading}
      error={error}
    />
  );
}
