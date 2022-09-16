import Card from "./Card";

function CardList({profiles}) {
  return (
    <div>
      {profiles.map(profile => <Card {...profile}/>)}
    </div>
  );
}

export default CardList;