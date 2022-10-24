import { CharacterProps } from '../../@types/character';

export interface Props {
  character: CharacterProps | null;
  onClose: () => void;
}
