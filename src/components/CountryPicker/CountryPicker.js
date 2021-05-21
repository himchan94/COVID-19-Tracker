import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, StylesProvider } from "@material-ui/core";

import styles from "./Country.modules.css";

import { fetchCountries } from "../../api";
const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          // onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">United States</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
