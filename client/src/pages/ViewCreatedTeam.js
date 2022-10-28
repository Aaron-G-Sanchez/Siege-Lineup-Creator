import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'

const ViewCreatedTeam = (props) => {
  let { id } = useParams()

  const getTeamById = async () => {
    try {
      let response = await axios.get(`http://localhost:3001/teams/${id}`)
      console.log(response.data.teamId)
      props.setTeamView(response.data.teamId)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(props.teamView)

  useEffect(() => {
    getTeamById()
  }, [])

  return (
    <>
      <Nav />
      <div className="team-view">
        {props.teamView ? (
          <>
            <h2 className="team-name-main">{props.teamView.teamName}</h2>
            <div className="team-specs">
              {props.teamView.operators.map((op, index) => (
                <div className="operator-in-team" key={index}>
                  <div>
                    <img
                      className="individual-op"
                      src={op.image}
                      alt="operator-portrait"
                    />
                  </div>
                  <div className="operator-details">
                    <h3>Operator: {op.name}</h3>
                    <p>Primary: {op.primary}</p>
                    <p>Secondary: {op.secondary}</p>
                    <p>Utility: {op.utility}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default ViewCreatedTeam
