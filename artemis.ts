// global variables
const communicationsTimeout = 100;
const start_game_position = world(0, 7, 0)
const start_game_block = WHITE_CONCRETE

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