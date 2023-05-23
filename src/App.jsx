import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

const App = () => {
  let nombre = "Daniel";
  let apellido = "Henao";

  return (
    <div>
      <Navbar />
      <ItemListContainer nombre={nombre} apellido={apellido} />
    </div>
  );
};

export default App;
