function Preloader({ preloaderRunning }) {

  return (
    preloaderRunning ?
      <div className='preloader__section'>
        <i className='preloader__circle'></i>
        <p className="preloader__text">Идет поиск новостей...</p>
      </div>
    : null
  )
}
export default Preloader;