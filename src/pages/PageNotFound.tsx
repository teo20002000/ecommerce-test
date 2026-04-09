import { Paper, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Evidenzia = styled(Typography) `
    background-color: #21305b;
    color: white;
    padding-left: 8px;
    padding-right: 8px;
`

function PageNotFound() {

    return <Paper elevation={3} sx={{padding:"24px",minHeight:"800px", margin:"40px"}}>
        <Typography variant="h1" component="h1">Pagina Non Trovata</Typography>
        <Typography variant="body1">La pagina che stai cercando non esiste
                            GG per tutti <Evidenzia variant="span">Musa</Evidenzia>
        </Typography>
    </Paper>

}

export default PageNotFound