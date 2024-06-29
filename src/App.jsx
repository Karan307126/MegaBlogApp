import "./App.css";
import conf from "./config/config";

function App() {
  console.log("AppWrite URL: ", conf.appWriteURL);
  console.log("AppWrite ProjectId: ", conf.appWriteProjectId);
  console.log("AppWrite DatabaseId: ", conf.appWriteDatabaseId);
  console.log("AppWrite CollectionId: ", conf.appWriteCollectionId);
  console.log("AppWrite BucketId: ", conf.appWriteBucketId);
  return (
    <>
      <h1>A blog app with AppWrite</h1>
    </>
  );
}

export default App;
