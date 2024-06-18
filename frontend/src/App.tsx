import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import Signup from "./pages/Signup/page";
import Layout from "./layout";


const routes = [
  {
    path: "/",
    Component: Home,
    exact: true,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/login",
    Component: Login,
  },
]

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}

export default App;