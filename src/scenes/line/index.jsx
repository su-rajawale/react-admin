import React from 'react'
import { Box } from '@mui/material'
import LineChart from '../../components/LineChart'
import Header from '../../components/Header'

const Line = () => {
  return (
    <Box m='20px'>
        <Header title='Line Chart' subtitle='Simple Line Chart'/>
        <Box height='65vh' m='40px'>
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line