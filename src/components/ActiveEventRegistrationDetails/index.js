// Write your code here
import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  registered = () => (
    <div className="display">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="right"
      />
      <h1 className="para">You have already Registered for the event</h1>
    </div>
  )

  yetToRegistered = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-started"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="btn-primary" type="button">
        Register Here
      </button>
    </>
  )

  closedRegistration = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-started"
      />
      <h1 className="para">Registrations are closed now!</h1>
      <p className="intial">Stay tuned. We will reopen the registrations!</p>
    </>
  )

  intial = () => (
    <div className="cards">
      <p className="intial">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderDetails = () => {
    const {display} = this.props
    switch (display) {
      case 'REGISTERED':
        return this.registered()
      case 'YET_TO_REGISTER':
        return this.yetToRegistered()
      case 'REGISTRATIONS_CLOSED':
        return this.closedRegistration()
      default:
        return this.intial()
    }
  }

  render() {
    return <div>{this.renderDetails()}</div>
  }
}

export default ActiveEventRegistrationDetails
