import {useReducer, useState, useEffect} from 'react';

function useEmailValidation(seconds) {
  const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }
  const [emailValid, setEmailValid] = useState(false);
  const emailReducer = (state, action) => {
    const isValid = validateEmail(action);
    setEmailValid(isValid);
    return action;
  }
  const [email, setEmail] = useReducer(emailReducer, "");
  const maxCount = seconds;
  const [count, setCount] = useState(maxCount);
  useEffect(() => {
    setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000)
  }, [count])
  const retObject = { setEmail, count, email, emailValid, setCount }
  return retObject
}
export default useEmailValidation