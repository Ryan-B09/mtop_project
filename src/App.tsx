
import { useCart } from "./hooks";
import type { Product, User } from "./types";


function App({ product, user }: { product: Product; user: User }) {
  const [cart, addToCart] = useCart();

  return (
    <div>
     
    </div>
  );
}

export default App;
