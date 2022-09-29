import images from "../../assets/images";
import "./ImageChangeColor.css"
import ImageChangeColorOnMouse from "./ImageChangeColorOnMouse";

function ImageToggleOnMouse() {
  return (
    <div>
      <ImageChangeColorOnMouse normal={images.photo1} hover={images.photo1black} />
      <ImageChangeColorOnMouse normal={images.photo2} hover={images.photo2black} />
    </div>
  );
}

export default ImageToggleOnMouse;