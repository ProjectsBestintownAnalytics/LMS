const Express = require("express");
const router = Express.Router();
const Controller = require("../controller");


//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    next();
});



router.post("/v1/admin/createAdmin",(req, res)=>{
    Controller.adminController.createAdmin(req,(err,data) =>{
        if(err){
            res.status(err.statusCode).send(err);
        }
        res.send(data);
    });
});


router.post("/v1/admin/getAdmin",(req, res)=>{
    Controller.adminController.getAdmin(req,(err,data) =>{
        if(err){
            res.status(err.statusCode).send(err);
        }
        res.send(data);
    });
});


module.exports = router;