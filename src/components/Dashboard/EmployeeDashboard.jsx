import React from 'react'
import Header from '../../others/Header'
import TasksCount from '../../others/TasksCount'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({ currentEmployee, changeUser}) {
  console.log(currentEmployee);
  
  return (
    <div className="p-10 h-screen">
      <Header name={currentEmployee.firstName} changeUser={changeUser} />
      <TasksCount taskCounts={currentEmployee.taskCounts} />
      <TaskList tasks={currentEmployee.tasks} />
    </div>
  );
}

export default EmployeeDashboard