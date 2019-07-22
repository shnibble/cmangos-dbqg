import Items from './components/items'
import Redir from './components/redir'

const routes = [
    { path: '/', name: 'default', Component: Redir },
    { path: '/items/', name: 'Items', Component: Items }
]

export default routes