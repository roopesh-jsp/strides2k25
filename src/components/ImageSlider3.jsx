import { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
export default function ImageSlider3({ imgArray }) {
  const [imgIndex, setImgIndex] = useState(0);
  function prevImg() {
    setImgIndex((prev) => {
      if (prev === 0) return imgArray.length - 1;
      return prev - 1;
    });
  }
  function nxtImg() {
    setImgIndex((prev) => {
      if (prev === imgArray.length - 1) return 0;
      return prev + 1;
    });
  }
  function goToImg(idx) {
    setImgIndex(idx);
  }
  return (
    <>
      <div className="carosuel">
        <button onClick={prevImg} className="previmg">
          <FaLessThan />
        </button>
        {imgArray.map((img) => (
          <img
            key={img.id}
            src={img.img}
            style={{
              translate: `${-100 * imgIndex}%`,
            }}
          />
        ))}
        <button onClick={nxtImg} style={{ right: 0 }}>
          <FaGreaterThan />
        </button>
        <div className="dots">
          {imgArray.map((_, idx) => (
            <div
              className={imgIndex === idx ? "filldot" : "dot"}
              onClick={() => goToImg(idx)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
