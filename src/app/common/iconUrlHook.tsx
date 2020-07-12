import { useEffect, useState } from 'react';

const useIconUrl = (iconId: number) => {
    const [iconUrl, setIconUrl] = useState('');

    useEffect(() => {
        const idForUrl = iconId?.toString().length > 1 ? iconId : ("0" + iconId)
        setIconUrl(`https://developer.accuweather.com/sites/default/files/${idForUrl}-s.png`)
    }, [iconId])

    return iconUrl
}

export default useIconUrl;