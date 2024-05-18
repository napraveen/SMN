import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  const isAuthenticated = false;

  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        Here is our React Website
      </AuthProvider>
    </div>
  );
}

export default App;
