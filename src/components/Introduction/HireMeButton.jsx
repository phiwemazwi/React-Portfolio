import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
function HireMeButton() {
  return (
    <div>
      <Stack spacing={2} sx={{bgcolor: '#84a8ba', borderRadius: 30, overflow: 'hidden'}}>
        <Button a href='linkedin.com/in/phiwe-mazwi' variant="contained" sx={{ fontFamily: 'Kanit, sans-serif', bgcolor: '#3da9c4' }}
          endIcon={<BusinessCenterIcon />} size='medium'>Hire Me</Button>
      </Stack>
    </div>
  )
}

export default HireMeButton
