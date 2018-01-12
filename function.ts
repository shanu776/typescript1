function greed(firstname:string,lastname?:string){
    console.log("firstname is "+firstname+" lastname is "+lastname);
}

function greednotreq(firstname:string,lastname:string="empty"){
    console.log("firstname is "+firstname+" lastname is "+lastname);
}

greed("shanu");
greednotreq("shanu","singh");