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
        "Cebolla morada $500",
        "cebolla blanca $500",
        "Chucrut $500",
        "Porotos verdes $500",
        "Huevo $500",
        "Pickles $500",
        "Tomate $500",
        "Pimiento rojo $500",
        "Aji verde $500",
        "Porcion de mayo $500",
        "Mayo con ajo $500",
        "Queso $1000",
        "Tocino $1000",
        "Carne $1500"
]


function getDefaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
}