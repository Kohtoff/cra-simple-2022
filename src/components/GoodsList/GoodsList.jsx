import React from 'react'
import { Grid } from '@mui/material'
import { goods } from "../../data";
import GoodsItem from '../GoodsItem/GoodsItem';


export default function GoodsList() {
    return (
        <Grid container sx={{mt: '100px'}}>
            {goods.map(item => (
                <GoodsItem key={item.id} data={item}/>
            ))}
        </Grid>
    )
}
