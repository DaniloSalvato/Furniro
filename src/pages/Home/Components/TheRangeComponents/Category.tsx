type CategoryProps = {
  children: React.ReactNode;
  area:string
  image: string;
};

const Category = ({children, area, image}: CategoryProps) => {
  return (
    <>
      <div className="flex flex-col">
        <img
          className="rounded-lg transition-transform duration-200 hover:scale-105"
          src={image}
          alt={area}
        />
        <h1 className="font-poppins font-semibold text-xs mt-3 md:text-2xl text-center text-customBlack-300">
          {children}
        </h1>
      </div>
    </>
  );
};

export default Category;
