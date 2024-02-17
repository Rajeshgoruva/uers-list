import UserProfile from './components/UserProfile/index'
import './App.css'

const userdetails = [
  {
    id: 1,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rajesh',
    role: 'software developer',
  },
  {
    id: 2,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rajesh',
    role: 'software developer',
  },
  {
    id: 3,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rajesh',
    role: 'software developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="titel">Users List</h1>
    <ul>
      {userdetails.map(each => (
        <UserProfile userdetails={each} key={each.id} />
      ))}
    </ul>
  </div>
)

export default App
