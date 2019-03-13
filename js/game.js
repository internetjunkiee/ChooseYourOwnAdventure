// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You are at a car meet, pick your car",
            choices: [
                {
                    text: "Audi R8",
                    nextLevel: "audi",
                },

                {
                    text: "AMG mercedes c63",
                    nextLevel: "mercedes",
                },
            ]
        },

        audi: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across an opponent",
            choices: [
                {
                    text: "Race the evo",
                    nextLevel: "evo",
                },
                
                {
                    text: "Ignore him and keep watching the races",
                    nextLevel: "ignore",
                },
            ]
        },

        mercedes: {
            message: "You come across an opponent",
            choices: [
                {
                    text: "Race the supra",
                    nextLevel: "supra",
                },
                
                {
                    text: "Punch him",
                    nextLevel: "punch",
                },
            ]
        },
        
        evo: {
            message: "You come across an opponent",
            choices: [
                {
                    text: "Race the supra",
                    nextLevel: "supra",
                },
                
                {
                    text: "Punch him",
                    nextLevel: "punch",
                },
            ]
        },
        
        ignore: {
            message: "You come across an opponent",
            choices: [
                {
                    text: "Race the supra",
                    nextLevel: "supra",
                },
                
                {
                    text: "Punch him",
                    nextLevel: "punch",
                },
            ]
        },
        
        supra: {
            message: "You come across an opponent",
            choices: [
                {
                    text: "Race the supra",
                    nextLevel: "supra",
                },
                
                {
                    text: "Punch him",
                    nextLevel: "punch",
                },
            ]
        },
        
        punch: {
            message: "You come across an opponent",
            choices: [
                {
                    text: "Race the supra",
                    nextLevel: "supra",
                },
                
                {
                    text: "Punch him",
                    nextLevel: "punch",
                },
            ]
        },

    }
};
