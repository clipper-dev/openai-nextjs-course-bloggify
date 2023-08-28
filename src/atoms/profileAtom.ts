import {atom} from 'recoil';

export const profileAtom = atom({
    key: 'profileAtom',
    default: {
        credits: 0,
        uid: ""
    } as Profile
})