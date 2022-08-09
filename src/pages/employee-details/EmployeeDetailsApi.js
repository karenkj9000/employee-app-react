import { baseApi } from "../../services/Api";

const employeeDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeById: builder.query({
      query: (id) => `employee/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetEmployeeByIdQuery } = employeeDetailsApi;
