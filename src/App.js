import { ProductCard } from "./components/ProductCard"

const products = [
  {
    id:0,
    name: "Product 1",
    category: "Category 1",
    price: 200,
    img: "https://www.hoxtonmacs.co.uk/cdn/shop/products/apple-macbook-pro-13-inch-macbook-pro-13-inch-m1-space-grey-2020-excellent-29264841179238_720x.jpg?v=1680245508"
  },
  {
    id:1,
    name: "Product 2",
    category: "Category 2",
    price: 500,
    img: "https://www.hoxtonmacs.co.uk/cdn/shop/products/apple-macbook-pro-13-inch-macbook-pro-13-inch-m1-space-grey-2020-excellent-29264841179238_720x.jpg?v=1680245508"
  },
]


function App() {
  return (
      <div>
          {
              products.map((product) => (
                <ProductCard data={product}/>
            ))}
          
      </div>
  );
}
export default App