import "./Food.css"
function Pizza(props){
    return(
        <div id="container">
            <img src={props.imagAddress} style={{width:"100px",height:"100px"}}/>
            <div>
                {props.name} <br/>
                <span>{props.imformation1} <br/>
                {props.imformation2}
                </span>
                 <br/>
                {props.prices}
            </div>
        </div>
    )
}

export default Pizza;