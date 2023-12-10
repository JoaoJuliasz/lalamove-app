export interface Delivery {
  id: string
  remarks: string
  pickupTime: string
  goodsPicture: string
  deliveryFee: string
  surcharge: string
  route: {
    start: string
    end: string
  },
  sender: {
    phone: string
    name: string
    email: string
  }
}

export type Favorites = {
  [key: string]: boolean
}