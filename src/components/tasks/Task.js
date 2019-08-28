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
        <Button variant="dark"className="float-right remove_tasks_btn">Remove all tasks</Button>
      </Col>
    </Row>
  )
  
}
