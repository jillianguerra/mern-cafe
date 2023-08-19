import { useState } from 'react'
import Stars from '../Stars/Stars'
import styles from './ReviewForm.module.scss'

export default function ReviewForm({ pokemonId, addReview }) {
    const [formData, setFormData] = useState({
        body: '',
        rating: 0,
        pokemon: pokemonId
    })
    const [error, setError] = useState('')
    const [complete, setComplete] = useState(false)
    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            if (formData.rating && formData.body) {
                addReview(pokemonId, formData)
                setComplete(true)
            }
        } catch (error) {
            setError('Oops! Something went wrong!')
        }
    }
    const handleChange = (e, idx) => {
        idx ?
        setFormData({...formData, rating: idx}) :
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const completed = () => (
        <div className={styles.ReviewForm}>
            <h3 className={styles.completed}>Thanks for the review!</h3>
        </div>
    )
    const showForm = () => (
            <form className={styles.ReviewForm} onSubmit={(e) => handleSubmit(e)}>
                <Stars
                    formData={formData}
                    handleChange={handleChange}
                />
                <label className={styles.label}>Tell us your thoughts: </label>
                <input
                    name="body"
                    value={formData.body}
                    onChange={(e) => handleChange(e)}
                    className={styles.input}
                />
                <input className="button" type="submit" value="Submit" />
                <p className="error-message">&nbsp;{error}</p>
            </form>
    )
    return complete ? completed() : showForm()
}