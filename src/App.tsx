import { Fragment, useEffect } from 'react'
import { useAuthStore, useLangStore, useSpinnerStore } from './services/store'
import { Internationalisation } from './views/components/common';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Router } from './services/routes';
import { Spinner } from './views/components/ui';


function App() {
  const { lang } = useLangStore();
  const { initAuth } = useAuthStore();
  const {loading} = useSpinnerStore();

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <Fragment>
      <Internationalisation locale={lang}>
        <Router />
        <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
         />

        {loading && <Spinner />}
      </Internationalisation>
    </Fragment>
  )
}

export default App
