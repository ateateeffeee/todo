const dom = (() => {

    const init = function() {
        this.createContentDiv();
        this.createHeader();
        this.createAddTaskDiv();

    }

    const createContentDiv = function() {
        let content = document.createElement("div");
        content.id = 'content';
        document.body.appendChild(content);
        console.log("where is it?");
    }

    const createHeader = function() {
        let header = document.createElement("div");
        header.id = 'header';

        document.getElementById('content').appendChild(header);
    }

    const createAddTaskDiv = function() {
        let div = document.createElement("div");
        div.id = 'addTaskDiv';

        let titleInput = document.createElement("input");
        titleInput.className = 'textBox';
        titleInput.placeholder = 'Title';

        //Append div and text boxes
        div.appendChild(titleInput);

        document.getElementById('content').appendChild(div);


    }

    return {
        init,
        createHeader,
        createContentDiv,
        createAddTaskDiv,
    }

})();

module.exports = dom;

//left off here. Google how to export self whatevering funciton
//export this and then figure out how logic has to work as far as
//project names go and all dat