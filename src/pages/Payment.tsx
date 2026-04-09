import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import NavBar from "../components/navbar"
import type { Product } from "../types/Product.types"
import { useEffect, useState } from "react"


function Payment() {

    const [cart, setCart] = useState<Product[]>([])

    useEffect(() => {
        const localCart = window.localStorage.getItem('cart') ?? '[]'
        setCart(JSON.parse(localCart))
    }, [])

    return <Grid container spacing={2} fixed>
        <Grid item size={{xs: 12}}>
            <NavBar  />
        </Grid>
            <Grid item size={{xs:0, md:2}} />
            <Grid item size={{xs:12}}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Titolo</TableCell>
                        <TableCell>Prezzo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((cartItem: Product) => <TableRow key={cartItem.id}>
                        <TableCell>{cartItem.title}</TableCell>
                        <TableCell>{cartItem.price}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
    </Grid>
    
}

export default Payment 