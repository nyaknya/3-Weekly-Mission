import styled from "styled-components";

const ModalBackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.4;
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;

const ModalBackground = () => {
  return <ModalBackgroundOverlay />;
};

export default ModalBackground;
