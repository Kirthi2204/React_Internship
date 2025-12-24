import ProductCard from "./ProductCard";
import "./App.css";
import mobile from "./assets/image.png";
import laptop from "./assets/image copy.png";
import headphone from "./assets/image copy 2.png";
function App() {
  return (
    <div className="app">
      <h1 className="back">E-Store</h1>

      <div className="container">
        <ProductCard
          image={mobile}
          name="Mobile"
          description="Smartphone with good camera"
          price={15000}
        />

        <ProductCard
          image={laptop}
          name="Laptop"
          description="Lightweight laptop for students"
          price={45000}
        />

        <ProductCard
          image={headphone}
          name="Headphones"
          description="Wireless headphones"
          price={2000}
        />
      </div>
    </div>
  );
}

export default App;
