
import './index.css';
import rerenderEntireTree from './render';
import state from './redux/state'
import {currentDisplay} from './redux/state'
import {shippingsNewPage} from './redux/state'



rerenderEntireTree(state, currentDisplay, shippingsNewPage)

