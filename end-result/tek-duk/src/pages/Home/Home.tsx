import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api";
import { Product } from "../../shared/interfaces";
import ProductItem from "../../components/Product/ProductItem";

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: apiClient.getProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Oops! Something went wrong...</div>;
  }


  return (
    <div>
      {data?.data.products.map((product: Product) => (
        <ProductItem
          key={product.id}
          name={product.title}
          price={`$ ${product.price}`}
        />
      ))}
      stuff
    </div>
  );
};

export default Home;
