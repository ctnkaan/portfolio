import type { NextPage } from "next";
import Footer from "../components/Footer";
import Terminal from "../components/Terminal";
import styles from "../styles/css/index.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.bg}>
			<div className={styles.marginDiv} />
			<Terminal />

			<Footer />
		</div>
	);
};

export default Home;
