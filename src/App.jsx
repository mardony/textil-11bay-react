import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return(
    <div>
      <Navbar />
      <ItemListContainer message="Bienvenido a Textil Oncebay, descubre nuestros tapices artesanales" />
    </div>
  );
}

export default App;
