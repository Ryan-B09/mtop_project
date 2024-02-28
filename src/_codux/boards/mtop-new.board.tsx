import '../../reset.css';
import { createBoard } from '@wixc3/react-board';
import MtopLogo from '../../assets/transport_logo_Light.svg';
import spclogo from '../../assets/spc.png';

export default createBoard({
    name: 'MtopNew',
    Board: () => (
        <div>
            <div className="head bg-kolor-3" />

            <img src={MtopLogo} alt="" className="mtplogoNEW" />

            <img src={spclogo} alt="" className="spclogoNEW" />

            <div className="lineNEW"></div>
            <h1 className="titulo text-[50px] ml-40 text-kolor-1 fixed bottom-[950px]">
                Motorized Tricycle Operators Permit
            </h1>

            <div className="titulo2 text-[30px] fixed">
                <h1> City Of San Pablo</h1>
            </div>
            <form>
            <div className="bottom-[750px] fixed">
                <p className="text-[20px] ml-[-100px] ">New MTOP No:</p>
            </div>

            <div className="pt-[80px]">
                <input
                    type="text"
                    className="w-[257px] h-[34px] border border-black ml-[50px] rounded-md fixed"
                ></input>
            </div>

            <div className="bottom-[600px] ml-[385px] absolute">
                <p className="font-sans text-[40px]">New Franchise</p>
            </div>

            <div className="bottom-[750px] fixed">
                <p className="text-[20px] ml-[750px]">Date:</p>
            </div>

            <div className="pl-[610px] pb-[500px]">
                <input
                    type="text"
                    className="w-[257px] h-[34px] border border-black ml-[220px] rounded-md fixed"
                ></input>
            </div>

            <div className="Division bg-black ml-[-100px] w-[1200px] h-[1px] bottom-[680px] fixed"></div>

            <div className="own">
                <p className="font-bold text-[20px] ml-[-120px] bottom-[600px] fixed">
                    Owners Information
                </p>
            </div>

            <div className="O.Name bottom-[550px] fixed">
                <p className="text-[20px] ml-[-100px] ">Name:</p>
            </div>
            <div className="I.name fixed bottom-[550px] ml-[50px]">
                <input
                    type="text"
                    className="w-[257px] h-[34px] border border-black rounded-md"
                ></input>
            </div>

            <div className="N.Adr bottom-[550px] fixed">
                <p className="text-[20px] ml-[355px]">Address:</p>
            </div>

            <div className="I.Adr bottom-[550px] ml-[450px] fixed">
                <input
                    type="text"
                    className="w-[257px] h-[34px] border border-black rounded-md"
                ></input>
            </div>

            <div className="N.Con bottom-[550px] fixed">
                <p className="text-[20px] ml-[750px]">Contact:</p>
            </div>

            <div className="I.Con bottom-[550px] ml-[830px] fixed">
                <input
                    type="text"
                    className="w-[257px] h-[34px] border border-black rounded-md"
                ></input>
            </div>

            <div className="Division bg-black ml-[-100px] w-[1200px] h-[1px] bottom-[480px] fixed"></div>

            <div className="Drivers">
                <p className="font-bold text-[20px] ml-[-120px] bottom-[403px] fixed">
                    Drivers Information
                </p>
            </div>

            <div className="Radio">
                <input
                    type="radio"
                    className="w-[19px] h-[19px] fixed ml-[180px] bottom-[407px] "
                />
            </div>

            <div className="S.Drivers">
                <p className="font-bold text-[20px] ml-[220px] bottom-[403px] fixed">
                    Same as Drivers
                </p>

                <div className="O.Name bottom-[250px] fixed">
                    <p className="text-[20px] ml-[-100px] ">Name:</p>
                </div>
                <div className="I.name fixed bottom-[250px] ml-[50px]">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="N.Adr bottom-[250px] fixed">
                    <p className="text-[20px] ml-[355px]">Address:</p>
                </div>

                <div className="I.Adr bottom-[250px] ml-[450px] fixed">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="N.Con bottom-[250px] fixed">
                    <p className="text-[20px] ml-[750px]">Contact:</p>
                </div>

                <div className="I.Con bottom-[250px] ml-[830px] fixed">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="previous">
                    <button
                        type="submit"
                        className="border border-black w-[155px] h-[34px] rounded-md fixed bottom-[50px] ml-[750px] text-kolor-2"
                    >
                        Previous
                    </button>
                </div>

                <div className="Count">
                    <p className="fixed text-[49px] text-kolor-2 bottom-[80px] ml-[890px]">
                        1/3
                    </p>
                </div>

                <div className="Next">
                    <button
                        type="submit"
                        className="border border-black w-[155px] h-[34px] rounded-md fixed bottom-[50px] ml-[950px] text-white bg-kolor-1"
                    >Next</button>
                  </div>
                </div>
            </form>
        </div>
        
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1440,
        windowHeight: 1024,
        canvasWidth: 1024,
        canvasHeight: 687,
    },
});
