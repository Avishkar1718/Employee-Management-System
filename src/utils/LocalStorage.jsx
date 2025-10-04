import React from 'react'
const employees = [
  {
    id: 1,
    email: "sarthak@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Homepage UI",
        taskDescription: "Create a responsive homepage layout in Figma.",
        taskDate: "2025-10-05",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Logo Redesign",
        taskDescription: "Update the company logo with a modern look.",
        taskDate: "2025-10-10",
        taskCategory: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Landing Page Banner",
        taskDescription: "Design a banner image for the new product.",
        taskDate: "2025-10-12",
        taskCategory: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "rahul@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate user authentication API.",
        taskDate: "2025-10-06",
        taskCategory: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Database Schema",
        taskDescription: "Design schema for employee management system.",
        taskDate: "2025-10-07",
        taskCategory: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the issue where users cannot log in.",
        taskDate: "2025-10-08",
        taskCategory: "Bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Unit Tests",
        taskDescription: "Write unit tests for authentication routes.",
        taskDate: "2025-10-12",
        taskCategory: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "anjali@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Frontend Testing",
        taskDescription: "Perform manual testing of UI components.",
        taskDate: "2025-10-05",
        taskCategory: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write Test Cases",
        taskDescription: "Prepare detailed test cases for login module.",
        taskDate: "2025-10-06",
        taskCategory: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Automation Scripts",
        taskDescription: "Automate regression tests using Selenium.",
        taskDate: "2025-10-11",
        taskCategory: "Automation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "priya@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Create Marketing Plan",
        taskDescription: "Draft a social media marketing plan.",
        taskDate: "2025-10-06",
        taskCategory: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Ad Campaign",
        taskDescription: "Run a Facebook ad campaign for product launch.",
        taskDate: "2025-10-08",
        taskCategory: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "SEO Audit",
        taskDescription: "Check website SEO performance.",
        taskDate: "2025-10-09",
        taskCategory: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Email Newsletter",
        taskDescription: "Prepare October product newsletter.",
        taskDate: "2025-10-12",
        taskCategory: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "arjun@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create a pitch deck for investors.",
        taskDate: "2025-10-07",
        taskCategory: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Organize sprint retrospective meeting.",
        taskDate: "2025-10-06",
        taskCategory: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Budget Report",
        taskDescription: "Prepare monthly budget report for October.",
        taskDate: "2025-10-10",
        taskCategory: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Client Feedback",
        taskDescription: "Collect feedback from last deployment.",
        taskDate: "2025-10-11",
        taskCategory: "Client Relations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Strategy Document",
        taskDescription: "Write a 6-month roadmap for new features.",
        taskDate: "2025-10-15",
        taskCategory: "Planning",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];


const admin = [
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees,admin);
  
};


