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
const signal_block_type = WHITE_CONCRETE


//%  block="Artemis: Moon Journey" weight=200 color=#0B3D91 icon="\u1F680"
namespace artemis {

    /**
     * Start Game
     */
    //% block="i'm ready"
    export function startGame(): void{
        signalBlock(0, 0)
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

    // helper functions
    function signalBlock(activity: number, player: number) : void{
        blocks.place(signal_block_type, world(player, 7, activity))
        loops.pause(communicationsTimeout)
    }

}