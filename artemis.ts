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

enum extendArm {
    //% block="1"
    a,
    //% block="2"
    b,
    //% block="3"
    c
}

enum matrix_y_axis_full {
    //% block="0"
    a,
    //% block="1"
    b,
    //% block="2"
    c,
    //% block="3"
    d,
    //% block="4"
    e,
    //% block="5"
    f,
    //% block="6"
    g,
    //% block="7"
    h,
    //% block="8"
    i,
    //% block="9"
    j
}

enum matrix_x_axis_full {
    //% block="A"
    LOG_OAK, // LOG
    //% block="B"
    WHITE_CONCRETE, // CONCRETE
    //% block="C"
    WHITE_TERRACOTTA, // TERRACOTTA
    //% block="D"
    WHITE_STAINED_GLASS, // STAINED GLASS
    //% block="E"
    WHITE_STAINED_GLASS_PANE, // STAINED GLASS PANE
    //% block="F"
    STONE_SLAB, // STONE_SLAB
    //% block="G"
    RED_SANDSTONE_SLAB, //STONE_SLAB2
    //% block="H"
    OAK_WOOD_SLAB,  // WOODEN_SLAB
    //% block="I"
    DOUBLE_STONE_SLAB, // DOUBLE_STONE_SLAB
    //% block="J"
    DOUBLE_RED_SANDSTONE_SLAB, // DOUBLE_STONE_SLAB2
    //% block="K"
    DOUBLE_WOODEN_SLAB, // DOUBLE_WOODEN_SLAB
    //% block="L"
    WHITE_SHULKER_BOX // SHULKER_BOX
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
     * Space Junk (Activity 16) Collect Debris
     */
    //% block="collect debris"
    export function collectDebrisA16(): void {
        signalBlock(0, 16, 1, default_signal_block)
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
    //% block="plant seed"
    export function lunarGarden1A13(): void {
        signalBlock(0, 13, 1, default_signal_block)
    }

    /**
     * Water Recycling (Activity 20)
     */
    //% block="clear debris"
    export function clearDebrisA20(): void {
        signalBlock(0, 20, 1, default_signal_block)
    }


    /**
     * ISS Help (Activity 21) Load Cargo
     */
    //% block="load cargo"
    export function loadCargoA21(): void {
        signalBlock(0, 21, 1, default_signal_block)
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
     * Space Junk (Activity 16) ADRV Move
     */
    //% block="ADRV move %d by %n"
    export function adrvMoveA16(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n)
    }

    /**
     * Asteroid Mining (Activity 12) Rover Move
     */
    //% block="rover move %d by %n"
    export function roverMoveA12(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n)
    }


    /**
     * Mars Recon (Activity 11) Rover Move
     */
    //% block="rover move %d by %n"
    export function roverMoveA11(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n*3)
    }

    /**
     * Aurora Pictures (Activity 14)
     */
    //% block="take picture at $x_axis $y_axis"
    export function takePictureA14(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 14, 1, blocks.blockWithData(x_axis, y_axis))
    }

    /**
     * Orion Splashdown (Activity 15)
     */
    //% block="set location to $x_axis $y_axis"
    export function setLocationA15(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 15, 1, blocks.blockWithData(x_axis, y_axis))
    }

    /**
     * Landing Site (Activity 17)
     */
    //% block="mark location to $x_axis $y_axis"
    export function markLocationA17(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 17, 1, blocks.blockWithData(x_axis, y_axis))
    }

    /**
     * Earth's Pollution (Activity 18)
     */
    //% block="deploy CubeSat to $x_axis $y_axis"
    export function deployCubsatA18(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 18, 1, blocks.blockWithData(x_axis, y_axis))
    }

    /**
     * Laser Alignment (Activity 19)
     */
    //% block="aim at $x_axis $y_axis"
    export function aimAtA18(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 18, 1, blocks.blockWithData(x_axis, y_axis))
    }


    /**
     * ISS Help (Activity 21) Extend Arm
     */
    //% block="extend arm $extendArm"
    export function extendArmA21(extendArm: extendArm): void {
        signalBlock(0, 21, 1, default_signal_block)
    }

    // helper functions
    function signalBlock(step: number, activity: number, player: number, block: Block) : void{
        blocks.place( block, world(step, activity, player))
        loops.pause(communicationsTimeout)
    }

}