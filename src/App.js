import './App.css';
import Planets from "./components/Planets/planets";
import Statistics from "./components/Statistics/statistics";
import Navbar from "./components/Navbar/navbar";
import {Route} from "react-router-dom";


function App() {


  return (
    <div className="app-wrapper">
      <nav className="app-wrapper__buttons">
        <Navbar/>
      </nav>
      <div className="app-wrapper__content">
          <Route path='/planets'
                 render={()=><Planets/>
                 }
          />
          <Route path='/statistics'
                 render={()=><Statistics/>
                 }
          />
      </div>
    </div>
  );
}

export default App;
