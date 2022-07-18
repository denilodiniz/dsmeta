import NotificationButton from '../NotificationButton';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requet';
import { Sale } from '../../models/sale';

function SalesCard() {

    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`).then(response => { setSales(response.data.content) });
    }, []);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="dsmeta-show-id">ID</th>
                            <th className="dsmeta-show-date">Data</th>
                            <th>Vendedor</th>
                            <th className="dsmeta-show-visitas">Visitas</th>
                            <th className="dsmeta-show-vendas">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="dsmeta-show-id">{sale.id}</td>
                                    <td className="dsmeta-show-date">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="dsmeta-show-visitas">{sale.visited}</td>
                                    <td className="dsmeta-show-vendas">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="dsmeta-notification-btn-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard;