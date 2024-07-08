function Rules() {
    return (
    <>
    <h1 className='title'>Rules</h1>
    <ul className='title' style={{listStyleType: 'none'}}>
        <li style={{margin:'8px'}}>For every correct guess you get 1 point.</li>
        <li style={{margin:'8px'}}>For every wrong guess a strike (✘) gets added, at three strikes the game ends.</li>
    </ul>
    </>
    )
  }
  
  export default Rules