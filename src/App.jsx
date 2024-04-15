import "./App.css";
import Steps from "./components/steps/steps";
//import Hi from "./components/hi";

function App() {
 // const enviar = () => {
 //   alert("se envio!");
 
  return (
    <>{/**esto es un fragmento*/}
      <section className="form-container">

        <Steps />
      </section>

      {/**
     * <Hi name="carlos" lastName="gomez" age="27" enviar={enviar} />
      <Hi name="ilce" lastName="garcia" age="29" enviar={enviar} />
     */}
    </>
  );
}

export default App;
