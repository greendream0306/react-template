import PropTypes from "prop-types";
import { Link as RouterLink } from 'react-router-dom';
import logo from "../assets/images/icon.png";
import "../assets/css/logo.css";

Logo.propTypes = {
    disabledLink: PropTypes.bool,
    sx: PropTypes.object,
};

export default function Logo({disabledLink = false, sx}) {
    if(disabledLink) {
        return <><img src={logo} className="logo" alt="logo"/></>
    }
    return <RouterLink to="/"><img src={logo} className="logo" alt="logo"/></RouterLink>
}