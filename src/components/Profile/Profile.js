import React from 'react';

function Profile({}) {

    React.useEffect(() => {
        setData({name: 'Виталий', email: 'pochta@yandex.ru'});
    }, []);

    const [data, setData] = React.useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        });

    }

    return (
        <section className='profile'>

            <h1 className="profile__title">Привет, {'Виталий'}!</h1>
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
                    />
                    <div className="profile__input-label_error">Что-то пошло не так...</div>
                </label>

            </div>

            <div className='profile__bottom-buttons'>
                <button className="profile__button">Редактировать</button>
                <button className="profile__button profile__button_color_red">Выйти из аккаунта
                </button>
            </div>

        </section>
    )
}

export default Profile;