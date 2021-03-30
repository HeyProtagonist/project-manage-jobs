import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardLayout from '../Components/Layouts/DashboardLayout'
import MyTaskLayout from '../Components/Layouts/MyTaskLayout'

const routesList = [
  { id: 0, key: '/', value: DashboardLayout },
  { id: 1, key: '/myTask', value: MyTaskLayout },
  // { key: '/message', value: Message },
  // { key: '/notification', value: Notification },
  // { key: '/statistics', value: Statistics },
  // { key: '/myFile', value: MyFile },
]

const RoutesRoot = () => (
  <>
    {routesList.map(({ id, key, value }) => (
      <Switch key={id + 'switch'}>
        {key === '/' ? (
          <Route exact path={key} component={value} key={id} />
        ) : (
          <Route path={key} component={value} key={id} />
        )}
      </Switch>
    ))}
  </>
)

export default RoutesRoot
