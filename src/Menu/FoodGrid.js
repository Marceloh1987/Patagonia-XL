import styled from "styled-components";
import { Title } from "../Styles/Title";

export const FoodGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;
padding-bottom: 100px;
@media(max-width:480px){
    grid-template-columns: 1fr;
}
`;
export const FoodLabel = styled(Title)`
position: absolute;
background-color: rgba(256, 256, 256, 0.6);
padding: 5px;
margin-left: -12px;
`;

export const Food = styled.div`
height: 150px;
padding: 10px;
font-size: 20px
background-image: ${({img}) => `url(${img});` }
background-position: center;
background-size: cover;
filter: contrast(75%);
border-radius: 8px;
margin-top: 5px;
transition-property: box-shadow margin-top filter;
transition-duration: .05s;
box-shadow: 0px 0px 2px 0px grey;
&:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 15px 0px grey;
}
`;