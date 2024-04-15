import "./App.css";
import Hi from "./components/hi";

function App() {
  const enviar = () => {
    alert("se envio!");
  };
  return (
    <>
      <Hi name="carlos" lastName="gomez" age="27" enviar={enviar} />
      <Hi name="ilce" lastName="garcia" age="29" enviar={enviar} />
    </>
  );
}

export default App;
