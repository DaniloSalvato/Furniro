import { ItemType } from "../../../stores/slices/Items/type";
import Description from "./Description";
import Exhibition from "./Exhibition";
import Info from "./Info";

const Details = (props: ItemType) => {
  return (
    <main className="flex flex-col h-full">
      <section className="flex flex-col lg:flex-row w-full h-full mt-10 py-8 justify-center items-start">
        <div className="flex-1">
          <Exhibition {...props} />
        </div>

        <div className="flex-1">
          <Info {...props} />
        </div>
      </section>
      <section className="mt-16 mb-16">
        <Description />
      </section>
    </main>
  );
};

export default Details;
