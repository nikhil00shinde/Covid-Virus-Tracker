import React from "react";

import { Chart, Cards, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
	state = {
		data: {},
	};

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	render() {
		const { data } = this.state;

		return (
			<div className={styles.container}>
				<Cards data={data} />
				<CountryPicker />
				<Chart />
			</div>
		);
	}
}

export default App;