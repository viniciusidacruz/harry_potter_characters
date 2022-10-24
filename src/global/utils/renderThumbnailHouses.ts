import OtherCharecter from '../assets/other.webp';
import HouseRavenclaw from '../assets/symbol_ravenclaw.png';
import HouseSlytherin from '../assets/symbol_slytherin.png';
import HouseGryffindor from '../assets/symbol_gryffindor.png';
import HouseHufflepuff from '../assets/symbol_hufflepuff.png';

import { HouseProps } from '../@types/character';

export const renderThumbnailToCharacter = (
  thumbnail: string | null,
  house: HouseProps | string
) => {
  if (!thumbnail) {
    switch (house) {
      case 'Gryffindor':
        return HouseGryffindor;
      case 'Hufflepuff':
        return HouseHufflepuff;
      case 'Slytherin':
        return HouseSlytherin;
      case 'Ravenclaw':
        return HouseRavenclaw;

      default:
        return OtherCharecter;
    }
  }

  return thumbnail;
};
