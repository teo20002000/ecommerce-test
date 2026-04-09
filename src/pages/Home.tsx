import { Drawer} from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "../types/Product.types"
import Products from "../components/product-list";
import { ProductContext } from "../context/HomeContext";
import Base from "./Base";
import Cart from "../components/cart";




function Home () {
    const [open, setOpen] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [cart, setCart] = useState<Product[]>([])
    const [cartItem, setCartItem] = useState<Product>()
    const products = useContext(ProductContext)


        useEffect(() => {
            if(cart) {
                window.localStorage.setItem('cart', JSON.stringify(cart) )
            }
        },[cart])

        useEffect(() => {
            if(cartItem) setCart(currentCart => [...currentCart, cartItem])
        }, [cartItem])

        const filteredProducts = useMemo(() => {
        return ( products.filter((p: Product) => p.title.toLowerCase().includes(search.toLocaleLowerCase())))
        },[search, products])

        function handleRemoveItem(id: number) {
            setCart(cart.filter((p: Product) => p.id !== id))
        } 
        

    return <Base setSearch={setSearch} setDrawerOpen={setOpen}>
                <Products products={filteredProducts} setCartItem= {setCartItem}/>
                <Cart cart={cart} drawerOpen={open} setDrawerOpen={setOpen} handleRemoveItem={handleRemoveItem}/>
                
        </Base>
    
}

export default Home