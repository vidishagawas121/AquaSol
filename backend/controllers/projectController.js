import slugify from 'slugify';
import Project from '../models/Project.js';

export const getProjects = async (req, res, next) => {
  try {
    const { sector, systemType } = req.query;
    const filter = { isPublished: true };
    if (sector && sector !== 'All') filter.sector = sector;
    if (systemType && systemType !== 'All') filter.systemType = systemType;

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: projects.length, projects });
  } catch (error) {
    next(error);
  }
};

export const getProjectBySlug = async (req, res, next) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    const relatedProjects = await Project.find({
      _id: { $ne: project._id },
      isPublished: true,
    }).limit(3);

    res.json({ success: true, project, relatedProjects });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const slug = req.body.slug || slugify(req.body.title, { lower: true, strict: true });
    const project = await Project.create({ ...req.body, slug });
    res.status(201).json({ success: true, project });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, project });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    next(error);
  }
};
