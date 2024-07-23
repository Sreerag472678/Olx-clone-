import React from 'react'

function page() {
  return (
    <div className='foot'>
      <footer className="footer" style={{
    position:"absolute",
    top: "199rem"
}}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>POPULAR CATEGORIES</h3>
          <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Jobs</li>
            <li>Mobile Phones</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>TRENDING SEARCHES</h3>
          <ul>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h3>OLX</h3>
          <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal &amp; Privacy information</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 OLX</p>
      </div>
    </footer>
    </div>
  )
}

export default page
