
import GameboyTheme from "../theme/GameboyTheme";

interface Props {
    text?: string
}

const Gameboy = ( { text = 'Hi, my name is [ name ] and I love...' } : Props ) => {

    const { container, borderScreen, screen, crossX, crossY, buttons, 
        btnMenu, speakerContainer, speakers } = GameboyTheme();

    return (
        <div className={ container } >
                {/* Screen */}
            <div className={ borderScreen } >
                <div className={ screen } >
                    <p className="text-green-900">{ text }</p>
                </div>
            </div>

                {/* Name */}
            <h1 className="mt-1">Nintendo <span className="italic font-light text-lg">GAME BOY</span></h1>

                {/* Buttons */}
            <div className="flex items-center px-2 py-4" >

                {/* Cross */}
                <div className="basis-1/2" >
                    <div className="w-20 h-20 relative bg-gray-400/[0.2] rounded-full" >
                        <div className={ crossX } />
                        <div className={ crossY } />
                    </div>
                </div>

                {/* Buttons A and B */}
                <div className="basis-1/2 grid justify-items-end">
                    <div className="-rotate-[20deg]">
                        <div className="flex space-x-3 bg-gray-400/[0.2] p-2 rounded-full" >
                            <div className={ buttons } />
                            <div className={ buttons } />
                        </div>
                        <div className="flex text-center">
                            <p className="basis-1/2" >B</p>
                            <p className="basis-1/2" >A</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons to menu */}
            <div className="mt-2">
                <div className="flex">
                    <div className="text-xs basis-2/3 grid justify-items-end">
                        <div className="flex space-x-3">
                            <div className="-rotate-[20deg]">
                                <div className={ btnMenu } />
                                <p>SELECT</p>
                            </div>
                            <div className="-rotate-[20deg]">
                                <div className={ btnMenu } />
                                <p>START</p>
                            </div>
                        </div>
                    </div>

                    {/* Speaker */}
                    <div className={ speakerContainer }>
                        <div className={ speakers } />
                        <div className={ speakers } />
                        <div className={ speakers } />
                        <div className={ speakers } />
                        <div className={ speakers } />
                        <div className={ speakers } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gameboy
