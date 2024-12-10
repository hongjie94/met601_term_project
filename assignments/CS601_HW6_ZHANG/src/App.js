import { Header, InventoryList, ProductDetail ,Footer} from './components'
import inventoryData from "./data/inventory.json";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
    <div className="app">
      <Header storeName={"TechHub Electronics"} />
      <main>
        <Routes>
          <Route path="/" element={<InventoryList items={inventoryData.items} />} />
          <Route path="/product/:sku" element={<ProductDetail items={inventoryData.items} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
