import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesLayoutLlanos from './routes/RoutesLayoutLlanos';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<RoutesLayoutLlanos />
			</BrowserRouter>
		</div>
	);
}

export default App;
