import { useState, useEffect } from "react";

function InputElementV2() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000)
  })
  return isLoading ? <div>Loading...</div> : <input placeholder="Enter some text" />
}

export default InputElementV2;