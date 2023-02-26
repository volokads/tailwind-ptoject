import { Children } from "react";

export default function Message(){
    return(
        <div>
            <div>
                <img/>
                <h2></h2>
            </div>
            <div>
                <p>Description</p>
            </div>
            {children}
        </div>
    )
}