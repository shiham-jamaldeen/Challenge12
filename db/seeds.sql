/* SEED Data into tables */

/*Department*/
INSERT INTO department (id, dept_name)
VALUES (200,"Finance"),
(300,"Human Resources"),
(400,"Engineering"),
(500,"Sales"),
(600,"Customer Service"),
(700, "Leadership");


INSERT INTO jobRole (id, title, salary, department_id) 
VALUES(401,"Software Engineer", 85000, 400),
(402,"Technical Writer", 85000, 400),
(403, "Eng Manager", 100000, 400),
(301, "HR Officer", 80000, 300),
(302, "HR Manager", 100000, 300),
(201, "Accountant", 85000, 200),
(501, "Sales Executive", 80000, 500),
(502, "Sales Manager", 100000, 500),
(601, "CS Officer", 80000, 600),
(602, "CS Manager", 100000, 600),
(701, "Director", 150000, 700);

/*employees*/
INSERT INTO employee (id,first_name,last_name,role_id,manager_id)
VALUES (10001,"George","FACELLO",701, NULL),
(10002,"Bezalel","SIMMEL",403,10001),
(10003,"Parto","BAMFORD",401,10002),
(10004,"Chirstian","KOBLIK",402,10002),
(10005,"Kyoichi","MALINIAK",302,10001),
(10006,"Anneke","PREUSIG",301,10005),
(10007,"Tzvetan","ZIELINSKI",502,10001),
(10008,"Saniya","MIRZAN",501,10007),
(10009,"Sumant","THOMAS",501,10007),
(10010,"Dirk","VANDORK",601,10001),
(10011,"Mary","SLUIS",601,10010),
(10012,"Patricia","BRIDGLAND",601,10010),
(10013,"Eberhardt","TERKKI",601,10010),
(10014,"Berni","GENIE",501,10007),
(10015,"Sarah","PEREIRA",401,10002);
