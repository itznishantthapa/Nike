import React from 'react'
import Navbar from './components/Navbar'
import Text from './components/Text'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'

function App() {
  return (
    <>

      <div className='bg-[#ADB5BD] h-screen'>
        <Navbar></Navbar>
        <Text></Text>
      </div>
      <SecondPage/>
      <ThirdPage/>
    </>
  )
}

export default App