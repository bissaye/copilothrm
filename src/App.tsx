import { Fragment, useEffect } from 'react'
import { useAuthStore, useLangStore } from './services/store'
import { Internationalisation } from './views/components/common';
import './App.css'
import { Router } from './services/routes';


function App() {
  const { lang } = useLangStore();
  const { initAuth } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <Fragment>
      <Internationalisation locale={lang}>
        <Router />
      </Internationalisation>
    </Fragment>
  )
}

export default App
