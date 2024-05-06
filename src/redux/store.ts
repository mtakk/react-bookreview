import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit'
import nameReducer from './nameSlice'
import pageNumberReducer from './pageNumberSlice'

export const store = configureStore({
    reducer: {
        name: nameReducer,
        pageNumber: pageNumberReducer,
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export type AppStore = typeof store;

