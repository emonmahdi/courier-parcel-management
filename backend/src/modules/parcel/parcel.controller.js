const { ParcelService } = require("./parcel.service");

const createParcel = async (req, res) => {
  try {
    const parcel = await ParcelService.createParcel(req.body, req.user.id);
    res.status(201).json(parcel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllParcels = async (req, res) => {
  try {
    const parcel = await ParcelService.getAllParcels();
    res.json(parcel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMyParcels = async (req, res) => {
  try {
    const parcels = await ParcelService.getMyParcels(req.user?.id);
    res.json(parcels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const assignAgent = async (req, res) => {
  try {
    const parcels = await ParcelService.assignAgent(
      req.params.id,
      req.body.agentId
    );
    res.json(parcels);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const parcel = await ParcelService.updateStatus(
      req.params.id,
      req.body.status
    );
    res.json(parcel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getParcelById = async (req, res) => {
  try {
    const parcel = await ParcelService.getParcelById(req.params.id);
    res.json(parcel);
  } catch (err) {
    res.status(404).json({ message: "Parcel Not Found" });
  }
};

const ParcelController = {
  createParcel,
  getAllParcels,
  getMyParcels,
  assignAgent,
  updateStatus,
  getParcelById,
};

module.exports = { ParcelController };
