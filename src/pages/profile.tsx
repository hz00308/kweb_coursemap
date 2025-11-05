import { NavLink } from 'react-router'
import { useState } from 'react'
import './profile.css'

function Profile() {
    {/*일단 닉네임, 아이디 구분 여부가 불확실하므로 닉네임==아이디라고 생각하고 닉네임만 작성함*/}
    const [nickname, setNickname] = useState("cose22"); // 추후 실제 닉네임 받아와서 사용
    const [comments, setComments] = useState(["예시 데이터1", "예시 데이터2", "예시 데이터3", "예시 데이터4", "예시 데이터5"]); // 추후 실제 댓글 목록 받아와서 사용
    return (
      <div className="container">
        <div className="header">
          <NavLink to="/" className="title">정보대학 이수체계도</NavLink>
          <div className="nickname">{nickname} 님</div>
        </div>
        <div className="profile-main">
          <div className="profile-section">
            <div className="profile-title">내 프로필</div>
            <div className="profile-card">
              <div className="profile-image"></div>
              <div className="title">{nickname}</div>
            </div>
            <button className="edit-btn">프로필 수정</button>
            {/*추후 프로필 수정 페이지 만들면 NavLink로 교체할 예정*/}
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