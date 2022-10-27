import axios from 'axios'
import { useEffect } from 'react'
import Nav from './Nav'

const ViewLineups = (props) => {
  const findCreatedTeams = async () => {
    try {
      let response = await axios.get('http://localhost:3001/teams')
      console.log(response.data.team)
      props.setCreatedTeams(response.data.team)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findCreatedTeams()
  }, [])

  return (
    <>
      <Nav />
      <div className="team-display">
        {props.createdTeams.map((team) => (
          <section key={team._id}>{team.teamName}</section>
        ))}
      </div>
    </>
  )
}

export default ViewLineups
