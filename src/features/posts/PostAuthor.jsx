import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    // Ensure users is an array before using find
    const author = Array.isArray(users) ? users.find(user => user.id === userId) : null;

    return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
