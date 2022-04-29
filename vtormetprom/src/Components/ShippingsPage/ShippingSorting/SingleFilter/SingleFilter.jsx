import s from './SingleFilter.module.css'
import Accordion from 'react-bootstrap/Accordion';


const SingleFilter = (props) => {   


    return (
        <Accordion.Item  className={s.singleFilter} eventKey={props.eventKey}>
            <Accordion.Header className={s.filterName}>{props.text}</Accordion.Header>
            <Accordion.Body className={s.filterBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default SingleFilter;
