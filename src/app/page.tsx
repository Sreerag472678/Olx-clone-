import Navbar from './Navbar/page'
import ImgScroll from './ImgScroll/page'
import Subnavbar from './Subnavbar/page'
import Products from './products/page'
import Category from './Category/page'

// import Footer from './Footer/page'
export default function Home() {
  return (
    <div>
<Navbar/>
<br/>
<Subnavbar/>
<ImgScroll/>
<Products/>
    </div>
  );
}
