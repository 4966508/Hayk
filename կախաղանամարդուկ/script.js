const words = ['բարձրաւանդակ', 'կրծքավանդակ', 'յեղափոխութիւն', 'ազատօրէն', 'շաքարաւազ', 'ճեպընթաց', 'ճանապարհորդութիւն', 'յարմարութիւն', 'յիմարութիւն', 'յոգնակի', 'հեռախօս', 'դասաւանդում', 'յարաբերութիւն', 'վաշտապետ', 'սակաւապէտ', 'մասնագէտ', 'վարչապետ', 'բացայայտում', 'կօշկակար', 'իւրաքանչիւր', 'բացակայ', 'անբարոյ', 'թթուասեր', 'մանկապարտէզ', 'յածանաւ', 'յախճապակէ', 'զանգուած', 'զօրավար', 'զօդող', 'քրիստոնէութիւն', 'առօրեայ', 'պատճէն', 'չէզոքութիւն', 'հրէշաւոր', 'ծովահէն', 'յենարան', 'յափշտակուել', 'հինգյարկանի', 'պետութիւն', 'սիրայօժար', 'յօշոտուած', 'ծակոտկէն', 'հագուստ', 'յագենալ', 'յիշոց', 'անյատակ', 'շօշափող', 'ճօճանակ', 'սօսափել', 'յանձնարարութիւն', 'յուղարկաւորել', 'առաւօտեան', 'թեթեւագոյն', 'զարթօնք', 'հանրահաշիւ', 'բուժքոյր', 'լողաւազան', 'մօտաւորապէս', 'հօրեղբայր', 'գահընկէց', 'յուշարար', 'պատմավէպ', 'արդեօք', 'եօթանասուն', 'իհարկէ', 'հրէական', 'հզօրագոյն', 'անամօթ', 'անհաճոյ', 'առկայ', 'սնամէջ', 'հակընդդէմ', 'հազուադէպ', 'շուկայ', 'թուազոյգ', 'մեծապատիւ', 'արքայ', "յաւերժական", "յոպոպ", "յորդառատ", "յաւիտենական", "երկրէերկիր", "հնդկեղէգ", "յայտանիշ", "յարութիւն", "յատկութիւն", "վերյիշել", "հարիւրաւոր", "լաջուարդ", "պարէնամթերք", "հաւաբոյն", "յանցագործ", "առաւելագոյն", "կարեվէր", "յերիւրանք", "համարեա", "ծանօթութիւն", "իշխանամէտ","վրէժխնդիր","խելօք", "մողէս", "յորձանուտ", "յովազ", "անյաղթ", "տօնահանդէս", "տօնավաճառ"/**/];
const letters = "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ".split('');
var inputletters = [];
const Word = randEl(words);
const Wordletters = Word.split('');
var divArr = [];
var mistakes = 0;
function searchinArr(item, arr) {
    var returnArr = [];
    for (let i in arr) {
        if (arr[i] == item) {
            returnArr.push(i);
        }
    }
    if (returnArr.length === 0) {
        return false;
    }
    else return returnArr;
}

function randEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function checkSolved() {
    for (let place of divArr) {
        if (place.innerText === '_') {
            return false;
        }
    }
    return true;
}
function keyPressed(e) {
    var mistakeDiv = document.getElementById('mistake');
    var key = e.key;
    if(inputtedplace){
        inputted.children[inputtedplace].style.color = "black";
        inputtedplace = false;
    }
    if (searchinArr(key, letters)) {
        var letterplaces = searchinArr(key, Wordletters);
        
        if (searchinArr(key, inputletters)) {
            inputtedplace = searchinArr(key, inputletters);
            inputted.children[inputtedplace].style.color = "blue";
        }
        else {
            inputletters.push(key);
            var newInputtedLetter = document.createElement("p");
            newInputtedLetter.className = "input";
            newInputtedLetter.innerText = key + ",";
            inputted.appendChild(newInputtedLetter);
            if (letterplaces) {
                for (let lett of letterplaces) {
                    divArr[parseInt(lett)].innerText = key;
                }
                if(checkSolved()){
                    alert('Դուք յաղթեցի՛ք');
                    for (let place of divArr) {
                        place.style.color = 'green';    
                    }
                    document.removeEventListener('keydown', keyPressed);
                }
            }
            else {
                if (mistakes < 7) {
                    mistakes++;
                    mistakeDiv.textContent = ' ' + mistakes;
                }
                else {
                    alert('Դուք պարտուեցի՛ք');
                    for (let place in divArr) {
                        place = parseInt(place);
                        divArr[place].innerText = Wordletters[place];
                        divArr[place].style.color = "red";
                    }
                    document.removeEventListener('keydown', keyPressed);
                }
            }
        }
    }
}