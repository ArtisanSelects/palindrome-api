import { check, validationResult } from 'express-validator';

export default class APIController {

    static palindrome_get = [
        check('palindrome').trim().escape().isLength({ min: 1 }),
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.json({ response: 'ERROR: No palindrome supplied.' });
            } else {
                res.json({ response: req.params.palindrome === req.params.palindrome.split("").reverse().join("") });
            }     
        }
    ];

}