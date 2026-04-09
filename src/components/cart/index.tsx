import {Payments as PaymentIcon, RemoveCircle, ShoppingBasket } from "@mui/icons-material"
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import type { Product } from "../../types/Product.types"
import { Link } from "react-router-dom"

interface Props {
    drawerOpen: boolean,
    setDrawerOpen: (p: boolean) => void,
    cart: Product[],
    handleRemoveItem: (id: number) => void
}

function Cart({drawerOpen, handleRemoveItem, cart, setDrawerOpen}: Props) {
     return <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
            <List>
                <ListItem>
                
                        <ListItemText secondary="Carrello" />
                        <ListItemIcon> 
                            <ShoppingBasket sx={{m: "4px"}}/>   
                        </ListItemIcon>
                    
                    
                </ListItem>
                {cart.map(
                    (p: Product) => <ListItem key={p.id}>
                    <ListItemText primary={  ` ${p.title} `} />
                    <ListItemText secondary={ ` ${p.price}`} sx={{marginLeft: "16px"}} />
                    <IconButton onClick={() => handleRemoveItem(p.id)}><RemoveCircle /> </IconButton>
                    </ListItem>)
                }
            </List>
            <ListItem>
                <ListItemText primary="Totale" />
                <ListItemText sx={{fontWeight: "bold", color: "red", marginLeft: "16px"}}
                            primary={cart.reduce((p, c: Product) => p + c.price, 0)}
                 />

            </ListItem>
            <ListItem>
                <ListItemText primary="Vai al pagamento" />
                   <Link to={"/payment"}> 
                    <IconButton><PaymentIcon /></IconButton>
                    </Link>
            </ListItem>
        </Drawer>
     
}

export default Cart