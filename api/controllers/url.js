const validUrl = require('valid-url');
const shortId = require('shortid');
const Url = require('../models/Url');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @description Create a short url based on a long url
 * @route /api/v1/url/shorten
 * @method POST
 * @access Public
 */
exports.shortenUrl = asyncHandler(async (req, res, next) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(process.env.BASE_URL)) {
    return next(new ErrorResponse('Invalid base url', 400));
  }

  if (!validUrl.isUri(longUrl)) {
    return next(new ErrorResponse('Invalid Url', 400));
  }

  const urlCode = shortId.generate();

  let url = await Url.findOne({ longUrl });

  if (!url) {
    const shortUrl = `${process.env.BASE_URL}/${urlCode}`;

    url = await Url.create({
      longUrl,
      shortUrl,
      urlCode
    });
  }

  res.status(200).json({
    success: true,
    data: url
  });
});
