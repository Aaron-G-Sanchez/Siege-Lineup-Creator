import Attack from './Attack'
import Defense from './Defense'
import Nav from './Nav'

const CreateLineup = () => {
  return (
    <>
      <Nav />
      <div className="create-lineup-main">
        <div className="side-selection">
          <Attack />
          <Defense />
        </div>
      </div>
    </>
  )
}

export default CreateLineup
