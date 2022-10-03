import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Imagen from "../src/components/Imagen/Imagen";
import imagen1 from "../src/assets/images/abeja.jpg";
import imagen2 from "../src/assets/images/amor.jpg";
import imagen3 from "../src/assets/images/camarografo.jpg";
import imagen4 from "../src/assets/images/linternas.jpg";
import imagen5 from "../src/assets/images/louvre.jpg";
import imagen6 from "../src/assets/images/lutier.jpg";
import imagen7 from "../src/assets/images/monito.jpg";
import imagen8 from "../src/assets/images/petronas.jpg";
import imagen9 from "../src/assets/images/rinoceronte.jpg";
import imagen10 from "../src/assets/images/vapor.jpg";
import imagen11 from "../src/assets/images/windows.jpg";
import imagen12 from "../src/assets/images/zorro.jpg";

const srcImageList = [
  [imagen1, "Abeja"],
  [imagen2, "Amor"],
  [imagen3, "Camarógrafo"],
  [imagen4, "Linternas"],
  [imagen5, "Louvre"],
  [imagen6, "Lutier"],
  [imagen7, "Monito"],
  [imagen8, "Petronas"],
  [imagen9, "Rinoceronte"],
  [imagen10, "Vapor"],
  [imagen11, "Windows wallpaper"],
  [imagen12, "Zorro"],
];

function App() {
  const imageList = srcImageList.map((img) => {
    return (
      <div>
        <Imagen src={img[0]} alt={img[1]} />
        <p>{img[1]}</p>
      </div>
    );
  });

  const filteredList = srcImageList.filter((img) => img[1] === "Zorro");

  return (
    <div className="App">
      <h2>Elemento filtrado</h2>

      <Imagen src={filteredList[0][0]} alt={filteredList[0][1]} />
      <p>{filteredList[0][1]}</p>

      <header className="App-header">
        <h2>Lista de elementos</h2>
        {imageList}
      </header>
    </div>
  );
}

export default App;
