const express = require('express');
const { verifyToken, restrictTo } = require('../../middlewares/verifyToken');
const { ParcelController } = require('./parcel.controller');


const router = express.Router()


router.post('/', verifyToken, restrictTo('customer'), ParcelController.createParcel)

router.get('/my', verifyToken, restrictTo('customer'), ParcelController.getMyParcels)

// Admin:  get all parcels
router.get('/', verifyToken, restrictTo('admin'), ParcelController.getAllParcels)

// Assign agent to parcel (admin)
router.put('/assign/:id', verifyToken, restrictTo('admin'), ParcelController.assignAgent)

// Update parcel status (agent/admin)
router.put('/status/:id', verifyToken, restrictTo('admin', 'agent'), ParcelController.updateStatus)

// Track parcel by ID
router.get('/:id', verifyToken, ParcelController.getParcelById)

// Update location (only delivery agents)
router.put('/location/:id', verifyToken, restrictTo('agent'), ParcelController.updateLocation);


const ParcelRoutes = router;

module.exports = { ParcelRoutes };