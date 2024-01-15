import React, { useState } from "react"
import './getInTouch.css'
import { Form, FormControl } from "react-bootstrap"

const GetInTouch = ({ isMobile }) => {

  return (
    <div className="m-auto">
      <div className={`mt-4 ${!isMobile ? 'width-50' : ''}`}>
        <h4 className="text-success bold text-center">
          Your Connection To My Inbox
        </h4>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted">Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text-muted">Message</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch