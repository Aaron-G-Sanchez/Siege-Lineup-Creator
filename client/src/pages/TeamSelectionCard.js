const TeamSelectionCard = (props) => {
  return (
    <>
      <div className="selection-card" onClick={props.onClick}>
        {props.op ? <h2>{props.op.name}</h2> : null}
      </div>
    </>
  )
}

export default TeamSelectionCard
