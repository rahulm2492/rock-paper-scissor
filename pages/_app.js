import Amplify, {Auth} from 'aws-amplify';
import awsconfig from 'ssr-react/utils/aws-exports.js';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
    console.log('testing', Component, pageProps);
    return <Component Auth={Auth}/>
  }
  
  export default MyApp