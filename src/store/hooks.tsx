import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // ...
// import { useAppSelector, useAppDispatch } from '../hooks'

// export function Counter() {
//   const count = useAppSelector(state => state.counter.value)
//   const dispatch = useAppDispatch()
//   // ...
// }
