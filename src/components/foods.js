import React from "react"
import styled from "styled-components"

const StyledFoods = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Foods = ({ foods }) => (
  <StyledFoods>
    {foods.map(food => (
      <li>
        <h1>{food.name}</h1>
        <p>
          Countable:{" "}
          {food.defaultUnit === "kg" ||
          (food.units && food.units.filter(unit => unit === "kg").length > 0)
            ? "Yes"
            : "No"}
        </p>
      </li>
    ))}
  </StyledFoods>
)

export default Foods
