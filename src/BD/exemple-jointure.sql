SELECT * FROM animals WHERE gender = 'male' 
JOIN breeds AS b ON animals.breed_id = b.id ;

SELECT animals.*, s.name as shelter, types.type FROM animals 
JOIN breeds AS b ON animals.breed_id = b.id 
JOIN types AS t ON b.type_id = t.id
JOIN shelters AS s ON animals.shelter_id = s.id 
WHERE gender = ?

