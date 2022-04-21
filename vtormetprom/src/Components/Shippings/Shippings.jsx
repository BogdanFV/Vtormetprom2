import s from './Shippings.module.css'
import Shipping from './Shipping/Shipping';



const Shippings = (props) => {   

    let allShippings = props.shippings.map( shipping => <Shipping number={shipping.number}
      price={shipping.price} mass={shipping.mass} type={shipping.type} distance={shipping.distance}
      time={shipping.time} city1={shipping.city1} region1={shipping.region1} city2={shipping.city2}
      region2={shipping.region2} date={shipping.date}/>)

    return (
        <div>
            {allShippings}
        </div>
    );
}

export default Shippings;
