import express from 'express'
import { isInteger, isString } from 'lodash'

const logger = (req: express.Request, res: express.Response, next: Function): void => {
    const list_image = ['beautifulbird', 'blackyellowbird', 'bluegreenbird']
    let valid_name = `${req.query.filename}`
    if (isInteger(Number(req.query.width)) == true && isInteger(Number(req.query.height)) == true) {
        if (list_image.includes(valid_name) == true) {
            next()
        } else {
            res.send("Image not found")
        }
    } else {
        res.send("Wrong type input")
    }
}

export default logger
