import { useState } from "react"

const Tour = ({id, image, info, name, price ,removeTour}) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <span className="tour-price">{price}</span>
        <div className="tour-info">
            <h4>{name}</h4>
            <p>{readMore ? info : `${info.substring(0,200)} ...`}</p>
            <button className="info-btn" type="button" onClick={()=> setReadMore(!readMore)}>
              {readMore ? 'Read Less' : 'Read More'}
            </button>
        </div>
        <button className="btn btn-block delete-btn" type="button" onClick={() => removeTour(id)}>Not interested</button>
    </article>
  )
}
export default Tour