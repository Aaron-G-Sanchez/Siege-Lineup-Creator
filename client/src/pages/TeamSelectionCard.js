import DeleteTeamMember from '../components/DeleteTeamMember'
import axios from 'axios'

const TeamSelectionCard = (props) => {
  return (
    <>
      <div className="selection-options">
        <div className="selection-card" onClick={props.onClick}>
          {props.op ? (
            <div className="created-op-info">
              <h2>{props.op.name}</h2>
              <p>{props.op._id}</p>
            </div>
          ) : null}
        </div>
        {props.op ? <DeleteTeamMember id={props.op._id} /> : null}
      </div>
    </>
  )
}

export default TeamSelectionCard
