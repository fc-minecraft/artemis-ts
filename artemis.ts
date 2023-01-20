// global variables
const communicationsTimeout = 100;
const start_game_position = world(0, 7, 0)
const start_game_block = WHITE_CONCRETE


//%  block="Artemis: Moon Journey" weight=200 color=#0B3D91 icon="\u1F680"
namespace artemis {

    /**
     * Start Game
     */
    //% block="i'm ready"
    export function startGame(): void{
        blocks.place(start_game_block, start_game_position)
        loops.pause(communicationsTimeout)
    }

}