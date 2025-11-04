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
          <NavLink to="/coursemap/cs"><button className="department">컴퓨터학과</button></NavLink>
          <NavLink to="/coursemap/ds"><button className="department">데이터과학과</button></NavLink>
          <NavLink to="/"><button className="department"></button></NavLink>
          {/* html a 안에 html button을 넣는 건 valid html이 아니므로 수정 필요 */}
        </div>
      </div>
    );
}

export default Home