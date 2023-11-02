import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/api";
import { Product } from "../../shared/interfaces";

const Home = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: apiClient.getProducts,
  });

  return (
    <div>
      {query.data?.data.products.map((product: Product) => (
        <div key={product.id}>{product.title}</div>
      ))}
      stuff
    </div>
  );
};

export default Home;
