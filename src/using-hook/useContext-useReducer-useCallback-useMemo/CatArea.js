import { useContext, useEffect, useReducer, useState, useCallback , useMemo} from "react";
import Header from "./Header";
import CatDetail from './CatDetail';
import { ConfigContext } from "../../Phase2";
import useCatListManager from "./useCatListManager";
import { GlobalContext } from "./GlobalState";

function CatArea() {
  const [maleVal, setMaleVal] = useState(true);
  const [femaleVal, setFemaleVal] = useState(true);
  const context = useContext(ConfigContext);
  // const {isLoading, catList, toggleCatFavorite}= useCatListManager();

  const {isLoading, catList, toggleCatFavorite} = useContext(GlobalContext);

  const heartFavoriteHandler = useCallback((e, catRec) => {
    e.preventDefault();
    toggleCatFavorite(catRec)
  }, [])

  const handleChangeMale = () => {
    setMaleVal(!maleVal);
  }

  const handleChangeFemale = () => {
    setFemaleVal(!femaleVal);
  }
  const newCatList = useMemo(() => catList
    .filter(
      ({male, female}) => (male && maleVal) || (female && femaleVal)
    )
    .sort(function(a, b) {
      if (a.nameAtHome < b.nameAtHome) {
        return -1;
      }
      if (a.nameAtHome > b.nameAtHome) {
        return 1;
      }
      return 0;
    }), [maleVal, femaleVal, catList])

  const catListFiltered = isLoading ? [] : newCatList

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Header />
      <div className="container">
        {context.showCatSexCheckbox === false ? null: (
          <div className="btn-toolbar checkbox-bigger my-4 justify-content-center">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"
                  onChange={handleChangeMale}
                  checked={maleVal}
                />Male
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"
                  onChange={handleChangeFemale}
                  checked={femaleVal}
                />Female
              </label>
            </div>
          </div>
        )}
        <div className="card-deck row">
          {catListFiltered.map((catRec) => {
            return (
              <CatDetail key={catRec.id} catRec={catRec} onHeartFavoriteHandler={heartFavoriteHandler} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CatArea;