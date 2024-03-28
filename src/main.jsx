import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Read from './components/Read';
import Wishlist from './components/Wishlist';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <Read></Read>,
            loader: () => fetch('../books.json')
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('../books.json')
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
