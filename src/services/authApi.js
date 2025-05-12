import { baseApi } from './baseApi'
import apiRoutes from '@/api'
import { UserData } from '@/types/user'

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => {
        return {
          url: `${apiRoutes.auth.login}`,
          body: { ...userData },
          method: 'POST',
        }
      },
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation } = authApi