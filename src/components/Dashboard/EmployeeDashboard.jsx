import React from 'react'
import Header from '../../others/Header'
import TasksCount from '../../others/TasksCount'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-10 h-screen'>
      <Header />
      <TasksCount />
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard