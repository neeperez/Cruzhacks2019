// So first we wanna find out how to read through all of the text items

var AllElements = document.getElementsByTagName("*");


for(var i = 0; i < AllElements.length; i++){
    var CurrentElement = AllElements[i];

    for(var k; k < CurrentElement.childNodes.length; k++) {
        var CurrentNode = CurrentElement.childNodes[k];

        if(CurrentNode.nodeType == 3){
            //If we have a text thingy, then start to replace it
            var text = CurrentNode.nodeValue;

            var allWords = {
                fuck: "frick",
                fucking: "great",
            }
            /* WARNING: HERE COMES A HUGE LINE OF POTENTIALLY OFFENSIVE TEXT */
            /* THIS IS USED SOLEY FOR THE PURPOSE OF FILTERING OUT SOME OFFENSIVE */
            /* TEXT AND REPLACING THEM WITH NON-OFFENSIVE WORDS THAT DEFLATE THE */
            /* WHOLE POINT OF THE ORIGINAL POST.  */
            var replaceText = text.replace(/fuck|fucking/gi, function(word) {

            };
            

            if(replaceText != text){
                CurrentElement.replaceChild(document.createTextNode(replaceText), text);
            }
        }
    }
}
