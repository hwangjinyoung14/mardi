import React from 'react'
import { useNavigate } from 'react-router'

const Login = ({setAuthentication}) => {
    const navigate = useNavigate();
    const loginUser =(event)=>{
    event.preventDefault();
    console.log('로그인 버튼 동작');
    navigate('/');
    setAuthentication(true);
  }
  
  return (
    <div className='Login'>
      <h3>SING IN</h3>
      <form onSubmit={(event)=>loginUser(event)}>
        <input type="email" placeholder='이메일을 입력해 주세요' id='email'/>
        <label htmlFor="password"></label>
        <input type="password" placeholder='비밀번호를 입력해 주세요' id='password'/>
        <label htmlFor="checkbox" className='checkBox'>
          <input type="checkbox" id='checkbox'/>
          Remember me
        </label>
        <button className='loginBtn' type='submit'>로그인</button>
      </form>
    </div>
  )
}

export default Login