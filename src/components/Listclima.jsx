import ListGroup from 'react-bootstrap/ListGroup';

function Listclima({key,description,temperatura}) {
  return (
    <ListGroup className='container' key={key}>
      <ListGroup.Item disabled></ListGroup.Item>
      <ListGroup.Item>Descripcion: {description}</ListGroup.Item>
      <ListGroup.Item>temperatura:{temperatura}</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}

export default Listclima;