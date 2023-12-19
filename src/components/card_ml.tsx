interface Hero {
    hero_id: number
    hero_name: string
    hero_role: string
    hero_specially: string
}

export default function CardMl(props: Hero) {
    return (
        <div className="card p-3 mb-3">
            <div className="card-body">
                <h5 className="m-0">{props.hero_name}</h5>
                <p className="m-0">{props.hero_role}</p>
                <p className="m-0">{props.hero_specially}</p>
            </div>
        </div>
    )
  }