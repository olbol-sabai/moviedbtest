import React, { useEffect, useState } from 'react';
import LandingImage from '../../components/LandingImage/LandingImage';
import { MovieDBBaseAxios } from '../../axios';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import classes from './FilmDetail.module.scss';
import RecommendedMovies from '../../components/RecommendedMovies/RecommendedMovies';
import FilmDetailSummary from '../../components/FilmDetailSummary/FilmDetailSummary';
import Credits from '../../components/Credits/Credits';
import Menu from '../../components/Menu/Menu';
import { motion } from 'framer-motion';


const API_KEY = 'f9c3ae91ea7132ed424564f73bb859e0'

const transition = { duration: .4 }

const entryVariants = {
    initial: { opacity: 0, transition },
    animate: { opacity: 1, transition },
    exit: { opacity: 0, transition: { duration: 0 } },
}

const FilmDetail = () => {

    const location = useLocation()
    const history = useHistory()
    const [firstResult, setFirstResult] = useState({})
    const [recommended, setRecommended] = useState([])
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const params = useParams()
    const [filmID, setFilmID] = useState(null)
    const [filmLoaded, setFilmLoaded] = useState(false)

    useEffect(() => {
        setFilmLoaded(false)
        setFilmID(params.id)
    }, [params]);


    useEffect(() => {
        if (filmID) {
            loadInitialDataHandler()
            loadRecommended()
            loadCredits()
        }
    }, [filmID]);


    const loadInitialDataHandler = async () => {
        try {
            const res = await MovieDBBaseAxios.get(`/movie/${filmID}?api_key=${API_KEY}`)
            setFirstResult(res.data)
            setFilmLoaded(true)
        } catch (error) {
            history.push({ pathname: '/home' })
        }
    }

    const loadRecommended = async () => {
        try {
            const res = await MovieDBBaseAxios.get(`/movie/${filmID}/recommendations?api_key=${API_KEY}`)
            setRecommended(res.data.results.slice(0, 6))
        } catch (error) {
            history.push({ pathname: '/home' })
        }
    }

    const loadCredits = async () => {
        try {
            const res = await MovieDBBaseAxios.get(`/movie/${filmID}/credits?api_key=${API_KEY}`)
            setCrew(res.data.crew.slice(0, 4))
            setCast(res.data.cast.slice(0, 4))
        } catch (error) {
            history.push({ pathname: '/home' })
        }
    }


    return (
        <motion.div
            variants={entryVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={classes.FilmDetailBackdrop}>
            <Menu />
            <motion.div
                variants={entryVariants}
            >
                {filmLoaded &&
                    (<LandingImage resultData={firstResult} />)}
            </motion.div>
            <div className={classes.FilmDetailContainer}>
                {firstResult.id && (
                    <FilmDetailSummary detailData={firstResult} />)}
                <div className={classes.CreditsContainer}>
                    <Credits list={cast} title="Cast" />
                    <Credits list={crew} title="Crew" />
                </div>
                <div className={classes.RecommendedMoviesContainer}>
                    <RecommendedMovies movies={recommended} />
                </div>
            </div>
        </motion.div>
    )
}

export default FilmDetail;