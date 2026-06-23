import { useEffect, useState } from "react";

// useState is a React Hook that allows functional components
//  to store and manage state (data). When the state changes, 
// React automatically re-renders the component and updates the UI.
// it have initial states like string, number, array, object, boolean etc.
// array intial state is used to store multiple values in a single variable.
// Syntax: const [state, setState] = useState(initialValue);

function Products() {
  const [products, setProducts] = useState([]);
const [datavar , setDatavar] = useState(1);
console.log("datavar", datavar);
useEffect(() => {console.log("inside useEffect", datavar)} , [datavar]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

const handleUpdateData = () => {
  setDatavar((prevData) => {
    console.log("prevData", prevData); 
    return prevData *2;
  });
}
  return (
    <div>
      <h1>Products Page</h1>
      <button onClick={handleUpdateData}>Update Data</button>
      {datavar}
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />

          <h3>{product.title}</h3>

          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;