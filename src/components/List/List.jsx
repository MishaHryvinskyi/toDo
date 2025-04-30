import { NotItems } from "./List";

const List = ({ data }) => {
    return (
        data ? (
        <ul>
            {data.map(({ nameItem, descr, id }) => 
            <li key={id}>
                <h2>{nameItem}</h2>
                <p>{descr}</p>    
            </li>
            )}
        </ul>
        ) : (
            <NotItems>Немає жодних справ 👨‍👨‍👦</NotItems>
        )
    )
}

export default List;