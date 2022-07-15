import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
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

export default SalesCard