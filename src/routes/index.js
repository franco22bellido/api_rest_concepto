const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    const data = {
        tittle: "Bienvenido"
    }
    res.json(data);
});

module.exports = router;