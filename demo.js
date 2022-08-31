let jonSnowHealth = 100;

let strHealth = String(jonSnowHealth)

let myWinner = 'Jon is the winner'
myWinner = myWinner.replace('Jon', 'Danny')

if(myWinner.includes('Danny')){
    console.log(myWinner);
}

// cases for different programming languages
// camelCase 
// PascalCase
// kebab-case
// snake_case
let mySlpitStr = myWinner.split(" ")
console.log(mySlpitStr);
let myAlmostKebabStr = mySlpitStr.join('-');
console.log(myAlmostKebabStr);
let myKebabstr = myAlmostKebabStr.toLowerCase();
console.log(myKebabstr);

const myKebabCaseStr = myWinner.split(" ").join('-').toLowerCase();
console.log(myKebabCaseStr);

const isJonAlive = () => {
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    } else {
        console.log('Jon is not alive!')
    }
}

isJonAlive();

function attackJon(damage){
    jonSnowHealth -= damage;
    isJonAlive();
}
attackJon(30);
attackJon(35);
attackJon(13);
attackJon(23);

console.log(jonSnowHealth);
