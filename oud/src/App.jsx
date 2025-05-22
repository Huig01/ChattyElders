import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./CSS/index.css";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Vrienden from "./pages/Vrienden";
import Posts from "./pages/Posts";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<Login />} />      
      <Route path="/posts" element={<Posts />} />
      <Route path="/vrienden" element={<Vrienden />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

