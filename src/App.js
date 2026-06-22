import PopularProducts from "./components/PopularProducts/PopularProducts";
import products from "./data/products.json";

function App() {
  return (
    <div>
        <PopularProducts products={products}/>
    </div>
  );
}

export default App;
