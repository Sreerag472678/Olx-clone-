import { useState, useEffect } from 'react'
import './page.css'
import Link from 'next/link'
function SearchBar() {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState(query)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query)
        }, 600)     

        return () => {
            clearTimeout(handler)
        }
    }, [query])

    useEffect(() => {
        const fetchData = async () => {
            if (debouncedQuery.length > 2) {
                setLoading(true);
                setError('');

                try {
                    const response = await fetch(`http://127.0.0.1:8001/products/search/?q=${debouncedQuery}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        setResults(data);
                    } else {
                        setResults([]);
                    }
                } catch (err) {
                    setError('Failed to fetch data');
                } finally {
                    setLoading(false);
                }
            } else {
                setResults([]);
            }
        }

        fetchData();
    }, [debouncedQuery])

    const onChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    }

    return (
        <div className='inputbox2'>
            <input
                className='search-secondary'
                placeholder='Find Cars, Mobile Phones and More'
                type='text'
                value={query}
                onChange={onChange} 
                name="search"
            />
            <div className='serachbox'>
                <img
                    className='img-search2'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTea_UXyIuzxKogybrcEm3Bfeojq1Bn_eVeRsXzU2Y0WXzR5JMIlt0xc-ohdE6yqcpM44&usqp=CAU'
                    alt='Search'
                />
            </div>
          
            {loading && <p>Loading...</p>}  
            {error && <p>{error}</p>}  
            {results.length > 0 && (
                <div>
                <div className='drop-list'>
                    {results.map((product) => (
                       <Link style={{color:"black",textDecoration:"none"}} href={`/products/${product.id}`}><div className='item' key={product.id}>{product.Addtitle}</div></Link> 
                    ))}
                </div>
                </div>  
            )}
            {results.length === 0 && !loading && !error }
        </div>
    )
}

export default SearchBar
