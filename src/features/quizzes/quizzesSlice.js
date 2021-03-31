import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

export const associateQuizWithTopic = payload => {
    return dispatch => {
        const { id, topicId } = payload;
        dispatch(addQuiz(payload));
        dispatch(addQuizId({quizId: id, topicId}));
    }
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const newQuiz = action.payload;
            state.quizzes[action.payload.id] = newQuiz;
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;