import React from 'react';

const GameSearch = props => {

  let centerForm = "small-12 medium-8 medium-offset-2 large-4 large-offset-4 columns"

  return (
    <div className="row auth">
      <form className={centerForm}>
        <label htmlFor="firstname">First Name:</label><br />
        <input type="text" name="firstname" onChange ={props.handleFirstName}/><br />

        <label htmlFor="lastname">Last Name:</label><br />
        <input type="text" name="lastname" onChange={props.handleLastName}/><br />

        <input className="inline text-center button" type="submit" value="Search" onClick={props.handleSubmit}/>
        <p className="inline error">{props.error}</p>
      </form>
    </div>
  )

}

export default GameSearch;
