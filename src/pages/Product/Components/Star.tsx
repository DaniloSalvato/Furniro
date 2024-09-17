import starIcon from "../../../assets/icons/star.svg"
import halfStarIcon from "../../../assets/icons/half-star.svg"

type Star = {
  stars: number;
};

const Star = ({ stars }: Star) => {
  const countStar = [...Array(Math.ceil(stars)).keys()];
  const starArray = [];

  for (let i = 1; i <= countStar.length; i++) {
    if (i <= stars) {
      starArray.push(
        starIcon
      );
    } else if (stars % 2 != 0) {
      starArray.push(
        halfStarIcon
      );
    } else {
      ("");
    }
  }

  return (
    <div className="flex w-28 pr-9 gap-1 border-r border-customBlack-800">
      {starArray.map((star, index) => (
        <img key={index} src={star} />
      ))}
    </div>
  );
};

export default Star;
