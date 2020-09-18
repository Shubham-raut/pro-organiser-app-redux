import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { getBoards, sudoBoardData } from "../../Functions/Functions";
import Loader from "../Modals/Loader/Loader";


import { connect } from 'react-redux';
import { setBoardData, setBoardFetchError } from "../../redux/Actions/Actions";


const Home = (props) => {
    const { user, loading, error, boardData,setBoardData,setBoardFetchError }=props;

  useEffect(() => {
    //Function is defined in Function
    if (user) {
      getBoards(user.email)
        .then((boardData) => {
          setBoardData(boardData);
        })
        .catch(error => setBoardFetchError(error) )
    }
    else {
      setBoardData(sudoBoardData);
    }
  }, [user]);

  return (
    <>
      {loading ?
        <Loader /> :
        <>
          {
            user ?
              < p className={styles.para}>Boards</p> :
              <p className={styles.para}>Boards</p>
          }
          {boardData.length === 0 && (
            <p className={styles.emptyMsg}>You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.</p>
          )}

          <div className={styles.ctrBoard}>
            {boardData.map((x) => (
              <Link
                className={styles.btnBoard}
                to={{
                  pathname: `/board/${x.id}`,
                  state: {
                    id: x.id,
                    boardName: x.boardName,
                    teamMembers: x.teamMembers,
                  },
                }}
                key={x.id}
              >
                {x.boardName}
              </Link>
            ))}
          </div>

          {
            user ?
              null :
              <p className={styles.para}>
                <Link style={{ color: 'blueviolet' }} to="/login">Login </Link>
                 to access all features
              </p>
          }

        </>
      }
    </>
  )
}
const mapStateToProps = state => {

    return {
        user: state.user,
        loading: state.loading,
        error: state.error,
        boardData:state.boardData, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBoardData: (obj) => dispatch(setBoardData(obj)),
        setBoardFetchError:(obj)=>dispatch(setBoardFetchError(obj)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
