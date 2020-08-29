import React, { Component } from 'react'
import '../App.css'
import Loader from '../assests/img/ring-loader.gif'

class FullPageLoader extends Component {

    render() {
        return (
            <div className="loader-container">
                <div className="loader">
                    <img src={Loader} alt=""/>
                </div>
            </div>
        )
    }
}

export default FullPageLoader
