import { useState } from "react"

export default function TwitterFollowCard({userName, name}){
  const [isFollowing, setIsFollowin] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = ()=> {
        setIsFollowin(!isFollowing)
    }

  return(
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="avatar-leonvallejos" />
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span className="tw-followCard-infoUserName">{`@${userName}`}</span>
      </div>
    </header>
    <aside>
      <button className={buttonClassName} onClick={handleClick}>{text}</button>
    </aside>
  </article>
  )
}