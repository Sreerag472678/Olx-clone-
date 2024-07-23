'use client';

import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.css';
import Dropdown from 'react-bootstrap/Dropdown';
import LoginPopup from '../LoginPopup/page'
import 'reactjs-popup/dist/index.css';
import { useState } from "react";
import SearchBar from "../SearchBar/page";


type Lang = 'English' | 'हिंदी';

const Page: React.FC = () => {
  
  const [lang, setLang] = useState<Lang>('English');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [buttonVal,showButton] = useState(0)
  return (
    <header>
      <Link href='/'>
        <div className="logo">
          <img className='nav-img' src='https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png' alt='Logo' />
        </div>
      </Link>
      <div className="inputbox1">
        <input type='text' placeholder='india' />
        <img className="img-search" src='https://cdn-icons-png.freepik.com/256/163/163723.png?semt=ais_hybrid' alt='Search' />
        <img className="img-search1" src='https://static.thenounproject.com/png/551749-200.png' alt='Search' />
      </div>
      {/* <div className="inputbox2">
        <input className='search-secondary' placeholder='Find Cars, Mobile Phones and More' type='text'  value={query} name="search" />
        <div className='serachbox'>
          <img className="img-search2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTea_UXyIuzxKogybrcEm3Bfeojq1Bn_eVeRsXzU2Y0WXzR5JMIlt0xc-ohdE6yqcpM44&usqp=CAU' />
        </div>
      </div> */}
      <SearchBar/>
      <Dropdown>
        <Dropdown.Toggle className="btn" id="dropdown-basic">
          {lang}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setLang('English')}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => setLang('हिंदी')}>हिंदी</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
       <LoginPopup/>

     
      <div className='img-container'>
        <Link href='/Category'>
          <img
            src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
            alt='Sell'
            className='img-sell'
          />
          <h3 className='h3'>+ Sell</h3>
        </Link>
      </div>
    </header>
  );
}

export default Page;
