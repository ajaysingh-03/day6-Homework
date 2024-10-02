import './ProductItem.css'
const ProductItem =({item,decrease, increase,removeItem})=>{
    return(
            <div className="card">
                <div className="img-details">
                    <div className="img-div">
                        <img src={item.imgPath} alt="Phone image" />
                    </div>
                    <div className="details">
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <button className='removeBtn' onClick={()=>{
                            removeItem(item.id)
                        }}>
                            remove
                        </button>
                    </div>
                </div>
                <div className="btn-div">
                        <button onClick={increase}>+</button>
                        <p>{item.count}</p>
                        <button onClick={decrease}>-</button>
                    </div>
            </div>
    )
}
export default ProductItem;
