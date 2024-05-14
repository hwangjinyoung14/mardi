import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const goToPage = ()=>{
    navigate(`/Product/${item.id}`);
  }
  return (
    <div className='ProductCard' onClick={goToPage}>
      <img src={item?.img} alt="thumNail"/>
      <h3 className='SubTitle'>Conscious choice</h3>
      <span>{item?.tag.join(' | ')}</span>
      <h2 className='Title'>{item?.title}</h2>
      <p className='Price'>₩{item?.price}</p>
    </div>
  )
}

export default ProductCard

