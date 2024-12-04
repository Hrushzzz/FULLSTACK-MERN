import React, {useEffect, useState} from 'react'
import { Routes, Route, Link, Outlet, useParams, Navigate } from 'react-router-dom'

function ReactRouterDOM() {
  return (
    <>
    <div>Navbar</div>
    <ul>
    {/* Best Practice :: Use `<Link>` instead of `<a>` tags for internal navigation */}
    {/* Because using an <a> tag will reload the page */}
        <Link to = '/'><li>Home</li></Link>
        <Link to = '/about'><li>About</li></Link>
    </ul>

    <Routes>
        {/* ***STATE routing :::: *** */}
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/about" element = {<About></About>}>
            {/* NESTED routing ::: */}
                {/* slash(/) is added automatically, no need of adding explicitly inside a sub-route */}
            <Route path = "barcelona" element = {<Barcelona></Barcelona>}></Route>
            <Route path="argentina" element = {<Argentina></Argentina>}></Route>
        </Route>

        {/* ****DYNAMIC routing :::: *** */}
        {/* <Route path='/user/:id/:name' element={<User></User>}></Route> */}
        <Route path = '/user/:id' element = {<User></User>}></Route>

        {/* ***REDIRECTING the routes :::: *** */}
        <Route path='/home' element={<Navigate to="/"></Navigate>}></Route>

        {/* ***DEFAULT routing :::: *** */}
        <Route path='*' element = {<PageNotFound></PageNotFound>}></Route>
        {/* If no route matches, it navigates to the route written in DEFAULT routing. */}
        
    </Routes>
    </>
  )
}

function Home() {
    return(
        <>
        <div>-- Home Page --</div>
        <h1>Lionel Messi - The GOAT</h1>
        </>
    )
}

function About() {
    return(
        <>
        <div>-- About Page --</div>
        <h1>Messi, the soccer star aka GOAT, won the World Cup and amazed fans worldwide with his
             incredible skills and goal-scoring talent.</h1>

             {/* Whenever we are creating nested-routing, we need to add "<Outlet></Outlet>" after
             which we wanted nested-routing. */}
             <Outlet></Outlet>
        </>
    )
}

function Barcelona() {
    return(
        <>
        <div>-- Career at Barca --</div>
        <h1>At Barcelona, Messi scored 672 goals and provided 265 assists,
            becoming the club's all-time top scorer and helping win countless
            trophies during his legendary 17-year tenure.</h1>

        <Outlet></Outlet>
        </>
    )
}

function Argentina() {
    return(
        <>
        <div>-- Career at Argentina --</div>
        <h1>Messi led Argentina to World Cup glory in 2022, scoring 105 goals in 172 matches,
            becoming the national team's all-time top scorer and a legendary international football icon.</h1>

        <Outlet></Outlet>
        </>
    )
}

function User() {
    const[user, setUser] = useState(null);
    const {id, name} = useParams();
    // console.log(obj);
    
    useEffect(() => {
        
        const fetchData = async function() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const result = await response.json();
            console.log(result);
            setUser(result);
        }
        fetchData();
    }, [])
    return(
        <>
        {
            user == null ? (<h1>Loading..!</h1>) : (
                <>
                    <h3>Name {user.name}</h3>
                    <h3>Email {user.email}</h3>
                    <h3>Phone {user.phone}</h3>
                </>)
        }
        </>  
    )
}

function PageNotFound() {
    return(
        <div>
            <h1>Oops..! Incorrect URL</h1>
        </div>
    )
}

// The "useParams()" hook is part of React Router and allows you to access URL parameters in a functional component. 
// It's particularly useful for dynamic routing, where parts of the URL can change based on the specific resource
// or view you're displaying.


// useEffect() should only return a function, which is going to be used for cleanUp.
// If we have an async function, do not directly return that async fn.
// In useEffect() , there is a callback function and that callback function should not be asynchronous.
// And async function returns a Promise

// We don't want a promise to be returned, we want a conventional normal function
// which is Synchronous should be returned so that cleanUp can be perfomed.

export default ReactRouterDOM