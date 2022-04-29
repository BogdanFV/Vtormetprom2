import s from './ShippingsPage.module.css'
import Shipping from './Shipping/Shipping';
import ShippingSorting from './ShippingSorting/ShippingSorting';
import CustomPagination from './CustomPagination/CustomPagination';
import ShippingsList from './ShippingsList/ShippingsList';

const ShippingsPage = (props) => {

    let allShippings = props.shippings.map(shipping => <Shipping number={shipping.number}
        price={shipping.price} mass={shipping.mass} type={shipping.type} distance={shipping.distance}
        time={shipping.time} city1={shipping.city1} region1={shipping.region1} city2={shipping.city2}
        region2={shipping.region2} date={shipping.date} />);

    let currentShippings = props.currentDisplay.map(shipping => <Shipping number={shipping.number}
        price={shipping.price} mass={shipping.mass} type={shipping.type} distance={shipping.distance}
        time={shipping.time} city1={shipping.city1} region1={shipping.region1} city2={shipping.city2}
        region2={shipping.region2} date={shipping.date} />);


    
    
        
    return (
        <div className={s.shippingPage}>
            <ShippingSorting />
            <ShippingsList amountOfElems = {allShippings} currentDisplay = {currentShippings}/>
            <CustomPagination amountOfElems = {allShippings} shippingsNewPage={props.shippingsNewPage} />
        </div> 
    );

    
  
    
}

export default ShippingsPage;
