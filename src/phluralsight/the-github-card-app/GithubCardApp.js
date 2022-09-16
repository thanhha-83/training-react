import { useState } from "react";
import CardList from "./CardList";
import FormSearch from './FormSearch'

// gaearon, sophiebits, sebmarkbage, bvaughn
const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

function GithubCardApp({ title }) {
  const [profiles, setProfiles] = useState(testData);
  const addNewProfile = (profileData) => {
  	setProfiles([profileData, ...profiles]);
  };
  return (
    <div>
      <div className="github-header">{title || 'The github card app'}</div>
      <FormSearch onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default GithubCardApp;