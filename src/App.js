import Reviews from "./components/Reviews/Reviews";

  
import PopularProducts from "./components/PopularProducts/PopularProducts";
import products from "./data/products.json";
import { Popular } from "./components/Popular-categories/Popular"


function App() {
  return (
    <div>
        <PopularProducts products={products}/>
      <Popular/> 
      <Reviews/>
    </div>
  );
 
}


export default App;
