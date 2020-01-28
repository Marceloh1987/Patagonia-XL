export function formatPrice(price){
    return price.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
}

export const foodItems = [
    {
        name: 'Patagonia Silvestre',
        detail: 'Churrasco, Champiñon y cebolla morada salteada en mantequilla, tocino, mayo casera.',
        img: '/img/Sandwich1.jpg',
        section: 'Sandwich',
        price:  6500
    },
    {
        name: 'Patagon',
        detail: 'Doble churrasco, cebolla morada, queso, tocino, mayo casera.',
        img: '/img/Sandwich2.jpg',
        section: 'Sandwich',
        price: 6500  
    },
    {
        name: 'Pichanwich',
        detail:'Mix de carnes de vacuno, cerdo, ave, chorizo y salchicha Llanquihue, queso, palta, mayo casera.',
        img: '/img/Sandwich3.jpg',
        section: 'Sandwich',
        price: 6500
    },
     {
        name: 'Barros Luco',
        detail: 'Churrasco, queso, mayo casera.',
        img: '/img/Sandwich4.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Barros Luco Tocino',
        detail: 'Churrasco, queso, tocino, mayo casera.',
        img: '/img/Sandwich5.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Barros Luco Pimiento',
        detail: 'Churrasco, queso, pimiento rojo, mayo casera.',
        img: '/img/Sandwich6.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Barros Luco Italiano',
        detail: 'Churrasco, queso, tomate, palta, mayo casera.',
        img: '/img/Sandwich7.jpg',
        section: 'Sandwich',
        price: 6500
    },
    {
        name: 'Barros Luco Palta',
        detail: 'Churrasco, queso, palta, mayo casera.',
        img: '/img/Sandwich8.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Ave Mayo',
        detail: 'Filete de ave, mayo casera.',
        img: '/img/Sandwich9.jpg',
        section: 'Sandwich',
        price: 4000
    },
    {
        name: 'Ave Palta',
        detail: 'Filete de ave, palta, mayo casera.',
        img: '/img/Sandwich10.jpg',
        section: 'Sandwich',
        price: 5000
        
    },
    {
        name: 'Ave Queso',
        detail: 'Filete de ave, queso, mayo casera.',
        img: '/img/Sandwich11.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Ave Italiana',
        detail: 'Filete de ave, tomate, palta,  mayo casera.',
        img: '/img/Sandwich12.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Ave Pimiento',
        detail: 'Filete de ave, pimiento, mayo casera.',
        img: '/img/Sandwich13.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Ave a lo Pobre',
        detail: 'Filete de ave, cebolla, huevo frito, mayo casera.',
        img: '/img/Sandwich14.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Ave Chacarero',
        detail: 'Filete de ave, poroto verde o lechuga, tomate, aji verde, mayo casera.',
        img: '/img/Sandwich15.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Ave Palta Queso',
        detail: 'Filete de ave, palta, queso, mayo casera.',
        img: '/img/Sandwich16.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Chacareros',
        detail: 'Churrasco, lechuga o poroto verde, toamte, aji verde, mayo casera.',
        img: '/img/Sandwich17.jpg',
        section: 'Sandwich',
        price: 6000        
    },
    {
        name: 'Churrasco Italiano',
        detail: 'Churrasco, tomate, palta, mayo casera.',
        img: '/img/Sandwich18.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Churrasco Mayo',
        detail: 'Churrasco, mayo casera',
        img: '/img/Sandwich19.jpg',
        section: 'Sandwich',
        price: 4500
    },
    {
        name: 'Churrasco Tomate',
        detail: 'Churrasco, tomate, mayo casera.',
        img: '/img/Sandwich20.jpg',
        section: 'Sandwich',
        price: 5000
    },
    {
        name: 'Churrasco Palta',
        detail: 'Churrasco, palta, mayo casera.',
        img: '/img/Sandwich21.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Churrasco a lo Pobre',
        detail: 'Churrasco, cebolla, huevo frito, mayo casera.',
        img: '/img/Sandwich22.jpg',
        section: 'Sandwich',
        price: 6000
    },
    {
        name: 'Vegetariano',
        detail: 'Tomate, lechuga, palta, palmito, queso y mayo casera.',
        img: '/img/Sandwich23.jpg',
        section: 'Sandwich',
        price: 4500
    },
    {
        name: 'Vegano',
        detail: 'Zapallo italiano, esparrago, champiñon, cebolla morada, palta y mayo.',
        img: '/img/Sandwich24.jpg',
        section: 'Sandwich',
        price: 5500
    },
    {
        name: 'Pichanga XL',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, tomate, palta, huevo, queso, pickle opcional, papas fritas caseras.',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 22000
    },
    {
        name: 'Pichanga Familiar',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, tomate, palta, huevo, queso, pickle opcional, papas fritas caseras.',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 14000
    },
    {
        name: 'Pichanga Mediana',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, tomate, palta, huevo, queso, pickle opcional, papas fritas caseras.',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 9000
    },
    {
        name: 'Pichanga Individual',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, tomate, palta, huevo, queso, pickle opcional, papas fritas caseras.',
        img: '/img/Pichanga1.jpg',
        section: 'Pichangas',
        price: 6000
    },
    {
        name: 'Chorrillana XL',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, cebolla frita, huevo frito, papas fritas caseras.',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 22000
    },
    {
        name: 'Chorrillana Familiar',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, cebolla frita, huevo frito, papas fritas caseras.',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 14000
    },
    {
        name: 'Chorrillana Mediana',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, cebolla frita, huevo frito, papas fritas caseras.',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 9000
    },
    {
        name: 'Chorrillana Individual.',
        detail: 'Asiento, lomo de cerdo, filete de ave, embutidos Llanquihue, cebolla frita, huevo frito, papas fritas caseras.',
        img: '/img/chorrillana1.jpg',
        section: 'Chorrillanas',
        price: 6000
    },
    {
        name: 'Italiano',
        detail: 'Tomate, palta, mayo casera.',
        img: '/img/Completo1.jpg',
        section: 'Completos',
        price: 2500
    },
    {
        name: 'Completo',
        detail: 'Chucrut, tomate, palta, mayo casera.',
        img: '/img/Completo1.jpg',
        section: 'Completos',
        price: 2800
    },
    {
        name: 'Dinamico',
        detail: 'Salsa americana, Chucrut, tomate, palta, mayo casera.',
        img: '/img/Completo1.jpg',
        section: 'Completos',
        price: 2500
    },
    {
        name: 'AS Italiano',
        detail: 'Carne picada, tomate, palta, mayo casera.',
        img: '/img/as1.jpg',
        section: 'Ases',
        price: 3000
    },
    {
        name: 'AS de Pica',
        detail: 'Carne picada, chucrut, aji verde, tocino, palta, mayo casera.',
        img: '/img/as1.jpg',
        section: 'Ases',
        price: 3500
    },
    {
        name: 'AS Luco Tocino',
        detail: 'Carne picada, queso, tocino, mayo casera.',
        img: '/img/as1.jpg',
        section: 'Ases',
        price: 3000
    },
    {
        name: 'AS Pelu',
        detail: 'Carne picada, cebolla morada, tocino, palta, pimiento, mayo casera.',
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