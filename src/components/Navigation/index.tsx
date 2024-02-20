import React, { startTransition, useEffect } from "react";
import styles from "./navigation.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

interface NavigationProps {
  start: string;
}

const Navigation: React.FC<NavigationProps> = ({ start }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = () => {
    return location.pathname !== start;  
  }

  const canGoForward = () => {
    return location.pathname === start;
  }

  const goBack = () => {
    if (location.pathname !== start) {
      startTransition(() => {
        navigate(-1);
      });
    }
  };

  const goForward = () => {
    startTransition(() => {
      navigate(1);
    });
  };

  return (
    <div className={styles.navigationContainer}>
      
        {
          canGoBack() ? 
          (
          <div onClick={goBack}>
            <HiArrowCircleLeft size={30} color="rgb(25 39 53 / 1" /> Back
          </div>
          ) : (
            <React.Fragment></React.Fragment>
          )
        }

      {/* <div>
        {
          canGoForward() ? 
          (
          <div>
            Forward <HiArrowCircleRight size={30} color="rgb(25 39 53 / 1" onClick={goForward} />
          </div>
          ) : (
            <React.Fragment></React.Fragment>
          )
        }
      </div> */}
    </div>
  );
};

export default Navigation;
