import utils from './match-science'

function StarsDisplay(props) {
  return (
    <>
      {utils.range(1, props.count).map(starId => (
        <div key={starId} className="star" />
      ))}
    </>
  );
}

export default StarsDisplay;