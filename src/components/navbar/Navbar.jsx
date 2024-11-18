import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, User, Info

 } from 'lucide-react';


const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">Discount PRO</span>
            </Link>
  
            <div className="flex items-center space-x-8">
              <Link to="/" className="nav-link flex gap-1 items-center">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/brands" className="nav-link flex gap-1 items-center">
                <ShoppingBag className="h-5 w-5" />
                <span>Brands</span>
              </Link>
              <Link to="/my-profile" className="nav-link flex gap-1 items-center">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              <Link to="/about" className="nav-link flex gap-1 items-center">
                <Info className="h-5 w-5" />
                <span>About</span>
              </Link>
            </div>


            {/* log in & Register */}
            <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
  
            
          </div>
        </nav>
      </header>
    );
};

export default Navbar;