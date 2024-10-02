import "./header.css";

const Header = ({cartItems}) => {
  
  let totalcount=0;
  for(let cartItem of cartItems){
    totalcount += cartItem.count
  }
  return (
    <div>
      <header className="header">
        <h4>UseReducer</h4>
        <div className="cart_logo">
          <i className="fa-sharp fa-solid fa-cart-plus"></i>
          <p>Items: {totalcount}</p>
        </div>
      </header>
    </div>
  );
};
export default Header;
