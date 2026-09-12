import SiteSurvey from '../models/SiteSurvey.js';
import Lead from '../models/Lead.js';

// @desc    Book a site survey
// @route   POST /api/site-surveys
// @access  Public
export const bookSurvey = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      email,
      propertyType,
      address,
      city,
      pincode,
      requirement,
      preferredDate,
      preferredTime,
      notes,
    } = req.body;

    if (!name || !phone || !address || !preferredDate) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone, address, and preferred date are required to schedule a site survey.',
      });
    }

    const survey = await SiteSurvey.create({
      name,
      phone,
      email,
      propertyType: propertyType || 'Independent Bungalow/Villa',
      address,
      city: city || 'Pune',
      pincode,
      requirement: requirement || 'PM Surya Ghar Rooftop Solar',
      preferredDate,
      preferredTime: preferredTime || 'Morning (10 AM - 1 PM)',
      notes,
      status: 'Requested',
    });

    // Also register lead into CRM automatically
    await Lead.create({
      name,
      phone,
      email,
      city: city || 'Pune',
      propertyType: propertyType || 'Residential',
      interestedProduct: requirement,
      message: `Site Survey requested for ${preferredDate} (${preferredTime || 'Morning'}). Address: ${address}`,
      source: 'Site Survey',
      status: 'Site Survey',
    });

    res.status(201).json({
      success: true,
      message: 'Your site survey appointment has been requested! Our Pune technical engineer will confirm the visit with you.',
      survey,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all site surveys
// @route   GET /api/site-surveys
// @access  Private (Admin)
export const getSurveys = async (req, res, next) => {
  try {
    const surveys = await SiteSurvey.find().sort({ createdAt: -1 });
    res.json({ success: true, count: surveys.length, surveys });
  } catch (error) {
    next(error);
  }
};

// @desc    Update survey status
// @route   PUT /api/site-surveys/:id
// @access  Private (Admin)
export const updateSurveyStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const survey = await SiteSurvey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ success: false, message: 'Survey not found' });
    }
    if (status) survey.status = status;
    await survey.save();
    res.json({ success: true, survey });
  } catch (error) {
    next(error);
  }
};
