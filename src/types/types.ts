export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

//Sintaxis para heredar usando una interface
// export interface CartItem extends Guitar {
//     quantity: number
// }
  
//Sintaxis para heredar teniendo un type
export type CartItem = Guitar & {
    quantity: number
}

//Utility types para elegir los atributos que quiero heredar, y si es necesario puedo agregar mas
// export type CartItem = Pick<Guitar , 'id' | 'name'> & {
//     quantity: number
// }

//Tambien puedes quitar esas propiedades usando Omit en lugar de Pick
// export type CartItem = Pick<Guitar , 'id' | 'name'> & {
//     quantity: number
// }

