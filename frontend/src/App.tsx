
import './App.css'
import { Button } from './components/ui/Button'
import { Plusicon } from './icons/Plusicon'

function App() {


  return (
    <>
    <Button startIcon = {<Plusicon/>} variant='primary' text='Add Content' size = "md"/>
    <Button variant='secondary' text='Share' size = "md"/>
    </>
  )
}

export default App
