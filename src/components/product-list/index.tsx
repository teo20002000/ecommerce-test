import { Grid } from "@mui/material"
import ProductCard from "../product-card/index";
import type { Product } from "../../types/Product.types";

interface Props {
    products: Product[]
    setCartItem: (p: Product) => void
}



function Products({products, setCartItem}: Props) {

    return <Grid container spacing={2}>
            {products?.filter(product => product).map(product => 
                <Grid item size={{ xs: 12, md:6, lg:4, xl:3 }} sx={{px:{xs:"8px", sm:"2px"}}}  key={product}>
                    <ProductCard product={product} setCartItem= {setCartItem} />
                </Grid> 
            )}             
            </Grid>
}

export default Products;