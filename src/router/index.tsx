import { createBrowserRouter, redirect } from 'react-router-dom'
import { UserDetailsHero, UserDetailsDocuments, UserDetailsGeneralDetails } from '../components/user-details'
import { TheDashboardPage, TheLoginPage, TheUsersPage } from '../pages'
// const protectedRoute = async () => {
//     const isUserPassword = await localStorage.userPassword
//     if (!isUserPassword) {
//       return redirect("/");
//     }
//   }

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
        // loader: protectedRoute,
        id: 'dashboardPage',
        children: [
            {
                path: 'users',
                element: <TheUsersPage />,
                id: 'usersPage',
                children: [
                    {
                        path:':userId',
                        element: <UserDetailsHero />,
                        id: 'userDetailPage',
                        children: [
                            {
                                path:'',
                                element: <UserDetailsGeneralDetails/>
                              },
                              {
                                path:'documents',
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
