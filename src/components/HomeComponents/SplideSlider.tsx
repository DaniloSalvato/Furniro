import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";

import Room from "./Room";

const rooms = [
  {
    id: 1,
    title: "Inner Peace",
    description: "Bed Room",
    image:
      "https://furniro-ds.s3.us-east-2.amazonaws.com/carousel/carousel-1.png",
  },
  {
    id: 2,
    title: "Food place",
    description: "Kitchen",
    image:
      "https://furniro-ds.s3.us-east-2.amazonaws.com/carousel/carousel-2.png",
  },
  {
    id: 3,
    title: "Rest place",
    description: "Living room",
    image:
      "https://furniro-ds.s3.us-east-2.amazonaws.com/carousel/carousel-3.png",
  },
];

const SplideSlider = () => {
  return (
    <div>
      <Splide
        options={{
          type: "slide",
          height: "auto",
          width: "auto",
          arrows: true,
          pagination: true,
          autoplay: false,
          rewind: false,
          autoWidth: true,
          autoHeight: true,
          gap: "2rem",
        }}
        aria-label="My favorite Images"
      >
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
      </Splide>
    </div>
  );
};

export default SplideSlider;
