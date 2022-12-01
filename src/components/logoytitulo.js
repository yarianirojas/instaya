import logo from "../img/Lg.jpg"

const LogoyTitulo = (props) => {
    return (
    <>
        <img src={logo} className="avatar" alt="Avatar Image" />
        <h1>{props.titulo}</h1>
    </>
    );
}

export default LogoyTitulo;