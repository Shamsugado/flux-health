
import { Outlet } from 'react-router-dom'
import './App.css';
import Navbar from './compnents/Navbar';
import Footer from './compnents/Footer';


const App = () => {
  return (
    <>
    <Navbar/>
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'>
          <Outlet />
        </main>
    <Footer/>
    </>
  )
}

export default App

// The children of the route App will be rendered inside the outlet component in the app component.
// Every time we navigate to a route that is a child of the app route, the element of that route will be rendered inside the outlet component in the app component.
// For example, when we navigate to the home route, the element of the home route will be rendered inside the outlet component in the app component.
// This is how we can use the outlet component to render the children of a route inside the parent route.