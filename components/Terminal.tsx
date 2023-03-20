import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/css/terminal.module.css";
import PreviousInputs from "./PreviousInputs";
import TerminalText from "./TerminalText";

const Terminal = () => {
	const promptRef = useRef() as any;
	const [inputs, setInputs] = useState([] as string[]);
	const [currentInput, setCurrentInput] = useState(0) as [
		number,
		React.Dispatch<React.SetStateAction<number>>
	];
	const [pressedEnter, setPressedEnter] = useState(false) as [
		boolean,
		React.Dispatch<React.SetStateAction<boolean>>
	];

	useEffect(() => {
		scrollToBottom();
	}, [inputs]);

	useEffect(() => {
		setInputs([...inputs, "welcome"]);
		setCurrentInput(currentInput + 1);
		promptRef.current.focus();
	}, []);

	//stores the event value in a stack
	const handleInput = (e: any) => {
		console.log(e.key);
		if (e.key === "Enter") {
			const input = e.target.value;
			setInputs([...inputs, input]);
			setCurrentInput(currentInput + 1);
			setPressedEnter(true);
			if (input === "clear") {
				setInputs([]);
				setCurrentInput(0);
			}

			e.target.value = "";
		}
		//have up and down arrow keys scroll through the stack
		else if (e.key === "ArrowUp") {
			console.log(inputs);
			if (currentInput > 0) {
				setCurrentInput(currentInput - 1);
				e.target.value = inputs[currentInput - 1];
			}

			setPressedEnter(false);
		} else if (e.key === "ArrowDown") {
			if (currentInput < inputs.length) {
				setCurrentInput(currentInput + 1);
				if (inputs[currentInput + 1] === undefined) e.target.value = "";
				else e.target.value = inputs[currentInput + 1];
			}
			setPressedEnter(false);
		} else {
			setPressedEnter(false);
		}
	};

	const scrollToBottom = () => {
		promptRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className={styles.bg}
			onClick={(e) => {
				promptRef.current.focus();
			}}
		>
			<div>
				<PreviousInputs inputs={inputs} pressedEnter={pressedEnter} />
			</div>

			<div className={styles.container}>
				<TerminalText />
				<input
					id="prompt"
					ref={promptRef}
					className={styles.prompt}
					type="text"
					onKeyDown={(e) => {
						handleInput(e);
					}}
				/>
			</div>
		</div>
	);
};

export default Terminal;
