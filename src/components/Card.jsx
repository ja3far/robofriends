
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Card = ({ id, name, email }) => {
    const [isLoading, setIsLoading] = useState(true);
    const cardData = (
        <div>
            <img alt='Robots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
    setTimeout(() => {
        setIsLoading(false)
    }, 1000); // This timer just for simulation (just for testing)
    return (<div className='tc bg-light-green dib br3 ma2 grow bw-2 shadow-5'>
        {isLoading ? <LoadingSpinner /> : cardData}
    </div>);
}

export default Card