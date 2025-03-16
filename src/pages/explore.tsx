import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import GoalCard from '@/components/GoalCard';
import { getPublicGoals, getTrendingGoals, searchGoals } from '@/data/goals';
import { Goal } from '@/types';

export default function Explore() {
  const [activeTab, setActiveTab] = useState<'all' | 'trending'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setGoals(searchGoals(searchQuery));
    } else {
      setIsSearching(false);
      setGoals(activeTab === 'all' ? getPublicGoals() : getTrendingGoals());
    }
  }, [searchQuery, activeTab]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setGoals(searchGoals(searchQuery));
      setIsSearching(true);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    setGoals(activeTab === 'all' ? getPublicGoals() : getTrendingGoals());
  };

  const handleTabChange = (tab: 'all' | 'trending') => {
    setActiveTab(tab);
    if (!isSearching) {
      setGoals(tab === 'all' ? getPublicGoals() : getTrendingGoals());
    }
  };

  const handleGoalUpdate = () => {
    if (isSearching) {
      setGoals(searchGoals(searchQuery));
    } else {
      setGoals(activeTab === 'all' ? getPublicGoals() : getTrendingGoals());
    }
  };

  return (
    <Layout>
      <Head>
        <title>Explore Learning Journeys</title>
        <meta name="description" content="Discover learning journeys from other users" />
      </Head>

      <div className="card">
        <div className="explore-header">
          <h1>Explore Learning Journeys</h1>
        </div>

        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search by title, description, or tags"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {isSearching && (
            <button 
              type="button" 
              className="btn-secondary"
              onClick={handleClearSearch}
            >
              Clear
            </button>
          )}
          <button type="submit" className="btn">Search</button>
        </form>

        {!isSearching && (
          <div className="tabs">
            <div 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => handleTabChange('all')}
            >
              All Goals
            </div>
            <div 
              className={`tab ${activeTab === 'trending' ? 'active' : ''}`}
              onClick={() => handleTabChange('trending')}
            >
              Trending
            </div>
          </div>
        )}

        {isSearching && (
          <h2 style={{ marginBottom: '1rem' }}>
            Search results for "{searchQuery}" ({goals.length})
          </h2>
        )}

        {goals.length === 0 ? (
          <p>No goals found. {isSearching ? 'Try a different search term.' : 'Be the first to share your learning journey!'}</p>
        ) : (
          <div className="goal-grid">
            {goals.map((goal) => (
              <GoalCard 
                key={goal.id} 
                goal={goal} 
                onUpdate={handleGoalUpdate} 
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
} 