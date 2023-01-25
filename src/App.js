import "./App.css";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Hooks 1</h1>
			<div>
				<p>Naciśnięto {count} razy</p>
				<button onClick={() => setCount(count + 1)}>Naciśnij mnie</button>
			</div>
		</div>
	);
}

export default App;
