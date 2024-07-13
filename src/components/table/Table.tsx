import TableRow from './TableRow';
import './Table.css'
import { useAppSelector } from '../../hooks';


const Table: React.FC = () => {
    const itemSalesData = useAppSelector((state) => state.itemSales)
    
    const rows = itemSalesData.sales.map((sale, index) => <TableRow key={sale.weekEnding + index} {...sale} /> )
    return (
        <div className='bg-light justify-content-center' >
            <table className='table'>
                <thead>
                    <tr id='row-header' >
                        <th scope='col'>WEEK ENDING</th>
                        <th scope='col'>RETAIL SALES</th>
                        <th scope='col'>WHOLESALE SALES</th>
                        <th scope='col'>UNITS SOLD</th>
                        <th scope='col'>RETAILER MARGIN</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>

        </div>
    )

}

export default Table;