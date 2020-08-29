import React, { Component } from 'react'

class Exchange extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-12 p-2">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h5 className="moneda">{this.props.moneda}</h5>
                    </div>
                    <div className="card-body">
                        <p className="cotizacion">$ {this.props.precio}</p>
                    </div>
                    <div className="card-footer">
                        <p className="fecha">Otro dato</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exchange


