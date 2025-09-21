import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductListingPage from './pages/ProductListingPage'
import Sidebar from './components/Sidebar'


function App() {
  

  return (
    <>
      <div className='flex flex-col min-h-screen min-w-screen'>
        <Navbar className='w-full flex-shrink-0'/>
        <main className='flex flex-1 md:mx-5 mt-20 mb-5 gap-4 w-screen'>
          <aside className='hidden md:block'><Sidebar/></aside>
          
          <section className='w-full'>
            <ProductListingPage/>
            
          </section>
        </main>
              <Footer className='w-full flex-shrink-0'/>
      </div>
        
    </>
  )
}

export default App
