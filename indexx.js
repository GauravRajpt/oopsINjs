class Account {
    constructor (initialbalance){
        //private property
        this._balance= initialbalance || 0;
        console.log(initialbalance);
    }

    //public methods
    deposit(amount){
        if(amount>0){
            this._balance+=amount;
            console.log(amount," deposited new blaance is:"   , this._balance);
        }
        else{
            console.log("invalid amount trying to deposit")
        }
    };

    widthdraw(amount){
        if(amount>0 && amount <=this._balance){
            this._balance-=amount;
            console.log(`${amount} widthdrawn , ${this._balance} is remaning as balance`)
        }
    }
    
}

const myaccount= new Account(100);
myaccount.deposit(.1);
myaccount._balance+=5;
console.log(myaccount._balance);
myaccount.deposit(5)