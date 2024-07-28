import React, { useState } from 'react';
import api from "../api";

const Users = () => {
    //console.log(api.users.fetchAll());
    const [users, setUsers] = useState(api.users.fetchAll()); // Получаем данные о пользователях
    const handleDelete = (userId) => {
        // Фильтруем пользователей, оставляя только тех, у которых _id не совпадает с переданным userId
        const updatedUsers = users.filter(user => user._id !== userId);
        setUsers(updatedUsers); // Обновляем состояние пользователей, удалив пользователя  
    };

    return (
       <React.Fragment>
            {users.length > 0 ? ( // Проверяем, есть ли пользователи в списке
                    <React.Fragment>
                        {users.length} человек тусанет с тобой сегодня
                        
                            <table class="w-100">
                                <thead>
                                    <tr>
                                        <th>Имя</th>
                                        <th>Качества</th>
                                        <th>Профессия</th>
                                        <th>Завершенные встречи</th>
                                        <th>Рейтинг</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.qualities.map((item) => (
                                                    <span key={item._id} className={'mx-1 rounded p-1 px-2 text-white bg-' + item.color}>{item.name}</span>
                                                )
                                            )}</td>
                                            <td>{user.profession.name}</td>
                                            <td>{user.completedMeetings}</td>
                                            <td>{user.rate}</td>
                                            <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Удалить</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </React.Fragment>
                ) : (
                    <p>никто с тобой не тусанет</p>
                )}  
        </React.Fragment>
    )
};

export default Users;