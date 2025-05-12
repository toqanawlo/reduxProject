import { configureStore } from '@reduxjs/toolkit'

import authSlice from './features/auth/authSlice'
import { baseApi } from '@/services/baseApi'
import { setupListeners } from '@reduxjs/toolkit/query'
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  })
}



setupListeners(makeStore().dispatch)