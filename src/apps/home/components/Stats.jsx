import { useEffect, useState } from "react"


export const Stats = ({startAnimation, reference}) => {

    const [participants, setParticipants] = useState(0);
    const [collaborators, setCollaborators] = useState(0);
    const [seat, setSeat] = useState(0);

    if(participants < 200 && startAnimation){
        setTimeout(() => {
                setParticipants(participants + 1);
                if(participants > 2*collaborators){
                    setCollaborators(collaborators + 1);
                }
                if(participants > 66.67*seat ){
                    setSeat(seat + 1);
                }
        }, 10);
    }

  return (
    <section className="w-full flex justify-center stats my-10 mb-16" ref={reference}>
        <div className="w-full max-w-[1000px] flex justify-center py-10">
            <div className="w-full lg:w-4/12 flex justify-center flex-col items-center flex-wrap">
                <div className="w-full flex justify-center">
                    <span className="font-bold text-6xl text-white">{`+${participants}`}</span>
                </div>
                <div className="w-full flex justify-center">
                    <span className="font-bold text-2xl text-white uppercase">Participantes</span>
                </div>
            </div>
            <div className="w-full lg:w-4/12 flex justify-center flex-col items-center flex-wrap">
                <div className="w-full flex justify-center">
                    <span className="font-bold text-6xl text-white">{`+${collaborators}`}</span>
                </div>
                <div className="w-full flex justify-center">
                    <span className="font-bold text-2xl text-white uppercase">Colaboradores</span>
                </div>
            </div>
            <div className="w-full lg:w-4/12 flex justify-center flex-col items-center flex-wrap">
                <div className="w-full flex justify-center">
                    <span className="font-bold text-6xl text-white">{`+${seat}`}</span>
                </div>
                <div className="w-full flex justify-center">
                    <span className="font-bold text-2xl text-white uppercase">Sedes</span>
                </div>
            </div>
        </div>
    </section>
  )
}

