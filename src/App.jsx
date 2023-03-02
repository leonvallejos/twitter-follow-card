import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

export default function App() {
  return (
    <section className='App'>
      <TwitterFollowCard 
      isFollowing={true} 
      userName={'macstation'} 
      name="macstation"
      />

      <TwitterFollowCard
       isFollowing={true}
        userName={'elonmusk'}
        name="elon"
      />

      <TwitterFollowCard
       isFollowing={true}
       userName={'utn'}
       name="UTN San Rafael"
      />

      <TwitterFollowCard 
       isFollowing={false}
       userName={'devteam'}
       name="Developers team"
      />

      <TwitterFollowCard
       isFollowing={true}
       userName={'uba'}
       name="UBA CBC"
      />

      <TwitterFollowCard 
       isFollowing={false}
       userName={'react'}
       name="React"
      />

      <TwitterFollowCard
       isFollowing={true}
       userName={'laravel'}
        name="Laravel"
      />

      <TwitterFollowCard
       isFollowing={false}
       userName={'ubuntu'}
       name="Ubuntu"
      />

<TwitterFollowCard
       isFollowing={false}
       userName={'xd'}
       name="Ubuxdntu"
      />


    </section>
  )

}

