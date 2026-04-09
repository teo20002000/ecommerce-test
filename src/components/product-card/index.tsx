import { ShoppingBasket } from "@mui/icons-material";
import { Card, CardHeader, CardContent, CardActions, Button, Typography, CardMedia } from "@mui/material"
import "./style.css";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import type { Product } from "../../types/Product.types";
import { CurrentUserContext } from "../../context/BaseContext";
import { useContext } from "react";
// import { useSelector } from "react-redux";

interface Props {
    product: Product[]
    setCartItem: (p: Product) => void
    
}

// const Firma = styled.div`color: $ { props => props.light ? 'yellow': 'red };`

const MEFCardMedia = styled(CardMedia)`
    height: 300px;
    `
const MEFCardHeader = styled(CardHeader) `
    & span {
        overflow: ${props => props.islong === "yes" ? 'ellipsis': 'hidden'};
    }
`

const MEFCard = styled(Card)`
    &:hover {
    transform: scale(1.01);
    cursor: pointer;
    
}
`


function ProductCard({ product, setCartItem }: Props) {
    const { user } = useContext(CurrentUserContext)
    const theme = useTheme();
    // const products = useSelector(state => state.products.list)
    // const product = products.find(product => product.id === productId)
    const { title, description, thumbnail, price} = product
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const headerCardClassName = isMD ? "cardHeaderMD" : "cardHeaderXS"


   // const dispari = product % 2 === 1

     return <MEFCard sx={{ height:{xs:"420px", md:"600px"}}}>
                        <MEFCardHeader title={title} 
                            className= {headerCardClassName} 
                            isLong={title?.lenght > 22 ? "yes": "no"} 
                            />
                        <MEFCardMedia sx={{height:{xs:"300px"}, width:{xs:"300px"}, marginLeft:{xs:"20%", md:"0"}}}
                            component="img"
                            image={thumbnail}
                            alt={title}
                            
                        />
                        <CardContent sx={{height:" 140px ", display:{xs:"none", md:"block"}}}> 
                            <Typography>{description}</Typography>
                            </CardContent> 
                        
                        <CardActions>      
                            <Button onClick={() => setCartItem(product)} disabled={!user?.logged}> 
                                <ShoppingBasket color={user?.logged ? "primary " : "disabled"} sx={{marginRight:"4px"}}/> Aggiungi
                                </Button>
                            
                            </CardActions> 
                        
                    </MEFCard>
}

export default ProductCard;