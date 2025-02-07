import ProductCart from "../../common/productCart/ProductCart";

const ItemListContainer = ({ message })=>{
    return(
        <div>
            <h2>Textiles</h2>
            <h2>{message}</h2>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
        </div>
    );
}

export default ItemListContainer;