Use hyf_lesson1;
/*Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id*/
INSERT INTO
  task (
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES
  (
    'Car Wash',
    'title says it all',
    '2021-08-01 06:54:16',
    '2021-08-15 13:05:09',
    '2021-08-31 21:15:21',
    2,
    1
  );
  /*Change the title of a task*/
UPDATE
  task
SET
  title = 'Wash the RED car'
WHERE
  id = 36;
  /*Change a task due date*/
UPDATE
  task
SET
  due_date = '2021-10-01 12:12:12'
WHERE
  id = 36;
  /*Change a task status*/
UPDATE
  task
SET
  status_id = 1
WHERE
  id = 36;
  /*Mark a task as complete*/
UPDATE
  task
SET
  status_id = 3
WHERE
  id = 36;
  /*Delete a task*/
DELETE FROM
  task
WHERE
  id = 36;