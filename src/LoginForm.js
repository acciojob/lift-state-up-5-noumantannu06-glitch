import React from "react";

function LoginForm({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" data-testid="username"/>

      <input type="password" placeholder="Password" data-testid="password"/>

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;