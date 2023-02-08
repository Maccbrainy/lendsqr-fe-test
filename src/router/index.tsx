import { createBrowserRouter, redirect } from 'react-router-dom'
import App from '../App';
import { UserDetailsDocuments, UserDetailsGeneralDetails } from '../components/user-details'
import { TheDashboardPage, TheLoginPage, TheUsersPage } from '../pages';
import { UserDetails } from '../subpages';

//Redirect route on unauthorized access
const protectedRoute =  async () => {
    const isUserPassword = await localStorage.userPassword
    if (!isUserPassword) {
      return redirect("/login");
    }
    return "";
  }
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      id: 'appRoot',
      children: [
        {
          path: '/app',
          element: <TheDashboardPage />,
          loader: protectedRoute,
          id: 'dashboardPage',
        },
        {
          path: '/users',
          element: <TheUsersPage />,
          loader: protectedRoute,
          id: 'usersPage',
          children: [
              {
                path:':userId',
                element: <UserDetails />,
                id: 'userDetailPage',
                children: [
                    {
                        path:'general-details',
                        element: <UserDetailsGeneralDetails/>
                      },
                      {
                        path:'documents',
                        element: <UserDetailsDocuments />
                      },
                      {
                        path:'bank-details',
                        element: <UserDetailsDocuments />
                      },
                      {
                        path:'loan',
                        element: <UserDetailsDocuments />
                      },
                      {
                        path:'savings',
                        element: <UserDetailsDocuments />
                      },
                      {
                        path:'app-and-systems',
                        element: <UserDetailsDocuments />
                      }
                ]
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      element: <TheLoginPage />,
      id: 'loginPage',
    }
  ]
)
export default router
