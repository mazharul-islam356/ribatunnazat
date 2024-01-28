import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100  shadow-md mb-3  px-4">
        
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52"
            >

<li>
              <NavLink to="/"> হোম </NavLink>
            </li>
            <li>
              <NavLink to="/intro"> পরিচিতি </NavLink>
            </li>
            <li>
              <NavLink to="/commitment"> অঙ্গীকারনামা </NavLink>
            </li>
            <li>
              <NavLink to="/member"> সদস্য </NavLink>
            </li>
            <li>
              <NavLink to="/chada"> চাঁদা </NavLink>
            </li>

            </ul>
          </div>
          <img className="w-10 lg:ml-12" src="https://i.ibb.co/nQDwDZt/ribatunnazat-logo-removebg-preview.png" alt="" />
          <a className="btn btn-ghost text-xl">রিবাতুননাজাত এসোসিয়েশন</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 relative lg:left-80 md:right-0">

            <li>
              <NavLink to="/"> হোম </NavLink>
            </li>
            <li>
              <NavLink to="/intro"> পরিচিতি </NavLink>
            </li>
            <li>
              <NavLink to="/commitment"> অঙ্গীকারনামা </NavLink>
            </li>
            <li>
              <NavLink to="/member"> সদস্য </NavLink>
            </li>
            <li>
              <NavLink to="/chada"> চাঁদা </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
