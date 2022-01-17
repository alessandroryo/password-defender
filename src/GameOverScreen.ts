import Game from './Game.js';
import KeyListener from './KeyboardListener.js';
import Scene from './Scene.js';
import StartScreen from './StartScreen.js';

export default class GameOverScreen extends Scene {
  private mainLogo: HTMLImageElement;

  private buttonImage: HTMLImageElement;

  private gameOverTitle: HTMLImageElement;

  /**
   * Construct the game over screen class
   *
   * @param game Game class
   */
  constructor(game: Game) {
    super(game);
    this.mainLogo = Game.loadNewImage('./assets/img/Game-Logo-(Secondary).png');
    this.buttonImage = Game.loadNewImage('./assets/img/Press-R-Restart.png');
    this.gameOverTitle = Game.loadNewImage('./assets/img/GameOver.png');
  }

  /**
   * Method for read the process input from user
   */
  public processInput() : void {
    if (this.keyBoard.isKeyDown(KeyListener.KEY_R)) {
      this.nextScene = true;
    }
  }

  /**
   * Method for update the screen
   *
   * @returns New scene
   */
  public update(): Scene {
    if (this.nextScene) {
      return new StartScreen(this.game);
    }
    return null;
  }

  /**
   * Render to canvas
   */
  public render(): void {
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    this.game.ctx.drawImage(
      this.mainLogo,
      (this.game.canvas.width / 2) - 100,
      0,
      this.mainLogo.width / 5,
      this.mainLogo.height / 5,
    );

    this.game.ctx.drawImage(
      this.gameOverTitle,
      (this.game.canvas.width / 2) - 175,
      this.game.canvas.height * 0.25,
      this.gameOverTitle.width / 2,
      this.gameOverTitle.height / 2,
    );

    this.game.writeTextToCanvas(
      `Username: ${this.game.getUserData().getUsername()}`,
      (this.game.canvas.width / 2),
      this.game.canvas.height * 0.5,
      40,
    );

    this.game.writeTextToCanvas(
      `Password: ${this.game.getUserData().getPassword()}`,
      (this.game.canvas.width / 2),
      this.game.canvas.height * 0.535,
      40,
    );

    this.game.writeTextToCanvas(
      `Score: ${this.game.getUserData().getScore()}`,
      (this.game.canvas.width / 2),
      this.game.canvas.height * 0.57,
      40,
    );

    this.game.ctx.drawImage(
      this.buttonImage,
      (this.game.canvas.width / 2) - 250,
      this.game.canvas.height * 0.63,
    );
  }
}
