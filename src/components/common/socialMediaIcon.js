import './socialMediaIcon.css'
import { MDBView } from "mdbreact";

const SocialMediaIcon = (props) => {
    const { url, icon } = props;
    return (
        <div className="icon">
            <a target='_blank noreferrer'
                href={url}>
                <MDBView hover zoom>
                    <img src={icon}
                        alt=""
                        className="icon-header ml-3">
                    </img>
                </MDBView>
            </a>
        </div>
    );
}

export default SocialMediaIcon;