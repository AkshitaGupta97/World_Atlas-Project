import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Country } from './Pages/Country'
import { Home } from './Pages/Home'
import { AppLayout } from './Components/Layout/AppLayout'
import { ErrorPage } from './Pages/ErrorPage'
import { CountryDetails } from './Pages/CountryDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
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
        path:'country/:id',
        element: <CountryDetails />
      },
      {
        path:'contact',
        element: <Contact />
      }
    ]
  }

])



function App() {
  
  return(
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )

  
}

export default App


// install react-icons -> npm install react-icons --save