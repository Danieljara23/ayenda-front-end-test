import Card from "./Card";
import Spinner from "./Spinner";

const CardsList = ({ comics, loading }) => {
  if (loading) {
    return <Spinner color="black" />
  }
  
  return (
    <section className="cards-list">
      {comics.map(comic => 
        <Card key={comic.id} {...comic} />
      )}
    </section>
  )
}

export default CardsList;
