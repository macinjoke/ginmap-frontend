import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { State } from '../reducers'

interface DispatchProps {
  hogeAction: () => void
}
interface StateProps {
  hoge: string
}
interface OwnProps {
  normalProp: string
}
type Props = DispatchProps & StateProps & OwnProps

class App extends React.Component<Props> {
  public componentDidMount() {
    const { hogeAction } = this.props
    console.log('componentdidmount')
    hogeAction()
  }

  public render() {
    return <p>hogehoge</p>
  }
}

export default connect<StateProps, DispatchProps, OwnProps, State>(
  s => s,
  actions,
)(App)
