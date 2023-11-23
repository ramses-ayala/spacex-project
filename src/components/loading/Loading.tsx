const Loading = () => {
  return (
    <div className="d-flex flex-column align-items-center text-white" style={{height: '78vh'}}>
        <div className="spinner-border" role="status" aria-hidden="true" style={{height: '5rem', width: '5rem'}}></div>
        <strong>Loading...</strong>
    </div>
  )
}

export default Loading;