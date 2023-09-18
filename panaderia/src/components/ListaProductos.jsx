import React,{useEffect, useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../styles/ListaProducto.css"
const ListaProductos = () => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState([]);
    
    const handleProducto = async () => {
        console.log(token)
        await axios
            .get("http://89.116.25.43:3500/api/productos/listar", {
                headers: {Authorization: `bearer ${token}`},
            })
            .then((resp) =>{
                console.log(resp);
                if (resp.data && resp.data.result) {
                    setData(resp.data.result);
                } 
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status == 400) {
                  Swal.fire("Información!", err.response.data.message, "error");
                } else if (err.response.status == 401) {
                  Swal.fire("Información!", err.response.data.message, "error");
                } else {
                  Swal.fire("Información!", "Ocurrio un error!", "error");
                }
              });
    }
    useEffect(() => {
        handleProducto();
    }, []);
    return(<Container striped bordered hover >
      <Row>
        {data.map((result) => (
          <Col key={result._id} >
            <Card style={{ width: "18rem" }} className="grid hover-card">
              <Card.Img className="imgpan" variant="top" src={result.imagen} alt={result.nombre} />
              <Card.Body>
                <Card.Title>{result.descripcion}</Card.Title>
                <Card.Text>Valor: ${result.valor}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}
export default ListaProductos;