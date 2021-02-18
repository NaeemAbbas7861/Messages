const UsersModel=(array)=>{
for(var i=0;i<array.length;i++){
    
        delete array[i].password
}
return array;
}

module.exports=UsersModel;