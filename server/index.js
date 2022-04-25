import jsonData from "./data"

export default class RestAPI {

    constructor(db = jsonData) {
        this.db = db;
    }

    get(url) {
        if(url === "/users"){
        let result = {db:[]};
        let db;
          db = url[1].split('=')[1].split(',');
        for (let user of db) {
          result.db.push(this.getUser(user));
        }
        return result;
    }
}


post(url, dataUserAdd) {
    switch (url) {
      case '/add':
        return this.addUser(dataUserAdd);
	  case '/iou':
		let lender, borrower;
        for (const user of this.db) {
		   if (user.name === dataUserAdd.lender) {
              lender = user;
              lender.balance += dataUserAdd.amount;
              let difference = (lender.owes[dataUserAdd.borrower] || 0) - dataUserAdd.amount;
              if (difference > 0) {
                  lender.owes[dataUserAdd.borrower] -= dataUserAdd.amount;
            }
            if (difference === 0) {
                  delete lender.owes[dataUserAdd.borrower];
            }
            if (difference < 0) {
                 delete lender.owes[dataUserAdd.borrower];
                 lender.owed_by[dataUserAdd.borrower] = lender.owed_by[dataUserAdd.borrower] || 0 - difference;
            }
         }
		}
        break;
      default:
    }
  }

    addUser(dataUserAdd) {
    for (let user of this.db) {
      if (user.name === dataUserAdd.name) return user;
    }
    let user = {
      name: dataUserAdd.user,
      owes: {},
      owed_by: {},
      balance: 0
    };
    this.db.push(user);
    return user;
  }
}