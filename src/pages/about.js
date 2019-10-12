import React from "react"
import styled from "styled-components"
import Foods from "components/foods"
import Modal from "components/modal"
import useForm from "hooks/use-form"

const StyledAbout = styled.main`
  background-color: blue;
  color: whitesmoke;
`

const About = ({ foods }) => {
  const [form, formSelector] = useForm("name")
  return (
    <StyledAbout>
      <Modal open={false} />
      <Foods foods={foods} />
      {formSelector}
      {form}
    </StyledAbout>
  )
}

export default About
