import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Dropdown component
 * @param {function} handleFilter to handle data rendered as per top size
 * @param {array} size holds different top sizes
 */

function FilterDropDown(props) {
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter Top Size
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.handleFilter("All")}>
            All Sizes
          </Dropdown.Item>
          {sizes.map((size, index) => {
            return (
              <Dropdown.Item onClick={() => props.handleFilter(size)}>
                {size}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FilterDropDown;
