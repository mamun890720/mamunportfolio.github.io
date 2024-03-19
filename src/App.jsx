import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Banner from './components/banner'
import BestWork from './components/BestWork'
import AboutMe from './components/AboutMe'
import MySkills from './components/Myskills'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Banner/>
      <BestWork/>
      <AboutMe/>
      <MySkills/>
      </Layout>
    </>
  )
}

export default App
