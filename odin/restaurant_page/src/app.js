import Navbar from "./components/navbar"
import Home from './pages/home'
import About from "./pages/about"
import Menu from "./pages/menu"

export default function App(){

    const pages = {
        home: Home,
        about: About,
        menu: Menu,
        currentPage: 'home'
    }

    const header = document.createElement('header')
    const content = document.createElement('div')


    function setCurrentpage(id){
        content.appendChild(pages[id]())
        pages.currentPage = id
    }

    function removeCurrentPage(){
        const page = document.getElementById(pages.currentPage)
        content.removeChild(page)
    }

    function changePage(id){
        removeCurrentPage()
        setCurrentpage(id)
    }

    header.appendChild(Navbar(changePage))

    content.id = 'content'
    content.appendChild(header)

    setCurrentpage('home')

    return (content)
}