import { baseApi } from "../../services/Api";

const employeeDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (payload) => ({
        url: "employee/",
        method: "POST",
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateEmployeeMutation } = employeeDetailsApi;
