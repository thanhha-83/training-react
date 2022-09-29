import React, { useContext } from "react";
import ImageChangeColorOnScroll from "../useState-useRef-useEffect/ImageChangeColorOnScroll";
import { FavoriteClickCountContext } from "../useContext-useReducer-useCallback-useMemo/FavoriteClickCountContext"

const CatDetail = React.memo(({ catRec, onHeartFavoriteHandler }) => {
  const {incrementFavoriteClickCount} = useContext(FavoriteClickCountContext);
  return (
    <div className="card col-6 cardmin position-relative my-3">
      <button
            className={catRec.favorite ? "favor-btn heartredbutton" : "favor-btn heartblackbutton" }
            onClick={(e) => {
              onHeartFavoriteHandler(e, catRec);
              incrementFavoriteClickCount();
            }}
          >Love</button>
      <ImageChangeColorOnScroll normal={catRec.cat} hover={catRec.catblack}/>
      <div className="card-body">
        <h4 className="card-title">
          <span>{catRec.nameAtHome}</span>
        </h4>
        <span>{catRec.bio}</span>
      </div>
    </div>
  );
})

export default CatDetail;