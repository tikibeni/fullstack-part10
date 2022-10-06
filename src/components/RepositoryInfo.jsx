import RepositoryItem from './RepositoryItem'
import Githubbutton from "./Githubbutton";
import ItemSeparator from "./ItemSeparator";

const RepositoryInfo = ({ repo }) => {
    return repo ? (
        <>
            <RepositoryItem item={repo} />
            <Githubbutton item={repo} />
            <ItemSeparator />
        </>
    ) : null
}

export default RepositoryInfo
