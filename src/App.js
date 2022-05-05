import Title from './components/Title'
import Setup from './examples/4-global-instance'
import './axios/global' //  instantly invoked

function App() {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  )
}

export default App
