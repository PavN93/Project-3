const router = require('express').Router();
const fetch = require ('node-fetch');

router.get('/getplants', async(req,res)=>{ 
    
        const queryURL = `https://trefle.io/api/v1/plants/search?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw&q=${search}`;
        const fetch_response = await fetch(queryURL);
        const payload = await fetch_response.json();
        console.log("response data", payload);
        setPlants(payload.results || []); // if search fails fallbacks or empty array
        });
        

      
        console.log("apicall error", error);
        
  