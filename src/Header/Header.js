import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-4xl font-serif">Tv-Show</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
    
      <li><Link to='/bookings'>Booking</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Header;