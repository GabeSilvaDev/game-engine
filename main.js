import { Game } from "./scripts/game-engine/game.js";

import { Ball } from "./scripts/game/ball.js";

Game.constructor();

Promise.all([
    Game.SoundManager.loadAll([
        {
            name: 'hit',
            src: './scripts/game/snd/pong-hit.mp3'
        }
    ]),
    Game.ImageManager.loadAll([
        {
            name: 'background',
            src: './scripts/game/img/background.png'
        }
    ])
])
.then(() => {
    Game.start();
    const ball = new Ball();
    Game.addObject(ball);
})

