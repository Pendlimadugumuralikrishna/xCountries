import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./Card.css"
function Countries() {
  const [countries, setCountries] = useState([]);
  async function getCountries() {
    let url = "https://xcountries-backend.azurewebsites.net/all";
    try {
      const res = await axios.get(url);
      const countries = res.data;
      return countries;
    } catch (e) {
      console.error(`Error fetching data: ${e}`);
    }
  }
  useEffect(() => {
    async function onLoad() {
      let data = await getCountries();
      setCountries(data);
    }
    onLoad();
  }, []);
  return (
    <div>
         <Grid container spacing={2}>
      {countries.map((country, index) => {
        return (
         
            <Grid item xs={12} lg={2} sm={4} md={3}key={index}>
              <div  className="card" >
                <div className="card-content">
                <img src={country.flag} alt={country.name} />
                <h1>{country.name}</h1>
                </div>
                
              </div>
            </Grid>
     
        );
      })}
           </Grid>
    </div>
  );
}

export default Countries;
