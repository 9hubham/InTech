import React,{Component} from 'react'
import Loading from "../assessts/loading.gif"
export class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
            <img className="my-3" src={Loading} alt="loading"/>
            </div>
        )
    }
}
export default Spinner