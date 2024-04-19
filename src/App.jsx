import "./App.css";
import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import { Routes, Route } from "react-router-dom";
import projectsData from "./projects-data.json";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import QueryStringExample from "./pages/QueryStringExample";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route  path="/" element={ <HomePage /> } /> */}
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />
        <Route
          path="/projects/:projectID"
          element={<ProjectDetailsPage projects={projectsData} />}
        />
        <Route path="/movie" element={<QueryStringExample />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

// https://www.airbnb.com/rooms/1072459209557991875?adults=1&category_tag=Tag%3A8522&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1823976719&search_mode=flex_destinations_search&check_in=2024-04-20&check_out=2024-04-25&source_impression_id=p3_1713522160_mbxVurfhQGoGRylJ&previous_page_section_name=1000&federated_search_id=8d58fff1-3218-49f2-838b-75b6d7eafb99
