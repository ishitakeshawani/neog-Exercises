import "./styles.css";

export function ProductListing() {
  return (
    ['1', '2', '3', '4'].map(item => (<h2>Product {item}</h2>))
  )
}

export function Cart() {
  return <h1> Items in cart </h1>
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing /></div>
    </div>
  );
}
