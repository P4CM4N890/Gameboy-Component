
const GameboyTheme = () => {

    const container = `bg-gray-300 w-[19rem] h-[32rem] px-5 py-8 rounded-t-md rounded-bl-md rounded-br-3xl font-mono text-blue-900 font-semibold shadow-md select-none`;

    const borderScreen = `bg-gray-500 w-full h-3/6 flex justify-center py-7 px-11 rounded-t-md rounded-bl-md rounded-br-3xl`;

    const screen = `bg-green-500 w-full h-full shadow-inner shadow-gray-700 p-5 flex items-center`;

    const crossX = `absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-5 bg-black rounded-sm`;

    const crossY = `absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-16 bg-black rounded-sm`;

    const buttons = `bg-red-900 w-10 h-10 rounded-full shadow shadow-gray-700 transition-transform duration-300 transform active:scale-95 active:shadow-none`;

    const btnMenu = `bg-gray-500 h-3 w-9 rounded-full shadow shadow-gray-700 transition-transform duration-300 transform active:scale-95 active:shadow-none`;

    const speakerContainer = `basis-1/3 flex space-x-3.5 -rotate-[20deg] mt-6`;

    const speakers = `h-12 w-1.5 bg-gray-700 rounded-full`;

    return {
        container,
        borderScreen,
        screen,
        crossX,
        crossY,
        buttons,
        btnMenu,
        speakerContainer,
        speakers,
    }

}


export default GameboyTheme
