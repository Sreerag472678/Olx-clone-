import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import { Container } from 'react-bootstrap';
import ProductDetails from './[productid]/page';

type Product = {
  id: number;
  Addtitle: string;
  Price: number;
  Images: string;
  description: string;
  Location: string;
};

export async function Serversidefetch(): Promise<Product[]> {
  const res = await fetch('http://127.0.0.1:8001/productLists1/');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}

const Page: React.FC = async () => {
  const data: Product[] = await Serversidefetch();
  console.log(data);

  return (
    <div>
      <Container>
        <h5 className="h5">Fresh Recommendations</h5>
      </Container>
      <Container>
        {data.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} passHref>
            <div className="card" style={{ width: '18rem', textDecoration: 'none' }}>
              <Image
                src={`http://127.0.0.1:8001${product.Images}`}
                className="card-img-top"
                alt={product.Addtitle}
                width={300}
                height={200}
              />
              <div className="card-body">
                <h5>
                  <strong>{product.Addtitle}</strong>
                </h5>
                <p className="card-text">{product.Addtitle}</p>
                <p>{product.Location}</p>
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default Page;
