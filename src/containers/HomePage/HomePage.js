import React, { useEffect, useState } from 'react';
import { MovieDBBaseAxios } from '../../axios';
import { useLocation, useHistory } from 'react-router-dom';
import classes from './HomePage.module.scss';
import LandingImage from '../../components/LandingImage/LandingImage';
import Menu from '../../components/Menu/Menu';
import FilmGrid from '../../components/FilmGrid/FilmGrid';
import { motion } from 'framer-motion';


const API_KEY = 'f9c3ae91ea7132ed424564f73bb859e0'

const transition = { duration: .4 }

const entryVariants = {
    initial: { opacity: 0, transition },
    animate: { opacity: 1, transition },
    exit: { opacity: 0, transition: { duration: 0 } },
}

const HomePage = () => {


    const location = useLocation()
    const [pageResults, setPageResults] = useState([])
    const [firstResult, setFirstResult] = useState()
    const [searchParams, setSearchParams] = useState('popular')

    
    useEffect(() => {
        loadInitialDataHandler(searchParams)
        return () => {
            setPageResults([])
            setFirstResult()
        }
    }, [])


    useEffect(() => {
        const params = new URLSearchParams(location.search).get("category")
        if (searchParams !== params) {
            loadInitialDataHandler(params)
        }
    }, [searchParams])


    useEffect(() => {

    }, [location.search])

    

    const loadInitialDataHandler = async (params) => {
        try {
            const res = await MovieDBBaseAxios.get(`/movie/${params}?api_key=${API_KEY}`)
            setPageResults(res.data.results)
            setFirstResult(res.data.results[0])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <motion.div
            variants={entryVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={classes.HomePageBackdrop}>
            <div>
                <Menu />
            </div>
            {firstResult &&
                (<LandingImage resultData={firstResult} />)
            }
            {pageResults &&
                <FilmGrid
                    results={pageResults}
                    setSearchParams={setSearchParams} />}
        </motion.div>
    )
}

export default HomePage;