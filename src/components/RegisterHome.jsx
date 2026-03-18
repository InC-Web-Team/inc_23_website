
import { eventsData } from '../constants'
import FormsBanner from './forms/formBanner'
import { useNavigate } from 'react-router-dom'

const RegisterHome = () => {

	const navigate = useNavigate()

  return (
    <section className='py-24 h-full flex flex-col gap-y-8 p-2'>
        {Object.keys(eventsData).map((key) => {
						const event = eventsData[key]
              const isRegistrationOpen = event.registrations?.isRegistrationOpen ?? true
            return <FormsBanner
							key={key}
							className={`hover:scale-[1.02] duration-300 ${isRegistrationOpen ? 'cursor-pointer' : 'cursor-not-allowed opacity-80'} max-sm:min-h-[300px] max-sm:flex items-strech`}
							logo={event.logo}
							eventName={event.name}
							eventDescription={event.short_desc}
							eventEligibility={event.criteria}
							onClick={() => {
                if (isRegistrationOpen) {
                  navigate(`/register/${event.id}`)
                }
              }}
						/>
        })}
    </section>
  )
}

export default RegisterHome