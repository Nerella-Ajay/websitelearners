# Medication Management System

## 1. Project Overview

The goal of this project is to develop a **Medication Management application** designed for both **patients** and **caretakers**. The application will offer role-based dashboards, robust medication tracking capabilities, and other essential features to help users manage medication schedules effectively.

### Target Users:

- **Patients:** To track their own medication intake, view schedules, and monitor adherence.
- **Caretakers:** To manage medications for multiple patients, track their progress, and facilitate communication.

### Core Objectives:

- Implement secure **User Authentication** using SQLite for login and signup.
- Provide complete **CRUD (Create, Read, Update, Delete)** functionality for medication management.
- Develop **role-based dashboards** to display relevant information for patients and caretakers.
- Ensure **data persistence** by connecting the frontend to a Node.js backend with an SQLite database.

## 2. Current State of the Codebase

https://github.com/shyamwl/meds-buddy-check?tab=readme-ov-file

The provided starting codebase includes a foundational structure to build upon:

- **Frontend:** Developed using **React** and JavaScript, offering a modular and component-based structure.
- **Role-based Dashboards:** UI is already in place for both patient and caretaker dashboards.
- **Medication Tracking UI:** Includes a calendar visualization for medication tracking.
- **Mock Data:** Placeholder data is currently used for streaks, adherence rates, and medication logs.
- **Photo Upload Interface:** A UI for medication proof photo uploads exists but is non-functional.
- **Notification Settings UI:** A UI for notification settings exists but is non-functional.
- **Local State Storage:** All current data is stored in the browser's local state and is *not persistent*.

## 3. Technology Stack

The project requires proficiency in the following technologies:

### Frontend:

- **React:** A JavaScript library for building user interfaces.
- **JavaScript:** The core programming language for frontend logic.
- **React Query:** A powerful library for fetching, caching, synchronizing, and updating server state in React applications.
- **CSS:** For styling the application.

### Backend:

- **Node.js:** A JavaScript runtime environment for building server-side applications and APIs.
- **SQLite:** A lightweight, file-based relational database management system.

## 4. Core Requirements & Phased Features

The project is structured into three phases, with Phase 1 being mandatory.

### Core Requirements (Applicable to all phases):

### 4.1. User Authentication:

- Implement secure **user login and signup functionality**.
- All user credentials and authentication logic must interact with an **SQLite database** on the Node.js backend.

### 4.2. Medication Management (CRUD Operations):

- **Add Medications:** Allow users to add new medications with details such as:
    - **Name:** The name of the medication (e.g., "Ibuprofen").
    - **Dosage:** The amount of the medication (e.g., "200mg", "1 tablet").
    - **Frequency:** How often the medication should be taken (e.g., "Once a day", "Every 8 hours").
- **Mark Medications as Taken:** Provide a mechanism for users to mark a medication as taken for a specific day.
- **View Medication List:** Display a clear list of all added medications.
- **Display Adherence Percentage:** Show a simple percentage indicating how well medications are being taken according to their scheduled frequency.

### Phase 1 (Required) Features:

- **4.1.1. SQLite Authentication:**
    - Implement **user registration (signup)** to create new user accounts in the SQLite database.
    - Implement **user login** to authenticate existing users against the SQLite database.
    - Establish a basic authentication flow that allows users to access the application's features upon successful login.
- **4.2.1. Basic CRUD for Medications:**
    - Implement the **Add Medication** feature to save new medication details (name, dosage, frequency) to SQLite.
    - Implement the **Mark Medication as Taken** feature to record when a medication has been taken for the day in SQLite.
    - Implement the **View Medications** feature to fetch and display the list of medications from SQLite.
- **4.3. Dashboard Implementation:**
    - Choose **one dashboard (either Patient or Caretaker)** and connect its existing UI components to **real data fetched from your SQLite database** via the Node.js backend. This involves replacing mock data with actual server data for relevant sections (e.g., medication list, basic adherence info).

### Phase 2 (Optional) Features:

- **Real-Time Updates:**
    - Explore and implement a mechanism for real-time updates, especially for interactions between caretakers and patients (e.g., a caretaker marking a patient's medication as taken, and the patient's dashboard updating instantly). Technologies like WebSockets could be considered here.
- **Adherence Tracking:**
    - Develop more sophisticated adherence tracking functionality beyond a simple percentage. This could include:
        - Tracking adherence over specific time periods (e.g., weekly, monthly).
        - Identifying missed doses.
        - Visualizing adherence trends (e.g., graphs).

### Phase 3 (Bonus) Features:

- **File Uploads:**
    - Implement the photo upload functionality for medication proof. This would involve handling file uploads on the backend (storing files, or their paths/references, in SQLite or a file system) and displaying them on the frontend.
- **Deployment:**
    - Deploy the completed application to a hosting platform like **Vercel** (for React frontend) or **Netlify** (for React frontend) and a suitable platform for the Node.js backend (e.g., Heroku, Render).

## 5. Evaluation Criteria

Your submission will be assessed based on the following:

- **Code Organization:** How well the backend and frontend code is structured, modularized, and maintained.
- **Component Reusability:** The extent to which React components are designed for reusability across different parts of the application.
- **State Management:** The chosen approach for managing application state (e.g., React's `useState`, `useContext`, or external libraries) and its scalability.
- **Error Handling:** Proper implementation of error handling for API calls (frontend and backend) and edge cases, providing informative feedback to the user.
- **Performance Considerations:** Evaluation of the app's performance, particularly minimizing unnecessary re-renders in React components.
- **Security Awareness:** Attention to security best practices, including input sanitization on the backend to prevent SQL injection and secure handling of user authentication data (e.g., hashed passwords).
- **JavaScript Usage:** Although TypeScript is not required, proper, modern, and idiomatic JavaScript usage will be assessed.

## 6. Additional Requirements

- **Form Validation:** Implement robust client-side form validation for all input fields (e.g., login, signup, add medication), providing clear and meaningful error messages to the user.
- **Loading/Error States:** Properly handle and display loading indicators and error messages during data fetching (API calls) to enhance user experience.
- **Version Control:** Utilize **Git** for version control. Ensure commit messages are clear, concise, and meaningful, reflecting the changes made.
- **Testing:** Write **2-3 meaningful tests** for core functionalities of the application using **Vitest**. Examples include testing a component's rendering, an API utility function, or a simple state update.
- **README:** Include a comprehensive `README.md` file in your project's root directory. This file must contain:
    - A clear project description.
    - Detailed setup instructions for running the application locally (both frontend and backend).
    - Instructions on how to run tests.
    - Any specific notes or assumptions.

## 7. Submission Guidelines

- Submit your complete project files, including the codebase (frontend and backend), tests, and the `README.md` file.
- Ensure your repository is well-structured and follows good coding practices.
- Verify that the application is fully functional according to the required features (Phase 1) and runs without errors.
- If you implement optional or bonus features, ensure they are also stable and well-integrated.

## 8. Key Concepts & Technical Terms

### Frontend:

- **React:** A declarative, component-based JavaScript library for building user interfaces. It allows you to create reusable UI components.
- **React Query:** A library for managing server state in React applications. It provides hooks for data fetching, caching, and synchronization, simplifying data management.
- **Local State:** Data stored temporarily within a React component or the browser's memory, which is lost when the page is refreshed or closed.
- **Persistent Data:** Data stored in a database or other storage mechanisms, which remains available even after the application is closed or restarted.
- **Form Validation:** The process of ensuring that user input in forms meets specified criteria (e.g., correct format, required fields filled) before being processed.
- **Loading States:** UI indicators (e.g., spinners, skeleton screens) that show content is being fetched or processed, improving user experience during delays.
- **Error States:** UI elements that display messages when an error occurs (e.g., API call failed, invalid input), guiding the user on what went wrong.

### Backend & Database:

- **Node.js:** An open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside a web browser, commonly used for building backend services and APIs.
- **SQLite:** A lightweight, self-contained, serverless, zero-configuration, transactional SQL database engine. It stores data in a single file, making it ideal for simple, embedded applications.
- **CRUD Operations:** An acronym that describes the four basic operations of persistent storage:
    - **C**reate: Adding new data (e.g., a new user, a new medication).
    - **R**ead: Retrieving existing data (e.g., fetching a list of medications).
    - **U**pdate: Modifying existing data (e.g., marking a medication as taken).
    - **D**elete: Removing data (e.g., deleting a medication).
- **API (Application Programming Interface):** A set of rules and protocols for building and interacting with software applications. In this project, the Node.js backend will expose APIs for the React frontend to communicate with it.
- **Input Sanitization:** The process of cleaning and filtering user input to remove potentially malicious or harmful characters/code before it is processed or stored in a database, preventing attacks like SQL injection.
- **SQL Injection:** A common web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database, potentially allowing them to view, modify, or delete data.

### General Concepts:

- **Role-based Dashboards:** User interfaces that display different information or functionalities based on the user's assigned role (e.g., "patient" sees their medications, "caretaker" sees patient lists).
- **Adherence Rate:** A measure of how consistently a patient follows their prescribed medication regimen, typically expressed as a percentage of taken doses out of total prescribed doses.
- **Version Control (Git):** A system that records changes to a file or set of files over time so that you can recall specific versions later. Git is a widely used distributed version control system.
- **Vitest:** A fast and modern unit testing framework for JavaScript/TypeScript projects, often used with React.
- **Vercel / Netlify:** Cloud platforms that provide services for deploying and hosting web applications (especially frontend applications built with frameworks like React). They automate deployment from Git repositories.

















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
