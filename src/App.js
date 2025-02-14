
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./components/routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
  <Router>
    <Navbar />
    <AppRoutes />
  </Router>
  
    
   
  );
}

export default App;
