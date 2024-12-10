const InventoryItem = ({ SKU, name, qty, price }) => (
  <div className="inventory-item">
    <div className="item-grid">
      <div className="item-field">
        <span className="field-label">SKU:</span>
        {SKU}
      </div>
      <div className="item-field">
        <span className="field-label">Name:</span>
        {name}
      </div>
      <div className="item-field">
        <span className="field-label">Quantity:</span>
        {qty}
      </div>
      <div className="item-field">
        <span className="field-label">Price:</span>
        ${price.toFixed(2)}
      </div>
    </div>
  </div>
);
export default InventoryItem