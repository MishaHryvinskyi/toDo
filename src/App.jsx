import Title from './components/Title/Title.jsx'
import List from './components/List/List.jsx'
import Form from './components/Form/Form.jsx'
import { Container } from './App.js'
import './App.js'

import { toast, ToastContainer } from 'react-toastify'
import { getToDoData, postToDoData } from './API/api.js'

import { useEffect, useState } from 'react'

const App = () => {
  const [todoName, setTodoName] = useState('');
  const [todoDescr, setTodoDescr] = useState('');
  const [dataTasks, setDataTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getToDoData();
        setDataTasks(todos)
      } catch (error) {
        console.log('Помилка', error);
      }
    }

    fetchData()
  }, []);

  const handleChange = e => {
    const nameInput = e.target.value;
    switch(e.target.name) {
      case "head":
        setTodoName(nameInput);
        break;
      case "descr":
        setTodoDescr(nameInput);
        break;
      default :
      return;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const taskData = {
      nameItem: todoName,
      descr: todoDescr || "Імпровізуємо)",
    };
  
    try {

      if(!taskData.nameItem) {
        toast.error(`Поле ${taskData.nameItem} не може бути пустим!`);
        return;
      }

      if(taskData) {
        toast.success(`Завдання ${taskData.nameItem} успішно додано до списку!)`)
      }

      const createdItem = await postToDoData(taskData);
      setDataTasks(prev => [...prev, createdItem]); 
      setTodoName('');
      setTodoDescr('');
    } catch (error) {
      console.error('Помилка при надсиланні:', error);
    }
  };

  return (
    <Container>
    <Title title='ДАЙ БОЖЕ ВАМ ЗДОРОВЛЯ'/>
    <Form 
      handleChange={handleChange}
      handleSubmit={handleSubmit} 
      todoName={todoName} 
      todoDescr={todoDescr} 
    />
    <Title title='Список справ'/>
    <List 
      dataTasks={dataTasks} 
      setDataTasks={setDataTasks} 
    />
    <ToastContainer/>
    </Container>
  )
}

export default App
