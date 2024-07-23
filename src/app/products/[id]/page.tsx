'use client'

import React from 'react'
import Image from 'next/image'; 
import Navbar from '../../Navbar/page'
import { Button } from 'react-bootstrap'; 
import './page.css'
import LoginPopup from '../../LoginPopup/page'
interface Parameter {
  params: { id: string };
}

type Product = {
  id: number;
  Addtitle: string;
  Price: number;
  Images: string;
  Discription: string;
  Location: string;
  Brand: string;
  Year: string;
  Phone: string;
  State: string;
  District: string;
};

export async function Productsidefetch(): Promise<Product[]> {
  const res = await fetch('http://127.0.0.1:8001/productLists1/');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}

async function Page({ params }: Parameter) {
  const data = await Productsidefetch();
  const newId= parseInt(params.id)

  const product = data.find(p => p.id === newId);
console.log(product)

  if (!product) {
    console.log("Product not found");
    return <p>Product not found</p>;
  }
function handle(){
  <LoginPopup/>
}
  return (
    <div>
      <Navbar/>
      <div className='detail-img'>
        <Image
          src={`http://127.0.0.1:8001${product.Images}`}
          width={798}
          height={510}
          alt="product-image"
        />
      </div>
      <div className='detail'>
        <p className='price'>₹{product.Price}</p>
        <p className='text-pd'>{product.Brand}</p>
        <p className='text-pd'>{product.Location}</p>
      </div >
      <div className='detail-chat'>
        <Button variant="info" className='btn-chat' onClick={handle}>Chat with seller</Button>
       <p className='phone'>{product.Phone}</p>
      </div>
      <div className='detail-location'>
        <h5 className='text-pd'>Posted in</h5>
        <p className='text-pd'>{product.Location}</p>
        <p className='text-pd'>{product.State}</p>
        <p className='text-pd'>{product.District}</p>
      </div>
      <div className='detail-Description'>
        <h5 className='Details'>Details</h5>
        <p className='Details'>{product.Addtitle}</p>
        <p className='Details'>{product.Year}</p>
        <h5 className='discription'>Description</h5>
        <p className='Details'>{product.Discription}</p>
        <br />
      </div>
    </div>
  );
}

export default Page;
