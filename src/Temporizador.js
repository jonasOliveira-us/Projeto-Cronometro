import React, { Component } from 'react'

export default class Temporizador extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            name: 'Temporizador',
            horas : 0,
            minutos: 0,
            segundos: 0,
            stop: true,
            nameStop: "Iniciar"
        }        
    }

    decrementarMinuto(state) 
    {
      this.setState(() => { 
        return {
          minutos: state.minutos - 1 
        }
      })
    }

    decrementarHora(state) 
    {
      this.setState(() => { 
        return {
          horas: state.horas - 1 
        }
      })
    }

    timeLessThanZero()
    {
        alert('O tempo não pode ser inferior ou igual a zero!')
        this.setState({
            stop: true
        })
    }

    timeLose()
    {
        alert('Acabou o tempo!')
        this.setState({
            stop: true
        })
    }

    start()
    {
        if (this.state.stop === false){
            this.setState(function (state, props) {

                if(this.state.horas < 0 || this.state.minutos < 0 || this.state.segundos < 0)
                {
                    return (
                        this.timeLessThanZero()
                    )
                }

                if(this.state.horas == 0 && this.state.minutos == 0 && this.state.segundos == 0) 
                {
                    return (
                        this.timeLose()
                    )
                }

                if (state.segundos == 0)
                {
                    this.setState({ 
                        segundos: 59,
                    })
                    this.decrementarMinuto(state);

                    if(state.minutos == 0)
                    {
                        this.setState({ 
                            minutos: 59,
                        })
                        this.decrementarHora(state)
                    } 
                }                     
                
                return({ 
                    segundos: state.segundos - 1
                })
                
            })
        }
    }

    alterarHoras = (event) => {
        this.setState({
            horas: event.target.value
        })
    }

    alterarMinutos = (event) => {
        this.setState({
            minutos: event.target.value
        })
    }
  
    alterarSegundos = (event) => {
        this.setState({
            segundos: event.target.value
        })
    }

    componentDidMount() 
    {
      this.timer = setInterval(() => this.start(), 1000)
    }

    handleSubmit = (e) => {
        this.setState({
            stop: !this.state.stop
        })

        if (this.state.stop)
        {
            this.setState({ 
                nameStop: "Parar"
            })
        }
        else
        {
            this.setState({ 
                nameStop: "Iniciar"
            })
        } 
        
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <form  onSubmit={this.handleSubmit}>
                <h5>Informe o tempo :</h5>
                <p><input className="input-number" type="number" name="horas" placeholder="horas" onChange={this.alterarHoras} /></p>
                    <p><input className="input-number" type="number" name="minutos" placeholder="min" onChange={this.alterarMinutos} /></p>
                    <p> <input className="input-number" type="number" name="segundos" placeholder="Seg" onChange={this.alterarSegundos} /></p>
                    <button type="submit" className="btn-temp">{this.state.nameStop}</button>
                    <h1>{this.state.horas}h:{this.state.minutos}m:{this.state.segundos}s</h1>
                </form>
            </div>
        )   
    }
}

