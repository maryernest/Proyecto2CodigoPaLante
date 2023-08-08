// ******** BOTON MENÚ HAMBURGUESA Y MODO ODCURO **********

const btnBurger = document.querySelector('#btn-burguer')
const modoDark = document.querySelector('#modo-dark');

btnBurger.addEventListener('click', () => {
    document.body.classList.toggle('movile-menu-active')
})


// **************** BOTON MODO DARK *****************

modoDark.addEventListener('click', () => {
    document.body.classList.toggle('modo-dark')
})


// ************** LISTA DE HABILIDADES **************
let skills = [
    {
        img: '../img/html5_logo.png',
        nombre: 'HTML'
    },
    {
        img: 'https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png',
        //img: '../img/css3_logo.png',
        nombre: 'CSS'
    },
    {
        img:'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png',
        // img: '../img/JS_logo.webp',
        nombre: 'JS'
    },
    {
        img:'https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png',
        // img: '../img/bootstrap_logo.png',
        nombre: 'BOOTSTRAP'
    },
    {
        img:'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png',
        // img: '../img/materiaUI_logo.png',
        nombre: 'MATERIAL_UI'
    },
    {
        img:'https://seeklogo.com/images/S/sass-logo-E41E7734A8-seeklogo.com.png',
        // img: '../img/sass_logo.png',
        nombre: 'SASS'
    },
    {
        img: '../img/vite_logo.png',
        nombre: 'VITE'
    },
    {
        img: '../img/react_logo.png',
        nombre: 'REACT'
    },
    {
        img: '../img/figma_logo.png',
        nombre: 'FIGMA'
    },
    {
        img: '../img/java_logo.png',
        nombre: 'JAVA'
    },
    {
        img: '../img/springBoot_logo.png',
        nombre: 'SPRING_BOOT'
    },
    {
        img: '../img/postman_logo.png',
        nombre: 'POSTMAN'
    },
    {
        img: '../img/mysql_logo.png',
        nombre: 'WORKBENCH'
    },
    {
        img: '../img/aws_logo.png',
        nombre: 'AWS'
    },
    {
        img: '../img/vsc_logo.png',
        nombre: 'VSC'
    },
    {
        img: '../img/intellij_logo.png',
        nombre: 'INTELLIJ_IDEA'
    },
    {
        img: '../img/VMware_logo.webp',
        nombre: 'VMWARE'
    },
    {
        img: '../img/Virtualbox_logo.png',
        nombre: 'VIRTUALBOX'
    },
    {
        img: '../img/gitBash_logo.png',
        nombre: 'GIT_BASH'
    },
    {
        img: '../img/gitHub_logo.png',
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




