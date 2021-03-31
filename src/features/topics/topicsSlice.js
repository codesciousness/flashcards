import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const newTopic = {...action.payload, quizIds: []};
            state.topics = {...state.topics, [action.payload.id]: newTopic};
        },
        addQuizId: (state, action) => {
            const { topicId, quizId } = action.payload;
            for (const topic in state.topics) {
                if (topic === topicId) {
                    state.topics[topicId].quizIds.push(quizId);
                }
            }
        },
    }
});

export const selectTopics = state => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;