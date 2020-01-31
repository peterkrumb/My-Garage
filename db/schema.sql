DROP DATABASE IF EXISTS garage;
CREAte garage;
USE garage; 

CREATE TABLE Cars (
    id INT not null AUTO_INCREMENT,
    heading varchar (255),
    image_id int(10) NOT NULL auto_increment,
    image blob,
    body_type varchar (255),
    drivetrain varchar(60),
    uui varchar(60)

)
-- image
-- heading
-- body_type
-- drivetrain
-- engine
-- doors
-- transmission