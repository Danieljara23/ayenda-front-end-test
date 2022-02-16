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
      <footer className="card__footer">
        <h3 className="card__title">{name}</h3>
        <p className="card__text">{createCreatorsText(creators)}</p>
        <p className="card__tag">{price} USD</p>
      </footer>
    </article>
  )
}

export default Card;
