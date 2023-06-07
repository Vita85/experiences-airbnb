function Card({id, img, rating, review, country, promo, title, price}) {
  return (
    <div className="card">
    <img src={`./img/${img}.jpg`} alt="" />

    <div className="card-info">
      <div className="card-rating">
        <img src="./img/star.svg" alt="" />
        <p>{rating}</p>
        <span>({review})</span>
        <div className="round"></div>
        <span>{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <b>From ${price}</b> / person
      </p>
    </div>
    {promo && <div className="promo">{promo}</div>}
  </div>
  )
}

export default Card;