DROP DATABASE IF EXISTS adaopte; 

CREATE DATABASE adaopte;

USE adaopte;

CREATE TABLE types (
	id INT PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(20) NOT NULL
);

CREATE TABLE medicals_infos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	is_vaccinated BOOLEAN default 0 NOT NULL,
	sterelized BOOLEAN DEFAULT 0 NOT NULL,
	microchipped BOOLEAN DEFAULT 0 NOT NULL,
	last_checkup DATE NOT NULL,
	medical_notes VARCHAR(255)
);

CREATE TABLE cities (
	id INT PRIMARY KEY AUTO_INCREMENT,
	city VARCHAR(20) NOT NULL,
	zip_code INT NOT NULL
);

CREATE TABLE breeds (
	id INT PRIMARY KEY AUTO_INCREMENT,
	breed VARCHAR(20) NOT NULL, 
	size VARCHAR(10) NOT NULL,
	type_id INT NOT NULL,
	CONSTRAINT fk_breeds_type_id FOREIGN KEY (type_id) REFERENCES types(id)
);

CREATE TABLE shelters (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(25) NOT NULL,
	adress VARCHAR(100) NOT NULL,
	phone VARCHAR(30) NOT NULL,
	mail VARCHAR(50) NOT NULL,
	city_id INT NOT NULL, 
	CONSTRAINT fk_shelters_city_id FOREIGN KEY (city_id) REFERENCES cities(id)
);

CREATE TABLE animals (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT NOT NULL,
	gender ENUM ('female', 'male') NOT NULL,
	description TEXT NOT NULL,
	arrival_date DATE NOT NULL,
	good_with_kids ENUM ('yes', 'unknown', 'no') DEFAULT 'unknown' NOT NULL,
	good_with_animals ENUM ('yes', 'unknown', 'no') DEFAULT 'unknown' NOT NULL,
	image_url VARCHAR(255) NOT NULL,
	medical_info_id INT NOT NULL, 
	shelter_id INT NOT NULL,
	breed_id INT NOT NULL,
	created_at DATETIME NOT NULL, 
	updated_at DATETIME NOT NULL,
	CONSTRAINT fk_animals_medical_info_id FOREIGN KEY (medical_info_id) REFERENCES medicals_infos(id),
	CONSTRAINT fk_animals_shelter_id FOREIGN KEY (shelter_id) REFERENCES shelters(id),
	CONSTRAINT fk_animals_breed_id FOREIGN KEY (breed_id) REFERENCES breeds(id)
);

INSERT INTO types (type) VALUES 
	('Dog'),
	('Cat'),
	('Rabbit'), 
	('Guinea Pig'), 
	('Fish'), 
	('Horse'),
	('Papillon'),
	('Hamster');

INSERT INTO medicals_infos (is_vaccinated, sterelized, microchipped, last_checkup, medical_notes) VALUES 
	(true, true, true, '2024-02-10', 'Léger souffle au coeur, suivi annuel recommandé'),
	(true, false, true, '2024-03-05', null),
	(true, true, false, '2024-03-12', null),
	(true, true, true, '2024-01-20', 'Arthrose légère, éviter les efforts intenses'),
	(true, true, true, '2024-02-15', null),
	(false, false, false, '2024-04-02', 'Jeune, en bonne santé'),
	(true, false, false, '2024-03-28', null),
	(true, true, true, '2024-02-28', 'Excellente santé, pelage à entretenir régulièrement'),
	(false, false, false, '2024-05-01', 'Jeune et en bonne santé, aucun antécédent médical.'),
	(true, true, true, '2024-04-15', 'Bon état de santé général, nécessite un suivi régulier des sabots.'),
	(true, false, false, '2024-03-30', 'Aucun problème de santé, idéal pour un aquarium communautaire.'),
	(true, true, true, '2024-03-15', 'Allergie alimentaire légère, nécessite une alimentation spécifique.'),
	(true, true, true, '2024-04-10', 'Bonne santé générale, pelage à entretenir régulièrement.'),
	(true, true, true, '2024-05-03', "Agée, nécessite des soins particuliers pour l'arthrose."),
	(false, false, false, '2024-05-02', 'Jeune et en bonne santé, aucun antécédent médical.'),
	(true, true, true, '2024-04-20', "Excellente santé, attention à l\'alimentation."),
	(true, true, true, '2024-07-03', "Agée, nécessite des soins particuliers pour l'arthrose."),
	(true, true, true, '2024-09-10', 'Bonne santé générale, pelage à entretenir régulièrement.');

INSERT INTO cities (city, zip_code) VALUES 
	('Lille', '59000'),
	('Strasbourg', '67000'),
	('Annecy', '74000'),
	('Grenoble', '38000'),
	('Bordeaux', '33000'),
	('Tours', '37000'),
	('Poitiers', '86000');

INSERT INTO breeds (breed, size, type_id ) VALUES
	('Pug', 'small', 1),
	('Européen', 'small', 2),
	('Argenté de Champagne', 'small', 3),
	('Chow-chow', 'medium', 1),
	('Persan', 'small', 2),
	('Angora', 'small', 4),
	('Lapin nain', 'small', 3),
	('Samoyed', 'large', 1),
	('Hamster Syrien', 'small', 8),
	('Poisson Rouge', 'small', 5),
	('Cheval de Selle', 'large', 6),
	('Border-Collie', 'medium', 1),
	('Husky', 'medium', 1),
	('Siamois', 'small', 2),
	('Papillon Asiatique', 'small', 7),
	('Cheval des montagnes', 'large', 6);

INSERT INTO shelters (name, adress, phone, mail, city_id) VALUES
	('Refuge des Quatre Pattes', '123 rue des Animaux', "03 20 12 34 56", "contact@quatrepattes.fr", 1),
	("SPA Strasbourg", "45 avenue de la Liberté", "03 88 45 67 89", "contact@spa-strasbourg.fr", 2),
	("Refuge Alpin", "8 chemin du Lac", "04 50 11 22 33", "contact@refuge-alpin.fr", 3),
	("SPA Grenoble", "200 rue de la Montagne", "04 76 55 66 77", "contact@spa-grenoble.fr", 4),
	("Refuge de la Gironde", "55 quai des Chartrons", "05 56 78 90 12", "contact@refuge-gironde.fr", 5),
	("SPA Tours", "12 rue des Jardins", "02 47 33 44 55", "contact@spa-tours.fr", 6),
	("Refuge du Poitou", "78 avenue de la République", "05 49 22 33 44", "contact@refuge-poitou.fr", 7);

INSERT INTO animals (name, age, gender, description, arrival_date, good_with_kids, good_with_animals, image_url, medical_info_id, shelter_id, breed_id, created_at, updated_at) VALUES
	("Charlie", 5, 'male', "Charlie est un petit chien calme et affectueux qui adore les balades tranquilles et les caresses sur le canapé.",  "2024-01-15", 'yes', 'yes', "1.jpg", 1, 1, 1, NOW(), NOW()),
	("Mia", 2, 'female', "Mia est une boule de tendresse curieuse et joueuse, toujours prête à ronronner près de vous.", "2024-02-20", 'yes', 'no', "2.jpg", 2, 2, 2, NOW(), NOW()),
	("Coco", 1, 'male', "Coco est un petit lapin plein d'énergie, très doux et parfait pour un foyer aimant et paisible.", "2024-03-10", 'yes', 'yes', "3.jpg", 3, 3, 3, NOW(), NOW()),
	("Rex", 4, 'male', "Rex est un chien loyal et majestueux, idéal pour une personne douce et patiente qui aime les câlins silencieux.", "2023-11-05", 'no', 'no', "4.jpg", 4, 4, 4, NOW(), NOW()),
	("Luna", 3, 'female', "Luna adore les coins ensoleillés et les siestes à vos côtés. Elle vous offrira tout l'amour d'un regard félin.", "2024-01-08", 'yes', 'yes', "5.jpg", 5, 5, 5, NOW(), NOW()),
	("Biscuit", 1, 'male', "Biscuit est tout petit mais plein de vie ! Il aime les légumes croquants et les instants de douceur en famille.", "2024-04-01", 'yes', 'yes', "6.jpg", 6, 6, 6, NOW(), NOW()),
	("Rio", 1, 'male', "Rio est discret, mignon comme tout, et adore explorer les petits coins de la maison avec délicatesse.", "2024-03-25", 'yes', 'yes', "7.jpg", 7, 7, 7, NOW(), NOW()),
	("Ruby", 2, 'female', "Ruby est une boule de neige pleine d'amour ! Elle adore les promenades et les câlins par temps frais.", "2024-02-01", 'yes', 'yes', "8.jpg", 8, 3, 8, NOW(), NOW()),
	('Nino', 1, 'male', 'Nino est un petit hamster vif et curieux. Il adore explorer son environnement et stocker de la nourriture dans ses joues.', '2024-05-04','yes','no', '9.jpg', 9, 1, 9, NOW(), NOW()),
	('Storm', 7, 'male', 'Storm est un cheval majestueux et calme. Il apprécie les longues balades et le contact avec les humains.', '2025-05-04', 'yes', 'yes', '10.jpg', 10, 1, 11, NOW(), NOW()),
	('Bubbles', 1, 'female', 'Bubbles est un poisson paisible qui nage tranquillement et apporte une ambiance relaxante.', '2024-02-20', 'yes', 'yes', '11.jpg', 11, 2, 10, NOW(), NOW()),
	('Django', 10, 'male', "Django est un chien gourmand, parfait pour une famille qui a besoin d'une poubelle", '2024-03-15', 'yes', 'yes', '12.jpg', 12, 2, 13, NOW(), NOW()),
	('Kaya', 6, 'female', "Kaya est une chienne énergique et joueuse qui adore les longues promenades en pleine nature", '2024-04-10', 'no', 'no', '13.jpg', 13, 3, 12, NOW(), NOW()),
	('Maya', 20, 'female', "Maya est une chatte douce et calme qui aime les siestes au soleil", '2024-01-25', 'yes', 'yes', '14.jpg', 14, 4, 14, NOW(), NOW()),
	('Papillon', 1, 'female', "Papillon est un papillon curieux et affectueux, parfait pour une famille avec enfants", '2024-05-01', 'yes', 'yes', '15.jpg', 15, 5, 15, NOW(), NOW()),
	("L'argent du bonheur", 10, 'male', "Un cheval calme et majestueux, parfait pour les balades en famille", '2024-02-18', 'yes', 'yes', '16.jpg', 16, 6, 16, NOW(), NOW()),
	('Chanel', 20, 'female', 'Chanel est une chatte élégante et indépendante qui aime explorer son environnement.', '2024-03-22', 'no', 'no', '17.jpg', 17, 7, 14, NOW(), NOW()),
	('Marvel', 8, 'female', 'Marvel est une chienne courageuse et protectrice, idéal pour un berger', '2024-04-05', 'yes', 'yes', '18.jpg', 18, 1, 12, NOW(), NOW());