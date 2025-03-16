# Learning Journey

A simple web application for documenting learning goals, tasks, and progress. Users can create goals, add tasks, and document their progress with comments that are automatically timestamped.

## Features

- Create learning goals with descriptions
- Add tasks to each goal
- Mark tasks as complete
- Add comments to tasks with automatic timestamps
- Track your learning progress over time

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Custom CSS
- **Date Formatting**: date-fns

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-roadmap.git
   cd simple-roadmap
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Create a Goal**: On the home page, click "Add Goal" to create a new learning goal.
2. **Add Tasks**: Click on a goal to view its details, then add tasks using the form.
3. **Track Progress**: Mark tasks as complete by checking the checkbox.
4. **Add Comments**: Click "Add Comment" on any task to document your progress or add notes.

## Project Structure

- `/src/pages` - Next.js pages
- `/src/components` - React components
- `/src/types` - TypeScript type definitions
- `/src/data` - Sample data and data management functions
- `/src/styles` - Global styles

## Data Storage

This application currently uses in-memory storage for demonstration purposes. In a production environment, you would want to connect it to a database or API for persistent storage.

## License

This project is licensed under the MIT License. 