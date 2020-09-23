import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
    console.log('testing', Component, pageProps);
    return <Component Auth={Auth}/>
  }
  
  export default MyApp