const API_URL = 'https://681224243ac96f7119a7002b.mockapi.io/toDo';

export const getToDoData = async () => {
    const response = await fetch(`${API_URL}`);
    const result = await response.json()
    return result;
}

export const postToDoData = async (newItem) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    return await response.json();
  };