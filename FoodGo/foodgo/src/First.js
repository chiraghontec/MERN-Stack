import Card from 'react-bootstrap/Card';

function First() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title class='font'>FoodGo</Card.Title>
        <Card.Img variant="top" src="public/burger.jpeg/100px180"/>
      </Card.Body>
    </Card>
  );
}

export default First;