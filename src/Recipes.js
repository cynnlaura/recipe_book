import React from "react";
import { Button, TextField } from "@mui/material";

const axios = require('axios');
async function scrapeSite(link) {
  const { data } = await axios.get(link);
  console.log(data)
  return data
}

function Recipes() {


  return (
    <div style={{ display:'flex', justifyContent: 'center', marginTop: '20px' }}>
      <TextField id='link' label='Paste link to recipe here' size='small' width='50px' />
      <Button onClick={async() => {await scrapeSite(document.getElementById('link'))}} >Add recipe</Button>
    </div>
  )
}

export default Recipes;