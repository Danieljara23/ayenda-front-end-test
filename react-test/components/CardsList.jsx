import Card from "./Card";

const CardsList = ({ comics }) => {
  return (
    <section className="cards-list">
      {comics.map(comic => 
        <Card key={comic.id} {...comic} />
      )}
    </section>
  )
}

export default CardsList;
