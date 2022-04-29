import s from './ShippingsList.module.css'

const ShippingsList = (props) => {   
    // let firstNumber = parseInt(props.currentDisplay[0].props.number.match(/\d+/)) 
    return (
        <div className={s.shippingsArray}>
            <div className={s.fastSorting}>
                <div>
                    1 - 5 из {props.amountOfElems.length} заказов {/*надо пофиксить */}
                </div>

                <div>
                    сортировать по дате погрузки
                </div>
            </div>
            {props.currentDisplay}
        </div>  
    );
}

export default ShippingsList;
