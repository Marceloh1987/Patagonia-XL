import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { blueguer } from '../Styles/Colors';
import { Title } from '../Styles/Title';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { useChoice } from '../Hooks/useChoice';
import { Choices } from './Choices';


const Dialog = styled.div`
    width: 660px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`;

const DetailStyle = styled(Title)`
    font-size: 15px;
    padding-bottom: 10px;
`;

export const DialogFooter = styled.div`
    box-shadow: 0px -2px 20px 0px grey;
    height: 80px;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`;

export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: white;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 250px;
    cursor: pointer;
    background-color: ${blueguer};
    ${({disabled}) => 
        disabled &&
        `
        opacity: .5;
        background-color: grey;
        pointer-events: none;
        `}
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
    ${({ img }) => (img ?
        `background-image: url(${img});` : `min-height: 75px;`)}
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    font-size: 30px;
    padding: 5px 40px;
    margin-left: 0px;
    top: ${({img}) => (img ? `100px` : `20px`)};
`;

/*var pricePerToppings = 500;*/

export function getPrice(order){
    return (
         order.quantity * 
         (order.precio + 
            order.toppings.filter(t => t.checked).length * pricePerToppings)
    );
}

function hasToppings(food) {
    return food.section === 'Sandwich';
}

const pricePerToppings = 500;


function FoodDialogContainer({openFood, setOpenFood, setOrders, orders }) {
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const choiceRadio = useChoice(openFood.choice);
    const isEditing = openFood.index > -1;
   

    function close(){
        setOpenFood();
    }

    if (!openFood) return null;

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    };

    function editOrder(){
        const newOrders = [...orders];
        newOrders[order.index] = order;
        setOrders(newOrders);
        close();
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }

return (
    <>
    <DialogShadow onClick={close} />
    <Dialog>
        <DialogBanner img={openFood.img}>
            <DialogBannerName> {openFood.nombre} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
            <div/>
            <DetailStyle>{openFood.detalle}</DetailStyle>
            <div/>
           <QuantityInput quantity={quantity} /> 
           {hasToppings(openFood) && (
           <>
           <h3> Desea Agregados? </h3>
           <Toppings {...toppings} />
           </>
           )}
           {openFood.choices && <Choices openFood={openFood} choiceRadio={choiceRadio}/>}
        </DialogContent>
        <DialogFooter>
            <ConfirmButton
             onClick={isEditing ? editOrder : addToOrder}
             disabled={openFood.choices && !choiceRadio.value}
             >
            {isEditing ? 'Actualizar Pedido: ' : 'Agregar: '}
            {formatPrice(getPrice(order))}
            </ConfirmButton>
        </DialogFooter>
    </Dialog>
    </>
    );
}

export function FoodDialog(props){
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props}/>
}