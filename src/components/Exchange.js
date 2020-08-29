import React, { Component } from 'react'

// import usaFlag from '../assests/img/br-flag'
// import brFlag from '../assests/img/br-flag'
// import brFlag from '../assests/img/br-flag'

class Exchange extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-12 p-2">
                <div className="card text-center">
                    <div className="card-header d-flex justify-content-center">
                        <h5 className="moneda">{this.props.moneda}</h5>
                    </div>
                    <div className="card-body">
                        <p className="cotizacion">$ {this.props.precio}</p>
                    </div>
                    <div className="card-footer">
                        <p className="p-2 emoji">{this.props.emoji}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exchange


