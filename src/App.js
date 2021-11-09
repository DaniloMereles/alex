import './App.css'
import { Context } from './context/Context'
import { Routes } from './routes/Routes'

export const App = () => {
  return (
    <Context>
      <Routes />
    </Context>
  )
}
