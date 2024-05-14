import React,{ useState }from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Header = ({ setAuthentication, authentication }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const goToLogin = () => {
    navigate("/login");
  };
  const clickLogout = () => {
    setAuthentication(false);
    navigate("/");
  };

  const search =(event)=>{
    if(event.key==="Enter")
    event.preventDefault();
    let keyword =event.target.value;
    console.log("keyword", keyword);
    navigate(`/?q=${keyword}`);
  }

  return (
    <div className='Header'>
      <div className="Header_inner">
        <div className='topBanner'>KAKAOTALK FRIENDS 10% OFF SPECIAL COUPON</div>
        <div className='Nav'>
          <Link to="/" className='logo'>
          <img alt="search" src={process.env.PUBLIC_URL + '/Images/logo.png'}/>
          </Link>
          <ul>
            <li><Link to="/">SHOP</Link></li>
            <li><Link to="/">BRAND</Link></li>
            <li><Link to="/">COLLAB</Link></li>
            <li><Link to="/">STYLING</Link></li>
            <li><Link to="/">STORES</Link></li>
          </ul>
          <div className='User'>
          <p
              to="/Login"
              className="Login"
              onClick={authentication == true ? clickLogout : goToLogin}
            >
              {authentication == true ? "로그아웃" : "로그인"}
            </p>
            <form className='Search'>
              <input type="text" placeholder='SERCH' onKeyDown={search}/>
              <img alt="search" src={process.env.PUBLIC_URL + '/Images/icons/icons_search.svg'}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header