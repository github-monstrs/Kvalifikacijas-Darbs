<script setup>
import gameItem from '@/components/Game Components/gameItem.vue';
import gameEndScreen from '@/components/Game Components/gameEndScreen.vue';
import gameRows from '@/components/Game Components/gameRows.vue';
import logIn from '@/views/LogIn.vue';
import Register from '@/views/Register.vue';
import { ref, onMounted, createApp } from 'vue';


var lastGameItemClicked = 0;
var nrOfItems = 4;
var score = 0;
const gameEndScreenRef = ref(null);


function generateItemLocations(nrOfItems) {
    var itemLocations = [];
    var min = 1;
    var max = 40;

    while (itemLocations.length < nrOfItems) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!itemLocations.includes(randomNumber)) {
            itemLocations.push(randomNumber);
        }
    }

    return itemLocations;
}

function resetState() {
    const rowItems = document.querySelectorAll('.row-item');
    rowItems.forEach((rowItem) => {
        if (rowItem.children.length > 0) {
            const children = Array.from(rowItem.children);
            children.forEach((element) => {
                element.parentElement.classList.remove('active');
                element.parentElement.classList.remove('ingame');
                element.removeAttribute('cell-id');
                element.remove();
            });
        }
    });
}


function mainGameFunc(itemID){
    score = nrOfItems;

    if (itemID == 1){
        lastGameItemClicked = 1;
        var gameItems = document.querySelectorAll('.row-item.active');
        gameItems.forEach(function(item){
            item.classList.remove('active');
            item.classList.add('ingame');
            item.firstChild.textContent = ' ';
            item.firstChild.classList.add('empty');

            if (item.firstChild.getAttribute('item-id') == 1){
                item.firstChild.remove();
                item.classList.remove('ingame');
            }
        })
    }else if (itemID == lastGameItemClicked+1){
        var ingameItems = document.querySelectorAll('.row-item.ingame');
        ingameItems.forEach(function(item){
            if (item.firstChild.getAttribute('item-id') == itemID){
                lastGameItemClicked = itemID;
                item.firstChild.remove();
                item.classList.remove('ingame');
            }
        })
        if (lastGameItemClicked == nrOfItems){
            resetState();
            nrOfItems++;
            generateGame();
            return;
        }
    }else if (lastGameItemClicked >= 1){
        var gridParent = document.getElementById('game-wrapper');


        gameEndScreenRef.value = createApp(gameEndScreen, { score: score, resetFunction: unmountGameEndScreen, saveScoreFunction: createLogInPopup });
        gameEndScreenRef.value.mount(gridParent);

        resetState();
        nrOfItems = 4;
        generateGame();

    }else{
        console.log('You clicked the wrong one, monkey' );
    }

}

function createLogInPopup(){
    var mainEl = document.getElementById('mainEl');
    var popupRoot = document.createElement('div');

    popupRoot.style.position = 'absolute';
    popupRoot.style.top = '0px';  

    mainEl.appendChild(popupRoot);

    const logInPopup = createApp(Register);
    logInPopup.mount(popupRoot);
}

const unmountGameEndScreen = () => {

    const gameEndScreenRef = ref(null);

    if (gameEndScreenRef.value) {
        gameEndScreenRef.value.unmount();
        gameEndScreenRef.value = null;
    }

    lastGameItemClicked = 0;

    loadGameRows();
    generateGame();
};

function loadGameRows(){
    var gameWrapper = document.getElementById('game-wrapper');
    const gameRowsElement = createApp(gameRows);
    gameRowsElement.mount(gameWrapper);
}

function generateGame(){

    var gameRows = document.getElementsByClassName("game-row");
    var currentItemNum = 1;

    var itemLocations = generateItemLocations(nrOfItems);

    var turnCount = 1;
    var currentLoc = 0;

    loopRestart:
    for (var i = 0; i < gameRows.length; i++) {
        var rowItems = gameRows[i].children;

        for (var j = 0; j < rowItems.length; j++) {
            currentLoc++;

            if(currentLoc == itemLocations[turnCount - 1]){

                const gameItemInstance = createApp(gameItem, { itemID: currentItemNum, onClickFunction: mainGameFunc });

                gameItemInstance.mount(rowItems[j]);
                console.clear();


                rowItems[j].classList.add('active');

                currentItemNum++;
                currentLoc = 0;
                turnCount++;
                i = -1;
                continue loopRestart;
            }
        }
    }
}

onMounted(() => {
    loadGameRows();
    resetState();
    generateGame();
});
</script>

<template>
    <div id="main-wrapper">
        <div id="game-wrapper"></div>
    </div>
</template>

<style scoped>

#game-wrapper{
    position: relative;
    background-color: white;
    border-radius: 10px;
    top: 50px;
    height: 450px;
}

#main-wrapper{
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #303030;
}
</style>
