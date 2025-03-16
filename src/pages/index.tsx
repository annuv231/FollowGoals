import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import GoalCard from '@/components/GoalCard';
import { getGoals, addGoal, getTrendingGoals } from '@/data/goals';
import { Goal } from '@/types';

export default function Home() {
  const [goals, setGoals] = useState<Goal[]>(getGoals().filter(goal => goal.userId === 'user1'));
  const [trendingGoals, setTrendingGoals] = useState<Goal[]>(getTrendingGoals().slice(0, 3));
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newGoal = addGoal({ title, description });
    setGoals([...goals, newGoal]);
    setTitle('');
    setDescription('');
    setShowForm(false);
  };

  const handleGoalUpdate = () => {
    setGoals(getGoals().filter(goal => goal.userId === 'user1'));
    setTrendingGoals(getTrendingGoals().slice(0, 3));
  };

  return (
    <Layout>
      <Head>
        <title>Learning Journey</title>
        <meta name="description" content="Track your learning goals and progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="card">
        <div className="task-header">
          <h2>My Learning Goals</h2>
          <button 
            className="btn" 
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : 'Add Goal'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="form-group" style={{ marginTop: '1rem' }}>
            <div className="form-group">
              <label htmlFor="title">Goal Title</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What do you want to learn?"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your learning goal"
                rows={3}
              />
            </div>
            <button type="submit" className="btn">Create Goal</button>
          </form>
        )}

        <div style={{ marginTop: '1.5rem' }}>
          {goals.length === 0 ? (
            <p>You don't have any learning goals yet. Create your first one!</p>
          ) : (
            goals.map((goal) => (
              <div key={goal.id} className="card" style={{ marginBottom: '1rem' }}>
                <h3 className="task-title">{goal.title}</h3>
                <p>{goal.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>
                    Created: {format(new Date(goal.createdAt), 'MMM d, yyyy')}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>
                    {goal.tasks.length} tasks
                  </span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <Link href={`/goal/${goal.id}`}>
                    <button className="btn">View Details</button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="card">
        <div className="task-header">
          <h2>Trending Goals</h2>
          <Link href="/explore">
            <button className="btn-secondary">View All</button>
          </Link>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          {trendingGoals.length === 0 ? (
            <p>No trending goals available.</p>
          ) : (
            <div className="goal-grid">
              {trendingGoals.map((goal) => (
                <GoalCard 
                  key={goal.id} 
                  goal={goal} 
                  onUpdate={handleGoalUpdate} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 