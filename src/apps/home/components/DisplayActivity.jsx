

export const DisplayActivity = ({activity}) => {
  return (
    <div className="bg-white w-5/12 md:w-4/12 lg:w-3/12 max-w-[300px] rounded-lg shadow-lg p-5 m-3">
      <div className="w-full flex justify-center mb-4">
        <img src={activity.logo} alt={activity.name} />
      </div>
      <div className="w-full flex justify-center border-t-2 border-[#f1f1f1] items-center py-3">
        <h4 className="text-lg font-semibold text-[#053A91] text-center">{activity.name}</h4>
      </div>
    </div>
  )
}

