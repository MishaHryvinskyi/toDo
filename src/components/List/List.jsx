import { NotItems, ListStyled, ListItem } from "./List";

const List = ({ data }) => {
    return (
        data ? (
        <ListStyled>
            {data.map(({ nameItem, descr, id }) => 
            <ListItem key={id}>
                <h2>{nameItem}</h2>
                <p>{descr}</p>    
            </ListItem>
            )}
        </ListStyled>
        ) : (
            <NotItems>Немає жодних справ 👨‍👨‍👦</NotItems>
        )
    )
}

export default List;