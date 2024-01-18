import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
const Address = () => {
    // variables
    const iconName = [
        {
            title: faCalendarDays,
            context: 'Auguest 28 ,1999',
            id: 1
        },
        {
            title: faLocationDot,
            context: 'Egypt , Alex , Eg',
            id: 2
        },
        {
            title: faEnvelope,
            context: 'mostafajohar66@gmail.com',
            id: 3
        },
        {
            title: faPhone,
            context: '01553669005',
            id: 4
        }

    ]
    return (
        <>
            {
                iconName.map((icon) => (
                    <p key={icon.id} className='text-white  mb-2'>
                        <FontAwesomeIcon icon={icon.title} />
                        <span className='ml-2 text-[15px]'>{icon.context}</span>
                    </p>
                ))
            }
        </>
    );
}

export default Address;