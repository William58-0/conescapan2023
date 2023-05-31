import { Link } from "react-router-dom"

export const DisplayLink = ({link}) => {
    console.log(link);
  return (
    <div className="w-5/12 md:w-4/12 lg:w-2/12 m-2 max-w-[300px] flex flex-wrap">
      <div className="w-full flex justify-center">
        <img src={link.image} alt={link.name} />
      </div>
      <div className="w-full my-2 flex justify-center">
        <h4 className="uppercase text-lg font-semibold">{link.name}</h4>
      </div>
      <div className="my-3 px-2 flex justify-center">
        <p className="text-justify">{link.description}</p>
      </div>
      <div className="w-full flex justify-center">
        <Link
            to={link.link}
            style={{
                backgroundColor: '#053A91',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '7px',
                paddingBottom: '7px',
                borderRadius: '10px',
                fontWeight: 500,
                alignItems: 'center'
            }}
        >
            Click here!
        </Link>
      </div>
    </div>
  )
}

