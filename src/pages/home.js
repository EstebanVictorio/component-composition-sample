import React from "react"
import styled from "styled-components"
import Foods from "components/foods"
import useForm from "hooks/use-form"

const StyledHome = styled.main`
  background-color: red;
`

const Home = ({ foods }) => {
  const [form, formSelector] = useForm("name")
  return (
    <StyledHome>
      {formSelector}
      {form}
    </StyledHome>
  )
}

export default Home
