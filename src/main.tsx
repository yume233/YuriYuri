import { createRoot } from 'react-dom/client'
// import App from './App'
import React from 'react'
import { Provider } from 'react-redux'
// import Props from './props'
import App from './App'
import store from 'state'
import './main.less'

createRoot(document.getElementById('main')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
