import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './profile.css'
import Header from "../components/Header";

function Profile() {
    const [username, setUsername] = useState<string | null>(null);
    const [nickname, setNickname] = useState<string | null>(null);
    const [comments, setComments] = useState(["예시 데이터1", "예시 데이터2", "예시 데이터3", "예시 데이터4", "예시 데이터5"]); // 추후 실제 댓글 목록 받아와서 사용
    
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedNickname = localStorage.getItem("nickname");

        if (storedUsername) setUsername(storedUsername);
        if (storedNickname) setNickname(storedNickname);

        // 없으면 더미데이터 (UI 점검용)
        if (!storedUsername) setUsername("dummy_username");
        if (!storedNickname) setNickname("더미더미");
    }, []);
    
    return (
      <div className="container">
        <Header />
        <div className="profile-main">
          <div className="profile-section">
            <div className="profile-title">내 프로필</div>
            <div className="profile-card">
              <div className="profile-image"></div>
              <div>
                <div className="profile-nickname">{nickname} 님</div>
                <div className="profile-username">{username}</div>
              </div>
            </div>
            <NavLink to="/profile-edit" className="edit-btn">프로필 수정</NavLink>
          </div>
          <div className="comments-section">
            <div className="profile-title">내가 작성한 댓글</div>
            <div className="comment-grid">
              {comments.map((item, idx) => (
                <div key={idx} className="comment-box">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    );
}

export default Profile