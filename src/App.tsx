import { CSSProperties } from "react"

type GreetData = {
  name: string,
  messageCount?: number,
  isLoggedIn: boolean
}

export const Greet = ({name, messageCount, isLoggedIn}:GreetData) => {
  // const {messageCount = 0} = props
  return <div className="greet">
 {isLoggedIn? <h2>Welcome {name}! You have {messageCount} unread messages.</h2>: <h2> Welcome Back</h2>}
</div>
}

type PersonData = {
  names: {
    First: string
    Last: string
  }
}

const names = {
  First: 'Timineri',
  Last: 'Okoko'
}

export const Person = ({names}: PersonData) => {
  return <div className="person">{names.First} {names.Last}</div>
}

type PersonListData = {
  nameList: {
    first: string
    last: string
  }[]
}

const nameList = [
  {
    first: 'Bruce',
    last: 'Wayne'
  },
  {
    first: 'Clark',
    last: 'Kent'
  },
  {
    first: 'Princess',
    last: 'Diana'
  }
]

export const PersonList = ({nameList}:PersonListData) => {
  return <div className="personList">
    {nameList.map((name)=>{
      return <h2>{name.first} {name.last}</h2>
    })}
  </div>
}

type StatusData = {
  status: 'Loading' | 'Error' | 'Success'
}

export const Status = ({status}:StatusData) => {
  let message
  if (status === 'Loading') {
    message = 'Loading...'
  } else if(status === 'Success'){
    message = 'Data Fetched Successfully'
  } else if( status === 'Error'){
    message = 'Error Fetching Data'
  }
  return <div>
    <h2>{message}</h2>
  </div>
}

type HeadingData = {
  children: string
}

export const Heading = ({children}:HeadingData) => {
  return <h1>{children}</h1>
}

type SubHeadingData = {
  children: React.ReactNode
}

export const SubHeading = ({children}:SubHeadingData) => {
  return <div>{children}</div>
}

type ButtonData = {
  handleClick: (e:React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const ButtonClick = ({handleClick}:ButtonData) => {
  return <button onClick={(e) => handleClick(e, 1)}>Click!</button>
}

type InputData = {
  value: string
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const InputElement = ({value, handleChange}:InputData) => {
  return <input type="text" value={value} onChange={handleChange} />
}

type StyleData ={
  style: CSSProperties
}

export const Styled = ({style}:StyleData) => {
  return <h2 style={style}>I have a Style!</h2>
}

export const App = () => {
  return <div>
    <Heading>Welcome to TypeScript!</Heading>
    <SubHeading><Heading>A Superset of JavaScript</Heading></SubHeading>
    <Styled style={{color: 'red'}}/>
    <Styled style={{color: 'blue', border: ' 1px solid black'}}/>
    <Greet name="Timineri"  isLoggedIn={true}/>
    <Person names={names}/>
    <PersonList nameList = {nameList}/>
    <Status status={'Error'}/>
    <ButtonClick handleClick={(e, id) => console.log(e, id)}/>
    <InputElement value="" handleChange={e=>console.log(e)}/>
  </div>
}











