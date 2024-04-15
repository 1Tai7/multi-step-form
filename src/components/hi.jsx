/* eslint-disable react/prop-types */
function Hi({name, lastName, age, enviar}) {

  

  return (

    <>
      <h1>
        {`${name} ${lastName} ${age}`}
        hola desde el componente hi
      </h1>
      <button onClick={enviar} >Enviar</button>
    </>
  );
}
export default Hi;
