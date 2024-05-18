import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [user, setUSer] = useState(null);
  let [authTokens, setAuthTokens] = useState(null);

  let loginUser = async (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    let response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    if (response.ok) {
      let data = await response.json();
      console.log('data: ', data);
    } else {
      console.log('Login request failed with status:', response.status);
    }
  };

  let contextData = {
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={{ loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
