import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Layout from './layout.jsx'
import Single from './pages/Single.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

// protected route
// dynamic route
// nested route

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "service",
        element: <Services />
      },
      {
        path: "single/:id",
        element: <Single/>
      },
      {
        path: "*",
        element: <h1>Not found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)






// layout ki file root banaka outlet ka componenet render krwana haa
// router ka variable banayaa jiska undar createBroweserRouter ka function call krka aik array of object dedi
// router provider ka component call krwaka uska undar poori app pass krdi.