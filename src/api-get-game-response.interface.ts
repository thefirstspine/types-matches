import { IGameResult } from "./game-result.interface";

export interface IApiGetGameResponse {
  id: number;
  status: 'active'|'ended'|'closed'|'conceded';
  users: number[],
  stats: {
    cardsInHand: {[key: number]: number},
    cardsInDeck: {[key: number]: number},
  };
  queue: string;
  result?: IGameResult[];
}
