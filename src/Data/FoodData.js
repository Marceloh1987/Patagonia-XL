export const foodItems = [
    {
        name: 'Patagonia Silvestre',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Patagon',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'  
    },
    {
        name: 'Pichanwich',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
     {
        name: 'Barros Luco',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Tocino',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Pimiento',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Italiano',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Barros Luco Palta',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Mayo',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Palta',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Queso',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Italiana',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Pimiento',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave a lo Pobre',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Chacarero',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ave Palta Queso',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Chacareros',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Italiano',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Mayo',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Tomato',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco Palta',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Churrasco a lo Pobre',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Vegetariano',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Vegano',
        img: '/img/pizza8.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Pichanga XL',
        img: '/img/pizza8.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Pichanga Familiar',
        img: '/img/pizza8.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Pichanga Mediana',
        img: '/img/pizza8.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Pichanga Individual',
        img: '/img/pizza8.jpg',
        section: 'Pichangas'
    },
    {
        name: 'Chorrillana XL',
        img: '/img/pizza8.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Chorrillana Familiar',
        img: '/img/pizza8.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Chorrillana Mediana',
        img: '/img/pizza8.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Chorrillana Individual',
        img: '/img/pizza8.jpg',
        section: 'Chorrillanas'
    },
    {
        name: 'Italiano',
        img: '/img/pizza8.jpg',
        section: 'Completos'
    },
    {
        name: 'Completo',
        img: '/img/pizza8.jpg',
        section: 'Completos'
    },
    {
        name: 'Dinamico',
        img: '/img/pizza8.jpg',
        section: 'Completos'
    },
    {
        name: 'AS Italiano',
        img: '/img/pizza8.jpg',
        section: 'Ases'
    },
    {
        name: 'AS de Pica',
        img: '/img/pizza8.jpg',
        section: 'Ases'
    },
    {
        name: 'AS Luco Tocino',
        img: '/img/pizza8.jpg',
        section: 'Ases'
    },
    {
        name: 'AS Pelu',
        img: '/img/pizza8.jpg',
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