import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile({handleLogout, handleChangeUserData}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [data, setData] = React.useState({
        email: '',
        name: '',
    });

    React.useEffect(() => {
        setData({email: currentUser.email, name: currentUser.name});
    }, []);

    const [isEdit, setIsEdit] = React.useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        });

    }

    const handleEditProfile = () => {
        setIsEdit(true);
    }

    const handleSave = () => {
        handleChangeUserData(data);
        setIsEdit(false);
    }

    return (
        <section className='profile'>

            <h1 className="profile__title">Привет, {data.name}!</h1>
            <div className="profile__input-list">

                <label className="profile__input-label">
                    Имя
                    <input className="profile__input"
                           id="edit-name"
                           name="name"
                           type="text"
                           required
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
                           type="text"
                           required
                           minLength="2"
                           maxLength="40"
                           value={data.email}
                           onChange={handleChange}
                           readOnly={!isEdit}
                    />
                    <div className="profile__input-label_error">Что-то пошло не так...</div>
                </label>

            </div>

            {
                isEdit
                    ?
                    <button className="profile__save-button" onClick={handleSave}>Сохранить</button>
                    :
                    <div className='profile__bottom-buttons'>
                        <button className="profile__button" onClick={handleEditProfile}>Редактировать</button>
                        <button className="profile__button profile__button_color_red" onClick={handleLogout}>
                            Выйти из аккаунта
                        </button>
                    </div>
            }

        </section>
    )
}

export default Profile;