const express = require('express');
const router = express.Router();

const FollowOrderController = require('../controllers/FollowOrderController');

router.post('/getDetail', FollowOrderController.getDetail);
router.get('/getDonHang/:slug', FollowOrderController.getDonHang);
router.post('/getTenKH', FollowOrderController.getTenKH)

module.exports = router;