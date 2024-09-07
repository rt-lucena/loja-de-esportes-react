import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Contato from './routes/Contato.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'

const router = createBrowserRouter([
  {
    //Elemento Pai
      path:'/',element:<App/>,
      errorElement:<Error/>,

    //Elemento Filho
      children:[
        {path:'/',element:<Home/>},
        {path:'/contato',element:<Contato/>},
        {path:'/produtos',element:<Produtos/>},
        {path:'/sobre',element:<Sobre/>},
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
