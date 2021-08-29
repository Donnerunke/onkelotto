var genTopic = document.getElementbyId('start-btn');

var alltagBtn = document.getElementById('');
var partypeopleBtn = document.getElementById('');
var einkaufenBtn = document.getElementById('');


var topics = document.getElementsByTagName('');
var topic1 = document.getElementsByTagName('');
var topic2 = document.getElementsByTagName('');
var topic3 = document.getElementsByTagName('');

var inputNoun = document.getElementById('');
var inputNamed = document.getElementById('');
var inputVerb = document.getElementById('');
var inputAdjective = document.getElementById('');
var inputLocation = document.getElementById('');



genTopic.addEventListener('click', function(event) {
    displaytopic();
});


function displaytopic(topic) {
    if(alltagBtn.checked) {
        changeSpeechParts(topic1);
        topic1.style.display ='block';
        topic2.style.display ='none';
        topic3.style.display ='none';
    }

    else if(partypeopleBtn.ckecked) {
        changeSpeechParts(topic1);
        topic1.style.display ='block';
        topic2.style.display ='none';
        topic3.style.display ='none';
    }

    else if(einkaufenBtn.ckecked) {
        changeSpeechParts(topic1);
        topic1.style.display ='block';
        topic2.style.display ='none';
        topic3.style.display ='none';
    }
    }

 function getInputWords(topic,WordType,word) {
     var topicText = topic.innerText;
    var modifiedText = topicText.replace(wordType, word);
    topic.innerText = modifiedText;
 } 

 function changeSpeechParts(topic){
    var nounArr = inputNoun.value.split(',');
    if(nounArr.length > 0){
        for(var i = 0; i < nounArr.length; i++){
            getInputWords(topic,'{{noun}}', nounArr[i]);
        }

     }
     if(nounArr.length < 4) {
         var nouns = backupwords.nouns 
         for (var i = 0; i < nouns.length; i++){
             var topicText = topic.innerText;
             console.log('backup nouns', nouns[i])
             var modifiedText = topicText.replace('{{noun}}', nouns[i]);
             topic.innerText = modifiedText;
         }
     }

     var adjectiveArr = inputAdjective.value.split(',');
    if(adjectiveArr.length > 0){
        for(var i = 0; i < adjectiveArr.length; i++){
            var topicText = topic.innerText;
            console.log('custom adjectives', adjectiveArr[i])
            var modifiedText = topicText.replace('{{adjective}}', adjectiveArr[i]);
            topic.innerText = modifiedText;
        }
    }
    if(adjectiveArr.length < 4){
        //use backupWords
       var adjectives = backupwords.adjectives
        for(var i = 0; i < adjectives.length; i++){
            var topicText = topic.innerText;
            console.log('backup adjectives', adjectives[i])
            var modifiedText = topicText.replace('{{adjective}}', adjectives[i]);
            topic.innerText = modifiedText;
        }
    }
    var verbArr = inputVerb.value.split(',');
    if(verbArr.length > 0){
        for(var i = 0; i < verbArr.length; i++){
            var topicText = topic.innerText;
            var modifiedText = topicText.replace('{{verb}}', verbArr[i]);
            topic.innerText = modifiedText;
        }
    }
    if(verbArr.length < 4){
        //use backupWords
       var verbs = backupwords.verbs;
        for(var i = 0; i < verbs.length; i++){
            var topicText = topic.innerText;
            var modifiedText = topicText.replace('{{verb}}', verbs[i]);
            topic.innerText = modifiedText;
        }
    }
    var locationArr = inputlocation.value.split(',');
    if(locationArr.length > 0){
        for(var i = 0; i < locationArr.length; i++){
            var topicText = topic.innerText;
            var modifiedText = topicText.replace('{{location}}', locationArr[i]);
            topic.innerText = modifiedText;
        }
    }
    if(locationArr.length < 4){
        //use backupWords
       var locations = backupwords.locations;
        for(var i = 0; i < locations.length; i++){
            var topicText = topic.innerText;
            var modifiedText = topicText.replace('{{location}}', locations[i]);
            topic.innerText = modifiedText;
        }
    }
}