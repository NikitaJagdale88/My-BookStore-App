import React from 'react';
import MyBookStore from './components/MyBookStore';
import BookList from './components/BookList';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';


const App =()=>{


    return(
        <>
         <MyBookStore />
         <BookList />
         <Books />
         <BookDetails />
         <Navbar />

        </>
    );
}
export default App;