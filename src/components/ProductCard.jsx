
export const ProductCard = (props) => {
  const { image, title, price } = props.product;
  return (
    <div className="product-card">
      <img src={image}  />
      <h3>{title}</h3>
      <p>Price Rs {price}</p>
    </div>
  );
}
