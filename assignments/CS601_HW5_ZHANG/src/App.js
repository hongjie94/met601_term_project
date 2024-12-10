import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import Footer from "./components/Footer";
import inventoryData from "./data/inventory.json";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header storeName={"TechHub Electronics"} />
      <main>
        <InventoryList items={inventoryData.items} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
