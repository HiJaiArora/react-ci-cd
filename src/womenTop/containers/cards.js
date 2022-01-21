import React from "react";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <div className="App">
      {props.data.map((item, index) => {
        return (
          <div>
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.productImage} />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Title>Price - {item.price}</Card.Title>
                {item.isSale && <Card.Text className="sale">Sale</Card.Text>}
                {item.isExclusive && (
                  <Card.Text className="exc">Exclusive</Card.Text>
                )}
                {item.size &&
                  item.size.map((topsize, index) => {
                    return <span key={index}>{topsize + " "}</span>;
                  })}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
