function customRender(maincontainer,reactElement){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
}

const reactElement = {
    type: 'a',
    props:{
        href:"https://en.wikipedia.org/wiki/Yo_Yo_Honey_Singh",
        target:"_blank"
    },
    children:"Click me to Visit Google"
}
const maincontainer = document.querySelector('#root');
customRender(maincontainer,reactElement);

