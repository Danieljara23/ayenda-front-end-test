export const formatPrice = (price) => {
    const newPrice = new Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return newPrice;
 }