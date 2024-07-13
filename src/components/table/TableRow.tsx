
import { numberToMoneyString } from "../../util";

import './TableRow.css'

const TableRow : React.FC<
{
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number 
}> = (props) => {
    return (
        <tr>
            <td>{props.weekEnding}</td>
            <td>{numberToMoneyString(props.retailSales)}</td>
            <td>{numberToMoneyString(props.wholesaleSales)}</td>
            <td>{props.unitsSold}</td>
            <td>{numberToMoneyString(props.retailerMargin)}</td>
            
        </tr>


    )
}

export default TableRow;