import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Formularioventa from "../component/formularioventa.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
			<Formularioventa/>
				
		</div>
	);
};
