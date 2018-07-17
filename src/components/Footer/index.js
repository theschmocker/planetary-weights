import { h } from 'preact';

const Footer = ({ children }) => (
    <footer class="footer">
        <p>
            Made by <a class="footer__link" href="https://schmo.io">Jacob Schmocker</a>. 
            Code on <a class="footer__link" href="https://github.com/theschmocker/planetary-weights.git">Github</a>
        </p>
    </footer>
);

export default Footer;
