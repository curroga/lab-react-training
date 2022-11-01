import '../styles/Greetings.css'

function Greetings(props) {
  let saludo = "";
  if(props.lang === "de"){
    saludo = "Hallo"
  } else if(props.lang === "es") {
    saludo = "Hola"
  }
  return (
    <div className="container-greetings">
        <p>{saludo + " " + props.children}</p>
    </div>
  )
}

export default Greetings