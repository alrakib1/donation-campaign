import { NavLink } from "react-router-dom";
import './nav.css'
const Nav = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-col gap-5 md:flex-row justify-between items-center mt-12">
        <div>
            <img src="../../../src/assets/Logo.png" alt=""/>
        </div>
        <div>
        <ul className="flex gap-6">
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/donation'>Donation</NavLink>
            </li>
            <li>
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
