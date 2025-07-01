import Form from "react-bootstrap/Form";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    obtenerNoticia();
  }, []);

  const obtenerNoticia = async () => {
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_39be840985964a1b9e2afa61a8e79d96&category=business,health,science,technology" 
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setNoticias(datos.results)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="container d-flex justify-content-center">
        <div className="border border-light-subtle px-3 rounded mt-3 w-50 shadow">
          <Form className="my-4">
            <Form.Group className="d-flex gap-3">
              <Form.Label>Buscar por categoria:</Form.Label>
              <Form.Select aria-label="defaultSelect" onChange={obtenerNoticia}>
                <option>Elige una opcion</option>
                <option value="Business">Business</option>
                <option value="Entertainment">Entertainment</option>
                <option value="General">General</option>
                <option value="Health">Health</option>
                <option value="Science">Science</option>
                <option value="Sports">Sports</option>
                <option value="Crime">Crime</option>
                <option value="Domestic">Domestic</option>
                <option value="Education">Education</option>
                <option value="Environment">Environment</option>
                <option value="Food">Food</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Top">Top</option>
                <option value="Tourism">Tourism</option>
                <option value="World">World</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </section>
      <article className="border-top border-light-subtle my-4 container-fluid">
        <ListaNoticias noticias={noticias}/>
      </article>
    </>
  );
};

export default Formulario;
