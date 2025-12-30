import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FetchConfig from "./pages/FetchConfig";
import UpdateRemark from "./pages/UpdateRemark";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-slate-800 text-white py-3 fixed w-full">
        <div className="max-w-xl mx-auto flex justify-around">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-indigo-400" : ""
            }
          >
            Fetch Config
          </NavLink>
          <NavLink
            to="/update"
            className={({ isActive }) =>
              isActive ? "font-semibold text-indigo-400" : ""
            }
          >
            Update Remark
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<FetchConfig />} />
        <Route path="/update" element={<UpdateRemark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
