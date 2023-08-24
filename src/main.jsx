import React from 'react'
import ReactDOM from 'react-dom/client'
import "./css/style.css"
import {PrimerComponente} from './components/PrimerComponente';
import { Nav } from './components/Nav';
import { Likes } from './components/Likes';
import { CardBwidget } from './components/CardBwidget';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

    <Nav/>

    <PrimerComponente/>
    
    <Likes/>
   
  </React.StrictMode>,
)
