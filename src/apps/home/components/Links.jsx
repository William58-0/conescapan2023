import { links } from '../../../constants/links';
import { DisplayLink } from './DisplayLink';


export const Links = () => {
  return (
    <section className='w-full py-4 flex flex-wrap justify-center lg:justify-between max-w-[1400px] mx-auto'>
      {
        links.map((link, index) => (
            <DisplayLink link={link} key={index}/>
        ))
      }
    </section>
  )
}


