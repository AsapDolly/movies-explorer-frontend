import React from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
    const history = useHistory();

    return (
        <section className='page-not-found'>
            <h1 className="page-not-found__title">404</h1>
            <p className="page-not-found__text">Страница не найдена</p>
            <a className="button page-not-found__link" onClick={() => history.goBack()}>Назад</a>
        </section>
    )
}

export default PageNotFound;