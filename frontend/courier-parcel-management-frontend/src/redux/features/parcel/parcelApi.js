import { apiSlice } from "../../api/apiSlice";

export const parcelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Parcel"],
    }),

    getMyParcels: builder.query({
      query: () => "/parcels/my",
      providesTags: ["Parcel"],
    }),

    getAllParcels: builder.query({
      query: () => "/parcels",
      providesTags: ["Parcel"],
    }),

    getParcelById: builder.query({
      query: (id) => `/parcels/${id}`,
      providesTags: (result, error, id) => [{ type: "Parcel", id }],
    }),

    assignAgent: builder.mutation({
      query: ({ id, agentId }) => ({
        url: `/parcels/assign/${id}`,
        method: "PUT",
        body: { agentId },
      }),
      invalidatesTags: ["Parcel"],
    }),

    updateStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/parcels/status/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Parcel"],
    }),

    updateLocation: builder.mutation({
      query: ({ id, lat, lng }) => ({
        url: `/parcels/location/${id}`,
        method: "PUT",
        body: { lat, lng },
      }),
      invalidatesTags: ["Parcel"],
    }),
  }),
});

export const {
  useCreateParcelMutation,
  useGetMyParcelsQuery,
  useGetAllParcelsQuery,
  useGetParcelByIdQuery,
  useAssignAgentMutation,
  useUpdateStatusMutation,
  useUpdateLocationMutation,
} = parcelApi;
