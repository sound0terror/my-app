import {useCallback, useState} from 'react';

export const useArray = (initArr) => {
    const [arr, setArr] = useState(initArr);

    arr.add = useCallback(item => setArr(arr => [...arr], item), []);
    arr.clear = useCallback(() => setArr([]), []);
    arr.removeById = useCallback(id => setArr(arr => arr.filter(item => item && item.id !== id)), []);
    arr.removeByIndex = useCallback(index => setArr(arr => index < arr.length ? arr.splice(index, 1) : arr), []);

    return [arr, setArr];
}