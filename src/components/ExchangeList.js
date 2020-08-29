import React, { Component } from 'react'
import Exchange from './Exchange'

class ExchangeList extends Component {

    state = {
        precioDolar: '',
        precioEuro: '',
        precioReal: '',
    }

    componentDidMount() {
        this.obtenerCotizaciones()
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    obtenerCotizaciones() {
        fetch('http://localhost:4000/cotizaciones/dolar')
            .then(response => response.json())
            .then(json => this.setState({
                precioDolar: json.precio
            }))

        fetch('http://localhost:4000/cotizaciones/euro')
            .then(response => response.json())
            .then(json => this.setState({
                precioEuro: json.precio
            }))

            
        fetch('http://localhost:4000/cotizaciones/real')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    precioReal: json.precio
                })
            })
    }

    render() {
        return (
            <div className="row mt-5">
                <h1>{this.state.t}</h1>
                <Exchange 
                    moneda="Dólar"
                    precio={this.state.precioDolar}
                />
                <Exchange 
                    moneda="Euro"
                    precio={this.state.precioEuro}
                />
                <Exchange 
                    moneda="Real"
                    precio={this.state.precioReal}
                />
            </div>
        )
    }
}

export default ExchangeList
