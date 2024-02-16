import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Compras } from "./pages/Compras"
import { Carrito } from "./pages/Carrito"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Compras></Compras>}></Route>
                        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
                        <Route path="/*" element={<Navigate to={"/"}></Navigate>}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
