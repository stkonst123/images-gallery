import React from "react"
import { Jumbotron, Button } from "react-bootstrap"

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>Simple app to get photo using Unsplach API. In onrder to start enter any search term in search field.</p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  )
}

export default Welcome
