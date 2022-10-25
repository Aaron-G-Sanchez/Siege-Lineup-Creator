const SaveTeam = (props) => {

  let button
  
  props.teamName ? button = <button type="submit">Save Team</button>: 
  button = <button type="submit" disabled>Save Team</button>

  return (
    
    <>
    <div className="save-team-form">
      <form onSubmit={props.handleSubmit}>
        <input 
        type="text" 
        value={props.teamName} 
        placeholder="Team Name" 
        onChange={props.handleChange}
        />
        {button}
      </form>
    </div>
    </>
  )
}

export default SaveTeam