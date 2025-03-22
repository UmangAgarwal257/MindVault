
import './App.css'
import { Button } from './components/ui/Button'
import { Plusicon } from './icons/Plusicon'
import { Shareicon } from './icons/Shareicon'

function App() {


  return (
    <>
    <Button 
    startIcon = {<Plusicon size = "lg"/>} 
    variant='primary' 
    text='Add Content' 
    size = "lg" 
    endIcon = {<Shareicon size = "lg" />}
    />

    <Button 
    startIcon = {<Plusicon size = "md"/>} 
    variant='secondary' 
    text='Share' 
    size = "md" 
    endIcon = {<Shareicon size = "md" />} 
    />

    <Button 
    startIcon = {<Plusicon size = "sm"/>} 
    variant='secondary' 
    text='Share' 
    size = "sm" 
    endIcon = {<Shareicon size = "sm" />} 
    />
    </>
  )
}

export default App

