interface Province {
    id: number
    name: string
}
interface Regency {
    id: number
    name: string
    provinceId: number
}
interface District {
    id: number
    name: string
    regencyId: number
}

export function SelectProvince(props: Province) {
    return (
        <option value={`${props.id}`}>{props.name}</option>
    )
}
export function SelectRegency(props: Regency) {
    return (
        <option value={`${props.id}`}>{props.name}</option>
    )
}
export function SelectDistrict(props: District) {
    return (
        <option value={`${props.id}`}>{props.name}</option>
    )
}
