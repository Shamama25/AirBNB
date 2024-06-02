import logo from "../../public/logo.png";
import { Search, BellDot } from "lucide-react";
function Header() {
  return (
    <>
      <header className="text-gray-600 body-font shadow-lg h-28 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="Logo" height={74} width={90} />
          </a>
          <nav className="md:ml-auto h-12 md:mr-auto pl-2 flex flex-wrap border-4 h-20 w-10/11 rounded-full border-gray-100 items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Lisbon</a>
            <a className="mr-5 hover:text-gray-900">2 JUNE, 2024</a>
            <a className="mr-5 hover:text-gray-900">Add Guest</a>
            <a className="mr-5 hover:text-gray-900">
              <Search />
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <BellDot />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjpd2NIE_OFIRYZEwlaFXpL6akEq7CefuEA&s"
              alt="Profile"
              className="w-20 h-20 p-2 rounded-full"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
