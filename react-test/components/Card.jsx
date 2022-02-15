import { createCreatorsText } from '../helpers/createCreatorsText';

const Card = ({
  name,
  image,
  creators,
  price
}) => {
  return (
    <article className="card">
      <header className="card__header">
        <img className="card__image" src={image} alt={name} />
      </header>
      <h3 className="card__tilte">{name}</h3>
      <p className="card__text">{createCreatorsText(creators)}</p>
      <footer className="card__footer">
        <p className="card__tag">{price} USD</p>
      </footer>
    </article>
  )
}

export default Card;
