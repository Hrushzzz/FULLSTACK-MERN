import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Provider from redux
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(

    // Step 4 : Wrapping our entire App inside a Provider and gave access to our store.
    <Provider store = {store}>
        <App />
    </Provider>
    
)

// Provider store={store} --> store is a default method created by Redux(syntax) ,
// and there we are passing the store we created as a Prop.  -->  imported at line 5.