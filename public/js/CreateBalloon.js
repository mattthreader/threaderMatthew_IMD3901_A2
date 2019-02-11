//Matthew Threader - 101034977
//IMD3901 - Assignment 2

//Component Handles Balloon Creation
AFRAME.registerComponent('cursor-listener', {

    update : function() {

        //Position Variables
        var randX
        var randY
        var randZ
        //Color Variables
        let randColor
        var balloonColor

        //Gets a Random Color Index
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const Context_AF = this;
        //Sound Element Grabber
        Context_AF.soundElem = document.querySelector('#createSound');

        //Gets Random Index for Position Axis on the User Click/Touch
        Context_AF.el.addEventListener('click', function(event) {
            randX = getRandomInt(-10, 10)
            randY = getRandomInt(0, 5)
            randZ = getRandomInt(-10, 10)

            //Play and Stop the Sound of Button Click
            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();

            //Calls CreateBalloon Function
            Context_AF.createBalloon(randX, randY, randZ);


        });
    },
    createBalloon : function(X,Y,Z) {
        const Context_AF = this;

        //Selects a random Color and Assigns it to the Balloon
        function getRandomColor(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            randNum =  Math.floor(Math.random() * (max - min + 1)) + min;

            if(randNum == 1) {randColor = "red";}
            if(randNum == 2) {randColor = "#ff5c00";} //Orange
            if(randNum == 3) {randColor = "yellow";}
            if(randNum == 4) {randColor = "green";}
            if(randNum == 5) {randColor = "#008cea";} //Blue
            if(randNum == 6) {randColor = "purple";}
            
            return randColor;
        }
        balloonColor = getRandomColor(1,6);

        //Create a new Entity of type Balloon
        let balloonElement = document.createElement('a-entity');
        balloonElement.setAttribute('obj-model', {obj:'/assets/models/balloon.obj'});
        balloonElement.setAttribute('destroyballoon', {}); //Used to destroy balloon 
        balloonElement.setAttribute('material', {roughness:0.2});
        balloonElement.setAttribute("id", "#Balloon")
        balloonElement.setAttribute('material', {color:balloonColor}); //Uses  balloonColor for Color
        balloonElement.setAttribute('position', {x:X, y:Y, z:-Z}); //Uses rand XYZ for Position
        balloonElement.setAttribute('shadow', {receive:true});
        
        let scene = document.querySelector("#Balloons"); //Grab Balloons Group
        scene.appendChild(balloonElement); //Creates a new Balloon in Balloons Group
    },
});