import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Banner from './components/banner'
import BestWork from './components/BestWork'
import AboutMe from './components/AboutMe'
import MySkills from './components/Myskills'
import Testimonial from './components/Testimonial'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Banner/>
      <BestWork/>
      <AboutMe/>
      <MySkills/>
    <Testimonial/>
      </Layout>
    </>
  )
}

export default App
