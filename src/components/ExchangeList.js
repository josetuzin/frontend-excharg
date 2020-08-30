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
        this.timerID = setInterval(
            () => this.obtenerCotizaciones(),
            5000
          );
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    obtenerCotizaciones() {
        this.setState({loading:true})
    
        const _this = this
        Promise.all([
            fetch('https://api-excharg.herokuapp.com/cotizaciones/dolar'),
            fetch('https://api-excharg.herokuapp.com/cotizaciones/euro'),
            fetch('https://api-excharg.herokuapp.com/cotizaciones/real'),
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            _this.setState({
                precioDolar: data[0].precio,
                precioEuro: data[1].precio,
                precioReal: data[2].precio,
                loading: false
            })
            
        }).catch(function (error) {
            console.log(error);
            _this.setState({loading:false})
        });
        
    }

    render() {
        const { loading } = this.state

        return (
            <div className="row mt-5">
                
                { loading && <FullPageLoader /> }
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
