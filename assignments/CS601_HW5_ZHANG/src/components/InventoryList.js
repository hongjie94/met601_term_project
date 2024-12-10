import InventoryItem from './InventoryItem';

const InventoryList = ({ items }) => (
  <div className="inventory-list">
    <h2 className="list-title">Inventory</h2>
    {items.map(item => (
      <InventoryItem
        key={item.SKU}
        {...item}
      />
    ))}
  </div>
);
export default InventoryList