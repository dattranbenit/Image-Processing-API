import express from 'express'
import { isInteger } from 'lodash'
import logger from '../../utilities/logger'
const images = express.Router()
const sharp = require('sharp')

const path = `${process.cwd()}/public`

images.use(express.static(path))

images.get('/images', logger, async (req, res) => {
    let width = Number(req.query.width)
    let height = Number(req.query.height)
    res.render('home', {
        title: `${req.query.filename}`,
        image: `${req.query.filename}.jpeg`,
        width: `${req.query.width}`,
        height: `${req.query.height}`
    })
    await sharp(`${process.cwd()}/public/${req.query.filename}.jpeg`).jpeg().resize(width, height).toFile(`${process.cwd()}/thumb/${req.query.filename}.${req.query.width}.${req.query.height}.thumb.jpeg`)
})



export default images