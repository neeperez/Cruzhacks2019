// So first we wanna find out how to read through all of the text items
function start() {
    var AllElements = document.getElementsByTagName("*");
    
    /*** DISCLAIMER ***/
    /* WARNING: HERE COMES A HUGE LINE OF POTENTIALLY OFFENSIVE TEXT */
    /* THIS IS USED SOLEY FOR THE PURPOSE OF FILTERING OUT SOME OFFENSIVE */
    /* TEXT AND REPLACING THEM WITH NON-OFFENSIVE WORDS THAT DEFLATE THE */
    /* WHOLE POINT OF THE ORIGINAL POST.  */
    var allWords = {
        fuck: "frick",
        fucking: "great",
        damn: "damb",
        dammit: "dambit",
        damnit: "dambnit",
        shit: "shoot, but for poop",
        shid: "shood",
        shitter: "latrine",
        phuck: "phrick",
        fucker: "hugger",
        phucker: "hugger",
        fucking: "great",
        phucking: "good",
        piss: "peepee",
        pissed: "grumpy",
        pisser: "restroom",
        bitch: "doggy",
        bitching: "mouthing off",
        bitchy: "naughty",
        bastard: "villain",
        ass: "potato salad",
        cunt: "kitty cat",
        dick: "badillywillyshashilly",
        cock: "male chicken man",
        

    };
    for(var i = 0; i < AllElements.length; i++){
        var CurrentElement = AllElements[i];

        for(var k = 0; k < CurrentElement.childNodes.length; k++) {
            var CurrentNode = CurrentElement.childNodes[k];
            console.log(CurrentNode);
            if(CurrentNode.nodeType === 3){
                //If we have a text thingy, then start to replace it
               // var node = CurrentNode.nodeValue;

                var text = CurrentNode.nodeValue;
                console.log(text);

                if(text != undefined){
                    var replaceText = text.replace(/damn|dammit|damnit|shit|shid|shitter|phuck|phucking|piss|pissed|pisser|bitch|b!tch|bitching|bitchy|bastard|ass|cunt|dick|fuck|fucking|shit/gi, function(word) {
                        word = word.toLowerCase();
                        return allWords[word];
                    });
                    

                    if(replaceText != text){
                        CurrentElement.replaceChild(document.createTextNode(replaceText), CurrentNode);
                    }
                }
            }
        }
    }
}