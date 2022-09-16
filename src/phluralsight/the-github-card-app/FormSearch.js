import { useState } from "react";

function FormSearch({ onSubmit }) {
  const [userName, setUserName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => {
      onSubmit(json);
      setUserName('');
    });
  };
  return (
    <form className="github-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  );
}

export default FormSearch;
