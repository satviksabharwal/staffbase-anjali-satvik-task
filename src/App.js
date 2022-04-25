import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import CreateIOU from "./CreateIOU";
import CreateUser from "./CreateUser";
import "./index.css";
import ListOfUser from "./ListOfUser";
import Navbar from "./Navbar";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" exact element={<ListOfUser />}/>
      <Route path="/createiou" element={<CreateIOU />}/>
      <Route path="/createuser" element={<CreateUser />}/>
      <Route path="/user" element={<User />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
