import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const portalElement = document.getElementById('overlays');

function Backdrop({ onClose }) {
  return <BackdropStyle onClick={onClose} />;
}

export default function Modal({ onClose, children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div>{children}</div>
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
}

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 15vh;
  width: 40rem;
  left: calc(50% - 20rem);
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;

  @media (max-width: 768px) {
    left: 5%;
    width: 85%;
  }

  @media (max-width: 320px) {
    width: 80%;
  }
`;
