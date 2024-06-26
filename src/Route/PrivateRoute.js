import React from 'react'
import ProductDetail from '../Pages/ProductDetail'
import { Navigate } from 'react-router'

  {/*
  authentication의 state가 true냐 false냐에 따라서
  true면 상품 디테일을 보여주고
  false면 로그인 페이지를 보여준다
  */}
  
const PrivateRoute = ({authentication}) => {
  return authentication ===
  true?
  <ProductDetail/>
  :
  <Navigate to='/Login'/>
}

export default PrivateRoute