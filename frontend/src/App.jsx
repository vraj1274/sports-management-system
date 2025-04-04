import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Activity from "./pages/Activity";
import Register from "./pages/Register";
import GameDetails from "./pages/GameDetails";
import HomeRegistration from "./pages/HomeRegistration";
import Sports from './pages/Sports'
import Sports_day from './pages/Sports_day'
import MyProfile from './pages/MyProfile'
import MyCertificates from "./pages/MyCertificates";
import Laksh from './pages/Laksh'
import Nss from './pages/Nss'
import Ncc from './pages/Ncc'
import ContactUs from './pages/ContactUs'
import Nss_Registration from './pages/Nss_Registration'
import Ncc_Registration from './pages/Ncc_Registration'
import Nss_Events from './pages/Nss_Events'
import LiveScorePage from './pages/LiveScorePage'
import MatchDetailsPage from './pages/MatchDetailsPage'
import FirstRegistration from "./pages/FirstRegistration";
import UpcomingNssRegistration from "./pages/UpcomingNssRegistration";


function App() {
  // const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/login" || location.pathname === "/signup";
  
  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities/sports" element={<Sports/>}/>
        <Route path="/activities/sports/sports-day" element={<Sports_day />} />
        <Route path="/activities/sports/sports-day/:game" element={<GameDetails />} />
        <Route path="/activities/sports/sports-day/:game/register"element={<Register />}/>
        <Route path="/home-registration" element={<HomeRegistration />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-certificates" element={<MyCertificates />} />
        <Route path="/activities/laksh" element={<Laksh />} />
        <Route path="/activities/nss" element={<Nss />} />
        <Route path="/activities/ncc" element={<Ncc />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/activities/nss/nss-registration" element={<Nss_Registration />} />
        <Route path="/activities/nss/nss-events" element={<Nss_Events />} />
        <Route path="/activities/ncc/ncc-registration" element={<Ncc_Registration />} />
        <Route path="/live-score" element={<LiveScorePage />} />
        <Route path="/live-score/match/:matchId" element={<MatchDetailsPage />} />
        <Route path="/signup/registration" element={<FirstRegistration/>}/>
        <Route path="/activities/nss/nss-events/nss-upcoming-registration" element={<UpcomingNssRegistration/>}/>
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
