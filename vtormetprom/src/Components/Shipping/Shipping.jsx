import s from './Shipping.module.css'

const Shipping = (props) => {
    return (
        <div className={s.shippingCover}>
            <div className={s.number}>
                <span>
                    {props.number}
                </span>
            </div>
            <div className={s.mainBlock}>
                <div className={s.price}>
                    <span>
                        {props.price}
                    </span>
                </div>
                <div className={s.mass}>
                    <span>
                        {props.mass}
                    </span>
                </div>
                <div className={s.type}>
                    <span>
                        {props.type}
                    </span>
                </div>
                <div className={s.distance}>
                    <span>
                        {props.distance}
                    </span>
                </div>
                <div className={s.time}>
                    <span>
                        {props.time}
                    </span>
                </div>

                <div className={s.area}>
                    <div className={s.area1}>
                        <div className={s.city1}>
                            <span>
                                {props.city1}
                            </span>
                        </div>
                        <div className={s.region1}>
                            <span>
                                {props.region1}
                            </span>
                        </div>
                    </div>
                    <div className={s.arrow}>
                        <span>
                            →
                        </span>
                    </div>
                    <div className={s.area2}>
                        <div className={s.city2}>
                            <span>
                                {props.city2}
                            </span>
                        </div>
                        <div className={s.region2}>
                            <span>
                                {props.region2}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={s.date}>
                    <span>
                        {props.date}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Shipping;
