const Parcel = require("./parcel.model");

const createParcel = async (data, userId) => {
  const parcel = await Parcel.create({ ...data, customer: userId });
  return parcel;
};

const getAllParcels = async () => {
  const data = Parcel.find().populate("customer").populate("deliveryAgent");
  return data;
};

const getMyParcels = async (userId) => {
  const data = Parcel.find({ customer: userId });
  return data;
};
const assignAgent = async (parcelId, agentId) => {
  const data = Parcel.findByIdAndUpdate(
    parcelId,
    { deliveryAgent: agentId },
    { new: true }
  );
  return data;
};

const updateStatus = async (parcelId, status) => {
  const data = await Parcel.findByIdAndUpdate(
    parcelId,
    { status },
    { new: true }
  );
  return data;
};

const getParcelById = async (parcelId) => {
  const singleParcel = await Parcel.findById(parcelId)
    .populate("customer")
    .populate("deliveryAgent");
  return singleParcel;
};

const ParcelService = {
  createParcel,
  getAllParcels,
  getMyParcels,
  assignAgent,
  updateStatus,
  getParcelById,
};

module.exports = { ParcelService };
