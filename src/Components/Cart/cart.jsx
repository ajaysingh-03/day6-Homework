import ProductItem from "../ProductItem/ProductItem.jsx";
import "./cart.css";
const Cart = ({ cartItems, setCartItem }) => {

  function calculateTotal() {
    let sum = 0;
    for (let cartItem of cartItems) {
      sum += cartItem.price * cartItem.count;
    }
    return Math.round(sum) ;
  }

  //clear cart item
  if (cartItems.length == 0) {
    return (
      <div className="empty-cart">
        <h1>YOUR BAG</h1>
        <p>is currently empty</p>
      </div>
    );
  }
  //removing single product from cart
//   function removeItem(itemId) {
//     const newCartItems = cartItems.filter((cartItem) => {
//       cartItem.id !== itemId;
//     });
//     setCartItem(newCartItems);
//   }

  function removeItem(itemId) {
    const newCartItems = cartItems.filter((cartItem) =>cartItem.id !== itemId)
    setCartItem(newCartItems);
}

  const updateCount = (itemId, count) => {
    const newCartItem = [...cartItems];
    for (let cartItem of cartItems) {
      if (cartItem.id === itemId) {
        cartItem.count = count;
        break;
      }
    }
    setCartItem(newCartItem);
  };
  // const increment=()=>{

  // }
  return (
    <div className="itemList">
      <h1>YOUR BAG</h1>
      {cartItems.map((cartItem) => (
        <ProductItem
          item={cartItem}
          key={cartItem.id}
          removeItem={removeItem}
          decrease={() => {
            if(cartItem.count >=2){
                updateCount(cartItem.id, cartItem.count - 1);
            }
            
          }}
          increase={() => {
            updateCount(cartItem.id, cartItem.count + 1);
          }}
        />
      ))}
      <div className="total">
        <p>Total: </p>
        <p>$ {calculateTotal()}</p>
      </div>
      <button
        className="clearCart"
        onClick={() => {
          setCartItem([]);
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};
export default Cart;
