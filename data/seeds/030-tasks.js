
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'task A', task_notes: 'this is a task', task_completed: false, project_id: 1},
        {task_description: 'task B', task_notes: 'this is another task', task_completed: false, project_id: 1},
        {task_description: 'task C', task_notes: 'this is a task again', task_completed: false, project_id: 2},
        {task_description: 'task D', task_notes: 'this is yet again a task', task_completed: false, project_id: 2},
        {task_description: 'task E', task_notes: 'this is a task labeled e', task_completed: false, project_id: 2},
        {task_description: 'task F', task_notes: 'this is the a test task', task_completed: false, project_id: 3},
        {task_description: 'task G', task_notes: 'this is a task a task a task', task_completed: false, project_id: 3},
        {task_description: 'task H', task_notes: 'this is the a ksat', task_completed: false, project_id: 1},
        {task_description: 'task I', task_notes: 'this is the the last seeded task', task_completed: false, project_id: 2}
      ]); 
    });
};
