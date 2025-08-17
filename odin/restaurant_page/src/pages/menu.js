import './menu.css'

export default function Menu(){
    
    const menuDiv = document.createElement('div')
    menuDiv.textContent = 'Menu Page'
    menuDiv.classList.add('menupage')
    menuDiv.id='menu'
    
    return (
        menuDiv
    )
}