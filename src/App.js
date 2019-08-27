import React from 'react';
import Container from 'react-bootstrap/Container'

import './App.scss';
import Header from './components/Header'
import Tasks from './components/tasks/Task'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckCircle,faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Tasks/>
      </Container>
    </div>
  );
}

export default App;
