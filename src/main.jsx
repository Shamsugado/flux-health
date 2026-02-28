import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// our entry point was appjsx but we have changed it to routerjsx 
// because we want to use the router in our app and we need to wrap our app 
// with the router provider to use the router in our app. 
// so we have created a routerjsx file and moved our app component to that file and 
// wrapped it with the router provider and exported the router from that file and imported it in main.jsx 
// and rendered it inside the router provider. so now we can use the router in our app.