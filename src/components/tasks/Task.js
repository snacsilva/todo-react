import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './List'

export default function Tasks () {

  return (
    <Row>
      <Col xs={{span: 8,offset: 2}} className="tasks_list">
        <p className="title"> To-do </p>
        <List tasks={[{'title': 'Criar Header Criar Header Criar Header', 'done': false}, {'title': 'Criar footer', 'done': false}, {'title': 'Criar footer', 'done': false}]}/>
      </Col>
      <Col xs={{span: 8,offset: 2}} className="tasks_list">
        <p className="title"> Done </p>
        <List tasks={[{'title': 'Criar Header Criar Header Criar Header', 'done': false}, {'title': 'Criar footer', 'done': false}, {'title': 'Criar footer', 'done': false}]}/>
      </Col>
    </Row>
  )
  
}
