import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Noticia = () => {
  return (
    <Card>
      <Card.Header className="text-center shadow bg-light text-dark">
        <p className="fs-5">Diario z</p>
        <p className="fs-2 lead">Titulo Noticia</p>
      </Card.Header>
      <Card.Body className="text-center border-top border-bottom border-light subtle">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae deserunt voluptatibus sint similique cumque non, quam sunt perspiciatis, corporis sapiente! Repellat excepturi cupiditate inventore?</p>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <Button>Ver noticia completa</Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
