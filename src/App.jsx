// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './context/UserContext';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import EditProfile from './pages/EditProfile';
import CallsPage from './pages/CallsPage';
import MessagePage from './pages/MessagesPage';
import EmergencyPage from './pages/EmergencyPage';
import ForumPage from './pages/ForumPage';
import BecomeTherapistForm from './pages/BecomeTherapistForm';
import BecomeVolunteerPage from './pages/BecomeVolunteerPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/become-therapist" element={<BecomeTherapistForm />} />
            <Route path="/become-volunteer" element={<BecomeVolunteerPage />} />
            <Route path="/calls" element={<CallsPage />} />
            <Route path="/messages" element={<MessagePage />} />
            <Route path="/emergencies" element={<EmergencyPage />} />
            <Route path="/forum" element={<ForumPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
