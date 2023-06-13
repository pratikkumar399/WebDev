
import SingleCard from './single-card.component'
import './card-list.styles.css'
import './card.styles.css'



const CardList = ({ monsters }) => (

    <div className="card-list">
        {monsters.map((monster) => {
            return (
                <SingleCard monster={monster} />
            )
        })}
    </div>
);

export default CardList;
