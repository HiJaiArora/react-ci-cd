import React from "react";
import Card from "react-bootstrap/Card";
import FilterDropDown from "./filterDropDown";
import image from "../assets/Shirt.jpg";

/**
 * card component.
 * Basically a wrapper around filterdrop down menu and cards
 * @param {array} props.data Component props
 * @param {array} options Array of options for Autocomplete
 * @param {function} handleFilter Callback for when the dropdown filter is selected
 * @param {props type} cardData Config for useState hook
 * @param {function} setCardData Input props. See AutoSuggest
 *
 * Image is single as from api response is coming as string not src so added a random to represent the functionality
 */

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
              <Card key={item.index} style={{ width: "18rem", margin: "1rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body style={{ height: "10.125rem" }}>
                  <Card.Title>{item.productName}</Card.Title>
                  <Card.Title>Price - {item.price}</Card.Title>
                  <span>Size Available- </span>
                  {item.size &&
                    item.size.map((topsize, index) => {
                      return <span key={index}>{topsize + " "}</span>;
                    })}
                  {item.isSale && <Card.Text className="sale">Sale</Card.Text>}
                  {item.isExclusive && (
                    <Card.Text className="exc">Exclusive</Card.Text>
                  )}
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
