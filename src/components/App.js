import React, { useState } from "react";
import "./../styles/App.css";
import LoginForm from "../LoginForm";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Lift State Up Demo</h1>

      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <LoginForm
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
};

export default App;