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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/books.json')
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
