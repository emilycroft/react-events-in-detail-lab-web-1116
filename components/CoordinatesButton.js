import React from 'react'

class CoordinatesButton extends React.Component {
  handleClick(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

module.exports = CoordinatesButton
