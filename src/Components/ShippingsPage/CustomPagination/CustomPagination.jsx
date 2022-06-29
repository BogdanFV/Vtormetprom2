import s from './CustomPagination.css'
import Pagination from 'react-bootstrap/Pagination'


const CustomPagination = (props) => {
    
    let paginationPages = () => {
        let pagesAmount = [];

        let paginationClicked = (event) => {
            props.shippingsNewPage((parseInt(event.target.text) - 1) * 5);
            let arr = event.target.parentNode.parentNode.children
            for (let i = 0; i < arr.length; i++) {
                arr[i].classList.remove("active")
            }
            event.target.parentNode.classList.add("active");
        } 

        let fillTheArray = () => {
            for (let i = 0; i < Math.ceil(props.amountOfElems.length / 5); i++) {
                switch (true) {
                    case (i === 0):
                        pagesAmount.push(<Pagination.Item className='active' onClick={paginationClicked}>{i + 1}</Pagination.Item>);
                        break;
                    case ((i > 0) && (i < 4)):
                        pagesAmount.push(<Pagination.Item onClick={paginationClicked}>{i + 1}</Pagination.Item>);
                        break;
                    case (i === Math.ceil(props.amountOfElems.length / 5) - 1):
                        pagesAmount.push(<Pagination.Ellipsis />);
                        pagesAmount.push(<Pagination.Item onClick={paginationClicked}>{Math.ceil(props.amountOfElems.length / 5)}</Pagination.Item>);
                        break;
                    default:
                        break;
                }
            }

        }

        fillTheArray();
        return pagesAmount;
    }


    return (
        <div className="paginationBlock">
            <Pagination >
                <Pagination.First />
                <Pagination.Prev />

                {paginationPages()}

                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
}
export default CustomPagination;

