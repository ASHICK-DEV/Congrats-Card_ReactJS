const element = (
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='img'
      />
      <p className='name'>Kiran V</p>
      <p className='institute'>
        Vishnu Institute of Computer & Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
