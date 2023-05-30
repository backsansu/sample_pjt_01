const sign_up_view = 1;
const sign_in_view = 2;
const sign_out_view = 3;
const diary_write_view = 4;
const DIARY_LIST_VIEW = 5;

let signUpWrap = '';
let signInWrap = '';
let writeWrap = '';
let listWrap = '';



const initViews = () => {
    console.log('initViews() CALLED!!');

    let signUpWrap = document.querySelector('div.sign_up_wrap');
    let signInWrap = document.querySelector('div.sign_in_wrap');
    let writeWrap = document.querySelector('div.write_wrap');
    let listWrap = document.querySelector('div.list_wrap');


}

const showSelectedView = (viewNo) => {
    console.log('showSelectedView() CALLED!!');
    
    switch(viewNo) {
        case sign_up_view:
                signUpWrap.style.display = 'block';
                signInWrap.style.display = 'none';
                writeWrap.style.display = 'none';
                listWrap.style.display = 'none';
        
                break;
        
        case sign_in_view:
        case sign_out_view:
                signUpWrap.style.display = 'none';
                signInWrap.style.display = 'block';
                writeWrap.style.display = 'none';
                listWrap.style.display = 'none';
        
                break;

        case diary_write_view:
                    signUpWrap.style.display = 'none';
                    signInWrap.style.display = 'none';
                    writeWrap.style.display = 'block';
                    listWrap.style.display = 'none';
            
                    break;
                    
        case DIARY_LIST_VIEW:
                        signUpWrap.style.display = 'none';
                        signInWrap.style.display = 'none';
                        writeWrap.style.display = 'none';
                        listWrap.style.display = 'block';
                
                        break;
    }
}
