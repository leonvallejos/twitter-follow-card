import './App.css'

export default function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/leonvallejos" alt="avatar-leonvallejos" />
        <div className='tw-followCard-info'>
          <strong>Leon Vallejos</strong>
          <span tw-followCard-infoUserName>@leonvallejos</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  )

}

