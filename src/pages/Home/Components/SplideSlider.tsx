import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "react-splide-ts/css";
import "./slide.css";

import Bedroom from "../../../assets/carrousel/carrousel-1.png";
import Kitchen from "../../../assets/carrousel/carrousel-2.png";
import Living from "../../../assets/carrousel/carrousel-3.png";

import RightArrow from "../../../assets/icons/arrow-right.svg"

import Room from "./Room";

const rooms = [
  {
    id: 1,
    title: "Inner Peace",
    description: "Bed Room",
    image: Bedroom,
  },
  {
    id: 2,
    title: "Food place",
    description: "Kitchen",
    image: Kitchen,
  },
  {
    id: 3,
    title: "Rest place",
    description: "Living room",
    image: Living,
  },
  {
    id: 4,
    title: "Food place",
    description: "Kitchen",
    image: Kitchen,
  },
];

const SplideSlider = () => {
  return (
    <div>
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          arrows: true,
          pagination: true,
          perMove: 1,
          perPage: 3,
          focus: 0,
          fixedWidth: 486,
          autoplay: false,
          rewind: false,
          gap: "2rem",
          breakpoints: {
            1024: {
              pagination: false,
            },
          },
        }}
        aria-label="My favorite Images"
      >
        <SplideTrack>
          {rooms.map((room) => (
            <SplideSlide key={room.id}>
              <Room
                id={room.id}
                title={room.title}
                description={room.description}
                image={room.image}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev"></button>
          <button className="splide__arrow splide__arrow--next">
            <img
              src={RightArrow}
              alt="arrow"
            />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default SplideSlider;
