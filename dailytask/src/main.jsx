import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Component/Card.jsx'
import CreateTodo from './Component/CreateTodo.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
    <CreateTodo/>
  

    
  </StrictMode>,
)
