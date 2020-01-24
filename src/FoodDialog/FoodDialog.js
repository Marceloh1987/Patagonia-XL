import React from 'react';
import styled from 'styled-components';

const Dialog = styled.div`
    width: 500px;
    height: 2000px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }) => `background-image: url(${img});`}
    background-position: center;
    background-size: cover;
`;

export function FoodDialog({openFood, setOpenFood}) {
    function close(){
        setOpenFood();
    }
    if (!openFood) return null;
    return (
    <>
    <DialogShadow onClick={close}/>
    <Dialog>
        <DialogBanner img={openFood.img} />
    </Dialog>
    </>
    )
}