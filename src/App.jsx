import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'


function App() {

  return (
    <>
      
      <div className='bg-[#F3F3F3]'>
      <Header></Header>

      <div className="mx-auto max-w-7xl mt-8 ">
      <Home></Home>
      </div>
      </div>
      
      
      
    </>
  )
}

export default App
