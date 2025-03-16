import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import CommentItem from '@/components/CommentItem';
import { getGoalById, addTask, addComment, toggleTaskCompletion, likeGoal } from '@/data/goals';

export default function GoalDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const [newTask, setNewTask] = useState('');
  const [commentText, setCommentText] = useState('');
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  
  // Get goal data
  const goal = id ? getGoalById(id as string) : undefined;
  
  if (!goal) {
    return (
      <Layout>
        <div className="card">
          <p>Goal not found. <Link href="/" style={{ color: 'var(--primary-color)' }}>Go back to home</Link></p>
        </div>
      </Layout>
    );
  }
  
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    addTask(goal.id, newTask);
    setNewTask('');
    // Force re-render
    router.replace(router.asPath);
  };
  
  const handleAddComment = (e: React.FormEvent, taskId: string) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    addComment(goal.id, taskId, commentText);
    setCommentText('');
    setActiveTaskId(null);
    // Force re-render
    router.replace(router.asPath);
  };
  
  const handleToggleCompletion = (taskId: string) => {
    toggleTaskCompletion(goal.id, taskId);
    // Force re-render
    router.replace(router.asPath);
  };

  const handleLikeGoal = () => {
    likeGoal(goal.id);
    // Force re-render
    router.replace(router.asPath);
  };

  const handleUpdate = () => {
    // Force re-render
    router.replace(router.asPath);
  };
  
  const completedTasks = goal.tasks.filter(task => task.completed).length;
  const totalTasks = goal.tasks.length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  return (
    <Layout>
      <Head>
        <title>{goal.title} | Learning Journey</title>
        <meta name="description" content={goal.description} />
      </Head>
      
      <div className="card">
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'inline-block' }}>
            &larr; Back to Goals
          </Link>

          <div className="goal-card-header" style={{ padding: '0', marginTop: '1rem', marginBottom: '1rem' }}>
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

          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{goal.title}</h1>
          <p style={{ marginTop: '0.5rem' }}>{goal.description}</p>
          
          <div className="goal-tags" style={{ marginTop: '1rem' }}>
            {goal.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>

          <div className="goal-progress" style={{ marginTop: '1rem' }}>
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
              <span className="progress-text">{progress}% complete</span>
              <span className="progress-text">
                {completedTasks} of {totalTasks} tasks completed
              </span>
            </div>
          </div>

          <button 
            className="action-button" 
            onClick={handleLikeGoal}
            style={{ marginTop: '1rem' }}
          >
            ❤️ {goal.likes} likes
          </button>
        </div>
        
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem' }}>Tasks</h2>
          
          <form onSubmit={handleAddTask} className="form-group" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                className="form-control"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
                style={{ marginRight: '0.5rem' }}
              />
              <button type="submit" className="btn">Add</button>
            </div>
          </form>
          
          {goal.tasks.length === 0 ? (
            <p>No tasks yet. Add your first task to get started!</p>
          ) : (
            <div>
              {goal.tasks.map((task) => (
                <div key={task.id} className="task">
                  <div className="task-header">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleCompletion(task.id)}
                        style={{ marginRight: '0.75rem' }}
                      />
                      <span 
                        className="task-title"
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                      >
                        {task.title}
                      </span>
                    </div>
                    <button 
                      className="btn-secondary"
                      onClick={() => setActiveTaskId(activeTaskId === task.id ? null : task.id)}
                      style={{ padding: '0.25rem 0.5rem', fontSize: '0.9rem' }}
                    >
                      {activeTaskId === task.id ? 'Cancel' : 'Add Comment'}
                    </button>
                  </div>
                  
                  {activeTaskId === task.id && (
                    <form onSubmit={(e) => handleAddComment(e, task.id)} style={{ marginTop: '1rem' }}>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Add your comment"
                          rows={2}
                        />
                      </div>
                      <button type="submit" className="btn" style={{ marginTop: '0.5rem' }}>
                        Post Comment
                      </button>
                    </form>
                  )}
                  
                  {task.comments.length > 0 && (
                    <div style={{ marginTop: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>Comments</h4>
                      {task.comments.map((comment) => (
                        <CommentItem
                          key={comment.id}
                          goalId={goal.id}
                          taskId={task.id}
                          comment={comment}
                          onUpdate={handleUpdate}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem' }}>Explore More</h2>
        <p>Discover more learning journeys from other users:</p>
        <Link href="/explore">
          <button className="btn" style={{ marginTop: '1rem' }}>
            Explore Goals
          </button>
        </Link>
      </div>
    </Layout>
  );
} 