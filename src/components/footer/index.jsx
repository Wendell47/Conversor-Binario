import { Content } from "./styles";

import { Github, Linkedin} from "../SocialIcon";
export default function Footer(){
    const getCurrentDate = () => {

        var year = new Date().getFullYear();

        return year;
    }

    return(
        <Content>
            <p> create by Wendel   - {getCurrentDate()} </p>
            <div>
                <a href="https://www.linkedin.com/in/wendel-ara%C3%BAjo-731539248/" target="_blank" rel="noreferrer">
                    <Linkedin/>
                </a>
                <a href="https://github.com/Wendell47" target="_blank" rel="noreferrer">
                    <Github/>
                </a>
            </div>
        </Content>
    )
}