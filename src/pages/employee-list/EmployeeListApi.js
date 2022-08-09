import { baseApi } from "../../services/Api";

const employeeListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () => `employee/`,
      providesTags: ["EmployeeList"],
    }),

    deleteEmployeeById: builder.mutation({
      query: (id) => ({
        url: `employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EmployeeList"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetEmployeeQuery, useDeleteEmployeeByIdMutation } =
  employeeListApi;
