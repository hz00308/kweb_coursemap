import { NavLink } from 'react-router';
import './home.css'

function Home() {
    return (
      <div className="container">
        <div className="header">
          <div className="title">정보대학 이수체계도</div>
          <div className="auth">
            <span>로그인</span>
            <span>회원가입</span>
          </div>
        </div>
        <div className="main">
          <NavLink to="/coursemap/cs" className="department">컴퓨터학과</NavLink>
          <NavLink to="/coursemap/ds" className="department">데이터과학과</NavLink>
          <NavLink to="/" className="department"></NavLink>
        </div>
      </div>
    );
}

export default Home