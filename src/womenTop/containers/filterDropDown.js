import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function FilterDropDown(props) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter Top
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.handleFilter("XS")}>
            XS
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.handleFilter("S")}>
            S
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.handleFilter("M")}>
            M
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.handleFilter("L")}>
            L
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.handleFilter("XL")}>
            XL
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FilterDropDown;
