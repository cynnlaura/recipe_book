import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useParams,
	useNavigate,
	Outlet,
} from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/">Recipes</Link>
        </>
    )
}
