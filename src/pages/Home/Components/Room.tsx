import WhiteArrow from "../../../assets/icons/white-arrow.svg"

type Space = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Room = ({ id, title, description, image }: Space) => {
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-full">
        <img className="object-cover w-full h-full" src={image} alt={title} />
        <div className="absolute w-full  h-1/2 -bottom-36 left-10 box-box opacity-0">
          <div className="absolute flex flex-col w-2/5 h-2/5 bg-white bg-opacity-70 justify-center items-center">
            <p className="font-poppins font-medium text-base text-customBlack-550">{`0${id} - ${description}`}</p>
            <h2 className="font-poppins font-semibold text-2xl text-customBlack-500">
              {title}
            </h2>
          </div>
          <div className="absolute left-195 top-16">
            <button className="bg-customYellow-900 p-5 transform transition-transform duration-200 hover:scale-105">
              <img
                src={WhiteArrow}
                alt="white arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
