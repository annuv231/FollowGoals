import React, { useState } from 'react';
import { format } from 'date-fns';
import { Comment, Reply } from '@/types';
import { addReply, likeComment, likeReply } from '@/data/goals';

interface CommentItemProps {
  goalId: string;
  taskId: string;
  comment: Comment;
  onUpdate: () => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ goalId, taskId, comment, onUpdate }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [showReplies, setShowReplies] = useState(false);

  const handleLikeComment = () => {
    likeComment(goalId, taskId, comment.id);
    onUpdate();
  };

  const handleLikeReply = (replyId: string) => {
    likeReply(goalId, taskId, comment.id, replyId);
    onUpdate();
  };

  const handleAddReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    addReply(goalId, taskId, comment.id, replyText);
    setReplyText('');
    setShowReplyForm(false);
    setShowReplies(true);
    onUpdate();
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <div className="user-info">
          {comment.userAvatar ? (
            <img 
              src={comment.userAvatar} 
              alt={comment.userName} 
              className="avatar"
            />
          ) : (
            <div className="avatar-placeholder">{comment.userName.charAt(0)}</div>
          )}
          <span className="username">{comment.userName}</span>
        </div>
        <span className="comment-date">
          {format(new Date(comment.createdAt), 'MMM d, yyyy h:mm a')}
        </span>
      </div>
      
      <div className="comment-content">
        <p>{comment.text}</p>
      </div>
      
      <div className="comment-actions">
        <button 
          className="action-button" 
          onClick={handleLikeComment}
        >
          ❤️ {comment.likes}
        </button>
        <button 
          className="action-button" 
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          💬 Reply
        </button>
        {comment.replies.length > 0 && (
          <button 
            className="action-button" 
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? 'Hide replies' : `Show replies (${comment.replies.length})`}
          </button>
        )}
      </div>
      
      {showReplyForm && (
        <form onSubmit={handleAddReply} className="reply-form">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="form-control"
            rows={2}
          />
          <div className="form-actions">
            <button 
              type="button" 
              className="btn-secondary"
              onClick={() => setShowReplyForm(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn">Reply</button>
          </div>
        </form>
      )}
      
      {showReplies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <ReplyItem 
              key={reply.id} 
              reply={reply} 
              onLike={() => handleLikeReply(reply.id)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface ReplyItemProps {
  reply: Reply;
  onLike: () => void;
}

const ReplyItem: React.FC<ReplyItemProps> = ({ reply, onLike }) => {
  return (
    <div className="reply">
      <div className="comment-header">
        <div className="user-info">
          {reply.userAvatar ? (
            <img 
              src={reply.userAvatar} 
              alt={reply.userName} 
              className="avatar"
            />
          ) : (
            <div className="avatar-placeholder">{reply.userName.charAt(0)}</div>
          )}
          <span className="username">{reply.userName}</span>
        </div>
        <span className="comment-date">
          {format(new Date(reply.createdAt), 'MMM d, yyyy h:mm a')}
        </span>
      </div>
      
      <div className="comment-content">
        <p>{reply.text}</p>
      </div>
      
      <div className="comment-actions">
        <button 
          className="action-button" 
          onClick={onLike}
        >
          ❤️ {reply.likes}
        </button>
      </div>
    </div>
  );
};

export default CommentItem; 