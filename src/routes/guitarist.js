const { Router } = require('express');
const router = Router();

let guitarrist = require('../sample.json');

//get all
router.get('/', (req, res) => {
    res.json(guitarrist);
});

//add
router.post('/', (req, res) => {
    const { artist, guitar } = req.body;

    //pseudo id auto increment
    const ultimaPosicion = guitarrist.length - 1;
    const buscarUltimoId = guitarrist[ultimaPosicion].id;
    const id = parseInt(buscarUltimoId) + 1;//id para el nuevo dato

    const newGuitarrist = { id, artist, guitar };

    //guardarlo en la pseudo base de datos
    guitarrist.push(newGuitarrist);
    res.json(guitarrist);
});

//delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;


    for (let index = 0; index < guitarrist.length; index++) {

        if (id == guitarrist[index].id) {
            guitarrist.splice(index, 1);
            console.log("se elimino el arreglo con id: " + id);
            return res.json({
                guitarrist,
                info: "se elimino el arreglo con id: "+ id
            });
        }
    }


});
//update
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { artist, guitar } = req.body;

    for (let index = 0; index < guitarrist.length; index++) {

        if (id == guitarrist[index].id) {

            guitarrist[index].artist = artist;
            guitarrist[index].guitar = guitar;

            res.json(guitarrist);
        }
    }
});

module.exports = router;