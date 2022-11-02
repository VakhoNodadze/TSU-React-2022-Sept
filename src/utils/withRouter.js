// @ts-nocheck
import { useNavigate } from "react-router-dom";

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const redirect = useNavigate();

    return <Component redirect={redirect} {...props} />;
  };

  return Wrapper;
};

export default withRouter;

// This is called HOC - Higher Order Component
