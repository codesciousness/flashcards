import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const newCard = action.payload;
            state.cards[action.payload.id] = newCard;
        }
    }
});

export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;