const Url = require('../models/Url');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.loadUrl = asyncHandler(async (req, res, next) => {
  const url = await Url.findOne({ urlCode: req.params.code });

  if (!url) {
    return next(new ErrorResponse('No url found', 400));
  }

  res.redirect(url.longUrl);
});
