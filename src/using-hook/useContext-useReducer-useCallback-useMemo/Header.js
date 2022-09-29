import images from "../../assets/images";
import SignMeUp from "./SignMeUp";
import { GlobalContext } from "./GlobalState";
import { useContext } from "react";

function Header() {
  const {favoriteClickCount} = useContext(GlobalContext);
  const signupCallback = (email) => {
    return console.log(`sign up called width ${email}`);
  }
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 text-center">
          <h6 className="text-uppercase">March, 08, 2000</h6>
          <h6 className="text-uppercase">Nha Trang, Khanh Hoa</h6>
          <h5>Click Count: {favoriteClickCount}</h5>
          <div>
            <img className="w-25" src={images.photo1} alt="cat" />
          </div>
        </div>
        <div className="col-12 col-md-7 text-md-right">
          <h2>Ha Thanh</h2>
          <div className="row col-12 text-md-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;