import { GameState } from '../renders/types/gameStateType';

export interface IGameContext {
  graphicContext: CanvasRenderingContext2D;
  lives: number;
  scores: number;
  gameState: GameState;
  levelIndex: number;
}

class GameContext {
  private context: IGameContext = null;
  initContext = (context: IGameContext) => {
    this.context = context;
  };
  set(data: Partial<IGameContext>) {
    if (this.context === null) {
      throw new Error('Context is notinitialized');
    }
    this.context = { ...this.context, ...data };
  }
  get() {
    if (this.context === null) {
      throw new Error('Context is notinitialized');
    }
    return this.context;
  }
}

const gameContext = new GameContext();

export default gameContext;