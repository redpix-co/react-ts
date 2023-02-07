import * as React from 'react';
import './style.css';

export default function App() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    console.log('useEffect');
    setData('Welcome');
  })

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })
  return (
    <div>
      <h1>{data}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
