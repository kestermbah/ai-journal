**AI-Powered Journal Application**

The AI-Powered Journal Application is a full-stack web app that enhances journaling by leveraging
AI-powered text analysis and sentiment detection. Users can write journal entries and receive
personalized feedback, helping them reflect on their emotions and thoughts.
Features
- Interactive Journaling: Write and submit journal entries in a dynamic interface.
- AI-Powered Analysis: Google AI APIs provide insightful text analysis and sentiment detection.
- Real-Time Feedback: Immediate results on user sentiment and journal analysis.
- Full-Stack Integration: React frontend with a Node.js/Express backend.
Technologies Used
- Frontend: React, Vite, JavaScript, HTML, CSS
- Backend: Node.js, Express
- AI Integration: Google AI APIs
- Development Environment: Localhost for frontend and backend
Installation and Setup

Backend

1. Clone the repository:
2. git clone https://github.com/your-username/ai-powered-journal-backend.git
3. Navigate to the backend folder:
cd ai-powered-journal-backend
4. Install dependencies:
npm install
5. Create a .env file in the root directory and add your environment variables:
GOOGLE_AI_API_KEY=your-google-api-key
PORT=3131
6. Start the backend server:
npm run dev
7. The backend will run at http://localhost:3131.



Frontend
1. Clone the repository:
git clone https://github.com/your-username/ai-powered-journal-frontend.git
2. Navigate to the frontend folder:
cd ai-powered-journal-frontend
3. Install dependencies:
npm install
4. Update the API URL in the fetch calls to point to your local backend:
const res = await fetch("http://localhost:3131/api/google", { ... });
5. Start the development server:
npm run dev
6. The frontend will run at http://localhost:5173.

Usage
AI-Powered Journal Application
1. Write a journal entry in the text box on the frontend.
2. Click the "Talk to AI" button to analyze the entry.
3. View the AI's analysis and guessed sentiment displayed below the journal entry box.
Notes
- This application is currently intended for local development only.
- Ensure both the backend (http://localhost:3131) and frontend (http://localhost:5173) are running
simultaneously for proper functionality.


Future Plans
- Host the frontend and backend on free platforms (e.g., Vercel, Render).
- Enhance AI integrations with more detailed sentiment analysis.
- Add user authentication for personalized journaling experiences.
- Implementing chat streaming to allow for conversation between user and AI
- Database implementation that will allow users to store journal entries 
