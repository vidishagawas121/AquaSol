import Lead from '../models/Lead.js';

// @desc    Submit a new customer enquiry / lead
// @route   POST /api/leads
// @access  Public
export const createLead = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      email,
      city,
      propertyType,
      interestedProduct,
      interestedService,
      monthlyBill,
      estimatedCapacity,
      message,
      source,
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name and phone number are required to submit an enquiry',
      });
    }

    const lead = await Lead.create({
      name,
      phone,
      email,
      city: city || 'Pune',
      propertyType: propertyType || 'Residential',
      interestedProduct,
      interestedService,
      monthlyBill: monthlyBill ? Number(monthlyBill) : undefined,
      estimatedCapacity,
      message,
      source: source || 'Website Hero',
      status: 'New',
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Aquasol Energy solar advisors will contact you shortly.',
      leadId: lead._id,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all leads with search, filter, pagination
// @route   GET /api/leads
// @access  Private (Admin)
export const getLeads = async (req, res, next) => {
  try {
    const { status, source, search, page = 1, limit = 50 } = req.query;
    const query = {};

    if (status && status !== 'All') {
      query.status = status;
    }
    if (source && source !== 'All') {
      query.source = source;
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
      ];
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const total = await Lead.countDocuments(query);
    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    res.json({
      success: true,
      count: leads.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      leads,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single lead by ID
// @route   GET /api/leads/:id
// @access  Private (Admin)
export const getLeadById = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }
    res.json({ success: true, lead });
  } catch (error) {
    next(error);
  }
};

// @desc    Update lead status & assignment
// @route   PUT /api/leads/:id/status
// @access  Private (Admin)
export const updateLeadStatus = async (req, res, next) => {
  try {
    const { status, assignedTo } = req.body;
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }

    if (status) lead.status = status;
    if (assignedTo) lead.assignedTo = assignedTo;

    await lead.save();
    res.json({ success: true, message: 'Lead updated successfully', lead });
  } catch (error) {
    next(error);
  }
};

// @desc    Add an internal note to a lead
// @route   POST /api/leads/:id/notes
// @access  Private (Admin)
export const addLeadNote = async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ success: false, message: 'Note text is required' });
    }

    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }

    lead.notes.unshift({
      text,
      author: req.user?.name || 'Admin',
      createdAt: new Date(),
    });

    await lead.save();
    res.json({ success: true, notes: lead.notes });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a lead
// @route   DELETE /api/leads/:id
// @access  Private (Admin)
export const deleteLead = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }
    await lead.deleteOne();
    res.json({ success: true, message: 'Lead removed successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dashboard metrics & Recharts data
// @route   GET /api/leads/stats/dashboard
// @access  Private (Admin)
export const getLeadStats = async (req, res, next) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: 'New' });
    const contactedLeads = await Lead.countDocuments({ status: 'Contacted' });
    const siteSurveys = await Lead.countDocuments({ status: 'Site Survey' });
    const quotations = await Lead.countDocuments({ status: 'Quotation Sent' });
    const convertedLeads = await Lead.countDocuments({ status: 'Converted' });

    // Leads by status aggregation
    const statusDistribution = await Lead.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: 1, _id: 0 } },
    ]);

    // Leads by source aggregation
    const sourceDistribution = await Lead.aggregate([
      { $group: { _id: '$source', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: 1, _id: 0 } },
    ]);

    // Recent 5 leads
    const recentLeads = await Lead.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      success: true,
      stats: {
        totalLeads,
        newLeads,
        contactedLeads,
        siteSurveys,
        quotations,
        convertedLeads,
      },
      statusDistribution,
      sourceDistribution,
      recentLeads,
    });
  } catch (error) {
    next(error);
  }
};
