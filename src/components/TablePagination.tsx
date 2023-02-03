import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function TablePagination(){
    return(
        <div className="table-pagination">
            <div className="pagination-size">
                <div>Showing</div>
                    <select title="pagination range" className="pagination-select">
                        <option>100</option>
                    </select>
                <div>out of 100</div>
            </div>
            <div className="pagination-pages">
                <span className="pagination-icon"><MdNavigateBefore fontSize={25}/>
                </span>
                
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <span>...</span>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <span className="pagination-icon"><MdNavigateNext fontSize={25}/>
                </span>
            </div>
        </div>
    )
}