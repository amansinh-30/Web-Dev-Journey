const person = {
    fistName: 'Jack',
    lastName: 'Reacher',
    fullName: function(){
        return `${this.fistName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 2000)
    }
}

console.log(typeof(this));
// console.log(person.fullName());
console.log(person.shoutName())
