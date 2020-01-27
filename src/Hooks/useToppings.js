import { useState } from 'react';

export function useToppings(defaultTopping){
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings())

    function checkTopping(index){
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)
    }

    return {
        checkTopping,
        toppings
    };
}



const toppingsList = [
    "Cebolla morada",
    "cebolla blanca",
    "Chucrut",
    "Porotos verdes",
    "Huevo",
    "Pickles",
    "Tomate",
    "Pimiento rojo",
    "Aji verde",
    "Porcion de mayo",
    "Mayo con ajo",
    "Queso",
    "Tocino",
    "Carne"
];

function getDefaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));

}