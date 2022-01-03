import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getData } from "../api/Api.js";
import Information from "./Information.jsx";
import axios from "axios";

const useStyles = makeStyles({
  component: {
    padding: 10,
    display: "flex",
    background: "#445A6F",
  },
  input: {
    color: "#fff",
    marginRight: 15,
  },
  labelRoot: {
    fontSize: 15,
    color: "#fff",
  },
  button: {
    background: "#e67e22",
    color: "#fff",
    width: 150,
    height: 40,
    marginTop: 5,
  },
});
const Form = () => {
  const classes = useStyles();

  const [data, setWeatherData] = useState();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [click, setClick] = useState(false);

  // use use effect to call a api from api folder

  useEffect(() => {
    const weatherInfo = async () => {
      city &&
        (await getData(city, country).then((response) => {
          setWeatherData(response.data);
          console.log(response.data);
        }));
    };
    weatherInfo();
    setClick(false);
    //console.log(response.data); //promise me se data .then krke nikalte ha
    //console.log(getData()); //it check the promise fulfilled or not

    // getData().then((response) => {
    //   setWeatherData(response.data);
    //   console.log(response.data);
    // });
  }, [click]);

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  return (
    <>
      <Box className={classes.component}>
        <TextField
          InputProps={{ className: classes.input }}
          onChange={(e) => handleCityChange(e.target.value)}
          className={classes.input}
          label="City"
          InputLabelProps={{
            classes: { root: classes.labelRoot },
          }}
        />

        <TextField
          InputProps={{ className: classes.input }}
          onChange={(e) => handleCountryChange(e.target.value)}
          className={classes.input}
          label="Country"
          InputLabelProps={{
            classes: { root: classes.labelRoot },
          }}
        />
        <Button
          variant="contained"
          onClick={() => setClick(true)}
          className={classes.button}
        >
          Get Weather
        </Button>
      </Box>
      <Information data={data} city={city} country={country} />
    </>
  );
};

export default Form;
