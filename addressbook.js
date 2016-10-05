function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

function Email(address, type){
    this.address = address;
    var usableType = "";
    if ((type != "home") && (type != "work")){
            usableType = "other";
        }
        else{
            usableType = type;
        }
    this.type = usableType;
/*    this.type = function(){
        if ((type != "home") && (type != "work")){
            return "other";
        }
        else{
            return type;
        }
    }
*/    
}

Person.prototype.addEmail = function (address, type){
    this.emails.push(new Email(address,type));
}

var joe = new Person("joe", "smith");
joe.addEmail("joesmith@fds.ca", "home");
joe.addEmail("johnbellushi@fox.ca", "work");
joe.addEmail("kingfox@lo.com", "bell");
console.log(joe);

var ling = new Person("Ling", "Ming");
ling.addEmail("linger@blah.com", "away");
ling.addEmail("ling3fd@blah.com", "hiome");
ling.addEmail("linger322@blah.com", "home");
console.log(ling);
