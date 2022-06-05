import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import ButtonAppBar from "./ButtonAppBar";
import Box from '@mui/material/Box';
const PersonalInfoForm = ({nextStep}) => {
    
  const [info, setInfo] = useState({
    firstName: "",
    lastName:"",
    postPosition: "",
    email: ""
  })

  const handleInput = input => e => {
    setInfo({...info, [input]: e.target.value });
    console.log(info)
  }

    return (
     <>
      <ButtonAppBar />
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 5, width: '25ch' },
        display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      }}
      noValidate
      
      autoComplete="off"
    >
            <TextField margin="normal" onChange={handleInput('firstName')}
              fullWidth label="First Name"  variant="standard"  />
            <TextField margin="normal" onChange={handleInput('lastName')}
              fullWidth label="Last Name"  variant="standard"  />
            <TextField margin="normal" onChange={handleInput('postPosition')}
              fullWidth label="Post Position"  variant="standard" />
            <TextField margin="normal" onChange={handleInput('email')}
              fullWidth label="Email" autoComplete="email" type="email"  variant="standard" />
            <Button 
              color="primary"
              variant="contained"
              onClick={() => nextStep()}
              sx={{ mt: 3, }}
            >Next</Button>
            <Button 
              color="secondary"
              sx={{ mt: 3, mb: 2,  }}
              variant="contained"
              onClick={() => nextStep()}
            >Back</Button>
            </Box>
     </>
     
    )
}

export default PersonalInfoForm;