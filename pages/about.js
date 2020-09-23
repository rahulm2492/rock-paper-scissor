
  import React from 'react';
  import { fetchData } from "../api";

  const App = (props) => (
    <div>
      {JSON.stringify(props)}
    </div>
  );

  
//   export async function getServerSideProps() {
//     // Does first rendering cycle through server
//     // Get data from api and return it
  
//     const limit = "?limit=50";
//     let result = await fetchData(limit);
  
//     return { props: { programs: result } };
//   }

  App.getInitialProps = async ({ req }) => {
    const limit = "?limit=50";
    let result = await fetchData(limit);
  
    return { props: { programs: result } };
  };
  
  export default App;
