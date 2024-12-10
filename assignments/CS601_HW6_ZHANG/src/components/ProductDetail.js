import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ items }) => {
  const { sku } = useParams();
  const product = items.find(item => item.SKU === sku);

  // check if product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>Product Details</h2>
      <div className="product-content">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p><strong>SKU:</strong> {product.SKU}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Quantity:</strong> {product.qty}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};
export default ProductDetail;