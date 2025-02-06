import "./productCart.css"

function ProductCart(props) {
    console.log(props)
    return (
        <div className="container-cart">
            <h3>Producto</h3>
            <h3>Preco</h3>
            <h3>Stock</h3>
            <h3>Descripción</h3>
        </div>
    )
}

export default ProductCart