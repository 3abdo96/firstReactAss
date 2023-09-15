import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min.js";

import Layout from "./Components/Layout/Layout";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

function App() {
  const router = createHashRouter([{ path: "startFramework", element: <Layout />,children:[{index:true,element:<Home/>},
    {path:"about",element:<About/>},{path:"portfolio",element:<Portfolio/>},{path:"contact",element:<Contact/>},
    {path:"*",element:<div className="d-flex justify-content-center align-items-center h-100 w-100  text-bg-light">
      <h2>
        Not Found
      </h2>
    </div>}
  ] },
{path:"*",element:<div className="d-flex justify-content-center align-items-center h-100 w-100  text-bg-light">
      <h2>
        Not Found
      </h2>
    </div>}
]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
