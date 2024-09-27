import Dining from "../../../assets/categories/category-1.png";
import Living from "../../../assets/categories/category-2.png";
import Bedroom from "../../../assets/categories/category-3.png";
import Category from "./TheRangeComponents/Category";

const TheRange = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <article className="flex flex-col my-10">
        <h1 className="font-poppins font-bold text-lg md:text-4xl text-center text-customBlack-300 mb-1">
          Browse The Range
        </h1>
        <p className="font-poppins font-regular text-sm md:text-xl text-center text-customBlack-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </article>
      <article className="grid grid-cols-3 gap-7 w-11/12 ">
        <Category image={Dining} area="Dining">Dining</Category>
        <Category image={Living} area="Living">Living</Category>
        <Category image={Bedroom} area="Bedroom">Bedroom</Category>
      </article>
    </section>
  );
};

export default TheRange;
