import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <section className="container d-flex justify-content-center">
      <div className="border border-light-subtle px-3 rounded mt-3">
        <Form className="my-4">
          <Form.Group className="d-flex gap-3">
            <Form.Label>Buscar por categoria:</Form.Label>
            <Form.Select aria-label="defaultSelect">
              <option>Elige una opcion</option>
              <option value="Business">Business</option>
              <option value="Entertainment">Entertainment</option>
              <option value="General">General</option>
              <option value="Health">Health</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </section>
  );
};

export default Formulario;