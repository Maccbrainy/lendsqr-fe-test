import { createBrowserRouter, redirect } from 'react-router-dom'
import { UserDetailsDocuments, UserDetailsGeneralDetails } from '../components/user-details'
import { TheDashboardPage, TheLoginPage, TheUsersPage } from '../pages';
import { UserDetails } from '../subpages';

//Redirect route on unauthorized access
const protectedRoute =  async () => {
    const isUserPassword = await localStorage.userPassword
    if (!isUserPassword) {
      return redirect("/");
    }
    return "";
  }

const router = createBrowserRouter(
  [
    {
        path: '/',
        element: <TheLoginPage />,
        id: 'loginPage',
      },
      {
        path: '/app',
        element: <TheDashboardPage />,
        loader: protectedRoute,
        id: 'dashboardPage',
        children: [
            {
                path: 'users',
                element: <TheUsersPage />,
                id: 'usersPage',
                children: [
                    {
                        path:':userId',
                        element: <UserDetails />,
                        id: 'userDetailPage',
                        children: [
                            {
                                path:'',
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
              },
        ]
      }
      
  ]
)

export default router
