import ChickPng from '../assets/images/chick.png';
import CatPng from '../assets/images/cat.png';
import RabbitPng from '../assets/images/rabbit.png';
import BearPng from '../assets/images/bear.png';

import Egg from '../assets/images/egg.png';
import Egg2 from '../assets/images/egg2.png';
import Slime from '../assets/images/slime.png';
import Slime2 from '../assets/images/slime2.png';
export const CharacterLevel: Record<number, string> = {
  1: Egg,
  2: Egg2,
  3: Slime,
  4: Slime2,
};

export const CharacterType: Record<string, string> = {
  CHICK: ChickPng,
  CAT: CatPng,
  RABBIT: RabbitPng,
  BEAR: BearPng,
};
