import React from 'react'
import Header from '../components/Header'

import HomeRegistration from './HomeRegistration'
import LiveScorePage from '../components/BannerPage'
const Home = () => {
  return (
    <div className="mx-4">
      <Header />
      <LiveScorePage />
      <HomeRegistration />
    </div>
  );
}

export default Home