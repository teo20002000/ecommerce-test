import { useContext, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { AppBar, Button, Typography, Toolbar, TextField} from "@mui/material";
import { Login, Logout, ShoppingBasket, Home as HomeIcon } from "@mui/icons-material";
import "./style.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../context/BaseContext";


const displayOnlyOnMedium = { direction : { 
                   sx:"column",
                    md:"row",
                }}

const displayOnlyOnSmall = {
            color:"white",
            marginLeft:"16px",
            display : {
                   xs:"block",
                    md:"none"
                }}

interface Props {
    setDrawerOpen?: (p: boolean) => void,
    setSearch?: (p:string) => void
    
}

type SearchChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

function NavBar({setDrawerOpen, setSearch}: Props) {
    const {user, setUser} = useContext(CurrentUserContext)
    
    
    function handleSearch(event: SearchChangeEvent ) {
        if(event.currentTarget.value === "" && setSearch) setSearch("")
        if(!setSearch || event.currentTarget.value.length < 3 ) return
        setSearch && setSearch(event.currentTarget.value)

    }

    function handleLogout() {
        if(setUser) {
            setUser(oldUser => ({...oldUser, logged: false}))
        }
    }

    return <AppBar position="static">
        <Toolbar className="toolbar" sx={displayOnlyOnMedium}>
            { user?.logged ? 
            <Button  className="menuButton" onClick={() => setDrawerOpen && setDrawerOpen(true)}>
                <ShoppingBasket />
                <Typography variant="body2" color={"white"} 
                sx={{display: { xs:"none", md:"block" },marginLeft: { md:"12px"}
            }}>CARRELLO</Typography>
            </Button> 
            :             
            <Link to='/login'>
            <Button  className="menuButton">
                
                <Login />
                <Typography variant="body2" color={"white"} 
                sx={{display: { xs:"none", md:"block" }, marginLeft: { md:"12px" }, color:  {color:"white"}
            }}>LOGIN</Typography>
            </Button>
            </Link> 
            }
            
            {setSearch && 
            <TextField onChange={e => handleSearch(e)} placeholder="Cerca..."  size="small" className="search" sx={{
                width: {xs: "400px",sm: "480px",md: "640px"},
                marginLeft: {xs:"50px", md:"0"}
            }} /> }
            <Link to="/home">
            <HomeIcon sx={displayOnlyOnSmall} />
            <Typography variant="h6" sx={{
                display: {xs:"none",m:"10px",md:"block"},
                marginLeft: {xs:"50px",md:"0"}
            }} >Musa eCommerce </Typography>
            </Link>
            { user?.logged && <Button onClick={handleLogout} className="menuButton">
                <Logout />
            </Button> }
        
        </Toolbar>
        </AppBar>
}

export default NavBar