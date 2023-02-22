exports.create =  (req, res) =>{
    res.send({ message: "create handler"});
};

exports.findAll = (req , res)=>{
    res.send({ message: "findAll handler"});
}

exports.findOne = (red, res) => {
    res.send({ message: "dinfOne handler"});
};
exports.update = (req, res)=> {
    res.send ({ message: " update handler" });
};

exports.delete = (req, res) =>{
    res.send({ message: "delete handler"});
};

exports.deleteAll = (req, res) =>{
    res.send({message: "deleteAll handler"});
};

exports.findAllFavorite = (req, res)=> {
    res.send({ message: "findAllFavorite handler"});
};

