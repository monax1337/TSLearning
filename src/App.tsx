import React from 'react';
import Card, {CardVariant} from "./Components/Card";
import UserList from "./Components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {
            id: 1,
            name: 'Monax',
            email: 'maxfff03@gmail.com',
            address: {city: 'Minsk', street: 'Polevaya', zipcode: '12345'}
        },
        {
            id: 2,
            name: 'Dimass',
            email: 'dimassclod03@gmail.com',
            address: {city: 'Minsk', street: 'Malina', zipcode: '3456789'}
        }
    ]
    return (
        <div>
            <Card height='200px' width='200px' variant={CardVariant.outlined}
                  onClick={(num) => console.log('click', num)}>
                <button>Кнопка</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;