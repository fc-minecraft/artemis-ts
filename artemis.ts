//enums

enum FourDirectionArrows {
    //% blockIdentity="blocks.custom" enumval=986 block="Arrow Up Orange"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 986,
    //% blockIdentity="blocks.custom" enumval=985 block="Arrow Down Magenta"
    //% jres alias=ARROW_DOWN_MAGENTA
    ArrowDownMagenta = 985,
    //% blockIdentity="blocks.custom" enumval=984 block="Arrow Right Yellow"
    //% jres alias=ARROW_RIGHT_YELLOW
    ArrowRightYellow = 984,
    //% blockIdentity="blocks.custom" enumval=983 block="Arrow Left Blue"
    //% jres alias=ARROW_LEFT_BLUE
    ArrowLeftBlue = 983
}

enum DockingRings {
    //% blockIdentity="blocks.custom" enumval=17 block="Docking Ring Inner"
    //% jres alias=DOCKING_RING_INNER
    InnerRing = 17,
    //% blockIdentity="blocks.custom" enumval=236 block="Docking Ring Middle"
    //% jres alias=DOCKING_RING_MIDDLE
    MiddleRing = 236,
    //% blockIdentity="blocks.custom" enumval=159 block="Docking Ring Outer"
    //% jres alias=DOCKING_RING_OUTER
    OuterRing = 159
}

enum DockingObjective {
    //% blockIdentity="blocks.custom" enumval=0 block="Set to Blue"
    //% jres alias=SET_TO_BLUE
    GotoBlue = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="Set to Green"
    //% jres alias=SET_TO_GREEN
    GotoGreen = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="Set to Red"
    //% jres alias=SET_TO_RED
    GotoRed = 2
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
    //% block="`Generics.blastOff` go for launch"
    export function startGameP1(): void {
        signalBlock(0, 0, 1, default_signal_block)
    }

    /**
     * Start Game Player 2
     */
    //% block="`Generics.blastOff` go for launch"
    export function startGameP2(): void {
        signalBlock(0, 0, 2, default_signal_block)
    }

    /**
     * Start Game Player 3
     */
    //% block="`Generics.blastOff` go for launch"
    export function startGameP3(): void {
        signalBlock(0, 0, 3, default_signal_block)
    }

    /**
     * Start Game Player 4
     */
    //% block="`Generics.blastOff` go for launch"
    export function startGameP4(): void {
        signalBlock(0, 0, 4, default_signal_block)
    }

    /**
     * Space Junk (Activity 16) Collect Debris
     */
    //% block="`Generics.collectDebris` collect debris"
    export function collectDebrisA16(): void {
        signalBlock(0, 16, 1, default_signal_block)
    }

    /**
     * Docking Test (Activity 2) Player 2
     */
    //% block="rotate %r to %o"
    export function rotateRingA2P2(r: DockingRings, o: DockingObjective): void {
        let docking_ring = 0
        switch (r) {
            case DockingRings.InnerRing:
                docking_ring = 17 // LOG
                break;
            case DockingRings.MiddleRing:
                docking_ring = 236 // CONCRETE
                break;
            case DockingRings.OuterRing:
                docking_ring = 159 // TERRACOTTA
                break;
        }

        let docking_color = 0
        switch (o) {
            case DockingObjective.GotoBlue:
                docking_color = 0
                break;
            case DockingObjective.GotoGreen:
                docking_color = 1
                break;
            case DockingObjective.GotoRed:
                docking_color = 2
                break;
        }

        signalBlock(0, 2, 1, blocks.blockWithData(blocks.blockById(docking_ring), docking_color))
    }

    /**
     * Docking Test (Activity 2) Player 3
     */
    //% block="rotate %r to %o"
    export function rotateRingA2P3(r: DockingRings, o: DockingObjective): void {
        let docking_ring = 0
        switch (r) {
            case DockingRings.InnerRing:
                docking_ring = 17 // LOG
                break;
            case DockingRings.MiddleRing:
                docking_ring = 236 // CONCRETE
                break;
            case DockingRings.OuterRing:
                docking_ring = 159 // TERRACOTTA
                break;
        }

        let docking_color = 0
        switch (o) {
            case DockingObjective.GotoBlue:
                docking_color = 0
                break;
            case DockingObjective.GotoGreen:
                docking_color = 1
                break;
            case DockingObjective.GotoRed:
                docking_color = 2
                break;
        }

        signalBlock(0, 2, 1, blocks.blockWithData(blocks.blockById(docking_ring), docking_color))
    }

    /**
     * Docking Test (Activity 2) Player 4
     */
    //% block="rotate %r to %o"
    export function rotateRingA2P4(r: DockingRings, o: DockingObjective): void {
        let docking_ring = 0
        switch (r) {
            case DockingRings.InnerRing:
                docking_ring = 17 // LOG
                break;
            case DockingRings.MiddleRing:
                docking_ring = 236 // CONCRETE
                break;
            case DockingRings.OuterRing:
                docking_ring = 159 // TERRACOTTA
                break;
        }

        let docking_color = 0
        switch (o) {
            case DockingObjective.GotoBlue:
                docking_color = 0
                break;
            case DockingObjective.GotoGreen:
                docking_color = 1
                break;
            case DockingObjective.GotoRed:
                docking_color = 2
                break;
        }

        signalBlock(0, 2, 1, blocks.blockWithData(blocks.blockById(docking_ring), docking_color))
    }

    /**
     * Mars Recon (Activity 11)
     */
    //% block="`Generics.takePicture` take picture"
    export function takePictureA11(): void {
        signalBlock(0, 11, 1, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 1
     */
    //% block="`Generics.roverMove` rover move %d by %n"
    export function roverMoveA5(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * Building Blocks (Activity 5)
     * Player 1
     */
    //% block="`Generics.collectRegolith` collect regolith"
    export function collectBlockA5(): void {
        signalBlock(0, 5, 1, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="`Generics.meltRegolith` melt regolith"
    export function meltRegolithA5(): void {
        signalBlock(0, 5, 2, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="`Generics.castRegolith` cast block"
    export function castBlocksA5(): void {
        signalBlock(1, 5, 2, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="`Generics.testBlockStrength` test block-strength"
    export function testBlockStrengthA5(): void {
        signalBlock(2, 5, 2, default_signal_block)
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 1
     */
    //% block="`Generics.roverMove` rover move %d by %n"
    export function roverMoveA6(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 2
     */
    //% block="`Generics.drillDown` drill down"
    export function drillDownA6(): void {
        signalBlock(0, 6, 2, default_signal_block)
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 2
     */
    //% block="`Generics.collectSample` collect sample"
    export function collectSampleA6(): void {
        signalBlock(1, 6, 2, default_signal_block)
    }

    /**
     * Moon Mapping (Activity 8) Player 1
     */
    //% block="`Generics.markLocation` set location $x_axis $y_axis"
    export function setLocationA8P1(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 8, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Moon Mapping (Activity 8) Player 2
     */
    //% block="`Generics.takePicture` take picture"
    export function takePictureA8P2(): void {
        signalBlock(0, 8, 2, default_signal_block)
    }

    /**
     * Moon Mapping (Activity 8) Player 2
     * Player 1
     */
    //% block="`Generics.viperMove` VIPER move %d by %n"
    export function viperMoveA8P2(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * Asteroid Mining (Activity 12)
     */
    //% block="`Generics.mineBlock` mine asteroid"
    export function mineAsteroidA12(): void {
        signalBlock(0, 12, 1, default_signal_block)
    }

    /**
     * Lunar Garden (Activity 13)
     * Player 1
     */
    //% block="`Generics.agentMove` agent move %d by %n"
    export function agentMoveA13(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Forward, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Back, n)
                break;
        }
    }

    /**
     * Lunar Garden 1 (Activity 13)
     */
    //% block="`Generics.plantSeed` plant seed"
    export function lunarGarden1A13(): void {
        signalBlock(0, 13, 1, default_signal_block)
    }

    /**
     * Agent Move Footsize 1
     */
    //% block="`Generics.agentMove` agent move %d by %n"
    export function agentMoveFoot1(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n)
                break;
        }
    }

    /**
     * Agent Move Footsize 3
     */
    //% block="`Generics.agentMove` agent move %d by %n"
    export function agentMoveFoot3(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n*3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }

    }

    /**
     * Space Junk (Activity 16) ADRV Move
     */
    //% block="`Generics.agentMove` agent move %d by %n"
    export function adrvMoveA16(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Forward, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Back, n)
                break;
        }
    }

    /**
     * Asteroid Mining (Activity 12) Rover Move
     */
    //% block="`Generics.roverMove` rover move %d by %n"
    export function roverMoveA12(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n)
                break;
        }
    }


    /**
     * Mars Recon (Activity 11) Rover Move
     */
    //% block="`Generics.ingenuityMove` Ingenuity move %d by %n"
    export function roverMoveA11(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * Aurora Pictures (Activity 14)
     */
    //% block="`Generics.takePicture` take picture $x_axis $y_axis"
    export function takePictureA14(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 14, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Orion Splashdown (Activity 15)
     */
    //% block="`Generics.markLocation` set location $x_axis $y_axis"
    export function setLocationA15(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 15, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Landing Site (Activity 17)
     */
    //% block="`Generics.markLocation` mark location $x_axis $y_axis"
    export function markLocationA17(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 17, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Earth's Pollution (Activity 18)
     */
    //% block="`Generics.deployCubesat` deploy CubeSat $x_axis $y_axis"
    export function deployCubsatA18(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 18, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    // helper functions
    function signalBlock(step: number, activity: number, player: number, block: Block) : void{
        blocks.place( block, world(step, activity, player))
        loops.pause(communicationsTimeout)
    }

}