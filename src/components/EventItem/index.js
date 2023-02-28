// Write your code here
import './index.css'

const EventItem = props => {
  const {each, statusFunction} = props
  const {id, imageUrl, name, location} = each
  const onclickFunction = () => {
    statusFunction(id)
  }
  return (
    <li className="card">
      <button type="button" onClick={onclickFunction}>
        <img src={imageUrl} alt="event" />
      </button>

      <p className="kk">{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
