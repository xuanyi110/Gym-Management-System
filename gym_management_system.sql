/**
* DDL: Table creation quries
*/

DROP TABLE IF EXISTS FOOD_ITEM_IN_MEAL_PLAN;
DROP TABLE IF EXISTS MEAL_PLAN_RECOMMENDATION;
DROP TABLE IF EXISTS MEAL_PLAN;
DROP TABLE IF EXISTS MEMBERSHIP;
DROP TABLE IF EXISTS MEMBERSHIP_MODIFICATION;
DROP TABLE IF EXISTS FOOD_ITEM;
DROP TABLE IF EXISTS COURSE_REGISTRATION;
DROP TABLE IF EXISTS Course_in_area;
DROP TABLE IF EXISTS machine_in_Area;
DROP TABLE IF EXISTS PERSONAL_TRAINING;
DROP TABLE IF EXISTS CLEANING_RECORD;
DROP TABLE IF EXISTS REPORT;
DROP TABLE IF EXISTS GYM_SESSION;
DROP TABLE IF EXISTS JANITOR;
DROP TABLE IF EXISTS SALES;
DROP TABLE IF EXISTS MANAGER;
DROP TABLE IF EXISTS COACH;
DROP TABLE IF EXISTS COACH_EXPERIENCE;
DROP TABLE IF EXISTS STAFF;
DROP TABLE IF EXISTS Staff_Location;
DROP TABLE IF EXISTS COURSE;
DROP TABLE IF EXISTS Area;
DROP TABLE IF EXISTS locker;
DROP TABLE IF EXISTS CUSTOMER;

CREATE TABLE COURSE (
ID CHAR(20),
TITLE CHAR(20) NOT NULL,
DESCRIPTION CHAR(140),
PRIMARY KEY (ID)
);

CREATE TABLE CUSTOMER (
ID CHAR(20),
FIRST_NAME CHAR(30),
LAST_NAME CHAR(30),
PASSWORD CHAR(30),
ADDR CHAR(30),
DOB DATE,
GENDER CHAR(10),
PHONE CHAR(20),
EMAIL CHAR(30),
POSTAL_CODE CHAR(8),
PRIMARY KEY (ID)
);

CREATE TABLE Area (
ID CHAR(20),
Name CHAR(20),
AREA_SIZE CHAR(20),
PRIMARY KEY (ID)
);

CREATE TABLE COACH_EXPERIENCE (
YEARS INT,
COACH_LEVEL CHAR(10),
PRIMARY KEY (YEARS)
);

CREATE TABLE MEAL_PLAN (
ID CHAR(20),
NAME CHAR(20),
DESCRIPTION CHAR(140),
PRIMARY KEY (ID)
);


CREATE TABLE FOOD_ITEM (
NAME CHAR(20),
FAT INT,
CARBS INT,
PROTEIN INT,
CALORIES INT NOT NULL,
PRIMARY KEY (NAME)
);


CREATE TABLE Staff_Location(
Province CHAR(20),
City CHAR(20),
Postal_code CHAR(8),
PRIMARY KEY (Postal_code)
);


CREATE TABLE LOCKER (
ID CHAR(20),
LOCKER_SIZE CHAR(10),
STATUS CHAR(10),
CUSTOMER_ID CHAR(20),
PRIMARY KEY (ID),
FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(ID) ON DELETE CASCADE
);


CREATE TABLE Course_in_area (
course_id CHAR(20),
area_id CHAR(20),
PRIMARY KEY (course_id, area_id),
FOREIGN KEY (course_id) REFERENCES Course(ID) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (area_id) REFERENCES Area(ID) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE machine_in_Area (
machine_ID CHAR(20),
Area_ID CHAR(20),
description CHAR(20),
PRIMARY KEY (machine_ID),
FOREIGN KEY (Area_ID) REFERENCES Area(ID) ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE STAFF(
id CHAR(20),
firstName CHAR(30),
lastName CHAR(30),
password CHAR(30),
STAFF_SIN CHAR(20) NOT NULL,
month_salary REAL,
phone CHAR(20),
email CHAR(30),
address CHAR(30),
gender CHAR(10),
DOB DATE,
Postal_code CHAR(10),
PRIMARY KEY (id),
FOREIGN KEY (Postal_code) REFERENCES Staff_Location(Postal_code) ON DELETE CASCADE
);

CREATE TABLE COACH (
Staff_ID CHAR(20),
year_of_exp INT,
PRIMARY KEY (Staff_ID),
FOREIGN KEY (Staff_ID) REFERENCES staff(ID) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (year_of_exp) REFERENCES COACH_EXPERIENCE(YEARS) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE SALES (
ID CHAR(20),
SALES_LEVEL CHAR(10),
PRIMARY KEY (ID),
FOREIGN KEY (ID) REFERENCES STAFF(ID) ON DELETE CASCADE
);

CREATE TABLE MANAGER (
ID CHAR(20),
PRIMARY KEY (ID),
FOREIGN KEY (ID) REFERENCES STAFF(ID) ON DELETE CASCADE
);

CREATE TABLE MEMBERSHIP (
ID CHAR(20),
DATA_JOINED DATE,
DUE_DATE DATE,
PAYMENT_METHOD CHAR(60),
FEE CHAR(10),
CUSTOMER_ID CHAR(20),
SALES_ID CHAR(10),
PRIMARY KEY (ID),
FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(ID) ON DELETE CASCADE,
FOREIGN KEY (SALES_ID) REFERENCES SALES(ID) ON DELETE CASCADE
);

CREATE TABLE JANITOR (
ID CHAR(20),
PRIMARY KEY (ID),
FOREIGN KEY (ID) REFERENCES STAFF(ID) ON DELETE CASCADE
);

CREATE TABLE PERSONAL_TRAINING (
CUSTOMER CHAR(20),
COACH CHAR(20),
SCHEDULE CHAR(140),
PRIMARY KEY (CUSTOMER, COACH),
FOREIGN KEY (CUSTOMER) REFERENCES CUSTOMER(ID) ON DELETE CASCADE,
FOREIGN KEY (COACH) REFERENCES COACH(STAFF_ID) ON DELETE CASCADE
);

CREATE TABLE GYM_SESSION (
COURSE_ID CHAR(20) UNIQUE,
SESSION_NUMBER INT UNIQUE,
SCHEDULE CHAR(140),
SESSION_SIZE INT,
COACH_ID CHAR(10) UNIQUE,
PRIMARY KEY (COURSE_ID, SESSION_NUMBER),
FOREIGN KEY (COURSE_ID) REFERENCES COURSE(ID) ON DELETE CASCADE,
FOREIGN KEY (COACH_ID) REFERENCES COACH(STAFF_ID) ON DELETE CASCADE
);

CREATE TABLE COURSE_REGISTRATION (
CUSTOMER_ID CHAR(20),
COURSE_ID CHAR(20),
SESSION_NUMBER INT,
PRIMARY KEY (CUSTOMER_ID, COURSE_ID, SESSION_NUMBER),
FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(ID) ON DELETE CASCADE,
FOREIGN KEY (COURSE_ID) REFERENCES GYM_SESSION(COURSE_ID) ON DELETE CASCADE,
FOREIGN KEY (SESSION_NUMBER) REFERENCES GYM_SESSION(SESSION_NUMBER) ON DELETE CASCADE
);

CREATE TABLE MEMBERSHIP_MODIFICATION (
IDX INT,
MANAGER CHAR(20),
MEMBERSHIP_ID CHAR(20),
DESCRIPTION CHAR(50),
PRIMARY KEY (IDX),
FOREIGN KEY (MANAGER) REFERENCES MANAGER(ID) ON DELETE CASCADE,
FOREIGN KEY (MEMBERSHIP_ID) REFERENCES MEMBERSHIP(ID) ON DELETE CASCADE
);


CREATE TABLE FOOD_ITEM_IN_MEAL_PLAN (
PLAN_ID CHAR(20),
FOOD_ITEM CHAR(20),
QUANTITY INT,
PRIMARY KEY (PLAN_ID, FOOD_ITEM),
FOREIGN KEY (PLAN_ID) REFERENCES MEAL_PLAN(ID) ON DELETE CASCADE,
FOREIGN KEY (FOOD_ITEM) REFERENCES FOOD_ITEM(NAME) ON DELETE CASCADE
);

CREATE TABLE MEAL_PLAN_RECOMMENDATION (
PLAN_ID CHAR(10),
CUSTOMER_ID CHAR(20),
COACH_ID CHAR(20),
PRIMARY KEY (PLAN_ID, CUSTOMER_ID, COACH_ID),
FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(ID) ON DELETE CASCADE,
FOREIGN KEY (PLAN_ID) REFERENCES MEAL_PLAN(ID) ON DELETE CASCADE,
FOREIGN KEY (COACH_ID) REFERENCES COACH(STAFF_ID) ON DELETE CASCADE
);



CREATE TABLE CLEANING_RECORD (
IDX INT,
JANITOR CHAR(20) NOT NULL,
AREA CHAR(20) NOT NULL,
CLEAN_DATE DATE,
PRIMARY KEY (IDX),
FOREIGN KEY (JANITOR) REFERENCES JANITOR(ID) ON DELETE CASCADE,
FOREIGN KEY (AREA) REFERENCES AREA(ID) ON DELETE CASCADE
);

CREATE TABLE REPORT (
REPORTER CHAR(20),
MANAGER CHAR(20),
PRIMARY KEY (REPORTER),
FOREIGN KEY (REPORTER) REFERENCES STAFF(ID) ON DELETE CASCADE,
FOREIGN KEY (MANAGER) REFERENCES MANAGER(ID) ON DELETE CASCADE
);

/***************************************************************
* DDL: Data insertion queries
*/

/**
* Staff related tables
*/
 
-- Insert tuples into staff_location table
INSERT INTO Staff_Location VALUES ('BC', 'VANCOUVER', 'V6M7P3');
INSERT INTO Staff_Location VALUES ('AB', 'EDMONTON', 'T5Y6L2');
INSERT INTO Staff_Location VALUES ('BC', 'CHILLIWACK', 'V2R1W5');
INSERT INTO Staff_Location VALUES ('BC', 'ABBOTSFORD', 'V2S8G5');
INSERT INTO Staff_Location VALUES ('BC', 'LANLEY', 'V2Y2N5');
 
-- Insert tuples into Staff table
INSERT INTO STAFF VALUES ('J1', 'GAVIN', 'SMITH', '123456', '865265904', 5000, '2635980144', 'e001@gmail.com', '544 Anys Dr', 'M', '1988-02-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('J2', 'ANDY', 'SOOS', '1235H56', '8652535904', 4500, '2636970144', 'e002@gmail.com', '524 Berys Dr', 'M', '1998-04-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('J3', 'SMOTH', 'JIGER', '12TYGFDD6', '853535325', 5500, '4586259641', 'e003@gmail.com', '64 ALMA ST', 'F', '1993-02-05', 'V6M7P3');
INSERT INTO STAFF VALUES ('J4', 'SARAH', 'TRUOP', 'HUIOI21', '9853654781', 3500, '2364590165', 'e004@gmail.com', '63 Anys Dr', 'F', '1978-02-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('J5', 'ANA', 'SOUZA', '785225IK', '7536920154', 6000, '9853046132', 'e005@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('M1', 'JJ', 'LIN', 'PW123', '7153', 6000, '9853046132', 'e006@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('M2', 'J', 'CHOW', 'PW234', '7813788', 6000, '9853046132', 'e007@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('M3', 'FFF', 'L11', 'PW62345', '79389', 6000, '9853046132', 'e008@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('M4', 'F12', 'LASS1', 'PW54Y', '78961389', 6000, '9853046132', 'e009@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('M5', 'F2D5', 'L23425', 'PWCG534', '71397893', 6000, '9853046132', 'e010@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('S1', 'FS1', 'LS1', 'PWS1', '65467875513', 6000, '9853046132', 'e011@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('S2', 'FS2', 'LS2', 'PWS2', '654624353513', 6000, '9853046132', 'e012@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('S3', 'FS3', 'LS3', 'PWS3', '654657513', 6000, '9853046132', 'e013@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('S4', 'FS4', 'LS4', 'PWS4', '6523546513', 6000, '9853046132', 'e014@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('S5', 'FS5', 'LS5', 'PWS5', '6542356513', 6000, '9853046132', 'e015@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('C1', 'FC1', 'LC1', 'PWC1', '7896846513', 6000, '9853046132', 'e021@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('C2', 'FC2', 'LC2', 'PWC2', '7812345296513', 6000, '9853046132', 'e022@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('C3', 'FC3', 'LC3', 'PWC3', '78143296513', 6000, '9853046132', 'e023@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('C4', 'FC4', 'LC4', 'PWC4', '78965436734513', 6000, '9853046132', 'e024@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
INSERT INTO STAFF VALUES ('C5', 'FC5', 'LC5', 'PWC5', '782364696513', 6000, '9853046132', 'e025@gmail.com', '544 WLES Dr', 'F', '2000-12-08', 'V6M7P3');
 
-- Insert tuples into sales table
INSERT INTO SALES VALUES ('S1', 'L1');
INSERT INTO SALES VALUES ('S2', 'L4');
INSERT INTO SALES VALUES ('S3', 'L3');
INSERT INTO SALES VALUES ('S4', 'L2');
INSERT INTO SALES VALUES ('S5', 'L2');
 
-- Insert tuples into manager table
INSERT INTO MANAGER VALUES ('M1');
INSERT INTO MANAGER VALUES ('M2');
INSERT INTO MANAGER VALUES ('M3');
INSERT INTO MANAGER VALUES ('M4');
INSERT INTO MANAGER VALUES ('M5');
 
-- Insert tuples into janitor table
INSERT INTO JANITOR VALUES ('J1');
INSERT INTO JANITOR VALUES ('J2');
INSERT INTO JANITOR VALUES ('J3');
INSERT INTO JANITOR VALUES ('J4');
INSERT INTO JANITOR VALUES ('J5');
 
-- Insert tuples into coach_experience table
INSERT INTO COACH_EXPERIENCE VALUES (1, 'E');
INSERT INTO COACH_EXPERIENCE VALUES (2, 'D');
INSERT INTO COACH_EXPERIENCE VALUES (3, 'C');
INSERT INTO COACH_EXPERIENCE VALUES (4, 'B');
INSERT INTO COACH_EXPERIENCE VALUES (5, 'A');
INSERT INTO COACH_EXPERIENCE VALUES (6, 'A+');
INSERT INTO COACH_EXPERIENCE VALUES (7, 'A++');
INSERT INTO COACH_EXPERIENCE VALUES (8, 'A+++');
INSERT INTO COACH_EXPERIENCE VALUES (9, 'A++++');
 
-- Insert tuples into coach table
INSERT INTO COACH VALUES ('C1', '2');
INSERT INTO COACH VALUES ('C2', '5');
INSERT INTO COACH VALUES ('C3', 1);
INSERT INTO COACH VALUES ('C4', 3);
INSERT INTO COACH VALUES ('C5', 2);
 
/**
* Course related tables
*/
 
-- Insert tuples into course table
INSERT INTO COURSE VALUES ('1', 'YOGA', 'FLEXIBILITY');
INSERT INTO COURSE VALUES ('2', 'CARDIO', 'BURN FAT');
INSERT INTO COURSE VALUES ('3', 'BODY WEIGHT', 'STRENGTH');
INSERT INTO COURSE VALUES ('4', 'BIKING', 'STAMINA');
INSERT INTO COURSE VALUES ('5', 'DANCING', NULL);
 
-- Insert tuples into GYM_SESSION table
INSERT INTO GYM_SESSION VALUES ('1', 1, 'TUE 14:30 - 15:30', 20, 'C5');
INSERT INTO GYM_SESSION VALUES ('2', 2, 'WED 14:30 - 15:30', 20, 'C4');
INSERT INTO GYM_SESSION VALUES ('3', 3, 'WED 14:30 - 15:30', 20, 'C2');
INSERT INTO GYM_SESSION VALUES ('4', 4, 'SAT 14:30 - 15:30', 20, 'C1');
INSERT INTO GYM_SESSION VALUES ('5', 5, 'THU 14:30 - 15:30', 20, 'C3');
 

 
/**
* Customer related tables
*/
 
-- Insert tuples into customer table
INSERT INTO CUSTOMER VALUES ('1', 'KAKASHI', 'HATAKE', '123', 'HOUSE A', '1989-06-04', 'M', '123456', 'K@H', '987564');
INSERT INTO CUSTOMER VALUES ('2', 'NARUTO', 'UZUMAKI', '123', 'HOUSE B', '1999-06-04', 'M', '123756', 'N@U', '987565');
INSERT INTO CUSTOMER VALUES ('3', 'SAKURA', 'HARUNO', '123', 'HOUSE C', '1999-06-04', 'F', '133456', 'S@H', '987566');
INSERT INTO CUSTOMER VALUES ('4', 'SASUKE', 'UCHIHA', '123', 'HOUSE D', '1999-06-04', 'M', '123856', 'S@U', '987567');
INSERT INTO CUSTOMER VALUES ('5', 'JIRAIYA', NULL, '123', 'HOUSE E', '1979-06-04', 'M', '123496', 'J@NULL', '987568');
 
-- Insert tuples into membership table
INSERT INTO MEMBERSHIP VALUES ('1', '2019-06-12', '2019-08-31', 'MASTER: 651898465168415', '20', '1', 'S2');
INSERT INTO MEMBERSHIP VALUES ('2', '2019-06-12', '2019-08-31', 'VISA: 356845465168415', '20', '2', 'S3');
INSERT INTO MEMBERSHIP VALUES ('3', '2019-06-12', '2019-08-31', 'MASTER: 651878979168415', '20', '3', 'S4');
INSERT INTO MEMBERSHIP VALUES ('4', '2019-06-12', '2019-08-31', 'VISA: 34684515168415', '20', '4', 'S1');
INSERT INTO MEMBERSHIP VALUES ('5', '2019-06-12', '2019-08-31', 'PAYPAL', '20', '5', 'S5');
 
/**
* Customer related tables
*/
 
-- Insert tuples into locker table
INSERT INTO LOCKER VALUES ('1', 'S', 'TRUE', '1');
INSERT INTO LOCKER VALUES ('2', 'M', 'FALSE', NULL);
INSERT INTO LOCKER VALUES ('3', 'L', 'TRUE', '5');
INSERT INTO LOCKER VALUES ('4', 'S', 'FALSE', NULL);
INSERT INTO LOCKER VALUES ('5', 'L', 'FALSE', NULL);
 
/**
* Area related tables
*/
 
INSERT INTO Area VALUES ('1', 'Ballroom', 'large');
INSERT INTO Area VALUES ('2', 'Yoga Room', 'medium');
INSERT INTO Area VALUES ('3', 'Swimming Pool', 'extra large');
INSERT INTO Area VALUES ('4', 'Lifting zone', 'large');
INSERT INTO Area VALUES ('5', 'Dancing room', 'medium');
INSERT INTO Area VALUES ('6', 'Cardio zone', 'large');
INSERT INTO Area VALUES ('7', 'Biking zone', 'large');
 
INSERT INTO Course_in_area VALUES ('1', '2');
INSERT INTO Course_in_area VALUES ('2', '6');
INSERT INTO Course_in_area VALUES ('3', '4');
INSERT INTO Course_in_area VALUES ('4', '7');
INSERT INTO Course_in_area VALUES ('5', '5');
 
INSERT INTO machine_in_Area VALUES ('1', '6', 'Treadmill');
INSERT INTO machine_in_Area VALUES ('2', '7', 'Bike');
INSERT INTO machine_in_Area VALUES ('3', '2', 'Yoga mat');
INSERT INTO machine_in_Area VALUES ('4', '4', 'Dumbbell');
INSERT INTO machine_in_Area VALUES ('5', '4', 'Barbell');
 
 
INSERT INTO PERSONAL_TRAINING VALUES ('1', 'C1', 'TUE 17:00 - 18:00');
INSERT INTO PERSONAL_TRAINING VALUES ('2', 'C2', 'WED 17:00 - 18:00');
INSERT INTO PERSONAL_TRAINING VALUES ('3', 'C3', 'FRI 17:00 - 18:00');
INSERT INTO PERSONAL_TRAINING VALUES ('4', 'C4', 'SAT 17:00 - 18:00');
INSERT INTO PERSONAL_TRAINING VALUES ('5', 'C5', 'MON 17:00 - 18:00');
 
/**
* Meal related tables
*/
 
INSERT INTO MEAL_PLAN VALUES ('1', 'MEAT LOVER', 'YUMMY YUMMY');
INSERT INTO MEAL_PLAN VALUES ('2', 'VEGAN', 'AMITAPHA');
INSERT INTO MEAL_PLAN VALUES ('3', 'SEAFOOD', ':P');
INSERT INTO MEAL_PLAN VALUES ('4', 'BULKING', 'JAJAJA');
INSERT INTO MEAL_PLAN VALUES ('5', 'CUTTING', ':-(');
 
INSERT INTO FOOD_ITEM VALUES ('CHICKEN BREAST', 6, 10, 60, 100);
INSERT INTO FOOD_ITEM VALUES ('COD', 6, 9, 60, 96);
INSERT INTO FOOD_ITEM VALUES ('SALMON', 16, 9, 60, 128);
INSERT INTO FOOD_ITEM VALUES ('NUT', 33, 16, 12, 330);
INSERT INTO FOOD_ITEM VALUES ('LETTUCE', 1, 2, 1, 5);
INSERT INTO FOOD_ITEM VALUES ('BAK CHOY', 1, 2, 1, 5);
INSERT INTO FOOD_ITEM VALUES ('GUY LAN', 1, 2, 1, 5);
INSERT INTO FOOD_ITEM VALUES ('SWEET POTATO', 12, 88, 9, 350);
INSERT INTO FOOD_ITEM VALUES ('POTATO', 15, 82, 9, 320);
INSERT INTO FOOD_ITEM VALUES ('CORN', 18, 66, 9, 300);
INSERT INTO FOOD_ITEM VALUES ('RICE', 14, 70, 11, 340);
 
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('1', 'CHICKEN BREAST', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('1', 'COD', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('1', 'POTATO', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('2', 'LETTUCE', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('2', 'BAK CHOY', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('2', 'CORN', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('3', 'SALMON', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('3', 'COD', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('3', 'SWEET POTATO', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('4', 'RICE', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('4', 'SALMON', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('4', 'BAK CHOY', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('5', 'COD', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('5', 'CORN', 1);
INSERT INTO FOOD_ITEM_IN_MEAL_PLAN VALUES ('5', 'GUY LAN', 1);
 
INSERT INTO MEAL_PLAN_RECOMMENDATION VALUES ('1', '1', 'C1');
INSERT INTO MEAL_PLAN_RECOMMENDATION VALUES ('2', '2', 'C2');
INSERT INTO MEAL_PLAN_RECOMMENDATION VALUES ('3', '3', 'C3');
INSERT INTO MEAL_PLAN_RECOMMENDATION VALUES ('4', '4', 'C4');
INSERT INTO MEAL_PLAN_RECOMMENDATION VALUES ('5', '5', 'C5');
 
 
INSERT INTO CLEANING_RECORD VALUES (1, 'J1', '1', '2020-05-30');
INSERT INTO CLEANING_RECORD VALUES (2, 'J2', '2', '2020-04-11');
INSERT INTO CLEANING_RECORD VALUES (3, 'J2', '3', '2020-05-30');
INSERT INTO CLEANING_RECORD VALUES (4, 'J3', '4', '2020-05-30');
INSERT INTO CLEANING_RECORD VALUES (5, 'J4', '2', '2020-03-11');
 
INSERT INTO MEMBERSHIP_MODIFICATION VALUES ('1', 'M1', '1', NULL);
INSERT INTO MEMBERSHIP_MODIFICATION VALUES ('2', 'M2', '2', 'PAID BY PAYPAL');
INSERT INTO MEMBERSHIP_MODIFICATION VALUES ('3', 'M5', '3', NULL);
INSERT INTO MEMBERSHIP_MODIFICATION VALUES ('4', 'M4', '4', NULL);
INSERT INTO MEMBERSHIP_MODIFICATION VALUES ('5', 'M3', '5', NULL);
 
INSERT INTO REPORT VALUES ('S1', 'M3');
INSERT INTO REPORT VALUES ('S2', 'M2');
INSERT INTO REPORT VALUES ('S5', 'M4');
INSERT INTO REPORT VALUES ('S4', 'M5');
INSERT INTO REPORT VALUES ('S3', 'M1');

-- Insert tuples into course_registration table
INSERT INTO COURSE_REGISTRATION VALUES ('1', '1', 1);
INSERT INTO COURSE_REGISTRATION VALUES ('1', '2', 2);
INSERT INTO COURSE_REGISTRATION VALUES ('3', '3', 3);
INSERT INTO COURSE_REGISTRATION VALUES ('4', '5', 5);
INSERT INTO COURSE_REGISTRATION VALUES ('2', '2', 2);


