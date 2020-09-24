import Amplify, {Auth} from 'aws-amplify';
import awsconfig from '../utils/aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
    return <Component Auth={Auth}/>
  }
  
  export default MyApp