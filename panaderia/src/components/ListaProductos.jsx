import React,{useEffect, useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const ListaProductos = () => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState([]);
    
    const handleProducto = async () => {
        console.log(data)
        await axios
            .get("http://89.116.25.43:3500/api/productos/listar", {
                headers: {Authorization: `bearer ${token}`},
            })
            .then((resp) =>{
                console.log(resp);
                if (resp.data && resp.data.productos) {
                    setData(resp.data.productos);
                } else {
                    setData([]); // Asigna un array vacío en caso de que no haya datos válidos.
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
    return(
        <Container>
        <Row>
          {data.map((item, index) => {
            return(
              <Col key={item._id} >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
                  <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>Precio: {item.precio}</Card.Text>
                    <Card.Text>Valor: ${item.valor}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    )
}
export default ListaProductos;