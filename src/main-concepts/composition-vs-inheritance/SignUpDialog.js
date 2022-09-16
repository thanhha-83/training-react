import React, { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {
  const [user, setUser] = useState('');
  const handleChange = (e) => setUser(e.target.value);
  const handleSignUp = () => alert(`Welcome aboard, ${user}!`);
  return (
    <Dialog title="Mars Exploration Program"
            message="How should we refer to you?">
      <input value={user}
             onChange={handleChange} />
      <button onClick={handleSignUp}>
        Sign Me Up!
      </button>
    </Dialog>
  );
}

export default SignUpDialog;

