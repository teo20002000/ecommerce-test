
import {  type JSX } from "react";
import NavBar from "../components/navbar"
import { Grid } from "@mui/material";

interface Props {
    children: JSX.Element ,
    setSearch?: (p: string) => void,
    setDrawerOpen?: (p: boolean) => void 
}


function Base ({children, setSearch, setDrawerOpen}: Props) {

    return <Grid container spacing={2} fixed="true">
                <Grid item size={{xs: 12}}>
                    <NavBar setDrawerOpen={setDrawerOpen} setSearch={setSearch} />
            </Grid>
                <Grid item size={{xs:0, md:2}} />
                <Grid item size={{xs:12, md:8}}>
                    {children}
                </Grid>
                   
            </Grid>
    
}

export default Base