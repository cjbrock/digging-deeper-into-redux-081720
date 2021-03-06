import React from 'react';
import { connect} from 'react-redux'

const Navbar = (props) => {
  return (
    <h1>Do all the things - {props.todoLength} </h1>
  )
}

const mapStateToProps = state => {
  return {
    todoLength: state.length
  }
}


export default connect(mapStateToProps)(Navbar)