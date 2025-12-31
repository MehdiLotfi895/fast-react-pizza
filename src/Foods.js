import Pizza from "./Pizza.js"
import "./Foods.css"
function Foods(){
    return(
        <div id="main">
            <div className="food">
                <Pizza  name="Foaccia" imformation1="Bread with italian olive" imformation2="oil and rosemary" prices="6$" imagAddress="Screenshot 2025-11-05 071001.png"/>
                <Pizza  name=" pizza spinaci" imformation1="Tomato,mozarella,spainach," imformation2="and rictta cheese" prices="12$" imagAddress="Screenshot 2025-11-05 071017.png"/>    
                <Pizza  name=" Pizza salmino" imformation1="tomato,mozarella,and" imformation2="pepperoni" prices="solid" imagAddress="Screenshot 2025-11-05 071046.png"/>

    
            </div>
            <div className="food">
                <Pizza  name="Pizza Margherita" imformation1="Tomato and maozarella" imformation2="" prices=" 10$" imagAddress="Screenshot 2025-11-05 071037.png"/>
                <Pizza  name="Pizza Funghi" imformation1="tamto ,mozarella," imformation2="mushrooms,and onion" prices="12$" imagAddress="Screenshot 2025-11-05 071028.png"/>
                <Pizza  name="Pizza Prosciutto" imformation1="Tomato,mozarella,ham," imformation2="aragula, and burrata cheese" prices="18$" imagAddress="Screenshot 2025-11-05 071057.png"/>
    
            </div>
        </div>
    )
}

export default Foods;