import React from 'react'
import Header from './components/common/header'
import Footer from './components/common/footer'
import MainPage from './components/pages/mainPage'

const MainApp = () => {
  const projectTitle = "My Blog"
  const slogan = "My React Blog Site"
  return (
    <div>
    <Header title={projectTitle} slogan={slogan}/>
    <MainPage/>
    <Footer />
    </div>
  )
}

export default MainApp