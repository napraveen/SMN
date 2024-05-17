import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Enter a username" />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default LoginPage;
