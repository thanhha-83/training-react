import { useState } from "react";

function InputElement() {
  const [inputText, setInputText] = useState('');
  const [historyListKey, setHistoryListKey] = useState([]);
  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryListKey([...historyListKey, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <p>{inputText}</p>
      <ul>
        {historyListKey.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default InputElement;