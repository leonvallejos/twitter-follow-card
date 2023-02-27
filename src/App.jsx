import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

export default function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName={'leonvallejos'} name="Leon Vallejos"/>
      <TwitterFollowCard userName={'devteam'} name="Developers team"/>
    </section>
  )

}

