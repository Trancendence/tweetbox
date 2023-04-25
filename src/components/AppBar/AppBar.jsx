import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';
export const AppBar = () => {

    return (
        <Header>
         <Navigation />
         <NavLink to= "/"></NavLink>
        </Header>
    )
}