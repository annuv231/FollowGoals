import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/">
            <h1>Learning Journey</h1>
          </Link>
          <nav className="header-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/explore" className="nav-link">Explore</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 