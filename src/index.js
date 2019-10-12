import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import Home from "pages/home"
import About from "pages/about"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  html, body{
    margin:0;
    padding: 0;
  }
`

const container = document.querySelector("#root")

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <About
      foods={[
        {
          name: "apple juice",
          defaultUnit: "kg"
        },
        {
          name: "orange juice",
          defaultUnit: "lt",
          units: ["lt"]
        },
        {
          name: "cake",
          defaultUnit: "kg",
          units: ["kg", "slice", "size"]
        }
      ]}
    />
  </Fragment>,
  container
)
