import styled from "styled-components";
import { Title } from "../Styles/Title";

export const FoodGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;
`

export const Food = styled(Title)`
height: 150px;
padding: 10px;
font-size: 20px
background-image: ${({img}) => `url(${img});` }
background-position: center;
background-size: cover;
filter: contrast(75%);
border-radius: 8px;
`