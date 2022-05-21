import Card from "./Card"


const Cards = ({ robots, prefix }) => {
    const cardsList = robots.map((item) => {
        return <Card key={item.id} id={`${prefix}${item.id}`} name={item.name} email={item.email} />
    });
    return (
        <div>
            {cardsList}
        </div>
    )
}

export default Cards