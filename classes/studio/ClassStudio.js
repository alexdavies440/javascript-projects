//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let candidateTotal = 0;
        for (let i = 0; i < this.scores.length; i++) {
            candidateTotal += this.scores[i];
        }
        let averageScore = candidateTotal/this.scores.length;
        return Math.round(averageScore *10)/10;
    }
    status() {
        let programAcceptance = 'Rejected';
        if (this.average() >= 90) {
            programAcceptance = 'Accepted';
        } 
        else if (this.average() >= 80) {
            programAcceptance = 'Reserve'
        }
        else if (this.average() >= 70) {
            programAcceptance = 'Probationary'
        }

        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${programAcceptance}`;
       
    }
    setScore(num) {
        while (this.average() < num) {
            this.scores.push(100);
        }
        console.log(`${this.name} will have to get ${this.scores.length} perfect scores through honest means in order to get an average of ${this.average()}%`);
    } 
}

const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

console.log(merryMaltese.average())

console.log(merryMaltese.status())
console.log(gladGator.status())
console.log(bubbaBear.status())
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

console.log(gladGator.setScore(80))
console.log(gladGator.setScore(90))
console.log(gladGator.setScore(99))
console.log(gladGator.setScore(100))
console.log(gladGator.scores)

