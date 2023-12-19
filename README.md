# Metro Property Management Website

Metro Property Management Website is a web application designed to help users search for and manage properties. The application consists of a frontend and a backend, both of which are containerized using Docker Compose for easy deployment.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Docker Compose](#docker-compose)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

## Usage

To run the application locally, use the following commands:

```bash
# Start Docker Compose
docker-compose up

# Access the application
Open your browser and go to http://localhost:3000
```

## Development

### Frontend

- Run the frontend in development mode:

  ```bash
  cd client
  npm run dev
  ```

- Build the frontend:

  ```bash
  cd client
  npm run build
  ```

### Backend

- Run the backend in development mode:

  ```bash
  cd server
  npm run dev
  ```

- Run tests:

  ```bash
  cd server
  npm test
  ```

## Docker Compose

The application is containerized using Docker Compose. To build and start the containers, use the following commands:

```bash
docker-compose up --build
```

## Troubleshooting

If you encounter any issues, try the following:

- Check if all dependencies are installed.
- Restart Docker Compose.
- ...
