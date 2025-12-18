import { useState } from 'react';
import './comments.css';
import Header from '../components/Header';

const initialComments = [
  {
    id: 1,
    user: '유저1',
    date: '3일 전',
    content: '#선이수: 컴퓨터 프로그래밍 I\n예시 댓글입니다.',
    likes: 13,
    isLiked: true,
  },
  {
    id: 2,
    user: '유저2',
    date: '3일 전',
    content: '#후이수: 알고리즘\n예시 댓글입니다.',
    likes: 7,
    isLiked: false,
  },
];

const CommentItem = ({ comment }: { comment: typeof initialComments[0] }) => {
  return (
    <div className="course-comment-item">
      <div className="profile-image-placeholder"></div>
      <div className="course-comment-body">
        <div className="course-comment-meta">
          <span className="course-comment-username">{comment.user}</span>
          <span className="course-comment-date">{comment.date}</span>
        </div>

        <div className="course-comment-content">
          {comment.content.split('\n').map((line, index) => ( <p key={index}>{line}</p> ))}
        </div>
        
        <div className="course-comment-actions">
          <div className="like-container">
            {comment.isLiked ? (
              <svg viewBox="0 0 24 24" className="icon heart-filled"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="icon heart-outline"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            )}
            <span className="like-count">{comment.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentInput = () => {
  return (
    <div className="course-comment-input-container">
      <textarea
        placeholder="댓글 추가..."
        className="course-comment-textarea"
        rows={3}
      />
    </div>
  );
};

function Comments() {
  return (
    <div className="page-container">
      <Header />

      <div className="main-content">
        <div className="course-header">
          <button className="back-button">
            <svg viewBox="0 0 24 24" className="icon back-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
            뒤로가기
          </button>
          <h2>자료구조</h2>
        </div>

        <div className="course-description">
          <p>자료구조는 데이터를 효율적으로 사용할 수 있도록 조직화하는 방법을 배우는 과목입니다.</p>
          <p>자료구조는 C, C++, 파이썬 등의 언어로 구현될 수 있습니다.</p>
        </div>

        <div className="course-comments-section-header">
          <span className="course-comments-count-label">댓글 201개</span>
          <div className="sort-container">
            <span>정렬 기준</span>
            <svg viewBox="0 0 24 24" className="icon dropdown-icon"><path d="M7 10l5 5 5-5z"></path></svg>
          </div>
        </div>

        <CommentInput />

        {initialComments.map((comment) => (<CommentItem key={comment.id} comment={comment} />))}

      </div>
    </div>
  );
}

export default Comments;