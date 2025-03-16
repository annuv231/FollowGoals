import { Goal, Task, Comment, Reply, User } from '@/types';

// Sample users
export const sampleUsers: User[] = [
  {
    id: 'user1',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 'user3',
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 'user4',
    name: 'Sarah Williams',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

// Current user (would come from auth in a real app)
export const currentUser: User = {
  id: 'user1',
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};

// Sample data for the application
export const sampleGoals: Goal[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'Master React.js and build modern web applications',
    createdAt: '2023-10-01',
    userId: 'user1',
    userName: 'John Doe',
    userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    likes: 42,
    isPublic: true,
    tags: ['programming', 'web development', 'javascript'],
    tasks: [
      {
        id: '1-1',
        title: 'Learn React basics',
        completed: true,
        comments: [
          {
            id: '1-1-1',
            text: 'Completed the official React tutorial',
            createdAt: '2023-10-05T14:30:00Z',
            userId: 'user1',
            userName: 'John Doe',
            userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            likes: 5,
            replies: [
              {
                id: '1-1-1-1',
                text: 'Great job! The official tutorial is a great starting point.',
                createdAt: '2023-10-05T15:45:00Z',
                userId: 'user2',
                userName: 'Jane Smith',
                userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
                likes: 2,
              },
              {
                id: '1-1-1-2',
                text: 'Did you find the hooks section challenging?',
                createdAt: '2023-10-05T16:20:00Z',
                userId: 'user3',
                userName: 'Alex Johnson',
                userAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
                likes: 1,
              }
            ]
          },
          {
            id: '1-1-2',
            text: 'Built a simple counter application',
            createdAt: '2023-10-06T10:15:00Z',
            userId: 'user1',
            userName: 'John Doe',
            userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            likes: 3,
            replies: []
          },
        ],
      },
      {
        id: '1-2',
        title: 'Learn React hooks',
        completed: false,
        comments: [
          {
            id: '1-2-1',
            text: 'Started learning useState and useEffect',
            createdAt: '2023-10-10T09:45:00Z',
            userId: 'user1',
            userName: 'John Doe',
            userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            likes: 2,
            replies: [
              {
                id: '1-2-1-1',
                text: 'useEffect can be tricky at first, but it\'s super powerful!',
                createdAt: '2023-10-10T10:30:00Z',
                userId: 'user4',
                userName: 'Sarah Williams',
                userAvatar: 'https://randomuser.me/api/portraits/women/4.jpg',
                likes: 3,
              }
            ]
          },
        ],
      },
      {
        id: '1-3',
        title: 'Build a project with React',
        completed: false,
        comments: [],
      },
    ],
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    description: 'Master TypeScript for type-safe JavaScript development',
    createdAt: '2023-10-15',
    userId: 'user1',
    userName: 'John Doe',
    userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    likes: 28,
    isPublic: true,
    tags: ['programming', 'typescript', 'javascript'],
    tasks: [
      {
        id: '2-1',
        title: 'Learn TypeScript basics',
        completed: true,
        comments: [
          {
            id: '2-1-1',
            text: 'Completed the TypeScript handbook',
            createdAt: '2023-10-18T16:20:00Z',
            userId: 'user1',
            userName: 'John Doe',
            userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            likes: 4,
            replies: []
          },
        ],
      },
      {
        id: '2-2',
        title: 'Convert a JavaScript project to TypeScript',
        completed: false,
        comments: [],
      },
    ],
  },
  {
    id: '3',
    title: 'Master Python Data Science',
    description: 'Learn Python for data analysis and machine learning',
    createdAt: '2023-09-20',
    userId: 'user2',
    userName: 'Jane Smith',
    userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    likes: 87,
    isPublic: true,
    tags: ['programming', 'data science', 'python', 'machine learning'],
    tasks: [
      {
        id: '3-1',
        title: 'Learn Python basics',
        completed: true,
        comments: [
          {
            id: '3-1-1',
            text: 'Finished Python crash course',
            createdAt: '2023-09-25T11:30:00Z',
            userId: 'user2',
            userName: 'Jane Smith',
            userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            likes: 12,
            replies: [
              {
                id: '3-1-1-1',
                text: 'Python is such a versatile language!',
                createdAt: '2023-09-25T12:15:00Z',
                userId: 'user3',
                userName: 'Alex Johnson',
                userAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
                likes: 5,
              }
            ]
          },
        ],
      },
      {
        id: '3-2',
        title: 'Learn NumPy and Pandas',
        completed: true,
        comments: [
          {
            id: '3-2-1',
            text: 'Completed data manipulation exercises with Pandas',
            createdAt: '2023-10-05T14:20:00Z',
            userId: 'user2',
            userName: 'Jane Smith',
            userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            likes: 8,
            replies: []
          },
        ],
      },
      {
        id: '3-3',
        title: 'Learn Scikit-Learn',
        completed: false,
        comments: [],
      },
    ],
  },
  {
    id: '4',
    title: 'Learn UI/UX Design',
    description: 'Master the principles of user interface and experience design',
    createdAt: '2023-10-10',
    userId: 'user4',
    userName: 'Sarah Williams',
    userAvatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    likes: 65,
    isPublic: true,
    tags: ['design', 'ui', 'ux', 'figma'],
    tasks: [
      {
        id: '4-1',
        title: 'Learn design principles',
        completed: true,
        comments: [
          {
            id: '4-1-1',
            text: 'Finished course on color theory and typography',
            createdAt: '2023-10-12T09:40:00Z',
            userId: 'user4',
            userName: 'Sarah Williams',
            userAvatar: 'https://randomuser.me/api/portraits/women/4.jpg',
            likes: 15,
            replies: []
          },
        ],
      },
      {
        id: '4-2',
        title: 'Master Figma',
        completed: false,
        comments: [],
      },
    ],
  },
];

// Function to get all goals
export const getGoals = (): Goal[] => {
  // In a real app, this would fetch from an API or database
  return sampleGoals;
};

// Function to get public goals for explore page
export const getPublicGoals = (): Goal[] => {
  return sampleGoals.filter(goal => goal.isPublic);
};

// Function to get trending goals (sorted by likes)
export const getTrendingGoals = (): Goal[] => {
  return [...sampleGoals]
    .filter(goal => goal.isPublic)
    .sort((a, b) => b.likes - a.likes);
};

// Function to search goals by title, description, or tags
export const searchGoals = (query: string): Goal[] => {
  const lowerQuery = query.toLowerCase();
  return sampleGoals.filter(goal => 
    goal.isPublic && (
      goal.title.toLowerCase().includes(lowerQuery) ||
      goal.description.toLowerCase().includes(lowerQuery) ||
      goal.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  );
};

// Function to get a goal by ID
export const getGoalById = (id: string): Goal | undefined => {
  return sampleGoals.find((goal) => goal.id === id);
};

// Function to add a new goal
export const addGoal = (goal: Omit<Goal, 'id' | 'createdAt' | 'tasks' | 'userId' | 'userName' | 'userAvatar' | 'likes' | 'isPublic' | 'tags'>): Goal => {
  const newGoal: Goal = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    userId: currentUser.id,
    userName: currentUser.name,
    userAvatar: currentUser.avatar,
    likes: 0,
    isPublic: true,
    tags: [],
    tasks: [],
    ...goal,
  };
  
  // In a real app, this would save to an API or database
  sampleGoals.push(newGoal);
  return newGoal;
};

// Function to add a task to a goal
export const addTask = (goalId: string, taskTitle: string): Task | undefined => {
  const goal = getGoalById(goalId);
  if (!goal) return undefined;
  
  const newTask = {
    id: `${goalId}-${goal.tasks.length + 1}`,
    title: taskTitle,
    completed: false,
    comments: [],
  };
  
  goal.tasks.push(newTask);
  return newTask;
};

// Function to add a comment to a task
export const addComment = (goalId: string, taskId: string, commentText: string): Comment | undefined => {
  const goal = getGoalById(goalId);
  if (!goal) return undefined;
  
  const task = goal.tasks.find((task) => task.id === taskId);
  if (!task) return undefined;
  
  const newComment = {
    id: `${taskId}-${task.comments.length + 1}`,
    text: commentText,
    createdAt: new Date().toISOString(),
    userId: currentUser.id,
    userName: currentUser.name,
    userAvatar: currentUser.avatar,
    likes: 0,
    replies: [],
  };
  
  task.comments.push(newComment);
  return newComment;
};

// Function to add a reply to a comment
export const addReply = (goalId: string, taskId: string, commentId: string, replyText: string): Reply | undefined => {
  const goal = getGoalById(goalId);
  if (!goal) return undefined;
  
  const task = goal.tasks.find((task) => task.id === taskId);
  if (!task) return undefined;
  
  const comment = task.comments.find((comment) => comment.id === commentId);
  if (!comment) return undefined;
  
  const newReply = {
    id: `${commentId}-${comment.replies.length + 1}`,
    text: replyText,
    createdAt: new Date().toISOString(),
    userId: currentUser.id,
    userName: currentUser.name,
    userAvatar: currentUser.avatar,
    likes: 0,
  };
  
  comment.replies.push(newReply);
  return newReply;
};

// Function to toggle task completion
export const toggleTaskCompletion = (goalId: string, taskId: string): boolean | undefined => {
  const goal = getGoalById(goalId);
  if (!goal) return undefined;
  
  const task = goal.tasks.find((task) => task.id === taskId);
  if (!task) return undefined;
  
  task.completed = !task.completed;
  return task.completed;
};

// Function to like a goal
export const likeGoal = (goalId: string): number | undefined => {
  const goal = getGoalById(goalId);
  if (!goal) return undefined;
  
  goal.likes += 1;
  return goal.likes;
};

// Function to like a comment
export const likeComment = (goalId: string, taskId: string, commentId: string): number | undefined => {
  const goal = getGoalById(goalId);
  if (!goal) return undefined;
  
  const task = goal.tasks.find((task) => task.id === taskId);
  if (!task) return undefined;
  
  const comment = task.comments.find((comment) => comment.id === commentId);
  if (!comment) return undefined;
  
  comment.likes += 1;
  return comment.likes;
};

// Function to like a reply
export const likeReply = (goalId: string, taskId: string, commentId: string, replyId: string): number | undefined => {
  const goal = getGoalById(goalId);
  if (!goal) return undefined;
  
  const task = goal.tasks.find((task) => task.id === taskId);
  if (!task) return undefined;
  
  const comment = task.comments.find((comment) => comment.id === commentId);
  if (!comment) return undefined;
  
  const reply = comment.replies.find((reply) => reply.id === replyId);
  if (!reply) return undefined;
  
  reply.likes += 1;
  return reply.likes;
}; 