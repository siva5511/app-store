import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="app-cont-prop">
      <img className="image-prop" src={imageUrl} alt={appName} />
      <p className="app-name-prop">{appName}</p>
    </li>
  )
}

export default AppItem
