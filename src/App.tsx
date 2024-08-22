import './App.css'

import UserView from './views/UserView'
import SharedView from './views/SharedView'

function App() {
  // Get options from current url
  const url = new URL(window.location.href)
  const shared = url.searchParams.get('shared')

  return shared ? <SharedView /> : <UserView />
}

export default App
