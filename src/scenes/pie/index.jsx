import React from 'react'
import { Box } from '@mui/material'
import PieChart from '../../components/PieChart'
import Header from '../../components/Header'

const Pie = () => {
  return (
    <Box m='20px'>
        <Header title='Pie Chart' subtitle='Simple Pie Chart'/>
        <Box height='75vh' m='40px'>
            <PieChart />
        </Box>
    </Box>
  )
}

export default Pie