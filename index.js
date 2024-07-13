import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import Controlled_Components from './components/ControlledComponents.jsx'
import Conditional_Rendering from './components/ConditionalRendering.jsx'
import List_Rendering from './components/ListRendering.jsx'
import Dynamic_Styling from './components/DynamicStyling.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Controlled_Components />
    <Conditional_Rendering />
    <List_Rendering />
    <Dynamic_Styling />
  </React.StrictMode>,
)