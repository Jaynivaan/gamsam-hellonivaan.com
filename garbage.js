(function(){
    const overlay = document.querySelector('.overlay');
    const enterBtn = document.querySelector('.btn');
    const trashIcon = document.getElementById('trash-icon');
    const KEY = 'enteredOnce';

    //helper functions for local storage
    const hasEntered = () => {
        try { return localStorage.getItem(KEY) === 'true';} catch (e) {return false; }
    };
    const markEntered = () => {
        try { localStorage.setItem(KEY, 'true');} catch (e) {}
    };

    //initial display logic
    if (hasEntered()) {
        //user already entered previously -> hide garbage, show overlay if needed\\
        trashIcon.style.display = 'none';
        overlay.style.display = 'flex';
    } else {
        //usernot entered yet -> show garbage, hide overlay
        trashIcon.style.display = 'block';
        overlay.style.display = 'none';        
    }
    //when "enter" is clicked -> mark as entered, hide garbage\
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            markEntered();
            trashIcon.style.display = 'none';
        });
    }    
})();