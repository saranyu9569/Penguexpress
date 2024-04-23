import { useEffect, useState } from "react";
import "./Carousel.css";
import image1 from "./assets/1.PNG";
import image2 from "./assets/2.PNG";
import image3 from "./assets/3.PNG";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  const images = [
    { image: image1, title: "Image 1" },
    { image: image2, title: "Image 2" },
    { image: image3, title: "Image 3" },
  ];

  useEffect(() => {
    const handleAutoplay = () => {
      if (autoPlay) {
        timeOut = setTimeout(() => {
          slideRight();
        }, 3000);
      }
    };

    handleAutoplay();

    return () => clearTimeout(timeOut);
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === images.length - 1 ? 0 : prevCurrent + 1
    );
  };

  const slideLeft = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? images.length - 1 : prevCurrent - 1
    );
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
          >
            <img className="card_image" src={image.image} alt="" />
            <div className="card_overlay">
              <h2 className="card_title">{image.title}</h2>
            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
