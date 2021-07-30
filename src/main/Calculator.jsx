import React, {Component} from 'react'
import './Calculator.css'
 
// import button
import Button from '../components/buttom/Button'

//import Display
import Display from '../components/display/Display'




const initialState = {
    displayValue:'0',
    clearDisplay:false,
    operation: null,
    values:[0,0],
    current:0
}
export default class extends Component {
    state = { ...initialState }
    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.addOperetion = this.addOperetion.bind(this)
    }
    clearMemory(){
      this.setState({...initialState})
    }
    addOperetion(operation){
        if(this.state.current === 0)
            this.setState({operation, current:1, clearDisplay:true})
        else{
            const equal = operation === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            // if(equal)
            //     values[0] = this.state.values[0]
            if(equal ){

                try {
                    // switch(operation){
                    //     case '*':
                    //         values[0] =( values[0] * values[1])
                    //         console.log(values[0])
                    //         break;
                    //     case '/':
                    //         values[0] = values[0] / values[1]
                    //         console.log(values[0])
                    //         break;
                    //     case '-': 
                    //         values[0] = (values[0] - values[1]).toFixed
                    //         console.log(values[0])
                    //         break;
                    //     case '+':
                    //         values[0] = values[0] + values[1]
                    //         console.log(values[0])
                    //         break;
                    // }
                    values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                        if(values[0].toString().includes('.'))
                            values[0] = values[0].toFixed(2)
                        
                } catch (error) {
                 values[0] = this.state.values[0]
                 console.log('error')
                   
                }

            }else{
                try {
                    values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                    if(values[0].toString().includes('.'))
                        values[0] = values[0].toFixed(2)
                } catch (error) {
                    values[0] = this.state.values[0]
                 console.log('error')
                }
            }
           
           values[0] = values[0].toString().substr(0,5)
           values[1]= 0
            this.setState({
                displayValue: values[0] , 
                operation: equal ? null : operation,
                current: equal ? 0 : 1,
                clearDisplay:!equal,
                values
            })

        }
       
    }
    addDigit(digit){
        const values = [...this.state.values]
        let t = 1
        console.log(t)
          if(digit === '.' && this.state.displayValue.includes('.')){
                return alert('use o "." so uma vez')       
            }
     


        const clearDisplay = 
            this.state.displayValue === "0"
            || this.state.clearDisplay 
            
       
        const currentValue = clearDisplay ?'':this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({ displayValue, clearDisplay:false } )


        if(digit != ".")
            {
                const indice = this.state.current;
                const newValue = parseFloat(displayValue)
                const values = [...this.state.values]
                values[indice] =newValue
                this.setState({values})
            }

        
        
    }
   

    render(){
        
        
        return (

            <div className='calculator' >
                <Display values={this.state.displayValue}/>
                <Button lebal='A/C'click={this.clearMemory} triple/>
                <Button lebal='/' click={this.addOperetion} opera/>
                <Button lebal="9" click={this.addDigit}/>
                <Button lebal='8' click={this.addDigit}/>
                <Button lebal='7' click={this.addDigit}/>
                <Button lebal="*" click={this.addOperetion} opera/>
                <Button lebal='6' click={this.addDigit}/>
                <Button lebal='5' click={this.addDigit}/>
                <Button lebal='4' click={this.addDigit}/>
                <Button lebal='-' click={this.addOperetion} opera/>
                <Button lebal='3' click={this.addDigit}/>
                <Button lebal='2' click={this.addDigit}/>
                <Button lebal='1' click={this.addDigit}/>
                <Button lebal='+' click={this.addOperetion} opera/>
                <Button lebal='0' click={this.addDigit} douplo/>
                <Button lebal='.' click={this.addDigit}/>
                <Button lebal='=' click={this.addOperetion} opera/>
            </div>

        )
    }

}