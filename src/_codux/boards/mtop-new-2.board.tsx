import '../../reset.css';
import { createBoard } from '@wixc3/react-board';
import MtopLogo from '../../assets/transport_logo_Light.svg';
import spclogo from '../../assets/spc.png';

export default createBoard({
    name: 'MtopNew 2',
    Board: () => (
        <div className="md:w-32">
            <div className="head bg-kolor-3" />

            <img src={MtopLogo} alt="" className="mtplogoNEW" />

            <img src={spclogo} alt="" className="spclogoNEW" />

            <div className="lineNEW"></div>
            <h1 className="titulo text-[50px] ml-40 text-kolor-1 fixed bottom-[950px] font-">
                Motorized Tricycle Operators Permit
            </h1>

            <div className="titulo2 text-[30px] fixed">
                <h1> City Of San Pablo</h1>
            </div>
            <form>
                <div className="bottom-[670px] fixed">
                    <p className="text-[20px] ml-[-100px] ">Make:</p>
                </div>

                <div className="pt-[80px]">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black ml-[50px] rounded-md bottom-[670px] fixed"
                    ></input>
                </div>

                <div className="bottom-[600px] ml-[385px] absolute">
                    <p className="font-sans text-[40px]">New Franchise</p>
                </div>

                <div className="bottom-[670px] fixed">
                    <p className="text-[20px] ml-[730px]">Model No:</p>
                </div>

                <div className="pl-[610px] pb-[500px]">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black ml-[310px] rounded-md bottom-[670px] fixed"
                    ></input>
                </div>

                <div className="own">
                    <p className="font-bold text-[20px] ml-[-120px] bottom-[750px] fixed">
                        Vehicles Information
                    </p>
                </div>

                <div className="O.Name bottom-[600px] fixed">
                    <p className="text-[20px] ml-[-100px] ">Chassis No.:</p>
                </div>
                <div className="I.name fixed bottom-[600px] ml-[50px]">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="N.Adr bottom-[670px] fixed">
                    <p className="text-[20px] ml-[355px]">Model:</p>
                </div>

                <div className="I.Adr bottom-[670px] ml-[450px] fixed">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="N.Con bottom-[600px] fixed">
                    <p className="text-[20px] ml-[730px]">Sidecar No:</p>
                </div>

                <div className="I.Con bottom-[600px] ml-[920px] fixed">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="S.Drivers">
                    <p className="font-bold text-[20px] ml-[220px] bottom-[403px] fixed"></p>

                    <div className="O.Name bottom-[520px] fixed">
                        <p className="text-[20px] ml-[-100px] ">OR No.:</p>
                    </div>
                    <div className="I.name fixed bottom-[520px] ml-[50px]">
                        <input
                            type="text"
                            className="w-[257px] h-[34px] border border-black rounded-md"
                        ></input>
                    </div>

                    <div className="Or.text bottom-[450px] fixed">
                        <p className="text-[20px] ml-[-100px] ">Disp:</p>
                    </div>

                    <div className="Or.input fixed bottom-[450px] ml-[50px]">
                        <input
                            type="text"
                            className="w-[257px] h-[34px] border border-black rounded-md"
                        ></input>
                    </div>

                    <div className="tpl.text bottom-[380px] fixed">
                        <p className="text-[20px] ml-[-100px] ">
                            TPL Effectivity:
                        </p>
                    </div>

                    <div className="tpl.input fixed bottom-[380px] ml-[50px]">
                        <input
                            type="text"
                            className="w-[257px] h-[34px] border border-black rounded-md"
                        ></input>
                    </div>

                    <div className="N.Adr bottom-[600px] fixed">
                        <p className="text-[20px] ml-[355px]">Plate No:</p>
                    </div>

                    <div className="I.Adr bottom-[600px] ml-[450px] fixed">
                        <input
                            type="text"
                            className="w-[257px] h-[34px] border border-black rounded-md"
                        ></input>
                    </div>

                    <div className="cr.text bottom-[520px] fixed">
                        <p className="text-[20px] ml-[355px]">CR No:</p>
                    </div>

                    <div className="cr.input bottom-[520px] ml-[450px] fixed">
                        <input
                            type="text"
                            className="w-[257px] h-[34px] border border-black rounded-md"
                        ></input>
                    </div>

                    <div className="N.Con bottom-[520px] fixed">
                        <p className="text-[20px] ml-[730px]">Stroke No:</p>
                    </div>

                    <div className="I.Con bottom-[520px] ml-[920px] fixed">
                        <input
                            type="text"
                            className="w-[257px] h-[34px] border border-black rounded-md"
                        ></input>
                    </div>

                    <div className="ip.text bottom-[450px] fixed">
                        <p className="text-[20px] ml-[730px]">
                            Insurance Provider:
                        </p>
                    </div>

                    <div className="ip.input bottom-[450px] ml-[920px] fixed">
                        <input
                            type="text"
                            className="w-[257px] h-[34px] border border-black rounded-md"
                        ></input>
                    </div>

                    <div className="previous">
                        <button
                            type="submit"
                            className="border border-black w-[155px] h-[34px] rounded-md fixed bottom-[50px] ml-[750px] bg-kolor-1 text-whites"
                        >
                            Previous
                        </button>
                    </div>

                    <div className="Count">
                        <p className="fixed text-[49px] text-kolor-2 bottom-[80px] ml-[890px]">
                            2/3
                        </p>
                    </div>

                    <div className="Next">
                        <button
                            type="submit"
                            className="border border-black w-[155px] h-[34px] rounded-md fixed bottom-[50px] ml-[950px] text-white bg-kolor-1"
                        >
                            Next
                        </button>
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
        canvasHeight: 691,
    },
});
