const addItem = async (params) => {
    const response = await fetch("http://localhost:3001/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return data;
};

const getItems = async () => {
    const response = await fetch("http://localhost:3001/items", {
        method: "GET",
    });
    return response.json();
};

const deleteItem = async (item) => {
    const itemId = item.item.id
    const response = await fetch(`http://localhost:3001/items/${itemId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
};

export default {
    addItem,
    getItems,
    deleteItem,
};
