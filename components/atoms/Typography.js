import React from 'react'

import Typography from '@mui/material/Typography'

function TypographyComponent({ children, ...restOfProps }) {
  return <Typography color="#37352f" {...restOfProps}>{children}</Typography>
}

export default TypographyComponent