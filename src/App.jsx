import RootLayout from "./components/RootLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Umrah from "./pages/Umrah/Umrah";
import Hajj from "./pages/Hajj/Hajj";
import Tourpack from "./pages/TourPackage/Tourpack";
import Contact from "./pages/Contact/Contact";
import BlogPage from "./pages/Blog/BlogPage";
import Visapackage from "./pages/Visa/Visapackage";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/umrah" element={<Umrah></Umrah>}></Route>
      <Route path="/hajj" element={<Hajj></Hajj>}></Route>
      <Route path="/tour" element={<Tourpack></Tourpack>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
      <Route path="/visa" element={<Visapackage></Visapackage>}></Route>
      
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
