import { Content } from "./styles"
import {LuSearch} from "react-icons/lu"


export default function Input({placeholder, onChange, onClick,value, ...rest}){
    return(
        <Content>
            <input type="number"
            placeholder={placeholder}
            onChange={onChange}
            min="0"
            value={value}
            {...rest}
            />
            <button
            onClick={onClick}
            ><LuSearch/></button>
        </Content>
    )
}