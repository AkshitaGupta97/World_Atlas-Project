import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Country } from './Pages/Country'
import { Home } from './Pages/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'about',
    element: <About />
  },
  {
    path:'country',
    element: <Country />
  },
  {
    path:'contact',
    element: <Contact />
  },
])



function App() {
  
  return(
    <>
    return <RouterProvider router={router}></RouterProvider>
    </>
  )

  
}

export default App


// install react-icons -> npm install react-icons --save