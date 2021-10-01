CREATE DATABASE school_database;
Use school_database;
CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
);
insert INTO
  class (id, name, begins, ends)
values
  (1, 'suvarna', '2020-10-01', '2021-09-30');
insert INTO
  class (id, name, begins, ends)
values
  (2, 'sitara', '2020-10-01', '2021-09-30');
insert INTO
  class (id, name, begins, ends)
values
  (3, 'Aaron', '2020-10-01', '2021-09-30');
insert INTO
  student (id, name, email, phone, class_id)
values
  (
    1,
    'Aarika Ellingworth',
    'aellingworth0@harvard.edu',
    '483-396-8795',
    1
  );
insert INTO
  student (id, name, email, phone, class_id)
values
  (
    2,
    'Pren Goldsworthy',
    'pgoldsworthy1@spotify.com',
    '635-572-8467',
    2
  );
insert INTO
  student (id, name, email, phone, class_id)
values
  (
    3,
    'Pablo Kisbee',
    'pkisbee2@lulu.com',
    '790-962-8683',
    3
  );
insert INTO
  student (id, name, email, phone, class_id)
values
  (
    4,
    'Rodie Duncan',
    'rduncan3@quantcast.com',
    '646-743-6191',
    3
  );
CREATE UNIQUE INDEX ind_name ON student(name);
ALTER TABLE
  class
ADD
  status ENUM('not-started', 'ongoing', 'finished') NOT NUL