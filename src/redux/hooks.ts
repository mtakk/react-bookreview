import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore

// export type ReduxDispatch = ThunkDispatch<SystemState, any, Action>;
// export function useReduxDispatch(): ReduxDispatch {
//   return useDispatch<ReduxDispatch>();
// }