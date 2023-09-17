import React from "react";
import "../styles/ButtonLogin.css"

function ButtonLogin({fnInicioSecion, label}) {
    return(
    <button className="btn" onClick={fnInicioSecion}>
      {label}
    </button>
    )
}
export default ButtonLogin;