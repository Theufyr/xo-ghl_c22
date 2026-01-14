export interface  typesAnimals {
    id : number;
    image_url : string;
    type : string;
    animal_name : string;
    age : number;
    breed : string;
    city  : string;
    description : string;
}

export interface typesAnimalInfos {
    animalInfos : typesAnimals;
}