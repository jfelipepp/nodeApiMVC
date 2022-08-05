
exports.post = (req, res, next) => {
    res.status(201).send("Rota Post");
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send('Rota Put com id ->> ' + id);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send("rota delete com ID! --> " + id);
};

exports.get = (req, res, next) => {
    res.status(201).send("Rota Get");
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send("Rota GET com id! -->" + id);

}
