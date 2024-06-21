import { Item } from "../../types/Item";
import Description from "./Description";
import Exhibition from "./Exhibition";
import Info from "./Info";

const Details = ({
  id,
  title,
  subtitle,
  about,
  description,
  image,
  star,
  value,
  inSale,
  percentage,
  isNew,
  sku,
  category,
  tags,
  quantity,
}: Item) => {
  return (
    <main className="flex flex-col h-full">
      <section className="flex flex-col lg:flex-row w-full h-full mt-10 py-8 justify-center items-start">
        <div className="flex-1">
          <Exhibition
            id={id}
            title={title}
            subtitle={subtitle}
            about={about}
            description={description}
            image={image}
            star={star}
            value={value}
            inSale={inSale}
            percentage={percentage}
            isNew={isNew}
            sku={sku}
            category={category}
            tags={tags}
            quantity={quantity}
          />
        </div>

        <div className="flex-1">
        <Info
          id={id}
          title={title}
          subtitle={subtitle}
          about={about}
          description={description}
          image={image}
          star={star}
          value={value}
          inSale={inSale}
          percentage={percentage}
          isNew={isNew}
          sku={sku}
          category={category}
          tags={tags}
          quantity={quantity}
        />
        </div>

        
      </section>
      <section className="mt-16 mb-16">
        <Description/>
      </section>
    </main>
  );
};

export default Details;
