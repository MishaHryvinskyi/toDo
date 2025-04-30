import Input from './components/Input/Input.jsx'
import Title from './components/Title/Title.jsx'
import Button from './components/Button/Button.jsx'
import { Container } from './App.js'
import './App.js'
import List from './components/List/List.jsx'
import { getToDoData, postToDoData } from './API/api.js'

import { useEffect, useState } from 'react'


const App = () => {
  const [todoName, setTodoName] = useState('');
  const [todoDescr, setTodoDescr] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getToDoData();
        setData(todos)
      } catch (error) {
        console.log('Помилка', error);
      }
    }

    fetchData()
  }, []);

  const handleTodoDescr = e => {
    setTodoDescr(e.currentTarget.value)
  }

  const handleTodoName = e => {
    setTodoName(e.currentTarget.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // зупиняє перезавантаження сторінки

    if (!todoName.trim() || !todoDescr.trim()) {
      alert('Будь ласка, заповніть всі поля');
      return;
    }

    const newItem = {
      nameItem: todoName,
      descr: todoDescr,
    };
  
    try {
      const createdItem = await postToDoData(newItem);
      setData(prev => [...prev, createdItem]); // оновити список
      setTodoName('');
      setTodoDescr('');
    } catch (error) {
      console.error('Помилка при надсиланні:', error);
    }
  };

  return (
    <Container>
  <Title title='ДАЙ БОЖЕ ВАМ ЗДОРОВЛЯ'/>
  <form onSubmit={handleSubmit}>
  <Input
      name="Введіть текст"
      value={todoName}
      onChange={handleTodoName}
  />

  <Input
      name="Введіть опис"
      value={todoDescr}
      onChange={handleTodoDescr}
  />
  <Button type="submit">Створити</Button>
  </form>
    <Title title='Список справ'/>
    <List data={data}/>
    </Container>
  )
}

export default App
