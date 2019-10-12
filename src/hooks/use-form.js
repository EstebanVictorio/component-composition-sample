import React, { useState } from "react"
import NameForm from "components/name-form"
import PetForm from "components/pet-form"
import GameForm from "components/game-form"
import styled from "styled-components"

const StyledFormSelector = styled.div`
  display: flex;
  flex-direction: column;
`

const FormSelector = ({ setForm }) => (
  <StyledFormSelector>
    <label>
      <span>Name form</span>
      <input name="form" type="radio" onChange={() => setForm("name")} />
    </label>
    <label>
      <span>Pet form</span>
      <input name="form" type="radio" onChange={() => setForm("pet")} />
    </label>
    <label>
      <span>Game form</span>
      <input name="form" type="radio" onChange={() => setForm("game")} />
    </label>
  </StyledFormSelector>
)

const useForm = selectedForm => {
  const [form, setForm] = useState(selectedForm)
  const forms = {
    name: <NameForm />,
    pet: <PetForm />,
    game: <GameForm />
  }

  const chosenForm = forms[form]

  return [chosenForm, <FormSelector setForm={setForm} />]
}

export default useForm
