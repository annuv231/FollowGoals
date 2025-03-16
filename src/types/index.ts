export interface Goal {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  likes: number;
  isPublic: boolean;
  tags: string[];
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  comments: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  createdAt: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  likes: number;
  replies: Reply[];
}

export interface Reply {
  id: string;
  text: string;
  createdAt: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  likes: number;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
} 