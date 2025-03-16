import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Goal } from '@/types';
import { likeGoal } from '@/data/goals';

interface GoalCardProps {
  goal: Goal;
  onUpdate: () => void;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal, onUpdate }) => {
  const completedTasks = goal.tasks.filter(task => task.completed).length;
  const totalTasks = goal.tasks.length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    likeGoal(goal.id);
    onUpdate();
  };

  return (
    <div className="goal-card">
      <div className="goal-card-header">
        <div className="user-info">
          {goal.userAvatar ? (
            <img 
              src={goal.userAvatar} 
              alt={goal.userName} 
              className="avatar"
            />
          ) : (
            <div className="avatar-placeholder">{goal.userName.charAt(0)}</div>
          )}
          <span className="username">{goal.userName}</span>
        </div>
        <span className="goal-date">
          {format(new Date(goal.createdAt), 'MMM d, yyyy')}
        </span>
      </div>

      <Link href={`/goal/${goal.id}`} className="goal-card-link">
        <div className="goal-card-content">
          <h3 className="goal-title">{goal.title}</h3>
          <p className="goal-description">{goal.description}</p>
          
          <div className="goal-progress">
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{progress}% complete</span>
          </div>
          
          <div className="goal-tags">
            {goal.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
        </div>
      </Link>

      <div className="goal-card-footer">
        <button 
          className="action-button" 
          onClick={handleLike}
        >
          ❤️ {goal.likes}
        </button>
        <span className="task-count">
          {totalTasks} {totalTasks === 1 ? 'task' : 'tasks'}
        </span>
      </div>
    </div>
  );
};

export default GoalCard; 