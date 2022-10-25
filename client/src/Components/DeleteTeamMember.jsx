import axios from "axios"

const DeleteTeamMember = (props) => {

const handleClick = async () => {
      let id = props.id
      try {
        await axios.delete(`http://localhost:3001/teamMembers/delete/${id}`)
      } catch (err) {
        console.log(err)
      }
    } 

  return (
    <>
    <div>
      <button onClick={handleClick}>X</button>
    </div>
    </>
  )
}

export default DeleteTeamMember