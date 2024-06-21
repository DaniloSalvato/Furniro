type Star = {
  stars: number;
};

const Star = ({ stars }: Star) => {
  const countStar = [...Array(Math.ceil(stars)).keys()];
  const starArray = [];

  for (let i = 1; i <= countStar.length; i++) {
    if (i <= stars) {
      starArray.push(
        "https://furniro-ds.s3.us-east-2.amazonaws.com/icons/star.svg"
      );
    } else if (stars % 2 != 0) {
      starArray.push(
        "https://furniro-ds.s3.us-east-2.amazonaws.com/icons/half-star.svg"
      );
    } else {
      ("");
    }
  }

  return (
    <div className="flex w-28 pr-9 border-r border-customBlack-800">
      {starArray.map((star, index) => (
        <img key={index} src={star} />
      ))}
    </div>
  );
};

export default Star;
