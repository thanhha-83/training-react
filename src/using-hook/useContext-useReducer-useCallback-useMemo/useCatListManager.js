import { useEffect, useReducer } from "react";
import images from "../../assets/images";
import catsReducer from "./catsReducer";

function useCatListManager() {
  const [{ isLoading, catList, favoriteClickCount }, dispatch] = useReducer(catsReducer, {
    isLoading: true,
    catList: [],
    favoriteClickCount: 0,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount'})
  }

  function toggleCatFavorite(catRec) {
    catRec.favorite === true ?
      dispatch({ type: 'unfavorite', id: catRec.id}) :
      dispatch({ type: 'favorite', id: catRec.id})
  }
  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(() => {
        resolve()
      }, 1000)
    }).then(() => {
      dispatch({
        type: 'setCatList',
        data: images.imagesCats
      })
    })
    return () => {
      console.log('clean up');
    }
  }, [])

  return { isLoading, catList, favoriteClickCount, incrementFavoriteClickCount, toggleCatFavorite }
}
export default useCatListManager