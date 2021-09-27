import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Header from "./components/Header";
import Items from "./components/Items";
const App = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [items, setItems] = useState([]);
  const LOCAL_STORAGE_KEY = "items";
  const handlerSubmit = (item) => {
    if (email === "" || userName === "") {
      alert("Add Items Please");
    } else {
      setItems([...items, { id: uuid(), ...item }]);
      setEmail("");
      setUserName("");
    }
  };
  useEffect(() => {
    const localItems = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
    );
    if (localItems) {
      setItems(localItems);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const removeItem = (id) => {
    const newDeleteItem = items.filter((item) => {
      return item.id !== id;
    });

    setItems(newDeleteItem);
  };

  const editHandler = (myItem) => {
    console.log(myItem);
    const { id } = myItem;
    const newEditedItems = items.map((item) => {
      return item.id === id ? { ...myItem } : item;
    });

    setItems(newEditedItems);
    setIsEdit(false);
  };
  return (
    <div className="app">
      <Header
        handlerSubmit={handlerSubmit}
        email={email}
        setEmail={setEmail}
        userName={userName}
        setUserName={setUserName}
      />
      <Items
        items={items}
        setItems={setItems}
        removeItem={removeItem}
        editHandler={editHandler}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        email={email}
        userName={userName}
      />
    </div>
  );
};

export default App;
