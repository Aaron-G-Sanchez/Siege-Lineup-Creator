import DeleteTeamMember from '../components/DeleteTeamMember'

const TeamSelectionCard = (props) => {
  return (
    <>
      <div className="selection-card" onClick={props.onClick}>
        {props.op ? (
          <div className="created-op-info">
            <h2>{props.op.name}</h2>
            <p>{props.op._id}</p>
            {<DeleteTeamMember />}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default TeamSelectionCard
