import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Auth/LandingPage";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import HomePage from "./Pages/Display/HomePage";
import DisplayProperty from "./Pages/Display/DisplayProperty";
import MyProfile from "./Pages/Display/MyProfile";
import UpdateProperty from "./Pages/Display/UpdateProperty";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/display-property/:id" element={<DisplayProperty />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/update-property/:id" element={<UpdateProperty />} />
      </Routes>
    </>
  );
}

export default App;
