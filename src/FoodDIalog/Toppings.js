import React from "react";
import styled from "styled-components";

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 10px;
`;


const CheckboxLabel = styled.div`
  cursor: pointer;
`;


export function Toppings({toppings, checkTopping}) {
  return (
    <ToppingGrid>
      {toppings.map((topping, i) => {
        return (
          <CheckboxLabel>
            <ToppingCheckbox checked={topping.checked} type="checkbox" onClick={() => checkTopping(i)}/>
            {topping.name}
          </CheckboxLabel>
        )

      })}
    </ToppingGrid>
  )
}