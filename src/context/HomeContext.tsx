 import { createContext, useEffect, useState } from "react";
 import Home from "../pages/Home";
 import type { Product } from "../types/Product.types";
 
 
 interface FetchProductsInterface {
    setProducts: (products: Product[]) => void
  }


async function   fetchProducts({setProducts} : FetchProductsInterface) {
                const response = await fetch("https://dummyjson.com/products")
                const data = await response.json()
               setProducts(data.products)
            }

            export const ProductContext = createContext<Product[]>([])

function HomeContext() {
  const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      fetchProducts({ setProducts })
    }, [])

    return <ProductContext.Provider value={products}> 
                <Home />
            </ProductContext.Provider>
}

export default HomeContext