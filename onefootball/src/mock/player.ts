import { Player, Profile } from "src/app/interface/player";

export const mockPlayer: Player = {
    "id": "fabio",
    "active": true,
    "profile-id": "profile-111.json"
}
export const mockProfile: Profile = {
    player: {
        "id": "fabio",
        "active": true,
        "profile-id": "profile-111.json"
    },
    "id": 'fabio',
    "profile": {
        "age": 33,
        "role": 'centre-back',
        "team": 'Juventus',
        "picture": 'https://dummyimage.com/170x170/eead47/000000&text=Fabio',
    },
    stats: []
}
