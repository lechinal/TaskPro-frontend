 
import "react-datepicker/dist/react-datepicker.css";
 
import { Button } from "@mui/material";

import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
 
import AddBoxIcon from '@mui/icons-material/AddBox';


export const CardForm = () => {
   
  return (
     <div>
    <Box
    sx={{
      mt: 1,
      background: "#fff",
      borderRadius: '8px',
      padding: '40px',
      '@media (max-width: 375px)': {
          padding: '24px 5px',                 
        },             
    }}>

          <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={10}
          sx={{ height: "50px" }}
        />
        </Box>
          
          <Button >
                <AddBoxIcon/>
                <p>Add</p>
              </Button>
     </div>
  );
};
 