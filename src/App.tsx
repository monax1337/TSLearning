import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./Components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./Components/List";
import UserItem from "./Components/UserItem";
import TodoItem from "./Components/TodoItem";
import EventExample from "./Components/EventExample";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UserPage from "./Components/UserPage";
import TodosPage from "./Components/TodosPage";
import UserItemPage from "./Components/UserItemPage";
import TodoItemPage from "./Components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <Link to='/users'>Пользователи</Link>
                    <Link to='/todos'>Список дел</Link>
                </div>
                <Routes>
                    <Route path="/users" element={<UserPage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/users/:id" element={<UserItemPage/>}/>
                    <Route path="/todos/:id" element={<TodoItemPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>

        // <div>
        //     <EventExample/>
        //     <Card height='200px' width='200px' variant={CardVariant.outlined}
        //           onClick={(num) => console.log('click', num)}>
        //         <button>Кнопка</button>
        //     </Card>
        // </div>
    );
};

export default App;