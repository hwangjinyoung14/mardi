import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import db from '../db.json'; 

const ProductDetail = () => {
  let{id}=useParams();
  let [product, setProduct]=useState(null);

  useEffect(() => {
    const selectedProduct = db.products.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]); // id가 변경될 때마다 useEffect가 실행

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ProductDetail'>
      <div className="detail">
        <div className="detail_left">
          <img alt="productImg" src={product?.img}/>
        </div>
        <div className="detail_right">
          <h2>{product?.title}</h2>
          <div className="goods_desc">
            <h3>{product?.title}</h3>
            <h4>{product?.price}</h4>
            <select>
              {product?.size.map((size, index)=>(
                <option key={index}>{size}</option>
              ))}
            </select>
          </div>
          <button type='submit'>장바구니 추가</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail