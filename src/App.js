import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./components/routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <AppRoutes />
        </div>
      </div> */}
      <div className='main-dev flex flex-col w-screen h-screen overflow-x-hidden'>
        <div className='h-[10%]'>
        <Navbar />
        </div>
        <div className=' h-[90%]'>
        <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
