import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getStorage } from "./Utils";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
    prepareHeaders: (headers) => {
      const token = getStorage("idToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  employeelist: ["EmployeeList"],
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});

//   endpoints: (builder) => ({
//     getEmployee: builder.query({
//       query: () => `employee/`,
//       providesTags: ["EmployeeList"],
//     }),

//     getEmployeeById: builder.query({
//       query: (id) => `employee/${id}`,
//     }),

//     createEmployee: builder.mutation({
//       query: (payload) => ({
//         url: "employee/",
//         method: "POST",
//         body: payload,
//       }),
//     }),

//     updateEmployeeById: builder.mutation({
//       query: (payload) => ({
//         url: `employee/${payload.id}`,
//         method: "PUT",
//         body: payload,
//       }),
//     }),

//     deleteEmployeeById: builder.mutation({
//       query: (id) => ({
//         url: `employee/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["EmployeeList"],
//     }),

//     loginEmployee: builder.mutation({
//       query: (payload) => ({
//         url: "employee/login",
//         method: "POST",
//         body: payload,
//       }),
//     }),
//   }),
// });

// export const {
//   useGetEmployeeQuery,
//   useCreateEmployeeMutation,
//   useGetEmployeeByIdQuery,
//   useDeleteEmployeeByIdMutation,
//   useUpdateEmployeeByIdMutation,
//   useLoginEmployeeMutation,
// } = baseApi;
