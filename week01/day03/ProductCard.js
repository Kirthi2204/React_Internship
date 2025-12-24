
function ProductCard({ image, name, description, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p>{description}</p>
      <p><b>₹{price}</b></p>
      <div className="btn-group">
        <button>Add to Cart</button>
        <button className="order">Order</button>
      </div>
    </div>
  );
}

export default ProductCard;
