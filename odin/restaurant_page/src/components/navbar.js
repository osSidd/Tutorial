export default function Navbar(setCurrentpage){

    const nav = document.createElement('nav')

    const navList = ['home', 'menu', 'about']

    navList.forEach(navItem => {
        const navBtn = document.createElement('button')
        navBtn.textContent = navItem

        navBtn.onclick = () => {
            console.log(navItem)
            setCurrentpage(navItem)
        }


        nav.appendChild(navBtn)
    })

    return (
        nav
    )
}