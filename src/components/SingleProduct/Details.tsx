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
      <section className="flex flex-col md:flex w-full h-full py-16 justify-center items-center">
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
      </section>
      <section className="mt-16 mb-16">
        <Description
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
      </section>
    </main>
  );
};

export default Details;
