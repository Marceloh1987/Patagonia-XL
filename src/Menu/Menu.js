import React, {useEffect, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { formatPrice } from '../Data/FoodData';
import firebase from '../Firebase/firebase';


const MenuStyled = styled.div`
    height: 1000px
    margin: 0px 20px 50px 20px;
`;

const Detailstyled = styled.div`
    font-size: 10px;
`;



export function Menu({ setOpenFood }){
    
    const [fbData, setFbData] = useState(null);
    
    useEffect(() => {
        firebase.database().ref('/Menu').on('value', (snapshot) => {
            // const key = Object.values(snapshot.val());
            // setFbData(key);
            setFbData(snapshot.val());
        });
    }, []);

    const expectedIndex = [5, 4, 2, 3, 0, 1]
    
    if(fbData){
        const menuDataOrganized = expectedIndex.map(i => Object.entries(fbData)[i]);
        console.log('fb data', );
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
    else{
        return (
            <div style={{margin:'10% 0 0 0', textAlign:'center'}}>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
            </div>
        )
    }
}