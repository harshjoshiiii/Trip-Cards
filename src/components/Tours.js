import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Trip Cards</h2>
            </div>
            <div className='cards'>
                {
                    // yha hmne map krke bheja hai and spread operator ka use kra hai. 
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;