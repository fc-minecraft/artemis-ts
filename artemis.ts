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

//enums
enum FourDirectionForwardBack {
    //% block="up"
    Up = SixDirection.Up,
    //% block="down"
    Down = SixDirection.Down,
    //% block="forward"
    Forward = SixDirection.Forward,
    //% block="back"
    Back = SixDirection.Back
}

//enums
enum FourDirectionForwardBackFake {
    //% block="up"
    Up = SixDirection.Up,
    //% block="down"
    Down = SixDirection.Down,
    //% block="forward"
    Right = SixDirection.Right,
    //% block="back"
    Left = SixDirection.Left
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
    LogOak = 17, // LOG
    //% block="B"  
    WhiteConcrete = 236, // CONCRETE
    //% block="C"  
    WhiteTerracotta = 159, // TERRACOTTA
    //% block="D"  
    WhiteStainedGlass = 241, // STAINED GLASS
    //% block="E"  
    WhiteStainedGlassPane = 160, // STAINED GLASS PANE
    //% block="F"  
    StoneSlab = 44, // STONE_SLAB
    //% block="G"  
    RedSandstoneSlab = 182, //STONE_SLAB2
    //% block="H"  
    OakWoodSlab = 158,  // WOODEN_SLAB
    //% block="I"  
    DoubleStoneSlab = 43, // DOUBLE_STONE_SLAB
    //% block="J"  
    DoubleRedSandstoneSlab = 181, // DOUBLE_STONE_SLAB2
    //% block="K"  
    DoubleWoodenSlab = 157, // DOUBLE_WOODEN_SLAB
    //% block="L"  
    WhiteShulkerBox = 218 // SHULKER_BOX
}

// global variables
const communicationsTimeout = 100;
const start_game_position = world(0, 7, 0)
const default_signal_block = WHITE_CONCRETE


//%  block="Artemis: Moon Journey" weight=200 color=#0B3D91 icon="\uf186"
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
     * Building Blocks (Activity 5)
     * Player 1
     */
    //% block="rover move %d by %n"
    export function roverMoveA5(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 1
     */
    //% block="collect regolith"
    export function collectBlockA5(): void {
        signalBlock(0, 5, 1, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="melt regolith"
    export function meltRegolithA5(): void {
        signalBlock(0, 5, 2, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="cast block"
    export function castBlocksA5(): void {
        signalBlock(1, 5, 2, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="test block-strength"
    export function testBlockStrengthA5(): void {
        signalBlock(2, 5, 2, default_signal_block)
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 1
     */
    //% block="rover move %d by %n"
    export function roverMoveA6(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n)
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 2
     */
    //% block="drill down"
    export function drillDownA6(): void {
        signalBlock(0, 6, 2, default_signal_block)
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 2
     */
    //% block="collect"
    export function collectSampleA6(): void {
        signalBlock(1, 6, 2, default_signal_block)
    }

    /**
     * Asteroid Mining (Activity 12)
     */
    //% block="mine asteroid"
    export function mineAsteroidA12(): void {
        signalBlock(0, 12, 1, default_signal_block)
    }

    /**
     * Lunar Garden (Activity 13)
     * Player 1
     */
    //% block="agent move %d by %n"
    export function agentMoveA13(d: FourDirectionForwardBack, n: number): void {
        agent.move(d, n)
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
    //% block="agent move %d by %n"
    export function adrvMoveA16(d: FourDirectionForwardBack, n: number): void {
        agent.move(d, n)
    }

    /**
     * Asteroid Mining (Activity 12) Rover Move
     */
    //% block="rover move %d by %n"
    export function roverMoveA12(d: FourDirectionForwardBackFake, n: number): void {
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
        signalBlock(0, 14, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Orion Splashdown (Activity 15)
     */
    //% block="set location to $x_axis $y_axis"
    export function setLocationA15(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 15, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Landing Site (Activity 17)
     */
    //% block="mark location to $x_axis $y_axis"
    export function markLocationA17(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 17, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Earth's Pollution (Activity 18)
     */
    //% block="deploy CubeSat to $x_axis $y_axis"
    export function deployCubsatA18(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 18, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Laser Alignment (Activity 19)
     */
    //% block="aim at $x_axis $y_axis"
    export function aimAtA19(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 19, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
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