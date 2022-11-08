import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css'

import Amplify, { AuthModeStrategyType } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react' 
import awsconfig from '../src/aws-exports'

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})

function MyApp ({ Component, pageProps }) {
  return (<AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  )
}

export default MyApp
