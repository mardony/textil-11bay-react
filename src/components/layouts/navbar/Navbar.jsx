import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {

    return(
        <nav className="title">
            <div className="logo">Textil Oncebay</div>
            <ul className="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#catalog">Catálogo</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}