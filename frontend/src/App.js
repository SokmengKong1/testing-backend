import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Student } from "./component/Student";
import { CreatStudent } from "./component/CreatStudent";
// import Teacher from "./component/Teacher";
import { Update } from "./component/Update";
import List from "./component/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/create" element={<CreatStudent />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
