import React, { Component } from 'react'
import './App.css'

export default class Relogio extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            stop: false,
            nameStop: "Stop",
            parcial: "",
            relogio: "",
            name: "Relógio",
            value: "America/Sao_Paulo"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    relogio()
    {
        var moment = require('moment-timezone')
        let localTime1 = moment().tz(this.state.value).format("HH").toString()
        let localTime2 = moment().tz(this.state.value).format("mm").toString()
        let localTime3 = moment().tz(this.state.value).format("ss").toString()
        this.setState({
            horas: localTime1,
            minutos: localTime2,
            segundos: localTime3
        })
    }

    componentDidMount() 
    {
        this.timer = setInterval( () => this.relogio(), 1000)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render()
    {
        return (

            <div>
                <h2>{this.state.name}</h2>
                <form>
                    <h5>Selecione o fuso horário:</h5>
                    <select className="select-timezone" value={this.state.value} onChange={this.handleChange}>
                        <option value="America/New_York">Nova Iorque</option>
                        <option value="America/Sao_Paulo">São Paulo</option>
                        <option value="Europe/Madrid">Barcelona</option>
                        <option value="Asia/Hong_Kong">Hong Kong</option>
                        <option value="America/Toronto">Toronto</option>
                        <option value="Asia/Tokyo">Tóquio</option>
                        <option value="Europe/Moscow">Moscow</option>
                        <option value="Asia/Dubai">Dubai</option>
                        <option value="America/Bogota">Bogota</option>
                        <option value="Europe/Berlin">Berlim</option>
                        <option value="Australia/Sydney">Sydney</option>
                        <option value="America/Argentina/Buenos_Aires">Buenos Aires</option>
                        <option value="Europe/Brussels">Bruxelas</option>
                        <option value="Asia/Baghdad">Bagdá</option>
                        <option value="Europe/Rome">Roma</option>
                        <option value="Asia/Shanghai">Xangai</option>
                        <option value="Europe/Istanbul">Istambul</option>
                    </select>
                </form>

                <h1>{this.state.horas}h:{this.state.minutos}m:{this.state.segundos}s</h1>
            </div>
        )
    }
}
