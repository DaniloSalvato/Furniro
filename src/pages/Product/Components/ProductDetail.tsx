import { useParams } from "react-router-dom";
import Path from "./Path";
import Details from "./Details";
import Related from "./Related";
import { useGetItemsQuery } from "../../../stores/slices/Items";

const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useGetItemsQuery(undefined);

  const item = data?.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <p className="text-center font-montserrat text-4xl font-bold h-screen mt-48">
        Loading...
      </p>
    );
  }
  return (
    <div className="flex flex-col">
      <Path title={item.title} />
      <Details {...item} />
      <Related {...item} />
    </div>
  );
};

export default ProductDetail;
