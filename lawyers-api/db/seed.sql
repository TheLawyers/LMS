DROP DATABASE IF EXISTS lawyers_db;
CREATE DATABASE lawyers_db;
\c lawyers_db

CREATE TABLE lawyers(
  id serial primary key, 
  name varchar
);

CREATE TABLE corut(
  id serial primary key,
  name varchar,
  location varchar,
  office varchar
);

CREATE TABLE cases(
  id serial primary key,
  name varchar,
  legal_instruments int,
  description varchar,
  date date,
  prosecutor varchar,
  defendant varchar,
  type varchar,
  lawyers_id int not null,
  court_id int not null,
  foreign key(lawyers_id) references lawyers ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key(court_id) references corut ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO lawyers(name) 
VALUES 
('Abdulrab Ali Bin Talib'),
('Masarah'),
('Hamad'),
('Layal');

INSERT INTO corut(name, location, office)
VALUES
('Corut One', '123456,654321', 'b2');

INSERT INTO cases(name, legal_instruments, description, date, prosecutor, defendant, type, lawyers_id)
VALUES 
('Mohammed with Brother', 43237, 'Family Problem', '2019-1-15', 'Khaled', 'Mohammed', 'Family Status', 1),
('company GA with Students ', 44356, 'instructors cant explen ok becuse the student has hard understanding ', '2019-7-15', 'Masswrah', 'Jaki', 'Commercial ', 4),
('Ali agnist sultan', 43212, 'Ali stiell sultan mobile', '2019-1-15', 'Khaled', 'Mohammed', 'Family Status', 3),
('Mohammed with Brother', 43222, 'Family Problem', '2019-1-15', 'Khaled', 'Mohammed', 'Family Status', 3),
('Mohammed with Brother', 43234, 'Family Problem', '2019-1-15', 'Khaled', 'Mohammed', 'Family Status', 1);



INSERT INTO corut(name, location, office, cases_id)
VALUES
('Corut One', '123456,654321', 'b2', 1);

INSERT INTO cases(name, legal_instruments, description, date, prosecultor, defendant, type, lawyers_id, court_id)
VALUES 
('Mohammed with Brother', 1234, 'Family Problem', '2019-1-15', 'Khaled', 'Mohammed', 'Family Status', 1, 1);
