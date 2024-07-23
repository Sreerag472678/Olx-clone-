'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import './page.css'


function Page() {
 const [value, setVal] = useState('');
  const [id, setId] = useState('');



 return (
   <div>
    <div>
     {/* <Link href='/'> <img src='https://w7.pngwing.com/pngs/666/148/png-transparent-app-application-arrow-back-button-design-direction-dot-element-flat.png' style={{width:"32px",height:"33px",position:"fixed",top:"3rem",left:"3rem"}}/></Link> */}
    </div>
    <h3>POST YOUR AD</h3>
     <div>
       <div className="tab">
         <h5>CHOOSE A CATEGORY </h5>
         <div className='main-button'>
           <button className="tablinks" onClick={() => setVal('cars')}>Cars</button><br />
           <button className="tablinks" onClick={() => setVal('Properties')}>Properties</button><br />
           <button className="tablinks" onClick={() => setVal('Mobiles')}>Mobiles</button><br />
           <button className="tablinks" onClick={() => setVal('Jobs')}>Jobs</button><br />
           <button className="tablinks" onClick={() => setVal('Bikes')}>Bikes  </button><br />
           <button className="tablinks" onClick={() => setVal('Electronics')}>Electronics & Appliances  </button><br />
           <button className="tablinks" onClick={() => setVal('Commercial')}>Commercial Vehicles & Spares  </button><br />
           <button className="tablinks" onClick={() => setVal('Furniture')}>Furniture  </button><br />
           <button className="tablinks" onClick={() => setVal('Fashion')}>Fashion  </button><br />
           <button className="tablinks" onClick={() => setVal('Books')}>Books, Sports & Hobbies  </button><br />
           <button className="tablinks" onClick={() => setVal('Pets')}>Pets  </button><br />
           <button className="tablinks" onClick={() => setVal('Services')}>Services  </button><br />
         </div>
         <div className={value === 'cars' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}><button className="tablinks" onMouseEnter={()=>setId('cars')}>Cars</button></Link> <br />
         </div>
         <div className={value === 'Properties' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('For-Sale-Houses-Apartments')} >For Sale: Houses & Apartments </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('For-Rent-Houses-Apartments')}>For Rent: Houses & Apartments </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Lands-Plots')} >Lands & Plots </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks"  onMouseEnter={()=>setId('For-Rent-Shops-Offices')}>For Rent: Shops & Offices  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks"  onMouseEnter={()=>setId('For-Sale-Shops-Offices')}>For Sale: Shops & Offices  </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks"  onMouseEnter={()=>setId('Guest-Houses')}>PG & Guest Houses   </button></Link><br />
         </div>
         <div className={value === 'Mobiles' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Mobile-Phones')}>Mobile Phones  </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Accessories')}>Accessories   </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Tablets')}>Tablets   </button></Link><br/>
         </div>
         <div className={value === 'Jobs' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Data-entry')} >Data entry & Back office  </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Sales-Marketing')}>Sales & Marketing   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('BPO-Telecaller')}>BPO & Telecaller   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Driver')}>Driver </button></Link><br/>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Office-Assistant')}>Office Assistant  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Delivery-Collection')}>Delivery & Collection  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Teacher')}>Teacher   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Cook')}>Cook  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Receptionist')}>Receptionist & Front office  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Operator-Technician ')}>Operator & Technician  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('IT Engineer-Developer ')}>IT Engineer & Developer  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Hotel-TravelExecutive')}>   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Accountant')}>Accountant  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Designer')}>Designer  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Other-Jobs')}>Other Jobs  </button> </Link><br />
         </div>
         <div className={value === 'Bikes' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Motorcycles')}>Motorcycles</button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Scooters')}>Scooters </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Spare-Parts')}>Spare Parts</button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Spare-Parts')}>Spare Parts</button></Link><br />
         </div>
         <div className={value === 'Electronics' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('TVs-Video-Audio')}>TVs, Video - Audio   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Kitchen-OtherAppliances ')}>Kitchen & Other Appliances   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Computers-Laptops')}>Computers & Laptops   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Cameras-Lenses')}>Cameras & Lenses  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Games-Entertainment')}>Games & Entertainment  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Fridges')}>Fridges  </button></Link><br/>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Computer-Accessories')}>Computer Accessories   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Hard-Disks-Printers-Monitors')}>Hard Disks, Printers & Monitors </button></Link><br/>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('ACs')}>ACs  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Washing-Machines')}>Washing Machines</button></Link><br />
         </div>
         <div className={value === 'Commercial' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Commercial')}>Commercial & Other Vehicles   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Spare-Parts')}>Spare Parts   </button></Link><br />
         </div>
         <div className={value === 'Furniture' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Sofa-Dining')}>Sofa & Dining   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Beds-Wardrobes')}>Beds & Wardrobes   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('HomeDecor-Garden')}>Home Decor & Garden  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Kids')}>Kids Furniture   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Household-Items')}>Other Household Items  </button></Link><br />
         </div>
         <div className={value === 'Fashion' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}><button className="tablinks" onMouseEnter={()=>setId('Men')}>Men </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}><button className="tablinks" onMouseEnter={()=>setId('Women')}>Women</button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Kids')}>Kids </button></Link><br />
         </div>
         <div className={value === 'Books' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Books')}>Books  </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Gym')}>Gym & Fitness   </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Musical')}>Musical Instruments   </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Sports')}>Sports Equipment  </button></Link> <br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Other-Hobbies')}>Other Hobbies  </button></Link> <br />
         </div>
         <div className={value === 'Pets' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Fishes-Aquarium')}>Fishes & Aquarium   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Pet-FoodAccessories')}>Pet Food & Accessories   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Dogs')}>Dogs   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Other')}>Other Pets  </button></Link><br />
         </div>
         <div className={value === 'Services' ? 'sub-button' : 'container'}>
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Education')}>Education & Classes   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Tours')}>Tours & Travel   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}>  <button className="tablinks" onMouseEnter={()=>setId('Electronics')}>Electronics Repair & Services   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Health')}>Health & Beauty   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}><button className="tablinks" onMouseEnter={()=>setId('Home-Renovation')}>Home Renovation & Repair  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Cleaning')}>Cleaning & Pest Control  </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Legal')}>Legal & Documentation Services   </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}> <button className="tablinks" onMouseEnter={()=>setId('Packers-Movers')}>Packers & Movers </button></Link><br />
         <Link href={`/Category/${value}/${id}`} style={{color:'black',textDecoration:'none'}}><button className="tablinks" onMouseEnter={()=>setId('Other-Services')}>Other Services  </button></Link><br />
         </div>
       </div>
     </div>
   </div>
 )
}
export default Page
