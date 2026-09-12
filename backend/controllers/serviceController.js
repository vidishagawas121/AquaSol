import slugify from 'slugify';
import Service from '../models/Service.js';

export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find({ isPublished: true }).sort({ order: 1 });
    res.json({ success: true, count: services.length, services });
  } catch (error) {
    next(error);
  }
};

export const getServiceBySlug = async (req, res, next) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    res.json({ success: true, service });
  } catch (error) {
    next(error);
  }
};

export const createService = async (req, res, next) => {
  try {
    const slug = req.body.slug || slugify(req.body.title, { lower: true, strict: true });
    const service = await Service.create({ ...req.body, slug });
    res.status(201).json({ success: true, service });
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, service });
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Service removed' });
  } catch (error) {
    next(error);
  }
};
