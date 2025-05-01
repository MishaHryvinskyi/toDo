import { NotItems, ListStyled, ListItem } from "./List";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteToDoData } from "../../API/api";
const List = ({ dataTasks, setDataTasks }) => {
    const handleDelete = async (id) => {
      try {
        await deleteToDoData(id);
        setDataTasks(prev => prev.filter(task => task.id !== id));
      } catch (error) {
        console.error('Помилка при видаленні:', error);
      }
    };
  
    return dataTasks && dataTasks.length ? (
      <ListStyled>
        {dataTasks.map(({ nameItem, descr, id }) => (
          <ListItem key={id}>
            <h2>{nameItem}</h2>
            <p>{descr}</p>
            <button onClick={() => handleDelete(id)}><RiDeleteBinLine /></button>
          </ListItem>
        ))}
      </ListStyled>
    ) : (
      <NotItems>Немає жодних справ 👨‍👨‍👦</NotItems>
    );
  };
export default List;