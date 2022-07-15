import NotificationButton from '../NotificationButton';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { useState } from 'react';

function SalesCard() {

    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

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
                        <tr>
                            <td className="dsmeta-show-id">#341</td>
                            <td className="dsmeta-show-date">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="dsmeta-show-visitas">15</td>
                            <td className="dsmeta-show-vendas">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="dsmeta-notification-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-show-id">#341</td>
                            <td className="dsmeta-show-date">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="dsmeta-show-visitas">15</td>
                            <td className="dsmeta-show-vendas">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="dsmeta-notification-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-show-id">#341</td>
                            <td className="dsmeta-show-date">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="dsmeta-show-visitas">15</td>
                            <td className="dsmeta-show-vendas">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="dsmeta-notification-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard;