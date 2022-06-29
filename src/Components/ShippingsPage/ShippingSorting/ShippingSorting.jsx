import s from './ShippingSorting.module.css'
import SingleFilter from './SingleFilter/SingleFilter';
import Accordion from 'react-bootstrap/Accordion';

const ShippingSorting = (props) => {   
    return (
        <div className={s.filterBlock}>
            <div className={s.filterText}>
                <div>
                    Фильтры
                </div>
                <div className={s.buttonCover}>
                    <button>
                        Очистить все
                    </button>
                </div>
            </div>
            <Accordion defaultActiveKey="0">
                <SingleFilter eventKey="0" text="Номер заказа"/>
                <SingleFilter eventKey="1" text="Тип груза"/>
                <SingleFilter eventKey="2" text="Регион"/>
                <SingleFilter eventKey="3" text="Объём груза, т"/>
                <SingleFilter eventKey="4" text="Точка загрузки"/>
                <SingleFilter eventKey="5" text="Точка выгрузки"/>
                <SingleFilter eventKey="6" text="Расстояние, км"/>
            </Accordion>
            {/* <SingleFilter text="Номер заказа"/>
            <SingleFilter text="Тип груза"/>
            <SingleFilter text="Регион"/>
            <SingleFilter text="Объём груза, т"/>
            <SingleFilter text="Точка загрузки"/>
            <SingleFilter text="Точка выгрузки"/>
            <SingleFilter text="Расстояние, км"/> */}
        </div>
    );
}

export default ShippingSorting;
