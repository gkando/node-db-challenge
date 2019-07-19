const express = require('express');

const projects = require('./project-model');

const router = express.Router();

//C
router.post('/', async (req, res) => {
  const projectData = req.body;
  try {
    const project = await projects.add(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }
});

router.post('/:id/actions', async (req, res) => {
  const actionData = req.body;
  const { id } = req.params; 
  try {
    const project = await projects.findById(id);
    if (project) {
      actionData.project_id = id;
      const action = await projects.addAction(actionData);
      res.status(201).json(action);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new action' });
  }
});

//R
router.get('/', async (req, res) => {
  try {
    const project = await projects.find();
    console.log(project)
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await projects.findById(id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
});

router.get('/:id/actions', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await projects.findById(id);
    if (project) {
      const actions = await projects.getActions(id);
      if (actions.length) {
        project.actions = actions;
        res.status(201).json(project);
      } else {
        res.status(404).json({ message: 'Could not find actions for given project' })
      }
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get actions' });
  }
});

//U
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const project = await projects.findById(id);
    if (project) {
      const updatedProject = await projects.update(changes, id);
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update project' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await projects.remove(id);
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;