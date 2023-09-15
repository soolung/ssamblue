export type Authority = 'ROLE_USER' | 'ROLE_ADMIN'

export interface User {
    name: string
    authority: Authority | ''
}
