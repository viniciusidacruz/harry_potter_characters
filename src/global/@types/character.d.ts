export type HouseProps =
  | 'Gryffindor'
  | 'Hufflepuff'
  | 'Slytherin'
  | 'Ravenclaw';

export interface CharacterProps {
  name: string;
  alternate_names: Array<any>;
  species: string;
  gender: string;
  house: HouseProps;
  dateOfBirth: string;
  yearOfBirth: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: Array<any>;
  alive: boolean;
  image: string;
}
