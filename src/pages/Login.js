import React from "react";

function Login(){
    return (
        <div>
            <div className="root">
            <h1 className="title font-serif drop-shadow-xl">
                MTOP San Pablo City
            </h1>
            <div className="header bg-white-600">
                <img src={userlogo} alt="" className="user" />
                <img src={spclogo} alt="" className="SpcLogo" />
                <img src={MtopLogo} alt="" className="mtoplogo" />
                <img src={pass} alt="" className="word" />
                <div className="V-line" />
                <form className="newlog">
                    <input
                        type="text"
                        className="email border-2 hover:border-kolor-1 text-stone-950 hover:text-kolor-1 bg-kolor-2/20"
                        placeholder="E-Mail"
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        className="pass border-2 hover:border-kolor-1  text-stone-950 hover:text-kolor-1 bg-kolor-2/20"
                        placeholder="Password"
                    />
                    <br />
                    <input
                        type="submit"
                        value="LOG IN"
                        className="login bg-kolor-1 text-white hover:bg-sky-900 cursor-pointer"
                    />
                   
                    <input
                        type="submit"
                        value="Forgot Password?"
                        className="forgot text-gray-400 underline hover:decoration-2 hover:decoration-kolor-1 cursor-pointer"
                    />
                    
                </form>
            </div>
        </div>
      
        </div>
    )
}