import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar maçãs', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask}></AddArea>

        {/* Área das tarefas */
          list.map((item, index) => (
            <ListItem key={index} item={item}></ListItem>
          ))
        }

      </C.Area>
    </C.Container>
  );
}

export default App;
