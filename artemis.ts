//enums
enum FourDirectionUpDown {
    //% block="up"
    Up = SixDirection.Up,
    //% block="down"
    Down = SixDirection.Down,
    //% block="left"
    Left = SixDirection.Left,
    //% block="right"
    Right = SixDirection.Right
}

// global variables
const communicationsTimeout = 100;
const start_game_position = world(0, 7, 0)
const default_signal_block = WHITE_CONCRETE


//%  block="Artemis: Moon Journey" weight=200 color=#0B3D91 icon="\u1F680"
namespace artemis {

    /**
     * Start Game Player 1
     */
    //% block="go for launch"
    export function startGameP1(): void {
        signalBlock(0, 0, 1, default_signal_block)
    }

    /**
     * Start Game Player 2
     */
    //% block="go for launch"
    export function startGameP2(): void {
        signalBlock(0, 0, 2, default_signal_block)
    }

    /**
     * Start Game Player 3
     */
    //% block="go for launch"
    export function startGameP3(): void {
        signalBlock(0, 0, 3, default_signal_block)
    }

    /**
     * Start Game Player 4
     */
    //% block="go for launch"
    export function startGameP4(): void {
        signalBlock(0, 0, 4, default_signal_block)
    }
    
    /**
     * Agent Move Footsize 1
     */
    //% block="agent move %d by %n"
    export function agentMoveFoot1(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n)
    }

    /**
     * Agent Move Footsize 3
     */
    //% block="agent move %d by %n"
    export function agentMoveFoot3(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n * 3)

    }

    /**
     * Mars Recon (Activity 11)
     */
    //% block="take picture"
    export function takePictureA11(): void {
        signalBlock(0, 11, 1, default_signal_block)
    }

    /**
     * Asteroid Mining (Activity 12)
     */
    //% block="mine asteroid"
    export function mineAsteroidA12(): void {
        signalBlock(0, 12, 1, default_signal_block)
    }

    /**
     * Lunar Garden 1 (Activity 13)
     */
    //% block="plant seed 1"
    export function lundarGarden1A13(): void {
        signalBlock(0, 13, 1, default_signal_block)
    }

    /**
     * Lunar Garden 2 (Activity 13)
     */
    //% block="plant seed 2"
    export function lundarGarden2A13(): void {
        signalBlock(1, 13, 1, default_signal_block)
    }

    /**
     * Lunar Garden 3 (Activity 13)
     */
    //% block="plant seed 3"
    export function lundarGarden3A13(): void {
        signalBlock(2, 13, 1, default_signal_block)
    }


    // helper functions
    function signalBlock(step: number, activity: number, player: number, block: Block) : void{
        blocks.place( block, world(step, activity, player))
        loops.pause(communicationsTimeout)
    }

}