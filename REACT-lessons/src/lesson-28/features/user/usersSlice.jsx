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
            const id = action.payload;
            const idx = state.list.findIndex(u => u.id === id);
            if (idx !== -1) { // если пользователь найден
                state.list.splice(idx, 1); 
            }
        },
    },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
