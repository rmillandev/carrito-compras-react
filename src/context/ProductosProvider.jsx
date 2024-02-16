/* eslint-disable react/prop-types */
import { ProductosContext } from './ProductosContext'
import { useState, useEffect } from 'react' 

export const ProductosProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products')
          const data = await response.json()
          setProductos(data)
        } catch (error) {
          console.error("Ocurrio el siguiente error: " + error)
        }      
    }

    useEffect(() => {
      fetchProductos()
    }, [])

    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}
