export const getDeliveryPrice = (deliveryFee: string, surcharge: string): string => {
    const parsedDeliveryFee = parseFloat(deliveryFee.replace('$', ''))
    const parsedSurcharge = parseFloat(surcharge.replace('$', ''))
    return `$${(parsedSurcharge + parsedDeliveryFee).toFixed(2)}`
}