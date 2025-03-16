# Learning Journey App

A simple application to track learning goals, add tasks, and interact with comments in a Twitter-like social interface.

## Features

- Create and track learning goals
- Add tasks to goals and mark them as complete
- Comment on tasks with a Twitter-like interface
- Reply to comments
- Like goals and comments
- Explore public goals from other users
- View trending goals

## Running with Docker

### Prerequisites

- Docker and Docker Compose installed on your machine

### Building and Running the Container

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd simple-roadmap
   ```

2. Build and start the container:
   ```bash
   docker-compose up -d
   ```

3. Access the application at http://localhost:3000

### Building the Docker Image Manually

If you prefer to build and run the Docker image manually:

1. Build the Docker image:
   ```bash
   docker build -t learning-journey .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 learning-journey
   ```

3. Access the application at http://localhost:3000

## Development

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Access the application at http://localhost:3000

## License

MIT 