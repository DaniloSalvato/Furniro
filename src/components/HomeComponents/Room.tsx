type Space = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Room = ({ id, title, description, image }: Space) => {
  return (
    <div>
      <div className="relative w-full h-full  max-h-582  max-w-404 ">
        <img className="transform transition-transform duration-200 hover:scale-105" src={image} alt={title} />
        <div className="absolute w-full  h-1/2 -bottom-36 left-10  ">
          <div className="absolute flex flex-col w-2/5 h-2/5 bg-white bg-opacity-70 justify-center items-center">
          <p className="font-poppins font-medium text-base text-customBlack-550">{`0${id} - ${description}`}</p>
          <h2 className="font-poppins font-semibold text-2xl text-customBlack-500">{title}</h2>
          </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Room;
