import slugify from 'slugify';
import Solution from '../models/Solution.js';

export const getSolutions = async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = { isPublished: true };
    if (category && category !== 'All') filter.category = category;

    const solutions = await Solution.find(filter).sort({ order: 1 });
    res.json({ success: true, count: solutions.length, solutions });
  } catch (error) {
    next(error);
  }
};

export const getSolutionBySlug = async (req, res, next) => {
  try {
    const solution = await Solution.findOne({ slug: req.params.slug });
    if (!solution) {
      return res.status(404).json({ success: false, message: 'Solution not found' });
    }
    res.json({ success: true, solution });
  } catch (error) {
    next(error);
  }
};

export const createSolution = async (req, res, next) => {
  try {
    const slug = req.body.slug || slugify(req.body.title, { lower: true, strict: true });
    const solution = await Solution.create({ ...req.body, slug });
    res.status(201).json({ success: true, solution });
  } catch (error) {
    next(error);
  }
};

export const updateSolution = async (req, res, next) => {
  try {
    const solution = await Solution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, solution });
  } catch (error) {
    next(error);
  }
};

export const deleteSolution = async (req, res, next) => {
  try {
    await Solution.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Solution removed' });
  } catch (error) {
    next(error);
  }
};
