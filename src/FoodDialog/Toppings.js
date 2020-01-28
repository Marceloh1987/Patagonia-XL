import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';

const ToppingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`;

const CheckboxLabel = styled.label`
    cursor: pointer;
`;

const ToppingsStyled = styled(Title)`
    font-size: 15px;
`;

export function Toppings({ toppings, checkTopping }) {
    return (
        <ToppingsStyled>
        <ToppingGrid>
            {toppings.map((topping, i) => (
            <CheckboxLabel>
                <ToppingCheckbox
                type="checkbox"
                checked={topping.checked}
                onClick={() => {
                    checkTopping(i);
                }}
                />
                {topping.name}
            </CheckboxLabel>
            ))}
        </ToppingGrid>
        </ToppingsStyled>
    );
}