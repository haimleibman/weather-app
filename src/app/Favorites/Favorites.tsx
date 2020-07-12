import React from 'react';
import { useRecoilValue } from 'recoil';
import { FavoriteCities } from '../common/store';

const Favorites = () => {
    const favoriteCities = useRecoilValue(FavoriteCities);

    return <div>
        {favoriteCities.map(city => city.LocalizedName)}
    </div>
}

export default Favorites;