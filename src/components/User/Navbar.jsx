import { BsFillSunFill } from "react-icons/bs";
import { Container } from "../";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../hooks";

const logo = "../logo.png";

const Navbar = () => {
  const { toggleTheme } = useTheme();
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;

  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="h-10" src={logo} alt="" />
          </Link>

          <ul className="flex space-x-4 items-center">
            <li>
              <button
                onClick={toggleTheme}
                className="dark:bg-white bg-dark-subtle p-1 rounded"
              >
                <BsFillSunFill className="text-secondary" size={24} />
              </button>
            </li>
            <li>
              <input
                type="text"
                className="border-2 border-dark-subtle rounded p-1 bg-transparent text-xl outline-none focus:border-white transition text-white"
                placeholder="Search..."
              />
            </li>
            {isLoggedIn ? (
              <li className="text-white font-semibold text-lg">
                <Link to="/">Logout</Link>
              </li>
            ) : (
              <li className="text-white font-semibold text-lg">
                <Link to="/auth/signin">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
