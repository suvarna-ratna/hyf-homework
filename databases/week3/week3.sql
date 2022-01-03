SET
  NAMES utf8mb4;
CREATE Database mealSharing;
Use mealSharing;
CREATE TABLE `meal` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `description` text NOT NULL,
    `location` varchar(55) NOT NULL,
    `when` datetime NOT NULL,
    `max_reservations` int(50) NOT NULL,
    `price` decimal,
    `created_date` date,
    PRIMARY KEY(id)
  );
CREATE TABLE `reservation` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `number_of_guests` int(11) NOT NULL,
    `meal_id` int(11) unsigned NOT NULL,
    `created_date` date,
    `contact_phonenumber` varchar(20) NOT NULL,
    `contact_name` varchar(55) NOT NULL,
    `contact_email` varchar(55) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
  );
CREATE TABLE `review` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(255),
    `description` text,
    `meal_id` int(10) unsigned NOT NULL,
    `stars` int NOT NULL,
    `created_date` date,
    PRIMARY KEY(id),
    FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
  );
--inserting meals
INSERT INTO
  meal(
    id,
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
values(
    1,
    'Frikadeller ',
    ' It is often served with brown sauce, potatoes, and cabbage.',
    'Marv & Ben-Snaregade 4, 1205 København',
    '2021-10-03 18:00:00',
    '10',
    '100',
    '2021-10-01'
  );
INSERT INTO
  meal(
    id,
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
values(
    2,
    ' Nigiri ',
    ' A topping,
    usually fish,
    served on top of sushi rice ',
    ' Karma Sushi - Nyhavn 63B,
    1051 K ø benhavn ',
    ' 2021-10-03 18:00:00 ',
    ' 10 ',
    ' 120 ',
    '2021-09-01'
  );
INSERT INTO
  meal(
    id,
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
values(
    3,
    ' Pulled Pork ',
    ' with tangy barbecue sauce on an onion knot ',
    ' Flammen - Roskilde ',
    '2021-10-04 19:00:00',
    ' 6 ',
    ' 160 ',
    '2021-09-01'
  );
INSERT INTO
  meal(
    id,
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
values(
    4,
    'Veggi Wrap',
    'roasted vegetables with curry mayo',
    ' Morgenstedet - Fabriksomr 1440 K ø benhavn ',
    ' 2021-10-04 10:05:00',
    '20',
    '60',
    '2021-08-25'
  );
INSERT INTO
  meal(
    id,
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
values(
    5,
    ' Bison Burger ',
    ' grass - fed organic bison with avacado',
    ' BurgerKing - Vesterbrogade 2B,
    1620 K ø benhavn ',
    ' 2021-10-05 09:00:00 ',
    ' 15 ',
    ' 70 ',
    ' 2021-08-17 '
  );
INSERT INTO
  meal(
    id,
    title,
    description,
    location,
    `when`,
    max_reservations,
    price,
    created_date
  )
values(
    6,
    'PANEER MAKHANI',
    ' Paneer
    and Capsicum with Makhani Sauce ',
    ' PizzaHut - Tastrup 6B,
    1627 K ø benhavn ',
    ' 2021-10-05 11:15:00 ',
    ' 5 ',
    ' 70 ',
    ' 2021-10-07 '
  );
--meal Queries
SELECT
  *
FROM
  meal;
--Getting a meal with any id
SELECT
  *
FROM
  meal
WHERE
  id = 2;
--Updating a meal with any id
UPDATE
  meal
SET
  title = ' Butter Chicken ',
  location = ' k ø ge '
WHERE
  id = 4;
--Deleting a meal with id
DELETE FROM
  meal
WHERE
  id = 6;
-- Inserting reservation
INSERT INTO
  reservation(
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    1,
    2,
    3,
    ' 2021-10-10 ',
    ' 53-40-64-66 ',
    ' suvarna ',
    ' suvarna @gmail.com '
  );
INSERT INTO
  reservation(
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    2,
    4,
    5,
    ' 2021-10-01 ',
    ' 23-59-54-65 ',
    ' sitara ',
    ' sitara @gmail.com '
  );
INSERT INTO
  reservation(
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    3,
    6,
    2,
    ' 2021-10-01 ',
    ' 98-63-04-57 ',
    ' Aaron ',
    ' aaron @gmail.com '
  );
INSERT INTO
  reservation(
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    4,
    5,
    1,
    ' 2021-10-02 ',
    ' 48-77-02-99 ',
    ' sophia ',
    ' sophia @gmail.com '
  );
INSERT INTO
  reservation (
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES(
    5,
    4,
    3,
    ' 2021-09-05 ',
    ' 35-38-80-21 ',
    ' Indra ',
    ' indra @gmail.com '
  );
--reservation Queries
  -- Get all reservations
SELECT
  *
from
  reservation;
-- Add a new reservation
INSERT INTO
  reservation (
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES(
    6,
    3,
    2,
    ' 2021-10-09 ',
    ' 35-38-80-21 ',
    ' David ',
    ' david @gmail.com '
  );
-- Get a reservation with any id, fx 1
SELECT
  *
FROM
  reservation
WHERE
  id = 2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  reservation
set
  number_of_guests = 7,
  meal_id = 5
WHERE
  id = 4;
-- Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  id = 3;
--inserting review values
INSERT INTO
  review(
    id,
    title,
    description,
    meal_id,
    stars,
    created_date
  )
values(
    1,
    ' Great ',
    ' very delicious ',
    1,
    ' 4 ',
    ' 2021-10-01 '
  );
INSERT INTO
  review(
    id,
    title,
    description,
    meal_id,
    stars,
    created_date
  )
values(
    2,
    ' Perfect ',
    ' perfectly cooked ',
    2,
    ' 5 ',
    ' 2021-10-05 '
  );
INSERT INTO
  review(
    id,
    title,
    description,
    meal_id,
    stars,
    created_date
  )
values(
    3,
    ' Amazing ! ',
    ' super fresh ',
    4,
    ' 2 ',
    ' 2021-09-20 '
  );
INSERT INTO
  review(
    id,
    title,
    description,
    meal_id,
    stars,
    created_date
  )
values(
    4,
    ' Bad Taste ',
    ' baked improperly ',
    3,
    ' 3 ',
    ' 2021-08-29 '
  );
INSERT INTO
  review(
    id,
    title,
    description,
    meal_id,
    stars,
    created_date
  )
values(
    5,
    ' Super Quality ',
    ' enjoyed ',
    5,
    ' 3 ',
    ' 2021-09-05 '
  );
INSERT INTO
  review(
    id,
    title,
    description,
    meal_id,
    stars,
    created_date
  )
values(
    6,
    ' Great experience ',
    ' nicely served ',
    '2',
    ' 4 ',
    ' 2021-08-30 '
  );
---Review Queries
  -- Get all reviews
SELECT
  *
FROM
  review;
-- Add a new review
INSERT INTO
  review(
    id,
    title,
    `description`,
    meal_id,
    stars,
    created_date
  )
VALUES(
    5,
    ' Amazing ',
    ' It was good in taste ',
    3,
    5,
    ' 2021-10-09 '
  );
-- Get a review with any id, fx 1
SELECT
  *
from
  review
WHERE
  id = 6;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  review
set
  title = ' very bad ',
  description = ' its soo cold ',
  stars = 2
WHERE
  id = 5;
-- Delete a review with any id, fx 1
DELETE FROM
  review
WHERE
  id = 2;
---- some functions
  --Getting meals that has a price smaller than a specific price fx 90
SELECT
  *
FROM
  meal
WHERE
  price <= 50;
--Getting meals that still has available reservations
SELECT
  meal.id,
  meal.title,
  meal.location,
  meal.when,
  meal.max_reservations AS no_of_reservations,
  SUM(reservation.number_of_guests) AS no_of_reservations_booked,
  (
    meal.max_reservations - SUM(reservation.number_of_guests)
  ) AS no_of_reservations_remain
FROM
  meal
  JOIN reservation ON reservation.meal_id = meal.id
GROUP BY
  reservation.meal_id;
--Getting meals that partially match a title.
SELECT
  *
FROM
  meal
WHERE
  title LIKE ' %chicken% ';
--Getting meals that has been created between two dates
SELECT
  *
FROM
  meal
WHERE
  created_date BETWEEN ' 2020-10-01 '
  AND ' 2021-10-30 ';
-- Getting only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  meal
LIMIT
  5;
--Getting the meals that have good reviews
SELECT
  meal.title,
  stars,
  review.description
FROM
  meal
  JOIN review ON meal.id = review.meal_id
WHERE
  stars > ' 2 ';
--Getting reservations for a specific meal sorted by created_date
SELECT
  meal.title,
  location,
  `when`,
  max_reservations,
  number_of_guests,
  reservation.created_date
FROM
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  meal.id = 3
ORDER BY
  reservation.created_date;
-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  meal.description,
  AVG(stars) AS avg_review
FROM
  meal
  JOIN review ON meal.id = review.meal_id
GROUP BY
  meal_id
ORDER BY
  avg_review DESC;