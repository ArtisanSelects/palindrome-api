import { check, validationResult } from 'express-validator';

export default class APIController {

    static palindrome_get = [
        check('palindrome').trim().escape().isLength({ min: 1 }),
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ success: false, response: 'ERROR: No palindrome supplied.' });
                return;
            }

            const isPalindrome = req.params.palindrome === req.params.palindrome.split("").reverse().join("");
            if (isPalindrome === true || isPalindrome === false) {
                res.status(200).json({ success: true, response: isPalindrome });
            } else {
                res.status(400).json({ success: true, response: 'ERROR: Unable to parse string.' });
            }    
        }
    ];

}