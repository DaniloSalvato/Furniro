import { Product } from "../../types/Product";
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
}: Product) => {
  return (
    <main className="flex flex-col h-full">
      <section className="flex w-full h-full p-16 border-b border-b-customBlack-950">
        <article className="flex-1 ">
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
          />
        </article>
        <article className="flex-1 ">
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
          />
        </article>
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
        />
      </section>
    </main>
  );
};

export default Details;
