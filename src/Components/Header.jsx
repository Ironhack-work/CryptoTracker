import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { makeStyles } from '@mui/styles';

import React from 'react'

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer,'
    }
}))

const Header = () => {
    return (
        <AppBar color='transparent' position='static' >
            <Container>
                <Toolbar>
                    <Typography>Crypto Tracker</Typography>
                    <Select varfiant='outlined'
                        style={{
                            width: 100,
                            height: 40,
                            marginLeft: 15,
                        }}>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'EUR'}>EUR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar >

    )
}

export default Header
