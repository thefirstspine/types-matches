import { IGameUser } from "./game-user.interface";
import { IGameCard } from "./game-card.interface";
import { IGameAction } from "./game-action.interface";
import { IGameActionPassed } from "./game-action-passed.interface";
import { IInteraction } from "./game-interaction.interface";
import { IGameResult } from "./game-result.interface";

export interface IGameInstance {
  id: number;
  status: 'active'|'ended'|'closed';
  users: IGameUser[];
  gameTypeId: string;
  cards: IGameCard[];
  actions: {
    current: IGameAction<IInteraction>[],
    previous: IGameActionPassed<IInteraction>[],
  };
  result?: IGameResult[];
}
