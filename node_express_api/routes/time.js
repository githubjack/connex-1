import express from 'express';

const router = express.Router();

const epochs = [{
    id: 1,
    description: "The Current Unix Timestamp seconds since Jan 01 1970. (UTC)",
    translation: "09/19/2020 @ 2:33pm (UTC)",
    type: 1600526032
}, {
    id: 2,
    description: "The Current Unix Timestamp seconds since Jan 01 1970. (UTC)",
    translation: "09/19/2020 @ 2:45pm (UTC)",
    type: 1600526719
}, {
    id: 3,
    description: "The Current Unix Timestamp seconds since Jan 01 1970. (UTC)",
    translation: "09/19/2020 @ 3:02pm (UTC)",
    type: 1600527722
}]
//get routes starting with /time 
router.get('/', (req, res) => {
    console.log(epochs);
    res.send(epochs);
    //res.send('Hello Co');
});


export default router;