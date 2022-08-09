import { baseApi } from "../../services/Api";

const employeeDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeById: builder.query({
      query: (id) => `employee/${id}`,
    }),

    updateEmployeeById: builder.mutation({
      query: (payload) => ({
        url: `employee/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateEmployeeByIdMutation, useGetEmployeeByIdQuery } =
  employeeDetailsApi;
