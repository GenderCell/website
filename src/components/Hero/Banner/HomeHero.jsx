import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import womensDay1 from "../../../assets/images_events/womens_day1.jpg";
import womensDay2 from "../../../assets/images_events/womens_day2.jpg";
import womensDay3 from "../../../assets/images_events/womens_day3.jpg";
import runwalk1 from "../../../assets/images_events/run_walk1.jpg";
import runwalk2 from "../../../assets/images_events/run_walk2.jpg";
import runwalk3 from "../../../assets/images_events/run_walk3.jpg";
import movie_screening1 from "../../../assets/images_events/movie1.jpg";
import movie_screening2 from "../../../assets/images_events/movie2.jpg";
import movie_screening3 from "../../../assets/images_events/movie3.jpg";
import homepage1 from "../../../assets/images/movie4.jpg";
import homepage2 from "../../../assets/images/movie5.jpg";
import homepage3 from "../../../assets/images/talk4.jpg";
import homepage4 from "../../../assets/images/talk5.jpg";
import homepage5 from "../../../assets/images/talk6.jpg";
import homepage6 from "../../../assets/images/survey_img/2.png";
import homepage7 from "../../../assets/images/survey_img/3.png";
import './HomeHero.css'

const HomeHero = () => {
  return (
    <div className="app" style={{ width: "100%",backgroundColor:"#ffcdb2" }}>
      <section
        className="w-full py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto slide-in"
        style={{ margin: "13px auto", width: "90%" }}
      >
        <div style={{ margin: "auto 16px" }}>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          "I can be changed by what happens to me, but I refuse to be reduced by it." — Maya Angelou
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold" style={{ fontSize: "34px" }}>
            Advancing Gender Equality Together
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          At IIT Kanpur's Gender Cell, we are dedicated to promoting gender equality and preventing sexual harassment and abuse, creating a campus where everyone feels safe, respected, and valued. Join us in our efforts to educate, support, and advocate for a gender-sensitized community. It takes just one step to be the change !
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Reach out to us
          </button>
        </div>
        <ShuffleGrid />
      </section>
    </div>
  );
};

// Function to shuffle array
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

// Data for images
const squareData = [
  {
    id: 1,
    src: womensDay1,
  },
  {
    id: 2,
    src: womensDay2,
  },
  {
    id: 3,
    src: womensDay3,
  },
  {
    id: 4,
    src: movie_screening1,
  },
  {
    id: 5,
    src: movie_screening2,
  },
  {
    id: 6,
    src: movie_screening3,
  },
  {
    id: 7,
    src: runwalk1,
  },
  {
    id: 8,
    src: runwalk2,
  },
  {
    id: 9,
    src: runwalk3,
  },
  {
    id: 10,
    src: homepage1,
  },
  {
    id: 11,
    src: homepage2,
  },
  {
    id: 12,
    src: homepage3,
  },
  {
    id: 13,
    src: homepage4,
  },
  {
    id: 14,
    src: homepage5,
  },
  {
    id: 15,
    src: homepage6,
  },
  {
    id: 16,
    src: homepage7,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">{squares.map((sq) => sq)}</div>;
};

export default HomeHero;
