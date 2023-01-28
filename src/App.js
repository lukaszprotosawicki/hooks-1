import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [age, setAge] = useState(42);
	const [count2, setCount2] = useState(0);

	useEffect(() => {
		document.title = `Naciśnieto ${count2} razy`;
	});

	return (
		<div className="App">
			<h1>Hooks 1</h1>
			<div>
				<p>Naciśnięto {count} razy</p>
				<button onClick={() => setCount(count + 1)}>Naciśnij mnie</button>
			</div>
			<div>
				<p>Mam {age} lat</p>
				<button onClick={() => setAge(age + 1)}>Zwiększ wiek</button>
				<button onClick={() => setAge(age - 1)}>Zmniejsz wiek</button>
			</div>
			<div>
				<p>Naciśnięto {count2} razy</p>
				<button onClick={() => setCount2(count2 + 1)}>Naciśnij mnie</button>
			</div>
		</div>
	);
}

export default App;
