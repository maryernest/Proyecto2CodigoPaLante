// ******** BOTON MENÚ HAMBURGUESA Y MODO ODCURO **********

const btnBurger = document.querySelector('#btn-burguer')

btnBurger.addEventListener('click', () => {
    document.body.classList.toggle('movile-menu-active')
})


// **************** BOTON MODO DARK *****************

const modoDark = document.querySelector('#modo-dark');
const footer = document.querySelector('footer')

modoDark.addEventListener('click', () => {
    document.body.classList.toggle('modo-dark')
})


// ************** LISTA DE HABILIDADES **************
let skills = [
    {
        img: 'https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png',
        nombre: 'HTML'
    },
    {
        img: 'https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png',
        nombre: 'CSS'
    },
    {
        img:'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png',
        nombre: 'JS'
    },
    {
        img:'https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png',
        nombre: 'BOOTSTRAP'
    },
    {
        img:'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png',
        nombre: 'MATERIAL_UI'
    },
    {
        img:'https://seeklogo.com/images/S/sass-logo-E41E7734A8-seeklogo.com.png',
        nombre: 'SASS'
    },
    {
        img: 'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png',
        nombre: 'VITE'
    },
    {
        img: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png',
        nombre: 'REACT'
    },
    {
        img: 'https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png',
        nombre: 'FIGMA'
    },
    {
        img: 'https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png',
        nombre: 'JAVA'
    },
    {
        img: 'https://seeklogo.com/images/S/spring-logo-9A2BC78AAF-seeklogo.com.png',
        nombre: 'SPRING_BOOT'
    },
    {
        img: 'https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png',
        nombre: 'POSTMAN'
    },
    {
        img: 'https://seeklogo.com/images/M/mysql-logo-B047FB7790-seeklogo.com.png',
        nombre: 'WORKBENCH'
    },
    {
        img: 'https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png',
        nombre: 'AWS'
    },
    {
        img: 'https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png',
        nombre: 'VSC'
    },
    {
        img: 'https://seeklogo.com/images/I/intellij-idea-logo-F0395EF783-seeklogo.com.png',
        nombre: 'INTELLIJ_IDEA'
    },
    {
        img: 'https://www.freepnglogos.com/uploads/vmware-png-logo/vmware-workstation-png-logo-7.png',
        nombre: 'VMWARE'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png?20150209215936',
        nombre: 'VIRTUALBOX'
    },
    {
        img: 'https://seeklogo.com/images/G/git-bash-logo-B6475E8359-seeklogo.com.png',
        nombre: 'GIT_BASH'
    },
    {
        img: 'https://static-00.iconduck.com/assets.00/github-desktop-icon-2046x2048-r5plljad.png',
        nombre: 'GIT_HUB'
    },
];


function crearHTMLSkill(skill) {
    let imagenSkill = document.createElement('img')
    imagenSkill.src = skill.img

    let nombreSkill = document.createElement('h5')
    nombreSkill.innerText = skill.nombre


    let listItem = document.createElement('li')
    listItem.appendChild(imagenSkill)
    listItem.appendChild(nombreSkill)

    return listItem;
};

const listarSkill = document.querySelector('#skill-list');


skills.forEach( (skill) => {
    const skillListItem = crearHTMLSkill(skill);
    listarSkill.appendChild(skillListItem);
});
