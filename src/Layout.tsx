import { Outlet, NavLink } from "react-router-dom";

const activeStyle = {
  textDecoration: "underline",
};

function Layout() {
  return (
    <>
      <header>
        <h1>React Context Workshop</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Default Context
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fast"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Fast Context
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
