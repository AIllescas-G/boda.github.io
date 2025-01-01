import { useState } from "react";


export default function MainMenu() {



    

    const [none, setNone] = useState(true)

    const onClickHome = () => {
        window.location.href = "#home";
        setNone(!none);
    };

    const onClickItinerario = () => {
        window.location.href = "#itinerario";
        setNone(!none);
    };

    const onClickConfirma = () => {
        window.location.href = "#confirma";
        setNone(!none);
    };

    const onClickPlanea = () => {
        window.location.href = "#planea";
        setNone(!none);
    };

    const onClickHotel = () => {
        window.location.href = "#hotel";
        setNone(!none);
    };

    const onClickTransporte = () => {
        window.location.href = "#tras";
        setNone(!none);
    };

    const onClickRestaurantes = () => {
        window.location.href = "#res";
        setNone(!none);
    };

    const toggleMenu = () => {
        setNone(!none);
    };

    return (



        <div className={` main-menu layout-background   ${none ? 'none-menu' : '' }`}>

            <div className="main-button ">
                <div className=" flex flex-col mt-9 text-left gap-6 justify-start items-start ml-6 text-2xl">
                    <button onClick={onClickHome}> Home </button>
                    <button onClick={onClickItinerario}> Itinerario  </button>
                    <button onClick={onClickConfirma}> Confima asistencia  </button>
                    <button onClick={onClickPlanea}> Planea vieje  </button>
                    <button onClick={onClickHotel}> Hospedaje </button>
                    <button onClick={onClickTransporte}> Transporte </button>
                    <button onClick={onClickRestaurantes}> Restaurantes </button>
                </div>
            </div>
            <button className="button-menu" onClick={toggleMenu}>
                <svg className="h-8 w-8  text-white"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="6" x2="20" y2="6" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="4" y1="18" x2="20" y2="18" /></svg>
            </button>

        </div>
    )

}
