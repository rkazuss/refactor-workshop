interface Props {
  imgSrc?: string;
  imgAlt?: string;
  name: string;
  description?: string;
  price: string;
}

const Product = ({ imgSrc, imgAlt, name, description, price }: Props) => {
  return (
    <div aria-label={description}>
      <img src={imgSrc} alt={imgAlt} data-testid="product_thumbnail" />
      <div data-testid="product_name">{name}</div>
      <div data-testid="product_price">{price}</div>
    </div>
  );
};

export default Product;
