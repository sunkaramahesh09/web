CREATE TABLE employee(
	Fname char(10) NOT NULL,
    Lname char(20) NOT NULL,
    ssn varchar(10) NOT NULL PRIMARY KEY,
    Age int,
    DOB date,
    Gender char(1),
    salary float,
    PHNO varchar(10),
    address varchar(120) NOT NULL,
    designation varchar(10),
    Dnum int,
    sssn varchar(10)
);


desc employee;

CREATE TABLE department(
	Dname char(20),
    Dnum int NOT NULL PRIMARY KEY DEFAULT 0,
    starting_date date,
    manager_ssn varchar(10),
    FOREIGN KEY (manager_ssn) REFERENCES employee(ssn)
);

desc department;


CREATE TABLE project(
	Pname char(20),
    Pid int NOT NULL PRIMARY KEY DEFAULT 0,
    Plocation varchar(20),
    Dnum int,
    FOREIGN KEY (Dnum) REFERENCES department(Dnum)
);

desc project;




CREATE TABLE dependent(
	Dep_name varchar(20),
    Dep_address varchar(50),
    Dep_id varchar(10),
    essn varchar(10),
    FOREIGN KEY (essn) REFERENCES employee(ssn)
);


desc dependent;



CREATE TABLE workson(
	wssn varchar(10),
    wpid int,
    hours int,
    FOREIGN KEY (wssn) REFERENCES employee(ssn),
    FOREIGN KEY (wpid) REFERENCES project(pid)
);


desc workson;


ALTER TABLE employee 
ADD CONSTRAINT fk_dnum
FOREIGN KEY (Dnum)
REFERENCES department(Dnum);


ALTER TABLE employee
ADD CONSTRAINT fk_ssn
FOREIGN KEY (sssn)
REFERENCES employee(ssn);


desc employee;



SET SQL_SAFE_UPDATES = 0;
