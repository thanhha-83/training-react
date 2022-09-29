import { useEffect, useRef, useState } from "react";
import images from "../../assets/images";

function ImageChangeColorOnScroll({ normal, hover, id }) {
  const elemenRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isInView = () => {
    const rect = elemenRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  const handleScroll = () => setInView(isInView());

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <img className="img-on-scroll" alt="cat"
      src={isLoading ? images.imageBase64 : inView ? normal : hover}
      ref={elemenRef}
    />
  )
}

export default ImageChangeColorOnScroll;