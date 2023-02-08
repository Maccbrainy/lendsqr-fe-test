import { QueryClient, QueryClientProvider } from 'react-query'
import { Outlet, useLocation } from 'react-router-dom'
import './App.scss'
import NavBar from './components/NavBar'
import AppNavigationSidebar from './components/AppNavigationSidebar'
import { TheLoginPage } from './pages'
// interface Props {
//   children?:ReactNode
//   // any props that come into the component
// }

function App() {
// Create a react query client
  const queryClient = new QueryClient();
  const { pathname } = useLocation()
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        {
          pathname == "/" ? (<TheLoginPage/>) :
          (
            <>
            <NavBar />
            <main>
            <section className='app-page-layout'>
              <AppNavigationSidebar />
              <div className='app-layout-main'>
                <Outlet />
              </div>
            </section>
            </main>
            <footer></footer>
            </>
          )
        }
      </div>
    </QueryClientProvider>
  )
}

export default App
