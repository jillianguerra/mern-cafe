import { useState } from 'react'

export default function Star({ formData, handleChange }) {
    // const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, idx) => {
          idx += 1;
          return (
            <button
              key={`star-idx-${idx}`}
              name="rating"
              className={idx <= (hover || formData.rating) ? "on" : "off"}
              onClick={(e) => handleChange(e, idx)}
              onMouseEnter={() => setHover(idx)}
              onMouseLeave={() => setHover(formData.rating)}
            >
              &#9733;
            </button>
          );
        })}
      </div>
    );
  };