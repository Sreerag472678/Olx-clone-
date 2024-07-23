'use client'

import React from 'react';
import './page.css'; 
import Link from "next/link";
function Page() {
  return (
    <div style={{marginTop:"70px"}}>
      <div className="subnav">
      <div className="dropdown">
  <a className="dropdown-toggle1"  role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border:"non",outline:"0"}}>
   <strong>ALL CATEGORIES</strong>
  </a>
  <ul className='dropdown-menu'>
    <li><a className="dropdown-item" >English</a></li>
    <li><a className="dropdown-item" > हिंदी</a></li>
  </ul>
</div>
<div>
      <Link className='sublink' href="#" >Cars</Link>
        <Link className='sublink' href="#"> Motorcycles</Link>
        <Link className='sublink' href="#">Mobile Phones</Link>
        <Link className='sublink' href="#">For Sale: Houses & Apartments</Link>
        <Link className='sublink' href="#">Scooters</Link>
        <Link className='sublink' href="#">Commercial & Other Vehicles</Link>
        <Link className='sublink' href="#">For Rent: Houses & Apartments</Link>
      </div>
      </div>
     
    </div>
  );
}

export default Page;
