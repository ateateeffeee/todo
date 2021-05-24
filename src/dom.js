export const dom = (() => {

    const init = function() {

    }

    const createHeader = function() {
        let header = document.createElement("div");
        header.id = 'header';
    }


    return {
        init,
        createHeader,
    }

})();

//left off here. Google how to export self whatevering funciton
//export this and then figure out how logic has to work as far as
//project names go and all dat