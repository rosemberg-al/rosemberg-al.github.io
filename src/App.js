
import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";


function App() {
  const [currentValue, setCurrentValue] = useState(null)
  const [currentCurrency, setCurrentCurrency] = useState("USD")

  const getCotation = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then( res =>{
      console.log("value", res.data.bpi)
      setCurrentValue(res.data.bpi)
    })

  }

  const getValue = () => {
    if (currentValue!==null) {
      return currentValue[currentCurrency]['rate']
    }
    return "0.0000"
  }

  useEffect(() => {
    getCotation()
    setInterval(getCotation, 30000)
  },[])

  /*
  teste
  */

  let n1 = "10"
  n1 = Number(n1)

  let n2 = "oi"
  n2 = Number(n2)
  
  const n3 = n2 || 20
  const n4 = String (n1)

  console.log(n1)
  console.log(typeof n1)
  console.log(n2)
  console.log('isNaN',isNaN(n2))
  console.log(typeof n2)
  console.log(n3)
  console.log(typeof n3)
  console.log(n4)
  console.log(typeof n4)

  /*
  teste
  */

  return (    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AttachMoneyOutlinedIcon />
          </Avatar>          
          <Typography component="h1" variant="h5">
            BTC -> USD
          </Typography>
          <Typography component="h1" variant="h5">
            Current Value
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"              
              fullWidth
              id="cotation"
              disabled
              value={getValue()}
            />            
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={getCotation}
            >
              Refresh
            </Button>            
          </Box>
        </Box>        
      </Container>
  );
}

export default App;
