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

enum IssHelpColors {
    //% blockIdentity="blocks.custom" enumval=0 block="blue"
    //% jres alias=BLUE_CARGO
    BlueCargo = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="yellow"
    //% jres alias=YELLOW_CARGO
    YellowCargo = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="magenta"
    //% jres alias=MAGENT_CARGO
    MagentaCargo = 2
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

enum CrewMealIngredients {
    //% blockIdentity="blocks.custom" enumval=0 block="Place Peanuts"
    //% jres alias=PLACE_PEANUTS
    PlacePeanut = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="Place Green Peppers"
    //% jres alias=PLACE_GREEN_PEPPERS
    PlacePepper = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="Place Tomato Sauce"
    //% jres alias=PLACE_TOMATO_SAUCE
    PlaceSauce = 2
}

enum CrewMealAddIngredients {
    //% blockIdentity="blocks.custom" enumval=0 block="Add Anchovies"
    //% jres alias=ADD_ANCHOIVES
    AddAnchovies = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="Add Cheese"
    //% jres alias=ADD_CHEESE
    AddCheese = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="Add Pepperoni"
    //% jres alias=ADD_PEPPERONI
    AddPepperoni = 2,
    //% blockIdentity="blocks.custom" enumval=3 block="Add Tomato"
    //% jres alias=ADD_TOMATO
    AddTomato = 3
}

enum RehydrationOptions {
    //% blockIdentity="blocks.custom" enumval=1 block="25 ml"
    //% jres alias=25_ML
    A25ML = 1,
    //% blockIdentity="blocks.custom" enumval=1 block="50 ml"
    //% jres alias=50_ML
    A50ML = 1,
    //% blockIdentity="blocks.custom" enumval=0 block="75 ml"
    //% jres alias=75_ML
    A75ML = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="100 ml"
    //% jres alias=100_ML
    A100ML = 1
}

enum ExerciseTimes {
    //% block="70 min"
    a,
    //% block="90 min"
    b,
    //% block="110 min"
    c,
    //% block="130 min"
    d,
    //% block="150 min"
    e
}

enum Clockwise {
    //% block="по часовой стрелке"
    Clockwise,
    //% block="против часовой стрелки"
    Counterclockwise
}

enum MoveDirection {
    //% block="к"
    Toward,
    //% block="от"
    Away
}

enum RotationAmount {
    //% block="90°"
    a = 0,
    //% block="180°"
    b = 1,
    //% block="360°"
    c = 2
}

enum RotationType {
    //% block="тангаж"
    Pitch,
    //% block="рыскание"
    Yaw,
    //% block="крен"
    Roll
}

enum onOffToggle {
    //% block="вкл"
    a,
    //% block="выкл"
    b
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
    WhiteShulkerBox = 218, // SHULKER_BOX
    //% block="I"
    DoubleStoneSlab = 43, // DOUBLE_STONE_SLAB
    //% block="J"
    DoubleRedSandstoneSlab = 181, // DOUBLE_STONE_SLAB2
    //% block="K"
    DoubleWoodenSlab = 157, // DOUBLE_WOODEN_SLAB
    //% block="L"
    OakWoodSlab = 158  // WOODEN_SLAB

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
    //% block="`Generics.blastOff` перейти к запуску"
    export function startGameP1(): void {
        signalBlock(0, 0, 1, default_signal_block)
    }

    /**
     * Start Game Player 2
     */
    //% block="`Generics.blastOff` перейти к запуску"
    export function startGameP2(): void {
        signalBlock(0, 0, 2, default_signal_block)
    }

    /**
     * Start Game Player 3
     */
    //% block="`Generics.blastOff` перейти к запуску"
    export function startGameP3(): void {
        signalBlock(0, 0, 3, default_signal_block)
    }

    /**
     * Start Game Player 4
     */
    //% block="`Generics.blastOff` перейти к запуску"
    export function startGameP4(): void {
        signalBlock(0, 0, 4, default_signal_block)
    }

    /**
     * Space Junk (Activity 16) Collect Debris
     */
    //% block="`Generics.collectDebris` собрать обломки"
    export function collectDebrisA16(): void {
        signalBlock(0, 16, 1, default_signal_block)
    }

    /**
     * Prox Ops (Activity 1)
     * Player 2
     */
    //% block="`Generics.orionMove` переместить %d ускоритель"
    export function orionMoveDirectionA1PX(d: MoveDirection): void {
        switch (d) {
            case MoveDirection.Toward:
                signalBlock(0, 1, 1, ORANGE_CONCRETE)
                break;
            case MoveDirection.Away:
                signalBlock(0, 1, 1, default_signal_block)
                break;
        }
    }

    /**
     * Prox Ops (Activity 1)
     * Player 2
     */
    //% block="`Generics.orionMove` повернуть %r на %o"
    export function rotateOrionA2PX(r: Clockwise, o: RotationAmount): void {
        let orion_rotate = 0
        switch (r) {
            case Clockwise.Clockwise:
                orion_rotate = 17 // LOG
                break;
            case Clockwise.Counterclockwise:
                orion_rotate = 236 // CONCRETE
                break;
        }

        let rotation_amount = 0
        switch (o) {
            case RotationAmount.a:
                rotation_amount = 0
                break;
            case RotationAmount.b:
                rotation_amount = 1
                break;
            case RotationAmount.c:
                rotation_amount = 4
                break;
        }

        signalBlock(0, 1, 1, blocks.blockWithData(blocks.blockById(orion_rotate), rotation_amount))
    }

    /**
     * Prox Ops (Activity 1)
     * Player 2
     */
    //% block="`Generics.orionMove` отрегулировать %r на %o"
    export function rollOrionA2PX(r: RotationType, o: RotationAmount): void {
        let orion_rotate = 0
        switch (r) {
            case RotationType.Pitch:
                orion_rotate = 17 // LOG
                break;
            case RotationType.Yaw:
                orion_rotate = 1 // STONE
                break;
            case RotationType.Roll:
                orion_rotate = 236 // CONCRETE
                break;
        }

        let rotation_amount = 0
        switch (o) {
            case RotationAmount.a:
                rotation_amount = 0
                break;
            case RotationAmount.b:
                rotation_amount = 2
                break;
            case RotationAmount.c:
                rotation_amount = 4
                break;
        }

        signalBlock(0, 1, 1, blocks.blockWithData(blocks.blockById(orion_rotate), rotation_amount))
    }

    /**
     * Docking Test (Activity 2) Player 2
     */
    //% block="повернуть %r к %o"
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
    //% block="повернуть %r к %o"
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
    //% block="повернуть %r к %o"
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
     * Radiation Drill (Activity 3)
     * Player 4
     */
    //% block="`Generics.clearCargo` очистить груз"
    export function clearShelterA3P2(): void {
        signalBlock(0, 3, 2, default_signal_block)
    }
    

    /**
     * Radiation Drill (Activity 3)
     * Player 3
     */
    //% block="`Generics.surroundShelter` окружить укрытие"
    export function surroundShelterA3P3(): void {
        signalBlock(0, 3, 3, default_signal_block)
    }

    /**
     * Radiation Drill (Activity 3)
     * Player 2
     */
    //% block="`Generics.coverShelter` накрыть укрытие"
    export function coverShelterA3P4(): void {
        signalBlock(0, 3, 4, default_signal_block)
    }

    /**
     * Human Physiology (Activity 4) Player 2
     */
    //% block="`Generics.exercise` упражнение в течение %t"
    export function exerciseTimeA4P2(t: ExerciseTimes): void {
        switch (t) {
            case ExerciseTimes.a:
                signalBlock(0, 4, 2, default_signal_block)
                break;
            case ExerciseTimes.b:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.c:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.d:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.e:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;

        }
    }

    /**
     * Human Physiology (Activity 4) Player 3
     */
    //% block="`Generics.exercise` упражнение в течение %t"
    export function exerciseTimeA4P3(t: ExerciseTimes): void {
        switch (t) {
            case ExerciseTimes.a:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.b:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.c:
                signalBlock(0, 4, 3, default_signal_block)
                break;
            case ExerciseTimes.d:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.e:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;

        }
    }

    /**
     * Human Physiology (Activity 4) Player 4
     */
    //% block="`Generics.exercise` упражнение в течение %t"
    export function exerciseTimeA4P4(t: ExerciseTimes): void {
        switch (t) {
            case ExerciseTimes.a:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.b:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.c:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.d:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.e:
                signalBlock(0, 4, 4, default_signal_block)
                break;

        }
    }

    /**
     * Mars Recon (Activity 11)
     */
    //% block="`Generics.takePicture` сделать снимок"
    export function takePictureA11(): void {
        signalBlock(0, 11, 1, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 1
     */
    //% block="`Generics.roverMove` ровер переместить %d на %n"
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
    //% block="`Generics.roverMove` ровер переместить %d на %n"
    export function HroverMoveA5(d: FourDirectionArrows, n: number): void {
        // Проверка перед выполнением кода
        let time: number;
        // Время для прохождения 3 блоков (по условию задачи)
        time = n / 2; // Мы знаем, что правильная скорость 2 для выполнения за 2 единицы времени

        // Проверяем, что время <= 2
        if (time > 2) {
            console.log("Ошибка! Ровер не успеет собрать все кучи вовремя.");
            return; // Задание не выполнено, если время больше 2
        }

        // Теперь выполняем исходный код
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3);
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3);
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3);
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3);
                break;
        }
    }

    /**
     * Building Blocks (Activity 5)
     * Player 1
     */
    //% block="`Generics.collectRegolith` собрать реголит"
    export function collectBlockA5(): void {
        signalBlock(0, 5, 1, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="`Generics.meltRegolith` обработать реголит"
    export function meltRegolithA5(): void {
        signalBlock(0, 5, 2, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="`Generics.castRegolith` отлить блок"
    export function castBlocksA5(): void {
        signalBlock(1, 5, 2, default_signal_block)
    }

    /**
     * Building Blocks (Activity 5)
     * Player 2
     */
    //% block="`Generics.testBlockStrength` протестировать прочность блока"
    export function testBlockStrengthA5(): void {
        signalBlock(2, 5, 2, default_signal_block)
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 1
     */
    //% block="`Generics.roverMove` ровер переместить %d на %n"
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
    //% block="`Generics.drillDown` бурить вниз"
    export function drillDownA6(): void {
        signalBlock(0, 6, 2, default_signal_block)
    }

    /**
     * Ice Drilling (Activity 6)
     * Player 2
     */
    //% block="`Generics.collectSample` собрать образец"
    export function collectSampleA6(): void {
        signalBlock(1, 6, 2, default_signal_block)
    }

    /**
     * Moon Mapping (Activity 8) Player 1
     */
    //% block="`Generics.markLocation` отметить местоположение $x_axis $y_axis"
    export function setLocationA8P1(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 8, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Moon Mapping (Activity 8) Player 2
     */
    //% block="`Generics.takePicture` сделать снимок"
    export function takePictureA8P2(): void {
        signalBlock(0, 8, 2, default_signal_block)
    }

    /**
     * Moon Mapping (Activity 8) Player 2
     * Player 1
     */
    //% block="`Generics.viperMove` VIPER переместить %d на %n"
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
     * Crew Meals (Activity 9)
     * Player 1
     */
    //% block="`Generics.PowerSwitch` переключить питание %i"
    export function togglePowerA9P1(i: onOffToggle): void {
        switch (i) {
            case onOffToggle.a:
                signalBlock(0, 9, 1, default_signal_block)
                break;
            case onOffToggle.b:
                signalBlock(0, 9, 1, ORANGE_CONCRETE)
                break;
        }
    }

    /**
     * Crew Meals (Activity 9)
     * Player 1
     */
    //% block="`Generics.place` разместить замороженный %i"
    export function placeIngredientA9P1(i: CrewMealIngredients): void {
        switch (i) {
            case CrewMealIngredients.PlacePeanut:
                signalBlock(1, 9, 1, ORANGE_CONCRETE)
                break;
            case CrewMealIngredients.PlacePepper:
                signalBlock(1, 9, 1, ORANGE_CONCRETE)
                break;
            case CrewMealIngredients.PlaceSauce:
                signalBlock(1, 9, 1, default_signal_block)
                break;
        }
    }

    /**
     * Crew Meals (Activity 9)
     * Player 1
     */
    //% block="`Generics.Rehydrate` регидрировать с %i водой"
    export function rehydrateA9P1(i: RehydrationOptions): void {
        switch (i) {
            case RehydrationOptions.A25ML:
                signalBlock(2, 9, 1, YELLOW_CONCRETE)
                break;
            case RehydrationOptions.A50ML:
                signalBlock(2, 9, 1, ORANGE_CONCRETE)
                break;
            case RehydrationOptions.A75ML:
                signalBlock(2, 9, 1, WHITE_CONCRETE)
                break;
            case RehydrationOptions.A100ML:
                signalBlock(2, 9, 1, GREEN_CONCRETE)
                break;
        }
    }

    /**
     * Crew Meals (Activity 9)
     * Player 2
     */
    //% block="`Generics.plus` добавить %i"
    export function addIngredientsA9P2(i: CrewMealAddIngredients): void {
        switch (i) {
            case CrewMealAddIngredients.AddAnchovies:
                signalBlock(0, 9, 2, default_signal_block)
                break;
            case CrewMealAddIngredients.AddCheese:
                signalBlock(0, 9, 2, ORANGE_CONCRETE)
                break;
            case CrewMealAddIngredients.AddPepperoni:
                signalBlock(0, 9, 2, YELLOW_CONCRETE)
                break;
            case CrewMealAddIngredients.AddTomato:
                signalBlock(0, 9, 2, GREEN_CONCRETE)
                break;
        }
    }

    /**
     * Crew Meals (Activity 9)
     * Player 2
     */
    //% block="`Generics.pizzaServe` подать пиццу"
    export function servePizzaA9P2(): void {
        signalBlock(1, 9, 2, default_signal_block)
    }

    /**
     * Asteroid Mining (Activity 12)
     */
    //% block="`Generics.mineBlock` добыть астероид"
    export function mineAsteroidA12(): void {
        signalBlock(0, 12, 1, default_signal_block)
    }

    /**
     * Lunar Garden (Activity 13)
     * Player 1
     */
    //% block="`Generics.agentMove` агент переместить %d на %n"
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
     * Water Recycling (Activity 20)
     */
    //% block="`Generics.agentMove` агент переместить %d на %n"
    export function agentMoveA20(d: FourDirectionArrows, n: number): void {
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
     * Water Recycling (Activity 20)
     */
    //% block="`Generics.removeDebris` убрать обломки"
    export function removeDebrisA20(): void {
        signalBlock(0, 20, 1, default_signal_block)
    }

    /**
     * Lunar Garden 1 (Activity 13)
     */
    //% block="`Generics.plantSeed` посадить семя"
    export function lunarGarden1A13(): void {
        signalBlock(0, 13, 1, default_signal_block)
    }

    /**
     * ISS Help (Activity 21)
     * GOAL Blue
     */
    //% block="`Generics.retrieveCargo` забрать груз %c"
    export function retrieveBlueGoalA21(c: IssHelpColors): void {
        let docking_ring = RED_CONCRETE
        switch (c) {
            case IssHelpColors.BlueCargo:
                docking_ring = default_signal_block
                break;
        }

        signalBlock(0, 21, 1, docking_ring)
    }

    /**
     * ISS Help (Activity 21)
     * GOAL Yellow
     */
    //% block="`Generics.retrieveCargo` забрать груз %i"
    export function retrieveYellowGoalA21(c: IssHelpColors): void {
        let docking_ring = RED_CONCRETE
        switch (c) {
            case IssHelpColors.YellowCargo:
                docking_ring = default_signal_block
                break;
        }

        signalBlock(0, 21, 1, docking_ring)
    }
    /**
     * ISS Help (Activity 21)
     * GOAL Magenta
     */
    //% block="`Generics.retrieveCargo` забрать груз %i"
    export function retrieveMagentaGoalA21(c: IssHelpColors): void {
        let docking_ring = RED_CONCRETE
        switch (c) {
            case IssHelpColors.MagentaCargo:
                docking_ring = default_signal_block
                break;
        }

        signalBlock(0, 21, 1, docking_ring)
    }

    /**
     * ISS Help (Activity 21)
     * load cargo
     */
    //% block="`Generics.loadCargo` загрузить груз"
    export function loadCargoA21(): void {
        signalBlock(0, 21, 1, ORANGE_CONCRETE)
    }

    /**
     * Agent Move Footsize 1
     */
    //% block="`Generics.agentMove` агент переместить %d на %n"
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
    //% block="`Generics.agentMove` агент переместить %d на %n"
    export function agentMoveFoot3(d: FourDirectionArrows, n: number): void {
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
     * Space Junk (Activity 16) ADRV Move
     */
    //% block="`Generics.agentMove` агент переместить %d на %n"
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
    //% block="`Generics.roverMove` ровер переместить %d на %n"
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
    //% block="`Generics.ingenuityMove` Ingenuity переместить %d на %n"
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
    //% block="`Generics.takePicture` сделать снимок $x_axis $y_axis"
    export function takePictureA14(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 14, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Orion Splashdown (Activity 15)
     */
    //% block="`Generics.markLocation` установить местоположение $x_axis $y_axis"
    export function setLocationA15(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 15, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Landing Site (Activity 17)
     */
    //% block="`Generics.markLocation` отметить местоположение $x_axis $y_axis"
    export function markLocationA17(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 17, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Earth's Pollution (Activity 18)
     */
    //% block="`Generics.deployCubesat` развернуть CubeSat $x_axis $y_axis"
    export function deployCubsatA18(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 18, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * Laser Alignment (Activity 19)
     */
    //% block="`Generics.setAlignment` установить выравнивание на $x_axis $y_axis"
    export function setAlignmentA19(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 19, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    // helper functions
    function signalBlock(step: number, activity: number, player: number, block: Block): void {
        blocks.place(block, world(step, activity, player))
        loops.pause(communicationsTimeout)
    }

}
