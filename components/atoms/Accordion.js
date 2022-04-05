import React from 'react'
import PropTypes from 'prop-types'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Typography from '../atoms/Typography'

function AccordionComponent({ title, children }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography variant='p' fontWeight='bold'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

AccordionComponent.propTypes = {
  student: PropTypes.string,
  orders: PropTypes.node
}

export default AccordionComponent