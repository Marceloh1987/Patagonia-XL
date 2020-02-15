export function formatPrice(price){
    return price.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
}
