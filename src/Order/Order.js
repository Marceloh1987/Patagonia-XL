import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { DialogContent,
         DialogFooter,
         ConfirmButton
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';
import { Title } from '../Styles/Title';
import Register from '../Register/Register';
import { Pago } from '../Pago/Pago';
import './Order.css';



const OrderStyled = styled(Title)`
    position: fixed;
    right: 0px;
    top: 60px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    z-index: 10;
    box-shadow: 4px 0px 5px 4px grey;
    display: flex;
    flex-direction: column;
    transition: 0.4s;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
`;


const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const DetailItem = styled.div`
    color: grey;
    font-size: 10px;

`;

export function Order({ orders, setOrders, setOpenFood }) {
    
    const [modalRegisterShow, setModalRegisterShow] = useState(false);
    const [checkoutOpen, isCheckoutOpen] = useState(false);

    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);
    
    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

        useEffect(() =>{
            orders.length === 0 ? isCheckoutOpen(false) : isCheckoutOpen(true)
        }, [orders.length])

        

    return (
        <OrderStyled open={checkoutOpen}>
        <Register show={modalRegisterShow} onHide={() => setModalRegisterShow(false)} />
            <div onClick={()=>{isCheckoutOpen(!checkoutOpen)}} className="close_checkout_x">
                {checkoutOpen ? 'X' : (
                    <div>
                        <img className="CarritoQl" src={require('./bag-icon.png')} alt="Carrito Patagonia XL"/>
                        <span className={orders.length > 0 ? 'bag__quantity' : ''}>{orders.length > 0 ? orders.length : null}</span>
                    </div>
                    )}
            </div>  
            {orders.length === 0 ? (  
            <OrderContent>Tu Orden esta Vacia.</OrderContent>
            ) : (
            <OrderContent>
                {" "}
                <OrderContainer> Tu Pedido: </OrderContainer>
                {
                     orders.map((order, index) => (
                        
                    <OrderContainer editable>
                        <OrderItem
                        key={index + order}
                        onClick={() => {
                            setOpenFood({...order, index})
                        }}
                        >
                            <div>{order.quantity}</div>
                            <div>{order.name}</div>
                            <div 
                                style={{cursor: 'pointer'}}
                                onClick={e => {
                                    e.stopPropagation();
                                    deleteItem(index);
                                }}>
                                     <span role="img" aria-label="Delete">
                                     🗑️
                                    </span>
                            </div>
                            <div>{formatPrice(getPrice(order))}</div>
                        </OrderItem>
                        <DetailItem>
                            {order.toppings
                            .filter(t => t.checked)
                            .map(topping => topping.name)
                            .join(", ")
                            }
                        </DetailItem>
                        {order.choice && <DetailItem>{order.choice}</DetailItem>}
                    </OrderContainer>
                ))}
                <OrderContainer>
                    <OrderItem>
                        <div/>
                        <div>total</div>
                        <div>{formatPrice(subtotal)}</div>
                    </OrderItem>
                </OrderContainer>
            </OrderContent>
            )}
            <DialogFooter>
                <ConfirmButton onClick={()=>{if(orders.length != 0) setModalRegisterShow(true)}}>
                    Pagar!
                </ConfirmButton>
            </DialogFooter>                  
        </OrderStyled>
    );
}