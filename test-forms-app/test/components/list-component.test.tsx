import ReactDOM from 'react-dom';
import ListComponent from '../../src/containers/list-entry/list-index';

describe('list component test', ()=>{
    // beforeAll(()=>{
    //     console.log('before all')
    // })
    // afterAll(()=>{
    //     console.log('after all hook')
    // })

    let container: HTMLDivElement;

    beforeEach(()=>{
        console.log('before Each hook');
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ListComponent />, container)
    })

    afterEach(()=>{
        console.log('after each hook')
        document.body.removeChild(container);
        container.remove();
        jest.clearAllMocks();
    })

    test('rendering test',()=>{
        expect(true).toBeTruthy();
    })

    test('render label test suit', ()=>{
        const label = document.querySelector('label');
        expect(label!.textContent).toBe('My List Component')
    })
})