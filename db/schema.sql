DROP DATABASE IF EXISTS garage;
CREATE DATABASE garage;
USE garage;

CREATE TABLE Cars (
    id INT not null AUTO_INCREMENT,
    heading varchar (255),
    image_id int(10) NOT NULL auto_increment,
    image blob,
    body_type varchar (255),
    drivetrain varchar
)
-- image
-- heading
-- body_type
-- drivetrain
-- engine
-- doors
-- transmission