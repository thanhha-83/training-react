import { useEffect, useState } from "react";
import images from "../../assets/images";
import "./ImageChangeColor.css"
import ImageChangeColorOnScroll from "./ImageChangeColorOnScroll";

function ImageToggleOnScroll() {
  const [currentImageID, setCurrentImageID] = useState(0);

  useEffect(() => {
    window.document.title = 'Image Cat ' + currentImageID;
    console.log('useEffect running');
  }, [currentImageID])

  return (
    <div>
      {images.imagesCats.map((image, index) => (
        <div key={index} onMouseOver={() => {
          console.log('image current id: ' + index);
          setCurrentImageID(index);
        }}>
          <ImageChangeColorOnScroll  normal={image.cat} hover={image.catblack}/>
        </div>
      ))}
    </div>
  );
}

export default ImageToggleOnScroll;