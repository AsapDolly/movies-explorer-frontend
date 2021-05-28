import React, {useCallback} from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";

function Profile({handleLogout, handleChangeUserData}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [data, setData] = React.useState({
        email: '',
        name: '',
    });

    const [errors, setErrors] = React.useState({
        email: '',
        name: '',
    });

    React.useEffect(() => {
        setData({email: currentUser.email, name: currentUser.name});
    }, []);

    const [isEdit, setIsEdit] = React.useState(false);
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        });
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest("form").checkValidity());
    }

    const resetForm = useCallback(
        (newErrors = {email: '', name: ''}, newIsValid = false) => {
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setErrors, setIsValid]
    );

    const handleEditProfile = () => {
        setIsEdit(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChangeUserData(data);
        setIsEdit(false);
        resetForm();
    }

    return (
        <>
            <Header/>
            <form className='profile' onSubmit={handleSubmit} noValidate>

                <h1 className="profile__title">Привет, {data.name}!</h1>
                <div className="profile__input-list">

                    <label className="profile__input-label">
                        Имя
                        <input className="profile__input"
                               id="edit-name"
                               name="name"
                               type="text"
                               required
                               pattern="^[a-zA-ZА-Яа-яЁё\s\-]+$"
                               minLength="2"
                               maxLength="40"
                               value={data.name}
                               onChange={handleChange}
                               readOnly={!isEdit}
                        />
                    </label>

                    <label className="profile__input-label">
                        E-mail
                        <input className="profile__input"
                               id="edit-email"
                               name="email"
                               type="email"
                               required
                               minLength="2"
                               maxLength="40"
                               value={data.email}
                               onChange={handleChange}
                               readOnly={!isEdit}
                        />
                    </label>

                </div>

                <div className="profile__input-label_error">{errors.name}</div>
                <div className="profile__input-label_error">{errors.email}</div>

                {
                    isEdit
                        ?
                        <button className={`profile__save-button ${!isValid && 'profile__save-button-blocked'}`} type="submit">Сохранить</button>
                        :
                        <div className='profile__bottom-buttons'>
                            <button className="profile__button" onClick={handleEditProfile}>Редактировать</button>
                            <button className="profile__button profile__button_color_red" onClick={handleLogout}>
                                Выйти из аккаунта
                            </button>
                        </div>
                }

            </form>
        </>
    )
}

export default Profile;