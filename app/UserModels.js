const client = require('../../server');

function User(body){
    this.body = body;
}

 User.searchUsers= async () => {
    try{
        const user = await client.query("SELECT * FROM Users");
        return user.rows;
    }catch(e){
        console.log(`Houve algum erro ${e}`);
    }
};