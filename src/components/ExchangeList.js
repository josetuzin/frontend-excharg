import React, { Component } from 'react'
import Exchange from './Exchange'
import FullPageLoader from './FullPageLoader'


class ExchangeList extends Component {

    state = {
        precioDolar: '',
        precioEuro: '',
        precioReal: '',
        loading: false
    }

    componentDidMount() {
        this.obtenerCotizaciones()
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    obtenerCotizaciones() {
        this.setState({loading:true})
        
        setTimeout(() => {
            this.setState({loading: false})
        }, 2000)

        // fetch('http://localhost:4000/cotizaciones/dolar')
        //     .then(response => response.json())
        //     .then(json => this.setState({
        //         precioDolar: json.precio
        //     }))

        // fetch('http://localhost:4000/cotizaciones/euro')
        //     .then(response => response.json())
        //     .then(json => this.setState({
        //         precioEuro: json.precio
        //     }))

            
        // fetch('http://localhost:4000/cotizaciones/real')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             precioReal: json.precio
        //         })
        //     })
        
    }

    render() {
        const { loading } = this.state
        
        if(loading){
            return <FullPageLoader />
        }

        return (
            <div className="row mt-5">
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
