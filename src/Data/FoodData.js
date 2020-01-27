export function formatPrice(price){
    return price.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
}

export const foodItems = [
    {
        name: 'Patagonia Silvestre',
        img: '/img/Sandwich1.jpg',
        section: 'Sandwich',
        price:  6500
    },
    {
        name: 'Patagon',
        img: '/img/Sandwich2.jpg',
        section: 'Sandwich',
        price: 6500  
    },
    {
        name: 'Pichanwich',
        img: '/img/Sandwich3.jpg',
        section: 'Sandwich',
        price: 6500
    },
     {
        name: 'Barros Luco',
        img: '/img/Sandwich4.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Barros Luco Tocino',
        img: '/img/Sandwich5.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Barros Luco Pimiento',
        img: '/img/Sandwich6.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Barros Luco Italiano',
        img: '/img/Sandwich7.jpg',
        section: 'Sandwich',
        price: 6500
    },
    {
        name: 'Barros Luco Palta',
        img: '/img/Sandwich8.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Ave Mayo',
        img: '/img/Sandwich9.jpg',
        section: 'Sandwich',
        price: 4000
    },
    {
        name: 'Ave Palta',
        img: '/img/Sandwich10.jpg',
        section: 'Sandwich',
        price: 5000
        
    },
    {
        name: 'Ave Queso',
        img: '/img/Sandwich11.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Ave Italiana',
        img: '/img/Sandwich12.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Ave Pimiento',
        img: '/img/Sandwich13.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Ave a lo Pobre',
        img: '/img/Sandwich14.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Ave Chacarero',
        img: '/img/Sandwich15.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Ave Palta Queso',
        img: '/img/Sandwich16.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Chacareros',
        img: '/img/Sandwich17.jpg',
        section: 'Sandwich',
        price: 6000        
    },
    {
        name: 'Churrasco Italiano',
        img: '/img/Sandwich18.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Churrasco Mayo',
        img: '/img/Sandwich19.jpg',
        section: 'Sandwich',
        price: 4500
    },
    {
        name: 'Churrasco Tomate',
        img: '/img/Sandwich20.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Churrasco Palta',
        img: '/img/Sandwich21.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Churrasco a lo Pobre',
        img: '/img/Sandwich22.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Vegetariano',
        img: '/img/Sandwich23.jpg',
        section: 'Sandwich',
        price: 4500
    },
    {
        name: 'Vegano',
        img: '/img/Sandwich24.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Pichanga XL',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 22000
    },
    {
        name: 'Pichanga Familiar',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 14000
    },
    {
        name: 'Pichanga Mediana',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 9000
    },
    {
        name: 'Pichanga Individual',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 6000
    },
    {
        name: 'Chorrillana XL',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 22000
    },
    {
        name: 'Chorrillana Familiar',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 14000
    },
    {
        name: 'Chorrillana Mediana',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 9000
    },
    {
        name: 'Chorrillana Individual',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 6000
    },
    {
        name: 'Italiano',
        img: '/img/Completo1.jpg',
        section: 'Completos',
        price: 2500
    },
    {
        name: 'Completo',
        img: '/img/Completo1.jpg',
        section: 'Completos',
        price: 2800
    },
    {
        name: 'Dinamico',
        img: '/img/Completo1.jpg',
        section: 'Completos',
        price: 2500
    },
    {
        name: 'AS Italiano',
        img: '/img/as1.jpg',
        section: 'Ases',
        price: 3000
    },
    {
        name: 'AS de Pica',
        img: '/img/as1.jpg',
        section: 'Ases',
        price: 3500
    },
    {
        name: 'AS Luco Tocino',
        img: '/img/as1.jpg',
        section: 'Ases',
        price: 3000
    },
    {
        name: 'AS Pelu',
        img: '/img/as1.jpg',
        section: 'Ases',
        price: 3500
    },
    {
        name: 'Lata bebida 350cc',
        img: '/img/Bebidas.jpg',
        section: 'Bebidas',
        choices: ["Coca-Cola", "Coca-cola Light", "Coca-cola Zero","Fanta Light", "Fanta Zero", "Fanta", "Sprite Light", "Sprite Zero", "Sprite"],
        price: 1000
    },
    {
        name: 'Bebida 1.5Lts.',
        img: '/img/BebidaB.jpg',
        section: 'Bebidas',
        choices: ["Coca-Cola", "Coca-cola Light", "Coca-cola Zero","Fanta Light", "Fanta Zero", "Fanta", "Sprite Light", "Sprite Zero", "Sprite"],
        price: 2000
    },
    {
        name: 'Jugo Nectar 1.5Lts',
        img: '/img/Nectar.jpg',
        section: 'Bebidas',
        price: 2000
    },
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {});