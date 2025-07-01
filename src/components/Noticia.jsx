import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Noticia = ({noticia}) => {
  return (
    <Card>
      <Card.Header className="text-center shadow bg-light text-dark">
        <img src={noticia.image_url
} alt={noticia.title} className="img-fluid"/>
        <p className="fs-5">{noticia.country}</p>
        <p className="fs-2 lead">{noticia.title} </p>
      </Card.Header>
      <Card.Body className="text-center border-top border-bottom border-light subtle">
        <p>{noticia.description}</p>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <Button>Ver noticia completa</Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
