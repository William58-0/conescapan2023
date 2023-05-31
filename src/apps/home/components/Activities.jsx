import { activities } from "../../../constants/activities";
import { DisplayActivity } from "./DisplayActivity";


export const Activities = () => {
  return (
    <section id="activities" className="w-full flex flex-wrap justify-center my-6 bg-[#f1f1f1] py-4">
        <div className="w-full flex justify-center my-4">
          <h3 className="text-xl lg:text-5xl font-bold text-[#053A91]">Actividades</h3>
        </div>
        <div className="w-full flex flex-wrap max-w-[1400px] mx-auto justify-center md:justify-between">
            {
                activities.map((activity, index) => (
                    <DisplayActivity activity={activity} key={index}/>
                ))
            }
        </div>
    </section>
  )
}


