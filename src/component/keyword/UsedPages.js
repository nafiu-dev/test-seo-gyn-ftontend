import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import SearchState from '../../context/search/SearchContext'
import AuthContext from '../../context/auth/AuthContext'

const UsedPages = () => {
    const {token} = useContext(AuthContext)

    const {pageused} = useContext(SearchState)

    return (
        <div className="keyword_used__pages">
            <div className="keyword_used_pages__list">
                <div className="keywordList__heading">
                    <h3>pages use keyword</h3>
                </div>
                {
                    token ? (
                        <ul>
                            {
                                pageused ? pageused.map((value,index) => {
                                    return <li key={index}><a target="blank" href={`https://${value}`}>{value}</a></li>
                                }) : []
                            }
                        </ul>
                    ):(
                        <ul>
                            {
                                pageused ? pageused.slice(0,4).map((value,index) => {
                                    return <li key={index}><a target="blank" href={`https://${value}`}>{value}</a></li>
                                }) : []
                            }
                            <li className="sign_in__load"><Link to="/sign-in"> <span>sign in</span> to load more </Link>  </li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default UsedPages
