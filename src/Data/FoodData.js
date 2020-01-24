export const foodItems = [
    {
        name: 'Patagonia Silvestre',
        img: '/img/Sandwich1.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Patagon',
        img: '/img/Sandwich2.jpg',
        section: 'Sandwich'  
    },
    {
        name: 'Pichanwich',
        img: '/img/Sandwich3.jpg',
        section: 'Sandwich'
    },
     {
        name: 'Barros Luco',
        img: '/img/Sandwich4.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Tocino',
        img: '/img/Sandwich5.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Pimiento',
        img: '/img/Sandwich6.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Italiano',
        img: '/img/Sandwich7.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Palta',
        img: '/img/Sandwich8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Mayo',
        img: '/img/Sandwich9.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Palta',
        img: '/img/Sandwich10.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Queso',
        img: '/img/Sandwich11.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Italiana',
        img: '/img/Sandwich12.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Pimiento',
        img: '/img/Sandwich13.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave a lo Pobre',
        img: '/img/Sandwich14.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Chacarero',
        img: '/img/Sandwich15.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Palta Queso',
        img: '/img/Sandwich16.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Chacareros',
        img: '/img/Sandwich17.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Italiano',
        img: '/img/Sandwich18.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Mayo',
        img: '/img/Sandwich19.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Tomato',
        img: '/img/Sandwich20.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Palta',
        img: '/img/Sandwich21.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco a lo Pobre',
        img: '/img/Sandwich22.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Vegetariano',
        img: '/img/Sandwich23.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Vegano',
        img: '/img/Sandwich24.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Pichanga XL',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Pichanga Familiar',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Pichanga Mediana',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Pichanga Individual',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Chorrillana XL',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Chorrillana Familiar',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Chorrillana Mediana',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Chorrillana Individual',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Italiano',
        img: '/img/Completo1.jpg',
        section: 'Completos'
    },
    {
        name: 'Completo',
        img: '/img/Completo1.jpg',
        section: 'Completos'
    },
    {
        name: 'Dinamico',
        img: '/img/Completo1.jpg',
        section: 'Completos'
    },
    {
        name: 'AS Italiano',
        img: '/img/as1.jpg',
        section: 'Ases'
    },
    {
        name: 'AS de Pica',
        img: '/img/as1.jpg',
        section: 'Ases'
    },
    {
        name: 'AS Luco Tocino',
        img: '/img/as1.jpg',
        section: 'Ases'
    },
    {
        name: 'AS Pelu',
        img: '/img/as1.jpg',
        section: 'Ases'
    },
    {
        name: 'Bebidas',
        img: '/img/Bebidas.jpg',
        section: 'Bebidas'
    },
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {});