import { useState, useEffect } from 'react';
import { useCreateParcelMutation } from '../../redux/features/parcel/parcelApi';

const defaultFormData = {
  pickupAddress: '',
  deliveryAddress: '',
  parcelType: 'document',
  size: 'small',
  isCOD: false,
  amount: 0,
};

const BookParcel = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [createParcel, { isLoading, isSuccess, error }] = useCreateParcelMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createParcel(formData);
  };

  // ✅ Reset form on success
  useEffect(() => {
    if (isSuccess) {
      setFormData(defaultFormData);
    }
  }, [isSuccess]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Book Parcel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="pickupAddress"
          value={formData.pickupAddress}
          onChange={handleChange}
          placeholder="Pickup Address"
          className="w-full border px-3 py-2"
          required
        />

        <input
          name="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={handleChange}
          placeholder="Delivery Address"
          className="w-full border px-3 py-2"
          required
        />

        <select
          name="parcelType"
          value={formData.parcelType}
          onChange={handleChange}
          className="w-full border px-3 py-2"
        >
          <option value="document">Document</option>
          <option value="box">Box</option>
          <option value="fragile">Fragile</option>
          <option value="other">Other</option>
        </select>

        <select
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border px-3 py-2"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isCOD"
            checked={formData.isCOD}
            onChange={handleChange}
          />
          Cash on Delivery
        </label>

        {formData.isCOD && (
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border px-3 py-2"
            placeholder="Amount"
            min={0}
          />
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isLoading ? 'Booking...' : 'Book Parcel'}
        </button>

        {isSuccess && (
          <p className="text-green-500 text-sm mt-2">
            ✅ Parcel booked successfully!
          </p>
        )}

        {error && (
          <p className="text-red-500 text-sm mt-2">
            ❌ Failed to book parcel. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default BookParcel;



// import { useState } from 'react';
// import { useCreateParcelMutation } from '../../redux/features/parcel/parcelApi';

// const BookParcel = () => {
//   const [formData, setFormData] = useState({
//     pickupAddress: '',
//     deliveryAddress: '',
//     parcelType: 'document',
//     size: 'small',
//     isCOD: false,
//     amount: 0,
//   });

//   const [createParcel, { isLoading, isSuccess, error }] = useCreateParcelMutation();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createParcel(formData);
//   };


  
//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
//       <h2 className="text-xl font-bold mb-4">Book Parcel</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="pickupAddress" onChange={handleChange} value={formData.pickupAddress} placeholder="Pickup Address" className="w-full border px-3 py-2" required />
//         <input name="deliveryAddress" onChange={handleChange} value={formData.deliveryAddress} placeholder="Delivery Address" className="w-full border px-3 py-2" required />

//         <select name="parcelType" onChange={handleChange} value={formData.parcelType} className="w-full border px-3 py-2">
//           <option value="document">Document</option>
//           <option value="box">Box</option>
//           <option value="fragile">Fragile</option>
//           <option value="other">Other</option>
//         </select>

//         <select name="size" onChange={handleChange} value={formData.size} className="w-full border px-3 py-2">
//           <option value="small">Small</option>
//           <option value="medium">Medium</option>
//           <option value="large">Large</option>
//         </select>

//         <label className="flex items-center gap-2">
//           <input type="checkbox" name="isCOD" onChange={handleChange} checked={formData.isCOD} />
//           Cash on Delivery
//         </label>

//         {formData.isCOD && (
//           <input type="number" name="amount" onChange={handleChange} value={formData.amount} className="w-full border px-3 py-2" placeholder="Amount" />
//         )}

//         <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 rounded">
//           {isLoading ? 'Booking...' : 'Book Parcel'}
//         </button>
//         {isSuccess && <p className="text-green-500">Parcel Booked Successfully!</p>}
//         {error && <p className="text-red-500">Something went wrong.</p>}
//       </form>
//     </div>
//   );
// };

// export default BookParcel;

 
