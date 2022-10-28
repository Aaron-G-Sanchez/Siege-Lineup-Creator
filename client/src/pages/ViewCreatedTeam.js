import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ViewCreatedTeam = () => {
  let { id } = useParams()

  const getTeamById = async () => {
    try {
      let response = await axios.get(`http://localhost:3001/teams/${id}`)
      console.log(response.data.teamId)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTeamById()
  }, [])

  return (
    <>
      <div>Hello</div>
      <p>{id}</p>
    </>
  )
}

export default ViewCreatedTeam
