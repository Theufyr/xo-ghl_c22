import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Adopt from './pages/Adopt'
import Guide from './pages/Guide'
import Benevole from './pages/Benevole'
import Donation from './pages/Donation'


const router = createBrowserRouter ([
  {
    path : "/" ,
    element : <Home />
  },
   {
    path : "jadopte" ,
    element : <Adopt />
  },
   {
    path : "guide" ,
    element : <Guide />
  },
   {
    path : "benevole" ,
    element : <Benevole />
  },
   {
    path : "don" ,
    element : <Donation />
  }
]  
) ;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
