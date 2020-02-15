import React from 'react';
import styled from 'styled-components';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { formatPrice } from '../Data/FoodData';

const MenuStyled = styled.div`
    height: 1000px
    margin: 0px 20px 50px 20px;
`;

const Detailstyled = styled.div`
    font-size: 10px;
`;


export function Menu({ setOpenFood, fbData, setCloseCart, closeCart }){
    //Para ordenar el menu, como lo tiene el cliente en su carta, es necesario especificar los indeces que queremos asignrarle a la data proveniente de firebase.
    //Firebase entrega la data ordenada de forma alfabetica o numero, creciente o decreciente. no en la forma que uno muchas veces la necesita mostrar.
    
    const expectedIndex = [5, 4, 2, 3, 0, 1]
    const menuDataOrganized = expectedIndex.map(i => Object.entries(fbData)[i]);

    return (
        <MenuStyled>
            {menuDataOrganized.map(([sectionName, fbData],i) => (
            <div key={i}>
                <h1>{sectionName}</h1>
                {}
                <FoodGrid>
                    {fbData.map((food, i) => (
                    <Food
                    key={i}
                        img={food.img}
                        onClick={() => {
                        setOpenFood(food);
                        setCloseCart(true);
                        }}
                    >
                        <FoodLabel>
                            <div>{food.nombre}</div>
                            <Detailstyled>{food.detalle}</Detailstyled>
                            <div>{formatPrice(food.precio)}</div>
                        </FoodLabel>
                    </Food>
                    ))}
                </FoodGrid>
            </div>
            ))}
        </MenuStyled>
    );
}