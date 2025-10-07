import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    list: [], // массив пользователей
};

const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {
        addUser(state, action) { 
            const newUser = { id: Date.now(), name: action.payload }; //  { type: 'users/addUser', payload: 'Иван' } - dispatch(addUser('Иван'));
            state.list.push(newUser); 
        },
        removeUser(state, action) {
            const idToRemove = action.payload;
            state.list = state.list.filter((user) => user.id !== idToRemove); // action: { type: 'users/removeUser', payload: 123 } - dispatch(removeUser(123));
        },
    },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
