import userImg from '../images/user-solid.svg'

const customers = [
    {
        id: 0,
        name: 'Customer0',
        rating: 'Good',
        review: 'User review User review User review User review',
        imageSrc: userImg
    },
    {
        id: 1,
        name: 'Customer1',
        rating: 'Good',
        review: 'User review User review User review User review',
        imageSrc: userImg
    },
    {
        id: 2,
        name: 'Customer2',
        rating: 'Good',
        review: 'User review User review User review User review',
        imageSrc: userImg
    },
    {
        id: 3,
        name: 'Customer3',
        rating: 'Good',
        review: 'User review User review User review User review',
        imageSrc: userImg
    }
]

const CustomerCard = ({name, rating, review, imageSrc}) => {
    return (
        <div className='customerCard'>
            <div className='left'>
                <img src={imageSrc} />
                <p className='lead-text'>{name}</p>
            </div>
            <div className='right'>
                <p className='lead-text'>{rating}</p>
                <p className='p-text'>{review}</p>
            </div>
        </div>
    )
}

const CustomersSay = () => {
    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 customerSay">
                <h1 className='displayTitle'>Customer Say</h1>
                <div className='customerCards'>
                    {customers.map(customer => {
                        return(
                            <CustomerCard key={customer.id} name={customer.name} rating={customer.rating} review={customer.review} imageSrc={customer.imageSrc}/>
                        )
                    })}
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    )
}

export default CustomersSay;