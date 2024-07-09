import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Academy from './components/Academy/Academy'
import TopCreator from './components/TopCreator/TopCreator'
import Dictionary from './components/Dictionary/Dictionary'
import Footer from './components/Footer/Footer'
import Basic from './components/Basic/Basic'
import Airdrop from './components/Airdrops/Airdrop'
import Rewards from './components/Rewards/Rewards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Academy/>
      {/* <Basic></Basic>
      <Airdrop></Airdrop>
      <Rewards></Rewards> */}
      <TopCreator></TopCreator>
      <Dictionary></Dictionary>
      <Footer></Footer>
    </div>
  )
}

export default App
