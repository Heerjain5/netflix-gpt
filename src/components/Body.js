import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.js";
import Login from "./Login.js";


const Body=()=>{
    const appRouter = createBrowserRouter([{
        path:"/",
        element:<Login/>
    },
    {
    path:"/browse",
    element:<Browse/>
    }
    
    
    ]);

    return (
  <div>
    <RouterProvider router={appRouter}/>
  </div>
    );
}
export default Body;