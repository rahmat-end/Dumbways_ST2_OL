export const Props: React.FC<{message: string}> = (props) => {
  return (
    <>
      <h1>{props.message}</h1>
    </>
  )
}


interface Profile {
  name: string
  age: number
}

export const Mydata: React.FC<Profile> = ({ name, age }) => {
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
    </>
  )
}