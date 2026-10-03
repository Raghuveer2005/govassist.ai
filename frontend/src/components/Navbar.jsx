import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    logout();
    setMenuOpen(false);
    navigate('/');
  }

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? 'text-brand-600' : 'text-slate-600 hover:text-slate-900'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="GovAssist AI Logo"
            className="h-9 w-9 rounded-lg object-contain shadow-sm border border-slate-100"
          />
          <span className="text-lg font-bold text-slate-900">GovAssist AI</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {user ? (
            <>
              <NavLink to="/dashboard" className={linkClass}>
                Dashboard
              </NavLink>
              <NavLink to="/profile" className={linkClass}>
                Profile
              </NavLink>
              <NavLink to="/recommendations" className={linkClass}>
                Recommendations
              </NavLink>
              <span className="text-sm text-slate-400">|</span>
              <span className="text-sm text-slate-600">Hi, {user.name?.split(' ')[0]}</span>
              <button onClick={handleLogout} className="btn-secondary !px-4 !py-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
              <Link to="/register" className="btn-primary !px-4 !py-2">
                Get Started
              </Link>
            </>
          )}
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-slate-700"></span>
          <span className="h-0.5 w-6 bg-slate-700"></span>
          <span className="h-0.5 w-6 bg-slate-700"></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {user ? (
              <>
                <NavLink to="/dashboard" className={linkClass} onClick={() => setMenuOpen(false)}>
                  Dashboard
                </NavLink>
                <NavLink to="/profile" className={linkClass} onClick={() => setMenuOpen(false)}>
                  Profile
                </NavLink>
                <NavLink
                  to="/recommendations"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Recommendations
                </NavLink>
                <button onClick={handleLogout} className="btn-secondary w-full">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClass} onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
                <Link
                  to="/register"
                  className="btn-primary w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
