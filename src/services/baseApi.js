import {
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
  } from '@reduxjs/toolkit/query/react'
  import Cookies from 'js-cookie'
  
  const rawBaseQuery = fetchBaseQuery({
    baseUrl:'http://melo.pylex.xyz:9752/api/v1',
    prepareHeaders: async (headers) => {
      const token = localStorage.get('TOKEN')
  
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
  
      return headers
    },
  })
  
  const baseQueryWithErrorHandler = async (
    args,
    api,
    extraOptions,
  ) => {
    const result = await rawBaseQuery(args, api, extraOptions)
  
    if (result.error) {
      const { status, data } = result.error 
  
      switch (status) {
        // case 400:
        //   sessionStorage.removeItem('TOKEN')
        //   window.location.href = '/login'
        //   break
        // case 401:
        //   console.warn('الحساب غير موجود')
        //   // Optional: dispatch logout or redirect logic
        //   sessionStorage.removeItem('TOKEN')
        //   window.location.href = '/login'
        //   break
        case 403:
          console.warn('Forbidden - no access', data)
          break
        case 404:
          console.warn('الرابط المدخل غير صحيح')
          break
        case 500:
          console.error('Server Error', data)
          break
        default:
          console.error('Unknown Error', result.error)
          break
      }
    }
  
    return result
  }
  
  export const baseApi = createApi({
    baseQuery: baseQueryWithErrorHandler,
    endpoints: () => ({}),
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    serializeQueryArgs: ({ endpointName }) => endpointName,
  })