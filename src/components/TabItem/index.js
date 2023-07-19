import './index.css'

const TabItem = props => {
  const {each, onTabClick, activeTabId} = props
  const {tabId, displayText} = each

  const ontabClick = () => {
    onTabClick(tabId)
  }
  const k = tabId === activeTabId ? 'active-button' : 'button-prop'
  return (
    <li className={k} id={tabId} onClick={ontabClick}>
      <button className={k} id={tabId} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
