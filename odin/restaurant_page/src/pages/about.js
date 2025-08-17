import './about.css'

export default function About(){
    
    const aboutDiv = document.createElement('div')
    aboutDiv.textContent = 'about Page'
    aboutDiv.classList.add('aboutpage')
    aboutDiv.id='about'
    
    return (
        aboutDiv
    )
}