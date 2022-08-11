export interface Player {
    'id': string
    'active': boolean
    'profile-id': string
}

export interface Profile {
    player: Player
    "id": string
    "profile": {
        "age": number
        "role": string
        "team": string
        "picture": string
    }
    stats: any
}