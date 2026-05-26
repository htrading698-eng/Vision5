import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, color: 'white', background: '#05010a', minHeight: '100vh' }}>
          <h1>Erreur App.jsx</h1>
          <pre>{String(this.state.error)}</pre>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
