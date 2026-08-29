import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import FullTest from './pages/FullTest';
import Home from './pages/Home';
import Login from './pages/Login';
import SectionPractice from './pages/SectionPractice';
import Signup from './pages/Signup';
import TargetedPractice from './pages/TargetedPractice';
import VocabFlashcards from './pages/VocabFlashcards';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={(
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/practice/full"
          element={(
            <ProtectedRoute>
              <FullTest />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/practice/english"
          element={(
            <ProtectedRoute>
              <SectionPractice section="english" />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/practice/math"
          element={(
            <ProtectedRoute>
              <SectionPractice section="math" />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/practice/targeted"
          element={(
            <ProtectedRoute>
              <TargetedPractice />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/vocab"
          element={(
            <ProtectedRoute>
              <VocabFlashcards />
            </ProtectedRoute>
          )}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
