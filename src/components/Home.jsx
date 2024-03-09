import './Home.css'
import ClickAndScramble from './ClickAndScramble'

function Home() {
    return (
    <>
    <div className="home-flex">
      <h2 className='title'>Guess the real deal?!</h2>
      <ClickAndScramble />
    </div>
    </>
    )
  }
  
  export default Home