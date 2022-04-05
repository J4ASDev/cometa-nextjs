import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'
import { Box } from '@mui/system'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'

import Typography from '../atoms/Typography'

import CUOTAS from '../../consts/cuotas.json'
import AccordionComponent from '../atoms/Accordion'
import dateFormat from '../../utils/dateFormat'

function HomeTemplate({ name, ordersByStatus }) {
  return (
    <Box>
      <Head>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
      </Head>

      <Box marginBottom={3}>
        <Typography variant='h3' align='center' marginBottom={0} fontSize={24}>Estudiante</Typography>
        <Typography variant='h4' align='center'>{name}</Typography>
      </Box>

      {Object.entries(ordersByStatus)?.map(([key, orders]) => (
        <AccordionComponent key={key} title={`Cuotas ${CUOTAS[key]}`}>
          {orders?.map(({ name, id, price, interest, due }) => (
            <Grid container>
              <Grid item xs={6} md={7}>
                <Typography fontSize={12}>{name}</Typography>
                <Typography fontSize={10}>{dateFormat(due)}</Typography>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography fontSize={12}>${price}</Typography>
                <Typography fontSize={10}>Interes: ${interest}</Typography>
              </Grid>
              <Grid item>
                <Checkbox value={id} />
              </Grid>
            </Grid>
          ))}
        </AccordionComponent>
      ))}      
    </Box>
  )
}

HomeTemplate.propTypes = {
  name: PropTypes.string,
  orders: PropTypes.array
}

export default HomeTemplate