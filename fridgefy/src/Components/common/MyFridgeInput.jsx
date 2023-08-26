import React, { useContext, useState } from "react";
import { MyFridgeContext } from "../../Context/MyFridgeContext";
import styled from "styled-components";
import dummyIngredients from "../../../assets/data/ingredients.json";
function MyFridgeInput() {
	const { fridge, addIngredientToFridge } = useContext(MyFridgeContext);

	const [searchQuery, setSearchQuery] = useState("");
	const [suggestedIngredients, setSuggestedIngredients] = useState([""]);

	function clearInput() {
		setSearchQuery(" ");
	}

	const handleAddToFridge = () => {
		const ingredientValue = document.querySelector("input").value;
		const fridgeArray = Object.keys(fridge).map((key) => fridge[key].name);
		if (ingredientValue) {
			if (!fridgeArray.includes(ingredientValue) && ingredients.includes(ingredientValue)) {
				addIngredientToFridge(ingredientValue, false);
			} else if (fridgeArray.includes(ingredientValue)) {
				alert("Ingredient already in the fridge");
				clearInput();
			}
		}
		if (!ingredients.includes(ingredientValue)) {
			alert("Not an Ingredient");
			clearInput();
		}
		clearInput();
	};

	let ingredients = [];
	const uniqueIngredients = new Set();
	dummyIngredients.forEach((element) => {
		const ingredientName = element.ingredient;
		if (
			!uniqueIngredients.has(ingredientName) &&
			ingredientName.toLowerCase().includes(searchQuery.toLowerCase())
		) {
			uniqueIngredients.add(ingredientName);
			ingredients.push(ingredientName);
		}
	});

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setSearchQuery(inputValue);
		const suggested = ingredients.filter((ingredient) =>
			ingredient.toLowerCase().includes(inputValue.toLowerCase())
		);
		setSuggestedIngredients(suggested);
	};
	// console.log(ingredients);

	return (
		<StyledDiv>
			<input
				type="text"
				placeholder="Search ingredient..."
				value={searchQuery}
				onChange={handleInputChange}
				list="ingredient-list"
			/>
			<button id="AddFridgeButton" onClick={handleAddToFridge}>
				Add to Fridge
			</button>
			<datalist id="ingredient-list">
				{suggestedIngredients
					.filter((item, index) => index <= 4)
					.map((ingredient, index) => (
						<Options key={index} value={ingredient} />
					))}
			</datalist>
		</StyledDiv>
	);
}

export default MyFridgeInput;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 1rem;
	input {
		border-radius: 0.5rem;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.4rem;
	}
	button {
		background-color: #ffca3a;
		box-shadow: 2px 2px black;
		margin-left: 0.5rem;
		border-radius: 2.5rem;
		cursor: pointer;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.2rem;
	}
`;

const Options = styled.option`
	background-color: black;
`;
