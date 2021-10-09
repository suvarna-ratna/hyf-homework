USE hyf_lesson2;
/*Get all the tasks assigned to users whose email ends in @spotify.com*/
SELECT
  user.email,
  task.title,
  task.description
from
  (
    task
    join user_task on task.id = user_task.task_id
  )
  join user on user.id = user_task.user_id
WHERE
  user.email LIKE '%@spotify.com';
  /*Get all the tasks for 'Donald Duck' with status 'Not started'*/
SELECT
  user.name as userN,
  task.title,
  task.description,
  status.name as statusN
from
  (
    (
      task
      join user_task on task.id = user_task.task_id
    )
    join user on user.id = user_task.user_id
  )
  join status on status.id = task.status_id
WHERE
  user.name = 'Donald Duck'
  and status.name = 'Not started';
  /*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/
SELECT
  user.name as userN,
  task.title,
  task.description,
  task.created as createdInSep
from
  (
    task
    join user_task on task.id = user_task.task_id
  )
  join user on user.id = user_task.user_id
WHERE
  user.name = 'Maryrose Meadows'
  and task.created LIKE '%-09-%';
  /*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/
SELECT
  user.name as userN,
  task.title,
  task.description,
  task.created as createdInSep
from
  (
    task
    join user_task on task.id = user_task.task_id
  )
  join user on user.id = user_task.user_id
WHERE
  user.name = 'Maryrose Meadows'
  and month(task.created) = 09;
  /*Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/
SELECT
  COUNT(id) AS total_in_month,
  month(created) as createdMonth
FROM
  task
GROUP BY
  month(created);