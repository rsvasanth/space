import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { RouterProvider } from 'react-router-dom'
import router from './router'
function App() {
  

  return (
	<div className="App">
	  <FrappeProvider
	  >
 <RouterProvider router={router} />
	  </FrappeProvider>
	</div>
  )
}

export default App
