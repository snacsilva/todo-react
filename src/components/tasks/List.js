import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import api from '../../services/api'

export default function List (props) {

  async function checkTask(task) {
    await api.put(`/tasks/${task.id}`, { done: true })
  }

  async function deleteTask(task) {
    if (window.confirm(`Are you sure you want to delete: "${task.title}"`)) {
      await api.delete(`/tasks/${task.id}`, {method: 'DELETE'});
    }
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Table responsive>
            <tbody>
              {props.tasks.map((task, index) => {
                   return <tr key={task.id}>
                     <td className="col-md-10">{task.title}</td>
                     <td>
                       {task.done === false
                         ? <a className="check" href="#" onClick={() => checkTask(task)}>
                             <FontAwesomeIcon icon="check-circle"/>
                           </a> : null
                       }
                     </td>
                     <td>
                        <a className="delete" href="#" onClick={() => deleteTask(task)}>
                         <FontAwesomeIcon icon="trash-alt"/>
                       </a>
                     </td>
                   </tr>;
                 })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}
