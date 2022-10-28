import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

const ViewLineups = (props) => {
  let navigate = useNavigate()

  const findCreatedTeams = async () => {
    try {
      let response = await axios.get('http://localhost:3001/teams')
      console.log(response.data.team)
      props.setCreatedTeams(response.data.team)
    } catch (err) {
      console.log(err)
    }
  }

  const getTeamId = (id) => {
    navigate(`${/view-lineups/}${id}`)
  }

  useEffect(() => {
    findCreatedTeams()
  }, [])

  return (
    <>
      <Nav />
      <section className="team-display">
        {props.createdTeams.map((team) => (
          <div
            className="team-card"
            key={team._id}
            onClick={() => getTeamId(team._id)}
          >
            <p className="team-name">{team.teamName}</p>
            <div className="team-wrapper">
              {team.operators.map((op) => (
                <div className="op-display">
                  <p>{op.name}</p>
                  <img
                    className="team-portrait"
                    src={op.image}
                    atl="operator-portrait"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default ViewLineups
