import React, {useState} from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import MainVisual from './MainVisual';
import db from '../db.json'; // db.json 파일을 가져옵니다.

const ProductAll = () => {
  const [productList, setProductList]=useState([]);
  const [query, setQuery]=useSearchParams();
  const getProducts = async()=>{
    let searchQuery = query.get('q')||"";
    
    const products = db.products;
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(filteredProducts);

    setProductList(filteredProducts);
  } 
  useEffect(()=>{
    getProducts();
  },[query]);
  return (
    <div className='ProductAll'>
      <MainVisual/>
      <div className="ProductInner">
      {Array.isArray(productList) && productList.length > 0 ? (
        productList.map((item) => (
          <ProductCard item={item} key={item.id}/>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
    </div>
  )
}

export default ProductAll