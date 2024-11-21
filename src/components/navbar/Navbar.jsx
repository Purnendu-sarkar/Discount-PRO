import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, User, Info, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Discount PRO</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="nav-link">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/brands" className="nav-link">
              <ShoppingBag className="h-5 w-5" />
              <span>Brands</span>
            </Link>
            {currentUser && (
              <Link to="/my-profile" className="nav-link">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            )}
            <Link to="/about" className="nav-link">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <img
                  src={currentUser.photoURL || ''}
                  alt={currentUser.displayName || 'User'}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    {currentUser.displayName}
                  </span>
                  <span className="text-xs text-gray-500">{currentUser.email}</span>
                </div>
                <button
                  onClick={() => logout()}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-700"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col space-y-4 mt-4 md:hidden">
            <Link to="/" className="nav-link">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/brands" className="nav-link">
              <ShoppingBag className="h-5 w-5" />
              <span>Brands</span>
            </Link>
            {currentUser && (
              <Link to="/my-profile" className="nav-link">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            )}
            <Link to="/about" className="nav-link">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>

            {/* User Actions inside Mobile Menu */}
            <div className="flex flex-col items-start space-y-4 mt-4">
              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <img
                    src={currentUser.photoURL || ''}
                    alt={currentUser.displayName || 'User'}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      {currentUser.displayName}
                    </span>
                    <span className="text-xs text-gray-500">{currentUser.email}</span>
                  </div>
                  <button
                    onClick={() => logout()}
                    className="flex items-center space-x-1 text-red-600 hover:text-red-700"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-start space-y-2">
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
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
