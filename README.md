
# 👩‍💼 Employee Management System

A web-based Employee Management System built using **HTML**, **CSS**, **JavaScript (Frontend)** and **SQLite, NodeJS and ExpressJS (Backend)**.  
This project allows you to add, view, and manage employee data such as name, age, salary, designation, department, date of joining, and date of leaving.

---

## 🚀 Features

- 🔍 View a list of all employees  
- ➕ Add new employees using a form  
- 📅 Track joining and leaving dates  
- 🔄 Refresh employee data with a button  
- 🔎 Search employees by Name, Designation, or Department (client-side)  


---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: NodeJS, ExpressJS
- **Database**: SQLite  
- **Version Control**: Git & GitHub  

---

## 📁 Project Structure

```
manage-employee-app/
│
├── backend/                         # Node.js + Express.js backend
│   ├── node_modules/               # Node dependencies
│   ├── prisma/                     # Prisma ORM config & DB setup
│   │   ├── schema.prisma           # Prisma data model
│   │   ├── dev.db                  # SQLite database file
│   │   ├── seed.js                 # Seeder script (used)
│   │   └── migrations/             # Prisma migrations history
│   ├── routes/                     # Express route handlers
│   ├── .env                        # Backend environment variables
│   ├── .gitignore                  # Git ignore rules for backend
│   ├── prisma.js                   # Prisma client instance setup
│   ├── index.js                    # Entry point for backend server(not in use)
│   ├── package.json                # Backend dependencies & scripts
|   ├── app.js                      # JavaScript file responsible for front-end conection
│   └── package-lock.json           # Lock file for exact versions
│
├── frontend/                       # Frontend UI
│   ├── index.html                  # Demo interface (not in use)
│   ├── employees.html              # Main interface (view)
│   ├── add_employee.html           # Form to add new employee (add the employees to your database and in your main interface)
│   ├── app.js                      # JavaScript file for connection with backend API for data fetching
├── .env                            # Global or frontend environment variables
├── style.css                       # Global stylesheet
├── README.md                       # Project documentation


```

---

## 🚀 How to Run the Project Locally

Follow the steps below to set up and run the **Employee Management System** on your local machine.



---

### ✅ Prerequisites

Make sure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- (Optional) [VS Code](https://code.visualstudio.com/) or any preferred editor

---

### 📦 Clone the Repository

```bash
git clone https://github.com/niketbhatt2002/employee-management-system.git
cd employee-management-system
📁 Backend Setup
Navigate to the backend folder:

bash
cd backend

Install dependencies:

bash
npm install

Create a .env file inside the backend/ directory with the following:

.env
DATABASE_URL="file:./dev.db"

Run Prisma migrations and generate the client:
bash
npx prisma migrate dev --name init
npx prisma generate

(Optional) Seed your database:

bash
npx prisma db seed

Start the backend server:
bash
Copy
Edit
node app.js
By default, it runs on: http://localhost:5000

🌐 Frontend Setup
There is no build step required. Just open the HTML files in your browser:

frontend/add_employee.html – Add new employees

frontend/employees.html – View all employees

You can open them directly in a browser or use a live server (e.g., the VS Code Live Server extension).

## 📸 Screenshots

![Database Connectivity]("https://github.com/niketbhatt2002/employee-management-system/blob/main/Screenshot%202025-04-21%20131929.png")
![Dashboard]("https://github.com/niketbhatt2002/employee-management-system/blob/main/Screenshot%202025-04-21%20131957.png")
![Add Employee]("https://github.com/niketbhatt2002/employee-management-system/blob/main/Screenshot%202025-04-21%20131944.png") 

---

## 🤝 Contributing

Feel free to fork this repository and submit a pull request. Contributions are always welcome!  
Open an issue first if you'd like to suggest a feature or bug fix.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## ✨ Author

Made with ❤️ by [Niket Bhatt](https://github.com/niketbhatt2002)

```

