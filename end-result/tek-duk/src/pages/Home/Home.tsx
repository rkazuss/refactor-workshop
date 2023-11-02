import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api";
import { Product } from "../../shared/interfaces";
import ProductItem from "../../components/Product/ProductItem";

const Home = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: apiClient.getProducts,
  });

  return (
    <div>
      {query.data?.data.products.map((product: Product) => (
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
