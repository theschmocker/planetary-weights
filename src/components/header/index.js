import { h } from 'preact';

const Header = ({ children }) => (
	<header class="header">
        <div class="header__container">
            <h1 class="header__title">What would I weigh on another planet?</h1>
            <p class="header__subtext">Enter your Earthly weight and find out...</p>
            {children}
        </div>
	</header>
);

export default Header;
