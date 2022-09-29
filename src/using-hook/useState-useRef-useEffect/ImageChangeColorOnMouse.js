import { useRef } from "react";

function ImageChangeColorOnMouse({ normal, hover }) {
  const elemenRef = useRef(null);
  const hanldeMouseOver = () => {
    elemenRef.current.src = hover;
  }
  const hanldeMouseOut = () => {
    elemenRef.current.src = normal;
  }
  return (
    <img className="img-on-mouse" alt="cat" src={normal} onMouseOver={hanldeMouseOver} onMouseOut={hanldeMouseOut} ref={elemenRef} />
  )
}

export default ImageChangeColorOnMouse;