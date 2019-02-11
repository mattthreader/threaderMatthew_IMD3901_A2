//Matthew Threader - 101034977
//IMD3901 - Assignment 2

//Component Handles Balloon Destruction
AFRAME.registerComponent('destroyballoon', {
    init : function() {
        const Context_AF = this;

        //Sound Element Grabber
        Context_AF.soundElem = document.querySelector('#deleteSound');

        //Runs Destroy Function on the User Click/Touch
        Context_AF.el.addEventListener('mouseenter', function(event) {
            console.log("Destroyed a Balloon");
            Context_AF.deleteMyself(); //Deletes Balloons

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);  //Delete Balloon from Balloons Group(parent)
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
});