DROP DATABASE IF EXISTS lawyers_db;
CREATE DATABASE lawyers_db;
\c lawyers_db

CREATE TABLE lawyers(
  id serial primary key, 
  lawyer_name varchar 
);

CREATE TABLE corut(
  id serial primary key,
  corut_name varchar,
  location varchar,
  office varchar
);

CREATE TABLE cases(
  id serial primary key,
  case_name varchar,
  legal_instruments int,
  description varchar,
  date DATE,
  prosecultor varchar,
  defendant varchar,
  type varchar,
  lawyers_id int not null,
  court_id int not null,
  foreign key(lawyers_id) references lawyers ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key(court_id) references corut ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO lawyers(lawyer_name) 
VALUES 
('Abdulrab Ali Bin Talib'),
('Masarah'),
('Hamad'),
('Layal');

INSERT INTO corut(corut_name, location, office)
VALUES
('Superior Court of California of the County of Orange', '300 Washington St, Phoenix, AZ 85003', 'C1'),
('Supreme and District Courts Brisbane', '415 George St, Brisbane City QLD 4000, Australia', 'A1'),
('Kern County Superior Court', '1415 Truxtun Ave #212, Bakersfield, CA 93301', 'C2');



INSERT INTO cases( legal_instruments, description, date, prosecultor, defendant, type, lawyers_id, court_id)
VALUES 
(1234, 'Divore', '2019-1-15', 'Khaled', 'Mohammed', 'Family', 1, 1),
(738, 'Conflict between business partners','2019-2-15', 'Khaled', 'Mohammed', 'Commercial', 2, 2),
(8279, 'Conflict between siblings about the legacy', '2018-12-5', 'Sara', 'Ahmed', 'Family', 3, 1 ),
(73855, 'Where a claim to personal independence payment under the Social Security (Personal Independence Payment) Regulations 2013 is based on a person needing social support to be able to engage with other people: (1) must the social support needed be contemporaneous with the engagement being supported? (2) does anything that constitutes needing "prompting" to be able to engage with other people also constitute social support, subject to it being provided by a person trained or experienced in assisting people to engage in social situations?','2019-2-4', 'Lanjul', 'Alex', 'Money', 1, 2),
(8339, 'adoption', '2018-11-9', 'Richard', 'Yun', 'Family', 4, 3 ), 
(8348, 'Premarital agreements', '2019-3-5', 'Sania', 'Sani', 'Family',  2, 1), 
(4934, 'Offer Acceptance', '2019-2-22', 'Henthorn', 'Fraser', 'Commercial', 3, 3 ),
(564, 'Child labour', '2018-11-22', 'Shafeeg', 'Abdullah', 'Labour', 2, 3),
(4839, 'Husband and wife allowance', '2019-5-6', 'Vicky', 'Ross', 'Contract', 4, 3);





-- SELECT lawyers.name  as lawyer , corut.name as corutName where lawyers.email = $1 where  
--  SELECT lawyers.name  as lawyer , cases.name as casesName from cases , lawyers  where lawyers.name='Abdulrab Ali Bin Talib' and cases.lawyers_id =lawyers.id;
-- SELECT lawyers.*  as lawyer , cases.* as casesName, corut.* as corut  from corut,  cases , lawyers  where cases.lawyers_id =lawyers.id and cases.court_id=corut.id;