import Container from 'react-bootstrap/Container';

export default () => (
  <Container>
    ola
    {Array(100)
      .fill(0)
      .map((_, i) => (
        <div key={i}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis cupiditate ut iste voluptates fuga, nobis
          error facilis, inventore quam minus perspiciatis veritatis quis libero voluptatibus velit molestiae dolores
          praesentium fugiat!
        </div>
      ))}
  </Container>
);
