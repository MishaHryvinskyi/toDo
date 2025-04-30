import Input from './components/Input/Input.jsx'
import Title from './components/Title/Title.jsx'
import { Container } from './App.js'
import './App.js'
import List from './components/List/List.jsx'
import { getToDoData } from './API/api.js'

import { useEffect, useState } from 'react'


const App = () => {

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

  return (
    <Container>
  <Title title={'ДАЙ БОЖЕ ВАМ ЗДОРОВЛЯ'}/>
    <Input name={'Введіть тект'}/>
    <Input name={'Введіть опис'}/>
    <Title title={'Список справ'}/>
    <List data={data}/>
    </Container>
  )
}

export default App
