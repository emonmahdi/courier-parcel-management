// // src/pages/customer/BookParcel.jsx
// import { useState } from "react";
// import toast from "react-hot-toast";

// const BookParcel = () => {
//   const [formData, setFormData] = useState({
//     pickupAddress: "",
//     deliveryAddress: "",
//     parcelType: "Document",
//     isCOD: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // TODO: Send to backend
//       toast.success("Parcel booked successfully!");
//       setFormData({
//         pickupAddress: "",
//         deliveryAddress: "",
//         parcelType: "Document",
//         isCOD: false,
//       });
//     } catch (err) {
//       toast.error("Booking failed. Try again.", err.message);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Book a Parcel</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="pickupAddress"
//           placeholder="Pickup Address"
//           value={formData.pickupAddress}
//           onChange={handleChange}
//           required
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="text"
//           name="deliveryAddress"
//           placeholder="Delivery Address"
//           value={formData.deliveryAddress}
//           onChange={handleChange}
//           required
//           className="w-full border px-4 py-2 rounded"
//         />
//         <select
//           name="parcelType"
//           value={formData.parcelType}
//           onChange={handleChange}
//           className="w-full border px-4 py-2 rounded"
//         >
//           <option>Document</option>
//           <option>Electronics</option>
//           <option>Clothing</option>
//           <option>Fragile</option>
//         </select>
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             name="isCOD"
//             checked={formData.isCOD}
//             onChange={handleChange}
//           />
//           Cash on Delivery (COD)
//         </label>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookParcel;
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createParcel } from "../../redux/features/parcel/parcelThunk";
import { resetParcelState } from "../../redux/features/parcel/parcelSlice";

const BookParcel = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.parcel);
  console.log(success)

  // const [formData, setFormData] = useState({
  //   pickupAddress: "",
  //   deliveryAddress: "",
  //   parcelType: "Document",
  //   isCOD: false,
  // });

  const [formData, setFormData] = useState({
  pickupAddress: "",
  deliveryAddress: "",
  parcelType: "document",  // should match backend enum
  size: "small",           // required field
  isCOD: false,
  amount: 0,               // required if isCOD
});



  useEffect(() => {
    if (success) {
      toast.success("Parcel booked successfully!");
      setFormData({
        pickupAddress: "",
        deliveryAddress: "",
        parcelType: "Document",
        isCOD: false,
      });
      dispatch(resetParcelState());
    }

    if (error) {
      toast.error(error);
      dispatch(resetParcelState());
    }
  }, [success, error, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createParcel(formData));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Book a Parcel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="pickupAddress"
          placeholder="Pickup Address"
          value={formData.pickupAddress}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="deliveryAddress"
          placeholder="Delivery Address"
          value={formData.deliveryAddress}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <select
          name="parcelType"
          value={formData.parcelType}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option>Document</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Fragile</option>
        </select>
        <select
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        {formData.isCOD && (
          <input
            type="number"
            name="amount"
            placeholder="Enter COD Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        )}

 
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isCOD"
            checked={formData.isCOD}
            onChange={handleChange}
          />
          Cash on Delivery (COD)
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookParcel;

