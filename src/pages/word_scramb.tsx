import { useState, useEffect } from "react";

const WORDS = [
	"Apple",
	"Watermelon",
	"Orange",
	"Pear",
	"Cherry",
	"Strawberry",
	"Grape",
	"Guava",
    "Mango",
    "Papaya"
]

export default function WordScramb() {
	const [isPlayOn, setIsPlayOn] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [correctWord, setCorrectWord] = useState("");
	const [scrambledWord, setScrambledWord] = useState("");

	const [message, setMessage] = useState("");

	const handleInputChange = (event: { target: { value: string; }; }) => {
		setInputValue(event.target.value.toUpperCase());
	};

	const selectWord = () => {
		const randomIndex = Math.floor(Math.random() * WORDS.length);
		const tempWord = WORDS[randomIndex];
		return tempWord;
	};

	const handleButtonClick = () => {
		if (inputValue !== "") {
			if (correctWord === inputValue) {
				setMessage("Correct Answer");
			} else {
				setMessage("Wrong Answer");
			}
		}
	};

	const handleStartGame = () => {
		setIsPlayOn(true);
		setInputValue("");
		setMessage("");

		const word = selectWord().toUpperCase();
		setCorrectWord(word);
		setScrambledWord(constructScrambledWord(word));
		//setScrambledWord(constructScrambledWordModernJS(word));
	};

	const constructScrambledWord = (word: string) => {
		const shuffledArray = word.split("");
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray.join("");
	};

	useEffect(() => {
		let clearMessage: number | undefined;
		if (message === "Wrong Answer") {
			clearMessage = setTimeout(() => setMessage(""), 800);
		}

		return () => {
			if (clearMessage) {
				clearTimeout(clearMessage);
			}
		};
	}, [message]);

	return (
        <div className="container">
             <a href="/" className="mt-5 mb-5 btn btn-outline-primary px-4 py-2">Back</a>
             <h3 className="text-center mb-4">Word Scramble</h3>

		<div className='word_scramble row'>
			{!!message && (
				<div className='message'>
					<p> {message}</p>
				</div>
			)}

			<div className='content col-md-6'>
				{isPlayOn ? (
					<>
						<div className='board'>
							{correctWord.split("").map((el, i) => (
								<span key={`${el}_${i}`} className='square_bg'>
									{inputValue[i]}
								</span>
							))}
						</div>
						<p className='scrambled_word'>{scrambledWord}</p>
						<div className='field'>
                            <input type="text" className="form-control" onChange={handleInputChange} value={inputValue}/>
                            <button type="button" className="btn btn-primary mt-4" onClick={handleButtonClick}>Cek jawaban</button>
						</div>
					</>
				) : (
                    <button type="button" className="btn btn-primary mt-4" onClick={handleStartGame}>Mulai</button>
				)}

				{isPlayOn && (
                    <button type="button" className="btn btn-primary mt-4" onClick={handleStartGame}>Ganti kata</button>
				)}
			</div>
		</div>

        </div>
	);
};