import { h } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/Home';
import Tool from '../routes/Tool';

const App = () => (
	<div>
		<Router>
			<Home path="/" />
			<Tool path="tool" />
		</Router>
	</div>
)

export default App;
