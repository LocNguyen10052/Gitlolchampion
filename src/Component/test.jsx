import React, { useState, useEffect } from 'react';

const UserSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        // Gọi API để lấy danh sách người dùng
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Thay thế URL_API_CUA_BAN bằng URL thật
                if (!response.ok) {
                    throw new Error('Không thể lấy dữ liệu người dùng');
                }
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu người dùng:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Lọc danh sách người dùng dựa trên tên
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search users by name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserSearch;
