import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@mui/material";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchCountries(await fetchCountries());
		};

		fetchAPI();
	}, []);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
				<option value="">Global</option>
				{fetchedCountries.map((country, i) => (
					<option key={i} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
