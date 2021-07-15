import React from "react";
import "./auth.styles.scss";
import SignIn from "../signIn/signIn.component";

const AuthPage = () => {
  return (
    <div className="auth">
      <SignIn />
    </div>
  );
};

export default AuthPage;
