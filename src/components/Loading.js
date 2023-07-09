import React from "react";
import styled from "styled-components";

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <LoadingStyle>
      <div className="loading">
        <div className="spinner"></div>
      </div>
    </LoadingStyle>
  ) : null;
};

export default Loading;

const LoadingStyle = styled.div`
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
