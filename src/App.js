import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home"
import Products from "./Components/Products";
import Feature from "./Components/Feature";
import FirstPage from "./Components/FirstPage";


function App() {
  return (
   <>

<FirstPage/>
   <Routes>
    <Route  exact path="/" Component={Home}/>
    <Route path="/products" Component={Products}/>
    <Route path="/features" Component={Feature}/>
   </Routes>


  
   </>
  );
}

export default App;
