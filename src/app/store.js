import { configureStore } from '@reduxjs/toolkit'
import formReducer from './features/form/formSlice'
import authReducer from './features/auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { formAPI } from './services/formAPI'
import { authAPI } from './services/authAPI'
import { adminAPI } from './services/adminAPI'
import { judgeAPI } from './services/judgeAPI'
import { allocationAPI } from './services/allocationAPI'
import { analyticsAPI } from './services/analyticsAPI'

export const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
    [formAPI.reducerPath]: formAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
    [judgeAPI.reducerPath]: judgeAPI.reducer,
    [allocationAPI.reducerPath]: allocationAPI.reducer,
    [analyticsAPI.reducerPath]: analyticsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([formAPI.middleware, authAPI.middleware, adminAPI.middleware, judgeAPI.middleware, allocationAPI.middleware, analyticsAPI.middleware]),
})

setupListeners(store.dispatch)
