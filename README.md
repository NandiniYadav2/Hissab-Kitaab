# Hisaab-Kitaab-Backend
The project use Spring Boot framework and other technologies. 

This project is a splitwise application for splitting fartes between friends,family members and colleagues.

# Download the project
Execute: git clone https://github.com/kumaparajita104/Hisaab-Kitaab-SPE.git

# Run Project in InteliJJ Idea
Run project or press Shift + F10.

# Implemented Docker
We have implemented docker for backend https://github.com/kumaparajita104/Hisaab-Kitaab-SPE/blob/main/Hissab-Kitaab-backend/Dockerfile 

# Implemented Ansible
We have implemented ansible for the automation of the project https://github.com/kumaparajita104/Hisaab-Kitaab-SPE/blob/main/playbook.yml


URLs
- POST: http://localhost:9091/api/auth/register
- POST: http://localhost:9091/api/auth/signin
- POST: http://localhost:9091/api/trips/createTrip
- GET: http://localhost:9091/groups/{tripId}/createGroup
- POST: http://localhost:9091/api/groups/{tripId}/ {groupId}
- POST: http://localhost:9091/api/groups/{tripId}/ {groupId}/addUser/{userId}
- GET: http://localhost:9091/api/expenses/ {groupID}/allExpenses
- POST: http://localhost:9091/api/expenses/{groupID}/createExpense
- GET: http://localhost:9091/api/users/user/{userName}
- POST: http://localhost:9091/api/expenses/{tripId}/ {expenseId}/ addTransaction
- GET: http://localhost:9091/api/expenses/{expenseId}/allTransactions
- GET: http://localhost:9091/api/trips/allTrips

# Hisaab-Kitaab-Frontend
The project uses ReactJs framework and other technologies. 

This project is a splitwise application for splitting fartes between friends,family members and colleagues.

# Download the project
Execute: git clone https://github.com/kumaparajita104/Hisaab-Kitaab-SPE.git

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

### `npm run dev`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!






