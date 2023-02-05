

preposition = ["Aboard","Considering","Pending","About","Counting","Per","Above","Cum","Plus","Across","Despite","Pro","After","Down","Re","Against","During","Regarding","Along","Except","Respecting","Alongside","Excluding","Round","Amid","Following","Save","Among","For","Saving","Anti","From","Since","Around","Given","Than","As","Gone","Through","Astride","In","Throughout","At","Including","Till","Atop","Inside","To","Bar","Into","Touching","Barring","Less","Toward","Before","Like","Under","Behind","Minus","Underneath","Below","Near","Unlike","Beneath","Of","Until","Beside","Off","Up","Besides","On","Upon","Between","Onto","Versus","Beyond","Opposite","Via","But","Out","With","By","Outside","Within","Circa","Over","Without","Concerning","Past","Worth"];
adjective = ["adorable","adventurous","aggressive","agreeable","alert","alive","amused","angry","annoyed","annoying","anxious","arrogant","ashamed","attractive","average","awful","bad","beautiful","better","bewildered","black","bloody","blue","blue-eyed","blushing","bored","brainy","brave","breakable","bright","busy","calm","careful","cautious","charming","cheerful","clean","clear","clever","cloudy","clumsy","colorful","combative","comfortable","concerned","condemned","confused","cooperative","courageous","crazy","creepy","crowded","cruel","curious","cute","dangerous","dark","dead","defeated","defiant","delightful","depressed","determined","different","difficult","disgusted","distinct","disturbed","dizzy","doubtful","drab","dull","eager","easy","elated","elegant","embarrassed","enchanting","encouraging","energetic","enthusiastic","envious","evil","excited","expensive","exuberant","fair","faithful","famous","fancy","fantastic","fierce","filthy","fine","foolish","fragile","frail","frantic","friendly","frightened","funny","gentle","gifted","glamorous","gleaming","glorious","good","gorgeous","graceful","grieving","grotesque","grumpy","handsome","happy","healthy","helpful","helpless","hilarious","homeless","homely","horrible","hungry","hurt","ill","important","impossible","inexpensive","innocent","inquisitive","itchy","jealous","jittery","jolly","joyous","kind","lazy","light","lively","lonely","long","lovely","lucky","magnificent","misty","modern","motionless","muddy","mushy","mysterious","nasty","naughty","nervous","nice","nutty","obedient","obnoxious","odd","old-fasioned","open","outrageous","outstanding","panicky","perfect","plain","pleasant","poised","poor","powerful","precious","prickly","proud","putrid","puzzled","quaint","real","relieved","repulsive","rich","scary","selfish","shiny","shy","silly","sleepy","smiling","smoggy","sore","sparkling","splendid","spotless","stormy","strange","stupid","successful","super","talented","tame","tasty","tender","tense","terrible","thankful","thoughtful","thoughtless","tired","tough","troubled","ugliest","ugly","uninterested","unsightly","unusual","upset","uptight","vast","victorious","vivacious","wandering","weary","wicked","wide-eyed","wild","witty","worried","worrisome","wrong","zany","zealous"];
verb = ["slept","kept","worked","wrote","closed","chatted","asked","lied","combed","did","met","learnt","typed","watched","saw","played","danced","slapped","forced","turned off","turned on", "bore","became","began","bit","broke","brought","caught","chose","came","did","drank","drove","ate","fell","felt","flew","froze","got","went","knew","laid"];
noun = ["time","year","people","way","day","man","thing","woman","life","child","world","school","state","family","student","group","country","problem","hand","part","place","case","week","company","system","program","question","work","government","number","night","point","home","water","room","mother","area","money","story","fact","month","lot","right","study","book","eye","job","word","business","issue","side","kind","head","house","service","friend","father","power","hour","game","line","end","member","law","car","city","community","name","president","team","minute","idea","kid","body","information","back","parent","face","others","level","office","door","health","person","art","war","history","party","result","change","morning","reason","research","girl","guy","moment","air","teacher","force","education"];
usernames = ["forrevan", "wjames684", "glenn44", "fgvand94"];
//tense seems like it's important in the verb at least. I run makes sense 
//but he run doesn't. It needs to be he runs. There's that s thing. So not about tense
//exactly. I'll need to do that but I think if I just make everything past
//tense for now I don't know if there's that s thing with past tense stuff. 
let id = 1;
for (let i = 0; i < 100; i++) {
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let hours = date_ob.getHours();
    
    let minutes = date_ob.getMinutes();

    let seconds = date_ob.getSeconds();

    let fullTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;


let user = usernames[Math.floor(Math.random()*4)];
const getNumberTo100 = () => {
   return Math.round(Math.random()*100);    
}


class NP {
    constructor(d, a, n, aCount, pp, ppCount) {
        this.d = d;
        this.a = a;
        this.n = n;
        this.aCount = aCount,
        this.pp = pp;
        this.ppCount = ppCount,
        this.phrase = ""
    }

    generatePhrase () {
        const dArrInd = getNumberTo100();
        const aArrInd = getNumberTo100();

        // this.d = determinator[dArrInd];
        // this.a = adjective[aArrInd];

        //something something

        if (this.d === 1) {
            this.phrase += "the ";
            // console.log("d");

        }

        if (this.a === 1) {
            let i = 1;
            // console.log("a");
            while (i <= this.aCount) {
                // console.log("aloop");
                this.phrase += adjective[getNumberTo100()] + ' ';
                i++
            }
            //Noun is required so I'll pass it in when I instantiate the object. 

        }

        this.phrase += this.n;

            //Should be outside. Can have a pp without an adjactive. 
        if (this.pp === 1) {


            let j = 1;
            // console.log("pp");
            while (j <= ppCount) {
                // console.log("pp");
                pp1.generatePhrase();
                this.phrase += pp1.phrase;
                j++;
            }
            

        }
    }
}

class PP {
    constructor(np) {
        this.np = np;
        this.phrase;
    }

    generatePhrase () {
        this.phrase += preposition[getNumberTo100()] + " ";
        let j = 0;
        while (j < this.np){
            const np2 = new NP(0, 1, noun[getNumberTo100()], 0, 0, 0);
            np2.generatePhrase();
            this.phrase += np2.phrase + " ";
            j++;
        }
    }
}

            const npOption = Math.round(Math.random());
            const pp1 = new PP(npOption);

//Just adding zero's for now to prevent it from potentially generate insanly long sentances but I could
//probably make a max np or pp variable and decrement it periodically and use math floor or something to that effect. 

let vp = {
    np: Math.round(Math.random()),
    pp: Math.round(Math.random()),
    // ppCount: ,
    phrase: "",

    generatePhrase() {
        this.phrase += verb[Math.round(Math.random()*41)] + " ";
        let i = 0;
        while (i < this.np) {
            const np3 = new NP(0, 0, noun[getNumberTo100()], 0, 0, 0);
            np3.generatePhrase();
            this.phrase += np3.phrase + " ";
            i++;
        }
    }
}

let npNumber = 1;

//Don't know if there's any reason for this function. Could just pass all the initial values and save
//from making all those variables since I only need them once in this case. 

    let d = Math.round(Math.random());
    let a = Math.round(Math.random());
    let aCount = Math.round(Math.random()*2) + 1;
    let pp = Math.round(Math.random());
    let ppCount = Math.round(Math.random*2);
    let nRandom = getNumberTo100();

    const np1 = new NP(d, a, noun[nRandom], aCount, pp, ppCount);
    np1.generatePhrase();


// console.log("tovp");

vp.generatePhrase();

//I'll have to check when I get home in node to make sure I didn't make any mistakes in logic but I
//think this should work. If not should only need a bit of tweaking. 

console.log(`insert into mushroomsthreads values (${id}, '${np1.phrase} ${vp.phrase}', '${fullTime}', '${user}');`);
    d = Math.round(Math.random());
    a = Math.round(Math.random());
    aCount = Math.round(Math.random()*2) + 1;
    pp = Math.round(Math.random());
    ppCount = Math.round(Math.random*2);
    nRandom = getNumberTo100();

    const np2 = new NP(d, a, noun[nRandom], aCount, pp, ppCount);
    pp1.phrase = "";
    np2.generatePhrase();


// console.log("tovp");
vp.phrase = "";
vp.generatePhrase();
console.log(`insert into mushroomsposts values (${id}, ${id}, '${np2.phrase} ${vp.phrase}', '${user}');`);
id ++;
}