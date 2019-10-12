import React from "react"
import styled from "styled-components"

const StyledOverlay = styled.div`
  &.open {
    opacity: 0.6;
    display: flex;
    width: 100vw;
    height: 100vh;
    position: absolute;
    align-items: center;
    background-color: gray;
    justify-content: center;
  }

  &.closed {
    display: none;
  }
`

const StyledModal = styled.div`
  width: 600px;
  height: 400px;
`

const Modal = ({ open }) => (
  <StyledOverlay className={open ? "open" : "closed"}>
    <StyledModal>Hello! I'm a modal!</StyledModal>
  </StyledOverlay>
)

export default Modal
