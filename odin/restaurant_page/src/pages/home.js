import './home.css'

export default function Home(){
    
    const homeDiv = document.createElement('div')
    homeDiv.textContent = 'Home Page'
    homeDiv.classList.add('homepage')
    homeDiv.id='home'
    
    return (
        homeDiv
    )
}