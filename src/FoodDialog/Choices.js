import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/Title';

const CursorPointer = `cursor: pointer`;

const ChoiceStyled = styled(Title)`
font-size: 15px;
padding-top: 5px;
`;

const RadioInput = styled.input`
    ${CursorPointer}
`;

const Label = styled.label`
    ${CursorPointer}
`;

export function Choices({ openFood, choiceRadio }){
    return (
        <>
            <h3>Elije una</h3>
            {openFood.choices.map(choice => (
        <>
        <ChoiceStyled>
            <RadioInput
                type="radio"
                id={choice}
                name="choice"
                value={choice}
                checked={choiceRadio.value === choice}
                onChange={choiceRadio.onChange}
            />
            <Label for={choice}> {choice} </Label>{" "}
            </ChoiceStyled>
            </>
        ))}
     </>
    )
}
