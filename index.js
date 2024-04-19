const Button = props => {
  const {className, text} = props
  return <button className={`button ${className}`}>{text}</button>
}

const element = (
  <div className='bg-container'>
    <div>
      <h1 className='heading'>Social Buttons</h1>
      <Button text='Like' className='btn1' />
      <Button text='Comment' className='btn2' />
      <Button text='Share' className='btn3' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
