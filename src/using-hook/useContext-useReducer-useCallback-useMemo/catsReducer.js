function catsReducer(state, action) {
  function updateFavorite(favorite) {
    return state.catList.map((item, _index) => {
      if (item.id === action.id) {
        item.favorite = favorite;
      }
      return item;
    })
  }
  switch (action.type) {
    case 'setCatList': {
      return {...state, catList: action.data, isLoading: false};
    }
    case 'favorite': {
      return {...state, catList: updateFavorite(true)};
    }
    case 'unfavorite': {
      return {...state, catList: updateFavorite(false)};
    }
    case 'incrementFavoriteClickCount': {
      return {...state, favoriteClickCount: state.favoriteClickCount + 1}
    }
    default:
      return state;
    }
}

export default catsReducer;
