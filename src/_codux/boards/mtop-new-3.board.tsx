import '../../reset.css';
import { createBoard } from '@wixc3/react-board';
import MtopLogo from '../../assets/transport_logo_Light.svg';
import spclogo from '../../assets/spc.png';

export default createBoard({
    name: 'MtopNew 3',
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
                <div className="bottom-[670px] fixed">
                    <p className="text-[20px] ml-[-150px] ">LTO Renewal Month:</p>
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
                    <p className="text-[20px] ml-[750px]">Route:</p>
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
                    <p className="text-[20px] ml-[-150px] ">Remarks:</p>
                </div>
                <div className="I.name fixed bottom-[600px] ml-[50px]">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="N.Adr bottom-[670px] fixed">
                    <p className="text-[20px] ml-[325px]">Toda:</p>
                </div>

                <div className="I.Adr bottom-[670px] ml-[480px] fixed">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="N.Con bottom-[600px] fixed">
                    <p className="text-[20px] ml-[750px]">Type of Franchise:</p>
                </div>

                <div className="I.Con bottom-[600px] ml-[920px] fixed">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                <div className="S.Drivers">
                    <p className="font-bold text-[20px] ml-[220px] bottom-[403px] fixed"></p>
                </div>

                    <div className="O.Name bottom-[600px] fixed">
                        <p className="text-[20px] ml-[325px] ">Kind of Business:</p>
                    </div>

                    <div className="I.name fixed bottom-[600px] ml-[480px]">
                    <input
                        type="text"
                        className="w-[257px] h-[34px] border border-black rounded-md"
                    ></input>
                </div>

                    <div className="previous">
                        <button
                            type="submit"
                            className="border border-black w-[155px] h-[34px] rounded-md fixed bottom-[50px] ml-[750px] bg-kolor-1 text-white"
                        >
                            Previous
                        </button>
                    </div>

                    <div className="Count">
                        <p className="fixed text-[49px] text-kolor-2 bottom-[80px] ml-[890px]">
                            3/3
                        </p>
                    </div>

                    <div className="Next">
                        <button
                            type="submit"
                            className="border border-black w-[155px] h-[34px] rounded-md fixed bottom-[50px] ml-[950px] text-white bg-kolor-1"
                        >
                            Next
                        </button>

                        <div className='Preview'>

                            <button type='submit'
                            className= 'w-[155px] h-[34px] border border-black rounded-md ml-[750px] bg-kolor-1 text-white fixed'>Preview
                                    
                            </button>

                            <div className='Clear'>

                            <button type='submit'
                            className= 'w-[155px] h-[34px] border border-black rounded-md ml-[950px] bg-kolor-1 text-white  fixed'>Clear
                                    
                            </button>
 
                        </div>     
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
