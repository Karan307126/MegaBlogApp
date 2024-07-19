import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication) {
      if (authStatus !== true) {
        navigate("/login");
      }
    } else {
      if (authStatus === true) {
        navigate("/");
      }
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;

Protected.propTypes = {
  children: PropTypes.node.isRequired,
  authentication: PropTypes.bool,
};
