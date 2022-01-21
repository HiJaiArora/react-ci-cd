import React from "react";
import Card from "react-bootstrap/Card";
import FilterDropDown from "./filterDropDown";
import image from "../assets/Shirt.jpg";

function Cards(props) {
  const [cardData, setCardData] = React.useState(props.data);

  React.useEffect(() => {
    setCardData(props.data);
  }, [props.data]);

  const handleFilter = (size) => {
    if (size !== "All") {
      const filteredData = props.data.filter((item) => {
        return item.size.includes(size);
      });
      setCardData(filteredData);
    } else {
      setCardData(props.data);
    }
  };
  return (
    <>
      <FilterDropDown handleFilter={handleFilter} />
      <div className="Cards">
        {cardData &&
          cardData.map((item) => {
            return (
              <div>
                <Card
                  key={item.index}
                  style={{ width: "18rem", margin: "1rem" }}
                >
                  <Card.Img variant="top" src={image} />
                  <Card.Body style={{ height: "10.125rem" }}>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Title>Price - {item.price}</Card.Title>
                    <span>Size- </span>
                    {item.size &&
                      item.size.map((topsize, index) => {
                        return <span key={index}>{topsize + " "}</span>;
                      })}
                    {item.isSale && (
                      <Card.Text className="sale">Sale</Card.Text>
                    )}
                    {item.isExclusive && (
                      <Card.Text className="exc">Exclusive</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
