// COMPONENTS
import Nav from '../Components/Elements/Nav'
import Header from '../Components/Elements/Header';
import About from '../Components/Elements/About';

//TYPES
import IElement from '../Models/Element';

const elements: IElement[] =  [
    {
        id: 1,
        Element: Nav,
        backgroundColor: 'green',
        text: ` <nav><p>This is the nav bar</p></nav>`
    },
    {
        id: 2,
        Element: Header,
        backgroundColor: 'blue',
        text: `<h1>This is the header</h1>`
    },
    {
        id: 3,
        Element: About,
        backgroundColor: 'orange',
        text: '<div>This is the about section</div>'
    }
];

export default elements

