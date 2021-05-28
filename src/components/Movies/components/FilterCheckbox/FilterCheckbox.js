import React from 'react';

function FilterCheckbox({isShort, setIsShort}) {

    const handleChange = (e) => {
        setIsShort(e.target.checked);
    }

    return (
        <div className="filter-checkbox">
            <input className="filter-checkbox__checkbox" type="checkbox" onChange={handleChange} checked={isShort}/>
            <label className="filter-checkbox__label">Короткометражки</label>
        </div>

    )
}

export default FilterCheckbox;