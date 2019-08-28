import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './List'
import CreateTask from './CreateTasks'
import Button from 'react-bootstrap/Button'

import api from '../../services/api'

export default function Tasks () {
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    async function loadTasks () {
      let response = await api.get(`/tasks`)
       setTasks( response.data)
    }
    loadTasks()
  })

  async function removeTasksDone () {
    if (window.confirm(`Are you sure you want to delete all done tasks?`)) {
      await api.delete('/delete_all_done', null)
    }
  }

  return (
    <Row>
      <Col xs={{span: 8,offset: 2}} className="tasks_list">
        <p className="title"> To-do </p>
        <List tasks={tasks.filter((task) => task.done !== true)}/>
        <CreateTask />
      </Col>
      <Col xs={{span: 8,offset: 2}} className="tasks_list">
        <p className="title"> Done </p>
        <List tasks={tasks.filter((task) => task.done === true)}/>
        <Button
        ariant="dark"
        className="float-right remove_tasks_btn" 
        onClick={e => removeTasksDone()}> Remove all tasks</Button>
      </Col>
    </Row>
  )
  
}
