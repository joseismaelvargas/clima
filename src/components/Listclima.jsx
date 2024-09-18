import ListGroup from 'react-bootstrap/ListGroup';

function Listclima({key,description,temperatura,tiempo}) {
  return (
    <ListGroup className='container' key={key}>
      <ListGroup.Item disabled></ListGroup.Item>
      <ListGroup.Item>Descripcion: {description}</ListGroup.Item>
      <ListGroup.Item>temperatura:{temperatura}</ListGroup.Item>
      <ListGroup.Item>Tiempo:{tiempo}</ListGroup.Item>
    </ListGroup>
  );
}

export default Listclima;